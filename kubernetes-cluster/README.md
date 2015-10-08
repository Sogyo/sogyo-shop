# Kubernetes 1.0

Simple, single master setup.

```
vagrant up
ip route add 10.199.1.0/24 via 10.199.0.254 # 254 is the router
ip route del 10.199.1.0/24
kubectl -s 10.199.0.30:8080 cluster-info
```

# Verify cloud init:
```
/usr/bin/coreos-cloudinit --from-file=/var/lib/coreos-vagrant/vagrantfile-user-data
```

{
  "Node": "kubernetes-master",
  "Address": "10.199.0.30",
  "Service": {
    "ID": "kubernetes-master",
    "Service": "kubernetes-master",
    "Tags": [
      "master"
    ],
    "Address": "10.199.0.30",
    "Port": 8000
  }
}


wget https://storage.googleapis.com/kubernetes-release/release/v1.0.1/bin/darwin/amd64/kubectl
