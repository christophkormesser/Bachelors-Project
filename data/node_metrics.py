from kubernetes import client, config
from datetime import datetime
from time import sleep
from sys import argv

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
    
    # Creating instance of for the custom objects api
    api_instance = client.CustomObjectsApi()

    start_time = datetime.now().timestamp()
    current_time = start_time

    while current_time < (start_time + elapsing_time * 60):
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

                print(f"Node: {node_name}, CPU Usage: {cpu_usage_nano}n ({cpu_usage_percentage:.2f}%), Memory Usage: {memory_usage_ki:.2f}Ki ({memory_usage_percentage:.2f}%), Timestamp: {datetime.now().timestamp()}")

                sleep(10)
                current_time = datetime.now().timestamp()


        except client.ApiException as e:
            print("Exception when calling CustomObjectsApi->list_cluster_custom_object: %s\n" % e)
            start_time = datetime.now().timestamp()


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


if __name__ == "__main__":
    get_node_metrics()