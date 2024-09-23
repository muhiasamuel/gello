FROM node:18-alpine AS build

WORKDIR /work

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npx ngcc --properties es2023 browser module main --first-only --create-only --create-ivy--entry-points

RUN npm run build

RUN ls -l /app/dist/shopping

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /app/dist/shopping/browser /usr/share/nginx/html/browser

EXPOSE 80