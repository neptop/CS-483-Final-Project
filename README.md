# CS-483-Final-Project-Part-1

## Project Overview

ThoughtStream is a digital diary application built with the MERN stack which consists of MongoDB, Express.js, React, Node.js. This project is the backend API for managing diary entries and supporting full CRUD operations.

The user is able to:
- create, read, update, and delete entries
- store data such as tags, locations, reflections
- fetch and store weather data using the OpenWeather API

---

## Setup Instructions

1. Clone the repo
2. Install the dependencies
    C:\Users\yourUser\yourfileLocation\ npm install express mongoose dotenv cors axios
3. Set up environment variables in the .env file
4. Start the server: npm run dev

---

## API Usage Guide

Methods-Endpoints
GET - /
GET - /:id
POST - /
PUT - /:id
DELETE - /:id

Examples:
POST /api/diary
{
  "title": "test",
  "content": "test",
  "location": "Vancouver, US",
  "reflection": "test",
  "tags": ["test", "test"]
}
RESPONSE: 201 Created

POST /api/diary with missing fields:
{
  "title": "",
  "content": "this should fail.",
  "location": ""
}
RESPONSE: 400 Bad Request
{
  "message": "title, content, and location are required."
}

---

## Environment Variables

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/diary-app
PORT=5000
OPENWEATHER_API_KEY=your_openweather_api_key

---



## Extra Credit

No extra credit was done

---

## GIT COMMIT HISTORY
commit 6b413a8c1b2345b61d1bab4dc3106d420f6e4bbd (HEAD -> main, origin/main, origin/HEAD)
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 1 17:52:55 2025 -0700

    updates to .env and diaryController

    fixed mongo_URI
    added temp mongoose object ID that needs to be removed in part 2

commit 722d0b1f41356aeb62ad6d9c56349ba70074310e
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 1 16:35:09 2025 -0700

    Update diaryController.js

    added validation for required fields for createEntry

commit 2abbc16b2cc0c15ddffca754f2fe745f71d68266
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 1 16:34:28 2025 -0700

    weatherController implementation

    - added weatherController.js implementation
    - fixed diaryRoutes

commit f42891e34072bbad63c9da75b014b8984cdeb622
Author: D925301 <davidhoang777@gmail.com>
Date:   Mon Mar 31 18:43:24 2025 -0700

    update to .env

    - added example .env file
    - added weather api

commit 38f28b44276f09fd8299dadf2300219da3eec6df
Author: D925301 <davidhoang777@gmail.com>
Date:   Sun Mar 30 15:18:18 2025 -0700

    Update server.js

    updated to sample server.js

commit 0aac80837201b80b6609ff1501e15faa6a78fb1b
Author: D925301 <davidhoang777@gmail.com>
Date:   Sun Mar 30 15:17:55 2025 -0700

    implemented diaryRoutes.js

    includes implemented routes

commit 62ac47fb6e3df06f8e9671265f11662743ac555c
Author: D925301 <davidhoang777@gmail.com>
Date:   Sun Mar 30 15:17:25 2025 -0700

    added included sample code

    added sample code for:
    - db.js
    - DiaryEntry.js

commit 94c35365e9bf1255d4ba7d5b6707cc0824bf3e38
Author: D925301 <davidhoang777@gmail.com>
Date:   Sun Mar 30 15:16:48 2025 -0700

    json package mongodb

    added mongodb version

commit b3d6bd3376359ae50a366d5dd1007285219e338c
Author: D925301 <davidhoang777@gmail.com>
Date:   Sun Mar 30 15:15:36 2025 -0700

    diaryController.js implementation

    implemented createEntry, updatedEntry, and deleteEntry functions.

commit 0de9e7cbaec8cb3e6d0da5a54605ba29e7d3acde
Author: D925301 <davidhoang777@gmail.com>
Date:   Sat Mar 29 23:08:33 2025 -0700

    init

    adding initial setup

commit 90d88dad971e0702ced696af52db479a6bc017c1
Author: David Hoang <76824635+neptop@users.noreply.github.com>
Date:   Mon Mar 24 01:02:52 2025 -0700

    Initial commit
(END)