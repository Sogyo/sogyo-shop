SERVICE_IMAGE=sogyo/sogyo-shop-discount-go
SERVICE_TAG=latest

default: test build

test:
	go test -v ./...

build: test
	CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o discount-go .

docker: build
	docker build -t $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG}) .

run: build run-cached

run-cached:
	docker run --rm -it -p 8080:8080 $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})

docker-push: docker
	docker push $(shell echo ${SERVICE_IMAGE}):$(shell echo ${SERVICE_TAG})
