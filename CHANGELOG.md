# Changelog

Record of notable changes to Project Kampong Backend. Server deployment do not follow release tags.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.118.0]

## [v0.116.0]

## [v0.115.0]

## [v0.114.0]

### Added

-   Chat room endpoints, including chatroom creation, send message, update last seen, get all chatrooms for user, and get single chatroom with messages

## [v0.113.0]

## [v0.112.0]

## [v0.111.0]

## [v0.110.0]

## [v0.109.0]

## [v0.108.0]

## [v0.104.0]

### Changed

-   Add globally unique `username` to `loginuser` table, and move `first_name` and `last_name` from `loginuser` to `profile` table

## [v0.97.0]

### Changed

-   Backend no longer serves frontend assets (ie. App and About page). These assets will be served by NGINX.

## [v0.84.0]

### Changed

-   Bump node version to 14.15.3

## [v0.83.0]

## [v0.82.0]

### Added

-   Listing enquiry and application endpoints and email templates

### Changed

-   `listings`, `milestones`, `listing updates`, and `programmes` schema with columns `description` and `title` are now prepended with their table name eg. `milestone_description`
-   Bump node version to 14.15.2

## [v0.81.0]

## [v0.80.0]

## [v0.79.0]

## [v0.78.0]

## [v0.77.0]

## [v0.76.0]

## [v0.75.0]

## [v0.73.0]

### Changed

-   File upload endpoint request and response body.
-   Change dependency from `multer` and `multer-s3` to `express-fileupload`.
-   ListingView data response.

### Added

-   Convenience method `yarn reset-db` for clean reset of db schema.
-   Add db backup cronjob to backup to local machine and private S3 bucket.

## [v0.65.0]

### Changed

-   Send email route from `/api/send-email` to `/api/mailer/send`

## [v0.64.0]

### Fixed

-   DB queries for locations, auth etc

## [v0.63.0]

### Changed

-   Build file changed back to `dist/server.js`

## [v0.62.0]

### Changed

-   Build file location from `dist/server.js` to `dist/src/server.js`

### Fixed

-   Bug in heroku build not running due to build file location changes

## [v0.50.0]

### Added

-   Changelog tags to be updated automatically by tag-bump Actions pipeline

## [v0.48.0]

### Added

-   TypeScript migration
-   Update dependencies, node v14.15.1, yarn v1.22.10, and PostgreSQL 13.1
-   GitHub Actions build script and API docs generator for CI/CD
-   Jest tests
-   Database migration to be handle by knex.

### Changed

-   Query params `sort` now accepts `asc` or `desc` but can only sort at most one field.

### Removed

-   Remove `skills` and `listing_skills`

## [v0.1.4] - 2020-09-19

### Added

-   Static 'About Us' pages

### Changed

-   Landing page search will now search by title, category and locations using full text search.

## [v0.1.3] - 2020-09-13

### Added

-   Dedicated email field for listings.
-   Featured listings CRUD endpoints.
-   Registration flow allows user to login after registration without email confirmation.
-   Endpoint to resend account activation email.

### Changed

-   BREAKING: Route naming for all auth endpoints changed to kebab case to adhere to convention.
-   Update backend structure to fit new DevOps workflow for both frontend and backend. This repo no longer stores frontend build.

## [v0.1.2b] - 2020-09-03

### Added

-   Location tagging for listings.

### Changed

-   Password requirement to 8-25 characters, at least 1 uppercase, lowercase, and special character respectively.

## [v0.1.1a] - 2020-08-24

### Added

-   Forget password request is limited to 5 times every 15min.
-   All cookies `httpOnly` flag set to `false` to facilitate client's auth flow. Will revert back once client resolves auth flow.
-   Search listings by title endpoint.

### Changed

-   Registration flow for users who try to re-register within 15min will see an error with an appropriate prompt, and users can smoothly re-register after 15min.
-   Registration token expiry shortened from 30min to 15min.

## [v0.1.0b] - 2020-08-20

### Added

-   Add frontend build files in `client/build` to be served. Frontend is now integrated with backend!
-   Redirect user to homepage on confirmation of email address

## [v0.0.4] - 2020-08-20

### Added

-   Verify Profile endpoint.
-   Soft delete for `ListingComments`.
-   `ListingComments` now show comment poster's nickname and profile picture.
-   Editing/Updating `Listings` can now update photos.
-   General file upload route in `upload-routes`.
-   All skills created by admin have exactly one group under the column `skill_group`.
-   `createCustomListingSkill` in `listingskills` to allow listing owners and admins to create skills for a listing.

### Changed

-   Get all likes for a particular listing or profile will show the necessary profile and listing information respectively.
-   `ListingStories` route changed from `/listings/stories/1` to `/listings/1/stories`.
-   Routing for following resources and endpoints:
    -   All `Profiles` routes `/profiles/...` -> `/users/:user_id/profiles/...`.
    -   All `ListingStories` routes `/listings/stories/:listing_id` -> `/listings/:listing_id/stories`.
    -   Get All Likes for a Profile `/profiles/1/likes` -> `/users/1/likes`.
    -   Get All Listing Participation for a Profile `/profiles/1/participants` -> `/users/1/participants`.
    -   Get All Listings owned by a Particular User `/profiles/1/listings/owner` -> `/users/1/listings/owner`.
    -   Upload Listing Photos `/listings/1/photo` -> `/listings/1/upload-photo`.
    -   Upload Profile Picture `profiles/1/photo` -> `users/1/profiles/upload-photo`.
-   For backend, added `index.js` file for `middleware` and `utils` directory, to consolidate imports and exports.
-   Public cannot read or update `Listings` which have been soft-deleted. Will require admin-only `GET all...` endpoint to read soft-deleted `Listings`.
-   `Listings` read endpoint now show creator's nickname, profile picture, phone and email.

### Removed

-   Get All Skills for a Profile routing and endpoint.
-   `hashId` no longer show in `Get All...` endpoints.

### Fixed

-   Bug whereby listing owners are unable to deactivate/soft delete.
-   Bug where user can only upload 5 photos at a time, else the remaining pic fields become null.

## [v0.0.3] - 2020-08-13

### Added

-   `hashId` generator utility, to generate hashed serial number and with decoding and encoding functionality.
-   Show corresponding `hashId` values for 'Get All...' endpoints. If select query params is used, hashId field will not be generated. Note that this feature is not reliable for tables with more than one id field (ie. more than one columns with column name ending with `_id`). It is implemented such that it will take the first id column if multiple id columns are present. This is usually safe as existing tables have their first id column as their primary key. Nevertheless, its use on tables with multiple id columns is highly discouraged as it may lead to unpredictable outcomes.
-   LoDash library for use of util functions.
-   Listing Updates CRUD endpoints.
-   Get single listing by hashId endpoint.
-   Get single profile by hashId endpoint.
-   Listing Skills create, read, delete endpoint.
-   `adavancedResult` middleware now accepts `join` and `on` as optional arguments to form SQL joins.
-   New testing route for multiple file upload.
-   Get all listings owned by particular user (identified by `userId`).
-   Database diagram in `public/kampong-db-diagram.png`.
-   Soft delete for jobs and listings.
-   Separate admin-only `Get all ... including soft delete` endpoint.
-   Listing Comments CRUD endpoints.

### Changed

-   All 'Get All...' endpoints count now reflect the total count of database entries that fulfill the conditions, regardless of limit and offset.
-   Route for original get single listing by listing id. (see API docs)
-   Route for original get single profile by profile id. (see API docs)
-   Updated API docs to show hashId displayed for relevant Get All endpoints.
-   'Get all skills for listing' renamed to 'Get all listing skills for listing' and URI changed from `/api/listings/:listing_id/skills` to `/api/listings/:listing_id/listing-skills`, for consistency in terminology of `Skill` and `ListingSkill`.
-   File metadata when uploading to S3 now includes file's original name, and upload timestamp.
-   Major refactor of file directories, methods to appropriate files. (see [#96](https://github.com/Project-Kampong/kampong-backend/pull/96))

### Fixed

-   Multiple photo upload not storing URL location in database. This was an issue affecting the listings endpoints only.
-   Bug where user cannot update own profile, and upload profile pic as `403` response was given.
-   Bug (similar as above) where `403` response given when user is updating own participant entry.
-   Bug where hashtags with '-' are not allowed. This affects the creation and update of hashtags. Hashtags must now start with '#' followed by a combination of alphanumeric characters, `-` and `_`, and be of length 3 to 20 excluding `#`.

## [v0.0.2] - 2020-08-06

### Added

-   Listing Stories schema, routing and endpoint.
-   Hashtag schema, routing and endpoint.
-   Add upload photo in create listings, header type changed from `application/json` to `multipart/form-data`.

### Changed

-   Listings create and delete endpoint to also create and delete its corresponding listing story with same listing id.
-   Minor update to README, indicating temporary API documentation location.

## [v0.0.1] - 2020-08-03

### Added

-   Initial changelog record.
-   Initial README with setup instructions.
-   Initial SQL schema plan.
-   Auth CRUD endpoints.
-   Registration, confirm account, forget and reset password endpoints.
-   Admin-only Users CRUD endpoints.
-   User profiles CRUD endpoints.
-   Listings CRUD endpoints.
-   Participants (Users-Listings) CRUD endpoints.
-   Skills (Users-Listings) CRUD endpoints.
-   Likes (Users-Listings) CRUD endpoints.
-   Jobs (Users-Listings) CRUD endpoints.
-   Participants (Users-Listings) CRUD endpoints.
-   Listing FAQs CRUD endpoints.
-   Connection with PostgreSQL, configurable by developer.
-   Integration with email service as a utility service.
-   Integration with S3 bucket for file uploads as a utility service.
-   Error handling.
-   Basic Role-Based Access Control (RBAC) of routes.
-   Basic input-validation for existing endpoints.
-   Basic handling of query parameters for GET ALL requests, only handling of strict equality for now.
-   Seeder file script to populate database with mock data for testing.
-   Sample config env files to be populated with appropriate values for deployment.
-   Internal, dev-only test routes and methods.
-   API documentation temporarily set up as front-end page to be served, for ease of testing by frontend.

[unreleased]: https://github.com/Project-Kampong/kampong-backend/compare/v0.118.0...HEAD
[v0.118.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.118.0
[v0.116.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.116.0
[v0.115.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.115.0
[v0.114.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.114.0
[v0.113.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.113.0
[v0.112.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.112.0
[v0.111.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.111.0
[v0.110.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.110.0
[v0.109.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.109.0
[v0.108.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.108.0
[v0.104.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.104.0
[v0.103.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.103.0
[v0.102.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.102.0
[v0.101.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.101.0
[v0.100.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.100.0
[v0.99.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.99.0
[v0.98.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.98.0
[v0.97.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.97.0
[v0.96.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.96.0
[v0.95.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.95.0
[v0.94.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.94.0
[v0.93.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.93.0
[v0.92.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.92.0
[v0.91.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.91.0
[v0.90.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.90.0
[v0.89.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.89.0
[v0.88.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.88.0
[v0.87.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.87.0
[v0.86.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.86.0
[v0.85.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.85.0
[v0.84.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.84.0
[v0.83.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.83.0
[v0.82.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.82.0
[v0.81.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.81.0
[v0.80.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.80.0
[v0.79.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.79.0
[v0.78.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.78.0
[v0.77.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.77.0
[v0.76.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.76.0
[v0.75.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.75.0
[v0.73.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.73.0
[v0.72.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.72.0
[v0.71.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.71.0
[v0.70.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.70.0
[v0.69.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.69.0
[v0.68.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.68.0
[v0.67.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.67.0
[v0.66.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.66.0
[v0.65.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.65.0
[v0.64.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.64.0
[v0.63.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.63.0
[v0.62.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.62.0
[v0.51.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.51.0
[v0.50.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.50.0
[v0.48.0]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.48.0
[v0.1.4]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.4
[v0.1.3]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.3
[v0.1.2b]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.2b
[v0.1.1a]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.1a
[v0.1.0b]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.0b
[v0.0.4]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.4
[v0.0.3]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.3
[v0.0.2]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.2
[v0.0.1]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.1
