from utlis.load_data import load_data


def get_trace_interval(processed_file):
    data = load_data(processed_file)

    first_timestamp = float('inf')
    oldest_timestamp = float('-inf')

    for entry in data:
        if entry['startTime'] < first_timestamp:
            first_timestamp = entry['startTime']
        if entry['startTime'] > oldest_timestamp:
            oldest_timestamp = entry['startTime']


    print(f"First Timestamp: {first_timestamp}")
    print(f"Oldest Timestamp: {oldest_timestamp}")
    print(f"Time difference: {(oldest_timestamp-first_timestamp)/1000000/60:.2f} minutes")

if __name__ == '__main__':
    processed_file = input("Provide the relative file path to the processed file: ")
    get_trace_interval(processed_file=processed_file)