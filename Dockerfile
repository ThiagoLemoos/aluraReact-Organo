FROM node:22-alpine

WORKDIR /organo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

