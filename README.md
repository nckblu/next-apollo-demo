# NextJS and GraphQL

![UI Demo](supercoolguys.gif)

## What is it?

This repository houses two applications both of which power the application Super Cool Guys. The idea is simply that the application displays a bunch of dummy contact information

## Install and Run

Within the client run `yarn install` to install the dependencies. Then run `yarn start` to get the client running.

Within the server run `yarn install` to install the dependencies. Then run `yarn start` to get the server running.

Should end up running on http://localhost:3000.

## Docker

Cba with installs/dependencies and just wanna see it work? `docker compose up -d`

## Testing

Within the client run `yarn test` which will run jest with the watch flag. Or if you want to run it on CI then use `yarn test:ci`. The application makes good use of [React Testing Library](https://testing-library.com/)
