FROM node:12.16.1
WORKDIR /app
CMD ["sh","-c","npm install && npm start"]

