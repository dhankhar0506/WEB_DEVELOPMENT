# EJS in Node.js

## What is EJS in Node.js?

> **EJS (Embedded JavaScript)** is a template engine used with Node.js/Express to generate dynamic HTML on the server.

* EJS is useful when we want **Node.js/Express itself to generate HTML pages on the server**.
* EJS is a **server-side templating engine** used when Express renders HTML.
* In applications with a separate React frontend, we generally don't need EJS because:

  * Express provides APIs/JSON.
  * React handles the UI.

---

## Installing EJS

```bash
npm i ejs
```

---

## Using EJS with Express

```js
const express = require("express");
const app = express();

// Tell Express we are using EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    name: "Aman",
    age: 25
  });
});

app.listen(3000);
```

---

## Project Structure

```text
project/
│
├── server.js
│
└── views/
    └── view.ejs
```

> By default, Express looks for EJS files inside the `views` folder.

---

## `view.ejs`

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>Hello <%= name %></h1>

    <p>Your age is <%= age %></p>

  </body>
</html>
```

---

## How It Works

```text
Browser
   ↓
GET /
   ↓
Express Server
   ↓
res.render("home", {
    name: "Aman",
    age: 25
})
   ↓
EJS Template
   ↓
Dynamic HTML Generated
   ↓
HTML Response
   ↓
Browser
```

### Important Interview Point

> **EJS generates HTML on the server**, while React generally generates/manages the UI on the client side.

For a **MERN application with a separate React frontend**, the common approach is:

```text
React Frontend
      ↓
HTTP Request
      ↓
Express / Node.js API
      ↓
MongoDB
      ↓
JSON Response
      ↓
React UI
```

Rather than:

```text
Browser
   ↓
Express
   ↓
EJS
   ↓
HTML
   ↓
Browser
```
