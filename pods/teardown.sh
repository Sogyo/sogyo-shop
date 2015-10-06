#!/bin/bash
kubectl -s 10.199.0.30:8080 delete -f customer-java-rc.yaml
kubectl -s 10.199.0.30:8080 delete -f customer-java-service.yaml
kubectl -s 10.199.0.30:8080 delete -f discount-aspnet-rc.yaml
kubectl -s 10.199.0.30:8080 delete -f discount-aspnet-service.yaml
kubectl -s 10.199.0.30:8080 delete -f discount-go-rc.yaml
kubectl -s 10.199.0.30:8080 delete -f discount-go-service.yaml
kubectl -s 10.199.0.30:8080 delete -f falcor-domain-router-rc.yaml
kubectl -s 10.199.0.30:8080 delete -f falcor-domain-router-service.yaml
kubectl -s 10.199.0.30:8080 delete -f frontend-angular-rc.yaml
kubectl -s 10.199.0.30:8080 delete -f frontend-angular-service.yaml
