## What is JavaScript?
JavaScript is a high-level, interpreted scripting language used to make web pages interactive. Runs in the browser and also on the server (Node.js).

1. Interpreted : JavaScript code is executed line by line by the JavaScript engine (like Chrome's V8) without creating a separate executable file
    Read Line 1 → Execute
    Read Line 2 → Execute

2. Dynamically Typed : You don't need to specify the data type of a variable. JavaScript automatically determines it at runtime.

3. Event Driven :JavaScript is an event-driven language because it waits for events such as button clicks, keyboard input, timers, or API responses. When an event occurs, JavaScript executes the associated callback function. This makes JavaScript ideal for interactive web applications.

4. light Weight => JavaScript is called lightweight because it has a simple syntax, uses less memory, starts executing quickly, and its engine (V8) initially generates lightweight bytecode instead of compiling all code into machine code. Only frequently executed (hot) code is later optimized into machine code.


# C++ vs JavaScript Execution
- Step 1: Write Code
Step2: The compiler (g++) converts C++ code into machine code (0s and 1s).
Step 3: Run Time The operating system executes the generated machine code

- How JavaScript Runs : JavaScript runs inside a JavaScript engine (like V8 in Chrome and Node.js). The engine parses the code and uses Just-In-Time (JIT) compilation to convert it into machine code internally before executing it.

## Makes web pages interactive.
    Manipulates HTML & CSS.
    Validates forms.
    Handles API requests.
    Creates dynamic web applications.


## IMPORTANT-POINTS
1. JavaScript itself is NOT asynchronous. JavaScript is a synchronous, single-threaded language.
2.  the environment (Browser or Node.js) provides asynchronous features.

## Step 1: What is Synchronous?  
- One task executes completely before the next task starts.(JavaScript executes line by line.)

## Step 2: What is Asynchronous?
- A task starts, but JavaScript doesn't wait for it to finish. It continues executing the next lines.

## Step 3: Is JavaScript Asynchronous?
No. JavaScript itself has
    One Call Stack      
    One Thread
It executes only one statement at a time.


            JavaScript
        (Single Thread)

               │
               ▼
          Call Stack
               │
───────────────┼────────────────
               │
      Runtime Environment
      (Browser / Node.js)

   Browser APIs        Node.js APIs
   - setTimeout()      - fs.readFile()
   - fetch()           - HTTP
   - DOM Events        - Database
   - AJAX              - Sockets

               │
               ▼
         Callback Queue
               │
               ▼
           Event Loop
               │
               ▼
      JavaScript Executes Callback


## IMPORTANT POINTS
1. An Execution Context is the environment where JavaScript executes code. Every piece of JavaScript code runs inside an execution context.
2. Execution Context
       │
       ├── 1. Memory Creation Phase (Creation Phase)
       └── 2. Code Execution Phase

Step 1: Execution Context is Created
    As soon as JS sees the file, it creates a Global Execution Context (GEC).
    Now it enters the Memory Creation Phase.

Phase 1: Memory Creation Phase (Creation Phase)
    - Because the purpose of the Memory Creation Phase is NOT to execute code.
    - Find variables
    - Reserve memory
    - Find functions
    - Store function definitions
    
    JavaScript does not execute code here.
    It only scans the entire code and allocates memory.
    It stores Variables and Functions(refrence)
    Memory After Phase 1
        Global Memory
            a     → undefined
            b     → undefined
            add   → function(){...}






Phase 2: Code Execution Phase : Now JavaScript starts executing code line by line from top to bottom.
    a → 10
    b → 20
    add → function

add()=> Now another Execution Context is created.
        Function Execution Context : Calling a function creates a new Execution Context.
        Again it has two phases.add()
                    Execution Context

                    Memory Phase
                    Execution Phase



                    JavaScript Starts
                            │
                            ▼
                    Creates Global Execution Context
                            │
                            ▼
                    ────────────────────────────
                    Memory Creation Phase
                    ────────────────────────────

                    a   → undefined
                    b   → undefined
                    add → function

                            │
                            ▼
                    ────────────────────────────
                    Code Execution Phase
                    ────────────────────────────

                    a = 10
                    b = 20

                    console.log(a)
                    Output → 10

                    add()

                            │
                            ▼
                    Creates Function Execution Context

                    Memory
                    c → undefined

                    Execution
                    c = 30

                    console.log(c)
                    Output → 30

                    Function Ends

                    Global Context Ends
                    Program Finished