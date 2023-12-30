from fastapi import FastAPI, Request
import requests
from apscheduler.schedulers.background import BackgroundScheduler

app = FastAPI()

def heartbeat():
    # Replace with the URL of the service you want to call
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
            "Docs:": "http://<servicename>:8001" + app.docs_url}

@app.get("/action")
def action(request: Request):
    return {"Request from " + request.client.host + " went through!"}
