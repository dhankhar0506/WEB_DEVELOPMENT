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


-------------------------------------------------------------------------------------------------------------------------

# What is a Client?

## Definition

A **Client** is a device or application that **requests data or services** from a server.
> **A Client is a device or application that requests data or services from a server. It provides the user interface, collects user input, sends HTTP requests to the server, receives responses, and displays the data to the user. Examples include web browsers, mobile applications, React applications, and Postman.**

## Examples of Clients
- 🌐 Chrome Browser
- 📱 Mobile Application
- ⚛️ React Application
- 📬 Postman

All these applications send requests to a server and display the response to the user.

## Responsibilities of a Client

- Displays the User Interface (UI)
- Takes user input
- Sends requests to the server
- Receives responses from the server
- Displays the received data to the user
-

## Key Points

- Client = Request Sender
- Runs on the user's device
- Displays the UI
- Sends HTTP requests
- Receives and displays server responses

------------------------------------------------------------------------------------------------------

# What is a Server?

## Definition

A **Server** is a computer or application that **receives client requests, processes them, and sends back a response**.
> **A Server is a computer or application that receives requests from clients, processes them using business logic, communicates with the database, and sends the appropriate response back to the client. In the MERN stack, the server is commonly built using Node.js and Express.js.**

## Technologies Used in MERN

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime used to build the server |
| **Express.js** | Framework used to create APIs and handle routes |
## Responsibilities of a Server

- Receives requests from clients
- Processes business logic
- Communicates with the database
- Authenticates users
- Performs CRUD operations
- Sends responses back to the client


 
## Real Example

### User Login

When a user clicks the **Login** button:

1. The client sends the email and password to the server.
2. The server checks if the email exists.
3. The server verifies the password.
4. The server generates a JWT token (if valid).
5. The server sends a success or failure response back to the client.


------------------------------------------------------------------------------------------------------


# 
# Website Request Flow (MERN Interview Notes)

## Complete Flow

```text
User
   │
   ▼
Enter URL (www.google.com)
   │
   ▼
Browser
   │
   ▼
DNS
(Domain → IP Address)
   │
   ▼
Frontend Server
(Vercel / Netlify)
   │
Downloads HTML, CSS, JS
   │
   ▼
React Application
   │
User Action (Login)
   │
HTTPS Request
POST /login
   │
   ▼
Backend Server
(Node.js + Express)
   │
Business Logic
   │
   ▼
MongoDB
   │
Fetch / Save Data
   │
   ▼
JSON Response
   │
   ▼
React Updates UI
```

---

# Step-by-Step Flow

### 1. Browser
- User enters URL.
- Browser starts the request.

### 2. DNS
- Converts **Domain Name → IP Address**.

Example:

```text
google.com
      ↓
142.xxx.xxx.xxx
```

### 3. Frontend Server

Returns static files:

```text
index.html
main.js
style.css
images
```

Browser downloads and renders them.

### 4. User Action

User fills the login form.

```text
Email
Password
```

Data stays in React state until Login is clicked.

### 5. HTTPS Request

Frontend sends request.

```http
POST https://api.xyz.com/login
```

### 6. Backend

Node.js + Express:

- Validates request
- Executes business logic
- Calls database

### 7. Database

MongoDB stores:

- Users
- Products
- Orders
- Payments

### 8. Response

Backend returns:

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

### 9. Browser

React:

- Stores JWT
- Updates UI
- Opens Dashboard

---

# Where is Everything Stored?

| Component | Stored On | Examples |
|-----------|-----------|----------|
| Frontend | Web Server / CDN | Vercel, Netlify, AWS S3 |
| Backend | Application Server | Render, Railway, AWS EC2 |
| Database | Database Server | MongoDB Atlas, MySQL, PostgreSQL |

---

# HTTP vs HTTPS

| HTTP | HTTPS |
|------|--------|
| Not Secure | Secure |
| Port 80 | Port 443 |
| Plain Text | Encrypted |
| No SSL | SSL/TLS |

---

# API

## Definition

API (Application Programming Interface) is an interface provided by the backend that exposes specific services.

Examples:

```http
POST   /login
POST   /register
GET    /products
POST   /orders
DELETE /orders/:id
```

---

# HTTP/HTTPS vs API

| HTTP/HTTPS | API |
|------------|-----|
| Communication Protocol | Endpoint / Service |
| Defines **How** data travels | Defines **What** operation is performed |
| Transfers Requests & Responses | Executes Business Logic |

---

# Easy Formula

```text
HTTP/HTTPS → How?
API         → Where?
Backend     → Who?
Database    → What?
```

---

# Important Points

- Browser downloads only Frontend files.
- Backend code never reaches the browser.
- Browser never talks directly to MongoDB.
- Frontend communicates with Backend APIs.
- Backend communicates with Database.
- Backend returns JSON.
- React updates the UI.

---

# 30-Second Interview Answer

> When a user enters a URL, the browser uses DNS to convert the domain name into an IP address and downloads the frontend files from a web server. When the user performs an action like login, React sends an HTTPS request to a backend API. The backend processes the request, communicates with MongoDB if required, and returns a JSON response. React then updates the UI based on the response.

---

# Frequently Asked Interview Questions

### What is DNS?
Converts a domain name into an IP address.

### What is HTTP?
Protocol used for communication between client and server.

### What is HTTPS?
Secure version of HTTP using SSL/TLS encryption.

### What is an API?
An interface provided by the backend that exposes specific services.

### Where is React stored?
Web Server/CDN (Vercel, Netlify, AWS S3).

### Where is Backend stored?
Application Server (Render, Railway, AWS EC2).

### Where is MongoDB stored?
Database Server (MongoDB Atlas).

### Can Browser access MongoDB directly?
No. Browser → Backend → Database.

### What does Backend return?
Usually a JSON response.

---

# One-Line Revision

- DNS → Domain → IP
- Browser downloads Frontend
- React sends HTTPS Request
- API receives Request
- Backend processes Request
- MongoDB stores Data
- Backend returns JSON
- React updates UI


------------------------------------------------------------------------------------------------------

# Port (Interview Notes)

## Definition

A **Port** is a **logical (virtual) communication endpoint** identified by a **port number**. It helps the **Operating System (OS)** deliver incoming network requests to the correct **application or service** running on a computer.

> **Simple:** IP Address finds the **computer (server)**, while the **Port** finds the **application** running on that computer.

---

# Why Do We Need Ports?

A single server can run multiple applications at the same time.

Examples:

- Web Server
- Node.js Backend
- MySQL Database
- MongoDB Database

Ports help the Operating System identify **which application should receive the request**.

---

# How Ports Work

```text
Client Request
      │
      ▼
IP Address
(Finds the Server)
      │
      ▼
Port Number
(Finds the Application)
      │
      ▼
Operating System
      │
      ▼
Correct Application
```

---

# Easy Analogy

```text
Building Address  → IP Address
Room Number       → Port
Person in Room    → Application
```

Example:

```text
IP Address : 192.168.1.10
Port       : 5000

↓

192.168.1.10:5000
```

The IP finds the **server**, and Port **5000** finds the **Node.js application**.

---

# Most Common Ports (Interview)

| Port | Protocol / Service | Purpose |
|------|---------------------|---------|
| **20, 21** | FTP | File Transfer |
| **22** | SSH | Secure Remote Login |
| **23** | Telnet | Remote Login (Unsecured) |
| **25** | SMTP | Sending Emails |
| **53** | DNS | Domain Name Resolution |
| **80** | HTTP | Unsecured Web Traffic |
| **110** | POP3 | Receiving Emails |
| **143** | IMAP | Email Access & Synchronization |
| **443** | HTTPS | Secure Web Traffic |
| **3306** | MySQL | MySQL Database |
| **5432** | PostgreSQL | PostgreSQL Database |
| **6379** | Redis | In-Memory Cache |
| **8080** | HTTP Alternate | Web Servers / Tomcat |
| **27017** | MongoDB | MongoDB Database |
| **5000** | Node.js / Express (Development) | Backend Application |
| **3000** | React Development Server | React App (Development) |

> **Note:** Ports **3000** and **5000** are commonly used during development. They are **not official standard ports**.

---

# Important Points

- A port is a **logical (virtual)** number, not a physical object.
- Port numbers range from **0 to 65,535**.
- The **Operating System** manages ports.
- Multiple applications can run on the same server using different ports.
- Standard ports are assigned by **IANA (Internet Assigned Numbers Authority)**.

---

# Frequently Asked Interview Questions

### 1. What is a Port?

A Port is a logical communication endpoint that identifies which application or service should receive a network request.

---

### 2. Why do we need Ports?

Ports allow multiple applications to run on the same server and ensure each request reaches the correct application.

---

### 3. What is the difference between an IP Address and a Port?

| IP Address | Port |
|------------|------|
| Identifies the Server | Identifies the Application |
| Example: 192.168.1.10 | Example: 443 |

---

### 4. Who manages Ports?

The **Operating System (OS)** manages ports and forwards requests to the correct application.

---

### 5. Why does HTTPS use Port 443?

Port **443** is the **standard port** assigned for HTTPS. When a browser sees `https://`, it automatically connects to **Port 443** for secure communication.

---

### 6. Can multiple applications use the same Port?

**No.** Only one application can listen on a specific port at a time (on the same IP and protocol).

---

### 7. What happens if Port 443 is already in use?

Another application cannot bind to Port 443 until it is released. The OS will return a **"Port already in use"** error.

---

### 8. What does `app.listen(5000)` mean?

```javascript
app.listen(5000);
```

It tells the Operating System:

> "Open Port **5000** and send all incoming requests on this port to my Node.js application."

---

# Interview Answer (30 Seconds)

> A **Port** is a logical communication endpoint identified by a port number. It helps the Operating System deliver incoming network requests to the correct application running on a server. The IP address identifies the server, while the port identifies the specific application. For example, HTTP uses Port 80, HTTPS uses Port 443, MySQL uses Port 3306, and MongoDB uses Port 27017.

---

# One-Line Revision

**IP Address → Finds the Server**  
**Port → Finds the Application**  
**Operating System → Routes the Request to the Correct Application**






# How Ports Work on AWS (Interview)

Suppose your MERN application is hosted on AWS.

```text
AWS EC2 (Linux Operating System)

Port 443   → Nginx (HTTPS)
Port 5000  → Node.js Backend
Port 27017 → MongoDB
```

---

# Complete Flow

```text
User
   │
https://xyz.com
   │
   ▼
AWS Server (IP Address)
   │
   ▼
Operating System (Linux)
   │
   ▼
Port 443
(Nginx is listening)
   │
   ▼
Forward Request
   │
   ▼
Port 5000
(Node.js Application)
   │
Business Logic
   │
Need Data?
   │
Yes
   │
   ▼
MongoDB
(Port 27017)
   │
Returns Data
   │
   ▼
Node.js
   │
JSON Response
   │
   ▼
Nginx
   │
HTTPS Response
   │
   ▼
Browser
```

---

# What Does the Operating System Do?

The Operating System keeps track of which application is using which port.

Example:

```text
Port 443   → Nginx
Port 5000  → Node.js
Port 27017 → MongoDB
```

When a request arrives on **Port 443**, the OS sends it to **Nginx** because Nginx is listening on that port.

---

# Why Port 443?

When the browser sees:

```text
https://xyz.com
```

it automatically connects to:

```text
Server IP : 443
```

because **443 is the standard port for HTTPS**.

---

# Why MongoDB Uses Port 27017?

When Node.js needs data, it connects to MongoDB using its default port:

```text
localhost:27017
```

or

```text
mongodb://server-ip:27017
```

The Operating System forwards the request to the MongoDB process because it is listening on Port **27017**.

---

# Important Interview Point

- **Port identifies the application**, not the request.
- **Operating System maps the port to the correct application.**
- **Node.js communicates with MongoDB using MongoDB's port (27017).**

---

# Interview Answer (30 sec)

> Yes, an AWS EC2 instance runs an Operating System such as Linux or Windows, and the OS manages all port mappings. When a user opens an HTTPS website, the browser automatically sends the request to Port 443, where the web server (such as Nginx) is listening. Nginx forwards the request to the Node.js application on Port 5000. If the backend needs data, Node.js communicates with MongoDB on its default Port 27017. The Operating System uses the port number to deliver each request to the correct application.

---

# One-Line Revision

User → Port 443 (Nginx) → Port 5000 (Node.js) → Port 27017 (MongoDB) → Response