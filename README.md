# Documentation Bachelor Project

## Abstract

The primary objective of this project is to gain proficiency in utilizing Docker & Kubernetes, while exploring the feasibility of implementing centralized and decentralized security measures within a cluster. To assess the centralized method, I will examine the effectiveness of Kong Gateway (utilizing the Kong Ingress Controller addon for minikube). Meanwhile, to evaluate the decentralized approach, I will utilize the Istio addon for minikube.

## Host

### Hardware

* MacBook Pro 16“ 2019
* Processor 2,3 GHz 8-Core Intel Core i9
* Graphics AMD Radeon Pro 5500M 8GB
* Intel UHD Graphics 630 1536 MB
* Memory 32 GB 2667 MHz DDR4
* macOS Ventura 14.2.1

### Software

* minikube v1.32.0 (brew)
  * quickly sets up a local Kubernetes cluster
* Kubernetes Server v1.27.4
* Kubectl v1.29.1 (brew)
  * manages the cluster
* Docker 25.0.2
* Istioctl 1.20.2 (brew)
* Prometheus
  * gathers general metrics
* Jaeger
  * gathers metrics for traces
* Kiali
  * Dashboard for all gathered metrics (Istio specific)

## Setting up the cluster

Fetch the git [repository](https://github.com/christophkormesser/Individualprojekt)

1. Start Docker (Desktop)
2. ```minikube start --memory=8192mb --cpus=4``` -> istio requires more resources
3. To use a local image for the applications running in the cluster, issue following command: ```eval $(minikube docker-env)```
4. Now build the images:

   ```shell
   docker build -f app1/Dockerfile -t app1 .
   docker build -f app2/Dockerfile -t app2 .
   docker build -f app3/Dockerfile -t app3 .
   ```

5. Save images to files:

   ```shell
   docker save --output app1.tar app1
   docker save --output app2.tar app2
   docker save --output app3.tar app3
   ```

6. Load images into minikube:

  ```shell
  minikube image load app1.tar
  minikube image load app2.tar
  minikube image load app3.tar
  ```

### Create Deployments, Services & Service Accounts

```shell
kubectl create -f kubernetes/services.yaml
kubectl create -f kubernetes/service-accounts.yaml
kubectl create -f kubernetes/deployments.yaml
```

### Istio

Enable the addons

```shell
minikube addons enable istio-provisioner
minikube addons enable istio
```

To apply Istio to the target namespace and inject the sidecar proxies you need to create a label and restart the pods:

```shell
kubectl label namespace default istio-injection=enabled
kubectl delete pods --all -n default
```

 [Documentation](https://minikube.sigs.k8s.io/docs/handbook/addons/istio/)

 Apply the policies:

 ```shell
 kubectl apply -f kubernetes/istio/
 ```

#### (Istio) Obersavbility with Prometheus, Jaeger & Kiali

Get Prometheus up and running

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/prometheus.yaml
```

[Documentation](https://istio.io/latest/docs/ops/integrations/prometheus/#option-1-quick-start)

Get Jaeger up and running

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/jaeger.yaml
```

query url:

```http://tracing.istio-system.svc.cluster.local:80```

[Documentation](https://istio.io/latest/docs/ops/integrations/jaeger/)

Get Kiali up and running

```shell
helm install \
  --namespace istio-system \
  --set auth.strategy="anonymous" \
  --repo https://kiali.org/helm-charts \
  kiali-server \
  kiali-server
```

Get Grafana up and running

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/grafana.yaml
```

[Documentation](https://istio.io/latest/docs/ops/integrations/grafana/#option-1-quick-start)

Import the dashboard json file from `config/Requests-1703960621987.json`

## Kong

Add Gateway API CRDs

```shell
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/standard-install.yaml
```

Apply Gateway Class & Gateway Configuration

```shell
kubectl apply -f kubernetes/kong/gateway.yaml
```

Install Kong

```shell
helm repo add kong https://charts.konghq.com
helm repo update
helm install kong kong/ingress -n kong --create-namespace 
```

Test Installation (after all pods are up)

```shell
export PROXY_IP=$(kubectl get svc --namespace kong kong-gateway-proxy -o jsonpath={.spec.clusterIP})
echo $PROXY_IP
```

Copy the address and start a curl command from a pod

```shell
kubectl exec -it pod/fastapi1 -- /bin/bash
curl -i PROXY_IP
```

Create a http route & ingress controller

```shell
kubectl apply -f kubernetes/kong/httproute.yaml
kubectl apply -f kubernetes/kong/ingress.yaml
```

Test
`curl -i $PROXY_IP/action`

## Access Kong Manager

Port Forward for kong gateway pod (not controller!)

```shell
kubectl port-forward kong-gateway-pod-name :8002 -n kong
```

```http://127.0.0.1:port/```

Admin, to see info (only works with postman, not browser)

```shell
kubectl port-forward kong-gateway-pod-name 8001:8444 -n kong  
```

```https://127.0.0.1:port/```

### Use Key Auth

Enable key-auth

```shell
kubectl apply -f kubernetes/kong/key-auth/key-auth.yaml
```

Annotate all services where authorization is needed

```shell
kubectl annotate service app1 konghq.com/plugins=key-auth --overwrite
kubectl annotate service app2 konghq.com/plugins=key-auth --overwrite
kubectl annotate service app3 konghq.com/plugins=key-auth --overwrite
```

Create secret for key

```shell
kubectl apply -f kubernetes/kong/key-auth/secret-key-auth.yaml
```

Create consumer associated with the key

```shell
kubectl apply -f kubernetes/kong/key-auth/consumer.yaml
```

#### ACLs

Create ACLs

```shell
kubectl apply -f kubernetes/kong/key-auth/acl-allow.yaml
```

Annotate services to use ACLs

```shell
kubectl annotate service app1 konghq.com/plugins=key-auth,acl-allow-g1 --overwrite
kubectl annotate service app2 konghq.com/plugins=key-auth,acl-allow-g2 --overwrite
```

### JWT – not working yet

Enable JWT Plugin

```shell
kubectl apply -f kubernetes/kong/jwt/jwt.yaml
```

[Documentation](https://docs.konghq.com/kubernetes-ingress-controller/3.0.x/get-started/)

### (Kong) Observability with Prometheus & Grafana

Add Prometheus & Grafana Helm Repositories

```shell
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

Create their own namespaces

```shell
kubectl create namespace prometheus
kubectl create namespace grafana
```

Install Prometheus

```shell
helm install prometheus prometheus-community/prometheus --namespace prometheus
```

Access Prometheus

```shell
kubectl port-forward --namespace prometheus svc/prometheus-server 9090:80
```

`http://localhost:9090`

Install Grafana

```shell
helm install grafana grafana/grafana --namespace grafana
```

Access Grafana & acquire the admin password

```shell
kubectl port-forward --namespace grafana service/grafana 3000:80
```

`http://localhost:3000`

```shell
kubectl get secret --namespace grafana grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

Configure Grafana to use Prometheus

1. Go to Configuration > Data Sources in Grafana.
2. Click on "Add data source."
3. Choose Prometheus.
4. In the HTTP section, set the URL to `http://prometheus-server.prometheus.svc.cluster.local`.
5. Save and test the data source.

## Notes

### 18.12.2023

* Istio works properly
* Observability tools work properly
* Might transition from Kiali to Grafana

### 17.12.2023

* installed observability tools (jaeger, prometheus & kiali)
* tried GCP in the meanwhile, but since you need GCP Enterprise for a service mesh like Istio I chose to work with minikube again
* updating my documentation

### 22.11.2023

* Istio is installed, all pods have a sidecar/proxy
* an example mTLS policy is applied, but doesn't seem to work properly
