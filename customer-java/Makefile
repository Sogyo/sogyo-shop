BUILD_IMAGE=jamesdbloom/docker-java8-maven
SERVICE_IMAGE=sogyo/sogyo-shop-customer-java
SERVICE_TAG=latest

default: test build

test:
	mvn -B -q clean verify

build: 
	docker run --rm -v $(shell pwd):/source/ $(shell echo ${BUILD_IMAGE}) /bin/bash -c "cd /source/ && mvn -B -q package"

docker: build
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

run: docker run-cached

run-cached:
	docker run --rm -it -p 9000:9000 -p 9001:9001 $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
