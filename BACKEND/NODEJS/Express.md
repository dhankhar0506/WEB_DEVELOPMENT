# Express.js Interview Notes

## What is Express.js?

-> Express is a library that makes creating servers and APIs much easier than using Node.js's built-in `http` module.

-> Express.js is a lightweight web framework (library) built on top of Node.js that makes it easy and fast to create web servers and REST APIs. It provides features like routing, middleware, request parsing, and error handling, reducing the amount of code developers need to write.

---

## Why Companies Use Express?

* Simple API creation
* Easy routing
* Middleware support
* Large ecosystem
* Fast development

---

## Why Better Than HTTP?

### Routing Made Simple

**HTTP** => You must manually check `req.url` and `req.method` for every request.

**Express** => Express automatically checks, we write the logic part only.

### Middleware Support

-> Express provides middleware support.

### Error Handling

**HTTP** -> Every route needs its own error handling.

**Express** -> Create one error handler.

-> Now any route can pass an error. Express sends it to the central error handler.

### Serving Static Files

-> Express provides built-in support for serving static files.

---

# What is Routing?

-> Routing is the process of matching an incoming HTTP request (URL + HTTP Method) to the correct function (route handler/controller).

```js
app.get("/users", (req, res) => {
    res.send("Users");
});
```

---

# What is a Route?

-> A route is the combination of an HTTP method and a URL path that tells Express which function should execute for a request.

-> A route is the combination of an HTTP method (`GET`, `POST`, `PUT`, `DELETE`) and a URL path (such as `/users`) that maps an incoming request to the appropriate route handler function.

---

# Route Handler

```js
function getUsers(req, res) {
    res.send("Users");
}

app.get("/users", getUsers);
```

---

# Dynamic Routes (Route Parameters)

-> Dynamic routing means using the same route pattern with different URL parameters to return different resources. Express captures the parameter using `req.params`.

```js
app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
});
```

---

# URL

```text
https://www.xyz.com/orders/101?page=1
│
├── https          → Protocol
├── www.xyz.com    → Domain
├── /orders/101    → Path
└── ?page=1        → Query String
```

---

# Query Parameters

```text
/products?page=2&category=mobile
```

```js
app.get("/products", (req, res) => {
    console.log(req.query.page);
    console.log(req.query.category);
});
```

---

# Route with Middleware

```js
app.get("/profile", authMiddleware, profile);
```

---

# Routing Methods

| Method         | Purpose                |
| -------------- | ---------------------- |
| `app.get()`    | Read Data              |
| `app.post()`   | Create Data            |
| `app.put()`    | Update Entire Resource |
| `app.patch()`  | Partial Update         |
| `app.delete()` | Delete Resource        |

```js
app.get("/users", (req, res) => {

});
```

---

# Express Request (`req`)

-> `req` (Request Object) contains everything the client sends to the server.

| Property      | Used For                | Example             |
| ------------- | ----------------------- | ------------------- |
| `req.body`    | POST/PUT/PATCH data     | Login form          |
| `req.params`  | Dynamic URL values      | `/users/10`         |
| `req.query`   | Query string            | `?page=1`           |
| `req.headers` | Headers                 | Authorization token |
| `req.method`  | HTTP Method             | GET, POST           |
| `req.url`     | URL                     | `/users`            |
| `req.ip`      | Client IP               | Logging             |
| `req.file`    | Uploaded file           | Multer              |
| `req.files`   | Multiple uploaded files | Multer              |

---

# Express Response (`res`)

-> `res` (Response Object) is used to send data back to the client.

| Method           | Used For         |
| ---------------- | ---------------- |
| `res.send()`     | Send text/object |
| `res.json()`     | Send JSON        |
| `res.status()`   | Status code      |
| `res.sendFile()` | Send file        |
| `res.download()` | Download file    |
| `res.redirect()` | Redirect         |

---

# What is a Static File?

-> A static file is any file that is stored on the server and sent to the client without any modification.

* ✅ Images (`.png`, `.jpg`)
* ✅ CSS
* ✅ JavaScript
* ✅ HTML
* ✅ PDF
* ✅ Videos
* ✅ Fonts

---

# Creating Express Server

```js
const express = require("express");
```

-> Import an Express module in application.

```js
const app = express();
```

-> Creates an Express application.

```js
app.listen(3000, () => {
    // start the server and listen on PORT : 3000
    console.log("Server Running");
});
```

---

## `app.use()`

-> `app.use()` registers middleware for the entire Express app and registers route files.

```js
app.use(express.json());
```

-> Converts incoming JSON into a JavaScript object.

```js
app.use(express.static("uploads"));
```

---

# Middleware

-> Middleware is a function that executes before the route handler.

-> It can inspect, modify, validate, or stop the request before it reaches the route handler.

```js
app.use((req, res, next) => {
    console.log("Request");
    next();
});
```

### Meaning

```text
req → Request object
res → Response object
next() → Passes control to the next middleware or route
```

### Middleware Flow

```text
Client
  ↓
Request
  ↓
Middleware
  ↓
Route Handler
  ↓
Response
```

---

# Why Do We Use Middleware?

-> Instead of checking in each request.

-> Instead of writing the same code in every API.

-> We created a centralized middleware system that validates each request by client before it goes to routing method.

---

# Types of Middleware

## 1. Application Middleware

-> Runs for every request.

```js
app.use()
```

---

## 2. Built-in Middleware

### JSON Parser

```js
express.json()
```

### Static Files

```js
express.static("uploads")
```

---

## 3. Route Middleware

-> Runs only for a specific route.

```js
function auth(req, res, next) {
    next();
}

app.get("/profile", auth, (req, res) => {
    res.send("Profile");
});
```

---

## 4. Third-Party Middleware

-> Installed from npm.

```js
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
```

---

## 5. Error Handling Middleware

```js
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
```

---

# CORS (Cross-Origin Resource Sharing)

-> CORS is middleware that allows or blocks requests coming from different origins (domain, port, or protocol).

## Restrict to One Website

```js
app.use(cors({
    origin: "https://www.xyz.com"
}));
```

-> Only this website can access your API.

---

# Morgan

-> Morgan is middleware that automatically logs incoming HTTP requests, including the request method, URL, status code, and response time.

### Why Use It?

* Debugging
* Monitoring requests
* Finding slow APIs

---

# Multer

-> Multer is middleware that processes file uploads in `multipart/form-data` requests. It extracts the uploaded file, makes it available through `req.file` or `req.files`, and can save it to disk or memo.

### File Upload Flow

```text
User Uploads Image
        │
        ▼
      React
        │
        ▼
Express + Multer
        │
        ▼
Cloud Storage
(AWS S3 / Cloudinary / Cloudflare R2)
        │
        ▼
Stores Image
        │
        ▼
Generates Public URL
        │
        ▼
Returns URL to Express
        │
        ▼
Express Saves URL in MongoDB
        │
        ▼
React Requests User Data
        │
        ▼
Gets Image URL
        │
        ▼
<img src="https://cdn.xyz.com/profile.jpg">
        │
        ▼
Browser Downloads Image Directly From Cloud
```

---

# What is Helmet?

-> Helmet is middleware that adds security-related HTTP headers to help protect Express applications.

---

# Middleware Order Matters

-> Express executes middleware from top to bottom.

```js
app.use(first);
app.use(second);
app.get("/", handler);
```

---

# Router Middleware (Runs for a Group of Routes)

```js
const router = express.Router();

router.use(authMiddleware);

router.get("/dashboard", dashboard);
```

-> `dashboard` is simply a JavaScript function that executes when `/dashboard` is requested.

```js
function dashboard(req, res) {
    res.send("Welcome to Dashboard");
}

router.get("/users", users);
```

> Every route below it in that router automatically runs the authentication middleware first.

---

# Folder Structure

```text
project/

server.js

routes/
    userRoutes.js
    productRoutes.js

controllers/
    userController.js
    productController.js

middleware/
    authMiddleware.js
```

---

# 1. `server.js` (Main File)

-> This is where you register all route files.

-> `server.js` as the entry point of your application.

```js
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/users", userRoutes);

app.listen(3000);
```

---

# 2. `userRoutes.js`

```js
const router = require("express").Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

module.exports = router;
```
