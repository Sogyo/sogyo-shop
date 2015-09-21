FROM microsoft/aspnet

COPY project.json /app/
WORKDIR /app
RUN ["dnu", "restore"]
COPY . /app
RUN ["dnu", "restore"]

EXPOSE 5004
ENTRYPOINT ["dnx", "kestrel"]