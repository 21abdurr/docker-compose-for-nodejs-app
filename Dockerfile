FROM node:20

WORKDIR /app

COPY package*.json .

COPY . .

# RUN npm install -d yarn

EXPOSE 3000