## What is Process?
A process is a program that is currently running (under execution) in the Operating System.

When you run -> 
Os creates
    Operating System
         ↓
    Node Process
        ↓
    app.js Running

## Process Object
-> The process object is a global Node.js object that provides information and control over the currently running Node.js process.
1. process.argv -> Returns an array of command-line arguments passed to the Node.js application.
   - Taking user input from the terminal. 

2. process.env ->Returns all environment variables of the current process.
    -> process.env is used to access environment variables. It stores configuration values and sensitive information such as database URLs, API keys, JWT secrets, and application ports.  
    -> where we store token , database url , data base password 
    .env File

      ↓

      Environment Variables

      ↓

      process.env

      ↓

      Node.js

3. process.exit() =>  Immediately terminates the current Node.js process.
    -> if (!process.env.DB_URL) {
            console.log("Database URL Missing");
            process.exit();
        }

4. process.pid => Returns the Process ID (PID) assigned by the Operating System.
   
   Chrome
   PID = 1452
   ----------------

   Node
   PID = 8524
   ----------------

   VS Code
   PID = 2100