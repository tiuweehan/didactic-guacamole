FROM node:latest AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --production
COPY . ./
RUN yarn build

FROM node:latest
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

