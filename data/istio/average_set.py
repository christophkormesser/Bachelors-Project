import json
from utils.load_data import load_data
import logging
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()
    

def calc_averages(processed_file):

    logger = logging.getLogger(__name__)
    temp_name = f"data/istio/logs/{os.getenv('PREFIX')}_average_{int(datetime.now().timestamp())}.log"
    logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

    data = load_data(processed_file)

    average_metrics = {}
    for entry in data:
        key = (entry['source'], entry['destination'])
        if key not in average_metrics:
            average_metrics[key] = {
                'total_duration': 0, 
                'total_response_size': 0, 
                'count': 0,
                'min_duration': float('inf'),
                'max_duration': float('-inf')
            }
        average_metrics[key]['total_duration'] += entry['duration']
        average_metrics[key]['total_response_size'] += entry['response_size']
        average_metrics[key]['count'] += 1
        # Update min and max durations
        if entry['duration'] < average_metrics[key]['min_duration']:
            average_metrics[key]['min_duration'] = entry['duration']
        if entry['duration'] > average_metrics[key]['max_duration']:
            average_metrics[key]['max_duration'] = entry['duration']

    # Prepare averaged_data structure
    averaged_data = {'details': [], 'overall': {}}
    for key, value in average_metrics.items():
        averaged_data['details'].append({
            'source': key[0],
            'destination': key[1],
            'average_duration': value['total_duration'] / value['count'],
            'average_response_size': value['total_response_size'] / value['count'],
            'min_duration': value['min_duration'],
            'max_duration': value['max_duration']
        })

    # Calculate overall averages
    total_duration = 0
    total_response_size = 0
    total_count = 0
    overall_min_duration = float('inf')
    overall_max_duration = float('-inf')

    for detail in averaged_data['details']:
        count = average_metrics[(detail['source'], detail['destination'])]['count']
        total_duration += detail['average_duration'] * count
        total_response_size += detail['average_response_size'] * count
        total_count += count

        if detail['min_duration'] < overall_min_duration:
            overall_min_duration = detail['min_duration']
        
        if detail['max_duration'] > overall_max_duration:
            overall_max_duration = detail['max_duration']

    averaged_data['overall'] = {
        'average_duration': total_duration / total_count if total_count else 0,
        'average_response_size': total_response_size / total_count if total_count else 0,
        'min_duration': overall_min_duration,
        'max_duration': overall_max_duration
    }

    logger.debug(json.dumps(averaged_data, ensure_ascii=False, indent=4))

    logger.info("Writing to file...")
    average_file = processed_file.replace("processed", "averages")
    with open(average_file, 'w', encoding='utf-8') as f:
        json.dump(averaged_data, f, ensure_ascii=False, indent=4)
    logger.info("Done.")


if __name__ == '__main__':
    processed_file = input("Provide the relative file path to the processed file: ")
    calc_averages(processed_file)
