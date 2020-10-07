FROM node:latest

WORKDIR /usr/src/app
COPY package.json yarn.lock config public src ./
ENV PORT 5000

RUN yarn cache clean && yarn install
