FROM node:22-slim
RUN apt-get update -y && apt-get install -y openssl
ARG PORT=4000
ENV PORT=$PORT
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
EXPOSE $PORT
RUN yarn build
