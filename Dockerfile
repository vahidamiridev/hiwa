FROM node:16-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]