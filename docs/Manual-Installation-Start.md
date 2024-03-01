# Manual Installation

1. Start Docker (Desktop)
2. Start the minikube cluster
    ```shell
    minikube start --memory=8192mb --cpus=4
    ``` 

3. Now build the images:

   ```shell
   docker build -f app1/Dockerfile -t app1 .
   docker build -f app2/Dockerfile -t app2 .
   docker build -f app3/Dockerfile -t app3 .
   ```

4. Save images to files:

   ```shell
   docker save --output images/app1.tar app1
   docker save --output images/app2.tar app2
   docker save --output images/app3.tar app3
   ```

5. Load images into minikube:

   ```shell
   minikube image load images/app1.tar
   minikube image load images/app2.tar
   minikube image load iamges/app3.tar
   ```

### Create Deployments, Services & Service Accounts

```shell
kubectl create -f kubernetes/services.yaml
kubectl create -f kubernetes/service-accounts.yaml
kubectl create -f kubernetes/deployments.yaml
```

## Continue with...

- [Istio](Manual-Installation-Istio.md)
  - ✅ Authentication (mTLS)
  - ✅ Authorization (Authorization Policy)
- [Kong OSS (DB-less)](Manual-Installation-Kong-DB-less.md)
  - ✅ Authentication (Key-Auth)
  - ❌ Authorization
- [Kong Enterprise Free Mode](Manual-Installation-Kong-Enterprise.md)
  - ✅ Authentication (Key-Auth)
  - ✅ Authorization (ACL)