FROM node:22-alpine
ARG PORT=4000
ENV PORT=$PORT
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . .
EXPOSE $PORT
RUN yarn build
