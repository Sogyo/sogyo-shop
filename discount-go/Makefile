default: test build

test:
	go test -v ./...

build: test
	CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o discount-go .

docker: build
	docker build -t sogyo/sogyo-shop-discount-go .

docker-push: build
	docker push sogyo/sogyo-shop-discount-go
