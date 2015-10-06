SERVICE_IMAGE=sogyo/sogyo-shop-falcor-domain-router
SERVICE_TAG=latest

default: test build

test:
	echo "Todo: test"

build:
	echo "Todo: build"

docker: build
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

run: docker run-cached

run-cached:
	docker run --rm -it -p 3000:3000 $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
