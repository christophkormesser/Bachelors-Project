import json
from utils.load_data import load_data
    

def calc_averages(processed_file):
    data = load_data(processed_file)

    # Calculate the average duration, response size and track min/max durations for each source/destination combination
    average_metrics = {}
    for entry in data:
        key = (entry['source'], entry['destination'])
        if key not in average_metrics:
            average_metrics[key] = {
                'total_duration': 0, 
                'total_response_size': 0, 
                'count': 0,
                'min_duration': float('inf'),
                'timestamp_min_duration': float,
                'max_duration': float('-inf'),
                'timestamp_max_duration': float
                }
        average_metrics[key]['total_duration'] += entry['duration']
        average_metrics[key]['total_response_size'] += entry['response_size']
        average_metrics[key]['count'] += 1
        # Update min and max durations
        if entry['duration'] < average_metrics[key]['min_duration']:
            average_metrics[key]['min_duration'] = entry['duration']
            average_metrics[key]['timestamp_min_duration'] = entry['startTime']
        if entry['duration'] > average_metrics[key]['max_duration']:
            average_metrics[key]['max_duration'] = entry['duration']
            average_metrics[key]['timestamp_max_duration'] = entry['startTime']
    # Compute the average duration, response size and  and store it in a new list
    averaged_data = []
    for key, value in average_metrics.items():
        averaged_data.append({
            'source': key[0],
            'destination': key[1],
            'average_duration': value['total_duration'] / value['count'],
            'average_response_size': value['total_response_size'] / value['count'],
            'min_duration': value['min_duration'],
            'timestamp_min_duration': value['timestamp_min_duration'],
            'max_duration': value['max_duration'],
            'timestamp_max_duration': value['timestamp_max_duration']
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

    print("Writing to file...")
    average_file = processed_file.replace("processed", "averages")
    with open(file=average_file, mode='w', encoding='utf-8') as f:
        json.dump(averaged_data, f, ensure_ascii=False, indent=4)
    print("Done.")


if __name__ == '__main__':
    processed_file = input("Provide the relative file path to the processed file: ")
    calc_averages(processed_file)