Component Structure Overview:

/thoughtstream-frontend
- index.html
- package-lock.json
- package.json
- vite.config.js
- eslint.config.js
- .env
- /node_modules
- /public
- /src
    - main.jsx
    - App.jsx
    - App.css
    - /assets
    - /components
        - DiaryEntryCard.jsx
        - DiaryList.jsx
        - Header.jsx
        - LoginButton.jsx
        - NewEntryForm.jsx
        - PrivateRoute.jsx
        - WeatherWidget.jsx
    - /context
        - AuthContext.jsx
    - /pages
        - Dashboard.jsx
        - Login.jsx
    - /services
        - api.js
    - /styles
        - index.css
    - /utils
        - auth.js
/thoughtstream-backend
- server.js
- package.json
- package-lock.json
- .env
- .env.example
- /node_modules
- /config
    - db.js
- /controllers
    - authController.js
    - diaryController.js
    - weatherController.js
- /middleware
    - authMiddleware.js
- /models
    - DiaryEntry.js
    - User.js
- /routes
    - authRoutes.js
    - diaryRoutes.js
    - weaterRoutes.js

Routing Structure:
/login - The public page that displays the google login button
/dashboard - Protected page that is only visible to the dashboard if authenticated
* - Redirects unknown routes to the dashboard only if the user is authenticated

How to Run Thoughtstream Diary App:

Change directory into the backend and frontend in separate terminals
```bash
cd ../thoughtstream-backend
```
```bash
cd ../thoughtstream-frontend
```

Install the correct dependencies for the backend and frontend
```bash
npm install
```
Then start the backend and frontend afterwards
```bash
npm run dev
```
