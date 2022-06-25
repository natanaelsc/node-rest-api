FROM node:16.15.1-alpine3.16 as builder

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app