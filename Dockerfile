FROM alpine:3.19

WORKDIR /home/app

RUN apk add --update nodejs npm git

CMD [ "" ]