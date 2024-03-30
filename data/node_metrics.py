from kubernetes import client, config
from datetime import datetime
from time import sleep
from sys import argv, exit
import json
from pydantic import BaseModel
import os
import fetch_traces

def get_node_metrics():
    # Load kubeconfig file
    config.load_kube_config()
    elapsing_time = 10

    try:
        elapsing_time = int(argv[1])
    except Exception as e:
        print("Warning: Time interval for how many minutes this script shall run not provided: ", e)
        print("Will use default time of 10 minutes.")


    # Get CPU and Memory capacity from minikube node
    total_cpu, total_memory = get_node_capacities()

    class MetricsClass(BaseModel):
        cpu_usage_nano: int
        cpu_usage_percentage: float
        memory_usage_ki: float
        memory_usage_percentage: float
        timestamp: float
    
    metrics_instances = []

    # Creating instance of for the custom objects api
    api_instance = client.CustomObjectsApi()

    start_time = datetime.now().timestamp()
    current_time = start_time
    end_time = start_time + elapsing_time * 60

    while current_time < (end_time):
        try:
            api_response = api_instance.list_cluster_custom_object(
                group="metrics.k8s.io",
                version="v1beta1",
                plural="nodes",
            )

            for node in api_response['items']:
                node_name = node['metadata']['name']

                # CPU Usage Calculation
                cpu_usage_nano = int(node['usage']['cpu'].rstrip('n'))
                cpu_usage_percentage = (cpu_usage_nano / (total_cpu * 10**9)) * 100

                # Memory Usage Calculation
                memory_usage_ki = int(node['usage']['memory'].rstrip('Ki'))
                #memory_usage_mi = memory_usage_ki / 1024  # Convert Ki to MiB
                memory_usage_percentage = (memory_usage_ki / total_memory) * 100

                timestamp = datetime.now().timestamp()
                print(f"Node: {node_name}, CPU Usage: {cpu_usage_nano}n ({cpu_usage_percentage:.2f}%), Memory Usage: {memory_usage_ki:.2f}Ki ({memory_usage_percentage:.2f}%), Timestamp: {timestamp}")

                metrics_instances.append(MetricsClass(
                    cpu_usage_nano=cpu_usage_nano,
                    cpu_usage_percentage=cpu_usage_percentage,
                    memory_usage_ki=memory_usage_ki,
                    memory_usage_percentage=memory_usage_percentage,
                    timestamp=timestamp
                ))

                save_to_file(metrics_instances=metrics_instances, start_time=start_time)

                sleep(10)
                current_time = datetime.now().timestamp()


        except client.ApiException as e:
            print("Exception when calling CustomObjectsApi->list_cluster_custom_object: %s\n" % e)
            sleep(1)
            start_time = datetime.now().timestamp()
        except KeyboardInterrupt as e:
            print("\n\nScript will stop, applications will be downsized and metric data will be saved to: /metrics.")
            deployments_to_scale_down = ['app1', 'app2', 'app3']
            for deployment_name in deployments_to_scale_down:
                scale_down_deployment(deployment_name)
            # 
            save_to_file(metrics_instances=metrics_instances, start_time=start_time)
            fetch_traces.fetch_traces(start_time=start_time, end_time=end_time)

            exit(-1)

    # downscale application replicas to 0 -> gives jaeger a break and hopefully saves memory/disk space
    deployments_to_scale_down = ['app1', 'app2', 'app3']
    for deployment_name in deployments_to_scale_down:
        scale_down_deployment(deployment_name)
    fetch_traces.fetch_traces(start_time=start_time, end_time=end_time)
    print("Done.")


def get_node_capacities():
    # get node specs
    # Creating an instance of the API object
    v1 = client.CoreV1Api()
    total_cpu = 0
    total_memory = 0

    # Get all the nodes in the cluster
    nodes = v1.list_node()

    for node in nodes.items:
        # Each 'node' contains a lot of information, including capacity
        capacity = node.status.capacity
        cpu = capacity.get("cpu")
        memory = capacity.get("memory")

        print(f"Node: {node.metadata.name}, CPU: {cpu}, Memory: {memory}")

        total_cpu += int(cpu)
        total_memory += int(memory[:-2])

    return total_cpu, total_memory

def save_to_file(metrics_instances, start_time):
    # convert list to dict
    metrics_instances_dict = [instance.dict() for instance in metrics_instances]
    
    # check if metrics folder exists
    if not os.path.exists("data/metrics"):
        os.mkdir(os.getcwd() + "/data/metrics")
    # save to file
    with open("data/metrics/node_metrics-" + str(start_time) +".json", 'w') as file:
        json.dump(metrics_instances_dict, file, ensure_ascii=False, indent=4)

def scale_down_deployment(deployment_name, namespace='default'):
    apps_v1 = client.AppsV1Api()
    patch = {
        "spec": {
            "replicas": 0
        }
    } 
    apps_v1.patch_namespaced_deployment(name=deployment_name, namespace=namespace, body=patch)
    print(f"Deployment {deployment_name} scaled down to 0 replicas.")


if __name__ == "__main__":
    get_node_metrics()