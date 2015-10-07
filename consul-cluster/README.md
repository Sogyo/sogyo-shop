# What do I do with this?

```
vagrant up
```

Brings up n machines. They will be available at the following IP range:

```
10.199.0.10 + x
# So: 
10.199.0.11
10.199.0.12
...
10.199.0.10+n
```

Consul web UI ports will be mapped to 8500+n, so:

```
8501
8502
...
8500+n
```
* http://localhost:8501/ui/
* http://localhost:8502/ui/
* http://localhost:8503/ui/
