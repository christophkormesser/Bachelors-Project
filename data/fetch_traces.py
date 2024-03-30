import requests
import json



def fetch_traces(start_time, end_time):

    url = "http://localhost:16686/jaeger/api/traces"

    # Format timestamps in microseconds as expected by Jaeger
    end_timestamp = int(end_time * 1e6)
    start_timestamp = int(start_time * 1e6)

    params = {
        "end": end_timestamp,
        "start": start_timestamp,
        "service": "app2.default",
        "limit": 150000
        }

    print("Fetchting traces from Jaeger...")
    r = requests.get(url=url, params=params)
    if r.status_code == 200:
        print("Successfully fetched traces.")
    else:
        print("Failed to feftch traces, Status Code: ", r.status_code, r.reason)

    traces = r.json()

    filename = f"data/raw/traces_{start_timestamp}_{end_timestamp}.json"

    print("Saving traces to file...")
    with open(filename, 'w') as f:
        json.dump(traces, f, indent=4)
    print(f"Saved {len(traces.get('data', []))} traces to {filename}")

# for direct call
fetch_traces(start_time=0, end_time=0)