export

default: build

build: discount-go-build customer-java-build frontend-angular-build # discount-aspnet-build

publish: discount-go-publish customer-java-publish frontend-angular-publish # discount-aspnet-publish

discount-go-build:
	${MAKE} -C discount-go docker

discount-go-publish:
	${MAKE} -C discount-go docker-push

customer-java-build:
	${MAKE} -C customer-java docker

customer-java-publish:
	${MAKE} -C customer-java docker-push

discount-aspnet-build:
	${MAKE} -C discount-aspnet/src/discount.aspnet docker

discount-aspnet-publish:
	${MAKE} -C discount-aspnet/src/discount.aspnet docker-push
	
frontend-angular-build:
	${MAKE} -C frontend-angular docker

frontend-angular-publish:
	${MAKE} -C frontend-angular docker-push


.PHONY: all discount-go-build discount-go-publish customer-java-build discount-go-publish frontend-angular-build frontend-angular-publish
