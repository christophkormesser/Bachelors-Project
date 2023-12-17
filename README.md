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
  * gathers metrics
* Kiali
  * Dashboard for Prometheus metrics

## Setting up the cluster

1. Start Docker (Desktop)
2. ```minikube start --memory=8192mb --cpus=4``` -> istio requires more ressources
3. To use a local image: Issue following command: ```eval $(minikube docker-env)```
4. Now build the image: ```docker build -t fastapi .```

### Create Deployments & Services

```sh
kubectl create -f kubernetes/deployments.yaml
kubectl create -f kubernetes/services.yaml
```

### Setup Istio & its requirements

```sh
minikube addons enable istio-provisioner
minikube addons enable istio
```

To apply Istio to the target namespace you need to create a label:

```sh
kubectl label namespace default istio-injection=enabled
```

 [Documentation](https://minikube.sigs.k8s.io/docs/handbook/addons/istio/)

#### (Optional) Prometheus, Jaeger & Kiali

Get Prometheus up and running

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/prometheus.yaml
```

[Documentation](https://istio.io/latest/docs/ops/integrations/prometheus/#option-1-quick-start)

Get Jaeger up and running

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/jaeger.yaml
```

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

## Notes

### 17.12.2023

* tried GCP in the mean while, but since you need GCP Enterprise for a service mesh like Istio I chose to work with minikube again
* updating my documentation

### 22.11.2023

* Istio is installed, all pods have a sidecar/proxy
* an example mTLS policy is applied, but doesn't seem to work properly
