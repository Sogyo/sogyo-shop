export

default: all

all: discount-go customer-java 

discount-go:
	${MAKE} -C discount-go docker-push

customer-java:
	${MAKE} -C customer-java docker-push

.PHONY: all discount-go customer-java
