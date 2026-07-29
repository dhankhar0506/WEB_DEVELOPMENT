- git status
- git add .
- git commit -m "Added JavaScript notes"
- git push

# What is Frontend?

## Definition
Frontend is the part of an application that **users can see and interact with** in the browser. It is responsible for **displaying the User Interface (UI)** and **handling user interactions**.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML** | Provides the structure of the webpage |
| **CSS** | Adds styling and improves appearance |
| **JavaScript** | Adds functionality and interactivity |
| **React.js** | Builds dynamic and reusable User Interfaces |

### Amazon Website
The following components are part of the **Frontend**:
- 🔍 Search Bar
- 📦 Product Cards
- 🛒 Add to Cart Button
- 👤 Login Page
Everything that users **see and interact with** on the screen is part of the **Frontend**.

## Key Points

- Frontend = Client Side
- Runs in the user's browser
- Handles UI and user interactions
- Built using **HTML, CSS, JavaScript, and React.js**
- Communicates with the Backend through APIs

------------------------------------------------------------------------------------------------------------------------

# What is Backend?
Backend is the **server-side** part of an application. It contains the **business logic**, processes client requests, communicates with the database, and sends data back to the frontend.

## Responsibilities of Backend
- Process client requests
- Execute business logic
- Communicate with the database
- Authenticate and authorize users
- Send responses back to the frontend
- Handle data validation and security


## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime used to build server-side applications |
| **Express.js** | Web framework for creating APIs and handling routes |
| **MongoDB** | NoSQL database used to store application data |
| **JWT (JSON Web Token)** | Used for user authentication and authorization |
| **REST APIs** | Allow communication between the frontend and backend |


### Real Example:  Instagram Login

### Frontend

The frontend displays:

- 📧 Email Input
- 🔒 Password Input
- 🔘 Login Button

### Backend

When the user clicks the **Login** button, the backend:

1. Receives the login request from the frontend.
2. Checks whether the email exists in the database.
3. Verifies whether the password is correct.
4. Generates a **JWT (JSON Web Token)** if the credentials are valid.
5. Sends a **Success** or **Failure** response back to the frontend.


## Backend Flow
User Clicks Login
        │
        ▼
Frontend Sends Request
        │
        ▼
Backend Receives Request
        │
        ▼
Check Email in Database
        │
        ▼
Verify Password
        │
        ▼
Generate JWT Token
        │
        ▼
Send Response to Frontend
        │
        ▼
Frontend Shows Success or Error Message

## Key Points

- Backend = Server Side
- Handles business logic
- Processes client requests
- Communicates with the database
- Performs authentication and authorization
- Sends responses to the frontend using APIs
- Common technologies: **Node.js, Express.js, MongoDB, JWT, REST APIs**