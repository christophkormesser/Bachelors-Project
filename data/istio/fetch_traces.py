import requests
import json
from datetime import datetime
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)
temp_name = f"data/istio/logs/{os.getenv('PREFIX')}_fetch_traces_{int(datetime.now().timestamp())}.log"
logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)


def fetch_traces(start_time, end_time):

    url = "http://localhost:16686/jaeger/api/traces"

    # Format timestamps in microseconds as expected by Jaeger
    end_timestamp = int(end_time * 1e6)
    start_timestamp = int(start_time * 1e6)

    params = {
        "end": end_timestamp,
        "start": start_timestamp,
        "service": "app2.default",
        "limit": 160000
        }

    logger.info(f"Attempting to fetch {params['limit']} traces from Jaeger...")
    r = requests.get(url=url, params=params)
    if r.status_code >= 200 or r.status_code < 219:
        logger.info("Successfully fetched traces.")
    else:
        logger.error("Failed to feftch traces, Status Code: ", r.status_code, r.reason)

    traces = r.json()

    filename = f"data/istio/traces/raw/{os.getenv('PREFIX')}_traces_{start_time}.json"

    logger.info("Saving traces to file...")
    with open(filename, 'w') as f:
        json.dump(traces, f, indent=4)
    logger.info(f"Saved {len(traces.get('data', []))} traces to {filename}")


if __name__ == "__main__":
    now = datetime.now().timestamp()
    # fetch traces from now till 8 minutes before
    fetch_traces(start_time=now-8*60, end_time=now)
