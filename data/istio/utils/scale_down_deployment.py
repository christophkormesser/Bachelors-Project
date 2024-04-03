from kubernetes import client
from datetime import datetime
from dotenv import load_dotenv
import os
import logging

load_dotenv()

logger = logging.getLogger(__name__)
temp_name = f"data/istio/logs/{os.getenv('PREFIX')}_scale_down_{int(datetime.now().timestamp())}.log"
logging.basicConfig(filename=temp_name, encoding="utf-8", level=logging.DEBUG)

def scale_down_deployment(deployment_name, namespace='default'):
    apps_v1 = client.AppsV1Api()
    patch = {
        "spec": {
            "replicas": 0
        }
    } 
    apps_v1.patch_namespaced_deployment(name=deployment_name, namespace=namespace, body=patch)
    logger.info(f"Deployment {deployment_name} scaled down to 0 replicas.")