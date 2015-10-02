FROM anapsix/alpine-java:latest
MAINTAINER kvdvlist@sogyo.nl

ADD /target/customer-service-*.jar /customer-service.jar
ADD /config.yml /config.yml

EXPOSE 9000
EXPOSE 9001

CMD ["java", "-jar", "/customer-service.jar", "server", "/config.yml"]
