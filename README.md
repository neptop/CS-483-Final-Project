# CS-483-Final-Project-Part-2

## 1. Overview

The goal for ThoughtStream part 2 is to implement user authentication using Google OAuth 2.0 and use session-based login

Session-based authentication was implemented as it's ideal when the current setup is backend-only as using postman we're able to manage session cookies.
Once the frontend is implemented we'll switch to JWT-based authentication for useability with React since it can't use server-side sessions.

The packages used:
- passport, it's used to handle user authentication and login state
- passport-google-oauth20, it's used by passport to use google OAuth2.0
- express-session, it's used to store session data on the server and send session IDs via cookies to the client
- mongoose, it's used for managing app data with MongoDB
- dotenv, it's used to load the environment variables from the .env

The middleware used:
- cookie-parser, it parses cookies from http requests to read session data with express-session
- ensureAuthenticated, it checks if the user is logged in prior to accessing routes

---

## 2. Google Cloud Console Workflow
1. Go to the google cloud console
2. Login with google account
3. Sign up for free trial
4. Create a new project
5. Go to APIs & Services and then Credentials
6. Create a client ID
7. List application type as web applicatoin then set the authorized redirect URI to "http://localhost:5000/auth/google/callback"
8. Copy the client id and client secret to the .env

OAuth2.0 allows users to login to an app using an exisitng profile and credentials from google without sharing passwords.

---

## 3. Authentication Flow Description
1. The user goes to the google authentication page which is /auth/google
2. If the user has multiple accounts it'll ask the user to choose an account
3. It asks the user for consent
4. After the user consents it will redirect the user to /auth/google/callback where it'll display a successful login message

---

## 4. Envrionment Variables
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/diary-app
PORT=5000
OPENWEATHER_API_KEY=your_openweather_api_key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
SESSION_SECRET=yourkey123

---

## 5. Mongoose Models Schema Changes
Theres the user model that is used to store authenticated users into the database where each new user will have a new user created. It contains
the googleID which is a unique ID from google, the name, email, and picture are all info provided by google. Then the time state includes createdAt and updatedAt.
The diaryEntry model refer to each other with ref: "User" where it tells that the objectID points to a document in the User model. The model sure every diary entry is associated with it's specificed user and that the user is authenticated.

---

## 6. Mongoose Models Schema Changes
The routes are protected using the ensureAuthenticated function, it checks if the user has a current active session and if the session is authenticated.
The ensureAuthenticated function checks if req.isAuthenticated is true, if it's false like when the user is not authenticated it blocks the request with a 401 response.
It's used in diaryRoutes.js and is applied to all of the diary routes

--- 

## 7. Logout Routes
The logout feature was implemented using Passport's req.logout() method where it removes the req.user and ends the current session. If there's an error during logout it sounds
a 500 response. 
The route used is GET /auth/logout.
When the user logs out the session is removed on the server, the connect.sid cookie becomes invalid, then req.user is cleared.

## 8. Testing Strategies
1. Start the server with npm run dev
2. In a browser visit http://localhost:5000/auth/google
3. Log into your google account
4. You will be redirected to http://localhost:5000/auth/google/callback
5. Right-click the page, inspect
6. Go to the application tab
7. Under cookies select the value of the connect.sid cookie
8. Copy the value
9. Open Postman App
10. Select cookies tab which is located under the send button
11. Name the doman localhost
12. Change Cookie1 to connect.sid
13. Change value with the cookie value
14. Click save
15. Send a get request to http://localhost:5000/api/diary
16. If the cookie is missing or incorrectly added you will get a 401 code: "message": "Unauthorized"

---

## 9. Known Issues or Future Improvements
When signing up to google cloud console I was asked to start a free trial in which I had to provide a card for it to charge. When asked
how I was using the service school was not listed as an option nor was student when asked what I am. 

---

## Setup Instructions

1. Install the dependencies
    C:\Users\yourUser\yourfileLocation\ npm install express mongoose dotenv cors axios
2. Set up environment variables in the .env file
3. Start the server: npm run dev

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

commit 89687e854f2e229f6721bb70012a00398e9af56d (HEAD -> main, origin/main, origin/HEAD)
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 8 16:36:44 2025 -0700

    Update diaryRoutes.js

commit ddb4c3a5dcac1ead1663190a0b1e11939651cda7
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 8 16:36:43 2025 -0700

    Update diaryController.js

commit 9405e9fabd440a5788678ae32f2fef7ec24d4abd
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 8 16:36:40 2025 -0700

    Create authMiddleware.js

commit 6329b4aea009f3b49a8cea67336f252d80be64f8
Author: D925301 <davidhoang777@gmail.com>
Date:   Tue Apr 8 16:36:37 2025 -0700

    update to .env

commit 9324a139503b7fd80478571dc68b71390690b863
Author: D925301 <davidhoang777@gmail.com>
Date:   Mon Apr 7 19:50:16 2025 -0700

    Update authRoutes.js
(END)

