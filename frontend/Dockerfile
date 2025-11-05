# Dockerfile (ubicado en frontend/)
FROM node:18

WORKDIR /app

COPY app/package*.json ./app/
WORKDIR /app/app
RUN npm install

COPY app/ ./app/

CMD ["npm", "start"]