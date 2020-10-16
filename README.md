# Project Kampong API

![Node CI](https://github.com/Project-Kampong/kampong-backend/workflows/Node%20CI/badge.svg?branch=master)

Backend web service in TypeScript, Node.js(ts-node), Express, and PostgreSQL for Project Kampong.

## Quick Start

### Global dependencies

Latest version of the app has been tested to run on:

```
- Node v14.13.1
- Yarn v1.22.5
- PostgreSQL 13.0
```

### Package manager

Yarn is the recommended package manager for Project Kampong API. Install yarn [here](https://classic.yarnpkg.com/en/docs/install/).

### Setting up

#### Install project dependencies

On the command line in the project root directory:

```bash
yarn install
```

#### Set up config variables

1. In the file `config/config.env.env`, duplicate the file and rename it to `config/config.env`.

2. Fill in all credentials required in the new file. See [section below](#database-setup) to fill in database credentials.

#### Database setup

##### Create a new PostgreSQL database instance

> **_NOTE:_** Skip this step if you already have a PostgreSQL database to connect to.

Refer to this [guide](https://www.postgresql.org/docs/current/tutorial-start.html) on creating a PostgreSQL database locally.

##### Connect PostgreSQL database to the Project Kampong web server

Under `config/config.env`, fill in `PG_USER`, `PG_HOST`, `PG_NAME`, `PG_PORT`, `PG_PASSWORD` with your PostgreSQL database credentials.

##### Create database tables and import required data

On the command line in the project root directory:

```bash
yarn create-tables
```

##### Populate database with mock data

On the command line in the project root directory:

```bash
yarn import-data
```

> **_NOTE:_** If data import fails, run the create database tables command and try again.

### Running the app

On the command line in the project root directory:

```bash
#### Build and run build in production
yarn build
yarn start

#### Run in development
yarn dev
```

### Run linter

On the command line in the project root directory:

```bash
#### Lint all files with .ts extension
yarn eslint . --ext .ts
```

## Documentation

API Documentation

-   Supported and hosted live on Kampong: https://kampong.app/api-docs
-   Latest, unreleased version [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/api-docs/index.md)

The Postman API Collection is available [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/api-docs/kampong-api.json), and can be imported into your Postman API client for API testing.

Database schema diagram can be found [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/kampong-er-diagram.png).

## License

-   License: MIT
