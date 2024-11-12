FROM node:21-alpine AS build

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

