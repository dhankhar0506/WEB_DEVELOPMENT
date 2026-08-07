## MVC
-> In a Node.js + Express + MongoDB application, MVC is used to organize backend code into separate responsibilities.
-> MVC = Model + View + Controller
    Client / React
        ↓
    Routes
        ↓
    Controller
        ↓
    Model
        ↓
    MongoDB

> Model — Database layer
-> The Model defines data structure and communicates with MongoDB.

        const mongoose = require("mongoose");

        const studentSchema = new mongoose.Schema({
            name: String,
            email: String,
            age: Number,
            course: String
        });

        const Student = mongoose.model("Student", studentSchema );
        module.exports = Student;
    -> Model handles data structure and database operations.

> Controller — Logic layer
-> Controller handles the request logic and communicates with the Model.

> View is the presentation/UI layer.
-> In a MERN application, React typically handles this frontend presentation layer, while Express provides the backend API.

MODEL
→ Define Schema
→ Create Mongoose Model from Schema
→ Model communicates with database

CONTROLLER
→ Contains request/application logic
→ Uses Model to interact with database
→ Sends response

ROUTE
→ Maps URL + HTTP method to Controller

VIEW
→ UI / presentation shown to user
→ In MERN, usually React/Next.js

## MVC concept          MERN example
Model        →       Mongoose Models + MongoDB
View         →       React UI
Controller   →       Express Controllers