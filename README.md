<p align="center">
 <img width="200px" src="public/assets/images/logo.png" align="center" alt="Kampong" />
 <h2 align="center">Kampong Backend Service</h2>
 <p align="center">Backend web service in TypeScript, NodeJS, Express, and PostgreSQL for Project Kampong.</p>
</p>
    <p align="center">
        <img alt="Build Passing" src="https://github.com/Project-Kampong/kampong-backend/workflows/Build/badge.svg" />
        <img alt="API Docs Passing" src="https://github.com/Project-Kampong/kampong-backend/workflows/API%20Docs/badge.svg" />
        <a href="https://lgtm.com/projects/g/Project-Kampong/kampong-backend/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/Project-Kampong/kampong-backend.svg?logo=lgtm&logoWidth=18"/></a>
        <a href="https://lgtm.com/projects/g/Project-Kampong/kampong-backend/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/Project-Kampong/kampong-backend.svg?logo=lgtm&logoWidth=18"/></a>
</p>

## Quick Start

### Global dependencies

Latest version of the app has been tested to run on:

```
- Node v14.15.1
- Yarn v1.22.10
- PostgreSQL 13.1
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
yarn create-tables && yarn import-required
```

> NOTE: Should there be an error in importing seed files, check that you have not previously imported the seed files. Otherwise, consider rolling back all migrations (see [Database Migration](#database-migration)) and re-running the above query.

##### Populate database with mock data

On the command line in the project root directory:

```bash
yarn import-mock
```

> **_NOTE:_** If mock data import fails, run the create database tables command and try again.

##### Database Migration

Migrations are used for version control of database schema in production. To make any changes to the database, create a new migration file.

On the command line in the project root directory:

```bash
#### List migrations that have completed and have yet to be run
yarn knex:migrate:list

#### Run all migration scripts that have not been run before
yarn knex:migrate:latest

#### Run all available seed files
yarn knex:seed:run

#### Create migration file
yarn knex:migrate:make

#### Create seed files
yarn knex:seed:make

#### Rollback the most recent migration
yarn knex:migrate:rollback

#### Rollback all migration
yarn knex:migrate:rollback all
```

### Running the app

On the command line in the project root directory:

```bash
#### Build and run build in production
yarn build && yarn start

#### Run in development
yarn dev
```

### Run tests

To run tests (written in Jest), on the command line in the project root directory:

```bash
#### Run entire test suite once
yarn test

#### Run test in watch mode
yarn test --watch

#### Update jest snapshot
yarn test --updateSnapshot
```

> **_NOTE:_** To run the above commands on specific test file (or files in a directory), append the file or directory path to the respective command.

### Run Prettier formatter

On the command line in the project root directory:

```bash
#### Format all files excluding those in .prettierignore file
yarn format
```

## Documentation

API Documentation

-   Supported and running live on Kampong: https://kampong.app/api-docs
-   Latest, unreleased version [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/api-docs/index.md)

The Postman API Collection is available [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/api-docs/kampong-api.json), and can be imported into your Postman API client for API testing.

Database schema diagram can be found [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/kampong-er-diagram.png).

## License

-   License: MIT
