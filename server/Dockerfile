FROM node:14
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
ENV PORT=5000
EXPOSE 5000
CMD [ "node", "server.js" ]