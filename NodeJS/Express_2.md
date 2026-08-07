
## MOST IMPORTANT POINTS?

## What happens if middleware doesn't call next()?
-> A middleware should either send/end the response or call next() to pass control to the next matching middleware or route handler. Otherwise, the request can remain pending until a timeout or connection closure.
    function auth(req, res, next) {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        next();
    }

    Request
      ↓
    auth middleware
    ↓
    Authenticated?
    /          \
    NO            YES
    ↓              ↓
401 response     next()
                    ↓
                Route Handler

## req.params vs req.query vs req.body
req.params -> Used to get dynamic values from the URL path, commonly to identify a specific resource.
req.query -> Used for optional URL parameters, commonly filtering, searching, sorting and pagination.
req.body -> Data sent inside the HTTP request body.

## PUT vs PATCH
-> Both update resources.
->PUT -> Typically represents replacing the complete representation of a resource.'
-> PATCH -> Used for partial modification.

## What is express.Router()?
-> express.Router() creates a separate router object that helps us organize related routes into different files instead of writing all routes inside server.js.

> Suppose we are building a Student API.
project/
│
├── server.js
│
├── routes/
│   └── studentRoutes.js
│
└── controllers/
    └── studentController.js

> Step 1: server.js
    const express = require("express");
    const app = express();

    // Parse JSON request body
    app.use(express.json());

    // Import student router
    const studentRoutes = require("./routes/studentRoutes");

    // Register router
    app.use("/api/students", studentRoutes);

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });

    -> Any request starting with /api/students should be passed to studentRoutes.

> studentRoutes.js
    const express = require("express");
    const router = express.Router();

    const {
        getStudents,
        getStudentById,
        createStudent,
        updateStudent,
        deleteStudent
    } = require("../controllers/studentController");


    router.get("/", getStudents);

    router.get("/:id", getStudentById);

    router.post("/", createStudent);

    router.patch("/:id", updateStudent);

    router.delete("/:id", deleteStudent);


    module.exports = router;

> Step 4: Controller -> studentController.js:
    const getStudents = async (req, res) => {

        // Normally get from DB
        const students = [
            {id: 1, name: "Gourav" },
            {   id: 2,   name: "Rahul"}
        ];

        res.status(200).json({
            success: true,
            data: students
        });
    };


    const getStudentById = async (req, res) => {

        const id = req.params.id;

        res.status(200).json({
            success: true,
            studentId: id
        });
    };


    const createStudent = async (req, res) => {

        const studentData = req.body;

        // Normally:
        // const student = await Student.create(studentData);

        res.status(201).json({
            success: true,
            data: studentData
        });
    };


    const updateStudent = async (req, res) => {

        const id = req.params.id;
        const data = req.body;

        res.status(200).json({
            success: true,
            id,
            data
        });
    };


    const deleteStudent = async (req, res) => {

        const id = req.params.id;

        res.status(200).json({
            success: true,
            message: `Student ${id} deleted`
        });
    };


module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

## How do you implement a 404 handler?
-> A 404 handler runs when the request does not match any route in our Express application.
    // 404 handler — ALWAYS after routes
    app.use((req, res) => {
        res.status(404).json({
            success: false,
            message: "Route not found"
            });
    });


## CORS = Cross-Origin Resource Sharing
CORS is a browser security mechanism that controls whether a frontend from one origin is allowed to access resources/APIs from another origin.
-> Origin is: Protocol + Domain + Port

    Frontend:
    http://localhost:3000

    Backend:
    http://localhost:5000

-> Ports are different (3000 vs 5000), so these are different origins.

> In Express, we commonly configure the cors middleware:
    const cors = require("cors");

    app.use(cors({
        origin: "https://myapp.com"
    }));

## How do you validate incoming data?
->We validate incoming data before it reaches our main business logic/controller to make sure the client's body, params, and query have the expected structure, types, formats, and allowed values.
    {
        "name": "",
        "email": "hello",
        "age": -50
    }

    Frontend
        ↓
    POST /register
        ↓
    express.json()
        ↓
    req.body
        ↓
    Validation Middleware
        ↓
    Valid?
    /     \
    NO      YES
    ↓        ↓
    400     next()
            ↓
        Controller
            ↓
            DB
1. Manual validation
2. Validation Library
    - Zod
    - Joi
    - express-validator
    
    - const { z } = require("zod");
    const registerSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        age: z.number().min(18)
    });
> Then create validation middleware:

    function validateRegister(req, res, next) {
        const result = registerSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid data",
                errors: result.error.issues
            });
        }

        req.body = result.data;

        next();
    }


## What is Rate Limiting?
-> Rate limiting means restricting how many requests a client can make to an API within a specific time period.
-> Its main purpose is to protect the server from API abuse, brute-force attacks, spam, and too many requests.
> A common third-party package is express-rate-limit.
> npm install express-rate-limit

IP / Client Key       Count
---------------------------
Client A                4
Client B                1
Client C                5

Count exceeds limit
      ↓
429 Too Many Requests ❌

## What is IP?
IP = Internet Protocol address
-> An IP address is an address used to identify/address a device or network endpoint so data can be routed across a network.


## express.json() vs express.urlencoded()

| Middleware             | Parses                 |
| ---------------------- | -----------------------|
| `express.json()`       | JSON request body      |
| `express.urlencoded()` | URL-encoded form body  |

## express.urlencoded()
-> A traditional HTML form may send data like:
-> email=gourav%40gmail.com&password=123456
-> It is not a JSON data ,  It's URL-encoded form data.
-> app.use(express.urlencoded({
        extended: true
    }));

## next() vs next(error)
-> Both are used inside Express middleware, but their purpose is different
> next() => next() tells Express: "My work is done, continue to the next middleware or route handler."

    GET /profile
        ↓
    auth()
        ↓
    Token exists ✅
        ↓
    next()
        ↓
    getProfile()
        ↓
    Response

> next(error) → Something went wrong ❌
-> next(error) tells Express: "An error occurred; send this error to the error-handling middleware."

    Request
    ↓
    Middleware / Controller
    ↓
    Error occurs ❌
    ↓
    next(error)
    ↓
    Skip normal handlers
    ↓
    Central Error Middleware
    ↓
    Error Response

