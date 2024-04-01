from utils.load_data import load_data
from datetime import datetime
import logging

logger = logging.getLogger(__name__)
temp_name = f"data/istio/logs/interval_{datetime.now().timestamp()}.log"
logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)


def get_trace_interval(processed_file):
    data = load_data(processed_file)

    first_timestamp = float('inf')
    oldest_timestamp = float('-inf')

    for entry in data:
        if entry['startTime'] < first_timestamp:
            first_timestamp = entry['startTime']
        if entry['startTime'] > oldest_timestamp:
            oldest_timestamp = entry['startTime']


    logger.info(f"First Timestamp: {first_timestamp}")
    logger.info(f"Oldest Timestamp: {oldest_timestamp}")
    logger.info(f"Time difference: {(oldest_timestamp-first_timestamp)/1000000/60:.2f} minutes")

if __name__ == '__main__':
    processed_file = input("Provide the relative file path to the processed file: ")
    get_trace_interval(processed_file=processed_file)