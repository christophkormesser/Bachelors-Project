# Kong DB-less

### Prerequisites

[Starter Instructions](Manual-Installation-Start.md)

## Continuation

#### Add Gateway API CRDs

```shell
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/standard-install.yaml
```

#### Apply Gateway Class & Gateway Configuration

```shell
kubectl apply -f kubernetes/kong/gateway.yaml
```

#### Install Kong

```shell
helm repo add kong https://charts.konghq.com
helm repo update
helm install kong kong/ingress -n kong --create-namespace 
```

#### (Optional) Test Installation (after all pods are up)

```shell
export PROXY_IP=$(kubectl get svc --namespace kong kong-gateway-proxy -o jsonpath={.spec.clusterIP})
echo $PROXY_IP
```

Copy the address and start a curl command from a pod

```shell
kubectl exec -it <pod/fastapi1> -- /bin/bash
curl -i PROXY_IP
```

#### Create a http route & ingress controller

```shell
kubectl apply -f kubernetes/kong/httproute.yaml
kubectl apply -f kubernetes/kong/ingress.yaml
```

#### Test
```shell
curl -i $PROXY_IP/action
```

### (Optional) Access Kong Manager

**❗In DB-less mode, the Admin UI & API only allow read operations**

#### Port Forward for kong gateway pod (not controller!)

```shell
kubectl port-forward <kong-gateway-pod-name> :8002 -n kong
```

```http://127.0.0.1:<port>/```

#### Admin API

```shell
kubectl port-forward kong-gateway-pod-name 8001:8444 -n kong  
```

```https://127.0.0.1:8001/```

## Authentication

### Key-Auth

#### Enable key-auth

```shell
kubectl apply -f kubernetes/kong/key-auth/key-auth.yaml
```

#### Annotate all services where authorization is needed

```shell
kubectl annotate service app1 konghq.com/plugins=key-auth --overwrite
kubectl annotate service app2 konghq.com/plugins=key-auth --overwrite
kubectl annotate service app3 konghq.com/plugins=key-auth --overwrite
```

#### Create secret for key

```shell
kubectl apply -f kubernetes/kong/key-auth/secret-key-auth.yaml
```

#### Create consumer associated with the key

```shell
kubectl apply -f kubernetes/kong/key-auth/consumer.yaml
```

### JWT

**❗Not working yet**

#### Enable JWT Plugin

```shell
kubectl apply -f kubernetes/kong/jwt/jwt.yaml
```

[Documentation](https://docs.konghq.com/kubernetes-ingress-controller/3.0.x/get-started/)

## Authorization

### ACL

**❗Not working because Consumer Groups are needed to scope the plugin, which are only available in Kong Enterprise.**

### Create ACLs

```shell
kubectl apply -f kubernetes/kong/key-auth/acl-allow.yaml
```

#### Annotate services to use ACLs

```shell
kubectl annotate service app1 konghq.com/plugins=key-auth,acl-allow-g1 --overwrite
kubectl annotate service app2 konghq.com/plugins=key-auth,acl-allow-g2 --overwrite
```

## Observability

#### Add Prometheus & Grafana Helm Repositories

```shell
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

#### Create their own namespaces

```shell
kubectl create namespace prometheus
kubectl create namespace grafana
```

### Install Prometheus

```shell
helm install prometheus prometheus-community/prometheus --namespace prometheus
```

#### Access Prometheus

```shell
kubectl port-forward --namespace prometheus svc/prometheus-server 9090:80
```

`http://localhost:9090`

### Install Grafana

```shell
helm install grafana grafana/grafana --namespace grafana
```

#### Access Grafana & acquire the admin password

```shell
kubectl port-forward --namespace grafana service/grafana 3000:80
```

`http://localhost:3000`

```shell
kubectl get secret --namespace grafana grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

### Configure Grafana to use Prometheus

1. In the Grafana dashboard go to Configuration > Data Sources.
2. Click on "Add data source."
3. Choose Prometheus.
4. In the HTTP section, set the URL to `http://prometheus-server.prometheus.svc.cluster.local`.
5. Save and test the data source.
