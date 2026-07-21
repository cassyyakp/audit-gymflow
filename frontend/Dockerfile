# ─── Stage 1 : build ───────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk update && apk upgrade --no-cache

COPY package*.json ./
# RUN npm ci
RUN npm install

COPY . .
RUN npm run build

# ─── Stage 2 : serve ───────────────────────────────────────────────
FROM nginx:alpine

# 1. Patch des CVE système Alpine/Nginx (curl, libexpat, c-ares, etc.)
RUN apk update && apk upgrade --no-cache

# 2. Copie du build React
COPY --from=builder /app/dist /usr/share/nginx/html

# 3. Configuration Nginx avec réécriture React Router + Headers de Sécurité (CSP)
COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]