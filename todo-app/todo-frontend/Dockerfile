FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL="http://localhost:3000"

RUN npm ci --include dev

RUN npm run build


FROM mcr.microsoft.com/playwright:v1.57.0-noble AS test-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app .

RUN npx playwright install --with-deps  

ENV NODE_ENV=test \
	CI=true

RUN npm run test:browser


FROM nginx:1.25-alpine

COPY --from=test-stage /usr/src/app/dist /usr/share/nginx/html
