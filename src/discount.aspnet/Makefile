default: test build

test:
	echo todo

build: test
	docker build -t sogyo/sogyo-shop-discount-aspnet .

run: build run-cached

run-cached:
	docker run --rm -it -p 5000:5004 sogyo/sogyo-shop-discount-aspnet

docker-push: build
	echo todo
