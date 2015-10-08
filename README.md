# Sogyo shop 
[![Build Status](https://travis-ci.org/Sogyo/sogyo-shop.svg)](https://travis-ci.org/Sogyo/sogyo-shop)

# Getting started
* Go to the folder 'consul-cluster' and type ```vagrant up```. This will make sure that master part of the cluster (Etcd and Consul) will be available.
* Wait untill [consul](http://localhost:8501/ui/) is available. The 
* Then go to the directory 'kubernetes-cluster' and type ```vagrant up``` again. A wild kubernetes cluster has appeared!
* Perhaps add a route: ```ip route add 10.199.1.0/24 via 10.199.0.254```
* And verify the nodes are available: ```kubectl -s 10.199.0.30:8080 get no```

# Using the cluster.
A sample project has been created and is built in several frameworks and languages. A container is created for each of them. You can check out the 'pods' folder to see the definitions of those files as well as how to spin up the application. The angular web UI can eventually be reached at ```10.199.1.15```
