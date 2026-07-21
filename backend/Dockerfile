FROM php:8.3-fpm-alpine
RUN apk update && apk upgrade --no-cache
RUN apk add --no-cache \
        bash nginx curl zip unzip git \
        libpng-dev libzip-dev oniguruma-dev postgresql-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring zip gd bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www
COPY composer*.json ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts
COPY . .
COPY nginx.conf /etc/nginx/http.d/default.conf
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage \
    && chmod -R 755 /var/www/bootstrap/cache \
    && chmod +x start.sh

EXPOSE 8080
CMD ["./start.sh"]
