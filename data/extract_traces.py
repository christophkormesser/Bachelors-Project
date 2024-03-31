import json
from pydantic import BaseModel

# Jaeger exported data
file_path = 'data/raw/traces_1711907323418568_1711907923418568.json'

class TraceClass(BaseModel):
    source: str
    destination: str
    status_code: int
    response_size: int
    duration: float
    startTime: float


# Function to load trace data
def load_trace_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Extract information to build TraceClass instances
def extract_trace_info(data):
    trace_instances = []

    for trace in data["data"]:
        for span in trace['spans']:
            if any(tag['key'] == 'span.kind' and tag['value'] == 'client' for tag in span['tags']):
                source_service = (trace['processes'][span['processID']]['serviceName']).split('.', 1)[0]

                # Attempt to determine the destination service more accurately
                # This example still uses operationName as part of the approach
                # For a more precise method, consider analyzing the trace structure, references, or other span-specific data
                destination_service = (span['operationName'].split(':')[0]).split('.', 1)[0]  # Placeholder for a more accurate extraction method

                # Extract other required data
                status_code = int(next((tag['value'] for tag in span['tags'] if tag['key'] == 'http.status_code'), '0'))
                response_size = int(next((tag['value'] for tag in span['tags'] if tag['key'] == 'response_size'), '0'))
                duration = float(span['duration']) / 1000.0  # Convert microseconds to milliseconds
                startTime = span['startTime']

                # Create and append TraceClass instance
                trace_instances.append(TraceClass(
                    source=source_service,
                    destination=destination_service,
                    status_code=status_code,
                    response_size=response_size,
                    duration=duration,
                    startTime=startTime
                ))
    else:
        print("no spans", )
    return trace_instances

# Load trace data from file
trace_data = load_trace_data(file_path)

# Extract information and create TraceClass instances
trace_instances = extract_trace_info(trace_data)

# Convert to dict
trace_instances_dicts = [instance.dict() for instance in trace_instances]

# Output the list of TraceClass instances
#for instance in trace_instances:
#    print(instance)

print("Lenght of list: ", len(trace_instances_dicts))

print("Writing to file...")

with open('data/processed/traces_1711907323418568_1711907923418568.json', 'w', encoding='utf-8') as f:
    json.dump(trace_instances_dicts, f, ensure_ascii=False, indent=4)
    
print("Done.")