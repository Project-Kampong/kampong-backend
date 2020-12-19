
# Kampong API

Backend API for Project Kampong.

## Indices

* [Authentication](#authentication)

  * [Activate Account (via Email Confirmation)](#1-activate-account-(via-email-confirmation))
  * [Forget Password](#2-forget-password)
  * [Get Logged In User via Token](#3-get-logged-in-user-via-token)
  * [Login Admin](#4-login-admin)
  * [Login User](#5-login-user)
  * [Logout User](#6-logout-user)
  * [Register User](#7-register-user)
  * [Resend Account Activation Email](#8-resend-account-activation-email)
  * [Reset Password](#9-reset-password)
  * [Update Details](#10-update-details)
  * [Update Password](#11-update-password)

* [Categories](#categories)

  * [Get All Categories](#1-get-all-categories)
  * [Get All Listings for a Category](#2-get-all-listings-for-a-category)

* [Faqs](#faqs)

  * [Create Faq](#1-create-faq)
  * [Delete Faq](#2-delete-faq)
  * [Update Faq](#3-update-faq)

* [File Upload](#file-upload)

  * [File Upload](#1-file-upload)

* [Hashtags](#hashtags)

  * [Create Hashtag](#1-create-hashtag)
  * [Delete Hashtag](#2-delete-hashtag)

* [Jobs](#jobs)

  * [Create Job](#1-create-job)
  * [Delete Job](#2-delete-job)
  * [Update Job](#3-update-job)

* [Likes](#likes)

  * [Like Listing](#1-like-listing)
  * [Unlike Listing](#2-unlike-listing)

* [Listing Comments](#listing-comments)

  * [Create Listing Comment](#1-create-listing-comment)
  * [Deactivate Listing Comment](#2-deactivate-listing-comment)
  * [Delete Listing Comment](#3-delete-listing-comment)
  * [Get All Children Comment for Listing Comment](#4-get-all-children-comment-for-listing-comment)
  * [Update Listing Comment](#5-update-listing-comment)

* [Listing Locations](#listing-locations)

  * [Create Listing Location](#1-create-listing-location)
  * [Delete Listing Location](#2-delete-listing-location)

* [Listing Updates](#listing-updates)

  * [Create Listing Update](#1-create-listing-update)
  * [Delete Listing Update](#2-delete-listing-update)
  * [Modify Listing Update](#3-modify-listing-update)

* [Listings](#listings)

  * [Create Listing](#1-create-listing)
  * [Deactivate Listing](#2-deactivate-listing)
  * [Delete Listing](#3-delete-listing)
  * [Get All Faqs for a Listing](#4-get-all-faqs-for-a-listing)
  * [Get All Featured Listings](#5-get-all-featured-listings)
  * [Get All Hashtags for a Listing](#6-get-all-hashtags-for-a-listing)
  * [Get All Jobs for a Listing](#7-get-all-jobs-for-a-listing)
  * [Get All Likes for a Listing](#8-get-all-likes-for-a-listing)
  * [Get All Listing Comments for a Listing](#9-get-all-listing-comments-for-a-listing)
  * [Get All Listing Locations for a Listing](#10-get-all-listing-locations-for-a-listing)
  * [Get All Listing Updates for a Listing](#11-get-all-listing-updates-for-a-listing)
  * [Get All Listings](#12-get-all-listings)
  * [Get All Milestones for a Listing](#13-get-all-milestones-for-a-listing)
  * [Get All Participants for a Listing](#14-get-all-participants-for-a-listing)
  * [Get Single Listing](#15-get-single-listing)
  * [Search Listings](#16-search-listings)
  * [Update Listing](#17-update-listing)
  * [Verify and/or Feature Listing](#18-verify-andor-feature-listing)

* [Listings - Organisations (Join / Unjoin)](#listings---organisations-(join--unjoin))

  * [Listing join Organisation](#1-listing-join-organisation)
  * [Listing leave Organisation](#2-listing-leave-organisation)

* [Locations](#locations)

  * [Get All Listings for a Location](#1-get-all-listings-for-a-location)
  * [Get All Locations](#2-get-all-locations)

* [Mailer](#mailer)

  * [Send application email](#1-send-application-email)
  * [Send email](#2-send-email)
  * [Send enquiry email](#3-send-enquiry-email)

* [Milestones](#milestones)

  * [Create Milestone](#1-create-milestone)
  * [Delete Milestone](#2-delete-milestone)
  * [Update Milestone](#3-update-milestone)

* [Organisations](#organisations)

  * [Create Organisation](#1-create-organisation)
  * [Delete Organisation](#2-delete-organisation)
  * [Get All Listings for an Organisation](#3-get-all-listings-for-an-organisation)
  * [Get All Organisations](#4-get-all-organisations)
  * [Get Single Organisation](#5-get-single-organisation)
  * [Update Organisation](#6-update-organisation)

* [Participants](#participants)

  * [Create participant](#1-create-participant)
  * [Delete Participant](#2-delete-participant)

* [Profiles](#profiles)

  * [Get Single Profile](#1-get-single-profile)
  * [Update Profile](#2-update-profile)
  * [Verify Profile (by User ID)](#3-verify-profile-(by-user-id))

* [Programmes](#programmes)

  * [Create Programme](#1-create-programme)
  * [Delete Programme](#2-delete-programme)
  * [Get All Programmes](#3-get-all-programmes)
  * [Get Single Programme](#4-get-single-programme)
  * [Update Programme](#5-update-programme)

* [Users](#users)

  * [Get All Likes for a User](#1-get-all-likes-for-a-user)
  * [Get All Listing Comments for a User](#2-get-all-listing-comments-for-a-user)
  * [Get All Listing Participation for a User](#3-get-all-listing-participation-for-a-user)
  * [Get All Listings Owned by a User](#4-get-all-listings-owned-by-a-user)


--------


## Authentication
User authentication functionality.



### 1. Activate Account (via Email Confirmation)


Activates user account via confirmation of email address used in user registration. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/auth/register/81a1890b0135b02edeeb41dae93a4dba38d4a51d/confirm-email
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Don",
	"email" : "don@gmail.com",
	"password": "123456"
}
```



***More example Requests/Responses:***


##### I. Example Request: Activate Account (via Email Confirmation) (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Don",
	"email" : "don@gmail.com",
	"password": "123456"
}
```



##### I. Example Response: Activate Account (via Email Confirmation) (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA2LCJlbWFpbCI6ImRvbnRheTAyMDlAZ21haWwuY29tIiwiaWF0IjoxNTk2MDQ3MzUyLCJleHAiOjE1OTg2MzkzNTJ9.ux5SoaPBAqfvCKbQanb5T8S3xbyh95HvZ59WYWDv8Bo"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Activate Account (via Email Confirmation) (400 Bad Request - Token expired, invalid, or used)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Don",
	"email" : "don@gmail.com",
	"password": "123456"
}
```



##### II. Example Response: Activate Account (via Email Confirmation) (400 Bad Request - Token expired, invalid, or used)
```js
{
    "success": false,
    "error": "Invalid account activation link. The user account may have been activated already."
}
```


***Status Code:*** 400

<br>



### 2. Forget Password


Generate a reset password token and sends email to user when user forgets password. Token expires in 10min, after which user must send another 'Forget Password' request again. (Permission: Public)

Field rules:
All fields required unless otherwise stated.
email: Valid email address only. Email address will be canonicalized.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/forget-password
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "dontay0209@gmail.com"
}
```



***More example Requests/Responses:***


##### I. Example Request: Forget Password (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "dontay0209@gmail.com"
}
```



##### I. Example Response: Forget Password (200 OK)
```js
{
    "success": true,
    "data": "http://localhost:5000/api/auth/resetpassword/929f3af6d013b30709968fd36fa51ad3647031bf"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Forget Password (404 Not Found - Non-existent user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "dontay0200@gmail.com"
}
```



##### II. Example Response: Forget Password (404 Not Found - Non-existent user)
```js
{
    "success": false,
    "error": "User does not exist."
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Forget Password (400 Bad Request - Invalid email entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "dontay02"
}
```



##### III. Example Response: Forget Password (400 Bad Request - Invalid email entered)
```js
{
    "success": false,
    "error": "Please include a valid email."
}
```


***Status Code:*** 400

<br>



### 3. Get Logged In User via Token


Get details of user in currently logged in session.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/auth/me
```



***More example Requests/Responses:***


##### I. Example Request: Get Logged In User via Token (401 Unauthorised - Not logged in)



##### I. Example Response: Get Logged In User via Token (401 Unauthorised - Not logged in)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Get Logged In User via Token (200 OK)



##### II. Example Response: Get Logged In User via Token (200 OK)
```js
{
    "success": true,
    "data": {
        "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
        "first_name": "User",
        "last_name": "One",
        "email": "user@gmail.com",
        "password": "$2a$10$LeHqGA.ETVf74tLuK1UI2.er9i5hFR9EADSt3TU7VTKRx3buhpxbW",
        "role": "user"
    }
}
```


***Status Code:*** 200

<br>



### 4. Login Admin


Login admin user and create token cookie.

Field rules: 
All fields required unless otherwise stated.
email: Valid email address only. Email address will be canonicalized. 
password: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "admin@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Login User (400 Bad Request - Invalid login credentials)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "don@gmail.com",
	"password": "1234567"
}
```



##### I. Example Response: Login User (400 Bad Request - Invalid login credentials)
```js
{
    "success": false,
    "error": "Invalid login credentials"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Login Admin (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "admin@gmail.com",
	"password": "Abc1234!"
}
```



##### II. Example Response: Login Admin (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5NmIyMTM4LTE3NTQtNGMxNy1hNDA1LTk0MGUyMGFkYzYwMSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjA1NTQ4NjY3LCJleHAiOjE2MDgxNDA2Njd9.0jDnU7Zf-x6tcE3z2Bvmerpe6uRK3QgVpmk1PhzC_Dk"
}
```


***Status Code:*** 200

<br>



### 5. Login User


Login user and create token cookie.

Field rules: 
All fields required unless otherwise stated.
email: Valid email address only. Email address will be canonicalized. 
password: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "user@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Login User (400 Bad Request - Invalid login credentials)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "don@gmail.com",
	"password": "1234567"
}
```



##### I. Example Response: Login User (400 Bad Request - Invalid login credentials)
```js
{
    "success": false,
    "error": "Invalid login credentials"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Login User (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email" : "don@gmail.com",
	"password": "123456"
}
```



##### II. Example Response: Login User (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoicm9uQGdtYWlsLmNvbSIsImNyZWF0ZWRfb24iOiIyMDIwLTA3LTA4VDE3OjQxOjU2LjQzMFoiLCJpYXQiOjE1OTQyMzEyNzgsImV4cCI6MTU5NjgyMzI3OH0.hkr1-C6JWwCIthd2ZUu_W3bxpIQHdCvn8LTnXNWM098"
}
```


***Status Code:*** 200

<br>



### 6. Logout User


Logout and delete token cookie. For current logged in user only.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/auth/logout
```



***More example Requests/Responses:***


##### I. Example Request: Logout User (200 OK)



##### I. Example Response: Logout User (200 OK)
```js
{
    "success": true,
    "data": {}
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Logout User (401 Unauthorised - Not logged in)



##### II. Example Response: Logout User (401 Unauthorised - Not logged in)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



### 7. Register User


User registration with password encryption, sends confirmation email address to activate account. Token expires in 15min, after which user must register again. Permission: Public.

Field rules:
All fields required unless otherwise stated.
first_name: Alphabets and whitespaces only.
last_name: Alphabets and whitespaces only. Optional.
email: Valid email address only. Email address will be canonicalized.
password: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "dontay0209@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Register User (400 Bad Request - User account already exists)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "don@gmail.com",
	"password": "123456"
}
```



##### I. Example Response: Register User (400 Bad Request - User account already exists)
```js
{
    "success": false,
    "error": "Duplicate field value entered: Key (email)=(don@gmail.com) already exists."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Register User (400 Bad Request - Invalid email/password requirement)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Bon",
	"last_name": "Tan",
	"email" : "bon@gmail.com",
	"password": "12345"
}
```



##### II. Example Response: Register User (400 Bad Request - Invalid email/password requirement)
```js
{
    "success": false,
    "error": "Please enter a password with 6 or more characters."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Register User (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "dontay0209@gmail.com",
	"password": "123456"
}
```



##### III. Example Response: Register User (200 OK)
```js
{
    "success": true,
    "data": "http://localhost:5000/api/auth/register/e69f4085f4f847a4983af536ab653a29a27c2b85/confirmemail"
}
```


***Status Code:*** 200

<br>



### 8. Resend Account Activation Email


Resend account activation email for unactivated user. Permission: Private.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/auth/register/resend-confirm-email
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "dontay0209@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Register User (400 Bad Request - User account already exists)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "don@gmail.com",
	"password": "123456"
}
```



##### I. Example Response: Register User (400 Bad Request - User account already exists)
```js
{
    "success": false,
    "error": "Duplicate field value entered: Key (email)=(don@gmail.com) already exists."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Register User (400 Bad Request - Invalid email/password requirement)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Bon",
	"last_name": "Tan",
	"email" : "bon@gmail.com",
	"password": "12345"
}
```



##### II. Example Response: Register User (400 Bad Request - Invalid email/password requirement)
```js
{
    "success": false,
    "error": "Please enter a password with 6 or more characters."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Register User (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Don",
	"last_name": "Tay",
	"email" : "dontay0209@gmail.com",
	"password": "123456"
}
```



##### III. Example Response: Register User (200 OK)
```js
{
    "success": true,
    "data": "http://localhost:5000/api/auth/register/e69f4085f4f847a4983af536ab653a29a27c2b85/confirmemail"
}
```


***Status Code:*** 200

<br>



### 9. Reset Password


Resets user password, based on reset token sent to user when user submitted a 'Forget Password' request (see 'Forget Password' request). Permission: Public.

Field rules:
All fields required unless otherwise stated.
password: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/auth/forget-password/9cd4383ffdde29ce4850d7752d8fce0e384cca71
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"password": "Abcd123!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Reset Password (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"password": "123456"
}
```



##### I. Example Response: Reset Password (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJlbWFpbCI6ImRvbnRheTAyMDlAZ21haWwuY29tIiwiY3JlYXRlZF9vbiI6IjIwMjAtMDctMjVUMTI6MTQ6MjkuNDI0WiIsImlhdCI6MTU5NTY4NDQwNywiZXhwIjoxNTk4Mjc2NDA3fQ.YRUc1zvXtEMgpKU9AVdutHHjJ8ixyD3V4sJYFVMiAV0"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Reset Password (400 Bad Request - Invalid reset token link)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"password": "123456"
}
```



##### II. Example Response: Reset Password (400 Bad Request - Invalid reset token link)
```js
{
    "success": false,
    "error": "Invalid reset password link. This link has expired."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Reset Password (400 Bad Request - Invalid password entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"password": "12345"
}
```



##### III. Example Response: Reset Password (400 Bad Request - Invalid password entered)
```js
{
    "success": false,
    "error": "Please enter a password with 6 or more characters."
}
```


***Status Code:*** 400

<br>



### 10. Update Details


Update logged in user name and email.

Field rules:
At least 1 field must be updated.
first_name: Alphabets and whitespaces only. 
last_name: Alphabets and whitespaces only.
email: Valid email address only. Email address will be canonicalized.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/auth/update-details
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "don@gmail.com",
	"first_name": "Don",
	"last_name": "Tay"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Details (401 Unauthorised)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "don@gmail.com",
	"first_name": "Don",
	"last_name": "Taylor",
}
```



##### I. Example Response: Update Details (401 Unauthorised)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Update Details (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "don@gmail.com",
	"first_name": "Don",
	"last_name": "Taylor"
}
```



##### II. Example Response: Update Details (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkb25AZ21haWwuY29tIiwiY3JlYXRlZF9vbiI6IjIwMjAtMDctMTdUMDk6NDQ6MTUuMTY4WiIsImlhdCI6MTU5NDk3OTI3NiwiZXhwIjoxNTk3NTcxMjc2fQ.peKwAJG3E0Imx5DILZH9nNjgdVaPilgohcGEdSCUIIg"
}
```


***Status Code:*** 200

<br>



##### III. Example Request: Update Details (400 Bad Request - Invalid field entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "gmail.com",
	"first_name": "Don",
	"last_name": "Taylor"
}
```



##### III. Example Response: Update Details (400 Bad Request - Invalid field entered)
```js
{
    "success": false,
    "error": "Please include a valid email."
}
```


***Status Code:*** 400

<br>



### 11. Update Password


Update logged in user password.

Field rules:
All fields required unless otherwise stated.
oldPassword: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.
newPassword: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/auth/update-password
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"oldPassword": "Abc1234!",
	"newPassword": "Abcd123!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Password (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"oldPassword": "123456",
	"newPassword": "1234567"
}
```



##### I. Example Response: Update Password (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkb25AZ21haWwuY29tIiwiY3JlYXRlZF9vbiI6IjIwMjAtMDctMTdUMDk6NDQ6MTUuMTY4WiIsImlhdCI6MTU5NDk3OTM0NywiZXhwIjoxNTk3NTcxMzQ3fQ.EQJuPrtr28SYc8JHVLxs8_z0Y_4Z9MwY1L-ukBkRSV4"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Update Password (401 Unauthorised - Invalid old password)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"oldPassword": "123456",
	"newPassword": "1234567"
}
```



##### II. Example Response: Update Password (401 Unauthorised - Invalid old password)
```js
{
    "success": false,
    "error": "Invalid credentials"
}
```


***Status Code:*** 401

<br>



##### III. Example Request: Update Password (400 Bad Request - Invalid password requirement)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"oldPassword": "123456",
	"newPassword": "12345"
}
```



##### III. Example Response: Update Password (400 Bad Request - Invalid password requirement)
```js
{
    "success": false,
    "error": "Please enter a password with 6 or more characters."
}
```


***Status Code:*** 400

<br>



## Categories
Listing Categories CRUD functionality.



### 1. Get All Categories


Get all categories. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/categories
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Comments (200 OK)



##### I. Example Response: Get All Listing Comments (200 OK)
```js
{
    "success": true,
    "count": 42,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "listing_category_id": 1,
            "category_name": "Health",
            "category_group": "Social"
        },
        {
            "listing_category_id": 2,
            "category_name": "Marriage",
            "category_group": "Social"
        },
        {
            "listing_category_id": 3,
            "category_name": "Education",
            "category_group": "Social"
        },
        {
            "listing_category_id": 4,
            "category_name": "Mentorship",
            "category_group": "Social"
        },
        {
            "listing_category_id": 5,
            "category_name": "Retirement",
            "category_group": "Social"
        },
        {
            "listing_category_id": 6,
            "category_name": "Housing",
            "category_group": "Social"
        },
        {
            "listing_category_id": 7,
            "category_name": "Rental Flats",
            "category_group": "Social"
        },
        {
            "listing_category_id": 8,
            "category_name": "Family",
            "category_group": "Social"
        },
        {
            "listing_category_id": 9,
            "category_name": "Gender",
            "category_group": "Social"
        },
        {
            "listing_category_id": 10,
            "category_name": "Elderly",
            "category_group": "Social"
        },
        {
            "listing_category_id": 11,
            "category_name": "Youth",
            "category_group": "Social"
        },
        {
            "listing_category_id": 12,
            "category_name": "Youth At Risk",
            "category_group": "Social"
        },
        {
            "listing_category_id": 13,
            "category_name": "Pre-School",
            "category_group": "Social"
        },
        {
            "listing_category_id": 14,
            "category_name": "Race",
            "category_group": "Social"
        },
        {
            "listing_category_id": 15,
            "category_name": "Language",
            "category_group": "Social"
        },
        {
            "listing_category_id": 16,
            "category_name": "Science",
            "category_group": "Social"
        },
        {
            "listing_category_id": 17,
            "category_name": "Art",
            "category_group": "Social"
        },
        {
            "listing_category_id": 18,
            "category_name": "Sports",
            "category_group": "Social"
        },
        {
            "listing_category_id": 19,
            "category_name": "Poverty",
            "category_group": "Social"
        },
        {
            "listing_category_id": 20,
            "category_name": "Inequality",
            "category_group": "Social"
        },
        {
            "listing_category_id": 21,
            "category_name": "Recycling",
            "category_group": "Environment"
        },
        {
            "listing_category_id": 22,
            "category_name": "Green",
            "category_group": "Environment"
        },
        {
            "listing_category_id": 23,
            "category_name": "Water",
            "category_group": "Environment"
        },
        {
            "listing_category_id": 24,
            "category_name": "Waste",
            "category_group": "Environment"
        },
        {
            "listing_category_id": 25,
            "category_name": "Food",
            "category_group": "Environment"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get All Listings for a Category


Get all listings for a category, identified by the category name (case-sensitive). Permission: Public.

Req params:
/api/categories/:category_name/listings

category_name - case-sensitive string


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/categories/Health/listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings for a Category (200 OK)



##### I. Example Response: Get All Listings for a Category (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "category_id": 1,
            "category_name": "Health",
            "category_group": "Social",
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "created_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "title": "Supporting COVID-19 Efforts",
            "category": "Health",
            "about": "Triple-buffered client-server installation",
            "tagline": "Emerge stronger together",
            "mission": "streamline web-enabled ROI",
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "listing_email": "fightcovid@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-11-17T07:33:56.159Z",
            "deleted_on": null,
            "nickname": "Aaron",
            "profile_picture": "https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Woodlands"
            ],
            "location_ids": [
                3
            ],
            "keyword_vector": "'-19':3 'covid':2 'effort':4 'health':5 'support':1 'woodland':6"
        },
        {
            "category_id": 1,
            "category_name": "Health",
            "category_group": "Social",
            "listing_id": "0de8f600-28a8-11eb-9eae-89e03086f17e",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "New title 1",
            "category": "Health",
            "about": "test about",
            "tagline": "test tagline",
            "mission": "test mission",
            "listing_url": "www.test.com",
            "listing_email": "new_listing@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2019-08-15T08:45:43.415Z",
            "end_date": "2020-07-17T08:45:43.415Z",
            "created_on": "2020-11-17T07:39:41.794Z",
            "updated_on": "2020-11-17T07:39:41.794Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": null,
            "location_ids": null,
            "keyword_vector": null
        },
        {
            "category_id": 1,
            "category_name": "Health",
            "category_group": "Social",
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Updated title 1",
            "category": "Health",
            "about": "Updated about",
            "tagline": "Updated tagline",
            "mission": "Updated mission",
            "listing_url": "www.updated-test.com",
            "listing_email": "updated_email@gmail.com",
            "listing_status": "completed",
            "pics": [
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
            ],
            "is_published": true,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2018-08-15T08:45:43.415Z",
            "end_date": "2020-01-30T08:45:43.415Z",
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-11-17T07:46:43.565Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Admiralty",
                "Kranji",
                "Woodlands"
            ],
            "location_ids": [
                1,
                2,
                3
            ],
            "keyword_vector": "'1':3 'admiralti':5 'health':4 'kranji':6 'titl':2 'updat':1 'woodland':7"
        }
    ]
}
```


***Status Code:*** 200

<br>



## Faqs
Faqs CRUD functionality.



### 1. Create Faq


Create FAQ. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
question - Non-empty string.
answer - Optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/faqs
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"question": "What roles are available for me?",
	"answer": "Refer to our job listings for the latest roles!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Faq (403 Forbidden - Non-admin and non-listing owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"question": "What roles are available for me?",
	"answer": "Refer to our job listings for the latest roles!"
}
```



##### I. Example Response: Create Faq (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update FAQ for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create Faq (400 Bad Request - Invalid input field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"question": "What roles are available for me?",
	"answer": "Refer to our job listings for the latest roles!"
}
```



##### II. Example Response: Create Faq (400 Bad Request - Invalid input field)
```js
{
    "success": false,
    "error": "Please include a valid listing_id."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create Faq (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"question": "What roles are available for me?",
	"answer": "Refer to our job listings for the latest roles!"
}
```



##### III. Example Response: Create Faq (201 Created)
```js
{
    "success": true,
    "data": {
        "faq_id": 22,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "question": "What roles are available for me?",
        "answer": "Refer to our job listings for the latest roles!"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Faq


Delete FAQ identified by faq id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/faqs/23
```



***More example Requests/Responses:***


##### I. Example Request: Delete Faq (403 Forbidden - Non-admin and non-listing owner)



##### I. Example Response: Delete Faq (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update FAQ for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Faq (400 Bad Request - Non-existent FAQ)



##### II. Example Response: Delete Faq (400 Bad Request - Non-existent FAQ)
```js
{
    "success": false,
    "error": "Faq does not exist"
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Delete Faq (200 OK)



##### III. Example Response: Delete Faq (200 OK)
```js
{
    "success": true,
    "data": {
        "faq_id": 1,
        "listing_id": 8,
        "question": "consequat nulla nisl nunc nisl duis bibendum felis",
        "answer": "24/7"
    }
}
```


***Status Code:*** 200

<br>



### 3. Update Faq


Update FAQ identified by faq id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.
question - Non-empty string. 
answer


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/faqs/23
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"question": "What is the commitment like?",
	"answer": "It varies! Refer to our individual job listings for more details!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Faq (403 Forbidden - Non-admin and non-listing owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"question": "What is the commitment like?",
	"answer": "It varies! Refer to our individual job listings for more details!"
}
```



##### I. Example Response: Update Faq (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update FAQ for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Update Faq (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"question": "What is the commitment like?",
	"answer": "It varies! Refer to our individual job listings for more details!"
}
```



##### II. Example Response: Update Faq (200 OK)
```js
{
    "success": true,
    "data": {
        "faq_id": 1,
        "listing_id": 8,
        "question": "What is the commitment like?",
        "answer": "It varies! Refer to our individual job listings for more details!"
    }
}
```


***Status Code:*** 200

<br>



##### III. Example Request: Update Faq (400 Bad Request - Non-existent FAQ)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"question": "What is the commitment like?",
	"answer": "It varies! Refer to our individual job listings for more details!"
}
```



##### III. Example Response: Update Faq (400 Bad Request - Non-existent FAQ)
```js
{
    "success": false,
    "error": "Faq does not exist"
}
```


***Status Code:*** 400

<br>



## File Upload
File upload endpoints.



### 1. File Upload


File upload. Response data object shows the upload information. Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
file - Valid file.


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/api/file-upload
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| uploads |  | Test jpg file |



***More example Requests/Responses:***


##### I. Example Request: Single File Upload V2 (200 OK)



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| upload |  | Test jpg file |



##### I. Example Response: Single File Upload V2 (200 OK)
```js
{
    "success": true,
    "data": {
        "location": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-20201206010937.jpg",
        "key": "test-pic-2-20201206010937.jpg",
        "bucket": "kampong-dev"
    }
}
```


***Status Code:*** 200

<br>



## Hashtags
Listing Hashtags CRUD functionality.



### 1. Create Hashtag


Create hashtag for listing. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
tag - String starting with '#' followed by 2-20 alphanumeric and '-'/'_' characters.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/hashtags
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"tag": "#shine-a-light"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Milestone (400 Bad Request - Invalid value entered, empty description)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"description": " ",
	"date": "2020-01-30 16:45:43.41585+08"
}
```



##### I. Example Response: Create Milestone (400 Bad Request - Invalid value entered, empty description)
```js
{
    "success": false,
    "error": "Please include a valid description."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Create Hashtag (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"tag": "#shine-a-light"
}
```



##### II. Example Response: Create Hashtag (201 Created)
```js
{
    "success": true,
    "data": {
        "hashtag_id": 12,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "tag": "#shine-a-light"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Hashtag


Delete hashtag identified by hashtag id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/hashtags/15
```



***More example Requests/Responses:***


##### I. Example Request: Delete Hashtag (200 OK)



##### I. Example Response: Delete Hashtag (200 OK)
```js
{
    "success": true,
    "data": {
        "hashtag_id": 1,
        "listing_id": 4,
        "tag": "#hello"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Delete Hashtag (404 Not Found - Non-existent hashtag id)



##### II. Example Response: Delete Hashtag (404 Not Found - Non-existent hashtag id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



## Jobs
Jobs CRUD functionality.



### 1. Create Job


Create job. Permission: Owner/Admin.

Field rules: 
All fields required unless otherwise stated. 
listing_id - Valid integer, existing listing id.
job_title - Non-empty string.
job_description - Optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/jobs
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"job_title": "Social Media Manager",
	"job_description": "Manage our social media outreach on Facebook, Instagram and LinkedIn."
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Job (400 Bad Request - Invalid value entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"job_title": "",
	"job_description": "Manage our social media outreach on Facebook, Instagram and LinkedIn."
}
```



##### I. Example Response: Create Job (400 Bad Request - Invalid value entered)
```js
{
    "success": false,
    "error": "Please include a valid job title."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Create Job (403 Forbidden - Non-admin and non-listing owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"job_title": "Social Media Manager",
	"job_description": "Manage our social media outreach on Facebook, Instagram and LinkedIn."
}
```



##### II. Example Response: Create Job (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update jobs in this listing"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Create Job (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"job_title": "Social Media Manager",
	"job_description": "Manage our social media outreach on Facebook, Instagram and LinkedIn."
}
```



##### III. Example Response: Create Job (201 Created)
```js
{
    "success": true,
    "data": {
        "job_id": 22,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "job_title": "Social Media Manager",
        "job_description": "Manage our social media outreach on Facebook, Instagram and LinkedIn.",
        "deleted_on": null
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Job


Delete job identified by job id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/jobs/22
```



***More example Requests/Responses:***


##### I. Example Request: Delete Job (400 Bad Request - Non-existent job id)



##### I. Example Response: Delete Job (400 Bad Request - Non-existent job id)
```js
{
    "success": false,
    "error": "Job does not exist"
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Delete Job (403 Forbidden - Non-admin)



##### II. Example Response: Delete Job (403 Forbidden - Non-admin)
```js
{
    "success": false,
    "error": "Not authorised to delete jobs in this listing"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Delete Job (200 OK)



##### III. Example Response: Delete Job (200 OK)
```js
{
    "success": true,
    "data": {
        "job_id": 1,
        "listing_id": 8,
        "job_title": "Account Representative I",
        "job_description": "Polarised next generation alliance"
    }
}
```


***Status Code:*** 200

<br>



### 3. Update Job


Update job identified by job id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.
job_title - Non-empty string.
job_description


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/jobs/22
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"job_title": "Partnership Associate",
	"job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Job (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"job_title": "Partnership Associate",
	"job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
}
```



##### I. Example Response: Update Job (200 OK)
```js
{
    "success": true,
    "data": {
        "job_id": 1,
        "listing_id": 1,
        "job_title": "Partnership Associate",
        "job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Update Job (400 Bad Request - Invalid value entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"job_title": "  ",
	"job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
}
```



##### II. Example Response: Update Job (400 Bad Request - Invalid value entered)
```js
{
    "success": false,
    "error": "Please include a valid job title."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Update Job (400 Bad Request - Non-existent job)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"job_title": "Partnership Associate",
	"job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
}
```



##### III. Example Response: Update Job (400 Bad Request - Non-existent job)
```js
{
    "success": false,
    "error": "Job does not exist"
}
```


***Status Code:*** 400

<br>



##### IV. Example Request: Update Job (403 Forbidden - Non-admin and non-listing owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"job_title": "Partnership Associate",
	"job_description": "Manage our intitiatives various stakeholders, and source for new partnerships."
}
```



##### IV. Example Response: Update Job (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update jobs in this listing"
}
```


***Status Code:*** 403

<br>



## Likes
Likes (Users-Listings) CRUD functionality.



### 1. Like Listing


Like a listing. Permission: Private.

Field rules: 
All fields required unless otherwise stated. 
listing_id - Valid integer, existing listing id.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/likes
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f"
}
```



***More example Requests/Responses:***


##### I. Example Request: Like Listing (400 Bad Request - Non-existent listing id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 231
}
```



##### I. Example Response: Like Listing (400 Bad Request - Non-existent listing id)
```js
{
    "success": false,
    "error": "Foreign key value does not exist: Key (listing_id)=(231) is not present in table \"listings\"."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Like Listing (401 Unauthorized - Non-logged in user cannot like)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 2
}
```



##### II. Example Response: Like Listing (401 Unauthorized - Non-logged in user cannot like)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



##### III. Example Request: Like Listing (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae"
}
```



##### III. Example Response: Like Listing (201 Created)
```js
{
    "success": true,
    "data": {
        "like_id": 15,
        "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae"
    }
}
```


***Status Code:*** 201

<br>



### 2. Unlike Listing


Unlike a previously liked listing identified by like id. Permission: Private.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/likes/1
```



***More example Requests/Responses:***


##### I. Example Request: Unlike Listing (200 OK)



##### I. Example Response: Unlike Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "like_id": 1,
        "user_id": 1,
        "listing_id": 2
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Unlike Listing (404 Not Found - Non-existent listing id)



##### II. Example Response: Unlike Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Unlike Listing (403 Forbidden - Not authorised to delete likes from other users)



##### III. Example Response: Unlike Listing (403 Forbidden - Not authorised to delete likes from other users)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### IV. Example Request: Unlike Listing (401 Unauthorised - Unauthenticated user cannot delete likes)



##### IV. Example Response: Unlike Listing (401 Unauthorised - Unauthenticated user cannot delete likes)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



## Listing Comments
Listing Comments CRUD functionality.



### 1. Create Listing Comment


Create listing comment. Permission: Private.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
comment - Non-empty.
reply_to_id - Valid integer, existing listing comment id. Optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listing-comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"comment": "Very intersting!",
	"reply_to_id": "1"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing Comment (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"comment": "Very intersting!",
	"reply_to_id": "1"
}
```



##### I. Example Response: Create Listing Comment (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_comment_id": 17,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
        "comment": "Very intersting!",
        "reply_to_id": 1,
        "created_on": "2020-08-17T16:40:14.624Z",
        "updated_on": "2020-08-17T16:40:14.624Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 201

<br>



### 2. Deactivate Listing Comment


Deactivate (soft-delete) listing comment identified by listing comment id. Permission: Admin/Owner/Private.

Field rules: None.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/listing-comments/17/deactivate
```



***More example Requests/Responses:***


##### I. Example Request: Deactivate Listing Comment (200 OK)



##### I. Example Response: Deactivate Listing Comment (200 OK)
```js
{
    "success": true,
    "data": {
        "deleted_on": "2020-08-16T10:09:07.000Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. Delete Listing Comment


Delete listing comment identified by listing comment id. Permission: Admin/Owner/Private.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listing-comments/17
```



***More example Requests/Responses:***


##### I. Example Request: Delete Listing Comment (200 OK)



##### I. Example Response: Delete Listing Comment (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_comment_id": 1,
        "listing_id": 18,
        "user_id": 51,
        "comment": "Updated Comment!",
        "reply_to_id": null,
        "created_on": "2020-03-04T02:03:23.000Z",
        "updated_on": "2020-08-12T08:52:08.000Z"
    }
}
```


***Status Code:*** 200

<br>



### 4. Get All Children Comment for Listing Comment


Get all children listing comment (ie. listing comment chain) of a listing comment (inclusive). Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-comments/3/children
```



***More example Requests/Responses:***


##### I. Example Request: Get All Children Comment for Listing Comment (200 OK)



##### I. Example Response: Get All Children Comment for Listing Comment (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_comment_id": 3,
            "listing_id": 20,
            "user_id": 49,
            "comment": "revolutionize out-of-the-box interfaces",
            "reply_to_id": 1,
            "created_on": "2019-11-23T20:26:00.000Z",
            "updated_on": "2020-08-03T18:55:30.000Z",
            "deleted_on": null,
            "nickname": "Wallis",
            "profile_picture": "https://robohash.org/ullamundevoluptatem.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 8,
            "listing_id": 9,
            "user_id": 35,
            "comment": "harness viral web services",
            "reply_to_id": 3,
            "created_on": "2019-11-16T22:38:44.000Z",
            "updated_on": "2019-12-10T10:58:28.000Z",
            "deleted_on": null,
            "nickname": "Brynne",
            "profile_picture": "https://robohash.org/etharumet.png?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 11,
            "listing_id": 2,
            "user_id": 87,
            "comment": "recontextualize leading-edge networks",
            "reply_to_id": 3,
            "created_on": "2020-06-24T13:21:47.000Z",
            "updated_on": "2020-06-20T17:48:47.000Z",
            "deleted_on": null,
            "nickname": "Paloma",
            "profile_picture": "https://robohash.org/praesentiumanimiquae.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 12,
            "listing_id": 6,
            "user_id": 79,
            "comment": "orchestrate intuitive deliverables",
            "reply_to_id": 11,
            "created_on": "2019-10-05T07:40:48.000Z",
            "updated_on": "2020-06-08T11:49:10.000Z",
            "deleted_on": null,
            "nickname": "Brittan",
            "profile_picture": "https://robohash.org/nostrumofficiisipsam.png?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 15,
            "listing_id": 12,
            "user_id": 72,
            "comment": "grow integrated systems",
            "reply_to_id": 11,
            "created_on": "2020-05-15T12:35:48.000Z",
            "updated_on": "2019-11-07T20:23:03.000Z",
            "deleted_on": null,
            "nickname": "Godwin",
            "profile_picture": "https://robohash.org/voluptatibusrerumdolorem.png?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 16,
            "listing_id": 16,
            "user_id": 83,
            "comment": "implement innovative platforms",
            "reply_to_id": 11,
            "created_on": "2020-06-17T01:31:57.000Z",
            "updated_on": "2020-07-05T18:43:45.000Z",
            "deleted_on": null,
            "nickname": "Eba",
            "profile_picture": "https://robohash.org/commodimagnitempora.png?size=500x500&set=set1"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 5. Update Listing Comment


Update listing comment identified by listing comment id. Permission: Admin/Owner/Private.

Field rules:
At least one field must be updated.
comment - Non-empty.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listing-comments/17
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"comment": "Updated Comment!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Listing Comment (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"comment": "Updated Comment!"
}
```



##### I. Example Response: Update Listing Comment (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_comment_id": 1,
        "listing_id": 18,
        "user_id": 51,
        "comment": "Updated Comment!",
        "reply_to_id": null,
        "created_on": "2020-03-04T02:03:23.000Z",
        "updated_on": "2020-08-12T08:52:08.000Z"
    }
}
```


***Status Code:*** 200

<br>



## Listing Locations
Listing Locations CRUD functionality.



### 1. Create Listing Location


Create listing location for listing. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid UUID, existing listing id.
location_id - Valid integer, existing location id.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listing-locations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"location_id": 6
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing Location (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"location_id": 7
}
```



##### I. Example Response: Create Listing Location (201 Created)
```js
{
    "success": true,
    "data": {
        "listing_location_id": 11,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "location_id": 7
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Listing Location


Delete listing location identified by listing location id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listing-locations/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Listing Location (200 OK)



##### I. Example Response: Delete Listing Location (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_location_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "location_id": 1
    }
}
```


***Status Code:*** 200

<br>



## Listing Updates
Listing Updates CRUD functionality.



### 1. Create Listing Update


Create listing update. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
description - Non-empty.
pics - Array of URL path to picture.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listing-updates
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
    "listing_update_description": "First Update",
    "pics": [
        "imgur.com/abc",
        "imgur.com/test123",
        "imgur.com/def",
        "imgur.com/fgh",
        "imgur.com/jkl"
    ]
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing Update (401 Unauthorised - User not logged in)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | multipart/form-data | Form Data Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 3 JPG files |
| listing_id | 1 |  |
| description | First Update |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |



##### I. Example Response: Create Listing Update (401 Unauthorised - User not logged in)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Create Listing Update (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
    "listing_update_description": "First Update",
    "pics": [
        "imgur.com/abc",
        "imgur.com/test123",
        "imgur.com/def",
        "imgur.com/fgh",
        "imgur.com/jkl"
    ]
}
```



##### II. Example Response: Create Listing Update (201 Created)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 8,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "listing_update_description": "First Update",
        "pics": [
            "imgur.com/abc",
            "imgur.com/test123",
            "imgur.com/def",
            "imgur.com/fgh",
            "imgur.com/jkl"
        ],
        "created_on": "2020-12-12T08:04:06.287Z",
        "updated_on": "2020-12-12T08:04:06.287Z"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Listing Update


Delete single listing update identified by update id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listing-updates/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Listing Update (404 Not Found)



##### I. Example Response: Delete Listing Update (404 Not Found)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Delete Listing Update (200 OK)



##### II. Example Response: Delete Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "listing_update_description": "Horizontal dynamic encoding",
        "pics": [
            "https://robohash.org/utetut.bmp?size=500x500&set=set1",
            "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
            "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
            "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
            "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1"
        ],
        "created_on": "2020-05-04T18:20:02.000Z",
        "updated_on": "2020-04-27T17:06:06.000Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. Modify Listing Update


Modify listing update identified by update id. Permission: Owner/Admin.

Field rules:
At least one field must be updated.
description - Non-empty.
pics - Array of URL path to picture.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listing-updates/2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "milestone_description": "New Milestone Achieved!",
    "pics": ["instagram.com", "facebook.com", "imgur.com", "tiktok.com", "reddit.com"]
}
```



***More example Requests/Responses:***


##### I. Example Request: Modify Listing Update (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "milestone_description": "New Milestone Achieved!",
    "pics": ["instagram.com", "facebook.com", "imgur.com", "tiktok.com", "reddit.com"]
}
```



##### I. Example Response: Modify Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 2,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "listing_update_description": "Inverse eco-centric conglomeration",
        "pics": [
            "instagram.com",
            "facebook.com",
            "imgur.com",
            "tiktok.com",
            "reddit.com"
        ],
        "created_on": "2020-07-08T04:26:55.000Z",
        "updated_on": "2020-12-12T08:04:23.892Z"
    }
}
```


***Status Code:*** 200

<br>



## Listings
Listings CRUD functionality.



### 1. Create Listing


Create listing. Permission: Private.

Field rules:
All fields required unless otherwise stated.
title - Non-empty.
category - Non-empty.
about - Optional.
tagline - Optional.
mission - Optional.
listing_url - Valid URL. Optional.
listing_status - 'ongoing' | 'completed'.
listing_email - Valid email.
is_published - Boolean. Optional. Default to false.
start_date - Valid SQL datetime. Optional. Default to current datetime.
end_date - Valid SQL datetime. Optional.
organisation_id - Valid integer and existing organisation id. Optional.
pics - Array of URL paths to uploaded JPG/PNG file. Required. Otherwise, pass empty array.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listings
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_title": "New title 1",
    "category": "Health",
    "about": "test about",
    "tagline": "test tagline",
    "mission": "test mission",
    "listing_url": "www.test.com",
    "pics": [
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
    ],
    "is_published": false,
    "start_date": "2019-08-15 16:45:43.41585+08",
    "end_date": "2020-07-17 16:45:43.41585+08",
    "listing_email": "new_listing@gmail.com",
    "listing_status": "ongoing",
    "overview": "Listing's overview",
    "problem": "Problem the listing is tackling",
    "solution": "We aim to solve this by mobilising the community.",
    "outcome": "We hope to create a close-knitted community."
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing (401 Unauthorised - Not logged in user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "title": "New title 1",
    "category": "test category",
    "about": "test about",
    "tagline": "test tagline",
    "mission": "test mission",
    "listing_url": "www.test.com",
    "pic1": "https://robohash.org/fugitporrofacilis.bmp?size=50x50&set=set1",
    "pic2": "https://robohash.org/velitvoluptasmodi.bmp?size=50x50&set=set1",
    "pic3": "https://robohash.org/temporanamharum.png?size=50x50&set=set1",
    "pic4": "https://robohash.org/doloremaliasnulla.bmp?size=50x50&set=set1",
    "pic5": "https://robohash.org/omnisrecusandaeesse.jpg?size=50x50&set=set1",
    "is_published": "false",
    "start_date": "2019-08-15 16:45:43.41585+08",
    "end_date": "2020-07-17 16:45:43.41585+08"
}
```



##### I. Example Response: Create Listing (401 Unauthorised - Not logged in user)
```js
{
    "success": false,
    "error": "Not authorised to access this route"
}
```


***Status Code:*** 401

<br>



##### II. Example Request: Create Listing (400 Bad Request - Missing title field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| category | test category |  |
| about | test about |  |
| tagline | test tagline |  |
| mission | test mission |  |
| listing_url | www.test.com |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |
| is_published | false |  |
| start_date | 2019-08-15 16:45:43.41585+08 |  |
| end_date | 2020-07-17 16:45:43.41585+08 |  |
| pics |  |  |



##### II. Example Response: Create Listing (400 Bad Request - Missing title field)
```js
{
    "success": false,
    "error": "Please include a valid title."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create Listing (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_title": "New title 1",
    "category": "Health",
    "about": "test about",
    "tagline": "test tagline",
    "mission": "test mission",
    "listing_url": "www.test.com",
    "pics": [
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
    ],
    "is_published": false,
    "start_date": "2019-08-15 16:45:43.41585+08",
    "end_date": "2020-07-17 16:45:43.41585+08",
    "listing_email": "new_listing@gmail.com",
    "listing_status": "ongoing",
    "overview": "Listing's overview",
    "problem": "Problem the listing is tackling",
    "solution": "We aim to solve this by mobilising the community.",
    "outcome": "We hope to create a close-knitted community."
}
```



##### III. Example Response: Create Listing (201 Created)
```js
{
    "success": true,
    "data": {
        "listing_id": "c68139a0-3c50-11eb-b943-edcbc8c990da",
        "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
        "listing_title": "New title 1",
        "category": "Health",
        "about": "test about",
        "tagline": "test tagline",
        "mission": "test mission",
        "overview": "Listing's overview",
        "problem": "Problem the listing is tackling",
        "solution": "We aim to solve this by mobilising the community.",
        "outcome": "We hope to create a close-knitted community.",
        "listing_url": "www.test.com",
        "listing_email": "new_listing@gmail.com",
        "listing_status": "ongoing",
        "pics": [
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
        ],
        "is_published": false,
        "is_verified": false,
        "is_featured": false,
        "start_date": "2019-08-15T08:45:43.415Z",
        "end_date": "2020-07-17T08:45:43.415Z",
        "created_on": "2020-12-12T08:05:19.035Z",
        "updated_on": "2020-12-12T08:05:19.035Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 201

<br>



### 2. Deactivate Listing


Deactivate (soft delete) listing. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/deactivate
```



***More example Requests/Responses:***


##### I. Example Request: Deactivate Listing (403 Forbidden - Unauthorised deactivation by non-admin non-owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "is_verified": "true"
}
```



##### I. Example Response: Deactivate Listing (403 Forbidden - Unauthorised deactivation by non-admin non-owner)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Deactivate Listing (200 OK)



##### II. Example Response: Deactivate Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "organisation_id": null,
        "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
        "title": "Updated title 1",
        "category": "Updated category",
        "about": "Updated about",
        "tagline": "Updated tagline",
        "mission": "Updated mission",
        "listing_url": "www.updated-test.com",
        "pic1": "https://robohash.org/nesciuntliberovoluptate.jpg?size=500x500&set=set1",
        "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
        "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
        "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
        "pic5": null,
        "is_published": true,
        "is_verified": true,
        "start_date": "2018-08-15T08:45:43.416Z",
        "end_date": "2020-01-30T08:45:43.416Z",
        "created_on": "2020-08-17T15:24:50.398Z",
        "deleted_on": "2020-08-17T15:51:28.000Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. Delete Listing


Delete single listing. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listings/e411bd80-d5cf-49ac-b847-18c9fc13377a
```



***More example Requests/Responses:***


##### I. Example Request: Delete Listing (400 Bad Request - Listing does not exist)



##### I. Example Response: Delete Listing (400 Bad Request - Listing does not exist)
```js
{
    "success": false,
    "error": "Listing does not exist"
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Delete Listing (403 Forbidden - Non-admin and non-listing-owner)



##### II. Example Response: Delete Listing (403 Forbidden - Non-admin and non-listing-owner)
```js
{
    "success": false,
    "error": "User not authorised to delete this listing"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Delete Listing (200 OK)



##### III. Example Response: Delete Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_id": "e411bd80-d5cf-49ac-b847-18c9fc13377a",
        "created_by": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
        "listing_title": "Project Donation Drive",
        "category": "Elderly",
        "about": "Adaptive disintermediate Graphical User Interface",
        "tagline": "Bridging communities",
        "mission": "e-enable dot-com metrics",
        "overview": "Integrated fresh-thinking parallelism",
        "problem": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "solution": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "outcome": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
        "listing_url": "http://i2i.jp/rhoncus/dui/vel.jpg",
        "listing_email": "donationdrive2020@gmail.com",
        "listing_status": "completed",
        "pics": [
            "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1",
            "https://robohash.org/nonquodquam.png?size=500x500&set=set1",
            "https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1"
        ],
        "is_published": false,
        "is_verified": false,
        "is_featured": false,
        "start_date": "2020-03-19T03:04:15.000Z",
        "end_date": null,
        "created_on": "2020-08-20T09:36:45.815Z",
        "updated_on": "2020-12-12T08:19:57.597Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 200

<br>



### 4. Get All Faqs for a Listing


Get all faqs for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/faqs
```



***More example Requests/Responses:***


##### I. Example Request: Get All Faqs for a Listing (404 Not Found - Non-existent listing)



##### I. Example Response: Get All Faqs for a Listing (404 Not Found - Non-existent listing)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Faqs for a Listing (200 OK)



##### II. Example Response: Get All Faqs for a Listing (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "faq_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "question": "consequat nulla nisl nunc nisl duis bibendum felis",
            "answer": "24/7"
        },
        {
            "faq_id": 2,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "question": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
            "answer": "Graphic Interface"
        },
        {
            "faq_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "question": "mauris vulputate elementum nullam varius nulla facilisi cras",
            "answer": "conglomeration"
        },
        {
            "faq_id": 4,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "question": "felis donec semper sapien a libero nam dui proin leo odio porttitor",
            "answer": "Visionary"
        },
        {
            "faq_id": 5,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "question": "congue risus semper porta volutpat quam",
            "answer": "logistical"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 5. Get All Featured Listings


Get all featured listings. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/featured
```



***More example Requests/Responses:***


##### I. Example Request: Get All Featured Listings (200 OK)



##### I. Example Response: Get All Featured Listings (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "Project Kampong",
            "category": "Technology",
            "about": null,
            "tagline": "With Kampong you can",
            "mission": "To build a platform that connects people with ideas and skills to build and track social good project initiatives",
            "overview": "Formed in Sept 2019, a result of the Youth Action Challenge under the Ministry of Culture, Community, and Youth (MCCY), National Youth Council (NYC) and People's Association Youth Movement (PAYM). PKG hopes to understand the existing gaps in the communication & information network systems which are utilized in the Social Sector in Singapore.\n\n\nOur platform seeks to serve as an integrative shared central platform starting by creating visibility on completed and ongoing social good activities/initiatives. The aim of PKG is to lower the barrier for stakeholders to collaborate and create sustainable projects with trackable impacts.\nThe current members of Project Kampong met each other at the YAC workshops hosted, ideated and formed Project Kampong.",
            "problem": "Current providers include Volunteer.sg & Giving.sg. However, these platforms are not able to fully support the growth of initiatives but are instead a depository of resources to tap on for manpower and funds respectively. PKG would like to build capacity to meet the information visibility gap in the social sector. Being an aggregator or ecosystem builder is a growing trend with the likes of Trybe and A Good Space. However, the ecosystems in which these organizations have built are not available openly.\n\n\nThe restriction of such information has resulted in a lack of benchmarking in efforts directed towards addressing social issues. There is uncertainty as to who and how is actively working towards solving that problem. The lack of visibility and communication results in similar initiatives being created and sometimes funded from the same source.\n\n\nThe sooner this capacity is built, the sooner PKG will be able to engage the prospective users to efficiently start their own initiatives or find existing ones to join and contribute.\nPKG operates and develops in a series of sprints whereby in each sprint, a new feature will be rolled out, tested and deployed.",
            "solution": "Project Kampong is an online platform aggregator for youths to connect, collaborate and create social good initiatives for the benefit of their respective communities.\nThrough skills and idea matching and intuitive progress tracking, we aim to be an online platform that collates and promotes collaboration.\n\nAs part of the Singapore's TogetherSG movement, having a shared central network system is crucial towards the aim of community development. Collaborative systems and Visibility are key areas in which focus, and resources should be poured into. Having an asset mapping tool is essential towards any initiatives or goals served by platforms like Project Kampong.",
            "outcome": "Youths today are becoming increasingly engaged in social issues. However, when trying to kick start their ideas, they often bump into a couple of problems: the lack of connection with people with the right skills, the resources to expand the ideas, or a platform to commit to. Youths that do start their ideas also face issues with project sustainability, such as making sure their ideas continue to deliver impact and staying afloat in the long run.",
            "listing_url": "www.test.com",
            "listing_email": "joinourkampong@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": true,
            "start_date": "2020-08-20T20:50:15.047Z",
            "end_date": null,
            "created_on": "2020-08-20T20:50:15.047Z",
            "updated_on": "2020-12-03T16:57:05.934Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Project Kampong is a youth-led platform dedicated to connecting young Singaporean leaders to build social good initiatives, together. By breaking down the barriers youths face in finding ideas and/or members, Project Kampong hopes to create a more level playing field that supports youth to innovate and  pursue their passions.",
                    "question": "Who is behind Project Kampong?"
                }
            ],
            "tags": [
                "#kampong",
                "#socialgood",
                "#initiative"
            ],
            "jobs": null,
            "user_likes": null,
            "locations": null,
            "listing_updates": null,
            "milestone_description": [
                "Profile Listing",
                "Location",
                "One-Pager Template for Project Listing Platform",
                "Project Browsing and Filtering",
                "Individual Portfolio Dashboard",
                "Project- Profile Matching & Recommendation",
                "On-Platform Chat"
            ],
            "participants": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 6. Get All Hashtags for a Listing


Get all hashtags for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/hashtags
```



***More example Requests/Responses:***


##### I. Example Request: Get All Hashtags for a Listing (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Hashtags for a Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Hashtags for a Listing (200 OK)



##### II. Example Response: Get All Hashtags for a Listing (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "hashtag_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "tag": "#broker0"
        },
        {
            "hashtag_id": 2,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "tag": "#sandyfirth1"
        },
        {
            "hashtag_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "tag": "#tudhope2"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 7. Get All Jobs for a Listing


Get all jobs for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/jobs
```



***More example Requests/Responses:***


##### I. Example Request: Get All Jobs for a Listing (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Jobs for a Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Jobs for a Listing (200 OK)



##### II. Example Response: Get All Jobs for a Listing (200 OK)
```js
{
    "success": true,
    "count": 5,
    "data": [
        {
            "job_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "job_title": "Account Representative I",
            "job_description": "Polarised next generation alliance",
            "deleted_on": null
        },
        {
            "job_id": 2,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "job_title": "Project Manager",
            "job_description": "Ameliorated 24 hour structure",
            "deleted_on": null
        },
        {
            "job_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "job_title": "Teacher",
            "job_description": "Enhanced 6th generation portal",
            "deleted_on": null
        },
        {
            "job_id": 4,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "job_title": "VP Accounting",
            "job_description": "Multi-channelled local pricing structure",
            "deleted_on": null
        },
        {
            "job_id": 5,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "job_title": "Office Assistant IV",
            "job_description": "Vision-oriented explicit moratorium",
            "deleted_on": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 8. Get All Likes for a Listing


Get all likes for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/likes
```



***More example Requests/Responses:***


##### I. Example Request: Get All Likes for a Listing (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Likes for a Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Likes for a Listing (200 OK)



##### II. Example Response: Get All Likes for a Listing (200 OK)
```js
{
    "success": true,
    "count": 4,
    "data": [
        {
            "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
            "like_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "nickname": "Admin",
            "profile_picture": "https://robohash.org/autvelautem.jpg?size=500x500&set=set1",
            "about": "Quality-focused impactful projection",
            "gender": "o",
            "dob": "1985-04-17T16:43:59.000Z",
            "interest": "Geological Engineer",
            "phone": "97690390",
            "facebook_link": "http://baidu.com/ipsum/primis/in/faucibus/orci/luctus.xml",
            "twitter_link": "http://nhs.uk/at/diam/nam.png",
            "instagram_link": "http://nasa.gov/pede/justo/eu/massa/donec/dapibus/duis.aspx",
            "linkedin_link": "https://linkedin.com/ante/vestibulum/ante/ipsum/primis/in.json",
            "is_verified": false,
            "created_on": "2020-08-17T15:24:50.398Z"
        },
        {
            "user_id": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "like_id": 4,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "nickname": "Derrick",
            "profile_picture": null,
            "about": "Inverse local strategy",
            "gender": "m",
            "dob": "1990-05-07T07:40:00.000Z",
            "interest": "Software Consultant",
            "phone": "96831702",
            "facebook_link": "https://jigsy.com/eu/interdum/eu/tincidunt/in.html",
            "twitter_link": "http://nasa.gov/nisi/at/nibh/in/hac/habitasse.png",
            "instagram_link": "https://360.cn/sed/nisl/nunc/rhoncus/dui/vel.jpg",
            "linkedin_link": "https://cbc.ca/id/luctus/nec/molestie/sed/justo/pellentesque.png",
            "is_verified": false,
            "created_on": "2020-08-17T15:24:50.398Z"
        },
        {
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "like_id": 7,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1",
            "about": "Down-sized disintermediate circuit",
            "gender": "f",
            "dob": "2003-09-22T00:32:55.000Z",
            "interest": "Statistician IV",
            "phone": "87685829",
            "facebook_link": "https://tripadvisor.com/ornare/imperdiet.png",
            "twitter_link": "https://google.com/quis/orci/nullam/molestie/nibh/in/lectus.xml",
            "instagram_link": "http://1und1.de/in/libero/ut/massa.png",
            "linkedin_link": "http://i2i.jp/imperdiet/sapien/urna/pretium/nisl/ut.jpg",
            "is_verified": false,
            "created_on": "2020-08-17T15:24:50.398Z"
        },
        {
            "user_id": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "like_id": 10,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "nickname": "Viki Albrooke",
            "profile_picture": "https://robohash.org/sedasperioresmaxime.bmp?size=500x500&set=set1",
            "about": "Face to face neutral conglomeration",
            "gender": "u",
            "dob": "2000-07-04T11:07:24.000Z",
            "interest": "VP Product Management",
            "phone": "84428699",
            "facebook_link": "https://nhs.uk/mauris.xml",
            "twitter_link": "http://uiuc.edu/sit/amet/consectetuer/adipiscing/elit/proin.aspx",
            "instagram_link": "http://cbsnews.com/elementum/eu/interdum.jsp",
            "linkedin_link": "https://hibu.com/quam/sapien/varius/ut/blandit/non/interdum.html",
            "is_verified": false,
            "created_on": "2020-08-17T15:24:50.398Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 9. Get All Listing Comments for a Listing


Get all listing comments for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/listing-comments
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Comments for a Listing (200 OK)



##### I. Example Response: Get All Listing Comments for a Listing (200 OK)
```js
{
    "success": true,
    "count": 7,
    "data": [
        {
            "listing_comment_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
            "comment": "strategize 24/365 users",
            "reply_to_id": null,
            "created_on": "2020-03-04T02:03:23.000Z",
            "updated_on": "2020-08-30T12:09:10.000Z",
            "deleted_on": null,
            "nickname": "Admin",
            "profile_picture": "https://robohash.org/autvelautem.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
            "comment": "revolutionize out-of-the-box interfaces",
            "reply_to_id": 1,
            "created_on": "2019-11-23T20:26:00.000Z",
            "updated_on": "2020-08-03T18:55:30.000Z",
            "deleted_on": null,
            "nickname": "Admin",
            "profile_picture": "https://robohash.org/autvelautem.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 8,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "comment": "harness viral web services",
            "reply_to_id": 3,
            "created_on": "2019-11-16T22:38:44.000Z",
            "updated_on": "2019-12-10T10:58:28.000Z",
            "deleted_on": null,
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 11,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "comment": "recontextualize leading-edge networks",
            "reply_to_id": 3,
            "created_on": "2020-06-24T13:21:47.000Z",
            "updated_on": "2020-06-20T17:48:47.000Z",
            "deleted_on": null,
            "nickname": "Viki Albrooke",
            "profile_picture": "https://robohash.org/sedasperioresmaxime.bmp?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 12,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "comment": "orchestrate intuitive deliverables",
            "reply_to_id": 11,
            "created_on": "2019-10-05T07:40:48.000Z",
            "updated_on": "2020-06-08T11:49:10.000Z",
            "deleted_on": null,
            "nickname": "Viki Albrooke",
            "profile_picture": "https://robohash.org/sedasperioresmaxime.bmp?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 15,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "comment": "grow integrated systems",
            "reply_to_id": 11,
            "created_on": "2020-05-15T12:35:48.000Z",
            "updated_on": "2019-11-07T20:23:03.000Z",
            "deleted_on": null,
            "nickname": "Viki Albrooke",
            "profile_picture": "https://robohash.org/sedasperioresmaxime.bmp?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 16,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "comment": "implement innovative platforms",
            "reply_to_id": 11,
            "created_on": "2020-06-17T01:31:57.000Z",
            "updated_on": "2020-07-05T18:43:45.000Z",
            "deleted_on": null,
            "nickname": "Konstance Smitton",
            "profile_picture": "https://robohash.org/quodprovidenta.png?size=500x500&set=set1"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 10. Get All Listing Locations for a Listing


Get all listing locations for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/listing-locations
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Locations for a Listing (200 OK)



##### I. Example Response: Get All Listing Locations for a Listing (200 OK)
```js
{
    "success": true,
    "count": 3,
    "data": [
        {
            "listing_location_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "location_id": 1,
            "location": "01 Raffles Place, Cecil, Marina, Peoples Park"
        },
        {
            "listing_location_id": 2,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "location_id": 2,
            "location": "02 Anson, Tanjong Pagar"
        },
        {
            "listing_location_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "location_id": 3,
            "location": "03 Queenstown, Tiong Bahru"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 11. Get All Listing Updates for a Listing


Get all Listing Updates for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/listing-updates
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Skills for a Listing (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Listing Skills for a Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Listing Updates for a Listing (200 OK)



##### II. Example Response: Get All Listing Updates for a Listing (200 OK)
```js
{
    "success": true,
    "count": 2,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "listing_update_id": 1,
            "listing_update_description": "Horizontal dynamic encoding",
            "pics": [
                "https://robohash.org/utetut.bmp?size=500x500&set=set1",
                "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
                "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
                "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
                "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1"
            ],
            "created_on": "2020-05-04T18:20:02.000Z",
            "updated_on": "2020-04-27T17:06:06.000Z"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "listing_update_id": 2,
            "listing_update_description": "Inverse eco-centric conglomeration",
            "pics": [
                "https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1",
                "https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1",
                "https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1",
                "https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1",
                "https://robohash.org/suscipittemporeet.png?size=500x500&set=set1"
            ],
            "created_on": "2020-07-08T04:26:55.000Z",
            "updated_on": "2020-08-10T02:06:35.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 12. Get All Listings


Get all listings. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings (200 OK)



##### I. Example Response: Get All Listings (200 OK)
```js
{
    "success": true,
    "count": 6,
    "pagination": {},
    "data": [
        {
            "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "Project Kampong",
            "category": "Technology",
            "about": null,
            "tagline": "With Kampong you can",
            "mission": "To build a platform that connects people with ideas and skills to build and track social good project initiatives",
            "overview": "Formed in Sept 2019, a result of the Youth Action Challenge under the Ministry of Culture, Community, and Youth (MCCY), National Youth Council (NYC) and People's Association Youth Movement (PAYM). PKG hopes to understand the existing gaps in the communication & information network systems which are utilized in the Social Sector in Singapore.\n\n\nOur platform seeks to serve as an integrative shared central platform starting by creating visibility on completed and ongoing social good activities/initiatives. The aim of PKG is to lower the barrier for stakeholders to collaborate and create sustainable projects with trackable impacts.\nThe current members of Project Kampong met each other at the YAC workshops hosted, ideated and formed Project Kampong.",
            "problem": "Current providers include Volunteer.sg & Giving.sg. However, these platforms are not able to fully support the growth of initiatives but are instead a depository of resources to tap on for manpower and funds respectively. PKG would like to build capacity to meet the information visibility gap in the social sector. Being an aggregator or ecosystem builder is a growing trend with the likes of Trybe and A Good Space. However, the ecosystems in which these organizations have built are not available openly.\n\n\nThe restriction of such information has resulted in a lack of benchmarking in efforts directed towards addressing social issues. There is uncertainty as to who and how is actively working towards solving that problem. The lack of visibility and communication results in similar initiatives being created and sometimes funded from the same source.\n\n\nThe sooner this capacity is built, the sooner PKG will be able to engage the prospective users to efficiently start their own initiatives or find existing ones to join and contribute.\nPKG operates and develops in a series of sprints whereby in each sprint, a new feature will be rolled out, tested and deployed.",
            "solution": "Project Kampong is an online platform aggregator for youths to connect, collaborate and create social good initiatives for the benefit of their respective communities.\nThrough skills and idea matching and intuitive progress tracking, we aim to be an online platform that collates and promotes collaboration.\n\nAs part of the Singapore's TogetherSG movement, having a shared central network system is crucial towards the aim of community development. Collaborative systems and Visibility are key areas in which focus, and resources should be poured into. Having an asset mapping tool is essential towards any initiatives or goals served by platforms like Project Kampong.",
            "outcome": "Youths today are becoming increasingly engaged in social issues. However, when trying to kick start their ideas, they often bump into a couple of problems: the lack of connection with people with the right skills, the resources to expand the ideas, or a platform to commit to. Youths that do start their ideas also face issues with project sustainability, such as making sure their ideas continue to deliver impact and staying afloat in the long run.",
            "listing_url": "www.test.com",
            "listing_email": "joinourkampong@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-08-20T20:50:15.047Z",
            "end_date": null,
            "created_on": "2020-08-20T20:50:15.047Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Project Kampong is a youth-led platform dedicated to connecting young Singaporean leaders to build social good initiatives, together. By breaking down the barriers youths face in finding ideas and/or members, Project Kampong hopes to create a more level playing field that supports youth to innovate and  pursue their passions.",
                    "question": "Who is behind Project Kampong?"
                }
            ],
            "tags": [
                "#kampong",
                "#socialgood",
                "#initiative"
            ],
            "jobs": [],
            "user_likes": [],
            "locations": [],
            "listing_updates": [],
            "milestones": [
                {
                    "date": "2020-08-21T16:00:00+08:00",
                    "milestone_description": "Profile Listing"
                },
                {
                    "date": "2020-09-18T16:00:00+08:00",
                    "milestone_description": "Location"
                },
                {
                    "date": "2020-08-07T16:00:00+08:00",
                    "milestone_description": "One-Pager Template for Project Listing Platform"
                },
                {
                    "date": "2020-07-31T16:00:00+08:00",
                    "milestone_description": "Project Browsing and Filtering"
                },
                {
                    "date": "2020-08-14T16:00:00+08:00",
                    "milestone_description": "Individual Portfolio Dashboard"
                },
                {
                    "date": "2020-11-30T16:00:00+08:00",
                    "milestone_description": "Project- Profile Matching & Recommendation"
                },
                {
                    "date": "2020-10-31T16:00:00+08:00",
                    "milestone_description": "On-Platform Chat"
                }
            ],
            "participants": [],
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'kampong':2 'project':1 'technolog':3"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Housing",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null,
            "listing_url": "http://ifeng.com/nisl.jsp",
            "listing_email": "rebuildhome@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
                "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
                "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "24/7",
                    "question": "consequat nulla nisl nunc nisl duis bibendum felis"
                },
                {
                    "answer": "Graphic Interface",
                    "question": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis"
                },
                {
                    "answer": "conglomeration",
                    "question": "mauris vulputate elementum nullam varius nulla facilisi cras"
                },
                {
                    "answer": "Visionary",
                    "question": "felis donec semper sapien a libero nam dui proin leo odio porttitor"
                },
                {
                    "answer": "logistical",
                    "question": "congue risus semper porta volutpat quam"
                }
            ],
            "tags": [
                "#broker0",
                "#sandyfirth1",
                "#tudhope2"
            ],
            "jobs": [
                {
                    "job_title": "Account Representative I",
                    "job_description": "Polarised next generation alliance"
                },
                {
                    "job_title": "Project Manager",
                    "job_description": "Ameliorated 24 hour structure"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Enhanced 6th generation portal"
                },
                {
                    "job_title": "VP Accounting",
                    "job_description": "Multi-channelled local pricing structure"
                },
                {
                    "job_title": "Office Assistant IV",
                    "job_description": "Vision-oriented explicit moratorium"
                }
            ],
            "user_likes": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "locations": [
                "Admiralty",
                "Kranji",
                "Woodlands"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/utetut.bmp?size=500x500&set=set1",
                        "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
                        "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
                        "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
                        "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-05-05T02:20:02+08:00",
                    "updated_on": "2020-04-28T01:06:06+08:00",
                    "description": "Horizontal dynamic encoding"
                },
                {
                    "pics": [
                        "https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1",
                        "https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1",
                        "https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1",
                        "https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1",
                        "https://robohash.org/suscipittemporeet.png?size=500x500&set=set1"
                    ],
                    "created_on": "2020-07-08T12:26:55+08:00",
                    "updated_on": "2020-08-10T10:06:35+08:00",
                    "description": "Inverse eco-centric conglomeration"
                }
            ],
            "milestones": [
                {
                    "date": "2019-06-01T11:27:43+08:00",
                    "milestone_description": "De-engineered content-based solution"
                },
                {
                    "date": "2020-07-09T11:30:19+08:00",
                    "milestone_description": "Centralized stable groupware"
                }
            ],
            "participants": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad"
            ],
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'admiralti':4 'home':2 'hous':3 'kranji':5 'rebuild':1 'woodland':6"
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Manpower",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "overview": "Up-sized hybrid moratorium",
            "problem": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "solution": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "outcome": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "listing_email": "commstart2020@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "neutral",
                    "question": "vel est donec odio justo sollicitudin ut suscipit a"
                },
                {
                    "answer": "analyzer",
                    "question": "odio in hac habitasse platea dictumst maecenas ut massa quis augue"
                },
                {
                    "answer": "3rd generation",
                    "question": "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula"
                },
                {
                    "answer": "internet solution",
                    "question": "cras mi pede malesuada in imperdiet et commodo vulputate justo"
                },
                {
                    "answer": "superstructure",
                    "question": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
                },
                {
                    "answer": "Cloned",
                    "question": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque"
                }
            ],
            "tags": [
                "#slatford3",
                "#clissell4",
                "#bateup5"
            ],
            "jobs": [
                {
                    "job_title": "Senior Editor",
                    "job_description": "Devolved high-level protocol"
                },
                {
                    "job_title": "Civil Engineer",
                    "job_description": "Front-line optimal algorithm"
                },
                {
                    "job_title": "Senior Quality Engineer",
                    "job_description": "Exclusive incremental toolset"
                },
                {
                    "job_title": "Programmer Analyst I",
                    "job_description": "Polarised bifurcated open architecture"
                },
                {
                    "job_title": "Paralegal",
                    "job_description": "Networked intangible system engine"
                }
            ],
            "user_likes": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1",
                "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb"
            ],
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/sedaspernaturomnis.bmp?size=500x500&set=set1",
                        "https://robohash.org/autdeseruntdolorem.bmp?size=500x500&set=set1",
                        "https://robohash.org/autnumquamitaque.png?size=500x500&set=set1",
                        "https://robohash.org/molestiaefacereautem.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2019-11-17T10:37:58+08:00",
                    "updated_on": "2020-04-17T07:43:37+08:00",
                    "description": "Persistent regional open system"
                },
                {
                    "pics": [
                        "https://robohash.org/nihildolorqui.png?size=500x500&set=set1",
                        "https://robohash.org/quieiusquo.jpg?size=500x500&set=set1",
                        "https://robohash.org/quidemquibusdamquia.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2019-03-26T14:42:40+08:00",
                    "updated_on": "2019-11-08T21:10:46+08:00",
                    "description": "Intuitive secondary complexity"
                },
                {
                    "pics": [
                        "https://robohash.org/providentdolorrecusandae.png?size=500x500&set=set1",
                        "https://robohash.org/consequaturabalias.png?size=500x500&set=set1",
                        "https://robohash.org/enimnobisconsequatur.jpg?size=500x500&set=set1",
                        "https://robohash.org/sedfacerepraesentium.bmp?size=500x500&set=set1",
                        "https://robohash.org/perferendisaniminesciunt.jpg?size=500x500&set=set1"
                    ],
                    "created_on": "2019-04-07T14:09:54+08:00",
                    "updated_on": "2020-03-05T03:18:07+08:00",
                    "description": "Phased reciprocal parallelism"
                }
            ],
            "milestones": [
                {
                    "date": "2016-11-13T21:27:33+08:00",
                    "milestone_description": "Future-proofed systemic interface"
                },
                {
                    "date": "2015-08-06T09:28:56+08:00",
                    "milestone_description": "Pre-emptive static installation"
                },
                {
                    "date": "2016-12-04T03:14:39+08:00",
                    "milestone_description": "Multi-channelled secondary model"
                }
            ],
            "participants": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'2020':2 'commstart':1 'manpow':3 'sembawang':5 'woodland':4"
        },
        {
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "created_by": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "title": "YOUTH Mentorship Programme",
            "category": "Youth",
            "about": "Cloned 4th generation matrices",
            "tagline": "Paving the way for the future generations",
            "mission": "Strengthening bonds",
            "overview": "Switchable neutral Graphic Interface",
            "problem": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "solution": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "outcome": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "listing_email": "youthmentors@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
                "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Fully-configurable",
                    "question": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer"
                },
                {
                    "answer": "workforce",
                    "question": "sagittis sapien cum sociis natoque penatibus et magnis dis"
                },
                {
                    "answer": "framework",
                    "question": "nunc viverra dapibus nulla suscipit ligula in lacus"
                }
            ],
            "tags": [
                "#boteman8",
                "#joontjes9"
            ],
            "jobs": [
                {
                    "job_title": "VP Marketing",
                    "job_description": "Inverse user-facing ability"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Phased bottom-line encryption"
                }
            ],
            "user_likes": [],
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/doloresisteblanditiis.jpg?size=500x500&set=set1",
                        "https://robohash.org/suntveroet.jpg?size=500x500&set=set1",
                        "https://robohash.org/quosquorerum.bmp?size=500x500&set=set1",
                        "https://robohash.org/sitmollitiaipsa.jpg?size=500x500&set=set1",
                        "https://robohash.org/esseexincidunt.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-04-19T07:13:44+08:00",
                    "updated_on": "2020-07-17T21:39:35+08:00",
                    "description": "Business-focused multi-state productivity"
                }
            ],
            "milestones": [
                {
                    "date": "2020-01-21T19:04:19+08:00",
                    "milestone_description": "Monitored object-oriented access"
                }
            ],
            "participants": [
                "d69a127d-815b-4834-b2b6-54ab398fccad"
            ],
            "nickname": "Viki Tay",
            "profile_picture": "https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'mentorship':2 'programm':3 'sembawang':6 'woodland':5 'youth':1,4"
        },
        {
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "created_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "title": "Supporting COVID-19 Efforts",
            "category": "Health",
            "about": "Triple-buffered client-server installation",
            "tagline": "Emerge stronger together",
            "mission": "streamline web-enabled ROI",
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null,
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "listing_email": "fightcovid@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Managed",
                    "question": "turpis sed ante vivamus tortor duis mattis"
                },
                {
                    "answer": "Switchable",
                    "question": "id sapien in sapien iaculis congue"
                },
                {
                    "answer": "Fundamental",
                    "question": "ac enim in tempor turpis nec euismod scelerisque quam turpis"
                },
                {
                    "answer": "solution",
                    "question": "cras non velit nec nisi vulputate nonummy"
                }
            ],
            "tags": [
                "#smallcomb6",
                "#wyrall7"
            ],
            "jobs": [
                {
                    "job_title": "Project Manager",
                    "job_description": "Profound optimizing matrix"
                },
                {
                    "job_title": "Tax Accountant",
                    "job_description": "Realigned grlisting_id-enabled forecast"
                },
                {
                    "job_title": "Software Test Engineer II",
                    "job_description": "Right-sized 3rd generation throughput"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Universal executive Graphical User Interface"
                },
                {
                    "job_title": "Community Outreach Specialist",
                    "job_description": "Monitored asynchronous initiative"
                },
                {
                    "job_title": "Compensation Analyst",
                    "job_description": "Universal 24 hour protocol"
                }
            ],
            "user_likes": [],
            "locations": [
                "Woodlands"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/aliasetest.jpg?size=500x500&set=set1",
                        "https://robohash.org/necessitatibusimpeditmodi.jpg?size=500x500&set=set1",
                        "https://robohash.org/assumendasiteligendi.bmp?size=500x500&set=set1",
                        "https://robohash.org/quiasuntassumenda.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-06-03T08:49:01+08:00",
                    "updated_on": "2019-08-20T09:01:49+08:00",
                    "description": "Enterprise-wide leading edge productivity"
                }
            ],
            "milestones": [
                {
                    "date": "2018-12-16T08:49:35+08:00",
                    "milestone_description": "Intuitive client-driven knowledge user"
                },
                {
                    "date": "2017-11-23T11:53:21+08:00",
                    "milestone_description": "Monitored attitude-oriented array"
                }
            ],
            "participants": [
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "nickname": "Aaron",
            "profile_picture": "https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'-19':3 'covid':2 'effort':4 'health':5 'support':1 'woodland':6"
        },
        {
            "listing_id": "e411bd80-d5cf-49ac-b847-18c9fc13377a",
            "created_by": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "title": "Project Donation Drive",
            "category": "Elderly",
            "about": "Adaptive disintermediate Graphical User Interface",
            "tagline": "Bridging communities",
            "mission": "e-enable dot-com metrics",
            "overview": "Integrated fresh-thinking parallelism",
            "problem": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "solution": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "outcome": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
            "listing_url": "http://i2i.jp/rhoncus/dui/vel.jpg",
            "listing_email": "donationdrive2020@gmail.com",
            "listing_status": "completed",
            "pics": [
                "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1",
                "https://robohash.org/nonquodquam.png?size=500x500&set=set1",
                "https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-03-19T03:04:15.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "stable",
                    "question": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus"
                },
                {
                    "answer": "User-friendly",
                    "question": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec"
                },
                {
                    "answer": "client-server",
                    "question": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis"
                }
            ],
            "tags": [
                "#baudina"
            ],
            "jobs": [
                {
                    "job_title": "Chemical Engineer",
                    "job_description": "Synergistic stable encryption"
                },
                {
                    "job_title": "Web Developer IV",
                    "job_description": "Focused encompassing archive"
                },
                {
                    "job_title": "Assistant Professor",
                    "job_description": "Public-key heuristic encryption"
                }
            ],
            "user_likes": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "locations": [],
            "listing_updates": [],
            "milestones": [
                {
                    "date": "2020-02-12T22:30:42+08:00",
                    "milestone_description": "Managed attitude-oriented frame"
                }
            ],
            "participants": [
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "nickname": "Constance Tan",
            "profile_picture": "https://images.pexels.com/photos/2426656/pexels-photo-2426656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'donat':2 'drive':3 'elder':4 'project':1"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 13. Get All Milestones for a Listing


Get all milestones for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/milestones
```



***More example Requests/Responses:***


##### I. Example Request: Get All Milestones for a Listing (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Milestones for a Listing (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Listing with id 23 does not exist"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Milestones for a Listing (200 OK)



##### II. Example Response: Get All Milestones for a Listing (200 OK)
```js
{
    "success": true,
    "count": 2,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "milestone_id": 1,
            "milestone_description": "De-engineered content-based solution",
            "date": "2019-06-01T03:27:43.000Z"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "milestone_id": 2,
            "milestone_description": "Centralized stable groupware",
            "date": "2020-07-09T03:30:19.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 14. Get All Participants for a Listing


Get all participants for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/participants
```



***More example Requests/Responses:***


##### I. Example Request: Get All Participants for a Listing (404 Not Found - Non-existent listing)



##### I. Example Response: Get All Participants for a Listing (404 Not Found - Non-existent listing)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Participants for a Listing (200 OK)



##### II. Example Response: Get All Participants for a Listing (200 OK)
```js
{
    "success": true,
    "count": 3,
    "data": [
        {
            "participant_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "f96b2138-1754-4c17-a405-940e20adc601",
            "joined_on": "2018-12-18T16:00:00.000Z",
            "end_on": null
        },
        {
            "participant_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "joined_on": "2019-10-17T16:00:00.000Z",
            "end_on": null
        },
        {
            "participant_id": 6,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "joined_on": "2020-02-21T16:00:00.000Z",
            "end_on": "2020-08-09T16:00:00.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 15. Get Single Listing


Get single listing by its listing ID. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing (404 Not Found)



##### I. Example Response: Get Single Listing (404 Not Found)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get Single Listing (200 OK)



##### II. Example Response: Get Single Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
        "title": "Rebuilding Homes",
        "category": "Housing",
        "about": "Customer-focused dynamic installation",
        "tagline": "Building Better Lives",
        "mission": "Sharing compassion",
        "overview": null,
        "problem": null,
        "solution": null,
        "outcome": null,
        "listing_url": "http://ifeng.com/nisl.jsp",
        "listing_email": "rebuildhome@gmail.com",
        "listing_status": "ongoing",
        "pics": [
            "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1"
        ],
        "is_published": false,
        "is_verified": false,
        "is_featured": false,
        "start_date": "2020-12-01T11:09:20.000Z",
        "end_date": null,
        "created_on": "2020-08-20T09:36:45.815Z",
        "updated_on": "2020-12-03T16:57:05.934Z",
        "deleted_on": null,
        "faqs": [
            {
                "answer": "24/7",
                "question": "consequat nulla nisl nunc nisl duis bibendum felis"
            },
            {
                "answer": "Graphic Interface",
                "question": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis"
            },
            {
                "answer": "conglomeration",
                "question": "mauris vulputate elementum nullam varius nulla facilisi cras"
            },
            {
                "answer": "Visionary",
                "question": "felis donec semper sapien a libero nam dui proin leo odio porttitor"
            },
            {
                "answer": "logistical",
                "question": "congue risus semper porta volutpat quam"
            }
        ],
        "tags": [
            "#broker0",
            "#sandyfirth1",
            "#tudhope2"
        ],
        "jobs": [
            {
                "job_title": "Account Representative I",
                "job_description": "Polarised next generation alliance"
            },
            {
                "job_title": "Project Manager",
                "job_description": "Ameliorated 24 hour structure"
            },
            {
                "job_title": "Teacher",
                "job_description": "Enhanced 6th generation portal"
            },
            {
                "job_title": "VP Accounting",
                "job_description": "Multi-channelled local pricing structure"
            },
            {
                "job_title": "Office Assistant IV",
                "job_description": "Vision-oriented explicit moratorium"
            }
        ],
        "user_likes": [
            "f96b2138-1754-4c17-a405-940e20adc601",
            "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "d69a127d-815b-4834-b2b6-54ab398fccad",
            "f997120c-2956-482e-9ba3-81a12b4fecc1"
        ],
        "locations": [
            "Admiralty",
            "Kranji",
            "Woodlands"
        ],
        "listing_updates": [
            {
                "pics": [
                    "https://robohash.org/utetut.bmp?size=500x500&set=set1",
                    "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
                    "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
                    "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
                    "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1"
                ],
                "created_on": "2020-05-05T02:20:02+08:00",
                "updated_on": "2020-04-28T01:06:06+08:00",
                "description": "Horizontal dynamic encoding"
            },
            {
                "pics": [
                    "https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1",
                    "https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1",
                    "https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1",
                    "https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1",
                    "https://robohash.org/suscipittemporeet.png?size=500x500&set=set1"
                ],
                "created_on": "2020-07-08T12:26:55+08:00",
                "updated_on": "2020-08-10T10:06:35+08:00",
                "description": "Inverse eco-centric conglomeration"
            }
        ],
        "milestone_description": [
            "De-engineered content-based solution",
            "Centralized stable groupware"
        ],
        "participants": [
            "f96b2138-1754-4c17-a405-940e20adc601",
            "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "d69a127d-815b-4834-b2b6-54ab398fccad"
        ],
        "nickname": "Wayne",
        "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "keyword_vector": "'admiralti':4 'home':2 'hous':3 'kranji':5 'rebuild':1 'woodland':6"
    }
}
```


***Status Code:*** 200

<br>



### 16. Search Listings


Search for listings by title, category or location. Permission: Public.

Field rules:
All fields required unless otherwise stated.
keyword - Keywords to search for. Each keyword to search must be delimited by a comma.
limit - Optional. Default: 10. Number of results to display.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/search
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| keyword | wood,admiralty |  |
| limit | 5 |  |



***More example Requests/Responses:***


##### I. Example Request: Search Listings (200 OK)



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| keyword | wood,admiralty |  |
| limit | 5 |  |



##### I. Example Response: Search Listings (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Housing",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null,
            "listing_url": "http://ifeng.com/nisl.jsp",
            "listing_email": "rebuildhome@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
                "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
                "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "24/7",
                    "question": "consequat nulla nisl nunc nisl duis bibendum felis"
                },
                {
                    "answer": "Graphic Interface",
                    "question": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis"
                },
                {
                    "answer": "conglomeration",
                    "question": "mauris vulputate elementum nullam varius nulla facilisi cras"
                },
                {
                    "answer": "Visionary",
                    "question": "felis donec semper sapien a libero nam dui proin leo odio porttitor"
                },
                {
                    "answer": "logistical",
                    "question": "congue risus semper porta volutpat quam"
                }
            ],
            "tags": [
                "#broker0",
                "#sandyfirth1",
                "#tudhope2"
            ],
            "jobs": [
                {
                    "job_title": "Account Representative I",
                    "job_description": "Polarised next generation alliance"
                },
                {
                    "job_title": "Project Manager",
                    "job_description": "Ameliorated 24 hour structure"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Enhanced 6th generation portal"
                },
                {
                    "job_title": "VP Accounting",
                    "job_description": "Multi-channelled local pricing structure"
                },
                {
                    "job_title": "Office Assistant IV",
                    "job_description": "Vision-oriented explicit moratorium"
                }
            ],
            "user_likes": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "locations": [
                "Admiralty",
                "Kranji",
                "Woodlands"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/utetut.bmp?size=500x500&set=set1",
                        "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
                        "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
                        "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
                        "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-05-05T02:20:02+08:00",
                    "updated_on": "2020-04-28T01:06:06+08:00",
                    "description": "Horizontal dynamic encoding"
                },
                {
                    "pics": [
                        "https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1",
                        "https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1",
                        "https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1",
                        "https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1",
                        "https://robohash.org/suscipittemporeet.png?size=500x500&set=set1"
                    ],
                    "created_on": "2020-07-08T12:26:55+08:00",
                    "updated_on": "2020-08-10T10:06:35+08:00",
                    "description": "Inverse eco-centric conglomeration"
                }
            ],
            "milestones": [
                {
                    "date": "2019-06-01T11:27:43+08:00",
                    "milestone_description": "De-engineered content-based solution"
                },
                {
                    "date": "2020-07-09T11:30:19+08:00",
                    "milestone_description": "Centralized stable groupware"
                }
            ],
            "participants": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad"
            ],
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'admiralti':4 'home':2 'hous':3 'kranji':5 'rebuild':1 'woodland':6",
            "ts_rank_cd": 0.1
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Manpower",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "overview": "Up-sized hybrid moratorium",
            "problem": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "solution": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "outcome": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "listing_email": "commstart2020@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "neutral",
                    "question": "vel est donec odio justo sollicitudin ut suscipit a"
                },
                {
                    "answer": "analyzer",
                    "question": "odio in hac habitasse platea dictumst maecenas ut massa quis augue"
                },
                {
                    "answer": "3rd generation",
                    "question": "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula"
                },
                {
                    "answer": "internet solution",
                    "question": "cras mi pede malesuada in imperdiet et commodo vulputate justo"
                },
                {
                    "answer": "superstructure",
                    "question": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
                },
                {
                    "answer": "Cloned",
                    "question": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque"
                }
            ],
            "tags": [
                "#slatford3",
                "#clissell4",
                "#bateup5"
            ],
            "jobs": [
                {
                    "job_title": "Senior Editor",
                    "job_description": "Devolved high-level protocol"
                },
                {
                    "job_title": "Civil Engineer",
                    "job_description": "Front-line optimal algorithm"
                },
                {
                    "job_title": "Senior Quality Engineer",
                    "job_description": "Exclusive incremental toolset"
                },
                {
                    "job_title": "Programmer Analyst I",
                    "job_description": "Polarised bifurcated open architecture"
                },
                {
                    "job_title": "Paralegal",
                    "job_description": "Networked intangible system engine"
                }
            ],
            "user_likes": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1",
                "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb"
            ],
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/sedaspernaturomnis.bmp?size=500x500&set=set1",
                        "https://robohash.org/autdeseruntdolorem.bmp?size=500x500&set=set1",
                        "https://robohash.org/autnumquamitaque.png?size=500x500&set=set1",
                        "https://robohash.org/molestiaefacereautem.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2019-11-17T10:37:58+08:00",
                    "updated_on": "2020-04-17T07:43:37+08:00",
                    "description": "Persistent regional open system"
                },
                {
                    "pics": [
                        "https://robohash.org/nihildolorqui.png?size=500x500&set=set1",
                        "https://robohash.org/quieiusquo.jpg?size=500x500&set=set1",
                        "https://robohash.org/quidemquibusdamquia.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2019-03-26T14:42:40+08:00",
                    "updated_on": "2019-11-08T21:10:46+08:00",
                    "description": "Intuitive secondary complexity"
                },
                {
                    "pics": [
                        "https://robohash.org/providentdolorrecusandae.png?size=500x500&set=set1",
                        "https://robohash.org/consequaturabalias.png?size=500x500&set=set1",
                        "https://robohash.org/enimnobisconsequatur.jpg?size=500x500&set=set1",
                        "https://robohash.org/sedfacerepraesentium.bmp?size=500x500&set=set1",
                        "https://robohash.org/perferendisaniminesciunt.jpg?size=500x500&set=set1"
                    ],
                    "created_on": "2019-04-07T14:09:54+08:00",
                    "updated_on": "2020-03-05T03:18:07+08:00",
                    "description": "Phased reciprocal parallelism"
                }
            ],
            "milestones": [
                {
                    "date": "2016-11-13T21:27:33+08:00",
                    "milestone_description": "Future-proofed systemic interface"
                },
                {
                    "date": "2015-08-06T09:28:56+08:00",
                    "milestone_description": "Pre-emptive static installation"
                },
                {
                    "date": "2016-12-04T03:14:39+08:00",
                    "milestone_description": "Multi-channelled secondary model"
                }
            ],
            "participants": [
                "f96b2138-1754-4c17-a405-940e20adc601",
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'2020':2 'commstart':1 'manpow':3 'sembawang':5 'woodland':4",
            "ts_rank_cd": 0
        },
        {
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "created_by": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "title": "YOUTH Mentorship Programme",
            "category": "Youth",
            "about": "Cloned 4th generation matrices",
            "tagline": "Paving the way for the future generations",
            "mission": "Strengthening bonds",
            "overview": "Switchable neutral Graphic Interface",
            "problem": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "solution": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "outcome": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "listing_email": "youthmentors@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
                "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Fully-configurable",
                    "question": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer"
                },
                {
                    "answer": "workforce",
                    "question": "sagittis sapien cum sociis natoque penatibus et magnis dis"
                },
                {
                    "answer": "framework",
                    "question": "nunc viverra dapibus nulla suscipit ligula in lacus"
                }
            ],
            "tags": [
                "#boteman8",
                "#joontjes9"
            ],
            "jobs": [
                {
                    "job_title": "VP Marketing",
                    "job_description": "Inverse user-facing ability"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Phased bottom-line encryption"
                }
            ],
            "user_likes": [],
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/doloresisteblanditiis.jpg?size=500x500&set=set1",
                        "https://robohash.org/suntveroet.jpg?size=500x500&set=set1",
                        "https://robohash.org/quosquorerum.bmp?size=500x500&set=set1",
                        "https://robohash.org/sitmollitiaipsa.jpg?size=500x500&set=set1",
                        "https://robohash.org/esseexincidunt.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-04-19T07:13:44+08:00",
                    "updated_on": "2020-07-17T21:39:35+08:00",
                    "description": "Business-focused multi-state productivity"
                }
            ],
            "milestones": [
                {
                    "date": "2020-01-21T19:04:19+08:00",
                    "milestone_description": "Monitored object-oriented access"
                }
            ],
            "participants": [
                "d69a127d-815b-4834-b2b6-54ab398fccad"
            ],
            "nickname": "Viki Tay",
            "profile_picture": "https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'mentorship':2 'programm':3 'sembawang':6 'woodland':5 'youth':1,4",
            "ts_rank_cd": 0
        },
        {
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "created_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "title": "Supporting COVID-19 Efforts",
            "category": "Health",
            "about": "Triple-buffered client-server installation",
            "tagline": "Emerge stronger together",
            "mission": "streamline web-enabled ROI",
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null,
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "listing_email": "fightcovid@gmail.com",
            "listing_status": "ongoing",
            "pics": [
                "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1"
            ],
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-12-04T16:41:12.432Z",
            "deleted_on": null,
            "faqs": [
                {
                    "answer": "Managed",
                    "question": "turpis sed ante vivamus tortor duis mattis"
                },
                {
                    "answer": "Switchable",
                    "question": "id sapien in sapien iaculis congue"
                },
                {
                    "answer": "Fundamental",
                    "question": "ac enim in tempor turpis nec euismod scelerisque quam turpis"
                },
                {
                    "answer": "solution",
                    "question": "cras non velit nec nisi vulputate nonummy"
                }
            ],
            "tags": [
                "#smallcomb6",
                "#wyrall7"
            ],
            "jobs": [
                {
                    "job_title": "Project Manager",
                    "job_description": "Profound optimizing matrix"
                },
                {
                    "job_title": "Tax Accountant",
                    "job_description": "Realigned grlisting_id-enabled forecast"
                },
                {
                    "job_title": "Software Test Engineer II",
                    "job_description": "Right-sized 3rd generation throughput"
                },
                {
                    "job_title": "Teacher",
                    "job_description": "Universal executive Graphical User Interface"
                },
                {
                    "job_title": "Community Outreach Specialist",
                    "job_description": "Monitored asynchronous initiative"
                },
                {
                    "job_title": "Compensation Analyst",
                    "job_description": "Universal 24 hour protocol"
                }
            ],
            "user_likes": [],
            "locations": [
                "Woodlands"
            ],
            "listing_updates": [
                {
                    "pics": [
                        "https://robohash.org/aliasetest.jpg?size=500x500&set=set1",
                        "https://robohash.org/necessitatibusimpeditmodi.jpg?size=500x500&set=set1",
                        "https://robohash.org/assumendasiteligendi.bmp?size=500x500&set=set1",
                        "https://robohash.org/quiasuntassumenda.bmp?size=500x500&set=set1"
                    ],
                    "created_on": "2020-06-03T08:49:01+08:00",
                    "updated_on": "2019-08-20T09:01:49+08:00",
                    "description": "Enterprise-wide leading edge productivity"
                }
            ],
            "milestones": [
                {
                    "date": "2018-12-16T08:49:35+08:00",
                    "milestone_description": "Intuitive client-driven knowledge user"
                },
                {
                    "date": "2017-11-23T11:53:21+08:00",
                    "milestone_description": "Monitored attitude-oriented array"
                }
            ],
            "participants": [
                "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
                "d69a127d-815b-4834-b2b6-54ab398fccad",
                "f997120c-2956-482e-9ba3-81a12b4fecc1"
            ],
            "nickname": "Aaron",
            "profile_picture": "https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "keyword_vector": "'-19':3 'covid':2 'effort':4 'health':5 'support':1 'woodland':6",
            "ts_rank_cd": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 17. Update Listing


Update listing. Permission: Admin/Owner.

Field rules:
At least one field must be updated.
organisation_id - Valid integer and existing organisation id.
title - Non-empty string.
category - Non-empty string.
about - String.
tagline - String.
mission - String.
listing_url - Valid URL.
is_published - Boolean. 
start_date - Valid SQL datetime. Default to current datetime.
end_date - Valid SQL datetime.
pics - Array of URL paths to uploaded JPG/PNG file. Required. Otherwise, pass empty array.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae
```



***Body:***

```js        
{
    "listing_title": "Updated title 1",
    "category": "Health",
    "about": "Updated about",
    "tagline": "Updated tagline",
    "mission": "Updated mission",
    "listing_url": "www.updated-test.com",
    "is_published": true,
    "start_date": "2018-08-15 16:45:43.41585+08",
    "end_date": "2020-01-30 16:45:43.41585+08",
    "pics": [
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
    ],
    "listing_status": "completed",
    "listing_email": "updated_email@gmail.com",
    "overview": "Listing's overview",
    "problem": "Problem the listing is tackling",
    "solution": "We aim to solve this by mobilising the community.",
    "outcome": "We hope to create a close-knitted community."
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Listing (400 Bad Request - Invalid (empty string) title entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "title": "",
    "category": "Updated category",
    "about": "Updated about",
    "tagline": "Updated tagline",
    "mission": "Updated mission",
    "listing_url": "www.updated-test.com",
    "pic1": "https://robohash.org/voluptatemcommodisint.bmp?size=50x50&set=set1",
    "pic2": "https://robohash.org/illoipsaquos.bmp?size=50x50&set=set1",
    "pic3": "https://robohash.org/oditautqui.png?size=50x50&set=set1",
    "pic4": "https://robohash.org/eaetnon.jpg?size=50x50&set=set1",
    "pic5": "https://robohash.org/fugittemporeiusto.bmp?size=50x50&set=set1",
    "is_published": "true",
    "start_date": "2018-08-15 16:45:43.41585+08",
    "end_date": "2020-01-30 16:45:43.41585+08"
}
```



##### I. Example Response: Update Listing (400 Bad Request - Invalid (empty string) title entered)
```js
{
    "success": false,
    "error": "Please include a valid title."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Update Listing (403 Forbidden - Non-admin and non-listing owner)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | Updated title 1 |  |
| category | Updated category |  |
| about | Updated about |  |
| tagline | Updated tagline |  |
| mission | Updated mission |  |
| listing_url | www.updated-test.com |  |
| pic1 | https://robohash.org/voluptatemcommodisint.bmp?size=50x50&set=set1 |  |
| pic2 | https://robohash.org/illoipsaquos.bmp?size=50x50&set=set1 |  |
| pic3 | https://robohash.org/oditautqui.png?size=50x50&set=set1 |  |
| pic4 | https://robohash.org/eaetnon.jpg?size=50x50&set=set1 |  |
| pic5 | https://robohash.org/fugittemporeiusto.bmp?size=50x50&set=set1 |  |
| is_published | true |  |
| start_date | 2018-08-15 16:45:43.41585+08 |  |
| end_date | 2020-01-30 16:45:43.41585+08 |  |



##### II. Example Response: Update Listing (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "User not authorised to update this listing"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Update Listing (200 OK)



***Body:***

```js        
{
    "listing_title": "Updated title 1",
    "category": "Health",
    "about": "Updated about",
    "tagline": "Updated tagline",
    "mission": "Updated mission",
    "listing_url": "www.updated-test.com",
    "is_published": true,
    "start_date": "2018-08-15 16:45:43.41585+08",
    "end_date": "2020-01-30 16:45:43.41585+08",
    "pics": [
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
    ],
    "listing_status": "completed",
    "listing_email": "updated_email@gmail.com",
    "overview": "Listing's overview",
    "problem": "Problem the listing is tackling",
    "solution": "We aim to solve this by mobilising the community.",
    "outcome": "We hope to create a close-knitted community."
}
```



##### III. Example Response: Update Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
        "listing_title": "Updated title 1",
        "category": "Health",
        "about": "Updated about",
        "tagline": "Updated tagline",
        "mission": "Updated mission",
        "overview": "Listing's overview",
        "problem": "Problem the listing is tackling",
        "solution": "We aim to solve this by mobilising the community.",
        "outcome": "We hope to create a close-knitted community.",
        "listing_url": "www.updated-test.com",
        "listing_email": "updated_email@gmail.com",
        "listing_status": "completed",
        "pics": [
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
            "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
        ],
        "is_published": true,
        "is_verified": false,
        "is_featured": false,
        "start_date": "2018-08-15T08:45:43.415Z",
        "end_date": "2020-01-30T08:45:43.415Z",
        "created_on": "2020-08-20T09:36:45.815Z",
        "updated_on": "2020-12-12T08:05:47.612Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 200

<br>



### 18. Verify and/or Feature Listing


Verify and/or Feature listing. Permission: Admin.

Field rules:
is_verified - Boolean. Optional.
is_featured - Boolean. Optional.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/verify-feature
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "is_verified": true,
    "is_featured": true
}
```



***More example Requests/Responses:***


##### I. Example Request: Verify Listing (403 Forbidden - Unauthorised verification by non-admin)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "is_verified": "true"
}
```



##### I. Example Response: Verify Listing (403 Forbidden - Unauthorised verification by non-admin)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Verify Listing (400 Bad Request - Missing field in request body, or invalid key or value)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "is_verified": ""
}
```



##### II. Example Response: Verify Listing (400 Bad Request - Missing field in request body, or invalid key or value)
```js
{
    "success": false,
    "error": "Please include a boolean value for is_verified."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Verify Listing (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "is_verified": "true"
}
```



##### III. Example Response: Verify Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "is_verified": true
    }
}
```


***Status Code:*** 200

<br>



## Listings - Organisations (Join / Unjoin)
Endpoints relating to listings (un)joining organisations, and vice-versa



### 1. Listing join Organisation


Listing join organisation. Permission: Listing or Organisation owner.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listings-organisations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
    "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d"
}
```



***More example Requests/Responses:***


##### I. Example Request: Listing join Organisation (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
    "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d"
}
```



##### I. Example Response: Listing join Organisation (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_organisation_id": 2,
        "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d"
    }
}
```


***Status Code:*** 201

<br>



### 2. Listing leave Organisation


Listing leave organisation. Permission: Listing or Organisation owner.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listings-organisations/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***More example Requests/Responses:***


##### I. Example Request: Listing leave Organisation (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



##### I. Example Response: Listing leave Organisation (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_organisation_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d"
    }
}
```


***Status Code:*** 200

<br>



## Locations
Locations CRUD functionality.



### 1. Get All Listings for a Location


Get all listings for a location. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/locations/3/listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings for a Location (200 OK)



##### I. Example Response: Get All Listings for a Location (200 OK)
```js
{
    "success": true,
    "count": 4,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Housing",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "listing_url": "http://ifeng.com/nisl.jsp",
            "listing_email": "rebuildhome@gmail.com",
            "listing_status": "ongoing",
            "pic1": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Admiralty",
                "Kranji",
                "Woodlands"
            ],
            "location_ids": [
                1,
                2,
                3
            ],
            "keyword_vector": "'admiralti':4 'home':2 'hous':3 'kranji':5 'rebuild':1 'woodland':6",
            "location_id": 3
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Manpower",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "listing_email": "commstart2020@gmail.com",
            "listing_status": "ongoing",
            "pic1": "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "location_ids": [
                3,
                4
            ],
            "keyword_vector": "'2020':2 'commstart':1 'manpow':3 'sembawang':5 'woodland':4",
            "location_id": 3
        },
        {
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "created_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "title": "Supporting COVID-19 Efforts",
            "category": "Health",
            "about": "Triple-buffered client-server installation",
            "tagline": "Emerge stronger together",
            "mission": "streamline web-enabled ROI",
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "listing_email": "fightcovid@gmail.com",
            "listing_status": "ongoing",
            "pic1": "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": null,
            "pic3": "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "deleted_on": null,
            "nickname": "Aaron",
            "profile_picture": "https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Woodlands"
            ],
            "location_ids": [
                3
            ],
            "keyword_vector": "'-19':3 'covid':2 'effort':4 'health':5 'support':1 'woodland':6",
            "location_id": 3
        },
        {
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "created_by": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "title": "YOUTH Mentorship Programme",
            "category": "Youth",
            "about": "Cloned 4th generation matrices",
            "tagline": "Paving the way for the future generations",
            "mission": "Strengthening bonds",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "listing_email": "youthmentors@gmail.com",
            "listing_status": "ongoing",
            "pic1": "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.815Z",
            "deleted_on": null,
            "nickname": "Viki Tay",
            "profile_picture": "https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Woodlands",
                "Sembawang"
            ],
            "location_ids": [
                3,
                4
            ],
            "keyword_vector": "'mentorship':2 'programm':3 'sembawang':6 'woodland':5 'youth':1,4",
            "location_id": 3
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get All Locations


Get all locations. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/locations
```



***More example Requests/Responses:***


##### I. Example Request: Get All Locations (200 OK)



##### I. Example Response: Get All Locations (200 OK)
```js
{
    "success": true,
    "count": 28,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "location_id": 1,
            "location": "01 Raffles Place, Cecil, Marina, Peoples Park"
        },
        {
            "location_id": 2,
            "location": "02 Anson, Tanjong Pagar"
        },
        {
            "location_id": 3,
            "location": "03 Queenstown, Tiong Bahru"
        },
        {
            "location_id": 4,
            "location": "04 Telok Blangah, Harbourfront"
        },
        {
            "location_id": 5,
            "location": "05 Pasir Panjang, Hong Leong Garden, Clementi New Town"
        },
        {
            "location_id": 6,
            "location": "06 High Street, Beach Road"
        },
        {
            "location_id": 7,
            "location": "07 Middle Road, Golden Mile"
        },
        {
            "location_id": 8,
            "location": "08 Little India"
        },
        {
            "location_id": 9,
            "location": "09 Orchard, Cairnhill, River Valley"
        },
        {
            "location_id": 10,
            "location": "10 Ardmore, Bukit Timah, Holland Road, Tanglin"
        },
        {
            "location_id": 11,
            "location": "11 Watten Estate, Novena, Thomson"
        },
        {
            "location_id": 12,
            "location": "12 Balestier, Toa Payoh, Serangoon"
        },
        {
            "location_id": 13,
            "location": "13 Macpherson, Braddell"
        },
        {
            "location_id": 14,
            "location": "14 Geylang, Eunos"
        },
        {
            "location_id": 15,
            "location": "15 Katong, Joo Chiat, Amber Road"
        },
        {
            "location_id": 16,
            "location": "16 Bedok, Upper East Coast, Eastwood, Kew Drive"
        },
        {
            "location_id": 17,
            "location": "17 Loyang, Changi"
        },
        {
            "location_id": 18,
            "location": "18 Tampines, Pasir Ris"
        },
        {
            "location_id": 19,
            "location": "19 Serangoon Garden, Hougang, Ponggol"
        },
        {
            "location_id": 20,
            "location": "20 Bishan, Ang Mo Kio"
        },
        {
            "location_id": 21,
            "location": "21 Upper Bukit Timah, Clementi Park, Ulu Pandan"
        },
        {
            "location_id": 22,
            "location": "22 Jurong"
        },
        {
            "location_id": 23,
            "location": "23 Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang"
        },
        {
            "location_id": 24,
            "location": "24 Lim Chu Kang, Tengah"
        },
        {
            "location_id": 25,
            "location": "25 Kranji, Woodgrove"
        }
    ]
}
```


***Status Code:*** 200

<br>



## Mailer
Send email endpoints.



### 1. Send application email


Send application email to a single recipient. Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
listingId - Valid listing id.
roleApplied - Valid non empty text.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/mailer/send-application
```



***Body:***

```js        
{
    "listingId": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
    "roleApplied": "HR Manager"
}
```



***More example Requests/Responses:***


##### I. Example Request: Send email (200 OK)



***Body:***

```js        
{
    "receiverEmail": "dontay0209@gmail.com",
    "senderEmail": "dontay0209@gmail.com",
    "subject": "Test Email 1",
    "message": "This is a test email."
}
```



##### I. Example Response: Send email (200 OK)
```js
{
    "success": true,
    "data": {}
}
```


***Status Code:*** 200

<br>



### 2. Send email


Send email to a single recipient with optional cc of sender's email. Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
receiverEmail - Valid email address.
senderEmail - Valid email address. Optional.
subject - Valid non empty text.
message - Valid non empty text.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/mailer/send
```



***Body:***

```js        
{
    "receiverEmail": "dontay0209@gmail.com",
    "senderEmail": "dontay0209@gmail.com",
    "subject": "Test Email 1",
    "message": "This is a test email."
}
```



***More example Requests/Responses:***


##### I. Example Request: Send email (200 OK)



***Body:***

```js        
{
    "receiverEmail": "dontay0209@gmail.com",
    "senderEmail": "dontay0209@gmail.com",
    "subject": "Test Email 1",
    "message": "This is a test email."
}
```



##### I. Example Response: Send email (200 OK)
```js
{
    "success": true,
    "data": {}
}
```


***Status Code:*** 200

<br>



### 3. Send enquiry email


Send enquiry email to a single recipient. Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
listingId - Valid listing id.
message - Valid non empty text.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/mailer/send-enquiry
```



***Body:***

```js        
{
    "listingId": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
    "message": "Hi this is a test enquiry.",
    "subject": "Kampong Opening Enquiry"
}
```



***More example Requests/Responses:***


##### I. Example Request: Send email (200 OK)



***Body:***

```js        
{
    "receiverEmail": "dontay0209@gmail.com",
    "senderEmail": "dontay0209@gmail.com",
    "subject": "Test Email 1",
    "message": "This is a test email."
}
```



##### I. Example Response: Send email (200 OK)
```js
{
    "success": true,
    "data": {}
}
```


***Status Code:*** 200

<br>



## Milestones
Listing Milestones CRUD functionality.



### 1. Create Milestone


Create milestone. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
description - Non-empty.
date - Valid SQL datetime. Optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/milestones
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"milestone_description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
	"date": "2020-01-30 16:45:43.41585+08"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Milestone (400 Bad Request - Invalid value entered, empty description)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"description": " ",
	"date": "2020-01-30 16:45:43.41585+08"
}
```



##### I. Example Response: Create Milestone (400 Bad Request - Invalid value entered, empty description)
```js
{
    "success": false,
    "error": "Please include a valid description."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Create Milestone (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"milestone_description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
	"date": "2020-01-30 16:45:43.41585+08"
}
```



##### II. Example Response: Create Milestone (201 Created)
```js
{
    "success": true,
    "data": {
        "milestone_id": 17,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "milestone_description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
        "date": "2020-01-30T08:45:43.415Z"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Milestone


Delete milestone identified by milestone id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/milestones/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Milestone (404 Not Found - Non-existent milestone id)



##### I. Example Response: Delete Milestone (404 Not Found - Non-existent milestone id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Delete Milestone (200 OK)



##### II. Example Response: Delete Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "milestone_description": "New Milestone Achieved!",
        "date": "2020-03-04T08:45:43.415Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. Update Milestone


Update milestone identified by milestone id. Permission: Owner/Admin.

Field rules:
At least one field must be updated.
description - Non-empty.
date - Valid SQL datetime.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/milestones/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"milestone_description": "New Milestone Achieved!",
	"date": "2020-03-04 16:45:43.41585+08"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Milestone (400 Bad Request - Invalid value entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"description": "New Milestone Achieved!",
	"date": "12341234"
}
```



##### I. Example Response: Update Milestone (400 Bad Request - Invalid value entered)
```js
{
    "success": false,
    "error": "Please include a valid timestamp (of string type) for date."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Update Milestone (404 Not Found - Non-existent milestone id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"description": "New Milestone Achieved!",
	"date": "2020-03-04 16:45:43.41585+08"
}
```



##### II. Example Response: Update Milestone (404 Not Found - Non-existent milestone id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Update Milestone (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"milestone_description": "New Milestone Achieved!",
	"date": "2020-03-04 16:45:43.41585+08"
}
```



##### III. Example Response: Update Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "milestone_description": "New Milestone Achieved!",
        "date": "2020-03-04T08:45:43.415Z"
    }
}
```


***Status Code:*** 200

<br>



## Organisations
Organisations CRUD functionality.



### 1. Create Organisation


Create organisation. Permission: Private.

Field rules:
All fields required unles otherwise stated.



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/organisations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Org 1",
    "organisation_type": "Sponsor",
    "about": "about org 1",
    "website_url": "www.testorg1.com",
    "phone": 93232224,
    "email": "testorg1@test.com",
    "address": "23 Tampines St 31, Singapore 520023",
    "locations": [
        "Tampines",
        "Simei"
    ],
    "story": "Founded in 1962, ...",
    "facebook_link": "facebook.com",
    "twitter_link": "twitter.com",
    "instagram_link": "instagram.com",
    "banner_photo": "imgur.com",
    "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
    "additional_photos": [
        "pexels.com",
        "imgur.com"
    ]
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Organisation (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Org 1",
    "organisation_type": "Sponsor",
    "about": "about org 1",
    "website_url": "www.testorg1.com",
    "phone": 93232224,
    "email": "testorg1@test.com",
    "address": "23 Tampines St 31, Singapore 520023",
    "locations": [
        "Tampines",
        "Simei"
    ],
    "story": "Founded in 1962, ...",
    "facebook_link": "facebook.com",
    "twitter_link": "twitter.com",
    "instagram_link": "instagram.com",
    "banner_photo": "imgur.com",
    "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
    "additional_photos": [
        "pexels.com",
        "imgur.com"
    ]
}
```



##### I. Example Response: Create Organisation (201 Created)
```js
{
    "success": true,
    "data": {
        "organisation_id": 24,
        "name": "Org 1",
        "organisation_type": "Sponsor",
        "about": "about org 1",
        "website_url": "www.testorg1.com",
        "phone": "93232224",
        "email": "testorg1@test.com",
        "address": "23 Tampines St 31, Singapore 520023",
        "owned_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
        "locations": [
            "Tampines",
            "Simei"
        ],
        "story": "Founded in 1962, ...",
        "facebook_link": "facebook.com",
        "twitter_link": "twitter.com",
        "instagram_link": "instagram.com",
        "banner_photo": "imgur.com",
        "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
        "additional_photos": [
            "pexels.com",
            "imgur.com"
        ],
        "is_verified": false,
        "created_on": "2020-11-14T07:50:39.464Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Organisation


Delete organisation identified by organisation id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/organisations/c37092c0-280e-11eb-aa97-9d0bb1a7de0d
```



***More example Requests/Responses:***


##### I. Example Request: Delete Organisation (403 Forbidden - Non-organisation owner)



##### I. Example Response: Delete Organisation (403 Forbidden - Non-organisation owner)
```js
{
    "success": false,
    "error": "Not authorised to delete organisation as you are not the organisation owner"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Organisation (200 OK)



##### II. Example Response: Delete Organisation (200 OK)
```js
{
    "success": true,
    "data": {
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "name": "Org 1",
        "organisation_type": "Sponsor",
        "about": "about org 1",
        "website_url": "www.testorg1.com",
        "phone": "93232224",
        "email": "testorg1@test.com",
        "address": "23 Tampines St 31, Singapore 520023",
        "owned_by": null,
        "locations": [
            "Tampines",
            "Simei"
        ],
        "story": "Founded in 1962, ...",
        "facebook_link": "facebook.com",
        "twitter_link": "twitter.com",
        "instagram_link": "instagram.com",
        "banner_photo": "imgur.com",
        "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
        "additional_photos": [
            "pexels.com",
            "imgur.com"
        ],
        "is_verified": false,
        "created_on": "2020-11-18T14:37:13.363Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 200

<br>



### 3. Get All Listings for an Organisation


Get all listings for an organisation. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/organisations/8426a370-280e-11eb-aa97-9d0bb1a7de0d/listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings for an Organisation (200 OK)



##### I. Example Response: Get All Listings for an Organisation (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Updated title 1",
            "category": "Health",
            "about": "Updated about",
            "tagline": "Updated tagline",
            "mission": "Updated mission",
            "listing_url": "www.updated-test.com",
            "listing_email": "updated_email@gmail.com",
            "listing_status": "completed",
            "pics": [
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636567.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636568.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636569.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636570.jpeg",
                "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/new%20pic-1597985636571.jpeg"
            ],
            "is_published": true,
            "is_verified": false,
            "is_featured": false,
            "start_date": "2018-08-15T08:45:43.415Z",
            "end_date": "2020-01-30T08:45:43.415Z",
            "created_on": "2020-08-20T09:36:45.815Z",
            "updated_on": "2020-11-17T07:46:43.565Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "Admiralty",
                "Kranji",
                "Woodlands"
            ],
            "location_ids": [
                1,
                2,
                3
            ],
            "keyword_vector": "'1':3 'admiralti':5 'health':4 'kranji':6 'titl':2 'updat':1 'woodland':7",
            "listing_organisation_id": 1
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get All Organisations


Get all organisations. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/organisations
```



***More example Requests/Responses:***


##### I. Example Request: Get All Organisations (200 OK)



##### I. Example Response: Get All Organisations (200 OK)
```js
{
    "success": true,
    "count": 23,
    "pagination": {},
    "data": [
        {
            "organisation_id": 1,
            "name": "Shuffledrive",
            "organisation_type": "Consultancy",
            "about": "Distributed 4th generation forecast",
            "website_url": "microsoft.com",
            "phone": "8765378253",
            "email": "mallgood0@slideshare.net",
            "address": null,
            "owned_by": null,
            "locations": null,
            "story": "Multi-layered regional framework",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 2,
            "name": "Thoughtmix",
            "organisation_type": "Sponsor",
            "about": "Decentralized empowering artificial intelligence",
            "website_url": null,
            "phone": "7578453922",
            "email": "lspeers1@reddit.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Open-architected empowering toolset",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 3,
            "name": "Gabvine",
            "organisation_type": "Consultancy",
            "about": "Synchronised next generation concept",
            "website_url": "apache.org",
            "phone": "7364748602",
            "email": "bbenton2@miibeian.gov.cn",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Balanced tangible leverage",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 4,
            "name": "Skalith",
            "organisation_type": null,
            "about": "Compatible content-based secured line",
            "website_url": "boston.com",
            "phone": null,
            "email": "arender3@discuz.net",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 5,
            "name": "Avaveo",
            "organisation_type": "Government",
            "about": "Customer-focused leading edge customer loyalty",
            "website_url": null,
            "phone": "1995709220",
            "email": "tmarskell4@smh.com.au",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Assimilated multi-state ability",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 6,
            "name": "Innotype",
            "organisation_type": "Government",
            "about": "Networked asynchronous neural-net",
            "website_url": "barnesandnoble.com",
            "phone": "9674796018",
            "email": "ccusick5@uiuc.edu",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Seamless multi-tasking archive",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 7,
            "name": "Browsezoom",
            "organisation_type": "Sponsor",
            "about": "Decentralized systemic attitude",
            "website_url": null,
            "phone": "7856198648",
            "email": "sstoneley6@google.com.br",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Optional analyzing customer loyalty",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 8,
            "name": "Wikido",
            "organisation_type": null,
            "about": "Integrated high-level circuit",
            "website_url": null,
            "phone": null,
            "email": "rvowels7@shinystat.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 9,
            "name": "Teklist",
            "organisation_type": "Charity",
            "about": "Programmable real-time customer loyalty",
            "website_url": "purevolume.com",
            "phone": "5968240238",
            "email": "ksaltmarsh8@loc.gov",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Team-oriented human-resource artificial intelligence",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 10,
            "name": "Twinder",
            "organisation_type": "MNC",
            "about": "Operative attitude-oriented array",
            "website_url": null,
            "phone": "6589137746",
            "email": "teyam9@yale.edu",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Virtual directional groupware",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 11,
            "name": "Flashdog",
            "organisation_type": "MNC",
            "about": "Quality-focused impactful pricing structure",
            "website_url": null,
            "phone": "3878301489",
            "email": "cwhitlama@macromedia.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Team-oriented modular core",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 12,
            "name": "Chatterpoint",
            "organisation_type": null,
            "about": "Re-engineered system-worthy capability",
            "website_url": "nih.gov",
            "phone": null,
            "email": "cweekeb@webeden.co.uk",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 13,
            "name": "Fatz",
            "organisation_type": "MNC",
            "about": "Decentralized modular hierarchy",
            "website_url": "intel.com",
            "phone": "3032094893",
            "email": "tsessionsc@eventbrite.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "User-centric discrete complexity",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 14,
            "name": "Topicshots",
            "organisation_type": "Government",
            "about": "Face to face zero tolerance knowledge user",
            "website_url": "toplist.cz",
            "phone": "7078286517",
            "email": "nharmantd@gnu.org",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Total maximized encoding",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 15,
            "name": "Skipfire",
            "organisation_type": "Consultancy",
            "about": "User-centric zero tolerance extranet",
            "website_url": null,
            "phone": "1777985640",
            "email": "olenniee@addthis.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Team-oriented solution-oriented internet solution",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 16,
            "name": "Kazu",
            "organisation_type": "Government",
            "about": "Front-line uniform collaboration",
            "website_url": "printfriendly.com",
            "phone": "9785011485",
            "email": "tcarneckf@unc.edu",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Realigned well-modulated encryption",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 17,
            "name": "Buzzbean",
            "organisation_type": null,
            "about": "Future-proofed demand-driven contingency",
            "website_url": "craigslist.org",
            "phone": null,
            "email": "rpaxfordeg@amazon.de",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 18,
            "name": "Camimbo",
            "organisation_type": "MNC",
            "about": "Cross-group zero defect paradigm",
            "website_url": "ask.com",
            "phone": "7043362671",
            "email": "ocayfordh@theglobeandmail.com",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Open-source user-facing approach",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 19,
            "name": "Dynazzy",
            "organisation_type": "MNC",
            "about": "Quality-focused national customer loyalty",
            "website_url": "123-reg.co.uk",
            "phone": "7631507862",
            "email": "gjessetti@nih.gov",
            "address": null,
            "owned_by": null,
            "locations": [
                "Tampines",
                "Simei"
            ],
            "story": "Centralized actuating projection",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 20,
            "name": "Dynabox",
            "organisation_type": "Charity",
            "about": "Multi-tiered zero administration website",
            "website_url": "army.mil",
            "phone": "8528916285",
            "email": "emingardij@prnewswire.com",
            "address": null,
            "owned_by": null,
            "locations": null,
            "story": "Phased next generation concept",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 21,
            "name": "Roombo",
            "organisation_type": "MNC",
            "about": "Decentralized executive paradigm",
            "website_url": "rambler.ru",
            "phone": "5534658919",
            "email": "kmeesonk@taobao.com",
            "address": null,
            "owned_by": null,
            "locations": null,
            "story": "Persistent stable function",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 22,
            "name": "Brainbox",
            "organisation_type": "Sponsor",
            "about": "Reduced didactic time-frame",
            "website_url": "rakuten.co.jp",
            "phone": "8256694312",
            "email": "mridgedelll@sourceforge.net",
            "address": null,
            "owned_by": null,
            "locations": null,
            "story": "Business-focused asynchronous knowledge user",
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        },
        {
            "organisation_id": 23,
            "name": "Jaxbean",
            "organisation_type": null,
            "about": "Diverse reciprocal installation",
            "website_url": "hatena.ne.jp",
            "phone": null,
            "email": "gheggiem@columbia.edu",
            "address": null,
            "owned_by": null,
            "locations": null,
            "story": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "banner_photo": null,
            "profile_photo": null,
            "additional_photos": null,
            "is_verified": false,
            "created_on": "2020-11-14T07:01:33.521Z",
            "deleted_on": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 5. Get Single Organisation


Get single organisation. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/organisations/8426a370-280e-11eb-aa97-9d0bb1a7de0d
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Organisation (200 OK)



##### I. Example Response: Get Single Organisation (200 OK)
```js
{
    "success": true,
    "data": {
        "organisation_id": 1,
        "name": "Shuffledrive",
        "organisation_type": "Consultancy",
        "about": "Distributed 4th generation forecast",
        "website_url": "microsoft.com",
        "phone": "8765378253",
        "email": "mallgood0@slideshare.net",
        "address": null,
        "owned_by": null,
        "locations": null,
        "story": "Multi-layered regional framework",
        "facebook_link": null,
        "twitter_link": null,
        "instagram_link": null,
        "banner_photo": null,
        "profile_photo": null,
        "additional_photos": null,
        "is_verified": false,
        "created_on": "2020-11-14T07:01:33.521Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 200

<br>



### 6. Update Organisation


Update Organisation identified by organisation id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/organisations/8426a370-280e-11eb-aa97-9d0bb1a7de0d
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Org 1",
    "organisation_type": "Sponsor",
    "about": "about org 1",
    "website_url": "www.testorg1.com",
    "phone": 93232224,
    "email": "testorg1@test.com",
    "address": "23 Tampines St 31, Singapore 520023",
    "locations": [
        "Tampines",
        "Simei"
    ],
    "story": "Founded in 1962, ...",
    "facebook_link": "facebook.com",
    "twitter_link": "twitter.com",
    "instagram_link": "instagram.com",
    "banner_photo": "imgur.com",
    "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
    "additional_photos": [
        "pexels.com",
        "imgur.com"
    ]
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Organisation (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Org 1",
    "organisation_type": "Sponsor",
    "about": "about org 1",
    "website_url": "www.testorg1.com",
    "phone": 93232224,
    "email": "testorg1@test.com",
    "address": "23 Tampines St 31, Singapore 520023",
    "locations": [
        "Tampines",
        "Simei"
    ],
    "story": "Founded in 1962, ...",
    "facebook_link": "facebook.com",
    "twitter_link": "twitter.com",
    "instagram_link": "instagram.com",
    "banner_photo": "imgur.com",
    "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
    "additional_photos": [
        "pexels.com",
        "imgur.com"
    ]
}
```



##### I. Example Response: Update Organisation (200 OK)
```js
{
    "success": true,
    "data": {
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "name": "Org 1",
        "organisation_type": "Sponsor",
        "about": "about org 1",
        "website_url": "www.testorg1.com",
        "phone": "93232224",
        "email": "testorg1@test.com",
        "address": "23 Tampines St 31, Singapore 520023",
        "owned_by": null,
        "locations": [
            "Tampines",
            "Simei"
        ],
        "story": "Founded in 1962, ...",
        "facebook_link": "facebook.com",
        "twitter_link": "twitter.com",
        "instagram_link": "instagram.com",
        "banner_photo": "imgur.com",
        "profile_photo": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
        "additional_photos": [
            "pexels.com",
            "imgur.com"
        ],
        "is_verified": false,
        "created_on": "2020-11-18T14:37:13.363Z",
        "deleted_on": null
    }
}
```


***Status Code:*** 200

<br>



## Participants
Participants (Users-Listings) CRUD functionality.



### 1. Create participant


Create participant. (ie. add user to listing) Permission: Admin/Owner.

Field rules: 
All fields required unless otherwise stated. 
listing_id - Valid integer, existing listing id.
user_id - Valid integer, existing user id.
joined_on - Valid SQL datetime. Optional. Defaults to current datetime.
end_on - Valid SQL datetime. Optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/participants
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
	"user_id": "f96b2138-1754-4c17-a405-940e20adc601",
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create participant (400 Bad Request - Entry already exists)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 2,
	"user_id": 5,
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### I. Example Response: Create participant (400 Bad Request - Entry already exists)
```js
{
    "success": false,
    "error": "Duplicate field value entered: Key (listing_id, user_id)=(2, 5) already exists."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Create participant (403 Forbidden - Non-admin, non-listing owner and not updating self)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 2,
	"user_id": 5,
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### II. Example Response: Create participant (403 Forbidden - Non-admin, non-listing owner and not updating self)
```js
{
    "success": false,
    "error": "Not authorised to add participants to this listing"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Create participant (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### III. Example Response: Create participant (201 Created)
```js
{
    "success": true,
    "data": {
        "participant_id": 13,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
        "joined_on": "2019-07-17T07:14:05.023Z",
        "end_on": "2020-07-17T07:14:05.023Z"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Participant


Delete participant identified by participant id. Permission: Admin/Owner/Private.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/participants/11
```



***More example Requests/Responses:***


##### I. Example Request: Delete Participant (403 Forbidden - Non-admin, non-listing owner and not updating self)



##### I. Example Response: Delete Participant (403 Forbidden - Non-admin, non-listing owner and not updating self)
```js
{
    "success": false,
    "error": "Not authorised to update other participants in this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Participant (400 Bad Request - Non-existent participant)



##### II. Example Response: Delete Participant (400 Bad Request - Non-existent participant)
```js
{
    "success": false,
    "error": "Participant does not exist"
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Delete Participant (200 OK)



##### III. Example Response: Delete Participant (200 OK)
```js
{
    "success": true,
    "data": {
        "participant_id": 21,
        "listing_id": 2,
        "user_id": 5,
        "joined_on": "2019-07-17T07:14:05.023Z",
        "end_on": "2020-07-17T07:14:05.023Z"
    }
}
```


***Status Code:*** 200

<br>



## Profiles
Profiles CRUD funcitonality by raw User ID.



### 1. Get Single Profile


Get single user profile identified by user id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/profiles
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Profile (200 OK)



##### I. Example Response: Get Single Profile (200 OK)
```js
{
    "success": true,
    "data": {
        "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
        "nickname": "User One",
        "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1",
        "about": "Down-sized disintermediate circuit",
        "gender": "f",
        "dob": "2003-09-22T00:32:55.000Z",
        "interest": "Statistician IV",
        "phone": "87685829",
        "facebook_link": "https://tripadvisor.com/ornare/imperdiet.png",
        "twitter_link": "https://google.com/quis/orci/nullam/molestie/nibh/in/lectus.xml",
        "instagram_link": "http://1und1.de/in/libero/ut/massa.png",
        "linkedin_link": "http://i2i.jp/imperdiet/sapien/urna/pretium/nisl/ut.jpg",
        "is_verified": false,
        "created_on": "2020-08-17T16:58:38.704Z"
    }
}
```


***Status Code:*** 200

<br>



### 2. Update Profile


Update user profile identified by user id. Permission: Admin/Private.

Field rules:
At least one field must be updated.
nickname - Non-empty.
about
gender - Enum: 'm', 'f', 'o', 'u'
dob - Valid SQL Datetime format.
interest
phone - Valid phone number internationally.
facebook_link - Valid URL.
twitter_link - Valid URL.
instagram_link - Valid URL.
linkedin_link - Valid URL.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/profiles
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"nickname": "don-tay",
	"about": "Updated about me",
	"gender": "m",
	"dob": "2000-07-18 00:00:00.746876+08",
	"interest": "Graphic Design",
	"phone": "91231234",
	"facebook_link": "www.facebook.com",
	"twitter_link": "www.twitter.com",
	"instagram_link": "www.instagram.com",
	"linkedin_link": "www.linkedin.com"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Profile (400 Bad Request - Invalid field entered)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"nickname": "don-tay",
	"profile_picture": "https://robohash.org/explicaboquiafacere.bmp?size=50x50&set=set1",
	"about": "Updated about me",
	"gender": "m",
	"dob": "2000-07-18 00:00:00.746876+08",
	"interest": "Graphic Design",
	"phone": "91231234",
	"facebook_link": "invalid URL link",
	"twitter_link": "www.twitter.com",
	"instagram_link": "www.instagram.com",
	"linkedin_link": "www.linkedin.com"
}
```



##### I. Example Response: Update Profile (400 Bad Request - Invalid field entered)
```js
{
    "success": false,
    "error": "Please include a valid URL."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Update Profile (404 Not Found - Non-existent user id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"nickname": "don-tay",
	"about": "Updated about me",
	"gender": "m",
	"dob": "2000-07-18 00:00:00.746876+08",
	"interest": "Graphic Design",
	"phone": "91231234",
	"facebook_link": "www.facebook.com",
	"twitter_link": "www.twitter.com",
	"instagram_link": "www.instagram.com",
	"linkedin_link": "www.linkedin.com"
}
```



##### II. Example Response: Update Profile (404 Not Found - Non-existent user id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Update Profile (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"nickname": "don-tay",
	"about": "Updated about me",
	"gender": "m",
	"dob": "2000-07-18 00:00:00.746876+08",
	"interest": "Graphic Design",
	"phone": "91231234",
	"facebook_link": "www.facebook.com",
	"twitter_link": "www.twitter.com",
	"instagram_link": "www.instagram.com",
	"linkedin_link": "www.linkedin.com"
}
```



##### III. Example Response: Update Profile (200 OK)
```js
{
    "success": true,
    "data": {
        "nickname": "don-tay",
        "about": "Updated about me",
        "gender": "m",
        "dob": "2000-07-17T16:00:00.747Z",
        "interest": "Graphic Design",
        "phone": "91231234",
        "facebook_link": "www.facebook.com",
        "twitter_link": "www.twitter.com",
        "instagram_link": "www.instagram.com",
        "linkedin_link": "www.linkedin.com"
    }
}
```


***Status Code:*** 200

<br>



##### IV. Example Request: Update Profile  (403 Forbidden - Non-admin user updating other user profile)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"nickname": "don-tay",
	"profile_picture": "https://robohash.org/explicaboquiafacere.bmp?size=50x50&set=set1",
	"about": "Updated about me",
	"gender": "m",
	"dob": "2000-07-18 00:00:00.746876+08",
	"interest": "Graphic Design",
	"phone": "91231234",
	"facebook_link": "www.facebook.com",
	"twitter_link": "www.twitter.com",
	"instagram_link": "www.instagram.com",
	"linkedin_link": "www.linkedin.com"
}
```



##### IV. Example Response: Update Profile  (403 Forbidden - Non-admin user updating other user profile)
```js
{
    "success": false,
    "error": "Not allowed to update other user's profile"
}
```


***Status Code:*** 403

<br>



### 3. Verify Profile (by User ID)


Verify user profile identified by user id. Permission: Admin.

Field rules:
At least one field must be updated.
is_verified - Boolean.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/profiles/verify
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"is_verified": true
}
```



***More example Requests/Responses:***


##### I. Example Request: Verify Profile (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"is_verified": true
}
```



##### I. Example Response: Verify Profile (200 OK)
```js
{
    "success": true,
    "data": {
        "is_verified": true
    }
}
```


***Status Code:*** 200

<br>



## Programmes
Organisations CRUD functionality.



### 1. Create Programme


Create programme. Permission: Admin/Owner.

Field rules:
All fields required unles otherwise stated.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/programmes
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
    "programme_title": "New Programme 1",
    "about": "About the new programme...",
    "media_url": ["https://youtube.com", "https://instagram.com"]
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Programme (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
    "programme_title": "New Programme 1",
    "about": "About the new programme...",
    "media_url": ["https://youtube.com", "https://instagram.com"]
}
```



##### I. Example Response: Create Programme (201 Created)
```js
{
    "success": true,
    "data": {
        "programme_id": 28,
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "programme_title": "New Programme 1",
        "about": "About the new programme...",
        "media_url": [
            "https://youtube.com",
            "https://instagram.com"
        ]
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Programme


Delete programme identified by programme id. Permission: Admin/Owner.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/programmes/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Programme (200 OK)



##### I. Example Response: Delete Programme (200 OK)
```js
{
    "success": true,
    "data": {
        "programme_id": 1,
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "programme_title": "New Programme 1",
        "about": "About the new programme...",
        "media_url": [
            "https://youtube.com",
            "https://instagram.com"
        ]
    }
}
```


***Status Code:*** 200

<br>



### 3. Get All Programmes


Get all programmes. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/programmes
```



***More example Requests/Responses:***


##### I. Example Request: Get All Programmes (200 OK)



##### I. Example Response: Get All Programmes (200 OK)
```js
{
    "success": true,
    "count": 27,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "programme_id": 1,
            "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Innovative object-oriented utilisation",
            "about": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "media_url": null
        },
        {
            "programme_id": 2,
            "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Proactive actuating Graphic Interface",
            "about": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "media_url": null
        },
        {
            "programme_id": 3,
            "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Multi-lateral human-resource software",
            "about": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 4,
            "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Universal heuristic implementation",
            "about": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 5,
            "organisation_id": "91d4aee0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Open-source composite neural-net",
            "about": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 6,
            "organisation_id": "91d4aee0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Optimized heuristic leverage",
            "about": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 7,
            "organisation_id": "91d4aee0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Synchronised local superstructure",
            "about": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 8,
            "organisation_id": "98897310-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Virtual bi-directional alliance",
            "about": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 9,
            "organisation_id": "98897310-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Multi-tiered global Graphical User Interface",
            "about": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "media_url": null
        },
        {
            "programme_id": 10,
            "organisation_id": "a689bd30-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Fully-configurable context-sensitive productivity",
            "about": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "media_url": null
        },
        {
            "programme_id": 11,
            "organisation_id": "a689bd30-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Operative asynchronous ability",
            "about": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 12,
            "organisation_id": "a689bd30-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Networked asymmetric analyzer",
            "about": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "media_url": null
        },
        {
            "programme_id": 13,
            "organisation_id": "a689bd30-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Monitored explicit local area network",
            "about": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "media_url": null
        },
        {
            "programme_id": 14,
            "organisation_id": "b2be4800-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Virtual homogeneous Graphic Interface",
            "about": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 15,
            "organisation_id": "b2be4800-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Devolved 4th generation conglomeration",
            "about": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 16,
            "organisation_id": "b2be4800-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Quality-focused background definition",
            "about": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 17,
            "organisation_id": "b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Inverse full-range extranet",
            "about": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 18,
            "organisation_id": "b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Virtual context-sensitive core",
            "about": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "media_url": null
        },
        {
            "programme_id": 19,
            "organisation_id": "bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Public-key even-keeled migration",
            "about": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 20,
            "organisation_id": "bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Distributed client-server installation",
            "about": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 21,
            "organisation_id": "bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Function-based impactful protocol",
            "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 22,
            "organisation_id": "c37092c0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "User-friendly uniform knowledge base",
            "about": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 23,
            "organisation_id": "c37092c0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Stand-alone grid-enabled encryption",
            "about": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 24,
            "organisation_id": "c37092c0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Monitored mobile utilisation",
            "about": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "media_url": [
                "https://youtube.com",
                "https://instagram.com"
            ]
        },
        {
            "programme_id": 25,
            "organisation_id": "c91609d0-280e-11eb-aa97-9d0bb1a7de0d",
            "programme_title": "Versatile explicit extranet",
            "about": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
            "media_url": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Programme


Get single programme. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/programmes/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Programme (200 OK)



##### I. Example Response: Get Single Programme (200 OK)
```js
{
    "success": true,
    "data": {
        "programme_id": 1,
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "programme_title": "Innovative object-oriented utilisation",
        "about": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "media_url": null
    }
}
```


***Status Code:*** 200

<br>



### 5. Update Programme


Update Programme identified by programme id. Permission: Admin/Owner.

Field rules: 
At least one field must be updated.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/programmes/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "programme_title": "New Programme 1",
    "about": "About the new programme...",
    "media_url": ["https://youtube.com", "https://instagram.com"]
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Programme (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "programme_title": "New Programme 1",
    "about": "About the new programme...",
    "media_url": ["https://youtube.com", "https://instagram.com"]
}
```



##### I. Example Response: Update Programme (200 OK)
```js
{
    "success": true,
    "data": {
        "programme_id": 1,
        "organisation_id": "8426a370-280e-11eb-aa97-9d0bb1a7de0d",
        "programme_title": "New Programme 1",
        "about": "About the new programme...",
        "media_url": [
            "https://youtube.com",
            "https://instagram.com"
        ]
    }
}
```


***Status Code:*** 200

<br>



## Users
Users CRUD functionality.



### 1. Get All Likes for a User


Get all likes for an associated user, identified by the user id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/likes
```



***More example Requests/Responses:***


##### I. Example Request: Get All Likes for a User (404 Not Found - Non-existent user id)



##### I. Example Response: Get All Likes for a User (404 Not Found - Non-existent user id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Likes for a User (200 OK)



##### II. Example Response: Get All Likes for a User (200 OK)
```js
{
    "success": true,
    "count": 2,
    "data": [
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "like_id": 8,
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "vestibulum sed magna at nunc",
            "category": "Training",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "innovate B2C markets",
            "mission": "cultivate cutting-edge markets",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "pic1": "https://robohash.org/etpossimusea.png?size=500x500&set=set1",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-17T16:52:17.118Z",
            "deleted_on": null
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "like_id": 7,
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "organisation_id": null,
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Updated title 1",
            "category": "Updated category",
            "about": "Updated about",
            "tagline": "Updated tagline",
            "mission": "Updated mission",
            "listing_url": "www.updated-test.com",
            "pic1": null,
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": true,
            "is_verified": true,
            "start_date": "2018-08-15T08:45:43.416Z",
            "end_date": "2020-01-30T08:45:43.416Z",
            "created_on": "2020-08-17T16:52:17.118Z",
            "deleted_on": "2020-08-17T16:52:32.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get All Listing Comments for a User


Get all listing comments for an associated user. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/listing-comments
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Comments for a User (200 OK)



##### I. Example Response: Get All Listing Comments for a User (200 OK)
```js
{
    "success": true,
    "count": 4,
    "data": [
        {
            "listing_comment_id": 7,
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "comment": "incubate leading-edge partnerships",
            "reply_to_id": null,
            "created_on": "2020-08-20T15:56:14.000Z",
            "updated_on": "2019-10-08T09:00:24.000Z",
            "deleted_on": null,
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 8,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "comment": "harness viral web services",
            "reply_to_id": 3,
            "created_on": "2019-11-16T22:38:44.000Z",
            "updated_on": "2019-12-10T10:58:28.000Z",
            "deleted_on": null,
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 9,
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "comment": "whiteboard best-of-breed deliverables",
            "reply_to_id": null,
            "created_on": "2020-03-29T09:51:13.000Z",
            "updated_on": "2019-11-08T17:45:40.000Z",
            "deleted_on": null,
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1"
        },
        {
            "listing_comment_id": 10,
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "comment": "deliver frictionless infrastructures",
            "reply_to_id": 2,
            "created_on": "2019-10-29T16:32:01.000Z",
            "updated_on": "2020-04-27T13:18:40.000Z",
            "deleted_on": null,
            "nickname": "User One",
            "profile_picture": "https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. Get All Listing Participation for a User


Get all listing participation for an associated user, identified by the user id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/participants
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Participation for a User (404 Not Found - Non-existent user id)



##### I. Example Response: Get All Listing Participation for a User (404 Not Found - Non-existent user id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Listing Participation for a User (200 OK)



##### II. Example Response: Get All Listing Participation for a User (200 OK)
```js
{
    "success": true,
    "count": 4,
    "data": [
        {
            "participant_id": 6,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "joined_on": "2020-02-21T16:00:00.000Z",
            "end_on": "2020-08-09T16:00:00.000Z"
        },
        {
            "participant_id": 7,
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "joined_on": "2020-02-11T16:00:00.000Z",
            "end_on": "2020-09-03T16:00:00.000Z"
        },
        {
            "participant_id": 8,
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "joined_on": "2019-03-20T16:00:00.000Z",
            "end_on": "2020-09-22T16:00:00.000Z"
        },
        {
            "participant_id": 9,
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "user_id": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "joined_on": "2020-06-12T16:00:00.000Z",
            "end_on": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get All Listings Owned by a User


Get all listing owned by an associated user, identified by the user id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/d69a127d-815b-4834-b2b6-54ab398fccad/listings/owner
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings Owned by a User (404 Not Found - Non-existent user id)



##### I. Example Response: Get All Listings Owned by a User (404 Not Found - Non-existent user id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Listings Owned by a User (200 OK)



##### II. Example Response: Get All Listings Owned by a User (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "organisation_id": null,
            "created_by": "d69a127d-815b-4834-b2b6-54ab398fccad",
            "title": "Supporting COVID-19 Efforts",
            "category": "COVID-19",
            "about": "Triple-buffered client-server installation",
            "tagline": "Emerge stronger together",
            "mission": "streamline web-enabled ROI",
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": null,
            "pic3": "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Aaron",
            "profile_picture": "https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "03 Queenstown, Tiong Bahru"
            ],
            "location_ids": [
                3
            ]
        }
    ]
}
```


***Status Code:*** 200

<br>



---
[Back to top](#kampong-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-12-19 12:59:37 by [docgen](https://github.com/thedevsaddam/docgen)
