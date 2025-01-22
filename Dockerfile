FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5077

CMD ["npm", "run", "start:prod"]