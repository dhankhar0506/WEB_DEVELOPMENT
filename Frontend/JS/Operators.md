# Operators in JavaScript

> **Definition:** An operator is a symbol or keyword used to perform an operation on one or more values.

---

## 1. Arithmetic Operators

```js
let a = 10;
let b = 3;
```

| Operator | Example  |     Result | Operation      |
| -------- | -------- | ---------: | -------------- |
| `+`      | `a + b`  |       `13` | Addition       |
| `-`      | `a - b`  |        `7` | Subtraction    |
| `*`      | `a * b`  |       `30` | Multiplication |
| `/`      | `a / b`  | `3.333...` | Division       |
| `%`      | `a % b`  |        `1` | Remainder      |
| `**`     | `a ** b` |     `1000` | Exponent       |

---

## 2. Increment & Decrement

### Post-Increment `a++`

The current value is used first, then the value is incremented.

```js
let a = 5;

console.log(a++); // 5
console.log(a);   // 6
```

### Pre-Increment `++a`

The value is incremented first, then the new value is used.

```js
let a = 5;

console.log(++a); // 6
console.log(a);   // 6
```

### Decrement

```js
a--; // Post-decrement
--a; // Pre-decrement
```

> **Remember:**
>
> * `a++` → Use first, increment later
> * `++a` → Increment first, use later
> * `a--` → Use first, decrement later
> * `--a` → Decrement first, use later

---

## 3. Assignment Operators

```js
let x = 10;
```

| Operator | Example   | Equivalent To |
| -------- | --------- | ------------- |
| `=`      | `x = 10`  | Assign value  |
| `+=`     | `x += 5`  | `x = x + 5`   |
| `-=`     | `x -= 5`  | `x = x - 5`   |
| `*=`     | `x *= 5`  | `x = x * 5`   |
| `/=`     | `x /= 5`  | `x = x / 5`   |
| `%=`     | `x %= 5`  | `x = x % 5`   |
| `**=`    | `x **= 2` | `x = x ** 2`  |

---

## 4. Comparison Operators

Comparison operators compare values and return a **Boolean** (`true` or `false`).

### Loose Equality `==`

Compares values after possible type conversion.

```js
5 == "5"; // true
```

### Strict Equality `===`

Compares both **value and type**.

```js
5 === "5"; // false
5 === 5;   // true
```

### Other Comparison Operators

| Operator | Meaning               | Example    | Result  |
| -------- | --------------------- | ---------- | ------- |
| `!=`     | Loose Not Equal       | `5 != "6"` | `true`  |
| `>`      | Greater Than          | `10 > 5`   | `true`  |
| `<`      | Less Than             | `10 < 5`   | `false` |
| `>=`     | Greater Than or Equal | `10 >= 10` | `true`  |
| `<=`     | Less Than or Equal    | `10 <= 5`  | `false` |

> **Interview Tip:** Prefer `===` and `!==` in most JavaScript code because they avoid unexpected type coercion.

---

## 5. Logical Operators

Logical operators are used to **combine or manipulate conditions**.

### `&&` — AND

`&&` checks from **left to right** and stops at the first **falsy** value.

* If all values are truthy, it returns the **last value**.
* If a falsy value is found, it returns that value.

```js
console.log(10 && 20 && 30);
// 30
```

```js
console.log(10 && 0 && 30);
// 0
// Stops at 0 because 0 is falsy
```

### Example

```js
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}
```

---

### `||` — OR

`||` checks from **left to right** and stops at the first **truthy** value.

* If a truthy value is found, it returns that value.
* If all values are falsy, it returns the **last value**.

```js
console.log(0 || 10);
// 10
```

### Common Use — Fallback Value

```js
const username = "" || "Guest";

console.log(username);
// Guest
```

---

### `!` — NOT

The `!` operator reverses the Boolean value.

```js
!true;  // false
!false; // true
```

---

## 6. Optional Chaining `?.`

**Optional chaining** is used to safely access nested properties or methods when something might be `null` or `undefined`.

### Without Optional Chaining

```js
const user = {};

console.log(user.address.city);
// TypeError
```

### With Optional Chaining

```js
console.log(user.address?.city);
// undefined
```

> `?.` prevents an error when the value before it is `null` or `undefined`.

---

## 7. `||` — Falsy Value Fallback

`||` uses the right-side value when the left-side value is **falsy**.

### Falsy Values

```text
false
0
-0
0n
""
null
undefined
NaN
```

### Example

```js
const count = 0 || 10;

console.log(count);
// 10
```

### Problem with `||`

Sometimes values such as `0`, `false`, or `""` are **valid values**, but `||` replaces them because they are falsy.

For example:

```js
const count = 0 || 10;

console.log(count);
// 10
```

If `0` is a valid value, this behavior may not be what we want.

---

## 8. `??` — Nullish Coalescing

`??` uses the right-side value **only when the left-side value is `null` or `undefined`**.

```js
const count = 0 ?? 10;

console.log(count);
// 0
```

### `||` vs `??`

| Operator | Uses Right Side When                   |   |                        |
| -------- | -------------------------------------- | - | ---------------------- |
| `        |                                        | ` | Left side is **falsy** |
| `??`     | Left side is **`null` or `undefined`** |   |                        |

### Example

```js
console.log(0 || 10);
// 10

console.log(0 ?? 10);
// 0
```

---

## 9. Falsy Values

A **falsy value** is a value that becomes `false` when converted to Boolean.

```js
Boolean(false);     // false
Boolean(0);         // false
Boolean(-0);        // false
Boolean(0n);        // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
```

### All JavaScript Falsy Values

```text
false
0
-0
0n
""
null
undefined
NaN
```

> **Interview Tip:** Everything else is generally **truthy**, including `"0"`, `"false"`, `[]`, and `{}`.

---

# ⭐ Quick Revision

| Operator | Meaning               |   |                     |
| -------- | --------------------- | - | ------------------- |
| `+`      | Addition              |   |                     |
| `-`      | Subtraction           |   |                     |
| `*`      | Multiplication        |   |                     |
| `/`      | Division              |   |                     |
| `%`      | Remainder             |   |                     |
| `**`     | Exponent              |   |                     |
| `++`     | Increment             |   |                     |
| `--`     | Decrement             |   |                     |
| `=`      | Assignment            |   |                     |
| `==`     | Loose equality        |   |                     |
| `===`    | Strict equality       |   |                     |
| `!=`     | Loose inequality      |   |                     |
| `!==`    | Strict inequality     |   |                     |
| `>`      | Greater than          |   |                     |
| `<`      | Less than             |   |                     |
| `>=`     | Greater than or equal |   |                     |
| `<=`     | Less than or equal    |   |                     |
| `&&`     | AND                   |   |                     |
| `        |                       | ` | OR / Falsy fallback |
| `!`      | NOT                   |   |                     |
| `?.`     | Optional chaining     |   |                     |
| `??`     | Nullish coalescing    |   |                     |
