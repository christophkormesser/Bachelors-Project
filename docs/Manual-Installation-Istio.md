# Istio

### Prerequisites

[Starter Instructions](Manual-Installation-Start.md)

## Continuation
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

[Official Documentation](https://minikube.sigs.k8s.io/docs/handbook/addons/istio/)

Apply the policies:

 ```shell
 kubectl apply -f kubernetes/istio/
 ```

## Obersavbility

### Prometheus

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/prometheus.yaml
```

[Official Documentation](https://istio.io/latest/docs/ops/integrations/prometheus/#option-1-quick-start)

### Jaeger

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/jaeger.yaml
```

query url:

```http://tracing.istio-system.svc.cluster.local:80```

[Official Documentation](https://istio.io/latest/docs/ops/integrations/jaeger/)

### Kiali

```shell
helm install \
  --namespace istio-system \
  --set auth.strategy="anonymous" \
  --repo https://kiali.org/helm-charts \
  kiali-server \
  kiali-server
```

### Grafana

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/grafana.yaml
```

[Official Documentation](https://istio.io/latest/docs/ops/integrations/grafana/#option-1-quick-start)

Import the dashboard json file from `config/Requests-1703960621987.json`
