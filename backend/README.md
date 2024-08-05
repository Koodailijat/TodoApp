# Todo App Backend
![swagger](https://github.com/user-attachments/assets/3a5cc4d5-573c-4bf8-b4ac-920679073505)

## Description

* NestJS
* Prisma
* PostgreSQL
* Passport
* TypeScript
* Swagger

## Environment variables
```
DATABASE_URL="postgresql://username:password@localhost:5432/todoapp?schema=public"
JWT_SECRET="jwt-secret"
```

## Installation

```bash
$ npm install
```

## Setup database
```bash
$ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
