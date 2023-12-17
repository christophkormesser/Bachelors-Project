from fastapi import FastAPI, Request

app = FastAPI()


@app.get("/")
def read_root():
    return {"Welcome to my project": "Christoph Kormesser",
            "Docs:": "http://servicename:8001" + app.docs_url}

@app.get("/action")
def action(request: Request):

    return {"Request from " + request.client.host + " went through!"}
