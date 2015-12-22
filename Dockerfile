FROM node:4.2.3

RUN apt-get update

RUN mkdir -p /var/site

ADD . /var/site

WORKDIR /var/site

RUN npm install

EXPOSE 3030

CMD npm start
