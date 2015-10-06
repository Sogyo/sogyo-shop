export

default: all

all: discount-go customer-java frontend-angular

discount-go:
	${MAKE} -C discount-go docker-push

customer-java:
	${MAKE} -C customer-java docker-push

frontend-angular:
	${MAKE} -C frontend-angular docker-push

.PHONY: all discount-go customer-java frontend-angular
