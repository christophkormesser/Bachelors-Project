import json
import os
from utils.load_data import load_data
from datetime import datetime
import logging
from dotenv import load_dotenv

load_dotenv()

# def read_jmeter_timestamps(jmeter_filename):
#     jmeter_data = load_data(jmeter_filename)
    
    
#     return min(timestamps), max(timestamps)

def calculate_averages(metrics_filename, earliest_ts: float, latest_ts: float, users: str):

    logger = logging.getLogger(__name__)
    temp_name = f"data/{os.getenv('ENVIRONMENT')}/logs/{os.getenv('PREFIX')}_average_node_metrics_{users}-{int(datetime.now().timestamp())}.log"
    logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

    # get time frame from collected traces
    # earliest_timestamp, latest_timestamp = read_trace_timestamps(trace_filename)
    # logger.debug(f"Earliest Timestamp: {earliest_timestamp}, Latest Timestamp: {latest_timestamp}")

    metrics_data = load_data(metrics_filename)
    
    total_cpu_usage = 0
    total_memory_usage = 0
    total_cpu_percentage = 0
    total_memory_percentage = 0
    count = 0

    for entry in metrics_data:
        timestamp = (entry.get('timestamp'))*1000 # easier to input values which are in milliseconds
        if earliest_ts <= timestamp <= latest_ts:
            cpu_usage = entry['cpu_usage']
            if cpu_usage > 101:
                logger.warning(f"Over 100%, not considering this value: {cpu_usage}")
                continue
            memory_usage = entry['memory_usage']
            cpu_usage_percentage = entry['cpu_usage_percentage']
            memory_usage_percentage = entry['memory_usage_percentage']

            if entry['cpu_usage_unit'] == 'n':
                cpu_usage = cpu_usage / 1e9  # Convert nanocores to cores

            if entry['memory_usage_unit'] == 'Ki':
                memory_usage = memory_usage / (1024**2)  # Convert KiB to GiB

            total_cpu_usage += cpu_usage
            total_memory_usage += memory_usage
            total_cpu_percentage += cpu_usage_percentage
            total_memory_percentage += memory_usage_percentage
            count += 1
    
    if count > 0:
        average_cpu_usage = total_cpu_usage / count
        average_memory_usage = total_memory_usage / count
        average_cpu_percentage = total_cpu_percentage / count
        average_memory_percentage = total_memory_percentage / count
        logger.info(f"Average CPU Usage: {average_cpu_usage} cores, Average CPU Usage Percentage: {average_cpu_percentage:.2f}%")
        logger.info(f"Average Memory Usage: {average_memory_usage} GiB, Average Memory Usage Percentage: {average_memory_percentage:.2f}%")
    else:
        logger.warning("No metrics data within the trace's timestamp range.")

    average_metrics = {
        "average_cpu_usage_in_cores": average_cpu_usage,
        "average_cpu_usage_percentage": average_cpu_percentage,
        "average_memory usage_in_GiB": average_memory_usage,
        "average_memory_usage_percentage": average_memory_percentage
    }
    
    save_to_file(average_metrics, int(metrics_data[0]["timestamp"]))


def save_to_file(metrics_instances, start_time):
    average_metrics_folder = f"data/{os.getenv('ENVIRONMENT')}/metrics/averages"
    if not os.path.exists(average_metrics_folder):
        os.makedirs(average_metrics_folder)
    file_path = os.path.join(average_metrics_folder, f"{os.getenv('PREFIX')}-average_node_metrics-{users}-{start_time}.json")
    with open(file_path, 'w') as file:
        json.dump(metrics_instances, file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    metrics_filename = input("Enter the metrics JSON file path: ")
    et = float(input("Earliest Timestamp: "))
    lt = float(input("Latest Timestamp: "))
    users = input("Users: ")
    calculate_averages(metrics_filename, earliest_ts=et, latest_ts=lt, users=users)
