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
Then start the backend and frontend like so,
```bash
npm run dev
```
Head to
```
http://localhost:5173/
```
There, you will be prompted to Sign in with Google:
<p align="left">
  <img
    src="https://github.com/user-attachments/assets/3af18db0-8369-4022-85b4-eb06b7cdd798"
    alt="Dashboard screenshot"
    width="400"
  />
</p>
<p align="left">
  <img
    src="https://github.com/user-attachments/assets/84aae129-ce1b-43e8-b620-a88c6c5137ea"
    alt="Login page screenshot"
    width="400"
  />
</p>
After logging in, you will be redirected to the dashboard where you can write a diary entry.
<p align="left">
  <img
    src="https://github.com/user-attachments/assets/06097ab6-1a10-4a3c-947b-2683d5e6d476"
    alt="Login page screenshot"
    width="400"
  />
</p>
After saving an entry, it will show up in the diary entry list below.
The weather widget at the top of the page will display the weather of the location of the latest entry.
<p align="left">
  <img
    src="https://github.com/user-attachments/assets/c91a6d8b-5400-4e48-a2e2-93b7b562d35e"
    alt="Login page screenshot"
    width="400"
  />
</p>
An entry without a location will not display a place or any weather statistics.
<p align="left">
  <img
    src="https://github.com/user-attachments/assets/df5a123b-54fc-4d3b-a496-e9504461971f"
    alt="Login page screenshot"
    width="400"
  />
</p>

