from fastapi import FastAPI, Request
import requests
from os import getenv
# for local testing uncomment line below
# from dotenv import load_dotenv
from apscheduler.schedulers.background import BackgroundScheduler
from prometheus_fastapi_instrumentator import Instrumentator
from prometheus_client import Counter

app = FastAPI()

# Initialize Prometheus Instrumentator
Instrumentator().instrument(app).expose(app)
HEARTBEAT_COUNTER = Counter('heartbeat_requests', 
                            "Number of heartbeat requests sent", 
                            ["src_pod_name", "dst_service", "handler", "response_code"])

# Get environment variables
# for local testing uncomment line below
#load_dotenv()

nodeName = getenv("NODE_NAME", "Error - Not able to fetch env")
podName = getenv("POD_NAME", "Error - Not able to fetch env")
podNamespace = getenv("POD_NAMESPACE", "Error - Not able to fetch env")
podIP = getenv("POD_IP", "Error - Not able to fetch env")

# Sends request to a sepecific service
def heartbeat():
    destination_service = "fastapi2"
    handler = "/action"

    url = "http://" + destination_service + ":8001" + handler
    response = requests.get(url)
    
    HEARTBEAT_COUNTER.labels(src_pod_name=podName, dst_service=destination_service, handler=handler, response_code=response.status_code).inc()
    print(f"Heartbeat response: {response.text}")

# Scheduler setup
scheduler = BackgroundScheduler()
scheduler.add_job(heartbeat, 'interval', minutes=1)
scheduler.start()

@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()

@app.get("/")
def read_root(request: Request):
    return {"Hello " + request.client.host + "!\n",
            "You have reached:\n",
            "Node: " + nodeName + "\n",
            "Pod Name: " + podName + "\n",
            "Pod Namespace: " + podNamespace + "\n",
            "Pod IP: " + podIP + "\n\n"}

@app.get("/action")
def action(request: Request):
    return {"Request from " + request.client.host + " went through to /action!",
            "You have reached:\n",
            "Node: " + nodeName + "\n",
            "Pod Name: " + podName + "\n",
            "Pod Namespace: " + podNamespace + "\n",
            "Pod IP: " + podIP + "\n\n"}
