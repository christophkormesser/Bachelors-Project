# Documentation Bachelor Project

## About the project

This project's purpose is to accompany my bachelor's thesis with the title "A Comparative Analysis of Centralized and Decentralized Security Models in a Microservices Architecture". For the practical experiment I created three mock web applications written in Go and deployed them in a Kubernetes cluster.
The focus lied on Authentication and Authorization on various levels like service-to-service communication as well as user-to-service communication. To implement such functionalities I use [Istio Service Mesh](https://istio.io/) and [Kong Gateway](https://konghq.com/products/kong-gateway). The cluster was then tested on performance with the load testing tool [Jmeter](https://jmeter.apache.org).

## Roadmap

- [x] Functioning Kubernetes Cluster
- [x] Deployable Working Dummy Applications
- [x] Istio Running with Envoys attached to Application Pods
  - [x] Istio Authentication mTLS
  - [x] Istio Authorization ACL
  - [x] Istio Observability with Grafana, Jaeger & Prometheus
  - [x] Define Metrics to Gather
- [x] Kong Gateway Running exposing Applications
  - [x] Kong Authentication Key-Auth
  - [ ] Kong Authentication JWT/OAuth2
  - [x] Kong Authorization ACL
  - [x] Kong Observability with Grafana & Prometheus
  - [x] Define Metrics to Gather

## Host

### Hardware

- MacBook Pro 16“ 2019
- Processor 2,3 GHz 8-Core Intel Core i9
- Graphics AMD Radeon Pro 5500M 8GB
- Intel UHD Graphics 630 1536 MB
- Memory 32 GB 2667 MHz DDR4
- macOS Sonoma 14.2.1

### Software

- [minikube](https://minikube.sigs.k8s.io/docs/) 1.32.0
- [Kubectl](https://kubernetes.io/docs/reference/kubectl/) 1.29.1
- [Docker](https://www.docker.com/) 25.0.2
- [Istioctl](https://istio.io/latest/docs/ops/diagnostic-tools/istioctl/) 1.20.2
- [Ansible](https://www.ansible.com) 9.2.0

## Getting Started

Clone the [git repository](https://github.com/christophkormesser/Bachelors-Project)

```shell
git clone https://github.com/christophkormesser/Bachelors-Project
```

### Run the Ansible Playbook

Install Minikube, Kubectl, Docker, Istioctl & Ansible (macOS)

```shell
brew install minikube kubectl docker istioctl ansible
```

Change to the root directory of this repository and run the main playbook with

```shell
ansible-playbook ansible/main-setup.yaml
```

Decide which setup you want implement at the beginning of the playbook:

| Option                 | Applications | Observability | Authentication | Authorization |
|------------------------|--------------|---------------|----------------|---------------|
| (i) Istio              | x            | x             | x              | x             |
| (k) Kong OSS DB-less   | x            | x             | x              |               |
| (ke) Kong Enterprise   | x            | x             | x              | x             |
| (v) Vanilla (Baseline) | x            | x             |                |               |

#### Expose Services

After the playbook is finished make the services in the cluster accessible to your host machine

```shell
minikube tunnel
```

To make changes to Kong, you might need to forward the port to the Admin API

```shell
kubectl port-forward -n kong service/kong-cp-kong-admin 8001
```

### Manual Installation

see [Manual Installation](docs/Manual-Installation-Start.md)
