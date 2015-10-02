SERVICE_IMAGE=sogyo/sogyo-shop-discount-aspnet
SERVICE_TAG=latest

default: test build

test:
	echo TODO

build:
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

docker: build

run: docker run-cached

run-cached:
	docker run --rm -it -p 5000:5004 $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
