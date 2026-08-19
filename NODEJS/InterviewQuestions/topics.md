

# Node.js Backend Interview Questions

## 1. Node.js Fundamentals

### Basic Questions

1. What is Node.js?
2. Why is Node.js used for backend development?
3. Is Node.js a programming language?
4. Is Node.js single-threaded?
5. What is the V8 engine?
6. What is the difference between Node.js and JavaScript?
7. What are the advantages of Node.js?
8. What are the disadvantages of Node.js?
9. What is `npm`?
10. What is `npx`?
11. What is `package.json`?
12. What is `package-lock.json`?
13. Difference between dependencies and devDependencies?
14. What is `node_modules`?
15. What is CommonJS?
16. What is ES Module?
17. Difference between `require()` and `import`?
18. What is `module.exports`?
19. What is `exports`?
20. What is the `process` object?

### Practical

```js
console.log("Hello Node");
```

Run:

```bash
node app.js
```

Interview question:

> How does Node.js execute JavaScript code?



---

# 4. Node.js Core Modules

You should know these very well:

```text
fs
path
http
url
os
events
crypto
stream
buffer
util
process
```

### Questions

1. What is the `fs` module?
2. Difference between `readFile()` and `readFileSync()`?
3. How do you create a file?
4. How do you delete a file?
5. How do you create a directory?
6. What is the `path` module?
7. Difference between `path.join()` and `path.resolve()`?
8. What is the `http` module?
9. How do you create an HTTP server?
10. What is the `os` module?
11. What is the `events` module?
12. What is EventEmitter?
13. What is a Buffer?
14. What are Streams?
15. Types of streams?

---

# 5. HTTP & Web Fundamentals

This is **very important for backend interviews**.

1. What is HTTP?
2. What is HTTPS?
3. What is a request?
4. What is a response?
5. What are HTTP headers?
6. What is a request body?
7. What are query parameters?
8. What are route parameters?
9. What is HTTP status code?
10. Difference between:

```text
200
201
204
400
401
403
404
409
422
500
```

11. Difference between GET and POST?
12. PUT vs PATCH?
13. DELETE?
14. What is idempotency?
15. What is REST API?
16. What is RESTful API?
17. What is JSON?
18. What is Content-Type?
19. What is CORS?
20. What is preflight request?

---

# 6. Express.js

### Basic

1. What is Express.js?
2. Why do we use Express with Node.js?
3. How do you create an Express server?
4. What is routing?
5. What is middleware?
6. Types of middleware?
7. What is `app.use()`?
8. What is `app.get()`?
9. What is `app.post()`?
10. What is `req`?
11. What is `res`?
12. What is `next()`?

Example:

```js
app.get("/users", (req, res) => {
    res.json({
        message: "Users fetched"
    });
});
```

---

# 7. Express Middleware

This is one of the **most frequently asked Node.js interview topics**.

### Questions

1. What is middleware?
2. Why do we use middleware?
3. How does middleware work?
4. What is `next()`?
5. What happens if we don't call `next()`?
6. What is application-level middleware?
7. What is router-level middleware?
8. What is built-in middleware?
9. What is third-party middleware?
10. What is error-handling middleware?
11. How do you create custom middleware?

Example:

```js
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};

app.use(logger);
```

### Real-world middleware flow

```text
Request
   ↓
Logger
   ↓
Authentication
   ↓
Validation
   ↓
Controller
   ↓
Response
```

---

# 8. REST API

You should be able to build a complete CRUD API.

### Questions

1. What is REST?
2. What is an endpoint?
3. What is CRUD?
4. How do you design REST APIs?
5. What is resource-based routing?
6. Difference between PUT and PATCH?
7. What status code should POST return?
8. What status code should DELETE return?
9. How should API errors be structured?
10. How do you version APIs?

Example:

```text
GET     /users
GET     /users/:id
POST    /users
PUT     /users/:id
PATCH   /users/:id
DELETE  /users/:id
```

---

# 9. MongoDB

Since you're working with **Node + MongoDB**, this section is extremely important.

### Questions

1. What is MongoDB?
2. SQL vs NoSQL?
3. What is a collection?
4. What is a document?
5. What is BSON?
6. What is ObjectId?
7. What is `_id`?
8. What is indexing?
9. What is aggregation?
10. What is `$match`?
11. What is `$group`?
12. What is `$lookup`?
13. What is `$project`?
14. What is pagination?
15. What is embedding?
16. What is referencing?
17. When should you embed documents?
18. When should you reference documents?

---

# 10. Mongoose

### Questions

1. What is Mongoose?
2. Why use Mongoose?
3. What is a Schema?
4. What is a Model?
5. Schema vs Model?
6. What are validations?
7. What are defaults?
8. What are timestamps?
9. What are middleware/hooks?
10. What is `populate()`?
11. What is `lean()`?
12. Difference between `find()` and `findOne()`?
13. Difference between `findById()` and `findOne()`?
14. What is `findByIdAndUpdate()`?
15. What is `findByIdAndDelete()`?
16. What is `select()`?
17. What is `sort()`?
18. What is `limit()`?
19. What is `skip()`?

Example:

```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
```

---

# 11. Authentication

This is a **must-prepare section**.

1. What is authentication?
2. What is authorization?
3. Authentication vs authorization?
4. What is login flow?
5. What is JWT?
6. What is an access token?
7. What is a refresh token?
8. What is the JWT structure?
9. What is JWT payload?
10. Should we store passwords in JWT?
11. Where should JWT be stored?
12. What is a cookie?
13. Cookie vs localStorage?
14. What is HttpOnly?
15. What is Secure cookie?
16. What is SameSite?
17. What is session-based authentication?
18. JWT vs session?
19. How do you logout using JWT?
20. How do you protect routes?

---

# 12. Password Security

1. Why should passwords never be stored directly?
2. What is hashing?
3. What is bcrypt?
4. What is salt?
5. Why use salt?
6. bcrypt vs crypto?
7. Hashing vs encryption?
8. Can a hash be decrypted?
9. How does password verification work?

Typical flow:

```text
User Password
      ↓
bcrypt.hash()
      ↓
Hashed Password
      ↓
Database
```

Login:

```text
Password
   ↓
bcrypt.compare()
   ↓
Stored Hash
   ↓
Match?
```

---

# 13. JWT

### Interview questions

1. What is JWT?
2. Why is JWT called stateless?
3. What are the three parts of JWT?

```text
Header.Payload.Signature
```

4. What is the signature?
5. Can we modify JWT payload?
6. What happens if JWT is modified?
7. What is token expiration?
8. Access token vs refresh token?
9. How do you verify JWT?
10. How do you protect an Express route?

Example:

```js
const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
);
```

---

# 14. Authorization / RBAC

1. What is authorization?
2. What is role-based access control?
3. What is RBAC?
4. How do you implement Admin/User roles?
5. How do you restrict an endpoint to Admin?
6. Authentication middleware vs authorization middleware?

Example:

```text
User
 ├── Admin
 ├── Manager
 └── Student
```

---

# 15. Error Handling

### Questions

1. How do you handle errors in Node.js?
2. What is try/catch?
3. How does Express handle errors?
4. What is error middleware?
5. What is operational error?
6. What is programming error?
7. How do you create a custom error class?
8. How do you return consistent API errors?
9. How do you handle async errors?
10. What happens when an unhandled Promise rejection occurs?

Typical structure:

```js
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message
    });
});
```

---

# 16. Validation

1. Why is validation required?
2. Client-side vs server-side validation?
3. Why can't we trust frontend validation?
4. What is Joi?
5. What is Zod?
6. What is express-validator?
7. How do you validate request body?
8. How do you validate query parameters?
9. How do you validate route parameters?

Example:

```text
POST /users

{
    "name": "",
    "email": "wrong"
}
```

Backend should reject invalid data even if frontend already validates it.

---

# 17. Security

Very important for experienced backend interviews.

1. What is CORS?
2. What is CSRF?
3. What is XSS?
4. What is SQL Injection?
5. What is NoSQL Injection?
6. What is Helmet?
7. What is rate limiting?
8. What is brute-force attack?
9. How do you secure passwords?
10. How do you secure JWT?
11. What is HTTPS?
12. What is input sanitization?
13. Why should secrets be stored in `.env`?
14. How do you protect API endpoints?
15. How do you prevent excessive requests?

---

# 18. File Upload

1. How does file upload work?
2. What is multipart/form-data?
3. What is Multer?
4. How do you upload images?
5. How do you validate file size?
6. How do you validate file type?
7. Where should uploaded files be stored?
8. Local storage vs cloud storage?
9. How do you upload files to S3/Cloudinary?
10. How do you handle multiple files?

---

# 19. Database Design

1. What is normalization?
2. What is denormalization?
3. What is a primary key?
4. What is a foreign key?
5. What is indexing?
6. Why are indexes useful?
7. When can indexes become harmful?
8. What is a database transaction?
9. What is atomicity?
10. What is consistency?
11. What is isolation?
12. What is durability?

---

# 20. Performance

1. How do you improve Node.js performance?
2. What is caching?
3. What is Redis?
4. Why use Redis?
5. What is database indexing?
6. What is pagination?
7. What is lazy loading?
8. What is clustering?
9. What are worker threads?
10. How do you handle CPU-intensive operations?
11. How do you prevent blocking the Event Loop?
12. What is load balancing?

---

# 21. Redis

1. What is Redis?
2. Why use Redis with Node.js?
3. Redis vs MongoDB?
4. What is caching?
5. What is cache expiration?
6. What is TTL?
7. What is Redis session storage?
8. How can Redis be used for rate limiting?
9. What is cache invalidation?

Typical architecture:

```text
Client
  ↓
Node API
  ↓
Redis
  ↓
If cache miss
  ↓
MongoDB
```

---

# 22. Logging & Monitoring

1. Why is logging important?
2. What is Winston?
3. What is Morgan?
4. What information should be logged?
5. Why shouldn't passwords be logged?
6. What is monitoring?
7. How do you monitor Node.js applications?
8. How do you debug production issues?

---

# 23. Environment Variables

1. What is `.env`?
2. Why use environment variables?
3. How do you access environment variables?

```js
process.env.MONGO_URI
```

4. Why should `.env` not be committed to Git?
5. How do you manage different environments?

```text
development
testing
production
```

---

# 24. Testing

1. What is unit testing?
2. What is integration testing?
3. What is end-to-end testing?
4. What is Jest?
5. What is Supertest?
6. How do you test Express APIs?
7. What is mocking?
8. What is code coverage?

Example:

```text
Controller
   ↓
Service
   ↓
Database
```

Test each layer appropriately.

---

# 25. Architecture

### Questions

1. What is MVC?
2. What is layered architecture?
3. What is Controller?
4. What is Service?
5. What is Repository?
6. Why separate business logic from controllers?
7. What is dependency injection?
8. What is modular architecture?
9. What is clean architecture?
10. How should you structure a Node.js project?

A common structure:

```text
src/
│
├── controllers/
├── routes/
├── services/
├── models/
├── middleware/
├── validators/
├── utils/
├── config/
└── app.js
```

---

# 26. API Design

1. How do you design a good API?
2. What makes an API scalable?
3. How do you handle API versioning?
4. What is `/api/v1`?
5. How do you structure API responses?
6. How do you handle pagination?
7. How do you handle filtering?
8. How do you handle sorting?
9. How do you handle searching?
10. How do you handle API errors?

Example:

```http
GET /api/v1/users?page=1&limit=10&search=gourav
```

---

# 27. Advanced Node.js

1. What are Worker Threads?
2. What is the Cluster module?
3. Worker Threads vs Cluster?
4. What is child_process?
5. What is `spawn()`?
6. What is `exec()`?
7. What is `fork()`?
8. What is EventEmitter?
9. What are Streams?
10. What is backpressure?
11. What is Buffer?
12. What is memory leak?
13. How do you detect memory leaks?
14. How does garbage collection work?
15. What is the Node.js heap?
16. What is V8 garbage collection?

---

# 28. Microservices

For senior/backend interviews:

1. What is a microservice?
2. Monolith vs microservices?
3. Advantages of microservices?
4. Disadvantages?
5. What is API Gateway?
6. How do microservices communicate?
7. REST vs message queues?
8. What is RabbitMQ?
9. What is Kafka?
10. What is service discovery?
11. What is distributed tracing?
12. What is eventual consistency?

Architecture:

```text
             API Gateway
                  |
       ┌──────────┼──────────┐
       ↓          ↓          ↓
   User Service Order      Payment
       |        Service     Service
       ↓          ↓          ↓
    MongoDB    MongoDB    PostgreSQL
```

---

# 29. Message Queues

1. What is a message queue?
2. Why use message queues?
3. What is RabbitMQ?
4. What is Kafka?
5. Queue vs topic?
6. Producer vs consumer?
7. What is asynchronous processing?
8. When should you use a queue?

Example:

```text
User places order
       ↓
Node API
       ↓
Queue
       ↓
Email Service
       ↓
Send Email
```

The API doesn't need to wait for email delivery.

---

# 30. Deployment

1. How do you deploy Node.js?
2. What is PM2?
3. What is Docker?
4. Why use Docker?
5. What is reverse proxy?
6. What is Nginx?
7. What is CI/CD?
8. What is environment configuration?
9. How do you handle production logs?
10. How do you restart a crashed Node application?

---

# 31. Git & Backend

1. What is Git?
2. `git pull` vs `git fetch`?
3. What is a branch?
4. What is merge?
5. What is rebase?
6. What is merge conflict?
7. What is `.gitignore`?
8. Why add `.env` to `.gitignore`?
9. How do you revert a commit?

---

# 32. Practical Coding Questions

These are **very important** because interviewers often ask you to write code.

### Easy

1. Create an HTTP server.
2. Create an Express server.
3. Create GET API.
4. Create POST API.
5. Create CRUD API.
6. Read a file using `fs`.
7. Write a file using `fs`.
8. Create custom middleware.
9. Create error middleware.
10. Create JWT authentication.

### Medium

11. Create login/register API.
12. Hash password using bcrypt.
13. Create protected route.
14. Implement role-based authorization.
15. Implement pagination.
16. Implement search.
17. Implement filtering.
18. Implement file upload.
19. Implement validation.
20. Create centralized error handling.

### Advanced

21. Build authentication using access + refresh tokens.
22. Implement Redis caching.
23. Implement rate limiting.
24. Implement API versioning.
25. Build a queue-based email system.
26. Build a scalable REST API.
27. Implement transaction handling.
28. Optimize a slow MongoDB query.
29. Design an order/payment backend.
30. Design a production-ready Node.js application.

---

# 33. Most Important Real Interview Scenarios

You should especially practice these:

### Scenario 1

> User logs in. Explain the complete backend flow.

```text
Login Request
     ↓
Validate Input
     ↓
Find User
     ↓
Compare Password
     ↓
Generate JWT
     ↓
Send Token
     ↓
Client
```

### Scenario 2

> User requests `/profile`.

```text
Request
 ↓
JWT Middleware
 ↓
Verify Token
 ↓
Get userId
 ↓
Database
 ↓
Controller
 ↓
Response
```

### Scenario 3

> API is very slow. How will you debug it?

Think:

```text
API
 ↓
Logs
 ↓
Database Query
 ↓
Indexes
 ↓
External APIs
 ↓
CPU
 ↓
Memory
 ↓
Network
```

### Scenario 4

> 10,000 users hit your API simultaneously. What happens?

You should discuss:

```text
Node Event Loop
        ↓
Non-blocking I/O
        ↓
Database connection pool
        ↓
Caching
        ↓
Load balancing
        ↓
Multiple Node processes
```

---

# 34. Top 30 Questions You MUST Know

If your interview is soon, prioritize these:

1. What is Node.js?
2. Why is Node.js single-threaded?
3. Explain Event Loop.
4. Explain libuv.
5. Blocking vs non-blocking.
6. Callback vs Promise.
7. async/await.
8. `Promise.all()`.
9. CommonJS vs ES Modules.
10. What is Express?
11. What is middleware?
12. Explain `next()`.
13. How does error middleware work?
14. What is REST API?
15. GET vs POST vs PUT vs PATCH.
16. HTTP status codes.
17. What is MongoDB?
18. MongoDB vs SQL.
19. What is Mongoose?
20. Schema vs Model.
21. What is `populate()`?
22. What is indexing?
23. Authentication vs authorization.
24. What is JWT?
25. Access token vs refresh token.
26. Hashing vs encryption.
27. What is bcrypt?
28. What is CORS?
29. How do you secure an Express API?
30. Explain your Node.js project architecture.

### Best preparation order for you

Since you've already worked with **Node.js + Express + MongoDB/Mongoose**, I'd recommend we don't learn these randomly. We can do a **complete backend interview course step-by-step**:

**Node.js → Event Loop → Async → HTTP → Express → Middleware → REST API → MongoDB → Mongoose → Authentication → JWT → Authorization → Validation → Error Handling → Security → File Upload → Redis → Testing → Architecture → Performance → System Design.**

For each topic, I'll keep the format **Interview Definition → Simple Explanation → Real-world Example → Code → Common Interview Questions → Coding Question**, so you can actually build and explain a backend project rather than just memorize answers.
