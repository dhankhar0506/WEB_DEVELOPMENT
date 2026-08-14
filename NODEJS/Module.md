# What is a Module?

A **module** is a JavaScript file that contains related code (functions, classes, variables, etc.) for a specific purpose. It helps organize and reuse code.

### Example

```text
auth.js      → Authentication module
db.js        → Database module
math.js      → Math module
user.js      → User module
```

---

## Benefits

* Reusable code
* Cleaner project
* Easy maintenance
* Better organization

---

# CommonJS (Old Module System)

### Export

```js
module.exports = add;
```

### Import

```js
const add = require("./math");
```

---

# ES Modules (Modern Module System)

### Named Export

```js
export function add() {}
```

### Import

```js
import { add } from "./math.js";
```

### Default Export

```js
export default function add() {}
```

### Import

```js
import add from "./math.js";
```

---

# Do We Need to Change Anything?

-> For ES Modules, yes we can.

### Option 1: Most Common

`package.json`

```json
{
  "type": "module"
}
```

Now you can use:

```js
import express from "express";
```

---

# Example

## Export — `math.js`

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

## Import — `app.js`

```js
const add = require("./math");

console.log(add(5, 3));
```

---

# Circular Dependencies

-> A **circular dependency** occurs when two or more modules depend on each other, directly or indirectly.

---

# What is Module Caching?

-> Node.js executes a module only once. After the first import, it stores the module in memory and returns the cached version for future imports.
