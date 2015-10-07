SERVICE_IMAGE=sogyo/sogyo-shop-config-feeder
SERVICE_TAG=latest

default: test build

test:
	echo "todo"

build: test
	echo "todo"

docker: build
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

run: docker run-cached

run-cached:
	docker run --rm -it $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
