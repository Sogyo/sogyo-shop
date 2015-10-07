#!/bin/bash
kubectl -s 10.199.0.30:8080 create -f discount-go-rc.yaml
kubectl -s 10.199.0.30:8080 create -f discount-go-service.yaml
read
kubectl -s 10.199.0.30:8080 create -f customer-java-rc.yaml
kubectl -s 10.199.0.30:8080 create -f customer-java-service.yaml
read
kubectl -s 10.199.0.30:8080 create -f discount-aspnet-rc.yaml
kubectl -s 10.199.0.30:8080 create -f discount-aspnet-service.yaml
read
kubectl -s 10.199.0.30:8080 create -f falcor-domain-router-rc.yaml
kubectl -s 10.199.0.30:8080 create -f falcor-domain-router-service.yaml
read
kubectl -s 10.199.0.30:8080 create -f frontend-angular-rc.yaml
kubectl -s 10.199.0.30:8080 create -f frontend-angular-service.yaml


