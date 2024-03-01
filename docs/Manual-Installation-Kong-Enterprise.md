# Kong Enterprise

### Prerequisites

[Starter Instructions](Manual-Installation-Start.md)

## Continuation

### Add Gateway API CRDs

```shell
kubectl apply -f kubernetes/kong/standard-install.yaml
```

### Apply Gatway Class & Gateway Configuration

```shell
kubectl apply -f kubernetes/kong/gateway.yaml
```

### Add & Update Kong Helm Repo

```shell
helm repo add kong https://charts.konghq.com
helm repo update
```

### Create Kong Namespace

```shell
kubectl create namespace kong
```

### Create Secret for Enterprise License Free Mode

```shell
kubectl create secret generic kong-enterprise-license --from-literal=license="'{}'" -n kong
```

### Create a tls directory if it does not exist 

```shell
mkdir kubernetes/kong/tls

```

### Create Key & Certificate with generated EC parameters

```shell
openssl ecparam -name secp384r1 -out "kubernetes/kong/tls/ecparams.pem"
openssl req -new -x509 -nodes -newkey ec:./kubernetes/kong/tls/ecparams.pem -keyout ./kubernetes/kong/tls/tls.key -out ./kubernetes/kong/tls/tls.crt -days 1095 -subj "/CN=kong_clustering"
```

### Helm Install Kong Control Plane with values-cp.yaml

```shell
helm install kong-cp kong/kong -n kong --values ./kubernetes/kong/values/values-cp.yaml
```

Ensure the Control Plane is running

### Helm Install Kong Data Plane with values-dp.yaml

```shell
helm install kong-dp kong/kong -n kong --values ./kubernetes/kong/values/values-dp.yaml
```

Ensure the Data Plane is running

### Port Forward Admin API in new Terminal Tab

```shell
kubectl port-forward -n kong service/kong-cp-kong-admin 8001
```

### Get ClusterIPs of the applications

```shell
kubectl get services --all-namespaces --field-selector metadata.name=app1 -o jsonpath='{.items[0].spec.clusterIP}'
kubectl get services --all-namespaces --field-selector metadata.name=app2 -o jsonpath='{.items[0].spec.clusterIP}'
kubectl get services --all-namespaces --field-selector metadata.name=app3 -o jsonpath='{.items[0].spec.clusterIP}'
```

### Create Kong Services for the applications

```shell
curl -i -X POST \
    --url http://127.0.0.1:8001/services/ \
    --data name=app1 \
    --data url=http://{{ app1_clusterIP.stdout }}:1323/action
  
curl -i -X POST \
    --url http://127.0.0.1:8001/services/ \
    --data name=app2 \
    --data url=http://{{ app2_clusterIP.stdout }}:1323/action
    
curl -i -X POST \
    --url http://127.0.0.1:8001/services/ \
    --data name=app3 \
    --data url=http://{{ app3_clusterIP.stdout }}:1323/action
```

### Creates Kong Routes for the applications

```shell
curl -i -X POST \
    --url http://127.0.0.1:8001/services/app1/routes \
    --data paths[]=/app1

curl -i -X POST \
    --url http://127.0.0.1:8001/services/app2/routes \
    --data paths[]=/app2
    
curl -i -X POST \
    --url http://127.0.0.1:8001/services/app3/routes \
    --data paths[]=/app3
```

## Expose Services

```shell
minikube tunnel
```

