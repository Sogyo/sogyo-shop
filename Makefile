export

default: build

build: discount-go-build customer-java-build domain-graph-falcor-build frontend-angular-build discount-aspnet-build config-feeder-build

publish: discount-go-publish customer-java-publish domain-graph-falcor-publish frontend-angular-publish discount-aspnet-publish config-feeder-publish

discount-go-build:
	${MAKE} -C discount-go docker

discount-go-publish:
	${MAKE} -C discount-go docker-push

customer-java-build:
	${MAKE} -C customer-java docker

customer-java-publish:
	${MAKE} -C customer-java docker-push

domain-graph-falcor-build:
	${MAKE} -C domain-graph-falcor docker

domain-graph-falcor-publish:
	${MAKE} -C domain-graph-falcor docker-push

discount-aspnet-build:
	${MAKE} -C discount-aspnet docker

discount-aspnet-publish:
	${MAKE} -C discount-aspnet docker-push

frontend-angular-build:
	${MAKE} -C frontend-angular docker

frontend-angular-publish:
	${MAKE} -C frontend-angular docker-push

config-feeder-build:
	${MAKE} -C config-feeder docker

config-feeder-publish:
	${MAKE} -C config-feeder docker-push


.PHONY: all discount-go-build discount-go-publish customer-java-build discount-go-publish frontend-angular-build frontend-angular-publish domain-graph-falcor-build domain-graph-falcor-publish config-feeder-build config-feeder-publish
