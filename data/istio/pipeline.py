from node_metrics import get_node_metrics
from utils.scale_down_deployment import scale_down_deployment
from fetch_traces import fetch_traces
from extract_traces import extract_traces
from average_set import calc_averages
from get_first_and_last_ts import get_trace_interval
from average_node_metrics import calculate_averages
import logging
from datetime import datetime

def execute_pipeline(raw_file=None):

    logger = logging.getLogger(__name__)
    temp_name = f"data/istio/logs/pipeline_{int(datetime.now().timestamp())}.log"
    logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

    logger.info("Starting pipeline...")

    if raw_file == None:
        # start metric gathering
        start_time, end_time = get_node_metrics()
        logger.info("Finished metric gathering.")
        
        # scale down deployments
        logger.info("Scaling down applications...")
        deployments_to_scale_down = ['app1', 'app2', 'app3']
        for deployment_name in deployments_to_scale_down:
            scale_down_deployment(deployment_name)
        logger.info("Finished scaling down applications.")

        # fetch traces
        logger.info("Attempting to fetch traces...")
        fetch_traces(start_time=start_time, end_time=end_time)
        logger.info("Finished fetching traces.")

    # extract traces
    logger.info("Extracting traces...")
    if raw_file == None:
        raw_file = f"data/istio/traces/raw/traces_{start_time}.json"
    extract_traces(raw_file=raw_file)
    logger.info("Finished extracting traces.")

    # get averages
    logger.info("Calculating average, min & max duration...")
    processed_file = raw_file.replace("raw", "processed")
    calc_averages(processed_file=processed_file)
    logger.info("Finished calculations.")

    # get trace interval
    logger.info("Getting actual trace interval time...")
    get_trace_interval(processed_file=processed_file)

    # calculate node metric averages considering trace data time frame
    calculate_averages(f"data/istio/metrics/node_metrics-{start_time}.json", processed_file)

    logger.info("Finished pipeline.")


if __name__ == '__main__':
    # uncomment following lines if this script will be executed directly 
    #raw_file = input("Provide the relative file path to the raw file: ")
    #execute_pipeline(raw_file)

    execute_pipeline()