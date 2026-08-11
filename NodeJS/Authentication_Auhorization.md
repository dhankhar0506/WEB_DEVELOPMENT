# Authentication

-> Authentication is the process of verifying the identity of a user or system.

---

# Authorization

-> Authorization determines the access rights and permissions of an authenticated user.

-> Authorization determines what an authenticated user has permission to access or perform.

---

# Authentication — Different Ways

1. Email + Password
2. OTP Authentication
3. Social Login
4. Token / JWT Authentication

---

# Authorization — Different Ways

### 1. Role-Based Authorization

* Admin
* Manager
* User

### 2. Ownership-Based Authorization

---

# Put Everything Together

```text
Browser
   ↓
JWT
   ↓
Authentication Middleware
   ↓
Is JWT valid?
   ↓
YES
   ↓
Who?
userId = 123
role = admin
   ↓
Authorization Middleware
   ↓
Can admin create products?
   ↓
YES
   ↓
Controller
   ↓
Create Product
```

---

# What is Cookie?

-> Cookies are small data stored on the client side (browser) as key-value pairs. They are commonly used for session management and user preferences.

-> Cookie is a small piece of data stored by the browser and automatically sent with matching HTTP requests.

### Uses of Cookies

1. Stores user preferences (e.g., theme, language settings)
2. Manage shopping cart data in e-commerce websites.
3. Prefer language.
4. Cookies are also commonly used to carry authentication credentials, such as JWT token and session ID.

---

# What is Session?

-> User-related data stored on the server, usually identified by a session ID kept in a cookie.

-> A session lets the server maintain state associated with a client across multiple HTTP requests.

### Step 1

```text
Email + Password
      ↓
POST /login
      ↓
Express Backend
      ↓
Credentials correct ✅
```

### Session Creation

-> With session-based authentication, the backend creates a session.

```js
Session:
{
    userId: "123",
    role: "admin"
}
```

-> The server stores this session and creates an ID:

```text
Session ID = abc789
```

-> Then server tells the browser to store that ID in a cookie:

```text
Browser Cookie
----------------
sessionId = abc789
```

-> Browser calls:

```text
GET /profile
```

-> The browser automatically sends the matching cookie:

```text
Cookie: sessionId=abc789
```

---

# User Preference

```text
User Login
   ↓
POST /login
   ↓
Backend verifies email + password
   ↓
Authentication successful ✅
   ↓
Create session
   ↓
Send session ID as cookie
   ↓
Get user's saved preferences from DB
   ↓
Return user + preferences
```

---

# After Authentication, Who Stores the Cookie?

-> Usually the server tells the browser to store it.

-> Then `express-session` sends an HTTP response header similar to:

-> The browser receives this header and stores the cookie automatically.

---

# User Data — MongoDB

```js
{
    _id: "user10",
    name: "Gourav",
    email: "...",
    password: "<hashed>",
    role: "student"
}
```

---

# Complete Flow

* **MongoDB** → Permanent user data
* **Redis** → Temporary session data
* **Cookie** → Session ID in browser

---

# 1. User Registers

```js
{
    email: "gourav@gmail.com",
    password: "123456"
}
```

### Request to Backend

```text
Frontend
   ↓
POST /register
   ↓
Express
   ↓
Validate data
   ↓
Hash password using bcrypt
   ↓
MongoDB
```

### MongoDB

```js
{
    _id: "USER10",
    name: "Gourav",
    email: "gourav@gmail.com",
    password: "$2b$...",
    role: "student"
}
```

---

# 2. Backend Finds User in MongoDB

---

# 3. MongoDB Returns

```js
{
    _id: "USER10",
    email: "gourav@gmail.com",
    password: "$2b$...",
    role: "student"
}
```

---

# 4. Backend Verifies Password

```text
Entered password
      ↓
bcrypt.compare()
      ↓
Stored bcrypt hash
      ↓
    Match?
   /       \
 NO         YES
 ↓           ↓
401      Authenticated ✅
```

---

# 5. Create Session

```js
req.session.userId = user._id;
req.session.role = user.role;
```

---

# 6. Session is Stored in Redis

---

# 7. Session ID is Sent to Browser

-> The server response includes a cookie header similar to:

```text
Set-Cookie: connect.sid=<signed session identifier>
```

-> Browser automatically stores it:

```js
cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000
}
```

---

# Login Response

```js
res.status(200).json({
    success: true,

    user: {
        id: user._id,
        name: user.name,
        role: user.role,
        preferences: user.preferences
    }
});
```

### HTTP Response

```text
HTTP RESPONSE
│
├── Header
│     Set-Cookie: connect.sid=...
│
└── Body
      {
          user: {...}
      }
```

---

# Login Flow

```text
Frontend
   ↓
email + password
   ↓
POST /login
   ↓
Express
   ↓
MongoDB
   ↓
Find User
   ↓
bcrypt.compare()
   ↓
Authenticated ✅
   ↓
Create Session
   ↓
Session ID = ABC123
   ↓
        ┌─────────────────────┐
        │        Redis        │
        │                     │
        │ ABC123 → {          │
        │   userId: USER10,   │
        │   role: student     │
        │ }                   │
        └─────────────────────┘
                 ↓
        Server sends Set-Cookie
                 ↓
        ┌─────────────────┐
        │     Browser     │
        │                 │
        │ Cookie          │
        │ sessionId=...   │
        └─────────────────┘
```

---

# Next Request

```text
Browser
   ↓
GET /profile
   ↓
Session Cookie automatically sent
   ↓
Express
   ↓
express-session
   ↓
Redis
   ↓
Session ID exists? ─── NO → 401
   ↓ YES
Get userId
   ↓
Authentication successful
   ↓
MongoDB (if full/current user data needed)
   ↓
Get User
   ↓
Controller
   ↓
Response
```

---

# What is a Token?

-> A token is a credential/string given to the client after successful authentication.

-> The client sends it with future requests so the server can authenticate/authorize the request without asking for the password again.

-> Tokens provide another way of carrying authentication information/credentials between client and server.

---

# JWT = JSON Web Token

-> JWT is a signed token that the server creates after login.

-> On future requests, the server verifies the token's signature and expiry to check authentication without needing a server-side session lookup.

```text
JWT = Header.Payload.Signature
```

### Creating JWT

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        userId: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "15m"
    }
);
```

---

# JWT Structure

## Part 1 — Header

-> Header contains information about the token itself.

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

---

## Part 2 — Payload

```json
{
    "userId": "123",
    "role": "student",
    "iat": 1786030000,
    "exp": 1786030900
}
```

---

## Part 3 — JWT Secret Key

-> `jwt_secret_key` is stored in the backend.

---

# How to Verify JWT

### Client Sends JWT

```text
HEADER.PAYLOAD.SIGNATURE
        ↓
Server receives it
        ↓
Separates:
Header
Payload
Received Signature
        ↓
Uses:
Header + Payload + JWT_SECRET
        ↓
Same signing algorithm
        ↓
Calculates expected signature
        ↓
Expected Signature
        VS
Received Signature
        ↓
Match? ✅
        ↓
Check expiry
        ↓
Token valid
        ↓
Authenticated ✅
```
