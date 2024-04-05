from kubernetes import client, config
from datetime import datetime
from time import sleep
from sys import argv, exit
import json
import os
import logging
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)
temp_name = f"data/{os.getenv('ENVIRONMENT')}/logs/{os.getenv('PREFIX')}_metrics_{int(datetime.now().timestamp())}.log"
logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

def get_node_metrics():
    config.load_kube_config()
    elapsing_time = 15

    try:
        elapsing_time = int(argv[1])
    except Exception as e:
        logger.warning(f"Time interval for how many minutes this script shall run not provided: {e}")
        logger.warning("Will use default time of 15 minutes.")

    total_cpu, total_memory_ki = get_node_capacities()  # total_memory is in Ki

    metrics_instances = []
    api_instance = client.CustomObjectsApi()

    start_time = int(datetime.now().timestamp())
    current_time = start_time
    end_time = start_time + elapsing_time * 60

    while current_time < end_time:
        try:
            api_response = api_instance.list_cluster_custom_object(group="metrics.k8s.io", version="v1beta1", plural="nodes")
            for node in api_response['items']:
                node_name = node['metadata']['name']
                cpu_usage_raw = node['usage']['cpu']
                cpu_usage, cpu_usage_unit = cpu_usage_raw[:-1], cpu_usage_raw[-1]

                # Converting CPU usage to cores
                cpu_usage = int(cpu_usage) / (10**9) if cpu_usage_unit == 'n' else int(cpu_usage)

                cpu_usage_percentage = (cpu_usage / total_cpu) * 100

                # Memory Usage Calculation
                memory_usage_raw = node['usage']['memory']
                memory_usage, memory_usage_unit = int(memory_usage_raw[:-2]), memory_usage_raw[-2:]
                memory_usage_ki = memory_usage  # Assuming usage is already in KiB, no conversion needed for percentage calculation
                memory_usage_percentage = (memory_usage_ki / total_memory_ki) * 100

                timestamp = datetime.now().timestamp()
                logger.debug(f"Node: {node_name}, CPU Usage: {cpu_usage:.9f}{cpu_usage_unit} ({cpu_usage_percentage:.2f}%), Memory Usage: {memory_usage_ki:.2f}Ki ({memory_usage_percentage:.2f}%), Timestamp: {timestamp}")

                metrics_instances.append({
                    'cpu_usage': cpu_usage,
                    'cpu_usage_unit': 'cores',  # Adjusted unit to 'cores' for clarity
                    'cpu_usage_percentage': cpu_usage_percentage,
                    'memory_usage': memory_usage_ki,
                    'memory_usage_unit': 'Ki',
                    'memory_usage_percentage': memory_usage_percentage,
                    'timestamp': timestamp
                })

            save_to_file(metrics_instances=metrics_instances, start_time=start_time)
            sleep(10)  # minimum resolution for metrics-server
            current_time = int(datetime.now().timestamp())

        except client.ApiException as e:
            logger.error(f"Exception when calling CustomObjectsApi->list_cluster_custom_object: {e}\n")
            sleep(1)
            current_time = int(datetime.now().timestamp())
        except KeyboardInterrupt:
            logger.info("\nStopping script. Saving data...")
            save_to_file(metrics_instances=metrics_instances, start_time=start_time)
            exit()
            
    return start_time, end_time

def get_node_capacities():
    v1 = client.CoreV1Api()
    total_cpu = 0
    total_memory_ki = 0  # Ensure memory is being interpreted in Kibibytes

    nodes = v1.list_node()
    for node in nodes.items:
        capacity = node.status.capacity
        cpu = capacity.get("cpu")
        memory_ki = capacity.get("memory")
        total_cpu += int(cpu)
        total_memory_ki += int(memory_ki[:-2])  # Directly interpret as Kibibytes, assuming 'Ki' suffix

    logger.debug(f"Total CPU: {total_cpu}, Total Memory: {total_memory_ki}Ki")
    return total_cpu, total_memory_ki

# Modified save_to_file function to use instances directly without converting to a Pydantic model
def save_to_file(metrics_instances, start_time):
    metrics_folder = f"data/{os.getenv('ENVIRONMENT')}/metrics"
    if not os.path.exists(metrics_folder):
        os.makedirs(metrics_folder)
    file_path = os.path.join(metrics_folder, f"{os.getenv('PREFIX')}_node_metrics-{start_time}.json")
    with open(file_path, 'w') as file:
        json.dump(metrics_instances, file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    get_node_metrics()
