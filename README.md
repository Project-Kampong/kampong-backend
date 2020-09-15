# Project Kampong API

REST API web service in Node.js, Express, and PostgreSQL for Project Kampong.

## Quick start guide

### Package manager

Yarn is the recommended package manager for Project Kampong API. Install yarn [here](https://classic.yarnpkg.com/en/docs/install/).

### Setting up

#### Install project dependencies

On the command line in the project root directory:

```
yarn install
```

#### Set up config variables

1. In the file `config/config.env.env`, duplicate the file and rename it to `config/config.env`.

2. Fill in all credentials required in the new file. See [section below](#database-setup) to fill in database credentials.

#### Database setup

##### Create a new PostgreSQL database instance

Refer to this [guide](https://www.postgresql.org/docs/current/tutorial-start.html) on creating a PostgreSQL database locally.

Skip this step if you already have a PostgreSQL database to connect to.

##### Connect PostgreSQL database to the Project Kampong web server

Under `config/config.env`, fill in `PG_USER`, `PG_HOST`, `PG_NAME`, `PG_PORT`, `PG_PASSWORD` with your PostgreSQL database credentials.

##### Create database tables

On the command line in the project root directory:

```
yarn create-tables
```

##### Populate database with mock data

On the command line in the project root directory:

```
yarn import-data
```

If data import fails, run the create database tables command and try again.

### Running the app

On the command line in the project root directory:

```
#### Run in production
yarn start

#### Run in development
yarn dev
```

## Documentation

API Documentation is found [here](https://kampong.app/api-docs).

The Postman API Collection is available [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/api-docs/index.html), and can be imported into your Postman API client for API testing.

Database schema diagram can be found [here](https://github.com/Project-Kampong/kampong-backend/blob/master/public/kampong-er-diagram.png).

## License

-   Version: 1.0.0
-   License: MIT
