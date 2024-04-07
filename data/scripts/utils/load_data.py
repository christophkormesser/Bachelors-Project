import json

def load_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)