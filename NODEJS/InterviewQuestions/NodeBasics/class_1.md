<!-- ## What is Node.js?
-> Node.js is a JavaScript runtime environment that allows us to execute JavaScript outside the browser, mainly for building backend applications and APIs

## What is the V8 Engine?
-> V8 is a JavaScript engine developed by Google that executes JavaScript code.

- It is written mainly in C++.
- It is used by Google Chrome.
- Node.js uses the V8 engine to execute JavaScript outside the browser.
- V8 converts JavaScript into machine code so it can be executed by the computer.

## What is JIT?
-> JIT = Just-In-Time Compilation

## How V8 works?
1. JavaScript Code
        ↓
2. Run the JavaScript Code
        ↓
3. V8 receives the JavaScript Code
        ↓
4. Parser
   → checks/analyzes the syntax and structure
        ↓
5. AST
   → structured representation of the code
        ↓
6. Bytecode
   → intermediate instructions
        ↓
7. Interpreter
   → executes the bytecode
        ↓
8. Hot Code detected
        ↓
9. JIT Optimization
   → optimizes frequently executed code
        ↓
10. Optimized Machine Code
        ↓
11. CPU executes it
        ↓
12. Output

1. JavaScript Code => This is just human-readable JavaScript.The computer's CPU cannot directly understand JavaScript syntax.So something needs to process it.That something is the JavaScript engine.

2. V8 Engine receives the code

3. Parser => The parser reads the JavaScript code and checks its structure.It also checks whether the JavaScript syntax is valid.

4. AST — Abstract Syntax Tree ->
-> AST converts your JavaScript code into a tree-like structure that shows V8 what each part of the code means and how the parts are related to each other.
        Variable
         |
         x
         |
         +
        / \
        10  20

->AST is basically a structured understanding of your code.
-> Then V8 converts that understanding into bytecode.

5. Bytecode => A set of small instructions that the JavaScript engine can execute.

6. Interpreter => Now we have bytecode.
               => Take the bytecode instructions and execute them. 
               => V8 has an interpreter called Ignition.

7. Hot Code detected -> If some code runs frequently, V8 identifies it as hot code.
    for (let i = 0; i < 1000000; i++) {
        add(i, i);
    }
    add() runs many times.
    -> Then JIT-related optimization mechanisms compile that hot code into optimized machine code.

8. Just-In-Time compilation => V8 can use JIT compilation techniques to optimize frequently executed code while the program is running.

9.  Optimized Machine Code => The JIT compiler can produce optimized machine code.

## Why is Node.js used for backend development?
- Fast : Node.js uses the V8 engine, which executes JavaScript efficiently.
- Non-blocking and Asynchronous
- JavaScript everywhere → Same language for frontend and backend.
- Non-blocking / asynchronous → Can handle many requests efficiently.
- Event-driven → Works well with APIs, real-time applications, etc.
- Huge npm ecosystem → Thousands of packages are available.

## Disadvantages of Node.js
-> Not Good for CPU-Heavy Tasks
Node.js executes JavaScript on a single main thread.If you perform a CPU-heavy operation on that thread, it can block the Event Loop.
        Heavy Calculation
        ↓
        Main Thread blocked
        ↓
        Other requests have to wait
 


## Is Node.js a programming language?
No, Node.js is not a programming language. It is a JavaScript runtime environment that allows JavaScript to run outside the browser.
        JavaScript → Programming language
        Node.js → Runtime environment
        V8 → JavaScript engine used by Node.js

## Is Node.js single-threaded?
- Yes, Node.js uses a single main thread to execute JavaScript code.
- But single-threaded does NOT mean Node.js can handle only one request at a time.
- Asynchronous operations like file read/write and network requests are handled outside the main JavaScript thread using Node.js APIs, libuv, and the operating system.
- While these operations are running, the main thread can continue executing other JavaScript code.
- When the operation is completed, the Event Loop sends the callback or Promise result back to the main thread to be executed.

## What is npm?
- npm (Node Package Manager) is a package manager used to install, manage, update, and remove packages in a Node.js project.
        npm install express
                ↓
        Download Express
                ↓
        Store it in node_modules
                ↓
        Add it to package.json
                ↓
        Save exact version in package-lock.json

## npm is mainly used for:
        Installing packages
        Updating packages
        Removing packages
        Managing project dependencies
        Running scripts

## What is npx?
-> npx is a tool that allows us to execute npm packages without manually installing them globally.

## What is package.json?
-> package.json is the configuration file of a Node.js project that contains information about the project, its dependencies, scripts, and other settings.

It can contain:
        Project name
        Version
        Scripts
        Dependencies
        Dev dependencies
        Project metadata

## What is package-lock.json?
-> package-lock.json records the exact versions of the packages and their dependencies installed in the project.

##  dependencies 
- Dependencies are packages required to run your application in production.
        dependencies
        → Required to run the application
        → Production

## devDependencies
DevDependencies are packages mainly used during development, testing, or building the application.

## What is node_modules?
-> node_modules is the folder where npm stores the packages installed for your project.
-> node_modules is the folder where project dependencies installed by npm are stored.

## What is .gitignore?
->.gitignore is a file used to tell Git which files and folders should NOT be tracked or uploaded to GitHub

## What is CommonJS?
-> CommonJS is a module system used in Node.js to import and export code between files.

It commonly uses:
        require() → import
        module.exports → export

        function add(a, b) {
                return a + b;
        }
        module.exports = add;


        const add = require("./math");
        console.log(add(2, 3));

##  What is ES Module?
-> ES Module (ESM) is the modern JavaScript module system that uses import and export to share code between files.

        export function add(a, b) {
                return a + b;
        }

        import { add } from "./math.js";
        console.log(add(2, 3));

## What is exports?
-> exports is a shortcut/reference to module.exports that can be used to export values from a CommonJS module.

## What is the process object?
-> The process object is a global Node.js object that provides information and control over the currently running Node.js process.
1. Environment variables :console.log(process.env.PORT);
2. Command-line arguments : console.log(process.argv);
3. Exit the application -> process.exit(1); -->


# Node.js Interview Notes

## 1. What is Node.js?

> Node.js is a JavaScript runtime environment that allows us to execute JavaScript outside the browser, mainly for building backend applications and APIs.

---

## 2. What is the V8 Engine?

> V8 is a JavaScript engine developed by Google that executes JavaScript code.

* It is written mainly in C++.
* It is used by Google Chrome.
* Node.js uses the V8 engine to execute JavaScript outside the browser.
* V8 converts JavaScript into machine code so it can be executed by the computer.

---

## 3. What is JIT?

> **JIT = Just-In-Time Compilation**

JIT compilation allows V8 to optimize frequently executed JavaScript code while the program is running.

---

# 4. How V8 Works

```text
1. JavaScript Code
        ↓
2. Run the JavaScript Code
        ↓
3. V8 receives the JavaScript Code
        ↓
4. Parser
   → checks/analyzes the syntax and structure
        ↓
5. AST
   → structured representation of the code
        ↓
6. Bytecode
   → intermediate instructions
        ↓
7. Interpreter
   → executes the bytecode
        ↓
8. Hot Code detected
        ↓
9. JIT Optimization
   → optimizes frequently executed code
        ↓
10. Optimized Machine Code
        ↓
11. CPU executes it
        ↓
12. Output
```

### 1. JavaScript Code

This is just human-readable JavaScript.

The computer's CPU cannot directly understand JavaScript syntax.

So, something needs to process it.

That something is the **JavaScript engine**.

### 2. V8 Engine Receives the Code

V8 receives the JavaScript code and starts processing it.

### 3. Parser

The parser reads the JavaScript code and checks its structure.

It also checks whether the JavaScript syntax is valid.

### 4. AST — Abstract Syntax Tree

AST converts your JavaScript code into a tree-like structure that shows V8 what each part of the code means and how the parts are related to each other.

Example:

```text
       Variable
          |
          x
          |
          +
         / \
       10   20
```

> AST is basically a structured understanding of your code.

Then V8 converts that understanding into **bytecode**.

### 5. Bytecode

> Bytecode is a set of small instructions that the JavaScript engine can execute.

### 6. Interpreter

Now we have bytecode.

* Take the bytecode instructions.
* Execute them.
* V8 has an interpreter called **Ignition**.

### 7. Hot Code Detected

If some code runs frequently, V8 identifies it as **hot code**.

Example:

```javascript
for (let i = 0; i < 1000000; i++) {
    add(i, i);
}
```

`add()` runs many times.

Then JIT-related optimization mechanisms compile that hot code into optimized machine code.

### 8. Just-In-Time Compilation

> V8 can use JIT compilation techniques to optimize frequently executed code while the program is running.

### 9. Optimized Machine Code

The JIT compiler can produce optimized machine code.

---

# 5. Why is Node.js Used for Backend Development?

### Fast

Node.js uses the V8 engine, which executes JavaScript efficiently.

### Non-blocking and Asynchronous

Node.js uses non-blocking and asynchronous operations, allowing it to handle many requests efficiently.

### JavaScript Everywhere

The same language can be used for both frontend and backend.

### Event-driven

Node.js is event-driven and works well with:

* APIs
* Real-time applications
* Network applications

### Huge npm Ecosystem

Thousands of packages are available through npm.

---

# 6. Disadvantages of Node.js

## Not Good for CPU-Heavy Tasks

Node.js executes JavaScript on a single main thread.

If you perform a CPU-heavy operation on that thread, it can block the Event Loop.

```text
Heavy Calculation
        ↓
Main Thread blocked
        ↓
Other requests have to wait
```

---

# 7. Is Node.js a Programming Language?

**No.**

Node.js is not a programming language.

It is a **JavaScript runtime environment** that allows JavaScript to run outside the browser.

```text
JavaScript → Programming language
Node.js    → Runtime environment
V8         → JavaScript engine used by Node.js
```

---

# 8. Is Node.js Single-Threaded?

* Yes, Node.js uses a single main thread to execute JavaScript code.
* But single-threaded does **NOT** mean Node.js can handle only one request at a time.
* Asynchronous operations like file read/write and network requests are handled outside the main JavaScript thread using Node.js APIs, libuv, and the operating system.
* While these operations are running, the main thread can continue executing other JavaScript code.
* When the operation is completed, the Event Loop sends the callback or Promise result back to the main thread to be executed.

---

# 9. What is npm?

> **npm (Node Package Manager)** is a package manager used to install, manage, update, and remove packages in a Node.js project.

Example:

```bash
npm install express
```

Flow:

```text
npm install express
        ↓
Download Express
        ↓
Store it in node_modules
        ↓
Add it to package.json
        ↓
Save exact version in package-lock.json
```

## npm is Mainly Used For

* Installing packages
* Updating packages
* Removing packages
* Managing project dependencies
* Running scripts

---

# 10. What is npx?

> npx is a tool that allows us to execute npm packages without manually installing them globally.

---

# 11. What is package.json?

> package.json is the configuration file of a Node.js project that contains information about the project, its dependencies, scripts, and other settings.

It can contain:

* Project name
* Version
* Scripts
* Dependencies
* Dev dependencies
* Project metadata

---

# 12. What is package-lock.json?

> package-lock.json records the exact versions of the packages and their dependencies installed in the project.

---

# 13. What are Dependencies?

> Dependencies are packages required to run your application in production.

```text
dependencies
      ↓
Required to run the application
      ↓
Production
```

---

# 14. What are devDependencies?

> DevDependencies are packages mainly used during development, testing, or building the application.

---

# 15. What is node_modules?

> node_modules is the folder where npm stores the packages installed for your project.

> node_modules is the folder where project dependencies installed by npm are stored.

---

# 16. What is .gitignore?

> `.gitignore` is a file used to tell Git which files and folders should **NOT** be tracked or uploaded to GitHub.

Example:

```text
node_modules/
.env
```

---

# 17. What is CommonJS?

> CommonJS is a module system used in Node.js to import and export code between files.

It commonly uses:

```text
require()       → import
module.exports  → export
```

### Export

```javascript
function add(a, b) {
    return a + b;
}

module.exports = add;
```

### Import

```javascript
const add = require("./math");

console.log(add(2, 3));
```

---

# 18. What is ES Module?

> ES Module (ESM) is the modern JavaScript module system that uses `import` and `export` to share code between files.

### Export

```javascript
export function add(a, b) {
    return a + b;
}
```

### Import

```javascript
import { add } from "./math.js";

console.log(add(2, 3));
```

---

# 19. What is exports?

> `exports` is a shortcut/reference to `module.exports` that can be used to export values from a CommonJS module.

---

# 20. What is the process Object?

> The `process` object is a global Node.js object that provides information and control over the currently running Node.js process.

## Common Uses

### 1. Environment Variables

```javascript
console.log(process.env.PORT);
```

Used to access environment variables.

### 2. Command-Line Arguments

```javascript
console.log(process.argv);
```

Used to access arguments passed from the command line.

### 3. Exit the Application

```javascript
process.exit(1);
```

Used to terminate the Node.js process.
