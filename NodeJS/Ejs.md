## What is EJS in Node.js?
-> EJS (Embedded JavaScript) is a template engine used with Node.js/Express to generate dynamic HTML on the server.
-> EJS is useful when we want Node.js/Express itself to generate HTML pages on the server.
-> EJS is a server-side templating engine used when Express renders HTML. In applications with a separate React frontend, we generally don't need EJS because Express provides APIs/JSON and React handles the UI.

>   npm i ejs
    const express = require("express");
    const app = express();

    // Tell Express we are using EJS
    app.set("view engine", "ejs");

    app.get("/", (req, res) => {

        res.render("home", {name: "Aman",age: 25});

    });

    app.listen(3000);
    project/
    │
    ├── server.js
    │
    └── views/
        └── view.ejs

> view.ejs
    <!DOCTYPE html>
    <html>
        <body>

            <h1>Hello <%= name %></h1>  

            <p>Your age is <%= age %></p>

        </body>
    </html>