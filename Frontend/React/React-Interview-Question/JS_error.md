# JavaScript — Types of Errors

An **error** in JavaScript is a problem that occurs while writing or executing code and prevents the program from working as expected.

JavaScript mainly has these common types of errors:

1. **Syntax Error**
2. **Reference Error**
3. **Type Error**
4. **Range Error**
5. **URI Error**
6. **Eval Error**

---

# 1. Syntax Error

A **Syntax Error** occurs when JavaScript code does not follow the correct syntax or grammar of the language.

The JavaScript engine cannot properly understand the code.

### Example

```js
const name = "Gourav"
console.log(name;
```

Here, the closing `)` is missing.

### Correct Code

```js
const name = "Gourav";
console.log(name);
```

### Simple Definition

> **Syntax Error means the code is written with incorrect JavaScript syntax.**

---

# 2. Reference Error

A **Reference Error** occurs when you try to access a variable or identifier that does not exist or is not accessible in the current scope.

### Example

```js
console.log(username);
```

If `username` has not been declared:

```text
ReferenceError: username is not defined
```

### Another Example

```js
function test() {
  console.log(age);
}

test();
```

If `age` does not exist in the accessible scope, JavaScript throws a `ReferenceError`.

### Simple Definition

> **Reference Error means JavaScript cannot find the variable or identifier you are trying to access.**

---

# 3. Type Error

A **Type Error** occurs when you perform an operation on a value that is not supported for its type.

### Example

```js
const number = 10;

number.toUpperCase();
```

`toUpperCase()` is a string method, but `number` is a number.

JavaScript throws:

```text
TypeError: number.toUpperCase is not a function
```

### Another Example

```js
const user = null;

console.log(user.name);
```

You cannot access a property from `null`.

### Simple Definition

> **Type Error means an operation is being performed on a value of an inappropriate type.**

---

# 4. Range Error

A **Range Error** occurs when a value is outside the allowed range.

### Example

```js
const number = 1;

number.toFixed(200);
```

`toFixed()` does not allow such a large number of decimal places, so JavaScript can throw a `RangeError`.

### Another Example

```js
const arr = new Array(-1);
```

An array cannot have a negative length.

This produces:

```text
RangeError: Invalid array length
```

### Simple Definition

> **Range Error means a value is outside the valid range allowed by JavaScript.**

---

# 5. URI Error

A **URI Error** occurs when URI-related functions such as `decodeURIComponent()` receive an invalid URI.

### Example

```js
decodeURIComponent("%");
```

The `%` is not a valid encoded URI sequence.

JavaScript can throw:

```text
URIError: URI malformed
```

### Simple Definition

> **URI Error occurs when an invalid URI is passed to a URI handling function.**

---

# 6. Eval Error

`EvalError` is a legacy error type related to the `eval()` function.

Modern JavaScript generally does not use `EvalError`, and JavaScript engines typically do not throw it in normal code.

### Example

```js
try {
  throw new EvalError("Example EvalError");
} catch (error) {
  console.log(error);
}
```

### Simple Definition

> **EvalError is a legacy error type associated with `eval()` and is rarely encountered in modern JavaScript.**

---

# Common Errors — Quick Comparison

| Error              | Meaning                              | Example                                 |
| ------------------ | ------------------------------------ | --------------------------------------- |
| **SyntaxError**    | Code syntax is incorrect             | Missing `)` or `}`                      |
| **ReferenceError** | Variable/identifier cannot be found  | `console.log(x)` when `x` doesn't exist |
| **TypeError**      | Invalid operation for a value's type | `10.toUpperCase()`                      |
| **RangeError**     | Value is outside an allowed range    | `new Array(-1)`                         |
| **URIError**       | Invalid URI passed to URI function   | `decodeURIComponent("%")`               |
| **EvalError**      | Legacy error related to `eval()`     | `new EvalError()`                       |

---

# Runtime Errors

A useful interview distinction is between **syntax errors** and errors that occur while the code is running.

### Syntax Error

The JavaScript engine cannot parse the code correctly.

```js
const name = ;
```

```text
SyntaxError
```

### Runtime Error

The code is syntactically valid, but an error occurs while executing it.

```js
const user = null;

console.log(user.name);
```

```text
TypeError
```

---

# Handling Errors with `try...catch`

JavaScript provides `try...catch` to handle many runtime errors.

```js
try {
  const user = null;

  console.log(user.name);
} catch (error) {
  console.log("Something went wrong:", error.message);
}
```

### Flow

```text
try
 ↓
Code runs
 ↓
Error occurs
 ↓
catch
 ↓
Error is handled
```

---

# `throw` — Creating Your Own Error

You can manually create an error using `throw`.

```js
const age = 15;

if (age < 18) {
  throw new Error("User must be 18 or older");
}
```

Here, we intentionally throw an error when the condition is true.

---

# `Error` Object

JavaScript provides the `Error` object to represent errors.

```js
const error = new Error("Something went wrong");

console.log(error.message);
```

Common properties include:

```js
error.name;
error.message;
error.stack;
```

Example:

```js
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.name);    // Error
  console.log(error.message); // Something went wrong
  console.log(error.stack);   // Stack trace
}
```

---

# Easy Way to Remember

```text
SyntaxError
    ↓
Code syntax is wrong

ReferenceError
    ↓
Variable/identifier not found

TypeError
    ↓
Wrong operation for the value's type

RangeError
    ↓
Value is outside the allowed range

URIError
    ↓
Invalid URI

EvalError
    ↓
Legacy eval-related error
```

# Interview Definition

> **JavaScript errors are problems that occur when code cannot be parsed correctly or when something goes wrong during execution. Common built-in error types include `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError`, `URIError`, and the legacy `EvalError`.**
