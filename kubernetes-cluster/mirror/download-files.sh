#!/bin/bash
BASEURL=https://storage.googleapis.com/kubernetes-release/release/v1.0.1/bin/linux/amd64
wget ${BASEURL}/kubectl
wget ${BASEURL}/kube-apiserver
wget ${BASEURL}/kube-controller-manager
wget ${BASEURL}/kube-scheduler
wget ${BASEURL}/kube-proxy
wget ${BASEURL}/kubelet
