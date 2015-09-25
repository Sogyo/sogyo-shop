export

default: all

all: discount-go customer-java 

discount-go:
	echo "EMAIL: "
	echo $(shell echo ${DOCKER_EMAIL})
	${MAKE} -C discount-go docker-push

customer-java:
	${MAKE} -C customer-java docker-push

.PHONY: all discount-go customer-java
