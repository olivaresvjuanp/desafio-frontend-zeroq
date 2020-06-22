FROM node:14.0.0

RUN mkdir /home/node/client
WORKDIR /home/node/client
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
RUN npm i forever -g
CMD forever server.js
