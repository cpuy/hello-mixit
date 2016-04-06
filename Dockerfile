FROM dockerfile/nodejs

EXPOSE 8080

CMD npm run serve

ADD . /data
