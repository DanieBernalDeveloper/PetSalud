# ---- Etapa 1: construir la app ----
FROM node:20 AS build

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app/ .
RUN npm run build

# ---- Etapa 2: servir archivos estáticos ----
FROM node:20-slim

WORKDIR /app

COPY --from=build /app/dist ./dist
RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
