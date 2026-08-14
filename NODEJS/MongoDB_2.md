# MongoDB + Node.js (Connection)

## MongoDB URL

Put MongoDB URL in `.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/college
PORT=5000
```

### MongoDB URL Breakdown

```text
mongodb://          → MongoDB protocol
127.0.0.1           → MongoDB running on our computer
27017               → Default MongoDB port
college             → Database name
```

---

## Connect Using Mongoose

```bash
npm install dotenv
```

```js
require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
```

Connect it from the server:

```js
connectDB(); // call it from server
```

---

# What is Mongoose?

-> Mongoose is an **ODM (Object Data Modeling)** library for Node.js that makes working with MongoDB easier.

-> It provides schemas to define the structure and rules of documents, models to interact with MongoDB, validation, middleware/hooks to run logic before or after database operations and other useful features.

```text
Mongoose
│
├── Schema
│     → Defines document structure/rules
│
├── Model
│     → Communicates with MongoDB
│     → find(), create(), update(), delete()
│
├── Validation
│     → Validate data before saving
│
├── Middleware / Hooks
│     → Run logic before/after certain operations
│
├── populate()
│     → Get referenced document data
│
└── Other features
        → timestamps, virtuals, methods, indexes...
```

---

# Complete Flow

```text
MongoDB Server
│
└── college                 ← Database
    │
    ├── students            ← Collection (like SQL table)
    │
    ├── teachers
    │
    └── course
```

---

## 1. Create / Select Database in MongoDB Shell

```bash
use college
```

> Switch to the `college` database. If it doesn't exist yet, MongoDB can create it when data/collections are actually created.

Check current database:

```bash
db
```

---

## 2. Create Students Collection

```js
db.createCollection("students")
```

Check the collection/table exists:

```bash
show collections
```

Use command like:

```js
db.students.find()
```

---

# 3. Connect Node.js + Mongoose

### Project Structure

```text
college-app/
│
├── server.js
├── .env
│   ├── MONGO_URI=mongodb://127.0.0.1:27017/college
│   └── PORT=5000
│
├── models/
│   └── Student.js
│
├── controllers/
│   └── studentController.js
│
└── routes/
    └── studentRoutes.js
```

MongoDB URI:

```text
mongodb://127.0.0.1:27017/college
         ↑
         Database name
         (Connect my application to the college database.)
```

---

## Connect Mongoose

```js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(5000, () => {
    console.log("Server Running");
});
```

---

# 4. Create Student Schema

### `models/Student.js`

```js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        age: {
            type: Number,
            required: true,
            min: 18
        },

        course: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        }
    },
    {
        timestamps: true
    }
);
```

---

## Add Mongoose Middleware

Suppose before saving a student, we want to convert the email to lowercase.

```js
studentSchema.pre("save", function (next) {
    this.email = this.email.toLowerCase();
    next();
});
```

Create the model:

```js
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
```

> `"Student"` is the Mongoose **MODEL name**, not directly the collection name.

---

# 5. Create Controller

### `controllers/studentController.js`

```js
const Student = require("../models/Student");


// 1. CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            course: req.body.course
        });

        res.status(201).json(student);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// 2. GET ALL STUDENTS
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// 3. GET ONE STUDENT
const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// 4. UPDATE STUDENT
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,    // which student
            req.body,         // what to update
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// update Many
const updateBCAStudents = async (req, res) => {
    try {

        const result = await Student.updateMany(
            { course: "BCA" },
            {
                $set: {
                    status: "inactive"
                }
            }
        );

        res.status(200).json({
            message: "Students updated",
            matched: result.matchedCount,
            updated: result.modifiedCount
        });

    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            });
    }
};


// 5. DELETE STUDENT
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// EXPORT ALL CONTROLLERS
module.exports = {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
};
```

---

# 6. Create Route

### `routes/studentRoutes.js`

```js
const express = require("express");

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:id", getStudent);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
```

---

# 7. Register Route

### `server.js`

```js
// Routes
app.use("/students", studentRoutes);
```
