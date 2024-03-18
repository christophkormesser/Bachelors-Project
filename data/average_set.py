import json

# Function to load processed data
def load_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

file_path = 'data/processed/istio-mtls-traces-p.json'
data = load_data(file_path)

# Calculate the average duration and response size for each source/destination combination
average_metrics = {}
for entry in data:
    key = (entry['source'], entry['destination'])
    if key not in average_metrics:
        average_metrics[key] = {'total_duration': 0, 'total_response_size': 0, 'count': 0}
    average_metrics[key]['total_duration'] += entry['duration']
    average_metrics[key]['total_response_size'] += entry['response_size']
    average_metrics[key]['count'] += 1

# Compute the average duration and response size, and store it in a new list
averaged_data = []
for key, value in average_metrics.items():
    averaged_data.append({
        'source': key[0],
        'destination': key[1],
        'average_duration': value['total_duration'] / value['count'],
        'average_response_size': value['total_response_size'] / value['count']
    })

print(averaged_data)

# Check if the status code for every same source/destination combination was the same
status_codes = {}
for entry in data:
    key = (entry['source'], entry['destination'])
    if key not in status_codes:
        status_codes[key] = set()
    status_codes[key].add(entry['status_code'])

# Determine if each combination has the same status code
status_code_consistency = {key: len(codes) == 1 for key, codes in status_codes.items()}
print(status_code_consistency)


with open('data/processed/istio-mtls-traces-average-p.json', 'w', encoding='utf-8') as f:
    json.dump(averaged_data, f, ensure_ascii=False, indent=4)