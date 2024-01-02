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
* macOS Ventura 13.5.2

### Software

* minikube v1.32.0 (brew)
  * quickly sets up a local Kubernetes cluster
* Kubernetes Server v1.27.4
* Kubectl v1.28.4 (brew)
  * manages the cluster
* Docker 24.0.6 (Desktop)
* Istioctl 1.20.0 (brew)
* Prometheus
  * gathers general metrics
* Jaeger
  * gathers metrics for traces
* Kiali
  * Dashboard for all gathered metrics (Istio specific)

## Setting up the cluster

Fetch the git [repository](https://github.com/christophkormesser/Individualprojekt)

1. Start Docker (Desktop)
2. ```minikube start --memory=8192mb --cpus=4``` -> istio requires more ressources
3. To use a local image for the applications running in the cluster, issue following command: ```eval $(minikube docker-env)```
4. Now build the image: ```docker build -t fastapi .```

### Create Deployments, Services & Service Accounts

```sh
kubectl create -f kubernetes/deployments.yaml
kubectl create -f kubernetes/services.yaml
kubectl create -f kubernetes/service-accounts.yaml
```

### Istio

Enable the addons

```sh
minikube addons enable istio-provisioner
minikube addons enable istio
```

To apply Istio to the target namespace and inject the sidecar proxies you need to create a label and restart the pods:

```sh
kubectl label namespace default istio-injection=enabled
kubectl delete pods --all -n default
```

 [Documentation](https://minikube.sigs.k8s.io/docs/handbook/addons/istio/)

 Apply the policies:

 ```sh
 kubectl apply -f kubernetes/istio/
 ```

#### (Istio) Obersavbility with Prometheus, Jaeger & Kiali

Get Prometheus up and running

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/prometheus.yaml
```

[Documentation](https://istio.io/latest/docs/ops/integrations/prometheus/#option-1-quick-start)

Get Jaeger up and running

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/jaeger.yaml
```

query url:

```http://tracing.istio-system.svc.cluster.local:80```

[Documentation](https://istio.io/latest/docs/ops/integrations/jaeger/)

Get Kiali up and running

```sh
helm install \
  --namespace istio-system \
  --set auth.strategy="anonymous" \
  --repo https://kiali.org/helm-charts \
  kiali-server \
  kiali-server
```

Get Grafana up and running

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/grafana.yaml
```

[Documentaion](https://istio.io/latest/docs/ops/integrations/grafana/#option-1-quick-start)

Import the dashboard json file from `config/Requests-1703960621987.json`

## Kong

Add Gateway API CRDs

```sh
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/standard-install.yaml
```

Configure Gatway Class – needed?

```sh
kubectl apply -f kubernetes/kong/gateway.yaml
```

Install Kong

```sh
helm repo add kong https://charts.konghq.com
helm repo update
helm install kong kong/ingress -n kong --create-namespace 
```

Test Installation (after all pods are up)

```sh
export PROXY_IP=$(kubectl get svc --namespace kong kong-gateway-proxy -o jsonpath={.spec.clusterIP})
echo $PROXY_IP
```

Copy the address and start a curl command from a pod

```sh
kubectl exec -it pod/fastapi1 -- /bin/bash
curl -i PROXY_IP
```

[Documentation](https://docs.konghq.com/kubernetes-ingress-controller/3.0.x/get-started/)

### (Kong) Observability with Prometheus & Grafana

Add Prometheus & Grafana Helm Repositories

```sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

Create their own namespaces

```sh
kubectl create namespace prometheus
kubectl create namespace grafana
```

Install Prometheus

```sh
helm install prometheus prometheus-community/prometheus --namespace prometheus
```

Access Prometheus

```sh
kubectl port-forward --namespace prometheus svc/prometheus-server 9090:80
```

`http://localhost:9090`

Install Grafana

```sh
helm install grafana grafana/grafana --namespace grafana
```

Acquire admin password

```sh
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

Access Grafana

```sh
kubectl port-forward service/grafana 3000:80
```

`http://localhost:3000`

Configure Grafana to use Prometheus

1. Go to Configuration > Data Sources in Grafana.
2. Click on "Add data source."
3. Choose Prometheus.
4. In the HTTP section, set the URL to `http://prometheus-server.prometheus.svc.cluster.local`.
5. Save and test the data source.

## Test

Open dashboards

```sh
minikube dashboard
k9s
istioctl d kiali
```

Open the terminal of a pod and send a request to a different workload

```sh
kubectl exec -it fastapi1 -- /bin/bash
curl -H 'Cache-Control: no-cache, no-store' fastapi2:8001/action
```

## Notes

### 18.12.2023

* Istio works properly
* Observability tools work properly
* Might transition from Kiali to Grafana

### 17.12.2023

* installed observability tools (jaeger, prometheus & kiali)
* tried GCP in the mean while, but since you need GCP Enterprise for a service mesh like Istio I chose to work with minikube again
* updating my documentation

### 22.11.2023

* Istio is installed, all pods have a sidecar/proxy
* an example mTLS policy is applied, but doesn't seem to work properly
