# Changelog

Record of notable changes to Project Kampong Backend. Server deployment do not follow release tags.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [Unreleased]

### [v0.1.1a] - 2020-08-24

### Added

-   Forget password request is limited to 5 times every 15min.
-   All cookies `httpOnly` flag set to `false` to facilitate client's auth flow. Will revert back once client resolves auth flow.
-   Search listings by title endpoint.

### Changed

-   Registration flow for users who try to re-register within 15min will see an error with an appropriate prompt, and users can smoothly re-register after 15min.
-   Registration token expiry shortened from 30min to 15min.

### [v0.1.0a] - 2020-08-20

### Added

-   Add frontend build files in `client/build` to be served. Frontend is now integrated with backend!
-   Redirect user to homepage on confirmation of email address

### [v0.0.4] - 2020-08-20

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

[unreleased]: https://github.com/Project-Kampong/kampong-backend/compare/v0.1.1b...HEAD
[v0.1.1b]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.1b
[v0.1.0b]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.1.0b
[v0.0.4]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.4
[v0.0.3]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.3
[v0.0.2]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.2
[v0.0.1]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.1
