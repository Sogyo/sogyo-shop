FROM microsoft/aspnet

COPY project.json /app/
WORKDIR /app
RUN ["dnu", "restore", "--no-cache"]
COPY . /app

EXPOSE 5004
ENTRYPOINT ["dnx", "kestrel"]