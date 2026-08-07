## What is Routing?
-> Routing is the process of deciding which code should run based on the request URL and HTTP method.
->Routing is the process of mapping an incoming request (URL and HTTP method) to the appropriate function or handler.

## Why is Express better?
Because Express automatically manages routing, making the code cleaner, easier to read, and easier to maintain.


    Request comes
    ↓

    Check URL + Method
    ↓
    Run the correct function
    ↓
    Send Response


## Without Express
    const http = require("http");

    const server = http.createServer((req, res) => {
        if(req.url === "/users" && req.method === "GET"){
                // return user details
        }   

        else if(req.url === "/users" && req.method === "POST"){
            // saved user details
        }

        else if(req.url === "/products"){
                return 
        }

        else if(req.url === "/login"){

        }

    });

    server.listen(3000);