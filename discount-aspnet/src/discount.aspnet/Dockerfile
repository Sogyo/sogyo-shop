FROM microsoft/aspnet:1.0.0-beta7-coreclr

COPY project.json /app/
WORKDIR /app
RUN ["dnu", "restore"]
COPY . /app

EXPOSE 5004
ENTRYPOINT ["dnx", "kestrel"]