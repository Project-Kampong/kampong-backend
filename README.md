# Project Kampong API

REST API web service in Node.js, Express, and PostgreSQL for Project Kampong.

## Quick start guide

### Package manager

Yarn is the recommended package manager for Project Kampong API. Install yarn [here](https://classic.yarnpkg.com/en/docs/install/).

### Setting up

#### Install project dependencies

On the command line in the root directory:

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

Under `config/config.env`, fill in `PG_USER`, `PG_HOST`, `PG_NAME`, `PG_PORT` with your PostgreSQL database credentials.

##### Create database tables

1. Connect to your database via `psql` terminal.
2. Under the `db/schema.sql` file, copy the entire file content.
3. In the `psql` terminal, run the file contents as a query.

##### Populate database with mock data

Coming soon.

### Running the app

On the command line in the root directory:

```
#### Run in production
yarn start

#### Run in development environment
yarn dev
```

## API Documentation

Documentation coming soon.

## License

- Version: 1.0.0
- License: MIT
