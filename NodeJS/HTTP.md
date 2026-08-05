## What is HTTP?
-> HTTP (HyperText Transfer Protocol) is a communication protocol used to transfer data between a client (browser/mobile app) and a server.
-> HTTP (HyperText Transfer Protocol) is a set of rules that defines how a client (browser/app) and a server communicate with each other.

## What Rules Does HTTP Define?
- Which resource do you want?
- Which operation do you want? (GET, POST, PUT, DELETE)
- Are you sending data?
- What type of data are you sending? (JSON, File, Text)
- Are you authenticated? (Token)
- What response should the server send?
- What is the status of the request? (200, 404, 500)

## Why do we use HTTP?
Because the browser and server need a standard way to communicate.

## What is the http Module?
-> The http module is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses.

## HTTP Methods
-> GET = Used to fetch data.
-> POST = Used to create data.
-> PUT = Replace existing data.
-> PATCH = Update some fields.
-> DELETE =  Delete resource.

## What is API?
-> API (Application Programming Interface) is a set of endpoints/functions that allows applications to communicate with each other.

## | HTTP                            | API                                       |
    | ------------------------------- | ----------------------------------------- |
    | Communication protocol          | Collection of endpoints/services          |
    | Defines how data is transferred | Defines what operations are available     |
    | Uses methods like GET, POST     | Examples: `/login`, `/users`, `/products` |
    | Standard                        | Built by developers                       |



## Complete POST Example
> URl = https://api.myapp.com/login
> Suppose user logs in.
> BODY 
   {
    "email":"gourav@gmail.com",
    "password":"123456"
    }
> Server Response
    - return token 
    {
        "token":"abcd1234"
    }

## Without HTTP, the browser wouldn't know:
    How to request data.
    How to send data.
    How to understand the server's response.

## What is HTTPS?
-> It is HTTP + SSL/TLS Encryption.
        Browser
         ↓
        Encrypt Data 🔒
         ↓
        Internet
         ↓
        Server
         ↓
        Decrypt

## What is URL? 
A URL (Uniform Resource Locator) is the complete address of a resource on the internet. It tells the browser where to send the HTTP request.

https://api.example.com:3000/users/10?role=admin&active=true
│       │               │     │        │
│       │               │     │        └── Query Parameters -> Extra information sent to the server.
│       │               │     └────────── Path -> Tells the server which resource you want.(/user / products / orders)
│       │               └──────────────── Port
│       └──────────────────────────────── Domain -> The server's unique name.
└──────────────────────────────────────── Protocol -> Tells the browser how to communicate. (http / https / ftp)




## Explain PORT ?
-> A port is a logical number that tells the Operating System which application or service should receive a network request.
->  One server is running multiple applications.
-> The Operating System knows which application is listening on which port.
    
    Server (IP: 192.168.1.10)
    │
    ├── Port 80    → HTTP Server
    ├── Port 443   → HTTPS Server
    ├── Port 3000  → Node.js Application
    ├── Port 3306  → MySQL
    └── Port 27017 → MongoDB

## OS Keeps a Table
The Operating System maintains something like:
        Port        Application
        80          HTTP Server
        443         HTTPS Server
        3000        Node.js
        3306        MySQL
        27017       MongoDB

## Create Server
-> http.createServer() creates an HTTP server that listens for client requests.
    const http = require("http");

    const server = http.createServer((req, res) => {
        res.end("Hello World");
    });

## Request Object
-> The req object contains all information sent by the client.
    It includes:
        URL
        HTTP Method
        Headers
        Body
        Query Parameters
    
    - req.url
    - req.method;
    - req.headers
  
## Response Object (res)
-> The res object is used to send data back to the client.
    -> Send Text => res.end("Hello");
    -> Send JSON => res.end(JSON.stringify({
                        name: "Gourav"
                    }));
    -> Set Header => res.setHeader("Content-Type","application/json");
        -> Content-Type : What type of data am I sending?

## Headers
-> Headers are key-value pairs that provide additional information about the request or response.
        GET /users
        Host: localhost:3000
        User-Agent: Chrome
        Content-Type: application/json

## Important Headers
1. Authorization: Bearer token
2. Content-Type : application/json(Type of data sent)
3. Accept: application/json (Client expects JSON)
4. User-Agent : Browser information.
5.  Host: localhost:3000 (Server address)

## Status Codes
-> Status codes tell the client whether the request was successful or failed.
    200 OK -> Success
    201 Created -> created 

    400 Bad Request -> bad request 
    401 Unauthorized -> Login Required
    403 Forbidden -> Permission Denied
    404 Not Found -> Page Not Found

    500 Internal Server Error -> Server Error


## complete example 
const http = require("http");

const server = http.createServer((req, res) => {

    console.log(req.method);
    console.log(req.url);

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        message: "Success"
    }));

});

server.listen(3000, () => {
    console.log("Server Running");
});

## WHY PORT NEEDED?
    Browser
    ↓
    https://www.xyz.com
    ↓
    Port 443
    ↓
    Operating System
    ↓
    Nginx
    ↓
    Port 3000
    ↓
    Operating System
    ↓
    Node.js
    ↓
    Port 27017
    ↓
    Operating System
    ↓
    MongoDB
    ↓
    Node.js
    ↓
    Nginx
    ↓
    Browser


## What is Nginx?
-> Nginx (Engine-X) is a high-performance web server and reverse proxy server that receives client requests and forwards them to backend applications like Node.js.
-> Nginx is a gatekeeper that sits in front of your Node.js application and manages incoming requests.

## Why Do We Use Nginx?
-> Node.js has to do everything:
    Handle HTTPS
    Serve images
    Process API requests
    Manage thousands of connections

## Main Use Cases of Nginx
-> 1. Reverse Proxy => Nginx receives requests and forwards them to Node.js.
-> 2. Nginx handles SSL(secure socket layer) certificates and HTTPS encryption.
-> 3. Load Balancing
-> 4. Security

## Is Nginx Automatic? 
-> ❌ No.
-> You install and configure Nginx yourself.

## Load Balancing

❌ Nginx does not automatically create multiple servers.You must create them.

## What is
 SSL/TLS is a security protocol that creates an encrypted communication channel between the client and the server, ensuring that data cannot be easily read or modified while traveling over the network.