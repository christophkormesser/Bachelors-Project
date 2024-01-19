from fastapi import FastAPI, Request
import requests
from os import getenv
# for local testing uncomment line below
# from dotenv import load_dotenv
from apscheduler.schedulers.background import BackgroundScheduler
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI()

# Initialize Prometheus Instrumentator
Instrumentator().instrument(app).expose(app)

# Get environment variables
# for local testing uncomment line below
#load_dotenv()

nodeName = getenv("NODE_NAME", "Error - Not able to fetch env")
podName = getenv("POD_NAME", "Error - Not able to fetch env")
podNamespace = getenv("POD_NAMESPACE", "Error - Not able to fetch env")
podIP = getenv("POD_IP", "Error - Not able to fetch env")

# Sends request to a sepecific service
def heartbeat():
    url = "http://fastapi2:8001/action"
    response = requests.get(url)
    # You can log the response or perform other actions as needed
    print(f"Heartbeat response: {response.status_code}")

# Scheduler setup
scheduler = BackgroundScheduler()
scheduler.add_job(heartbeat, 'interval', minutes=1)
scheduler.start()

@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()

@app.get("/")
def read_root():
    return {"Welcome to my project": "Christoph Kormesser",
            "Docs:": "http://<servicename>:8001" + app.docs_url,
            "Node: ": nodeName,
            "Pod Name: ": podName,
            "Pod Namespace: ": podNamespace,
            "Pod IP: ": podIP}

@app.get("/action")
def action(request: Request):
    return {"Request from " + request.client.host + " went through!",
            "Node: " + nodeName,
            "Pod Name: " + podName,
            "Pod Namespace: " + podNamespace,
            "Pod IP: " + podIP}
