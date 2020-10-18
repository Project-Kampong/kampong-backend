
# Kampong API

Backend API for Project Kampong.

## Indices

* [Admin-only Get Soft Deleted](#admin-only-get-soft-deleted)

  * [Get All Jobs Including Soft Deletes](#1-get-all-jobs-including-soft-deletes)
  * [Get All Jobs for a Listing Including Soft Deletes](#2-get-all-jobs-for-a-listing-including-soft-deletes)
  * [Get All Listings Including Soft Deletes](#3-get-all-listings-including-soft-deletes)

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

* [Faqs](#faqs)

  * [Create Faq](#1-create-faq)
  * [Delete Faq](#2-delete-faq)
  * [Get All Faqs](#3-get-all-faqs)
  * [Get Single Faq](#4-get-single-faq)
  * [Update Faq](#5-update-faq)

* [Featured Listings](#featured-listings)

  * [Create Featured Listing](#1-create-featured-listing)
  * [Delete Featured Listing](#2-delete-featured-listing)
  * [Get All Featured Listings](#3-get-all-featured-listings)
  * [Get Single Featured Listings](#4-get-single-featured-listings)

* [File Upload](#file-upload)

  * [Multiple file upload](#1-multiple-file-upload)
  * [Single file upload](#2-single-file-upload)

* [Hashtags](#hashtags)

  * [Create Hashtag](#1-create-hashtag)
  * [Delete Hashtag](#2-delete-hashtag)
  * [Get All Hashtags](#3-get-all-hashtags)
  * [Get Single Hashtag](#4-get-single-hashtag)
  * [Update Hashtag](#5-update-hashtag)

* [Jobs](#jobs)

  * [Create Job](#1-create-job)
  * [Deactivate Job](#2-deactivate-job)
  * [Delete Job](#3-delete-job)
  * [Get All Jobs](#4-get-all-jobs)
  * [Get Single Job](#5-get-single-job)
  * [Update Job](#6-update-job)

* [Likes](#likes)

  * [Get All Likes](#1-get-all-likes)
  * [Get Single Like](#2-get-single-like)
  * [Like Listing](#3-like-listing)
  * [Unlike Listing](#4-unlike-listing)

* [Listing Comments](#listing-comments)

  * [Create Listing Comment](#1-create-listing-comment)
  * [Deactivate Listing Comment](#2-deactivate-listing-comment)
  * [Delete Listing Comment](#3-delete-listing-comment)
  * [Get All Children Comment for Listing Comment](#4-get-all-children-comment-for-listing-comment)
  * [Get All Listing Comments](#5-get-all-listing-comments)
  * [Get Single Listing Comment](#6-get-single-listing-comment)
  * [Update Listing Comment](#7-update-listing-comment)

* [Listing Locations](#listing-locations)

  * [Create Listing Location](#1-create-listing-location)
  * [Delete Listing Location](#2-delete-listing-location)
  * [Get All Listing Locations](#3-get-all-listing-locations)
  * [Get Single Listing Location](#4-get-single-listing-location)

* [Listing Skills](#listing-skills)

  * [Create Custom Listing Skill](#1-create-custom-listing-skill)
  * [Create Listing Skill](#2-create-listing-skill)
  * [Delete Listing Skill](#3-delete-listing-skill)
  * [Get All Listing Skills](#4-get-all-listing-skills)
  * [Get Single Listing Skill](#5-get-single-listing-skill)

* [Listing Stories](#listing-stories)

  * [Get All Listing Stories](#1-get-all-listing-stories)
  * [Get Single Listing Story](#2-get-single-listing-story)
  * [Update Listing Story](#3-update-listing-story)

* [Listing Updates](#listing-updates)

  * [Create Listing Update](#1-create-listing-update)
  * [Delete Listing Update](#2-delete-listing-update)
  * [Get All Listing Updates](#3-get-all-listing-updates)
  * [Get Single Listing Update](#4-get-single-listing-update)
  * [Modify Listing Update](#5-modify-listing-update)

* [Listings](#listings)

  * [Create Listing](#1-create-listing)
  * [Deactivate Listing](#2-deactivate-listing)
  * [Delete Listing](#3-delete-listing)
  * [Get All Faqs for a Listing](#4-get-all-faqs-for-a-listing)
  * [Get All Hashtags for a Listing](#5-get-all-hashtags-for-a-listing)
  * [Get All Jobs for a Listing](#6-get-all-jobs-for-a-listing)
  * [Get All Likes for a Listing](#7-get-all-likes-for-a-listing)
  * [Get All Listing Comments for a Listing](#8-get-all-listing-comments-for-a-listing)
  * [Get All Listing Locations for a Listing](#9-get-all-listing-locations-for-a-listing)
  * [Get All Listing Skills for a Listing](#10-get-all-listing-skills-for-a-listing)
  * [Get All Listing Updates for a Listing](#11-get-all-listing-updates-for-a-listing)
  * [Get All Listings](#12-get-all-listings)
  * [Get All Milestones for a Listing](#13-get-all-milestones-for-a-listing)
  * [Get All Participants for a Listing](#14-get-all-participants-for-a-listing)
  * [Get Single Listing](#15-get-single-listing)
  * [Search Listings](#16-search-listings)
  * [Update Listing](#17-update-listing)
  * [Upload Listing Photos](#18-upload-listing-photos)
  * [Verify Listing](#19-verify-listing)

* [Locations](#locations)

  * [Create Location](#1-create-location)
  * [Delete Location](#2-delete-location)
  * [Get All Listings for a Location](#3-get-all-listings-for-a-location)
  * [Get All Locations](#4-get-all-locations)
  * [Get Single Location](#5-get-single-location)

* [Milestones](#milestones)

  * [Create Milestone](#1-create-milestone)
  * [Delete Milestone](#2-delete-milestone)
  * [Get All Milestones](#3-get-all-milestones)
  * [Get Single Milestone](#4-get-single-milestone)
  * [Update Milestone](#5-update-milestone)

* [Organisations](#organisations)

  * [Create Organisation](#1-create-organisation)
  * [Delete Organisation](#2-delete-organisation)
  * [Get All Organisations](#3-get-all-organisations)
  * [Get Single Organisation](#4-get-single-organisation)
  * [Update Organisation](#5-update-organisation)

* [Participants](#participants)

  * [Create participant](#1-create-participant)
  * [Delete Participant](#2-delete-participant)
  * [Get All Participants](#3-get-all-participants)
  * [Get Single Participant](#4-get-single-participant)
  * [Update Participant](#5-update-participant)

* [Send Email](#send-email)

  * [Send email](#1-send-email)

* [Skills](#skills)

  * [Create Skill](#1-create-skill)
  * [Delete Skill](#2-delete-skill)
  * [Get All Skills](#3-get-all-skills)
  * [Get Single Skill](#4-get-single-skill)
  * [Update Skill](#5-update-skill)

* [Users](#users)

  * [Create User](#1-create-user)
  * [Delete User](#2-delete-user)
  * [Get All Likes for a User](#3-get-all-likes-for-a-user)
  * [Get All Listing Comments for a User](#4-get-all-listing-comments-for-a-user)
  * [Get All Listing Participation for a User](#5-get-all-listing-participation-for-a-user)
  * [Get All Listings Owned by a User](#6-get-all-listings-owned-by-a-user)
  * [Get All Users](#7-get-all-users)
  * [Get Single User](#8-get-single-user)
  * [Update User](#9-update-user)


--------


## Admin-only Get Soft Deleted
All GET requests for retrieving all resources, including soft deleted. Admin-only endpoints.



### 1. Get All Jobs Including Soft Deletes


Get all jobs including soft deletes. Permission: Admin.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/jobs/all
```



***More example Requests/Responses:***


##### I. Example Request: Get All Jobs Including Soft Deletes (200 OK)



##### I. Example Response: Get All Jobs Including Soft Deletes (200 OK)
```js
{
    "success": true,
    "count": 80,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "job_id": 1,
            "listing_id": 8,
            "job_title": "Account Representative I",
            "job_description": "Polarised next generation alliance",
            "hashId": "vn"
        },
        {
            "job_id": 2,
            "listing_id": 4,
            "job_title": "Project Manager",
            "job_description": "Ameliorated 24 hour structure",
            "hashId": "e3"
        },
        {
            "job_id": 3,
            "listing_id": 16,
            "job_title": "Teacher",
            "job_description": "Enhanced 6th generation portal",
            "hashId": "GB"
        },
        {
            "job_id": 4,
            "listing_id": 7,
            "job_title": "VP Accounting",
            "job_description": "Multi-channelled local pricing structure",
            "hashId": "6W"
        },
        {
            "job_id": 5,
            "listing_id": 12,
            "job_title": "Office Assistant IV",
            "job_description": "Vision-oriented explicit moratorium",
            "hashId": "Wp"
        },
        {
            "job_id": 6,
            "listing_id": 13,
            "job_title": "Senior Editor",
            "job_description": "Devolved high-level protocol",
            "hashId": "Qp"
        },
        {
            "job_id": 7,
            "listing_id": 20,
            "job_title": "Civil Engineer",
            "job_description": "Front-line optimal algorithm",
            "hashId": "2V"
        },
        {
            "job_id": 8,
            "listing_id": 13,
            "job_title": "Senior Quality Engineer",
            "job_description": "Exclusive incremental toolset",
            "hashId": "7B"
        },
        {
            "job_id": 9,
            "listing_id": 15,
            "job_title": "Programmer Analyst I",
            "job_description": "Polarised bifurcated open architecture",
            "hashId": "Zp"
        },
        {
            "job_id": 10,
            "listing_id": 5,
            "job_title": "Paralegal",
            "job_description": "Networked intangible system engine",
            "hashId": "yb"
        },
        {
            "job_id": 11,
            "listing_id": 5,
            "job_title": "Project Manager",
            "job_description": "Profound optimizing matrix",
            "hashId": "g7"
        },
        {
            "job_id": 12,
            "listing_id": 15,
            "job_title": "Tax Accountant",
            "job_description": "Realigned grlisting_id-enabled forecast",
            "hashId": "mn"
        },
        {
            "job_id": 13,
            "listing_id": 12,
            "job_title": "Software Test Engineer II",
            "job_description": "Right-sized 3rd generation throughput",
            "hashId": "1r"
        },
        {
            "job_id": 14,
            "listing_id": 11,
            "job_title": "Teacher",
            "job_description": "Universal executive Graphical User Interface",
            "hashId": "wQ"
        },
        {
            "job_id": 15,
            "listing_id": 17,
            "job_title": "Community Outreach Specialist",
            "job_description": "Monitored asynchronous initiative",
            "hashId": "zM"
        },
        {
            "job_id": 16,
            "listing_id": 17,
            "job_title": "Compensation Analyst",
            "job_description": "Universal 24 hour protocol",
            "hashId": "9x"
        },
        {
            "job_id": 17,
            "listing_id": 5,
            "job_title": "VP Marketing",
            "job_description": "Inverse user-facing ability",
            "hashId": "qw"
        },
        {
            "job_id": 18,
            "listing_id": 20,
            "job_title": "Teacher",
            "job_description": "Phased bottom-line encryption",
            "hashId": "3M"
        },
        {
            "job_id": 19,
            "listing_id": 20,
            "job_title": "Chemical Engineer",
            "job_description": "Synergistic stable encryption",
            "hashId": "Yz"
        },
        {
            "job_id": 20,
            "listing_id": 13,
            "job_title": "Web Developer IV",
            "job_description": "Focused encompassing archive",
            "hashId": "jy"
        },
        {
            "job_id": 21,
            "listing_id": 16,
            "job_title": "Assistant Professor",
            "job_description": "Public-key heuristic encryption",
            "hashId": "Vk"
        },
        {
            "job_id": 22,
            "listing_id": 17,
            "job_title": "Desktop Support Technician",
            "job_description": "Upgradable upward-trending matrices",
            "hashId": "Jm"
        },
        {
            "job_id": 23,
            "listing_id": 6,
            "job_title": "Account Representative IV",
            "job_description": "Front-line analyzing portal",
            "hashId": "Eb"
        },
        {
            "job_id": 24,
            "listing_id": 2,
            "job_title": "Help Desk Technician",
            "job_description": "Optional clear-thinking groupware",
            "hashId": "xa"
        },
        {
            "job_id": 25,
            "listing_id": 9,
            "job_title": "Technical Writer",
            "job_description": "Phased zero tolerance functionalities",
            "hashId": "D9"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get All Jobs for a Listing Including Soft Deletes


Get all jobs for an associated listing including soft deletes. Permission: Admin.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/jobs/all
```



***More example Requests/Responses:***


##### I. Example Request: Get All Jobs for a Listing Including Soft Deletes (404 Not Found - Non-existent listing id)



##### I. Example Response: Get All Jobs for a Listing Including Soft Deletes (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get All Jobs for a Listing Including Soft Deletes (200 OK)



##### II. Example Response: Get All Jobs for a Listing Including Soft Deletes (200 OK)
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



### 3. Get All Listings Including Soft Deletes


Get all listings including soft deletes. Permission: Admin.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/all
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listings Including Soft Deletes (200 OK)



##### I. Example Response: Get All Listings Including Soft Deletes (200 OK)
```js
{
    "success": true,
    "count": 20,
    "pagination": {},
    "data": [
        {
            "listing_id": 1,
            "organisation_id": null,
            "created_by": 3,
            "title": "neque libero convallis eget",
            "category": "Human Resources",
            "about": "Customer-focused dynamic installation",
            "tagline": "integrate cross-platform initiatives",
            "mission": "embrace sticky synergies",
            "listing_url": "http://ifeng.com/nisl.jsp",
            "pic1": "https://robohash.org/nesciuntliberovoluptate.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "vn"
        },
        {
            "listing_id": 2,
            "organisation_id": null,
            "created_by": 7,
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
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "e3"
        },
        {
            "listing_id": 3,
            "organisation_id": null,
            "created_by": 3,
            "title": "ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
            "category": "Research and Development",
            "about": "Triple-buffered client-server installation",
            "tagline": "expedite front-end e-services",
            "mission": "streamline web-enabled ROI",
            "listing_url": "https://mtv.com/blandit/mi/in.png",
            "pic1": "https://robohash.org/oditaperiamomnis.bmp?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-01-01T12:54:13.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "GB"
        },
        {
            "listing_id": 4,
            "organisation_id": null,
            "created_by": 12,
            "title": "vehicula consequat morbi a ipsum integer a nibh in quis",
            "category": "Legal",
            "about": "Cloned 4th generation matrices",
            "tagline": "visualize bleeding-edge niches",
            "mission": "utilize robust ROI",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "pic1": "https://robohash.org/quofugadolor.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "6W"
        },
        {
            "listing_id": 5,
            "organisation_id": null,
            "created_by": 8,
            "title": "a odio in hac habitasse platea",
            "category": "Product Management",
            "about": "Adaptive disintermediate Graphical User Interface",
            "tagline": "engineer out-of-the-box solutions",
            "mission": "e-enable dot-com metrics",
            "listing_url": "http://i2i.jp/rhoncus/dui/vel.jpg",
            "pic1": "https://robohash.org/undeveroenim.bmp?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/nonquodquam.png?size=500x500&set=set1",
            "pic5": "https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1",
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-03-19T03:04:15.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "Wp"
        },
        {
            "listing_id": 6,
            "organisation_id": null,
            "created_by": 14,
            "title": "enim blandit mi in porttitor pede justo eu massa",
            "category": "Accounting",
            "about": "Advanced regional monitoring",
            "tagline": "whiteboard collaborative schemas",
            "mission": "deploy front-end applications",
            "listing_url": "http://list-manage.com/nulla/quisque/arcu.xml",
            "pic1": "https://robohash.org/quaeratvelitsunt.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/quistemporeodit.bmp?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/doloremqueetmolestiae.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-05-09T21:55:24.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "Qp"
        },
        {
            "listing_id": 7,
            "organisation_id": null,
            "created_by": 9,
            "title": "potenti cras in purus",
            "category": "Sales",
            "about": "Diverse local website",
            "tagline": "deliver real-time e-services",
            "mission": "seize viral partnerships",
            "listing_url": "http://pen.io/quam/suspendisse/potenti/nullam/porttitor.jsp",
            "pic1": "https://robohash.org/aspernaturautanimi.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/nequeinventoredeleniti.jpg?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-24T00:10:13.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "2V"
        },
        {
            "listing_id": 8,
            "organisation_id": null,
            "created_by": 4,
            "title": "eget orci vehicula condimentum curabitur",
            "category": "Product Management",
            "about": "Object-based multi-tasking parallelism",
            "tagline": "productize dot-com relationships",
            "mission": "generate transparent initiatives",
            "listing_url": "http://globo.com/metus/aenean/fermentum/donec.jsp",
            "pic1": "https://robohash.org/corruptideseruntconsequatur.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/adipiscidolorumasperiores.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/harumquiamet.jpg?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-01-01T23:09:36.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "7B"
        },
        {
            "listing_id": 9,
            "organisation_id": null,
            "created_by": 18,
            "title": "eu massa donec dapibus duis at velit eu est",
            "category": "Research and Development",
            "about": "Proactive demand-driven moderator",
            "tagline": "evolve revolutionary action-items",
            "mission": "brand global portals",
            "listing_url": "http://cbsnews.com/quisque/erat/eros/viverra/eget.json",
            "pic1": "https://robohash.org/repellendusrerumlaborum.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/omnisaccusamusrerum.bmp?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-01-21T05:32:51.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "Zp"
        },
        {
            "listing_id": 10,
            "organisation_id": null,
            "created_by": 16,
            "title": "iaculis justo in",
            "category": "Legal",
            "about": "Polarised client-server software",
            "tagline": "transition dynamic platforms",
            "mission": "redefine seamless schemas",
            "listing_url": "https://wp.com/nisl/duis/bibendum/felis/sed/interdum/venenatis.jpg",
            "pic1": "https://robohash.org/aestest.bmp?size=500x500&set=set1",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-01-11T18:16:58.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "yb"
        },
        {
            "listing_id": 11,
            "organisation_id": null,
            "created_by": 1,
            "title": "mauris ullamcorper purus sit amet nulla quisque arcu",
            "category": "Product Management",
            "about": "Synchronised intangible knowledge base",
            "tagline": "disintermediate front-end partnerships",
            "mission": "iterate cross-platform technologies",
            "listing_url": "https://slate.com/ultrices/libero/non.jpg",
            "pic1": "https://robohash.org/voluptatemquosid.png?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/autemullamid.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-10-19T10:31:39.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "g7"
        },
        {
            "listing_id": 12,
            "organisation_id": null,
            "created_by": 14,
            "title": "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam",
            "category": "Research and Development",
            "about": "Customer-focused eco-centric conglomeration",
            "tagline": "harness interactive applications",
            "mission": "repurpose granular e-business",
            "listing_url": "https://senate.gov/quisque/ut/erat/curabitur.jpg",
            "pic1": "https://robohash.org/illomolestiaequasi.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/cupiditatevoluptatemanimi.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/inciduntipsamsuscipit.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/laborumautmolestiae.jpg?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-09-29T10:12:25.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "mn"
        },
        {
            "listing_id": 13,
            "organisation_id": null,
            "created_by": 15,
            "title": "sit amet eros suspendisse accumsan tortor quis",
            "category": "Marketing",
            "about": "Expanded optimizing software",
            "tagline": "whiteboard clicks-and-mortar markets",
            "mission": "incubate back-end web-readiness",
            "listing_url": "http://vimeo.com/sed/lacus/morbi/sem/mauris.png",
            "pic1": "https://robohash.org/eligendisedimpedit.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/rerumfaceremagnam.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/asperioresconsequaturrecusandae.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-03-15T21:04:01.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "1r"
        },
        {
            "listing_id": 14,
            "organisation_id": null,
            "created_by": 9,
            "title": "elit ac nulla sed vel enim sit amet nunc",
            "category": "Business Development",
            "about": "Adaptive scalable array",
            "tagline": "monetize intuitive applications",
            "mission": "benchmark leading-edge functionalities",
            "listing_url": "http://discovery.com/vitae.xml",
            "pic1": "https://robohash.org/etametmolestiae.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/molestiaebeataeperspiciatis.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/estconsecteturnam.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-04-14T01:14:51.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "wQ"
        },
        {
            "listing_id": 15,
            "organisation_id": null,
            "created_by": 16,
            "title": "odio cras mi",
            "category": "Business Development",
            "about": "Persevering methodical monitoring",
            "tagline": "seize frictionless communities",
            "mission": "deliver dynamic deliverables",
            "listing_url": "https://nasa.gov/ligula.aspx",
            "pic1": "https://robohash.org/debitisofficiiset.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/quaeratnonut.jpg?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-02-13T14:34:20.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "zM"
        },
        {
            "listing_id": 16,
            "organisation_id": null,
            "created_by": 3,
            "title": "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
            "category": "Training",
            "about": "Self-enabling incremental solution",
            "tagline": "evolve proactive e-services",
            "mission": "generate open-source markets",
            "listing_url": "http://deviantart.com/enim/sit/amet/nunc/viverra/dapibus.jpg",
            "pic1": "https://robohash.org/uteosarchitecto.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/quoliberonostrum.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/officiadictaut.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-09-22T16:42:03.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "9x"
        },
        {
            "listing_id": 17,
            "organisation_id": null,
            "created_by": 9,
            "title": "velit nec nisi vulputate nonummy maecenas",
            "category": "Research and Development",
            "about": "Balanced local local area network",
            "tagline": "productize visionary mindshare",
            "mission": "productize enterprise metrics",
            "listing_url": "http://chicagotribune.com/metus/vitae/ipsum/aliquam/non/mauris/morbi.jpg",
            "pic1": "https://robohash.org/liberovelitfacilis.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/quamdelenitinesciunt.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/istererumautem.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-02-06T16:53:02.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "qw"
        },
        {
            "listing_id": 18,
            "organisation_id": null,
            "created_by": 6,
            "title": "lacinia eget tincidunt eget",
            "category": "Training",
            "about": "Reactive next generation collaboration",
            "tagline": "revolutionize next-generation ROI",
            "mission": "optimize cross-platform bandwidth",
            "listing_url": "http://china.com.cn/aliquet/maecenas/leo/odio/condimentum/id.html",
            "pic1": "https://robohash.org/impeditfaceredoloribus.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/sitrecusandaepossimus.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/indolorvero.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-02-19T16:36:37.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "3M"
        },
        {
            "listing_id": 19,
            "organisation_id": null,
            "created_by": 18,
            "title": "phasellus id sapien in sapien iaculis congue",
            "category": "Marketing",
            "about": "Re-contextualized value-added toolset",
            "tagline": "reinvent virtual mindshare",
            "mission": "morph front-end channels",
            "listing_url": "https://bbb.org/vestibulum/ac/est/lacinia/nisi/venenatis.html",
            "pic1": "https://robohash.org/sitessenumquam.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/asperioreseumblanditiis.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/autsimiliquenon.jpg?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-07-30T20:45:41.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "Yz"
        },
        {
            "listing_id": 20,
            "organisation_id": null,
            "created_by": 4,
            "title": "diam vitae quam suspendisse potenti",
            "category": "Services",
            "about": "Synergized dynamic analyzer",
            "tagline": "integrate clicks-and-mortar ROI",
            "mission": "revolutionize plug-and-play action-items",
            "listing_url": "https://nyu.edu/cras/in/purus/eu/magna.json",
            "pic1": "https://robohash.org/ducimusiustocumque.jpg?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/abautemvoluptatem.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-09-25T22:20:51.000Z",
            "end_date": null,
            "created_on": "2020-08-12T13:56:06.402Z",
            "deleted_on": null,
            "hashId": "jy"
        }
    ]
}
```


***Status Code:*** 200

<br>



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


##### I. Example Request: Login User (200 OK)


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



##### I. Example Response: Login User (200 OK)
```js
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoicm9uQGdtYWlsLmNvbSIsImNyZWF0ZWRfb24iOiIyMDIwLTA3LTA4VDE3OjQxOjU2LjQzMFoiLCJpYXQiOjE1OTQyMzEyNzgsImV4cCI6MTU5NjgyMzI3OH0.hkr1-C6JWwCIthd2ZUu_W3bxpIQHdCvn8LTnXNWM098"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Login User (400 Bad Request - Invalid login credentials)


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



##### II. Example Response: Login User (400 Bad Request - Invalid login credentials)
```js
{
    "success": false,
    "error": "Invalid login credentials"
}
```


***Status Code:*** 401

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
URL: {{URL}}/api/auth/reset-password/9cd4383ffdde29ce4850d7752d8fce0e384cca71
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
URL: {{URL}}/api/faqs/1
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



### 3. Get All Faqs


Get all FAQs. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/faqs
```



***More example Requests/Responses:***


##### I. Example Request: Get All Faqs (200 OK)



##### I. Example Response: Get All Faqs (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "faq_id": 1,
            "listing_id": 8,
            "question": "consequat nulla nisl nunc nisl duis bibendum felis",
            "answer": "24/7"
        },
        {
            "faq_id": 2,
            "listing_id": 5,
            "question": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
            "answer": "Graphic Interface"
        },
        {
            "faq_id": 3,
            "listing_id": 15,
            "question": "mauris vulputate elementum nullam varius nulla facilisi cras",
            "answer": "conglomeration"
        },
        {
            "faq_id": 4,
            "listing_id": 5,
            "question": "felis donec semper sapien a libero nam dui proin leo odio porttitor",
            "answer": "Visionary"
        },
        {
            "faq_id": 5,
            "listing_id": 11,
            "question": "congue risus semper porta volutpat quam",
            "answer": "logistical"
        },
        {
            "faq_id": 6,
            "listing_id": 6,
            "question": "vel est donec odio justo sollicitudin ut suscipit a",
            "answer": "neutral"
        },
        {
            "faq_id": 7,
            "listing_id": 19,
            "question": "odio in hac habitasse platea dictumst maecenas ut massa quis augue",
            "answer": "analyzer"
        },
        {
            "faq_id": 8,
            "listing_id": 15,
            "question": "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
            "answer": "3rd generation"
        },
        {
            "faq_id": 9,
            "listing_id": 19,
            "question": "cras mi pede malesuada in imperdiet et commodo vulputate justo",
            "answer": "internet solution"
        },
        {
            "faq_id": 10,
            "listing_id": 10,
            "question": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
            "answer": "superstructure"
        },
        {
            "faq_id": 11,
            "listing_id": 15,
            "question": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
            "answer": "Cloned"
        },
        {
            "faq_id": 12,
            "listing_id": 19,
            "question": "turpis sed ante vivamus tortor duis mattis",
            "answer": "Managed"
        },
        {
            "faq_id": 13,
            "listing_id": 12,
            "question": "id sapien in sapien iaculis congue",
            "answer": "Switchable"
        },
        {
            "faq_id": 14,
            "listing_id": 14,
            "question": "ac enim in tempor turpis nec euismod scelerisque quam turpis",
            "answer": "Fundamental"
        },
        {
            "faq_id": 15,
            "listing_id": 6,
            "question": "cras non velit nec nisi vulputate nonummy",
            "answer": "solution"
        },
        {
            "faq_id": 16,
            "listing_id": 10,
            "question": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
            "answer": "Fully-configurable"
        },
        {
            "faq_id": 17,
            "listing_id": 18,
            "question": "sagittis sapien cum sociis natoque penatibus et magnis dis",
            "answer": "workforce"
        },
        {
            "faq_id": 18,
            "listing_id": 11,
            "question": "nunc viverra dapibus nulla suscipit ligula in lacus",
            "answer": "framework"
        },
        {
            "faq_id": 19,
            "listing_id": 16,
            "question": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus",
            "answer": "stable"
        },
        {
            "faq_id": 20,
            "listing_id": 18,
            "question": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
            "answer": "User-friendly"
        },
        {
            "faq_id": 21,
            "listing_id": 2,
            "question": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
            "answer": "client-server"
        },
        {
            "faq_id": 22,
            "listing_id": 1,
            "question": "amet justo morbi ut odio cras mi pede malesuada in",
            "answer": "Phased"
        },
        {
            "faq_id": 23,
            "listing_id": 7,
            "question": "diam erat fermentum justo nec condimentum neque sapien placerat ante",
            "answer": "executive"
        },
        {
            "faq_id": 24,
            "listing_id": 1,
            "question": "ullamcorper augue a suscipit nulla elit ac nulla sed",
            "answer": "Exclusive"
        },
        {
            "faq_id": 25,
            "listing_id": 19,
            "question": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
            "answer": "data-warehouse"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Faq


Get single FAQ. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/faqs/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Faq (200 OK)



##### I. Example Response: Get Single Faq (200 OK)
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



##### II. Example Request: Get Single Faq (404 Not Found - Non-existent FAQ)



##### II. Example Response: Get Single Faq (404 Not Found - Non-existent FAQ)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Faq


Update FAQ identified by faq id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.
question - Non-empty string. 
answer


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/faqs/1
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



## Featured Listings
Featured Listings CRUD functionality.



### 1. Create Featured Listing


Create featured listing. Permission: Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/featured-listings
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Featured Listing (201 Created)


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



##### I. Example Response: Create Featured Listing (201 Created)
```js
{
    "success": true,
    "data": {
        "featured_listing_id": 5,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae"
    }
}
```


***Status Code:*** 201

<br>



##### II. Example Request: Create Featured Listing (403 Forbidden - Non-admin user)


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



##### II. Example Response: Create Featured Listing (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



### 2. Delete Featured Listing


Delete featured listing identified by featured listing id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/featured-listings/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Featured Listing (200 OK)



##### I. Example Response: Delete Featured Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "featured_listing_id": 5,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Delete Featured Listing (403 Forbidden - Non-admin user)



##### II. Example Response: Delete Featured Listing (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



### 3. Get All Featured Listings


Get all featured listings. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/featured-listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All Featured Listings (200 OK)



##### I. Example Response: Get All Featured Listings (200 OK)
```js
{
    "success": true,
    "count": 2,
    "pagination": {},
    "data": [
        {
            "featured_listing_id": 2,
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436"
        },
        {
            "featured_listing_id": 3,
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Featured Listings


Get single featured listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/featured-listings/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Featured Listings (200 OK)



##### I. Example Response: Get Single Featured Listings (200 OK)
```js
{
    "success": true,
    "data": {
        "featured_listing_id": 2,
        "listing_id": "c975a572-452d-4824-8ed5-500b50488436"
    }
}
```


***Status Code:*** 200

<br>



## File Upload
File upload endpoints.



### 1. Multiple file upload


Multiple file upload, response data object shows the upload information made available by the library (multer). Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
files - Collection of up to 3 valid files.


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/api/file-upload/multi
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| files |  | Collection of 5 JPG files |



***More example Requests/Responses:***


##### I. Example Request: Multiple file upload (200 OK)



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| files |  | Collection of 3 JPG files |



##### I. Example Response: Multiple file upload (200 OK)
```js
{
    "success": true,
    "data": [
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1597856638482.jpg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1597856638492.jpg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1597856638523.jpg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1597856638531.jpg",
        "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1597856638537.jpg"
    ]
}
```


***Status Code:*** 200

<br>



### 2. Single file upload


Single file upload. Response data object shows the upload information made available by the library (multer). Permission: Public.

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
| file |  | Test jpg file |



***More example Requests/Responses:***


##### I. Example Request: Single file upload (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  | Test jpg file |



##### I. Example Response: Single file upload (200 OK)
```js
{
    "success": true,
    "data": {
        "fieldname": "file",
        "originalname": "DSC00424.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "size": 2848607,
        "bucket": "kampong-dev",
        "key": "DSC00424-1596295032490.jpg",
        "acl": "public-read",
        "contentType": "application/octet-stream",
        "contentDisposition": null,
        "storageClass": "STANDARD",
        "serverSideEncryption": null,
        "metadata": {
            "fieldName": "file"
        },
        "location": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/DSC00424-1596295032490.jpg",
        "etag": "\"02d8c9a8b87fb34f2086e7e2886e0390\""
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
URL: {{URL}}/api/hashtags/1
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



### 3. Get All Hashtags


Get all hashtags. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/milestones
```



***More example Requests/Responses:***


##### I. Example Request: Get All Hashtags (200 OK)



##### I. Example Response: Get All Hashtags (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "hashtag_id": 1,
            "listing_id": 4,
            "tag": "#broker0"
        },
        {
            "hashtag_id": 2,
            "listing_id": 13,
            "tag": "#sandyfirth1"
        },
        {
            "hashtag_id": 3,
            "listing_id": 12,
            "tag": "#tudhope2"
        },
        {
            "hashtag_id": 4,
            "listing_id": 17,
            "tag": "#slatford3"
        },
        {
            "hashtag_id": 5,
            "listing_id": 20,
            "tag": "#clissell4"
        },
        {
            "hashtag_id": 6,
            "listing_id": 20,
            "tag": "#bateup5"
        },
        {
            "hashtag_id": 7,
            "listing_id": 10,
            "tag": "#smallcomb6"
        },
        {
            "hashtag_id": 8,
            "listing_id": 1,
            "tag": "#wyrall7"
        },
        {
            "hashtag_id": 9,
            "listing_id": 12,
            "tag": "#boteman8"
        },
        {
            "hashtag_id": 10,
            "listing_id": 12,
            "tag": "#joontjes9"
        },
        {
            "hashtag_id": 11,
            "listing_id": 12,
            "tag": "#baudina"
        },
        {
            "hashtag_id": 12,
            "listing_id": 8,
            "tag": "#turfittb"
        },
        {
            "hashtag_id": 13,
            "listing_id": 4,
            "tag": "#chastelc"
        },
        {
            "hashtag_id": 14,
            "listing_id": 5,
            "tag": "#mathand"
        },
        {
            "hashtag_id": 15,
            "listing_id": 17,
            "tag": "#vasee"
        },
        {
            "hashtag_id": 16,
            "listing_id": 8,
            "tag": "#criplef"
        },
        {
            "hashtag_id": 17,
            "listing_id": 13,
            "tag": "#mullesg"
        },
        {
            "hashtag_id": 18,
            "listing_id": 20,
            "tag": "#shegogh"
        },
        {
            "hashtag_id": 19,
            "listing_id": 17,
            "tag": "#switzeri"
        },
        {
            "hashtag_id": 20,
            "listing_id": 2,
            "tag": "#brittinj"
        },
        {
            "hashtag_id": 21,
            "listing_id": 13,
            "tag": "#dallmank"
        },
        {
            "hashtag_id": 22,
            "listing_id": 7,
            "tag": "#pashl"
        },
        {
            "hashtag_id": 23,
            "listing_id": 11,
            "tag": "#apthorpem"
        },
        {
            "hashtag_id": 24,
            "listing_id": 9,
            "tag": "#pien"
        },
        {
            "hashtag_id": 25,
            "listing_id": 6,
            "tag": "#raybouldo"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Hashtag


Get single hashtag. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/hashtags/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Hashtag (200 OK)



##### I. Example Response: Get Single Hashtag (200 OK)
```js
{
    "success": true,
    "data": {
        "hashtag_id": 1,
        "listing_id": 4,
        "tag": "#broker0"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Hashtag (404 Not Found - Non-existent hashtag id)



##### II. Example Response: Get Single Hashtag (404 Not Found - Non-existent hashtag id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Hashtag


Update hashtag identified by hashtag id. Permission: Owner/Admin.

Field rules:
At least one field must be updated.
tag - String starting with '#' followed by 2-20 alphanumeric and '-'/'_' characters.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/hashtags/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tag": "#hello"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Hashtag (404 Not Found - Non-existent hashtag id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tag": "#hello"
}
```



##### I. Example Response: Update Hashtag (404 Not Found - Non-existent hashtag id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Update Hashtag (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tag": "#hello"
}
```



##### II. Example Response: Update Hashtag (200 OK)
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



### 2. Deactivate Job


Deactivate (soft delete) job identified by job id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/jobs/1/deactivate
```



***More example Requests/Responses:***


##### I. Example Request: Deactivate Job (403 Forbidden - Non-admin and non-listing owner)



##### I. Example Response: Deactivate Job (403 Forbidden - Non-admin and non-listing owner)
```js
{
    "success": false,
    "error": "Not authorised to update jobs in this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Deactivate Job (200 OK)



##### II. Example Response: Deactivate Job (200 OK)
```js
{
    "success": true,
    "data": {
        "job_id": 1,
        "listing_id": 8,
        "job_title": "Account Representative I",
        "job_description": "Polarised next generation alliance",
        "deleted_on": "2020-12-08T14:08:21.000Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. Delete Job


Delete job identified by job id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/jobs/1
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



### 4. Get All Jobs


Get all jobs. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/jobs
```



***More example Requests/Responses:***


##### I. Example Request: Get All Jobs (200 OK)



##### I. Example Response: Get All Jobs (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "job_id": 1,
            "listing_id": 8,
            "job_title": "Account Representative I",
            "job_description": "Polarised next generation alliance"
        },
        {
            "job_id": 2,
            "listing_id": 4,
            "job_title": "Project Manager",
            "job_description": "Ameliorated 24 hour structure"
        },
        {
            "job_id": 3,
            "listing_id": 16,
            "job_title": "Teacher",
            "job_description": "Enhanced 6th generation portal"
        },
        {
            "job_id": 4,
            "listing_id": 7,
            "job_title": "VP Accounting",
            "job_description": "Multi-channelled local pricing structure"
        },
        {
            "job_id": 5,
            "listing_id": 12,
            "job_title": "Office Assistant IV",
            "job_description": "Vision-oriented explicit moratorium"
        },
        {
            "job_id": 6,
            "listing_id": 13,
            "job_title": "Senior Editor",
            "job_description": "Devolved high-level protocol"
        },
        {
            "job_id": 7,
            "listing_id": 20,
            "job_title": "Civil Engineer",
            "job_description": "Front-line optimal algorithm"
        },
        {
            "job_id": 8,
            "listing_id": 13,
            "job_title": "Senior Quality Engineer",
            "job_description": "Exclusive incremental toolset"
        },
        {
            "job_id": 9,
            "listing_id": 15,
            "job_title": "Programmer Analyst I",
            "job_description": "Polarised bifurcated open architecture"
        },
        {
            "job_id": 10,
            "listing_id": 5,
            "job_title": "Paralegal",
            "job_description": "Networked intangible system engine"
        },
        {
            "job_id": 11,
            "listing_id": 5,
            "job_title": "Project Manager",
            "job_description": "Profound optimizing matrix"
        },
        {
            "job_id": 12,
            "listing_id": 15,
            "job_title": "Tax Accountant",
            "job_description": "Realigned grlisting_id-enabled forecast"
        },
        {
            "job_id": 13,
            "listing_id": 12,
            "job_title": "Software Test Engineer II",
            "job_description": "Right-sized 3rd generation throughput"
        },
        {
            "job_id": 14,
            "listing_id": 11,
            "job_title": "Teacher",
            "job_description": "Universal executive Graphical User Interface"
        },
        {
            "job_id": 15,
            "listing_id": 17,
            "job_title": "Community Outreach Specialist",
            "job_description": "Monitored asynchronous initiative"
        },
        {
            "job_id": 16,
            "listing_id": 17,
            "job_title": "Compensation Analyst",
            "job_description": "Universal 24 hour protocol"
        },
        {
            "job_id": 17,
            "listing_id": 5,
            "job_title": "VP Marketing",
            "job_description": "Inverse user-facing ability"
        },
        {
            "job_id": 18,
            "listing_id": 20,
            "job_title": "Teacher",
            "job_description": "Phased bottom-line encryption"
        },
        {
            "job_id": 19,
            "listing_id": 20,
            "job_title": "Chemical Engineer",
            "job_description": "Synergistic stable encryption"
        },
        {
            "job_id": 20,
            "listing_id": 13,
            "job_title": "Web Developer IV",
            "job_description": "Focused encompassing archive"
        },
        {
            "job_id": 21,
            "listing_id": 16,
            "job_title": "Assistant Professor",
            "job_description": "Public-key heuristic encryption"
        },
        {
            "job_id": 22,
            "listing_id": 17,
            "job_title": "Desktop Support Technician",
            "job_description": "Upgradable upward-trending matrices"
        },
        {
            "job_id": 23,
            "listing_id": 6,
            "job_title": "Account Representative IV",
            "job_description": "Front-line analyzing portal"
        },
        {
            "job_id": 24,
            "listing_id": 2,
            "job_title": "Help Desk Technician",
            "job_description": "Optional clear-thinking groupware"
        },
        {
            "job_id": 25,
            "listing_id": 9,
            "job_title": "Technical Writer",
            "job_description": "Phased zero tolerance functionalities"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 5. Get Single Job


Get single job. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/jobs/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Job (200 OK)



##### I. Example Response: Get Single Job (200 OK)
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



### 6. Update Job


Update job identified by job id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.
job_title - Non-empty string.
job_description


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/jobs/1
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



### 1. Get All Likes


Get all Likes. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/likes
```



***More example Requests/Responses:***


##### I. Example Request: Get All Likes (200 OK)



##### I. Example Response: Get All Likes (200 OK)
```js
{
    "success": true,
    "count": 1,
    "pagination": {},
    "data": [
        {
            "like_id": 1,
            "user_id": 1,
            "listing_id": 2
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get Single Like


Get single Like identified by like_id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/likes/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Like (404 Not Found - Non-existent like id)



##### I. Example Response: Get Single Like (404 Not Found - Non-existent like id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get Single Like (200 OK)



##### II. Example Response: Get Single Like (200 OK)
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



### 3. Like Listing


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



### 4. Unlike Listing


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

Field rules:
At least one field must be updated.
comment - Non-empty.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/listing-comments/1/deactivate
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
URL: {{URL}}/api/listing-comments/1
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



### 5. Get All Listing Comments


Get all listing comments. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-comments
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Comments (200 OK)



##### I. Example Response: Get All Listing Comments (200 OK)
```js
{
    "success": true,
    "count": 16,
    "pagination": {},
    "data": [
        {
            "listing_comment_id": 10,
            "listing_id": 5,
            "user_id": 9,
            "comment": "deliver frictionless infrastructures",
            "reply_to_id": 2,
            "created_on": "2019-10-29T16:32:01.000Z",
            "updated_on": "2020-04-27T13:18:40.000Z",
            "deleted_on": null,
            "nickname": "Brenda",
            "profile_picture": "https://robohash.org/quaerataratione.bmp?size=500x500&set=set1",
            "hashId": "yb"
        },
        {
            "listing_comment_id": 5,
            "listing_id": 16,
            "user_id": 19,
            "comment": "mesh 24/365 supply-chains",
            "reply_to_id": null,
            "created_on": "2020-02-20T20:58:36.000Z",
            "updated_on": "2020-02-29T23:21:38.000Z",
            "deleted_on": null,
            "nickname": "Wylie",
            "profile_picture": "https://robohash.org/deseruntquiaanimi.bmp?size=500x500&set=set1",
            "hashId": "Wp"
        },
        {
            "listing_comment_id": 13,
            "listing_id": 4,
            "user_id": 27,
            "comment": "orchestrate sexy ROI",
            "reply_to_id": null,
            "created_on": "2020-04-01T21:24:48.000Z",
            "updated_on": "2019-12-27T08:54:38.000Z",
            "deleted_on": null,
            "nickname": "Lyndsay",
            "profile_picture": "https://robohash.org/solutaquasiquae.jpg?size=500x500&set=set1",
            "hashId": "1r"
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
            "profile_picture": "https://robohash.org/etharumet.png?size=500x500&set=set1",
            "hashId": "7B"
        },
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
            "profile_picture": "https://robohash.org/ullamundevoluptatem.jpg?size=500x500&set=set1",
            "hashId": "GB"
        },
        {
            "listing_comment_id": 1,
            "listing_id": 18,
            "user_id": 51,
            "comment": "strategize 24/365 users",
            "reply_to_id": null,
            "created_on": "2020-03-04T02:03:23.000Z",
            "updated_on": "2020-08-30T12:09:10.000Z",
            "deleted_on": null,
            "nickname": "Leese",
            "profile_picture": "https://robohash.org/maximeaccusamusminima.bmp?size=500x500&set=set1",
            "hashId": "vn"
        },
        {
            "listing_comment_id": 7,
            "listing_id": 3,
            "user_id": 58,
            "comment": "incubate leading-edge partnerships",
            "reply_to_id": null,
            "created_on": "2020-08-20T15:56:14.000Z",
            "updated_on": "2019-10-08T09:00:24.000Z",
            "deleted_on": null,
            "nickname": "Freddie",
            "profile_picture": "https://robohash.org/errorillosunt.png?size=500x500&set=set1",
            "hashId": "2V"
        },
        {
            "listing_comment_id": 4,
            "listing_id": 19,
            "user_id": 63,
            "comment": "benchmark web-enabled experiences",
            "reply_to_id": null,
            "created_on": "2019-10-18T06:46:56.000Z",
            "updated_on": "2020-07-17T13:51:32.000Z",
            "deleted_on": null,
            "nickname": "Corny",
            "profile_picture": "https://robohash.org/autemmolestiasnulla.jpg?size=500x500&set=set1",
            "hashId": "6W"
        },
        {
            "listing_comment_id": 6,
            "listing_id": 6,
            "user_id": 71,
            "comment": "scale robust platforms",
            "reply_to_id": 4,
            "created_on": "2020-01-23T06:20:13.000Z",
            "updated_on": "2020-06-23T06:17:43.000Z",
            "deleted_on": null,
            "nickname": "Skye",
            "profile_picture": "https://robohash.org/repellendusvoluptatesvoluptatem.jpg?size=500x500&set=set1",
            "hashId": "Qp"
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
            "profile_picture": "https://robohash.org/voluptatibusrerumdolorem.png?size=500x500&set=set1",
            "hashId": "zM"
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
            "profile_picture": "https://robohash.org/nostrumofficiisipsam.png?size=500x500&set=set1",
            "hashId": "mn"
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
            "profile_picture": "https://robohash.org/commodimagnitempora.png?size=500x500&set=set1",
            "hashId": "9x"
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
            "profile_picture": "https://robohash.org/praesentiumanimiquae.jpg?size=500x500&set=set1",
            "hashId": "g7"
        },
        {
            "listing_comment_id": 14,
            "listing_id": 13,
            "user_id": 88,
            "comment": "brand end-to-end web services",
            "reply_to_id": null,
            "created_on": "2020-05-22T17:54:34.000Z",
            "updated_on": "2020-06-20T04:56:02.000Z",
            "deleted_on": null,
            "nickname": "Magdaia",
            "profile_picture": null,
            "hashId": "wQ"
        },
        {
            "listing_comment_id": 2,
            "listing_id": 4,
            "user_id": 90,
            "comment": "visualize dot-com solutions",
            "reply_to_id": null,
            "created_on": "2020-02-25T09:57:48.000Z",
            "updated_on": "2020-07-28T13:38:30.000Z",
            "deleted_on": null,
            "nickname": "Maynard",
            "profile_picture": "https://robohash.org/voluptatemautea.bmp?size=500x500&set=set1",
            "hashId": "e3"
        },
        {
            "listing_comment_id": 9,
            "listing_id": 5,
            "user_id": 100,
            "comment": "whiteboard best-of-breed deliverables",
            "reply_to_id": null,
            "created_on": "2020-03-29T09:51:13.000Z",
            "updated_on": "2019-11-08T17:45:40.000Z",
            "deleted_on": null,
            "nickname": "Michell",
            "profile_picture": "https://robohash.org/autautid.png?size=500x500&set=set1",
            "hashId": "Zp"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 6. Get Single Listing Comment


Get single listing comment. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-comments/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing Comment (200 OK)



##### I. Example Response: Get Single Listing Comment (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_comment_id": 1,
        "listing_id": 18,
        "user_id": 51,
        "comment": "strategize 24/365 users",
        "reply_to_id": null,
        "created_on": "2020-03-04T02:03:23.000Z",
        "updated_on": "2020-08-30T12:09:10.000Z",
        "deleted_on": null,
        "nickname": "Leese",
        "profile_picture": "https://robohash.org/maximeaccusamusminima.bmp?size=500x500&set=set1"
    }
}
```


***Status Code:*** 200

<br>



### 7. Update Listing Comment


Update listing comment identified by listing comment id. Permission: Admin/Owner/Private.

Field rules:
At least one field must be updated.
comment - Non-empty.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listing-comments/1
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



### 3. Get All Listing Locations


Get all listing locations. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-locations
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Locations (200 OK)



##### I. Example Response: Get All Listing Locations (200 OK)
```js
{
    "success": true,
    "count": 8,
    "pagination": {},
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
        },
        {
            "listing_location_id": 4,
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "location_id": 3,
            "location": "03 Queenstown, Tiong Bahru"
        },
        {
            "listing_location_id": 5,
            "listing_id": "d95a6c2e-3c33-447c-be0c-be399247dd3f",
            "location_id": 3,
            "location": "03 Queenstown, Tiong Bahru"
        },
        {
            "listing_location_id": 6,
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "location_id": 3,
            "location": "03 Queenstown, Tiong Bahru"
        },
        {
            "listing_location_id": 7,
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "location_id": 4,
            "location": "04 Telok Blangah, Harbourfront"
        },
        {
            "listing_location_id": 8,
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "location_id": 4,
            "location": "04 Telok Blangah, Harbourfront"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Listing Location


Get single listing location by listing location id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-locations/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing Location (200 OK)



##### I. Example Response: Get Single Listing Location (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_location_id": 1,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "location_id": 1,
        "location": "01 Raffles Place, Cecil, Marina, Peoples Park"
    }
}
```


***Status Code:*** 200

<br>



## Listing Skills
Listing Skills CRUD functionality.



### 1. Create Custom Listing Skill


Create custom listing skill for a specified listing id and add skill to skills table (if it skill does not exist). Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
skill - Non-empty string with alphabets and spaces only.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listing-skills/add-skill
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"skill": "Junior Data Analyst",
    "skill_description": "Analyse complex data and present findings to key stakeholders"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing Skill (403 Forbidden - Non-listing owner cannot create listing skill)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"skill_id": 5
}
```



##### I. Example Response: Create Listing Skill (403 Forbidden - Non-listing owner cannot create listing skill)
```js
{
    "success": false,
    "error": "Not authorised to create listing skills for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create Listing Skill (400 Bad Request - Non-existent skill id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"skill_id": 200
}
```



##### II. Example Response: Create Listing Skill (400 Bad Request - Non-existent skill id)
```js
{
    "success": false,
    "error": "Foreign key value does not exist: Key (skill_id)=(200) is not present in table \"skills\"."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create Custom Listing Skill (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"skill": "Junior Data Analyst",
    "skill_description": "Analyse complex data and present findings to key stakeholders"
}
```



##### III. Example Response: Create Custom Listing Skill (201 Created)
```js
{
    "success": true,
    "data": {
        "listing_skill_id": 11,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "skill_id": 43
    }
}
```


***Status Code:*** 201

<br>



### 2. Create Listing Skill


Create listing skill. Permission: Owner/Admin.

Field rules:
All fields required unless otherwise stated.
listing_id - Valid integer, existing listing id.
skill_id - Valid integer, existing skill id.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/listing-skills
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"skill_id": 6
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Listing Skill (403 Forbidden - Non-listing owner cannot create listing skill)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"skill_id": 5
}
```



##### I. Example Response: Create Listing Skill (403 Forbidden - Non-listing owner cannot create listing skill)
```js
{
    "success": false,
    "error": "Not authorised to create listing skills for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create Listing Skill (400 Bad Request - Non-existent skill id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": 1,
	"skill_id": 200
}
```



##### II. Example Response: Create Listing Skill (400 Bad Request - Non-existent skill id)
```js
{
    "success": false,
    "error": "Foreign key value does not exist: Key (skill_id)=(200) is not present in table \"skills\"."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create Listing Skill (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"skill_id": 6
}
```



##### III. Example Response: Create Listing Skill (201 Created)
```js
{
    "success": true,
    "data": {
        "listing_skill_id": 24,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "skill_id": 6
    }
}
```


***Status Code:*** 201

<br>



### 3. Delete Listing Skill


Delete listing skill identified by listing skill id. Permission: Owner/Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/listing-skills/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Listing Skill (403 Forbidden - Non-listing owner cannot delete listing skill)



##### I. Example Response: Delete Listing Skill (403 Forbidden - Non-listing owner cannot delete listing skill)
```js
{
    "success": false,
    "error": "Not authorised to create listing skills for this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Listing Skill (404 Not Found)



##### II. Example Response: Delete Listing Skill (404 Not Found)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Delete Listing Skill (200 OK)



##### III. Example Response: Delete Listing Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_skill_id": 24,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "skill_id": 6
    }
}
```


***Status Code:*** 200

<br>



### 4. Get All Listing Skills


Get all listing skills. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-skills
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Skills (200 OK)



##### I. Example Response: Get All Listing Skills (200 OK)
```js
{
    "success": true,
    "count": 99,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "listing_skill_id": 94,
            "listing_id": 12,
            "skill_id": 1,
            "skill": "cDNA",
            "hashId": "Qxp"
        },
        {
            "listing_skill_id": 48,
            "listing_id": 2,
            "skill_id": 1,
            "skill": "cDNA",
            "hashId": "6pW"
        },
        {
            "listing_skill_id": 15,
            "listing_id": 4,
            "skill_id": 2,
            "skill": "Typesetting",
            "hashId": "zM"
        },
        {
            "listing_skill_id": 91,
            "listing_id": 15,
            "skill_id": 3,
            "skill": "Biochemistry",
            "hashId": "GwB"
        },
        {
            "listing_skill_id": 36,
            "listing_id": 5,
            "skill_id": 3,
            "skill": "Biochemistry",
            "hashId": "ow"
        },
        {
            "listing_skill_id": 73,
            "listing_id": 14,
            "skill_id": 4,
            "skill": "WiFi",
            "hashId": "noy"
        },
        {
            "listing_skill_id": 45,
            "listing_id": 2,
            "skill_id": 4,
            "skill": "WiFi",
            "hashId": "vnn"
        },
        {
            "listing_skill_id": 99,
            "listing_id": 1,
            "skill_id": 5,
            "skill": "Siebel",
            "hashId": "g47"
        },
        {
            "listing_skill_id": 32,
            "listing_id": 5,
            "skill_id": 5,
            "skill": "Siebel",
            "hashId": "pe"
        },
        {
            "listing_skill_id": 84,
            "listing_id": 20,
            "skill_id": 6,
            "skill": "JTAPI",
            "hashId": "Lan"
        },
        {
            "listing_skill_id": 41,
            "listing_id": 3,
            "skill_id": 6,
            "skill": "JTAPI",
            "hashId": "Ma"
        },
        {
            "listing_skill_id": 26,
            "listing_id": 5,
            "skill_id": 6,
            "skill": "JTAPI",
            "hashId": "KY"
        },
        {
            "listing_skill_id": 95,
            "listing_id": 15,
            "skill_id": 7,
            "skill": "Oilfield",
            "hashId": "2pV"
        },
        {
            "listing_skill_id": 85,
            "listing_id": 19,
            "skill_id": 7,
            "skill": "Oilfield",
            "hashId": "MYa"
        },
        {
            "listing_skill_id": 66,
            "listing_id": 14,
            "skill_id": 7,
            "skill": "Oilfield",
            "hashId": "J5m"
        },
        {
            "listing_skill_id": 3,
            "listing_id": 6,
            "skill_id": 7,
            "skill": "Oilfield",
            "hashId": "GB"
        },
        {
            "listing_skill_id": 13,
            "listing_id": 9,
            "skill_id": 9,
            "skill": "Aerospace Manufacturing",
            "hashId": "1r"
        },
        {
            "listing_skill_id": 6,
            "listing_id": 1,
            "skill_id": 9,
            "skill": "Aerospace Manufacturing",
            "hashId": "Qp"
        },
        {
            "listing_skill_id": 88,
            "listing_id": 11,
            "skill_id": 10,
            "skill": "Mortgage Banking",
            "hashId": "dkg"
        },
        {
            "listing_skill_id": 69,
            "listing_id": 14,
            "skill_id": 10,
            "skill": "Mortgage Banking",
            "hashId": "Da9"
        },
        {
            "listing_skill_id": 55,
            "listing_id": 15,
            "skill_id": 10,
            "skill": "Mortgage Banking",
            "hashId": "gz7"
        },
        {
            "listing_skill_id": 60,
            "listing_id": 18,
            "skill_id": 11,
            "skill": "Swim Instruction",
            "hashId": "9rx"
        },
        {
            "listing_skill_id": 44,
            "listing_id": 5,
            "skill_id": 13,
            "skill": "Game Design",
            "hashId": "d0g"
        },
        {
            "listing_skill_id": 25,
            "listing_id": 3,
            "skill_id": 13,
            "skill": "Game Design",
            "hashId": "D9"
        },
        {
            "listing_skill_id": 19,
            "listing_id": 8,
            "skill_id": 13,
            "skill": "Game Design",
            "hashId": "Yz"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 5. Get Single Listing Skill


Get single listing skill by listing skill id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-skills/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing Skill (200 OK)



##### I. Example Response: Get Single Listing Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 25,
        "listing_skill_id": 1,
        "listing_id": 8,
        "skill": "Fund Of Funds"
    }
}
```


***Status Code:*** 200

<br>



## Listing Stories
Listing stories CRUD functionality.



### 1. Get All Listing Stories


Get all listing stories. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/stories
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Stories (200 OK)



##### I. Example Response: Get All Listing Stories (200 OK)
```js
{
    "success": true,
    "count": 20,
    "pagination": {},
    "data": [
        {
            "listing_id": 1,
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null
        },
        {
            "listing_id": 2,
            "overview": "Up-sized hybrid moratorium",
            "problem": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "solution": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "outcome": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse"
        },
        {
            "listing_id": 3,
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null
        },
        {
            "listing_id": 4,
            "overview": "Switchable neutral Graphic Interface",
            "problem": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "solution": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "outcome": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc"
        },
        {
            "listing_id": 5,
            "overview": "Integrated fresh-thinking parallelism",
            "problem": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "solution": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "outcome": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo"
        },
        {
            "listing_id": 6,
            "overview": "Configurable impactful support",
            "problem": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "solution": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "outcome": "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus"
        },
        {
            "listing_id": 7,
            "overview": "Reverse-engineered 3rd generation productivity",
            "problem": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "solution": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "outcome": "montes nascetur ridiculus mus etiam vel augue vestibulum"
        },
        {
            "listing_id": 8,
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null
        },
        {
            "listing_id": 9,
            "overview": "Multi-lateral grid-enabled task-force",
            "problem": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "solution": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
            "outcome": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien"
        },
        {
            "listing_id": 10,
            "overview": "Managed dynamic synergy",
            "problem": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "solution": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
            "outcome": "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit"
        },
        {
            "listing_id": 11,
            "overview": "Persevering national array",
            "problem": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "solution": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "outcome": "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue"
        },
        {
            "listing_id": 12,
            "overview": "Front-line actuating project",
            "problem": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "solution": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
            "outcome": "imperdiet sapien urna pretium nisl ut volutpat sapien"
        },
        {
            "listing_id": 13,
            "overview": "Monitored radical help-desk",
            "problem": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "solution": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
            "outcome": "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus"
        },
        {
            "listing_id": 14,
            "overview": "Streamlined modular architecture",
            "problem": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "solution": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
            "outcome": "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet"
        },
        {
            "listing_id": 15,
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null
        },
        {
            "listing_id": 16,
            "overview": "Cross-platform methodical database",
            "problem": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "solution": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
            "outcome": "libero non mattis pulvinar nulla pede ullamcorper augue a"
        },
        {
            "listing_id": 17,
            "overview": "Synergistic system-worthy productivity",
            "problem": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "solution": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
            "outcome": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
        },
        {
            "listing_id": 18,
            "overview": "Stand-alone systematic open system",
            "problem": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "solution": "Nunc purus. Phasellus in felis.",
            "outcome": "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna"
        },
        {
            "listing_id": 19,
            "overview": "Object-based multi-state model",
            "problem": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "solution": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
            "outcome": "platea dictumst morbi vestibulum velit id pretium iaculis"
        },
        {
            "listing_id": 20,
            "overview": "Inverse real-time throughput",
            "problem": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "solution": "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "outcome": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get Single Listing Story


Get single listing story identified by listing id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/stories
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing Story (404 Not Found - Non-existent listing id)



##### I. Example Response: Get Single Listing Story (404 Not Found - Non-existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### II. Example Request: Get Single Listing Story (200 OK)



##### II. Example Response: Get Single Listing Story (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "overview": null,
        "problem": null,
        "solution": null,
        "outcome": null
    }
}
```


***Status Code:*** 200

<br>



### 3. Update Listing Story


Update listing story identified by listing id. Permission: Admin/Owner.

Field rules:
At least one field must be updated.
overview
problem
solution 
outcome


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/stories
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "overview": "Mental Health for Youth",
    "problem": "There is insufficient knowledge about mental health.",
    "solution": "We aim to champion mental health awareness by launching a campaign to promote mental well-being in schools",
    "outcome": "We hope that schools will implement mental health education into their curriculum, and implement programmes around mental health advocacy."
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Listing Story (400 Bad Request - Invalid fields updated)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "title": "Updated title 1",
    "category": "Updated category",
    "about": "Updated about",
    "tagline": "Updated tagline",
    "mission": "Updated mission",
    "listing_url": "www.updated-test.com",
    "is_published": "true",
    "start_date": "2018-08-15 16:45:43.41585+08",
    "end_date": "2020-01-30 16:45:43.41585+08"
}
```



##### I. Example Response: Update Listing Story (400 Bad Request - Invalid fields updated)
```js
{
    "success": false,
    "error": "At least one field must be updated."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Update Listing Story (404 Not Found - Invalid listing id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "overview": "Mental Health for Youth",
    "problem": "There is insufficient knowledge about mental health.",
    "solution": "We aim to champion mental health awareness by launching a campaign to promote mental well-being in schools",
    "outcome": "We hope that schools will implement mental health education into their curriculum, and implement programmes around mental health advocacy."
}
```



##### II. Example Response: Update Listing Story (404 Not Found - Invalid listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



##### III. Example Request: Update Listing Story (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "overview": "Mental Health for Youth",
    "problem": "There is insufficient knowledge about mental health.",
    "solution": "We aim to champion mental health awareness by launching a campaign to promote mental well-being in schools",
    "outcome": "We hope that schools will implement mental health education into their curriculum, and implement programmes around mental health advocacy."
}
```



##### III. Example Response: Update Listing Story (200 OK)
```js
{
    "success": true,
    "data": {
        "overview": "Mental Health for Youth",
        "problem": "There is insufficient knowledge about mental health.",
        "solution": "We aim to champion mental health awareness by launching a campaign to promote mental well-being in schools",
        "outcome": "We hope that schools will implement mental health education into their curriculum, and implement programmes around mental health advocacy."
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
pic1 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic2 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic3 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic4 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic5 - Valid JPG/PNG filename and extension text found in pics. Optional.
pics - Valid collection of up to 5 JPG/PNG files. Optional.


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/api/listing-updates
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | multipart/form-data | Form Data Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 5 JPG files |
| listing_id | 43824166-bee2-426e-8a08-ca2c4e4120ae |  |
| description | First Update |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |



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



##### II. Example Request: Create Listing Update (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | multipart/form-data | Form Data Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 5 JPG files |
| listing_id | 43824166-bee2-426e-8a08-ca2c4e4120ae |  |
| description | First Update |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |



##### II. Example Response: Create Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 8,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "description": "First Update",
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1597682183704.jpg",
        "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1597682183706.jpg",
        "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1597682183714.jpg",
        "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1597682183726.jpg",
        "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1597682183732.jpg",
        "created_on": "2020-08-17T16:36:24.492Z",
        "updated_on": "2020-08-17T16:36:24.492Z"
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


##### I. Example Request: Delete Listing Update (200 OK)



##### I. Example Response: Delete Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 55,
        "listing_id": 1,
        "description": "First Update",
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1596957253216.jpg",
        "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1596957253217.jpg",
        "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1596957253221.jpg",
        "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1596957253225.jpg",
        "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1596957253235.jpg",
        "created_on": "2020-08-09T07:14:13.598Z",
        "updated_on": "2020-08-09T07:14:13.598Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Delete Listing Update (404 Not Found)



##### II. Example Response: Delete Listing Update (404 Not Found)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 3. Get All Listing Updates


Get all listing updates. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-updates
```



***More example Requests/Responses:***


##### I. Example Request: Get All Listing Updates (200 OK)



##### I. Example Response: Get All Listing Updates (200 OK)
```js
{
    "success": true,
    "count": 50,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "listing_update_id": 1,
            "listing_id": 2,
            "description": "Seamless neutral core",
            "pic1": "https://robohash.org/doloribusfacerevelit.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/quaeratquodminima.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/delenitisitrerum.png?size=500x500&set=set1",
            "pic4": "https://robohash.org/autprovidentqui.bmp?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-01-14T07:06:44.000Z",
            "updated_on": "2020-05-28T08:18:12.000Z",
            "hashId": "vn"
        },
        {
            "listing_update_id": 2,
            "listing_id": 7,
            "description": "Intuitive executive open system",
            "pic1": "https://robohash.org/veritatisvoluptatemminima.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/sedquonam.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/fugiatminimavoluptatem.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/ametconsequaturvoluptatem.png?size=500x500&set=set1",
            "pic5": "https://robohash.org/fugitvoluptatemsoluta.jpg?size=500x500&set=set1",
            "created_on": "2020-02-20T09:55:35.000Z",
            "updated_on": "2020-07-01T20:05:59.000Z",
            "hashId": "e3"
        },
        {
            "listing_update_id": 3,
            "listing_id": 2,
            "description": "Persistent well-modulated complexity",
            "pic1": "https://robohash.org/quaenullacorporis.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/voluptasatqueeum.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/sitrecusandaenostrum.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "created_on": "2019-02-20T14:55:27.000Z",
            "updated_on": "2020-01-05T06:56:03.000Z",
            "hashId": "GB"
        },
        {
            "listing_update_id": 4,
            "listing_id": 4,
            "description": "Pre-emptive impactful matrix",
            "pic1": "https://robohash.org/adipisciquocupiditate.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/dolorumetsunt.bmp?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/etquiavoluptatem.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/dolormollitiaut.png?size=500x500&set=set1",
            "created_on": "2019-09-30T13:40:18.000Z",
            "updated_on": "2019-11-08T13:12:59.000Z",
            "hashId": "6W"
        },
        {
            "listing_update_id": 5,
            "listing_id": 4,
            "description": "Programmable bifurcated protocol",
            "pic1": "https://robohash.org/beataeametmollitia.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/animiquamdolorum.jpg?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/consecteturnamaccusantium.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/isteeasint.jpg?size=500x500&set=set1",
            "created_on": "2019-11-10T20:39:48.000Z",
            "updated_on": "2019-09-26T23:35:34.000Z",
            "hashId": "Wp"
        },
        {
            "listing_update_id": 6,
            "listing_id": 9,
            "description": "Realigned next generation open system",
            "pic1": "https://robohash.org/sedquirerum.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/delenitisuntin.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/etquiearum.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/temporeconsecteturdolorem.png?size=500x500&set=set1",
            "pic5": "https://robohash.org/ipsaeligendierror.png?size=500x500&set=set1",
            "created_on": "2019-12-13T07:30:01.000Z",
            "updated_on": "2020-07-13T05:37:05.000Z",
            "hashId": "Qp"
        },
        {
            "listing_update_id": 7,
            "listing_id": 15,
            "description": "Programmable context-sensitive capability",
            "pic1": "https://robohash.org/modiprovidentminima.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/sitnecessitatibusvel.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": "https://robohash.org/laboriosamestautem.bmp?size=500x500&set=set1",
            "created_on": "2019-02-18T16:35:28.000Z",
            "updated_on": "2020-05-13T21:53:21.000Z",
            "hashId": "2V"
        },
        {
            "listing_update_id": 8,
            "listing_id": 4,
            "description": "Polarised motivating task-force",
            "pic1": "https://robohash.org/remnostrumreprehenderit.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/laudantiumfacilisdoloribus.jpg?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": "https://robohash.org/quasiquiaeum.png?size=500x500&set=set1",
            "created_on": "2020-06-06T18:46:11.000Z",
            "updated_on": "2020-01-08T20:11:32.000Z",
            "hashId": "7B"
        },
        {
            "listing_update_id": 9,
            "listing_id": 19,
            "description": "Cross-group responsive help-desk",
            "pic1": "https://robohash.org/consequunturvoluptasquia.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/officiarationequasi.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/optionecessitatibussimilique.png?size=500x500&set=set1",
            "pic4": "https://robohash.org/mollitianonvoluptatum.png?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-01-10T04:51:54.000Z",
            "updated_on": "2020-03-03T15:10:30.000Z",
            "hashId": "Zp"
        },
        {
            "listing_update_id": 10,
            "listing_id": 7,
            "description": "Enterprise-wide foreground leverage",
            "pic1": "https://robohash.org/magnammaximedolor.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/laboreautitaque.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/undemagnidolorum.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/temporibushiceum.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/inciduntiustolabore.png?size=500x500&set=set1",
            "created_on": "2019-05-04T00:02:16.000Z",
            "updated_on": "2020-01-17T15:57:21.000Z",
            "hashId": "yb"
        },
        {
            "listing_update_id": 11,
            "listing_id": 12,
            "description": "Reduced exuding initiative",
            "pic1": "https://robohash.org/cupiditatelaborerepellendus.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/eadoloremquis.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/nesciuntconsecteturautem.jpg?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2020-02-12T07:55:10.000Z",
            "updated_on": "2020-05-27T21:36:45.000Z",
            "hashId": "g7"
        },
        {
            "listing_update_id": 12,
            "listing_id": 14,
            "description": "Fundamental fault-tolerant collaboration",
            "pic1": "https://robohash.org/utestsit.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/etsintnumquam.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/etestvoluptates.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": "https://robohash.org/necessitatibusautnulla.bmp?size=500x500&set=set1",
            "created_on": "2019-05-14T18:56:25.000Z",
            "updated_on": "2020-04-07T22:10:02.000Z",
            "hashId": "mn"
        },
        {
            "listing_update_id": 13,
            "listing_id": 7,
            "description": "Seamless exuding help-desk",
            "pic1": "https://robohash.org/nobisestlabore.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/atqueitaqueet.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/nemoveritatisdistinctio.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/earumsintprovident.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/laudantiumvoluptatespariatur.jpg?size=500x500&set=set1",
            "created_on": "2019-05-03T23:01:32.000Z",
            "updated_on": "2020-05-17T09:52:35.000Z",
            "hashId": "1r"
        },
        {
            "listing_update_id": 14,
            "listing_id": 14,
            "description": "Enhanced optimizing process improvement",
            "pic1": "https://robohash.org/utconsequunturdeserunt.bmp?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/nonitaquepraesentium.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "created_on": "2020-06-05T19:14:51.000Z",
            "updated_on": "2020-02-22T01:42:34.000Z",
            "hashId": "wQ"
        },
        {
            "listing_update_id": 15,
            "listing_id": 4,
            "description": "Profound next generation knowledge base",
            "pic1": "https://robohash.org/etquosunt.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/porroetodit.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/voluptateminprovident.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": "https://robohash.org/quiaodiosuscipit.jpg?size=500x500&set=set1",
            "created_on": "2019-06-01T05:30:16.000Z",
            "updated_on": "2020-02-06T22:27:03.000Z",
            "hashId": "zM"
        },
        {
            "listing_update_id": 16,
            "listing_id": 20,
            "description": "Configurable global archive",
            "pic1": "https://robohash.org/abeiusofficiis.jpg?size=500x500&set=set1",
            "pic2": null,
            "pic3": "https://robohash.org/reiciendisquideserunt.bmp?size=500x500&set=set1",
            "pic4": null,
            "pic5": "https://robohash.org/rerumetconsectetur.jpg?size=500x500&set=set1",
            "created_on": "2020-01-19T20:08:39.000Z",
            "updated_on": "2020-07-19T10:56:04.000Z",
            "hashId": "9x"
        },
        {
            "listing_update_id": 17,
            "listing_id": 20,
            "description": "Face to face user-facing forecast",
            "pic1": "https://robohash.org/aadipisciin.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/explicabosolutanam.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/voluptatemducimusea.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": null,
            "created_on": "2020-07-12T14:42:21.000Z",
            "updated_on": "2019-10-28T22:59:22.000Z",
            "hashId": "qw"
        },
        {
            "listing_update_id": 18,
            "listing_id": 1,
            "description": "Open-architected coherent protocol",
            "pic1": "https://robohash.org/quiaperferendisenim.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/corruptiquasfugit.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/aliquidaat.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/iureexexplicabo.bmp?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-08-07T01:59:49.000Z",
            "updated_on": "2020-05-24T14:39:21.000Z",
            "hashId": "3M"
        },
        {
            "listing_update_id": 19,
            "listing_id": 3,
            "description": "Visionary bi-directional circuit",
            "pic1": "https://robohash.org/quiavoluptassoluta.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/estoditmolestiae.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/assumendaeadolores.png?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-02-03T14:37:23.000Z",
            "updated_on": "2020-05-12T00:51:00.000Z",
            "hashId": "Yz"
        },
        {
            "listing_update_id": 20,
            "listing_id": 17,
            "description": "Triple-buffered optimizing emulation",
            "pic1": "https://robohash.org/oditiureipsa.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/doloresveritatiscupiditate.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/iureetmaxime.bmp?size=500x500&set=set1",
            "pic4": "https://robohash.org/repellatrationeest.bmp?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-01-27T21:53:56.000Z",
            "updated_on": "2020-02-12T00:13:24.000Z",
            "hashId": "jy"
        },
        {
            "listing_update_id": 21,
            "listing_id": 4,
            "description": "Business-focused encompassing leverage",
            "pic1": "https://robohash.org/quodrationemaxime.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/inciduntpossimusin.jpg?size=500x500&set=set1",
            "pic3": null,
            "pic4": null,
            "pic5": "https://robohash.org/voluptatibusexaliquid.png?size=500x500&set=set1",
            "created_on": "2019-10-09T02:46:14.000Z",
            "updated_on": "2020-05-22T20:26:20.000Z",
            "hashId": "Vk"
        },
        {
            "listing_update_id": 22,
            "listing_id": 17,
            "description": "Fundamental bandwidth-monitored installation",
            "pic1": "https://robohash.org/quimaioresprovident.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/nonharumest.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/saepedoloresex.png?size=500x500&set=set1",
            "pic4": null,
            "pic5": "https://robohash.org/suscipitquisquamadipisci.png?size=500x500&set=set1",
            "created_on": "2019-03-15T19:21:14.000Z",
            "updated_on": "2019-09-09T13:29:47.000Z",
            "hashId": "Jm"
        },
        {
            "listing_update_id": 23,
            "listing_id": 5,
            "description": "Upgradable contextually-based emulation",
            "pic1": "https://robohash.org/consequatureligendicorrupti.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/utquiaquisquam.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/etaperiamquaerat.png?size=500x500&set=set1",
            "pic4": "https://robohash.org/utipsabeatae.jpg?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2020-06-23T05:24:42.000Z",
            "updated_on": "2020-03-16T02:36:16.000Z",
            "hashId": "Eb"
        },
        {
            "listing_update_id": 24,
            "listing_id": 1,
            "description": "Team-oriented 24 hour contingency",
            "pic1": "https://robohash.org/quametab.png?size=500x500&set=set1",
            "pic2": "https://robohash.org/sitnullaet.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/doloremquevoluptasnam.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/maioresnonvoluptatem.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/modiremofficia.png?size=500x500&set=set1",
            "created_on": "2019-10-21T09:10:52.000Z",
            "updated_on": "2020-04-22T12:34:01.000Z",
            "hashId": "xa"
        },
        {
            "listing_update_id": 25,
            "listing_id": 3,
            "description": "Function-based next generation neural-net",
            "pic1": "https://robohash.org/utreprehenderitrem.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/quieumeius.png?size=500x500&set=set1",
            "pic3": "https://robohash.org/veniamnonest.png?size=500x500&set=set1",
            "pic4": "https://robohash.org/voluptatumquibusdamcumque.bmp?size=500x500&set=set1",
            "pic5": null,
            "created_on": "2019-02-17T21:06:03.000Z",
            "updated_on": "2019-12-19T15:55:36.000Z",
            "hashId": "D9"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Listing Update


Get single listing update identified by update id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listing-updates/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Listing Update (200 OK)



##### I. Example Response: Get Single Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 1,
        "listing_id": 2,
        "description": "Seamless neutral core",
        "pic1": "https://robohash.org/doloribusfacerevelit.png?size=500x500&set=set1",
        "pic2": "https://robohash.org/quaeratquodminima.jpg?size=500x500&set=set1",
        "pic3": "https://robohash.org/delenitisitrerum.png?size=500x500&set=set1",
        "pic4": "https://robohash.org/autprovidentqui.bmp?size=500x500&set=set1",
        "pic5": null,
        "created_on": "2019-01-14T07:06:44.000Z",
        "updated_on": "2020-05-28T08:18:12.000Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Listing Update (404 Not Found - Non existent listing id)



##### II. Example Response: Get Single Listing Update (404 Not Found - Non existent listing id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Modify Listing Update


Modify listing update identified by update id. Permission: Owner/Admin.

Field rules:
At least one field must be updated.
description - Non-empty.
pic1 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic2 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic3 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic4 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic5 - Valid JPG/PNG filename and extension text found in pics. Optional.
pics - Valid collection of up to 5 JPG/PNG files. Optional.


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/listing-updates/2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| description | New Milestone Achieved! | Collection of 5 pics |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |
| pics |  | Collection of 5 pics |



***More example Requests/Responses:***


##### I. Example Request: Modify Listing Update (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| description | New Milestone Achieved! | Collection of 5 pics |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |
| pics |  | Collection of 5 pics |



##### I. Example Response: Modify Listing Update (200 OK)
```js
{
    "success": true,
    "data": {
        "listing_update_id": 2,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "description": "New Milestone Achieved!",
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1597682209640.jpg",
        "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1597682209642.jpg",
        "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1597682209648.jpg",
        "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1597682209653.jpg",
        "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1597682209660.jpg",
        "created_on": "2020-07-08T04:26:55.000Z",
        "updated_on": "2020-08-17T16:36:50.000Z"
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
pic1 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic2 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic3 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic4 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic5 - Valid JPG/PNG filename and extension text found in pics. Optional.
pics - Valid collection of up to 5 JPG/PNG files. Optional.


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/api/listings
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | New title 1 |  |
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
| listing_email | new_listing@gmail.com |  |
| listing_status | ongoing |  |



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



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | New title 1 |  |
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
| listing_email | new_listing@gmail.com |  |
| listing_status | ongoing |  |



##### III. Example Response: Create Listing (201 Created)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "c912bdd2-7cac-4245-af20-b774dbfae225",
            "organisation_id": null,
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "New title 1",
            "category": "test category",
            "about": "test about",
            "tagline": "test tagline",
            "mission": "test mission",
            "listing_url": "www.test.com",
            "listing_email": "new_listing@gmail.com",
            "listing_status": "ongoing",
            "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1600580556633.jpg",
            "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1600580556637.jpg",
            "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1600580556645.jpg",
            "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1600580556654.jpg",
            "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1600580556658.jpg",
            "is_published": false,
            "is_verified": false,
            "start_date": "2019-08-15T08:45:43.415Z",
            "end_date": "2020-07-17T08:45:43.415Z",
            "created_on": "2020-09-20T05:42:36.963Z",
            "deleted_on": null
        },
        {
            "listing_id": "c912bdd2-7cac-4245-af20-b774dbfae225",
            "overview": null,
            "problem": null,
            "solution": null,
            "outcome": null
        }
    ]
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
    "data": [
        {
            "listing_id": 21,
            "organisation_id": null,
            "created_by": 1,
            "title": "New title 1",
            "category": "test category",
            "about": "test about",
            "tagline": "test tagline",
            "mission": "test mission",
            "listing_url": "www.test.com",
            "pic1": null,
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2019-08-15T08:45:43.416Z",
            "end_date": "2020-07-17T08:45:43.416Z",
            "created_on": "2020-08-03T16:32:02.904Z"
        },
        {
            "listing_id": 21,
            "problem": null,
            "solution": null,
            "outcome": null
        }
    ]
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
    "count": 5,
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



### 5. Get All Hashtags for a Listing


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
    "count": 3,
    "data": [
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "hashtag_id": 1,
            "tag": "#broker0"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "hashtag_id": 2,
            "tag": "#sandyfirth1"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "hashtag_id": 3,
            "tag": "#tudhope2"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 6. Get All Jobs for a Listing


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



### 7. Get All Likes for a Listing


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



### 8. Get All Listing Comments for a Listing


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



### 9. Get All Listing Locations for a Listing


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



### 10. Get All Listing Skills for a Listing


Get all listing skills for an associated listing. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/listing-skills
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



##### II. Example Request: Get All Listing Skills for a Listing (200 OK)



##### II. Example Response: Get All Listing Skills for a Listing (200 OK)
```js
{
    "success": true,
    "count": 4,
    "data": [
        {
            "listing_skill_id": 1,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "skill_id": 1,
            "skill": "Auditing"
        },
        {
            "listing_skill_id": 2,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "skill_id": 2,
            "skill": "Typesetting"
        },
        {
            "listing_skill_id": 3,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "skill_id": 3,
            "skill": "Copywriting"
        },
        {
            "listing_skill_id": 4,
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "skill_id": 4,
            "skill": "WiFi"
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
            "description": "Horizontal dynamic encoding",
            "pic1": "https://robohash.org/utetut.bmp?size=500x500&set=set1",
            "pic2": "https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1",
            "pic3": "https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1",
            "pic4": "https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1",
            "pic5": "https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1",
            "created_on": "2020-05-04T18:20:02.000Z",
            "updated_on": "2020-04-27T17:06:06.000Z"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "listing_update_id": 2,
            "description": "Inverse eco-centric conglomeration",
            "pic1": "https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1",
            "pic2": "https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1",
            "pic5": "https://robohash.org/suscipittemporeet.png?size=500x500&set=set1",
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
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "Project Kampong",
            "category": "Technology",
            "about": null,
            "tagline": "With Kampong you can",
            "mission": "To build a platform that connects people with ideas and skills to build and track social good project initiatives",
            "listing_url": "www.test.com",
            "listing_email": null,
            "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg",
            "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-08-20T20:50:15.048Z",
            "end_date": null,
            "created_on": "2020-08-20T20:50:15.048Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": null,
            "location_ids": null
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "organisation_id": null,
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Community",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "listing_url": "http://ifeng.com/nisl.jsp",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "01 Raffles Place, Cecil, Marina, Peoples Park",
                "02 Anson, Tanjong Pagar",
                "03 Queenstown, Tiong Bahru"
            ],
            "location_ids": [
                1,
                2,
                3
            ]
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Enterprise",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "03 Queenstown, Tiong Bahru",
                "04 Telok Blangah, Harbourfront"
            ],
            "location_ids": [
                3,
                4
            ]
        },
        {
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "organisation_id": null,
            "created_by": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "title": "YOUTH Mentorship Programme",
            "category": "Youth",
            "about": "Cloned 4th generation matrices",
            "tagline": "Paving the way for the future generations",
            "mission": "Strengthening bonds",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Viki Tay",
            "profile_picture": "https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "03 Queenstown, Tiong Bahru",
                "04 Telok Blangah, Harbourfront"
            ],
            "location_ids": [
                3,
                4
            ]
        },
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
        },
        {
            "listing_id": "e411bd80-d5cf-49ac-b847-18c9fc13377a",
            "organisation_id": null,
            "created_by": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "title": "Project Donation Drive",
            "category": "Elderly Care",
            "about": "Adaptive disintermediate Graphical User Interface",
            "tagline": "Bridging communities",
            "mission": "e-enable dot-com metrics",
            "listing_url": "http://i2i.jp/rhoncus/dui/vel.jpg",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": null,
            "pic3": "https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/nonquodquam.png?size=500x500&set=set1",
            "pic5": "https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1",
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-03-19T03:04:15.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Constance Tan",
            "profile_picture": "https://images.pexels.com/photos/2426656/pexels-photo-2426656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": null,
            "location_ids": null
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
            "description": "De-engineered content-based solution",
            "date": "2019-06-01T03:27:43.000Z"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "milestone_id": 2,
            "description": "Centralized stable groupware",
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
        "organisation_id": null,
        "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
        "title": "Rebuilding Homes",
        "category": "Community",
        "about": "Customer-focused dynamic installation",
        "tagline": "Building Better Lives",
        "mission": "Sharing compassion",
        "listing_url": "http://ifeng.com/nisl.jsp",
        "listing_email": null,
        "pic1": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
        "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
        "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
        "pic5": null,
        "is_published": false,
        "is_verified": false,
        "start_date": "2020-12-01T11:09:20.000Z",
        "end_date": null,
        "created_on": "2020-08-20T09:36:45.816Z",
        "deleted_on": null,
        "nickname": "Wayne",
        "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "locations": [
            "01 Raffles Place, Cecil, Marina, Peoples Park",
            "02 Anson, Tanjong Pagar",
            "03 Queenstown, Tiong Bahru"
        ],
        "location_ids": [
            1,
            2,
            3
        ]
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
| keyword | raffles,kampong,2020 |  |
| limit | 10 |  |



##### I. Example Response: Search Listings (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "Project Kampong",
            "category": "Technology",
            "about": null,
            "tagline": "With Kampong you can",
            "mission": "To build a platform that connects people with ideas and skills to build and track social good project initiatives",
            "listing_url": "www.test.com",
            "listing_email": null,
            "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg",
            "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-08-20T20:50:15.048Z",
            "end_date": null,
            "created_on": "2020-08-20T20:50:15.048Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": null,
            "location_ids": null
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "organisation_id": null,
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Community",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "listing_url": "http://ifeng.com/nisl.jsp",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "01 Raffles Place, Cecil, Marina, Peoples Park",
                "02 Anson, Tanjong Pagar",
                "03 Queenstown, Tiong Bahru"
            ],
            "location_ids": [
                1,
                2,
                3
            ]
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Enterprise",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "listing_email": null,
            "pic1": "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "locations": [
                "03 Queenstown, Tiong Bahru",
                "04 Telok Blangah, Harbourfront"
            ],
            "location_ids": [
                3,
                4
            ]
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
title - Non-empty.
category - Non-empty.
about - Optional.
tagline - Optional.
mission - Optional.
listing_url - Valid URL. Optional.
is_published - Boolean. Optional.
start_date - Valid SQL datetime. Optional. Default to current datetime.
end_date - Valid SQL datetime. Optional.
organisation_id - Valid integer and existing organisation id. Optional.


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | Updated title 1 |  |
| category | Updated category |  |
| about | Updated about |  |
| tagline | Updated tagline |  |
| mission | Updated mission |  |
| listing_url | www.updated-test.com |  |
| is_published | true |  |
| start_date | 2018-08-15 16:45:43.41585+08 |  |
| end_date | 2020-01-30 16:45:43.41585+08 |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |
| pics |  | Collection of 5 JPG files |
| listing_status | completed |  |
| listing_email | updated_email@gmail.com |  |



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

| Key | Value | Description |
| --- | ------|-------------|
| title | Updated title 1 |  |
| category | Updated category |  |
| about | Updated about |  |
| tagline | Updated tagline |  |
| mission | Updated mission |  |
| listing_url | www.updated-test.com |  |
| is_published | true |  |
| start_date | 2018-08-15 16:45:43.41585+08 |  |
| end_date | 2020-01-30 16:45:43.41585+08 |  |
| pic1 | test-pic-1.jpg |  |
| pic2 | test-pic-2.jpg |  |
| pic3 | test-pic-3.jpg |  |
| pic4 | test-pic-4.jpg |  |
| pic5 | test-pic-5.jpg |  |
| pics |  | Collection of 5 JPG files |
| listing_status | completed |  |
| listing_email | updated_email@gmail.com |  |



##### III. Example Response: Update Listing (200 OK)
```js
{
    "success": true,
    "data": {
        "title": "Updated title 1",
        "category": "Updated category",
        "about": "Updated about",
        "tagline": "Updated tagline",
        "mission": "Updated mission",
        "listing_url": "www.updated-test.com",
        "listing_email": "updated_email@gmail.com",
        "listing_status": "completed",
        "is_published": true,
        "start_date": "2018-08-15T08:45:43.415Z",
        "end_date": "2020-01-30T08:45:43.415Z",
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1600581115622.jpg",
        "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1600581115630.jpg",
        "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1600581115654.jpg",
        "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1600581115659.jpg",
        "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1600581115664.jpg"
    }
}
```


***Status Code:*** 200

<br>



### 18. Upload Listing Photos


Upload photos for listing, up to a maximum of 5 photos at once. In the request body JSON, the newly uploaded photo's filename and extension (eg. Pic001.jpg) must be passed as value to one of the 5 keys (pic1, pic2, ..., pic5). Permission: Admin/Owner.

Field rules:
All fields required unless otherwise stated.
pic1 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic2 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic3 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic4 - Valid JPG/PNG filename and extension text found in pics. Optional.
pic5 - Valid JPG/PNG filename and extension text found in pics. Optional.
pics - Valid collection of up to 5 JPG/PNG files. Optional.


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/upload-photo
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 5 JPG files |
| pic1 | test-pic-1.jpg | Original filename of new picture, to be uploaded into pic1 |
| pic2 | test-pic-2.jpg | Original filename of new picture, to be uploaded into pic2 |
| pic3 | test-pic-3.jpg | Original filename of new picture, to be uploaded into pic3 |
| pic4 | test-pic-4.jpg | Original filename of new picture, to be uploaded into pic4 |
| pic5 | test-pic-5.jpg | Original filename of new picture, to be uploaded into pic5 |



***More example Requests/Responses:***


##### I. Example Request: Upload Listing Photos (200 OK - 5 files uploaded, but only 1 valid filename given in requesst body)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 5 JPG files |
| pic1 | test-pic-1.jpg | Original filename of new picture, to be uploaded into pic1 |
| pic2 | DSC00415.jpg | Original filename of new picture, to be uploaded into pic2 |
| pic3 | DSC00416.jpg | Original filename of new picture, to be uploaded into pic3 |
| pic4 | DSC00424.jpg | Original filename of new picture, to be uploaded into pic4 |
| pic5 | DSC00411.jpg | Original filename of new picture, to be uploaded into pic5 |



##### I. Example Response: Upload Listing Photos (200 OK - 5 files uploaded, but only 1 valid filename given in requesst body)
```js
{
    "success": true,
    "data": {
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1596383242481.jpg",
        "pic2": null,
        "pic3": null,
        "pic4": null,
        "pic5": null
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Upload Listing Photos (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| pics |  | Collection of 5 JPG files |
| pic1 | test-pic-1.jpg | Original filename of new picture, to be uploaded into pic1 |
| pic2 | test-pic-2.jpg | Original filename of new picture, to be uploaded into pic2 |
| pic3 | test-pic-3.jpg | Original filename of new picture, to be uploaded into pic3 |
| pic4 | test-pic-4.jpg | Original filename of new picture, to be uploaded into pic4 |
| pic5 | test-pic-5.jpg | Original filename of new picture, to be uploaded into pic5 |



##### II. Example Response: Upload Listing Photos (200 OK)
```js
{
    "success": true,
    "data": {
        "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-1-1596383394655.jpg",
        "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-2-1596383394658.jpg",
        "pic3": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-3-1596383394662.jpg",
        "pic4": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-4-1596383394666.jpg",
        "pic5": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/test-pic-5-1596383394673.jpg"
    }
}
```


***Status Code:*** 200

<br>



### 19. Verify Listing


Verify listing. Permission: Admin.

Field rules:
All fields are required unless otherwise stated.
is_verified - Boolean.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/listings/43824166-bee2-426e-8a08-ca2c4e4120ae/verify
```


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



## Locations
Locations CRUD functionality.



### 1. Create Location


Create listing location for listing. Permission: Admin.

Field rules:
All fields required unless otherwise stated.
location - Valid string.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/locations
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"location": "new location"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Location (403 Forbidden - Non-admin)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"location": "new location"
}
```



##### I. Example Response: Create Location (403 Forbidden - Non-admin)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create Location (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"location": "new location"
}
```



##### II. Example Response: Create Location (201 Created)
```js
{
    "success": true,
    "data": {
        "location_id": 29,
        "location": "new location"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Location


Delete location identified by location id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/locations/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Location (403 Forbidden - Non-admin)



##### I. Example Response: Delete Location (403 Forbidden - Non-admin)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Location (200 OK)



##### II. Example Response: Delete Location (200 OK)
```js
{
    "success": true,
    "data": {
        "location_id": 1,
        "location": "01 Raffles Place, Cecil, Marina, Peoples Park"
    }
}
```


***Status Code:*** 200

<br>



### 3. Get All Listings for a Location


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
    "count": 6,
    "pagination": {},
    "data": [
        {
            "listing_id": "1276b4eb-df3a-4de3-bcae-a450ed96eeac",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "Project Kampong",
            "category": "Technology",
            "about": null,
            "tagline": "With Kampong you can",
            "mission": "To build a platform that connects people with ideas and skills to build and track social good project initiatives",
            "listing_url": "www.test.com",
            "pic1": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg",
            "pic2": "https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png",
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-08-20T20:50:15.048Z",
            "end_date": null,
            "created_on": "2020-08-20T20:50:15.048Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "phone": "96831702",
            "email": "derrick@gmail.com"
        },
        {
            "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
            "organisation_id": null,
            "created_by": "f96b2138-1754-4c17-a405-940e20adc601",
            "title": "Rebuilding Homes",
            "category": "Community",
            "about": "Customer-focused dynamic installation",
            "tagline": "Building Better Lives",
            "mission": "Sharing compassion",
            "listing_url": "http://ifeng.com/nisl.jsp",
            "pic1": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1",
            "pic3": "https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-01T11:09:20.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Wayne",
            "profile_picture": "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "phone": "97690390",
            "email": "admin@gmail.com"
        },
        {
            "listing_id": "c975a572-452d-4824-8ed5-500b50488436",
            "organisation_id": null,
            "created_by": "b7662cd1-a2c9-4054-95e7-078e35ea6fa1",
            "title": "CommStart 2020",
            "category": "Enterprise",
            "about": "Team-oriented context-sensitive forecast",
            "tagline": "Innovating Ideas, Creating Opportunities",
            "mission": "Cultivating entrepreneurship and community impact",
            "listing_url": "https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml",
            "pic1": "https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "pic2": null,
            "pic3": null,
            "pic4": null,
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-07-30T05:54:45.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Derrick",
            "profile_picture": "https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "phone": "96831702",
            "email": "derrick@gmail.com"
        },
        {
            "listing_id": "cf4adc93-3b96-4bbc-8cb0-41e196b145ac",
            "organisation_id": null,
            "created_by": "f997120c-2956-482e-9ba3-81a12b4fecc1",
            "title": "YOUTH Mentorship Programme",
            "category": "Youth",
            "about": "Cloned 4th generation matrices",
            "tagline": "Paving the way for the future generations",
            "mission": "Strengthening bonds",
            "listing_url": "https://toplist.cz/aliquam.xml",
            "pic1": "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": "https://robohash.org/utsednostrum.png?size=500x500&set=set1",
            "pic3": null,
            "pic4": "https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1",
            "pic5": null,
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-12-25T14:21:11.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Viki Tay",
            "profile_picture": "https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "phone": "84428699",
            "email": "valbrooke3@businessinsider.com"
        },
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
            "phone": "87685829",
            "email": "user@gmail.com"
        },
        {
            "listing_id": "e411bd80-d5cf-49ac-b847-18c9fc13377a",
            "organisation_id": null,
            "created_by": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "title": "Project Donation Drive",
            "category": "Elderly Care",
            "about": "Adaptive disintermediate Graphical User Interface",
            "tagline": "Bridging communities",
            "mission": "e-enable dot-com metrics",
            "listing_url": "http://i2i.jp/rhoncus/dui/vel.jpg",
            "pic1": "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "pic2": null,
            "pic3": "https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1",
            "pic4": "https://robohash.org/nonquodquam.png?size=500x500&set=set1",
            "pic5": "https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1",
            "is_published": false,
            "is_verified": false,
            "start_date": "2020-03-19T03:04:15.000Z",
            "end_date": null,
            "created_on": "2020-08-20T09:36:45.816Z",
            "deleted_on": null,
            "nickname": "Constance Tan",
            "profile_picture": "https://images.pexels.com/photos/2426656/pexels-photo-2426656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "phone": "84677316",
            "email": "cstan4@toplist.cz"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get All Locations


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



### 5. Get Single Location


Get single location by location id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/locations/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Location (200 OK)



##### I. Example Response: Get Single Location (200 OK)
```js
{
    "success": true,
    "data": {
        "location_id": 2,
        "location": "02 Anson, Tanjong Pagar"
    }
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
	"description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
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



##### II. Example Request: Create Milestone (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
	"description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
	"date": "2020-01-30 16:45:43.41585+08"
}
```



##### II. Example Response: Create Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 10,
        "listing_id": "43824166-bee2-426e-8a08-ca2c4e4120ae",
        "description": "First $1000 raised! Raised our 1st $1000 for our benficiary in our 1st ever flag drive.",
        "date": "2020-01-30T08:45:43.416Z"
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


##### I. Example Request: Delete Milestone (200 OK)



##### I. Example Response: Delete Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 1,
        "listing_id": 17,
        "description": "New Milestone Achieved!",
        "date": "2020-03-09T16:00:00.000Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Delete Milestone (404 Not Found - Non-existent milestone id)



##### II. Example Response: Delete Milestone (404 Not Found - Non-existent milestone id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 3. Get All Milestones


Get all milestones. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/milestones
```



***More example Requests/Responses:***


##### I. Example Request: Get All Milestones (200 OK)



##### I. Example Response: Get All Milestones (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "milestone_id": 1,
            "listing_id": 17,
            "description": "De-engineered content-based solution",
            "date": "2019-06-01T03:27:43.000Z"
        },
        {
            "milestone_id": 2,
            "listing_id": 20,
            "description": "Centralized stable groupware",
            "date": "2020-07-09T03:30:19.000Z"
        },
        {
            "milestone_id": 3,
            "listing_id": 20,
            "description": "Future-proofed systemic interface",
            "date": "2016-11-13T13:27:33.000Z"
        },
        {
            "milestone_id": 4,
            "listing_id": 16,
            "description": "Pre-emptive static installation",
            "date": "2015-08-06T01:28:56.000Z"
        },
        {
            "milestone_id": 5,
            "listing_id": 13,
            "description": "Multi-channelled secondary model",
            "date": "2016-12-03T19:14:39.000Z"
        },
        {
            "milestone_id": 6,
            "listing_id": 17,
            "description": "Intuitive client-driven knowledge user",
            "date": "2018-12-16T00:49:35.000Z"
        },
        {
            "milestone_id": 7,
            "listing_id": 2,
            "description": "Monitored attitude-oriented array",
            "date": "2017-11-23T03:53:21.000Z"
        },
        {
            "milestone_id": 8,
            "listing_id": 13,
            "description": "Monitored object-oriented access",
            "date": "2020-01-21T11:04:19.000Z"
        },
        {
            "milestone_id": 9,
            "listing_id": 9,
            "description": "Managed attitude-oriented frame",
            "date": "2020-02-12T14:30:42.000Z"
        },
        {
            "milestone_id": 10,
            "listing_id": 17,
            "description": "Robust secondary intranet",
            "date": "2017-01-05T22:17:44.000Z"
        },
        {
            "milestone_id": 11,
            "listing_id": 5,
            "description": "Public-key didactic project",
            "date": "2015-11-06T10:35:57.000Z"
        },
        {
            "milestone_id": 12,
            "listing_id": 19,
            "description": "Re-engineered 24 hour concept",
            "date": "2021-01-02T11:15:42.000Z"
        },
        {
            "milestone_id": 13,
            "listing_id": 7,
            "description": "Profound disintermediate conglomeration",
            "date": "2016-04-16T15:01:14.000Z"
        },
        {
            "milestone_id": 14,
            "listing_id": 10,
            "description": "Public-key optimal website",
            "date": "2015-07-01T09:06:04.000Z"
        },
        {
            "milestone_id": 15,
            "listing_id": 15,
            "description": "Seamless actuating neural-net",
            "date": "2018-08-26T09:54:07.000Z"
        },
        {
            "milestone_id": 16,
            "listing_id": 2,
            "description": "Inverse grid-enabled intranet",
            "date": "2017-05-19T17:38:17.000Z"
        },
        {
            "milestone_id": 17,
            "listing_id": 4,
            "description": "Optional maximized toolset",
            "date": "2019-08-19T16:46:45.000Z"
        },
        {
            "milestone_id": 18,
            "listing_id": 8,
            "description": "Optimized methodical core",
            "date": "2015-03-10T09:15:57.000Z"
        },
        {
            "milestone_id": 19,
            "listing_id": 17,
            "description": "Extended didactic support",
            "date": "2016-02-04T14:13:02.000Z"
        },
        {
            "milestone_id": 20,
            "listing_id": 6,
            "description": "Profound maximized hierarchy",
            "date": "2017-11-26T19:54:49.000Z"
        },
        {
            "milestone_id": 21,
            "listing_id": 15,
            "description": "Polarised non-volatile toolset",
            "date": "2018-06-28T02:44:49.000Z"
        },
        {
            "milestone_id": 22,
            "listing_id": 13,
            "description": "User-centric content-based installation",
            "date": "2015-08-09T12:42:41.000Z"
        },
        {
            "milestone_id": 23,
            "listing_id": 17,
            "description": "Operative neutral function",
            "date": "2015-08-15T19:18:43.000Z"
        },
        {
            "milestone_id": 24,
            "listing_id": 14,
            "description": "Balanced homogeneous access",
            "date": "2017-05-29T12:58:46.000Z"
        },
        {
            "milestone_id": 25,
            "listing_id": 9,
            "description": "Devolved local adapter",
            "date": "2016-02-12T00:23:01.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Milestone


Get single milestone. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/milestones/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Milestone (200 OK)



##### I. Example Response: Get Single Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 1,
        "listing_id": 17,
        "description": "De-engineered content-based solution",
        "date": "2019-06-01T03:27:43.000Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Milestone (404 Not Found - Non-existent milestone id)



##### II. Example Response: Get Single Milestone (404 Not Found - Non-existent milestone id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Milestone


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
	"description": "New Milestone Achieved!",
	"date": "2020-03-04 16:45:43.41585+08"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Milestone (200 OK)


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



##### I. Example Response: Update Milestone (200 OK)
```js
{
    "success": true,
    "data": {
        "milestone_id": 1,
        "listing_id": 17,
        "description": "New Milestone Achieved!",
        "date": "2020-03-04T08:45:43.416Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Update Milestone (400 Bad Request - Invalid value entered)


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



##### II. Example Response: Update Milestone (400 Bad Request - Invalid value entered)
```js
{
    "success": false,
    "error": "Please include a valid timestamp (of string type) for date."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Update Milestone (404 Not Found - Non-existent milestone id)


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



##### III. Example Response: Update Milestone (404 Not Found - Non-existent milestone id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

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
    "type": "Sponsor",
    "about": "about org 1",
    "website_url": "www.testorg1.com",
    "handphone": 93232224,
    "email": "testorg1@test.com"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Skill (400 Bad Request - Non-alphabet or non-whitespace character in field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "$ making"
}
```



##### I. Example Response: Create Skill (400 Bad Request - Non-alphabet or non-whitespace character in field)
```js
{
    "success": false,
    "error": "Please include a valid skill with alphabets and spaces only."
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Create Skill (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Powerpoint"
}
```



##### II. Example Response: Create Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Create Skill (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Powerpoint",
	"skill_group": "Microsoft Office Tools"
}
```



##### III. Example Response: Create Skill (201 Created)
```js
{
    "success": true,
    "data": {
        "skill_id": 16,
        "skill": "Microsoft Powerpoint",
        "skill_group": "Microsoft Office Tools"
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
URL: {{URL}}/api/organisations/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Skill (403 Forbidden - Non-admin user)



##### I. Example Response: Delete Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Skill (200 OK)



##### II. Example Response: Delete Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "cDNA"
    }
}
```


***Status Code:*** 200

<br>



##### III. Example Request: Delete Skill (400 Bad Request - Non-existent skill)



##### III. Example Response: Delete Skill (400 Bad Request - Non-existent skill)
```js
{
    "success": false,
    "error": "Skill does not exist"
}
```


***Status Code:*** 400

<br>



### 3. Get All Organisations


Get all organisations. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/organisations
```



***More example Requests/Responses:***


##### I. Example Request: Get All Skills (200 OK)



##### I. Example Response: Get All Skills (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "skill_id": 1,
            "skill": "cDNA"
        },
        {
            "skill_id": 2,
            "skill": "Typesetting"
        },
        {
            "skill_id": 3,
            "skill": "Biochemistry"
        },
        {
            "skill_id": 4,
            "skill": "WiFi"
        },
        {
            "skill_id": 5,
            "skill": "Siebel"
        },
        {
            "skill_id": 6,
            "skill": "JTAPI"
        },
        {
            "skill_id": 7,
            "skill": "Oilfield"
        },
        {
            "skill_id": 8,
            "skill": "Kindergarten"
        },
        {
            "skill_id": 9,
            "skill": "Aerospace Manufacturing"
        },
        {
            "skill_id": 10,
            "skill": "Mortgage Banking"
        },
        {
            "skill_id": 11,
            "skill": "Swim Instruction"
        },
        {
            "skill_id": 12,
            "skill": "Atomic Absorption"
        },
        {
            "skill_id": 13,
            "skill": "Game Design"
        },
        {
            "skill_id": 14,
            "skill": "CFI"
        },
        {
            "skill_id": 15,
            "skill": "Gas Turbines"
        },
        {
            "skill_id": 16,
            "skill": "ICU"
        },
        {
            "skill_id": 17,
            "skill": "Nintendo DS"
        },
        {
            "skill_id": 18,
            "skill": "IoC"
        },
        {
            "skill_id": 19,
            "skill": "Econometrics"
        },
        {
            "skill_id": 20,
            "skill": "HBSS"
        },
        {
            "skill_id": 21,
            "skill": "Obstetrics"
        },
        {
            "skill_id": 22,
            "skill": "NDF"
        },
        {
            "skill_id": 23,
            "skill": "Equity Research"
        },
        {
            "skill_id": 24,
            "skill": "BMI"
        },
        {
            "skill_id": 25,
            "skill": "Fund Of Funds"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Organisation


Get single organisation. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/organisations1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Skill (200 OK)



##### I. Example Response: Get Single Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "cDNA"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Skill (404 Not Found - Invalid skill ID)



##### II. Example Response: Get Single Skill (404 Not Found - Invalid skill ID)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Organisation


Update Organisation identified by organisation id. Permission: Owner/Admin.

Field rules: 
At least one field must be updated.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/organisations/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word",
	"skill_group": "Microsoft Suite",
    "skill_description": "Microsoft suite of apps"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Skill (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word",
	"skill_group": "Microsoft Suite",
    "skill_description": "Microsoft suite of apps"
}
```



##### I. Example Response: Update Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "Microsoft Word",
        "skill_group": "Microsoft Suite",
        "skill_description": "Microsoft suite of apps"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Update Skill (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word"
}
```



##### II. Example Response: Update Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### III. Example Request: Update Skill (400 Bad Request - Non-alphabet or non-whitespace in field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "#programming"
}
```



##### III. Example Response: Update Skill (400 Bad Request - Non-alphabet or non-whitespace in field)
```js
{
    "success": false,
    "error": "Please include a valid skill with alphabets and spaces only."
}
```


***Status Code:*** 400

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



### 3. Get All Participants


Get all Participants. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/participants
```



***More example Requests/Responses:***


##### I. Example Request: Get All Participants (200 OK)



##### I. Example Response: Get All Participants (200 OK)
```js
{
    "success": true,
    "count": 20,
    "pagination": {},
    "data": [
        {
            "listing_id": 15,
            "user_id": 1,
            "joined_on": "2018-12-18T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 13,
            "user_id": 9,
            "joined_on": "2018-09-23T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 2,
            "user_id": 16,
            "joined_on": "2019-10-17T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 8,
            "user_id": 10,
            "joined_on": "2018-08-20T16:00:00.000Z",
            "end_on": "2020-09-06T16:00:00.000Z"
        },
        {
            "listing_id": 17,
            "user_id": 5,
            "joined_on": "2019-12-13T16:00:00.000Z",
            "end_on": "2020-09-02T16:00:00.000Z"
        },
        {
            "listing_id": 9,
            "user_id": 11,
            "joined_on": "2020-02-21T16:00:00.000Z",
            "end_on": "2020-08-09T16:00:00.000Z"
        },
        {
            "listing_id": 1,
            "user_id": 6,
            "joined_on": "2020-02-11T16:00:00.000Z",
            "end_on": "2020-09-03T16:00:00.000Z"
        },
        {
            "listing_id": 14,
            "user_id": 20,
            "joined_on": "2019-03-20T16:00:00.000Z",
            "end_on": "2020-09-22T16:00:00.000Z"
        },
        {
            "listing_id": 19,
            "user_id": 6,
            "joined_on": "2020-06-12T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 13,
            "user_id": 8,
            "joined_on": "2019-07-09T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 5,
            "user_id": 20,
            "joined_on": "2020-02-12T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 6,
            "user_id": 18,
            "joined_on": "2018-07-24T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 10,
            "user_id": 20,
            "joined_on": "2019-02-08T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 8,
            "user_id": 16,
            "joined_on": "2018-11-03T16:00:00.000Z",
            "end_on": "2020-07-31T16:00:00.000Z"
        },
        {
            "listing_id": 4,
            "user_id": 5,
            "joined_on": "2019-11-30T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 10,
            "user_id": 3,
            "joined_on": "2020-01-20T16:00:00.000Z",
            "end_on": "2020-07-10T16:00:00.000Z"
        },
        {
            "listing_id": 13,
            "user_id": 4,
            "joined_on": "2019-04-19T16:00:00.000Z",
            "end_on": null
        },
        {
            "listing_id": 6,
            "user_id": 1,
            "joined_on": "2020-01-30T16:00:00.000Z",
            "end_on": "2020-07-06T16:00:00.000Z"
        },
        {
            "listing_id": 3,
            "user_id": 7,
            "joined_on": "2020-06-17T16:00:00.000Z",
            "end_on": "2020-08-02T16:00:00.000Z"
        },
        {
            "listing_id": 4,
            "user_id": 2,
            "joined_on": "2019-12-19T16:00:00.000Z",
            "end_on": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Participant


Get single participant identified by participant id. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/participants/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Participant (200 OK)



##### I. Example Response: Get Single Participant (200 OK)
```js
{
    "success": true,
    "data": {
        "participant_id": 1,
        "listing_id": 15,
        "user_id": 1,
        "joined_on": "2018-12-18T16:00:00.000Z",
        "end_on": null
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Participant (Non-existent participant id)



##### II. Example Response: Get Single Participant (Non-existent participant id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Participant


Update participant identified by participant id. Permission: Admin/Owner/Private.

Field rules: 
At least one field must be updated. 
joined_on - Valid SQL datetime.
end_on - Valid SQL datetime.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/participants/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Participant (403 Forbidden - Non-admin, non-listing owner and not updating self)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### I. Example Response: Update Participant (403 Forbidden - Non-admin, non-listing owner and not updating self)
```js
{
    "success": false,
    "error": "Not authorised to update other participants in this listing"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Update Participant (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### II. Example Response: Update Participant (200 OK)
```js
{
    "success": true,
    "data": {
        "participant_id": 1,
        "listing_id": 15,
        "user_id": 1,
        "joined_on": "2019-07-17T07:14:05.023Z",
        "end_on": "2020-07-17T07:14:05.023Z"
    }
}
```


***Status Code:*** 200

<br>



##### III. Example Request: Update Participant (404 Not Found - Non-existent participant id)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"joined_on": "2019-07-17 15:14:05.023357+08",
	"end_on": "2020-07-17 15:14:05.023357+08"
}
```



##### III. Example Response: Update Participant (404 Not Found - Non-existent participant id)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



## Send Email
Send email endpoints.



### 1. Send email


Send email to a single recipient with optional cc of sender's email. Permission: Public.

Field rules: 
All fields required unless otherwise stated. 
receiverEmail - Valid email address.
senderEmail - Valid email address. Optional.
subject - Valid text.
message - Valid text.



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/send-email
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



## Skills
Skills CRUD functionality.



### 1. Create Skill


Create skill. Permission: Admin.

Field rules:
All fields required unles otherwise stated.
skill - Non-empty string with alphabets and spaces only.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/skills
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Powerpoint",
	"skill_group": "Microsoft Office Tools",
    "skill_description": "Proficient in Microsoft Office apps"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create Skill (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Powerpoint"
}
```



##### I. Example Response: Create Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create Skill (400 Bad Request - Non-alphabet or non-whitespace character in field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "$ making"
}
```



##### II. Example Response: Create Skill (400 Bad Request - Non-alphabet or non-whitespace character in field)
```js
{
    "success": false,
    "error": "Please include a valid skill with alphabets and spaces only."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create Skill (201 Created)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Powerpoint",
	"skill_group": "Microsoft Office Tools"
}
```



##### III. Example Response: Create Skill (201 Created)
```js
{
    "success": true,
    "data": {
        "skill_id": 16,
        "skill": "Microsoft Powerpoint",
        "skill_group": "Microsoft Office Tools"
    }
}
```


***Status Code:*** 201

<br>



### 2. Delete Skill


Delete skill identified by skill id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/skills/1
```



***More example Requests/Responses:***


##### I. Example Request: Delete Skill (403 Forbidden - Non-admin user)



##### I. Example Response: Delete Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete Skill (200 OK)



##### II. Example Response: Delete Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "cDNA"
    }
}
```


***Status Code:*** 200

<br>



##### III. Example Request: Delete Skill (400 Bad Request - Non-existent skill)



##### III. Example Response: Delete Skill (400 Bad Request - Non-existent skill)
```js
{
    "success": false,
    "error": "Skill does not exist"
}
```


***Status Code:*** 400

<br>



### 3. Get All Skills


Get all skills. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/skills
```



***More example Requests/Responses:***


##### I. Example Request: Get All Skills (200 OK)



##### I. Example Response: Get All Skills (200 OK)
```js
{
    "success": true,
    "count": 25,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 25
        }
    },
    "data": [
        {
            "skill_id": 1,
            "skill": "cDNA"
        },
        {
            "skill_id": 2,
            "skill": "Typesetting"
        },
        {
            "skill_id": 3,
            "skill": "Biochemistry"
        },
        {
            "skill_id": 4,
            "skill": "WiFi"
        },
        {
            "skill_id": 5,
            "skill": "Siebel"
        },
        {
            "skill_id": 6,
            "skill": "JTAPI"
        },
        {
            "skill_id": 7,
            "skill": "Oilfield"
        },
        {
            "skill_id": 8,
            "skill": "Kindergarten"
        },
        {
            "skill_id": 9,
            "skill": "Aerospace Manufacturing"
        },
        {
            "skill_id": 10,
            "skill": "Mortgage Banking"
        },
        {
            "skill_id": 11,
            "skill": "Swim Instruction"
        },
        {
            "skill_id": 12,
            "skill": "Atomic Absorption"
        },
        {
            "skill_id": 13,
            "skill": "Game Design"
        },
        {
            "skill_id": 14,
            "skill": "CFI"
        },
        {
            "skill_id": 15,
            "skill": "Gas Turbines"
        },
        {
            "skill_id": 16,
            "skill": "ICU"
        },
        {
            "skill_id": 17,
            "skill": "Nintendo DS"
        },
        {
            "skill_id": 18,
            "skill": "IoC"
        },
        {
            "skill_id": 19,
            "skill": "Econometrics"
        },
        {
            "skill_id": 20,
            "skill": "HBSS"
        },
        {
            "skill_id": 21,
            "skill": "Obstetrics"
        },
        {
            "skill_id": 22,
            "skill": "NDF"
        },
        {
            "skill_id": 23,
            "skill": "Equity Research"
        },
        {
            "skill_id": 24,
            "skill": "BMI"
        },
        {
            "skill_id": 25,
            "skill": "Fund Of Funds"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get Single Skill


Get single skill. Permission: Public.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/skills/1
```



***More example Requests/Responses:***


##### I. Example Request: Get Single Skill (200 OK)



##### I. Example Response: Get Single Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "cDNA"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get Single Skill (404 Not Found - Invalid skill ID)



##### II. Example Response: Get Single Skill (404 Not Found - Invalid skill ID)
```js
{
    "success": false,
    "error": "Resource not found"
}
```


***Status Code:*** 404

<br>



### 5. Update Skill


Update skill identified by skill id. Permission: Admin.

Field rules: 
At least one field must be updated.
skill - Non-empty string with alphabets and spaces only.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/skills/1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word",
	"skill_group": "Microsoft Suite",
    "skill_description": "Microsoft suite of apps"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update Skill (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word"
}
```



##### I. Example Response: Update Skill (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Update Skill (400 Bad Request - Non-alphabet or non-whitespace in field)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "#programming"
}
```



##### II. Example Response: Update Skill (400 Bad Request - Non-alphabet or non-whitespace in field)
```js
{
    "success": false,
    "error": "Please include a valid skill with alphabets and spaces only."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Update Skill (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"skill": "Microsoft Word",
	"skill_group": "Microsoft Suite",
    "skill_description": "Microsoft suite of apps"
}
```



##### III. Example Response: Update Skill (200 OK)
```js
{
    "success": true,
    "data": {
        "skill_id": 1,
        "skill": "Microsoft Word",
        "skill_group": "Microsoft Suite",
        "skill_description": "Microsoft suite of apps"
    }
}
```


***Status Code:*** 200

<br>



## Users
Users CRUD functionality.



### 1. Create User


Create user and user profile. Permission: Admin.

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
URL: {{URL}}/api/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Con",
	"last_name": "Jobs",
	"email": "Con@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Create User (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Con",
	"last_name": "Jobs",
	"email": "Con@gmail.com",
	"password": "123456"
}
```



##### I. Example Response: Create User (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Create User (400 Bad Request - Duplicate email)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Con",
	"last_name": "Jobs",
	"email": "Con@gmail.com",
	"password": "123456"
}
```



##### II. Example Response: Create User (400 Bad Request - Duplicate email)
```js
{
    "success": false,
    "error": "Duplicate field value entered: Key (email)=(con@gmail.com) already exists."
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Create User (400 Bad Request - Invalid email)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Con",
	"last_name": "Jobs",
	"email": "Congmail.com",
	"password": "123456"
}
```



##### III. Example Response: Create User (400 Bad Request - Invalid email)
```js
{
    "success": false,
    "error": "Please include a valid email."
}
```


***Status Code:*** 400

<br>



##### IV. Example Request: Create User (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Con",
	"last_name": "Jobs",
	"email": "Con@gmail.com",
	"password": "123456"
}
```



##### IV. Example Response: Create User (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "user_id": "ff5d84ad-a346-403e-8a14-761af7842b16",
            "first_name": "Con",
            "last_name": "Jobs",
            "email": "con@gmail.com",
            "password": "$2a$10$tdPLAiR7Pq9wBGp930dNKu4DYsJIRyZQXJH5Oxh7iwU4S6hUqn20W",
            "role": "user"
        },
        {
            "user_id": "ff5d84ad-a346-403e-8a14-761af7842b16",
            "nickname": "Con Jobs",
            "profile_picture": null,
            "about": null,
            "gender": "u",
            "dob": null,
            "interest": null,
            "phone": null,
            "facebook_link": null,
            "twitter_link": null,
            "instagram_link": null,
            "linkedin_link": null,
            "is_verified": false,
            "created_on": "2020-08-17T16:00:35.825Z"
        }
    ]
}
```


***Status Code:*** 201

<br>



### 2. Delete User


Delete user identified by user id. Permission: Admin.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/users/2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb
```



***More example Requests/Responses:***


##### I. Example Request: Delete User (403 Forbidden - Non-admin user)



##### I. Example Response: Delete User (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Delete User (400 Bad Request - Non-existent user)



##### II. Example Response: Delete User (400 Bad Request - Non-existent user)
```js
{
    "success": false,
    "error": "User does not exist"
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Delete User (200 OK)



##### III. Example Response: Delete User (200 OK)
```js
{
    "success": true,
    "data": [
        {
            "user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "first_name": "Konstance",
            "last_name": "Smitton",
            "email": "ksmitton4@toplist.cz",
            "password": "$2a$10$p32UqwhrsXNlNsVWZqnln.QFc5ru8ZWpnPiWb5AKlDBETfLh6ZGIO",
            "role": "user"
        },
        {
            "user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
            "nickname": "Konstance Smitton",
            "profile_picture": "https://robohash.org/quodprovidenta.png?size=500x500&set=set1",
            "about": "Front-line non-volatile conglomeration",
            "gender": "o",
            "dob": "1996-04-04T12:05:06.000Z",
            "interest": "Software Engineer II",
            "phone": "84677316",
            "facebook_link": "http://51.la/dui/maecenas/tristique/est.json",
            "twitter_link": "https://mozilla.com/sagittis.jsp",
            "instagram_link": "http://vk.com/cubilia.html",
            "linkedin_link": "https://bravesites.com/ut/mauris/eget/massa.jpg",
            "is_verified": false,
            "created_on": "2020-08-17T16:26:09.389Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. Get All Likes for a User


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



### 4. Get All Listing Comments for a User


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



### 5. Get All Listing Participation for a User


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



### 6. Get All Listings Owned by a User


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



### 7. Get All Users


Get all user details. Permission: Admin.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| page | 1 |  |
| limit | 30 |  |
| sort | user_id desc |  |
| role | user |  |



***More example Requests/Responses:***


##### I. Example Request: Get All Users (403 Forbidden - Non-admin user)



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| page | 1 |  |
| limit | 30 |  |
| select | user_id,first_name,email |  |
| sort | user_id,first_name |  |
| role | user |  |



##### I. Example Response: Get All Users (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Get All Users (200 OK)



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| page | 1 |  |
| limit | 30 |  |
| select | user_id,first_name,email |  |
| sort | user_id,first_name |  |
| role | user |  |



##### II. Example Response: Get All Users (200 OK)
```js
{
    "success": true,
    "count": 30,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 30
        }
    },
    "data": [
        {
            "user_id": 2,
            "first_name": "Kristi",
            "email": "krowson1@illinois.edu"
        },
        {
            "user_id": 3,
            "first_name": "Orbadiah",
            "email": "ofouracre2@google.ru"
        },
        {
            "user_id": 4,
            "first_name": "Orel",
            "email": "orobbert3@reverbnation.com"
        },
        {
            "user_id": 5,
            "first_name": "Zilvia",
            "email": "zcove4@smugmug.com"
        },
        {
            "user_id": 6,
            "first_name": "Jessy",
            "email": "jvan5@vistaprint.com"
        },
        {
            "user_id": 7,
            "first_name": "Marcela",
            "email": "mjosskoviz6@yahoo.co.jp"
        },
        {
            "user_id": 8,
            "first_name": "Brandi",
            "email": "bmariaud7@google.ca"
        },
        {
            "user_id": 9,
            "first_name": "Del",
            "email": "dbuddell8@telegraph.co.uk"
        },
        {
            "user_id": 10,
            "first_name": "Amil",
            "email": "awreiford9@reuters.com"
        },
        {
            "user_id": 11,
            "first_name": "Karina",
            "email": "kgringleya@techcrunch.com"
        },
        {
            "user_id": 12,
            "first_name": "Sara",
            "email": "sknivettb@digg.com"
        },
        {
            "user_id": 13,
            "first_name": "Alis",
            "email": "afrischc@theglobeandmail.com"
        },
        {
            "user_id": 14,
            "first_name": "Wrennie",
            "email": "wverrierd@si.edu"
        },
        {
            "user_id": 15,
            "first_name": "Calv",
            "email": "chillinge@constantcontact.com"
        },
        {
            "user_id": 16,
            "first_name": "Lorettalorna",
            "email": "lstellif@discovery.com"
        },
        {
            "user_id": 17,
            "first_name": "Madelena",
            "email": "mdybleg@cocolog-nifty.com"
        },
        {
            "user_id": 18,
            "first_name": "Avis",
            "email": "areasunh@sciencedirect.com"
        },
        {
            "user_id": 19,
            "first_name": "Tiffi",
            "email": "tmatzkaitisi@trellian.com"
        },
        {
            "user_id": 20,
            "first_name": "Jillayne",
            "email": "jgringleyj@e-recht24.de"
        },
        {
            "user_id": 21,
            "first_name": "Godfree",
            "email": "ggraftonk@boston.com"
        },
        {
            "user_id": 22,
            "first_name": "Angie",
            "email": "amccartyl@vimeo.com"
        },
        {
            "user_id": 23,
            "first_name": "Rafaellle",
            "email": "rambersonm@odnoklassniki.ru"
        },
        {
            "user_id": 24,
            "first_name": "Jeannette",
            "email": "jgamblinn@indiatimes.com"
        },
        {
            "user_id": 25,
            "first_name": "Shanan",
            "email": "sjimeso@liveinternet.ru"
        },
        {
            "user_id": 26,
            "first_name": "Bevin",
            "email": "bezelep@twitter.com"
        },
        {
            "user_id": 27,
            "first_name": "Wald",
            "email": "wreddleq@java.com"
        },
        {
            "user_id": 28,
            "first_name": "Tiena",
            "email": "tmossopr@imdb.com"
        },
        {
            "user_id": 29,
            "first_name": "Craig",
            "email": "cfergusons@t-online.de"
        },
        {
            "user_id": 30,
            "first_name": "Thom",
            "email": "tmedleyt@gravatar.com"
        },
        {
            "user_id": 31,
            "first_name": "Wendall",
            "email": "wspencleyu@ezinearticles.com"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 8. Get Single User


Get single user details identified by user id. Permission: Admin.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb
```



***More example Requests/Responses:***


##### I. Example Request: Get Single User (403 Forbidden - Non-admin user)



##### I. Example Response: Get Single User (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Get Single User (200 OK)



##### II. Example Response: Get Single User (200 OK)
```js
{
    "success": true,
    "data": {
        "user_id": 1,
        "first_name": "Don",
        "last_name": null,
        "email": "don@gmail.com",
        "password": "$2a$10$FtDn8uJkPEeiTD2bNxKN4e0z1AaKGHZxHnbC1b7dbiW96aDqsMkhO",
        "role": "admin"
    }
}
```


***Status Code:*** 200

<br>



### 9. Update User


Update user details identified by user id. Permission: Admin.

Field rules: 
At least one field must be updated. 
first_name: Alphabets and whitespaces only. 
last_name: Alphabets and whitespaces only. 
email: Valid email address only. Email address will be canonicalized. 
password: 8-25 characters. At least 1 uppercase character. At least 1 lowercase character. At least 1 special character.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/users/2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Aaron",
	"email": "aaron@gmail.com",
	"password": "Abc1234!"
}
```



***More example Requests/Responses:***


##### I. Example Request: Update User (403 Forbidden - Non-admin user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Aaron",
	"last_name": "Tan",
	"email": "aaron@gmail.com",
	"password": "123456"
}
```



##### I. Example Response: Update User (403 Forbidden - Non-admin user)
```js
{
    "success": false,
    "error": "User role user not authorised to access this route"
}
```


***Status Code:*** 403

<br>



##### II. Example Request: Update User (400 Bad Request - Non-existent user)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"first_name": "Aaron",
	"last_name": "Tan",
	"email": "aaron@gmail.com",
	"password": "123456"
}
```



##### II. Example Response: Update User (400 Bad Request - Non-existent user)
```js
{
    "success": false,
    "error": "User does not exist"
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Update User (200 OK)


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Aaron",
	"email": "aaron@gmail.com",
	"password": "123456"
}
```



##### III. Example Response: Update User (200 OK)
```js
{
    "success": true,
    "data": {
        "user_id": "2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb",
        "first_name": "Konstance",
        "last_name": "Smitton",
        "email": "aaron@gmail.com",
        "password": "$2a$10$9kk5gFohDkTR0iu5Q2EUG./ZvueXKSVIfkCwLmtEFFwwb0ojRKqLO",
        "role": "user"
    }
}
```


***Status Code:*** 200

<br>



---
[Back to top](#kampong-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-10-18 13:14:06 by [docgen](https://github.com/thedevsaddam/docgen)
