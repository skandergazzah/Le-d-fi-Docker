FROM node:18-alpine3.15 as build-stage
WORKDIR /vih
COPY [ "package.json" , "./"]
RUN npm install 

COPY . .
RUN npm run build
# -------------------------------------------------------------------------
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /vih/public/ /usr/share/nginx/html/
COPY --from=build-stage /vih/build/ /usr/share/nginx/html/

COPY  nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


