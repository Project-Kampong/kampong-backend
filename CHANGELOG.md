# Changelog

Record of notable changes to Project Kampong Backend.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Listing Stories schema, routing and endpoint.
- Hashtag schema, routing and endpoint.
- Add upload photo in create listings, header type changed from application/json to multipart/form-data

### Changed

- Listings create and delete endpoint to also create and delete its corresponding listing story with same listing id.
- Minor update to README, indicating temporary API documentation location.

## [0.0.1] - 2020-08-03

### Added

- Initial changelog record.
- Initial README with setup instructions.
- Initial SQL schema plan.
- Auth CRUD endpoints.
- Registration, confirm account, forget and reset password endpoints.
- Admin-only Users CRUD endpoints.
- User profiles CRUD endpoints.
- Listings CRUD endpoints.
- Participants (Users-Listings) CRUD endpoints.
- Skills (Users-Listings) CRUD endpoints.
- Likes (Users-Listings) CRUD endpoints.
- Jobs (Users-Listings) CRUD endpoints.
- Participants (Users-Listings) CRUD endpoints.
- Listing FAQs CRUD endpoints.
- Connection with PostgreSQL, configurable by developer.
- Integration with email service as a utility service.
- Integration with S3 bucket for file uploads as a utility service.
- Error handling.
- Basic Role-Based Access Control (RBAC) of routes.
- Basic input-validation for existing endpoints.
- Basic handling of query parameters for GET ALL requests, only handling of strict equality for now.
- Seeder file script to populate database with mock data for testing.
- Sample config env files to be populated with appropriate values for deployment.
- Internal, dev-only test routes and methods.
- API documentation temporarily set up as front-end page to be served, for ease of testing by frontend.

[unreleased]: https://github.com/Project-Kampong/kampong-backend/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/Project-Kampong/kampong-backend/releases/tag/v0.0.1
