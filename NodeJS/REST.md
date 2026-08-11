# What is REST API?

-> **REST API** is a way for a client and server to communicate over HTTP using URLs (endpoints) and HTTP methods like `GET`, `POST`, `PUT/PATCH`, and `DELETE`.

## Why is it called REST?

-> REST stands for:

**Representational State Transfer**

-> A REST API is an HTTP-based interface where resources are identified using URLs/endpoints and operations are performed using standard HTTP methods such as `GET`, `POST`, `PUT/PATCH`, and `DELETE`.

-> REST APIs are typically **stateless**, meaning each request contains the information needed to process it.

### Example

```text
GET     /users
POST    /users
GET     /users/101
PATCH   /users/101
DELETE  /users/101
```

Here, `users` is the **resource** and HTTP methods define what operation we want to perform.

---

# Types of APIs

The most commonly discussed API types are:

1. REST API
2. SOAP API
3. GraphQL API
4. RPC API
5. gRPC API
6. WebSocket API

---

# 1. REST API

-> REST uses **HTTP methods + URLs/endpoints** to work with resources.

### Example

```text
GET /users/101
```

Response:

```json
{
    "id": 101,
    "name": "Gourav",
    "course": "MTech"
}
```

### Main Features

* Uses HTTP
* Resource-based
* Uses URLs/endpoints
* Uses HTTP methods
* Usually stateless
* Commonly uses JSON
* Easy to understand and widely used

### Commonly used for

* REST APIs
* CRUD applications
* MERN applications
* Web and mobile applications
* Microservices

---

# 2. SOAP API

-> **SOAP = Simple Object Access Protocol**

-> SOAP is a **protocol** for exchanging structured information between applications.

-> SOAP commonly uses **XML** for request and response messages.

### Example

```xml
<soap:Envelope>
    <soap:Body>
        <GetStudent>
            <id>101</id>
        </GetStudent>
    </soap:Body>
</soap:Envelope>
```

### Main Features

* Uses XML
* Strict structure
* Has built-in standards for security and reliability
* More complex than REST
* Often used in enterprise systems

### Commonly used for

* Banking systems
* Enterprise applications
* Legacy systems
* Systems requiring strict contracts/security standards

---

# 3. GraphQL API

-> **GraphQL** is a query language and runtime for APIs that allows the client to request exactly the data it needs.

### REST

```text
GET /users/101
GET /users/101/orders
GET /users/101/profile
```

The client may need multiple endpoints.

### GraphQL

```graphql
query {
    user(id: 101) {
        name
        email
        orders {
            id
            product
        }
    }
}
```

-> The client specifies which fields it wants.

### Main Features

* Usually uses a single endpoint
* Client controls the requested data
* Can reduce over-fetching
* Can reduce under-fetching
* Strongly typed schema

### Commonly used for

* Complex frontend applications
* Mobile applications
* Applications where clients need different combinations of data

---

# 4. RPC API

-> **RPC = Remote Procedure Call**

-> RPC allows a client to call a function/procedure on a remote server as if it were calling a local function.

### Example

```text
createUser()
getUser()
deleteUser()
```

Instead of thinking mainly in terms of resources, RPC focuses on **actions/functions**.

### Example

```text
POST /createUser
POST /getUser
POST /deleteUser
```

### Main Idea

```text
REST
→ Work with resources

RPC
→ Call actions/functions
```

---

# 5. gRPC API

-> **gRPC = Google Remote Procedure Call**

-> gRPC is a high-performance RPC framework originally developed by Google.

-> It commonly uses **Protocol Buffers (Protobuf)** for defining services and messages.

### Example

```text
GetUser()
CreateUser()
DeleteUser()
```

### Main Features

* High performance
* Uses HTTP/2
* Uses Protocol Buffers
* Strongly typed
* Supports streaming
* Common in microservices

### Commonly used for

* Microservices
* Internal service-to-service communication
* High-performance backend systems

---

# 6. WebSocket API

-> WebSocket provides a **persistent, two-way communication channel** between client and server.

-> Unlike normal REST communication, the server can send data to the client whenever needed without waiting for a new HTTP request.

### Flow

```text
Client
   ↕
WebSocket Connection
   ↕
Server
```

### Example

```text
User sends message
        ↓
Server receives message
        ↓
Server immediately sends message
        ↓
Other connected users
```

### Commonly used for

* Chat applications
* Live notifications
* Online gaming
* Live dashboards
* Real-time applications

---

# REST vs SOAP vs GraphQL vs RPC vs gRPC vs WebSocket

| Feature              | REST              | SOAP                | GraphQL               | RPC/gRPC                  | WebSocket               |
| -------------------- | ----------------- | ------------------- | --------------------- | ------------------------- | ----------------------- |
| Main idea            | Resources         | Structured protocol | Query data            | Call functions            | Real-time communication |
| Common format        | JSON              | XML                 | JSON                  | Protobuf/JSON etc.        | Any messages            |
| Communication        | HTTP              | Usually HTTP        | HTTP                  | HTTP/2 commonly for gRPC  | WebSocket               |
| Endpoints            | Multiple commonly | Service operations  | Usually one endpoint  | Method/service based      | Connection-based        |
| Client controls data | Limited           | Limited             | ✅ Yes                 | Usually defined by method | Depends on application  |
| Real-time            | ❌ Not by itself   | ❌ Not by itself     | ❌ Not by itself       | Streaming possible        | ✅ Yes                   |
| Complexity           | Low/Medium        | High                | Medium                | Medium                    | Medium                  |
| Common use           | Web/mobile APIs   | Enterprise/legacy   | Complex frontend data | Microservices             | Chat/live apps          |

---

# REST vs GraphQL — Important Interview Difference

### REST

```text
GET /users/101
GET /users/101/orders
GET /users/101/profile
```

-> REST uses multiple endpoints for different resources.

### GraphQL

```text
POST /graphql
```

```graphql
query {
    user(id: 101) {
        name
        orders {
            id
        }
    }
}
```

-> GraphQL commonly uses a single endpoint and allows the client to specify exactly what data it needs.

### Simple Difference

```text
REST
→ Server defines the endpoints and response structure.

GraphQL
→ Client specifies the data it wants.
```

---

# REST vs SOAP — Important Interview Difference

```text
REST
→ Architectural style
→ Lightweight
→ Commonly JSON
→ Uses HTTP methods
→ Easier to use

SOAP
→ Protocol
→ XML
→ Strict standards
→ More heavyweight
→ Common in enterprise/legacy systems
```

> **Interview Point:** REST is an architectural style, while SOAP is a protocol.

---

# REST vs RPC

```text
REST
→ Resource-oriented

Example:
GET /users/101

RPC
→ Action/function-oriented

Example:
getUser(101)
```

### Simple way to remember

```text
REST → "What resource do you want?"

RPC  → "What operation do you want to perform?"
```

---

# REST vs WebSocket

```text
REST
Client → Request → Server
Client ← Response ← Server
```

```text
WebSocket
Client ↔ Server
       Persistent connection
```

-> REST is commonly used for normal request/response APIs.

-> WebSocket is used when the server needs to continuously communicate with connected clients in real time.

---

# Important Interview Question

## Is REST an API?

-> REST itself is an **architectural style** for designing networked applications.

-> A **REST API** is an API designed according to REST principles and commonly uses HTTP.

### Simple Interview Answer

> **REST API is an HTTP-based API that follows REST principles, where resources are identified by URLs and standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE are used to perform operations on those resources.**

---

# Quick Revision

```text
REST
→ Resource-based
→ HTTP
→ GET, POST, PUT, PATCH, DELETE
→ Usually JSON
→ Stateless

SOAP
→ Protocol
→ XML
→ Strict
→ Enterprise/legacy

GraphQL
→ Query language
→ Client asks for exact data
→ Usually one endpoint

RPC
→ Function/action based
→ Remote function calls

gRPC
→ High-performance RPC
→ HTTP/2
→ Protocol Buffers
→ Microservices

WebSocket
→ Persistent connection
→ Two-way communication
→ Real-time applications
```
