import requests
import json
from datetime import datetime, timedelta

LOOKBACK_MINUTES = 10

url = "http://localhost:16686/jaeger/api/traces"

# Calculate the time window
end_time = datetime.now()
start_time = end_time - timedelta(minutes=LOOKBACK_MINUTES)
# Format timestamps in microseconds as expected by Jaeger
end_timestamp = int(end_time.timestamp() * 1e6)
start_timestamp = int(start_time.timestamp() * 1e6)

params = {
    "end": end_timestamp,
    "start": start_timestamp,
    "service": "app2.default",
    "limit": 2000
    }

r = requests.get(url=url, params=params)
print(r.status_code)

traces = r.json()

filename = f"data/raw/traces_{start_timestamp}_{end_timestamp}.json"

with open(filename, 'w') as f:
    json.dump(traces, f, indent=4)
print(f"Saved {len(traces.get('data', []))} traces to {filename}")