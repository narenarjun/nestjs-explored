# NestJS Explored

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications with typescript.</p>
    <p align="center">

## Description

Building a simple coffee App with nestjs.


To create a new controller with nestjs cli
```bash
nest generate controller

# short form
nest g co

```

To create a new service with nestjs cli
```bash
nest generate service 

# short form
nest g s
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


#### TypeOrm Module 

when connecting to `heroku-postgresql` from localhost via nestjs TypeOrm module,
the connection will be rejected if `ssl:true` option is not passed and it'll reject 
connection for self signed certificated too.
so, to avoid these issues add ssl `rejectUnauthorized` to `false`

```json
{
  "name": "default",
  "type": "postgres",
  "url": "postgres://username:password@host:port/database",
  "synchronize": true,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
```

<!-- https://stackoverflow.com/questions/56660312/cannot-connect-an-ssl-secured-database-to-typeorm -->