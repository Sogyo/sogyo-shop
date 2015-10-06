FROM node
MAINTAINER kvdvlist@sogyo.nl

ADD . /project

WORKDIR /project

RUN npm install --quiet

EXPOSE 3000

CMD ["node", "index.js"]
