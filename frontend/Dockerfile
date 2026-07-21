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
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    # En-têtes de sécurité (Correction SEC-10 & Bonnes pratiques OWASP)\n\
    add_header Content-Security-Policy "default-src '\''self'\''; script-src '\''self'\'' '\''unsafe-inline'\''; style-src '\''self'\'' '\''unsafe-inline'\''; img-src '\''self'\'' data: https:; connect-src '\''self'\'' https://groupea-projet3-b3dev-backend.onrender.com;" always;\n\
    add_header X-Frame-Options "DENY" always;\n\
    add_header X-Content-Type-Options "nosniff" always;\n\
\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]