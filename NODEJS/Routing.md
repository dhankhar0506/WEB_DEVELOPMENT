# What is Routing?

-> **Routing** is the process of deciding which code should run based on the **request URL and HTTP method**.

-> Routing is the process of **mapping an incoming request (URL and HTTP method) to the appropriate function or handler**.

---

# Why is Express better?

Because **Express automatically manages routing**, making the code cleaner, easier to read, and easier to maintain.

### Routing Flow

```text
Request comes
     ↓
Check URL + Method
     ↓
Run the correct function
     ↓
Send Response
```

---

# Without Express

Without Express, we need to manually check the request URL and HTTP method using conditions like `if` and `else if`.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/users" && req.method === "GET") {
        // return user details
    }

    else if (req.url === "/users" && req.method === "POST") {
        // save user details
    }

    else if (req.url === "/products") {
        // return products
    }

    else if (req.url === "/login") {
        // login logic
    }

});

server.listen(3000);
```

### Problem with this approach

As the application grows, we may have many:

```text
if
else if
else if
else if
...
```

This makes the code:

* Harder to read
* Harder to maintain
* Harder to organize
* Difficult to scale

Express provides a cleaner routing system.
