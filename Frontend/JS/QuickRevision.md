# JavaScript Interview — Quick Revision

> **Last-minute revision sheet:** Simple definitions only, focused on the topics covered.

---

## 1. JavaScript Basics

| Topic                 | Simple Definition                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| **JavaScript**        | A high-level, dynamically typed programming language mainly used to make web applications interactive. |
| **Dynamically Typed** | Variable types are decided at runtime; we don't declare the data type explicitly.                      |
| **Synchronous**       | Tasks execute one after another in order.                                                              |
| **Asynchronous**      | A task can start and complete later while JavaScript continues executing other code.                   |
| **Single Threaded**   | JavaScript has one main call stack and executes one piece of JavaScript code at a time.                |
| **JIT Compilation**   | JavaScript code is compiled/optimized while the program is running.                                    |

---

## 2. JavaScript Engine

| Topic                 | Simple Definition                                                 |
| --------------------- | ----------------------------------------------------------------- |
| **JavaScript Engine** | Software that reads and executes JavaScript code.                 |
| **V8**                | Google's JavaScript engine used by Chrome and Node.js.            |
| **Lexer / Tokenizer** | Breaks source code into meaningful tokens.                        |
| **Parser**            | Checks syntax and builds the structure of the program.            |
| **AST**               | A tree representation of the structure of JavaScript code.        |
| **Ignition**          | V8's interpreter that generates and executes bytecode.            |
| **Bytecode**          | Intermediate instructions used by V8 to execute JavaScript.       |
| **Hot Code**          | Code that executes frequently.                                    |
| **TurboFan**          | V8's optimizing compiler that optimizes frequently executed code. |

### Basic Flow

```text
Source Code
     ↓
Tokens
     ↓
Parser
     ↓
AST
     ↓
Bytecode
     ↓
Execution
     ↓
Optimization
```

---

## 3. Execution Context & Memory

| Topic                                | Simple Definition                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Execution Context**                | The environment in which JavaScript code is executed.                                              |
| **Global Execution Context (GEC)**   | The first execution context created when a JavaScript program starts.                              |
| **Function Execution Context (FEC)** | A new execution context created whenever a function is called.                                     |
| **Memory Creation Phase**            | JavaScript allocates memory for variables and function declarations before execution.              |
| **Code Execution Phase**             | JavaScript executes statements and assigns actual values.                                          |
| **Call Stack**                       | A LIFO stack that keeps track of currently executing functions/execution contexts.                 |
| **Heap Memory**                      | Memory area mainly used to store objects, arrays, functions, and other dynamically allocated data. |
| **Garbage Collection**               | Automatic process of reclaiming memory that is no longer reachable.                                |
| **Memory Leak**                      | Memory remains reachable even though the application no longer needs it.                           |

---

## 4. Hoisting, TDZ & Scope

| Topic                   | Simple Definition                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Hoisting**            | JavaScript creates bindings for declarations during the creation phase before code execution.         |
| **TDZ**                 | The period where a `let` or `const` binding exists but cannot be accessed before initialization.      |
| **Scope**               | Determines where a variable can be accessed.                                                          |
| **Global Scope**        | Variables available globally.                                                                         |
| **Function Scope**      | Variables accessible only inside a function.                                                          |
| **Block Scope**         | Variables accessible only inside a `{}` block.                                                        |
| **Lexical Scope**       | Variable access is determined by where functions are written in the source code.                      |
| **Lexical Environment** | Stores bindings for a scope and a reference to its outer environment.                                 |
| **Scope Chain**         | JavaScript searches from the current scope outward until it finds a variable or reaches global scope. |

### Important

```text
var       → function scoped
let/const → block scoped
```

---

## 5. Closure

### Definition

**Closure:** A function together with access to the lexical environment where it was created, allowing it to remember outer variables even after the outer function finishes.

```text
Outer Function
      ↓
Inner Function
      ↓
Remembers Outer Variables
      ↓
Closure
```

### Common Uses

* **Debouncing**
* **Throttling**
* **Data privacy**
* **Callbacks**
* **Function factories**

---

## 6. Callback, Promise & Async/Await

| Topic             | Simple Definition                                                                    |
| ----------------- | ------------------------------------------------------------------------------------ |
| **Callback**      | A function passed to another function to be executed later or when needed.           |
| **Callback Hell** | Deeply nested callbacks that make code difficult to read and maintain.               |
| **Promise**       | An object representing the eventual success or failure of an asynchronous operation. |
| **Pending**       | Promise operation hasn't completed yet.                                              |
| **Fulfilled**     | Promise completed successfully.                                                      |
| **Rejected**      | Promise failed.                                                                      |
| **`.then()`**     | Handles a fulfilled Promise.                                                         |
| **`.catch()`**    | Handles a rejected Promise.                                                          |
| **`.finally()`**  | Runs after a Promise settles, whether fulfilled or rejected.                         |
| **`async`**       | Makes a function return a Promise.                                                   |
| **`await`**       | Pauses that async function until the awaited Promise settles.                        |

### Promise States

```text
Pending
   ↓
   ├──→ Fulfilled
   │
   └──→ Rejected
```

---

## 7. Event Loop & Async JavaScript

| Topic                   | Simple Definition                                                             |
| ----------------------- | ----------------------------------------------------------------------------- |
| **Runtime Environment** | Browser/Node environment that provides APIs around the JavaScript engine.     |
| **Web APIs**            | Browser-provided features such as `setTimeout`, DOM events, and `fetch`.      |
| **Event Loop**          | Coordinates when queued asynchronous callbacks can execute on the call stack. |
| **Microtask Queue**     | High-priority queue used by Promise reactions and other microtasks.           |
| **Task Queue**          | Queue used by tasks such as timer callbacks.                                  |
| **`setTimeout()`**      | Schedules a callback to run after at least the specified delay.               |
| **`fetch()`**           | API used to make network requests; it returns a Promise.                      |

### Important

> **Microtasks are processed before the next task such as a `setTimeout` callback.**

---

## 8. Prototype

| Topic                    | Simple Definition                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Prototype**            | An object from which another object can inherit properties and methods.                                     |
| **Prototype Chain**      | The chain JavaScript follows when searching prototypes for a property or method.                            |
| **`prototype`**          | Property on constructable functions used as the prototype of objects created with `new`.                    |
| **`__proto__`**          | Legacy accessor exposing an object's internal prototype.                                                    |
| **Constructor Function** | A function used with `new` to create and initialize objects.                                                |
| **`new`**                | Creates an object, links its prototype, calls the constructor with `this`, and normally returns the object. |
| **`Object.create()`**    | Creates a new object with the provided object as its prototype.                                             |

---

## 9. Classes & OOP

| Topic                  | Simple Definition                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Class**              | A blueprint-like syntax for creating objects; JavaScript classes use prototypes underneath.                      |
| **Object**             | An instance containing properties and methods.                                                                   |
| **Constructor**        | Special class method that runs when an object is created with `new`.                                             |
| **Property**           | Data stored on an object.                                                                                        |
| **Method**             | A function associated with an object/class.                                                                      |
| **Inheritance**        | Allows a child class/object to reuse behavior from a parent.                                                     |
| **`extends`**          | Creates class inheritance.                                                                                       |
| **`super`**            | Used to call/access parent constructor or methods.                                                               |
| **Encapsulation**      | Bundling data and behavior together while controlling access to internal data.                                   |
| **Abstraction**        | Hiding implementation details and exposing essential functionality.                                              |
| **Polymorphism**       | Same interface/method name can behave differently for different objects.                                         |
| **Method Overriding**  | Child class provides its own implementation of a parent method.                                                  |
| **Method Overloading** | Same method name with different parameter signatures; JavaScript doesn't support traditional overloads directly. |
| **Static Method**      | Method belonging to the class itself rather than its instances.                                                  |
| **Private Field `#`**  | Class field/method syntax that restricts access to the class body.                                               |
| **Getter**             | Controls how a property value is read.                                                                           |
| **Setter**             | Controls how a property value is assigned.                                                                       |

### Four OOP Pillars

```text
Encapsulation
      ↓
Inheritance
      ↓
Polymorphism
      ↓
Abstraction
```

---

## 10. `this`

### Definition

**`this`:** A special value whose value depends on how a regular function is called.

### Example

```js
person.show();
```

```text
this → person
```

### Important

> **Arrow functions don't create their own `this`; they capture `this` lexically from the surrounding context.**

---

## 11. `call()`, `apply()`, `bind()`

| Method        | Simple Definition                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **`call()`**  | Immediately calls a function with a specified `this`; arguments are passed separately.                   |
| **`apply()`** | Immediately calls a function with a specified `this`; arguments are passed as an array/array-like value. |
| **`bind()`**  | Returns a new function with `this` fixed to the provided value.                                          |

### Easy Memory Trick

```text
call  → Call now
apply → Call now + arguments as array
bind  → Create function for later
```

---

## 12. JavaScript Events

| Topic                            | Simple Definition                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| **Event**                        | An occurrence such as click, input, submit, keypress, or scroll.                      |
| **Event Listener**               | Registers a function to run when a specific event occurs.                             |
| **Event Handler**                | The function executed in response to an event.                                        |
| **Event Object**                 | Object containing information about an event.                                         |
| **`event.target`**               | Element where the event originated.                                                   |
| **`event.currentTarget`**        | Element whose listener is currently executing.                                        |
| **Event Propagation**            | How an event travels through the DOM.                                                 |
| **Capturing**                    | Event travels from outer DOM toward the target.                                       |
| **Target Phase**                 | Event reaches its target.                                                             |
| **Bubbling**                     | Event travels from target back through ancestors.                                     |
| **`stopPropagation()`**          | Stops further event propagation.                                                      |
| **`stopImmediatePropagation()`** | Also prevents remaining listeners on the same element from running.                   |
| **`preventDefault()`**           | Prevents the browser's default action when the event is cancelable.                   |
| **Event Delegation**             | Uses one parent listener to handle events from multiple children through propagation. |
| **`removeEventListener()`**      | Removes a registered listener using the same function reference.                      |

### Event Propagation

```text
Capturing
    ↓
Target Phase
    ↓
Bubbling
```

---

## 13. Debouncing

### Definition

**Debouncing:** Delays execution until repeated events stop for a specified amount of time.

```text
Typing → Typing → Typing → STOP → Wait → Execute once
```

### Used For

* **Search box**
* **Autocomplete**
* **Auto-save**
* **Validation**

### Why `clearTimeout()`?

> It cancels the previous pending timer so only the latest call executes.

---

## 14. Throttling

### Definition

**Throttling:** Limits a function so it executes at most once within a specified time interval.

```text
Execute → Wait/Block → Allow → Execute
```

### Used For

* **Scroll**
* **Resize**
* **Mousemove**
* **Continuous events**

### Debounce vs Throttle

| Debounce               | Throttle                  |
| ---------------------- | ------------------------- |
| Wait until events stop | Limit execution frequency |
| Search                 | Scroll                    |
| Final action matters   | Continuous updates matter |

---

## 15. Iterable

### Definition

**Iterable:** An object that implements `[Symbol.iterator]()` and can provide an iterator.

### Built-in Examples

* **Array**
* **String**
* **Map**
* **Set**

> **Important:** Plain `{}` objects are not iterable by default.

---

## 16. Iterable Protocol

### Definition

**Iterable Protocol:** An iterable must implement `[Symbol.iterator]()` that returns an iterator.

```text
Iterable
   ↓
Symbol.iterator()
   ↓
Iterator
```

---

## 17. Iterator

### Definition

**Iterator:** An object with a `next()` method that produces the next iteration result.

```js
iterator.next();
```

### Returns

```js
{
  value: 10,
  done: false
}
```

---

## 18. Iterator Protocol

### Definition

**Iterator Protocol:** An iterator must provide `next()`, which returns an object containing `value` and `done`.

```text
value → current value
done  → whether iteration finished
```

---

## 19. Generator

### Definition

**Generator:** A special `function*` that can pause and resume using `yield` and provides an easy way to create iterators.

```js
function* numbers() {
    yield 10;
    yield 20;
}
```

### Calling It

```js
const gen = numbers();
```

This returns a **Generator Object**.

### Important

> **Generator Object = Iterator + Iterable**

---

## 20. `yield`

### Definition

**`yield`:** Produces a value from a generator and pauses execution until the next `next()` call.

```text
next()
  ↓
yield
  ↓
PAUSE
  ↓
next()
  ↓
RESUME
```

---

## 21. `yield` vs `return`

| `yield`                  | `return`                      |
| ------------------------ | ----------------------------- |
| Produces value + pauses  | Produces final value + ends   |
| Can resume               | Cannot resume                 |
| Generator only           | Normal + generator functions  |
| Multiple yields possible | Executed return ends function |

---

## 22. Lazy Evaluation

### Definition

**Lazy Evaluation:** A value is generated/calculated only when it is requested.

Generators naturally support it:

```text
next() → Generate 1
next() → Generate 2
next() → Generate 3
```

---

# ⭐ Last-Minute Definitions to Memorize

If you have very little time, memorize these:

| Topic               | Quick Definition                                                      |
| ------------------- | --------------------------------------------------------------------- |
| **Closure**         | Function remembers its outer lexical variables.                       |
| **Hoisting**        | Bindings/declarations are processed during creation before execution. |
| **TDZ**             | `let`/`const` cannot be accessed before initialization.               |
| **Promise**         | Object representing eventual success/failure of async work.           |
| **Async/Await**     | Cleaner syntax for working with Promises.                             |
| **Event Loop**      | Coordinates execution of queued asynchronous callbacks.               |
| **Prototype**       | Object used for property/method inheritance.                          |
| **Class**           | Cleaner syntax over JavaScript's prototype-based object system.       |
| **`this`**          | Depends on how a regular function is called.                          |
| **`call`**          | Execute now with specified `this`.                                    |
| **`apply`**         | Execute now with specified `this` + arguments array.                  |
| **`bind`**          | Return a new function with fixed `this`.                              |
| **Debounce**        | Wait until events stop.                                               |
| **Throttle**        | Limit execution frequency.                                            |
| **Iterable**        | Has `[Symbol.iterator]()`.                                            |
| **Iterator**        | Has `next()` → `{ value, done }`.                                     |
| **Generator**       | `function*` that pauses/resumes using `yield`.                        |
| **`yield`**         | Produce value + pause generator.                                      |
| **Lazy Evaluation** | Generate values only when requested.                                  |
| **Memory Leak**     | Unneeded memory remains reachable/referenced.                         |

---

# 🔥 Core JS Flow

```text
JavaScript Code
      ↓
JS Engine / V8
      ↓
Execution Context
      ↓
Call Stack
      ↓
Synchronous Code Executes
      ↓
Async work handled by Runtime APIs
      ↓
Microtask / Task Queues
      ↓
Event Loop
      ↓
Call Stack
```

---

# 🎯 Highest-Priority Interview Topics

For tomorrow's interview, the **highest-priority topics** from this sheet are:

1. **Execution Context**
2. **Call Stack**
3. **Hoisting + TDZ**
4. **Scope + Closure**
5. **`this` + `call()` / `apply()` / `bind()`**
6. **Promises + Async/Await + Event Loop**
7. **Prototype + OOP**
8. **Events + Event Delegation**
9. **Debounce vs Throttle**
10. **Iterable / Iterator / Generator**
