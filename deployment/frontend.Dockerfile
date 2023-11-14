FROM node:16
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5173

CMD ["yarn", "dev"]
