BUILD_IMAGE=node
SERVICE_IMAGE=sogyo/sogyo-shop-frontend
SERVICE_TAG=latest

default: test build

test:
	echo "Todo"

build:
	docker run --rm -v $(shell pwd):/source/ $(shell echo ${BUILD_IMAGE}) /bin/bash -c "cd /source && npm install -g grunt-cli && npm install && grunt build"

docker: build
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

run: docker run-cached

run-cached:
	docker run --rm -it -p 9000:9000 $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
