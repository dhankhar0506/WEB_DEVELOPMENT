## Authentication
-> Authentication is the process of verifying the identity of a user or system

## Authorization
Authorization determines the access rights and permissions of an authenticated user
-> Authorization determines what an authenticated user has permission to access or perform.

## Authentication — Different Ways
1. Email + Password
2. OTP Authentication
3. Social Login
4. Token / JWT Authentication

## Authorization — Different Ways
1. Role-Based Authorization
    Admin
    Manager
    User
2. Ownership-Based Authorization

## Put everything together
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

## What is Cookie
->Cookies are small data stored on the client side (browser) as key-value pairs. They are commonly used for session management, user preference.
-> Cookie is a small piece of data stored by the browser and automatically sent with matching HTTP requests.
1. Stores user preferences (e.g., theme, language settings)
2. Manage shopping cart data in e-commerce websites.
3. prefer language 
4. Cookies are also commonly used to carry authentication credentials, such as:JWT token and session iD

## what is Session?
-> user-related data stored on the server, usually identified by a session ID kept in a cookie.
->A session lets the server maintain state associated with a client across multiple HTTP requests.


> Step1: 
    Email + Password
        ↓
    POST /login
        ↓
    Express Backend
        ↓
    Credentials correct ✅

> With session-based authentication, the backend creates a session
    Session:
        {
            userId: "123",
            role: "admin"
        }
    -> The server stores this session and creates an ID:
        -> Session ID = abc789

    -> Then server tells the browser to store that ID in a cookie:
        Browser Cookie
        ----------------
        sessionId = abc789
    
    -> Browser calls: GET /profile
    ->The browser automatically sends the matching cookie:
        -> Cookie: sessionId=abc789

## user prefernce
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


## After authentication, who stores the cookie?
-> Usually the server tells the browser to store it.
-> Then express-session sends an HTTP response header similar to
-> The browser receives this header and stores the cookie automatically.
USER DATA — MongoDB

{
   _id: "user10",
   name: "Gourav",
   email: "...",
   password: "<hashed>",
   role: "student"
}


##  Complete flow
- MongoDB → Permanent user data
- Redis   → Temporary session data
- Cookie  → Session ID in browser

>1. User registers
    {
      email: "gourav@gmail.com",
    password: "123456"  
    }

> Reques to Backend  
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
> Mongo DB
{
   _id: "USER10",
   name: "Gourav",
   email: "gourav@gmail.com",
   password: "$2b$...",
   role: "student"
}

> 2. Backend finds user in MongoDB

>3. MongoDB returns:
        {
        _id: "USER10",
        email: "gourav@gmail.com",
        password: "$2b$...",
        role: "student"
        }
>4. Backend verifies password
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

>5. Create Session
    req.session.userId = user._id;
    req.session.role = user.role;

>6. Session is stored in Redis
>7. Session ID is sent to browser
    -> The server response includes a cookie header similar to:
    -> Set-Cookie: connect.sid=<signed session identifier>
    -> Browser automatically stores it:
        cookie: {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }
> Login response
    res.status(200).json({
        success: true,

        user: {
            id: user._id,
            name: user.name,
            role: user.role,
            preferences: user.preferences
        }
    });

    HTTP RESPONSE
    │
    ├── Header
    │     Set-Cookie: connect.sid=...
    │
    └── Body
        {
            user: {...}
        }


## diagram 
>LOGIN

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
                │       Redis         │
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


>  NEXT REQUEST

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

## What is a Token?

-> A token is a credential/string given to the client after successful authentication. The client sends it with future requests so the server can authenticate/authorize the request without asking for the password again.
-> Tokens provide another way of carrying authentication information/credentials between client and server.

## JWT = JSON Web Token
-> JWT is a signed token that the server creates after login. On future requests, the server verifies the token's signature and expiry to check authentication without needing a server-side session lookup.
> JWT = Header.Payload.Signature
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
    - Header contains information about the token itself.
        {
            "alg": "HS256",
            "typ": "JWT"
        }
    - Payload => 
        ->
            {
                "userId": "123",
                "role": "student",
                "iat": 1786030000,
                "exp": 1786030900
            }
    - Part 3 — jwt_secret_key(stored in backend)

## how to verify 
    Client sends JWT:

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