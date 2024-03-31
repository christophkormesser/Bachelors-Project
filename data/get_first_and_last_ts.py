import json
from datetime import datetime, timezone

# Function to load processed data
def load_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

file_path = 'data/traces/processed/traces_1711907323418568_1711907923418568.json'
data = load_data(file_path)

first_timestamp = float('inf')
oldest_timestamp = float('-inf')

for entry in data:
    if entry['startTime'] < first_timestamp:
        first_timestamp = entry['startTime']
    if entry['startTime'] > oldest_timestamp:
        oldest_timestamp = entry['startTime']


print(f"First Timestamp: {first_timestamp}")
print(f"Oldest Timestamp: {oldest_timestamp}")
print(f"Time difference: {(oldest_timestamp-first_timestamp)/1000000/60} minutes")