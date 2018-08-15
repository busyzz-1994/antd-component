FROM nginx:stable
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
