FROM node:14

RUN mkdir /data
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
