## Chapter 2: JavaScript Execution Context'
-Execution Contexts are created by V8, managed by the Call Stack, and use the Heap only when objects, arrays, or other reference-type values need memory.

1. Suppose we write this code
    let a = 10;

    function add() {
        let b = 20;
        console.log(a + b);
    }

    add();

Step 1: V8 Converts Code into Bytecode
    JavaScript Code
        │
        ▼
    Lexer
        │
        ▼
    Parser
        │
        ▼
    AST
        │
        ▼
    Ignition
        │
        ▼
    Bytecode


Step 2: V8 Creates Global Execution Context (GEC)
- Global Execution Context is the first execution context created by V8 when a JavaScript program starts. It stores all global variables, global functions, this, and scope information.
  - Global Execution Context
  ┌────────────────────────────┐
  │ Variables                  │
  │ a                          │
  │                            │
  │ Functions                  │
  │ add()                      │
  │                            │
  │ this                       │
  │ Scope                      │
  └────────────────────────────┘

Step 3: Call Stack : Call Stack is a LIFO (Last In, First Out) stack that keeps track of the currently executing execution contexts.
    Call Stack
    ┌──────────────────────┐
    │ Global Context       │
    └──────────────────────┘



Step 4:   Memory Creation Phase?
- When V8 creates an Execution Context, it doesn't start executing the code immediately.
    Step 1: Scan the Code
        - var a;("I found a variable. I'll create memory for it.")
        - a → undefined (It doesn't assign 10 yet.)
        - "I found a function. I'll store the entire function."
        
        Global Execution Context
        ┌──────────────────────────────┐
        │ a   → undefined              │
        │ b   → undefined              │
        │ add → function(){...}        │
        └──────────────────────────────┘
    
    Step 2: Code Execution Phase
        Global Execution Context
        ┌──────────────────────────────┐
        │ a   → 10                     │
        │ b   → 20                     │
        │ add → function(){...}        │
        └──────────────────────────────┘



Step 5: Function Execution Context (FEC)
- "I need another workspace for this function."
A Function Execution Context is a new execution context created every time a function is invoked. It stores that function's local variables, arguments, this, and scope information.


Step 6: Call Stack Pushes It
    ┌──────────────────────┐
    │ add() Context        │
    ├──────────────────────┤
    │ Global Context       │
    └──────────────────────┘

Step 7: Memory Heap
- Memory Heap is a large memory area where JavaScript stores objects, arrays, and other reference-type values. Execution contexts store only references to these values.
- No Heap is needed= Primitive values(1,a,true,null)
- the object is too large.So JavaScript stores it in the Heap.
  - let person = {
      name: "Gourav"
  };


  Global Execution Context
┌────────────────────────────┐
│ person                     │
│      │                     │
└──────│─────────────────────┘
       │
       ▼
(HEAP)
┌───────────────────────────┐
│ {                         │
│   name : "Gourav"         │
│ }                         │
└───────────────────────────┘

Step 8: Execute Function

Step 9: Function Finishes
    - Function Context is destroyed.

Step 10: Program Ends
    - Global Context removed.