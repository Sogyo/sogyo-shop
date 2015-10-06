FROM microsoft/aspnet:1.0.0-beta7-coreclr

COPY . /app
WORKDIR /app

RUN ["dnu", "restore"]
WORKDIR /app/test/discount.aspnet.test
CMD ["dnx", "test"]