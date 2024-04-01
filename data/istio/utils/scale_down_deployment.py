from kubernetes import client

def scale_down_deployment(deployment_name, namespace='default'):
    apps_v1 = client.AppsV1Api()
    patch = {
        "spec": {
            "replicas": 0
        }
    } 
    apps_v1.patch_namespaced_deployment(name=deployment_name, namespace=namespace, body=patch)
    print(f"Deployment {deployment_name} scaled down to 0 replicas.")