FROM node:14-alpine

WORKDIR /app

COPY . .

EXPOSE ${PORT}

RUN npm install && npm cache clean --force

CMD ["node", "src/app.js"]