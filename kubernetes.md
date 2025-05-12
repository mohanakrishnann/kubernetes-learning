# Kubernetes Learning

This document outlines the steps to deploy a React application using Kubernetes, Minikube, and Google Kubernetes Engine (GKE). Follow these steps to containerize your application, deploy it locally, and then scale it to the cloud.

---

## Deploying a React Application in Kubernetes

### Step 1: Create a Docker Image

First, create a Dockerfile to containerize your React application. Below is an example Dockerfile:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Step 2: Build the Docker Image Locally

Run the following command to build the Docker image:

```bash
docker build -t react-app:latest .
```

### Step 3: Test Your Container Locally

Run the container locally to ensure it works as expected:

```bash
docker run -p 8080:80 react-app:latest
```

Access the application in your browser at `http://localhost:8080`.

---

## Deploying the Application in Minikube

### Step 4: Install and Start Minikube

Follow the [Minikube installation guide](https://minikube.sigs.k8s.io/docs/start/) to install Minikube. Start Minikube with the following command:

```bash
minikube start
```

### Step 5: Create a Deployment Manifest

Create a file named `deployment.yaml` with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: react-app-deployment
spec:
    replicas: 1
    selector:
        matchLabels:
            app: react-app
    template:
        metadata:
            labels:
                app: react-app
        spec:
            containers:
                - name: react-app
                    image: react-app:latest
                    ports:
                        - containerPort: 80
```

### Step 6: Create a Service Manifest

Create a file named `service.yaml` to expose the deployment inside the cluster:

```yaml
apiVersion: v1
kind: Service
metadata:
    name: react-app-service
spec:
    selector:
        app: react-app
    ports:
        - protocol: TCP
            port: 80
            targetPort: 80
    type: NodePort
```

### Step 7: Apply the Manifests

Apply the deployment and service manifests using `kubectl`:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Step 8: Make Local Docker Images Visible to Minikube

Run the following command to make your local Docker images available to Minikube:

```bash
eval $(minikube docker-env)
docker build -t react-app:latest .
```

### Step 9: Access Your React App in Minikube

Use the following command to get the URL for your application:

```bash
minikube service react-app-service --url
```

Open the provided URL in your browser to access the application.

---

## Deploying the Application in Google Kubernetes Engine (GKE)

### Step 1: Build and Push the Docker Image to Google Container Registry (GCR)

Set your Google Cloud project and build the Docker image:

```bash
gcloud config set project [PROJECT_ID]
gcloud builds submit --tag gcr.io/[PROJECT_ID]/react-app:latest
```

### Step 2: Create a GKE Cluster

Create a GKE cluster and configure `kubectl` to use it:

```bash
gcloud container clusters create react-app-cluster --num-nodes=1 --zone=us-central1-a
gcloud container clusters get-credentials react-app-cluster --zone=us-central1-a
```

### Step 3: Update Deployment YAML

Update the `deployment.yaml` file to use the GCR image:

```yaml
image: gcr.io/[PROJECT_ID]/react-app:latest
```

Apply the updated manifest:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Step 4: Expose the Service with a Load Balancer

Update the `service.yaml` file to use a LoadBalancer:

```yaml
spec:
    type: LoadBalancer
    ports:
        - port: 80
            targetPort: 80
```

Apply the updated service manifest:

```bash
kubectl apply -f service.yaml
```

Get the external IP address of the service:

```bash
kubectl get service react-app-service
```

Open the external IP in your browser to access the application.

---

## Step 5: Configure HTTPS and Custom Domain on GKE

To configure HTTPS and a custom domain, use Google Cloud Load Balancer with managed certificates and Ingress. Follow these steps:

1. Create a `ManagedCertificate` resource for your domain.
2. Configure an `Ingress` resource to use the certificate and route traffic to your service.
3. Point your domain’s DNS to the Load Balancer IP.

Refer to the following GCP documentation for detailed instructions:
- [Managed Certificates](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)
- [Ingress with Managed SSL Certificate](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-multi-cluster#create-an_ingress_with_a_managed_ssl_certificate)

---

This concludes the steps for deploying a React application using Kubernetes, Minikube, and GKE. Happy learning!
