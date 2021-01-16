FROM node:12.18.2-alpine3.12

COPY / /dist

WORKDIR /dist
RUN cp -f .env.production .env

RUN apk add --no-cache git
RUN npm ci
RUN npm run build

EXPOSE 3000

# run server
CMD ["npm", "run", "start"]