# Build aşaması
FROM node:20 AS build
RUN mkdir -p /app
WORKDIR /app
###COPY package*.json ./

# package.json ve package-lock.json dosyalarını kopyalayın
#COPY package*.json ./
#RUN npm cache clean --force

RUN npm install -g @angular/cli

# Bağımlılıkları yükleyin

# Tüm kaynak kodunu kopyalayın
COPY . .
RUN npm install

# Uygulamayı build edin
RUN npm run build --prod

CMD ["npm","start"]

#FROM nginx:latest AS ngi
##FROM nginx:alpine
##COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

#COPY --from=build app/dist/oto-api-ui usr/share/nginx/html

#COPY src/favicon.ico /usr/share/nginx/html/


# Production aşaması
#COPY --from=build /app/dist/oto-api-ui /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Nginx servisini başlatın
#CMD ["nginx", "-g", "daemon off;"]
#EXPOSE 80
