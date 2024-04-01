from kubernetes import client, config
from datetime import datetime
from time import sleep
from sys import argv, exit
import json
from pydantic import BaseModel
import os
import fetch_traces
from utils.scale_down_deployment import scale_down_deployment
import logging

logger = logging.getLogger(__name__)
temp_name = f"data/istio/logs/metrics_{datetime.now().timestamp()}.log"
logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

def get_node_metrics():
    # Load kubeconfig file
    config.load_kube_config()
    elapsing_time = 8

    try:
        elapsing_time = int(argv[1])
    except Exception as e:
        logger.warning("Time interval for how many minutes this script shall run not provided: ", e)
        logger.warning("Will use default time of 8 minutes.")


    # Get CPU and Memory capacity from minikube node
    total_cpu, total_memory = get_node_capacities()

    class MetricsClass(BaseModel):
        cpu_usage: float
        cpu_usage_unit: str
        cpu_usage_percentage: float
        memory_usage: float
        memory_usage_unit: str
        memory_usage_percentage: float
        timestamp: float
    
    metrics_instances = []

    # Creating instance of for the custom objects api
    api_instance = client.CustomObjectsApi()

    start_time = int(datetime.now().timestamp())
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
                cpu_usage_raw = node['usage']['cpu']
                cpu_usage, cpu_usage_unit = cpu_usage_raw[:-1], cpu_usage_raw[-1]

                if cpu_usage_unit == 'n':  # Nanoseconds to seconds
                    cpu_usage = int(cpu_usage) / (10**9)
                elif cpu_usage_unit == 'm':  # Milliseconds to seconds
                    cpu_usage = int(cpu_usage) / 1000
                else:  # Seconds or unspecified unit
                    cpu_usage = int(cpu_usage)

                cpu_usage_percentage = (cpu_usage / total_cpu) * 100

                # Memory Usage Calculation
                memory_usage_raw = node['usage']['memory']
                memory_usage, memory_usage_unit = int(memory_usage_raw[:-2]), memory_usage_raw[-2:]
                if memory_usage_unit == 'Ki':
                    memory_usage = memory_usage * 1024  # Convert Ki to bytes
                elif memory_usage_unit == 'Mi':
                    memory_usage = memory_usage * (1024**2)  # Convert Mi to bytes
                elif memory_usage_unit == 'Gi':
                    memory_usage = memory_usage * (1024**3)  # Convert Gi to bytes
                else:  # Bytes or unspecified unit
                    memory_usage = memory_usage
                memory_usage_percentage = (memory_usage / (total_memory * 1024)) * 100  # Assuming total_memory in Ki

                timestamp = datetime.now().timestamp()
                logger.debug(f"Node: {node_name}, CPU Usage: {cpu_usage}{cpu_usage_unit} ({cpu_usage_percentage:.2f}%), Memory Usage: {memory_usage:.2f}{memory_usage_unit} ({memory_usage_percentage:.2f}%), Timestamp: {timestamp}")

                metrics_instances.append(MetricsClass(
                    cpu_usage=cpu_usage,
                    cpu_usage_unit=cpu_usage_unit,
                    cpu_usage_percentage=cpu_usage_percentage,
                    memory_usage=memory_usage,
                    memory_usage_unit=memory_usage_unit,
                    memory_usage_percentage=memory_usage_percentage,
                    timestamp=timestamp
                ))

                save_to_file(metrics_instances=metrics_instances, start_time=start_time)

                sleep(1)
                current_time = datetime.now().timestamp()


        except client.ApiException as e:
            logger.warning(f"Exception when calling CustomObjectsApi->list_cluster_custom_object: {e}\n")
            sleep(1)
            start_time = datetime.now().timestamp()
        except KeyboardInterrupt as e:
            logger.warning("\n\nScript will stop, applications will be downsized and metric data will be saved to: /metrics.")
            deployments_to_scale_down = ['app1', 'app2', 'app3']
            for deployment_name in deployments_to_scale_down:
                scale_down_deployment(deployment_name)
            # 
            save_to_file(metrics_instances=metrics_instances, start_time=start_time)
            exit(-1)

    return start_time, end_time


def get_node_capacities():
    # get node specs
    # Creating an instance of the API object
    v1 = client.CoreV1Api()
    total_cpu = 0
    total_memory = 0

    # Get all the nodes in the cluster
    nodes = v1.list_node()

    for node in nodes.items:
        # Fetch cpu and memory capacity
        capacity = node.status.capacity
        cpu = capacity.get("cpu")
        memory = capacity.get("memory")

        logger.debug(f"Node: {node.metadata.name}, CPU: {cpu}, Memory: {memory}")

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


if __name__ == "__main__":
    get_node_metrics()