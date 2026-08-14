# Math in JavaScript

> **Definition:** `Math` is a built-in JavaScript utility object that provides mathematical constants and methods.

---

## 1. `Math.round()`

Rounds a number to the **nearest integer**.

```js
Math.round(4.4); // 4
Math.round(4.6); // 5
Math.round(4.5); // 5
```

> **Rule:** `.5` and above → rounds up.

---

## 2. `Math.floor()`

Rounds a number **down toward `-Infinity`**.

```js
Math.floor(4.9);  // 4
Math.floor(4.1);  // 4
Math.floor(-4.2); // -5
```

> **Important:** `floor()` does not simply remove the decimal. It moves toward `-Infinity`.

---

## 3. `Math.ceil()`

Rounds a number **up toward `+Infinity`**.

```js
Math.ceil(4.1); // 5
Math.ceil(4.9); // 5
```

---

## 4. `Math.trunc()`

Simply **removes the decimal part** without rounding.

```js
Math.trunc(4.9);  // 4
Math.trunc(-4.9); // -4
```

### `floor()` vs `trunc()`

```js
Math.floor(-4.9); // -5
Math.trunc(-4.9); // -4
```

> **Interview Tip:** `floor()` moves toward `-Infinity`, while `trunc()` removes the decimal part.

---

## 5. `Math.max()`

Returns the **largest value** among the provided numbers.

```js
Math.max(10, 20, 5);
// 20
```

---

## 6. `Math.min()`

Returns the **smallest value** among the provided numbers.

```js
Math.min(10, 20, 5);
// 5
```

---

## 7. `Math.abs()`

Returns the **absolute/non-negative value** of a number.

```js
Math.abs(-10);
// 10

Math.abs(10);
// 10
```

---

## 8. `Math.random()`

Returns a random number in the range:

```text
0 ≤ value < 1
```

Example:

```js
Math.random();
// Example output: 0.72845
```

### Random Number from `0` to `9`

```js
Math.floor(Math.random() * 10);
// 0 - 9
```

### Random Number from `1` to `10`

```js
Math.floor(Math.random() * 10) + 1;
// 1 - 10
```

### General Formula

To generate a random integer from `min` to `max`:

```js
Math.floor(Math.random() * (max - min + 1)) + min;
```

Example:

```js
Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// 10 - 20
```

---

## 9. `Math.sqrt()`

Returns the **square root** of a number.

```js
Math.sqrt(25);
// 5

Math.sqrt(100);
// 10
```

---

## 10. `Math.pow()`

Returns a number raised to a specified **power**.

```js
Math.pow(2, 3);
// 8
```

Equivalent to:

```js
2 ** 3;
// 8
```

---

# ⭐ Quick Revision

| Method          | Purpose                   | Example            | Result |
| --------------- | ------------------------- | ------------------ | -----: |
| `Math.round()`  | Nearest integer           | `Math.round(4.6)`  |    `5` |
| `Math.floor()`  | Toward `-Infinity`        | `Math.floor(4.9)`  |    `4` |
| `Math.ceil()`   | Toward `+Infinity`        | `Math.ceil(4.1)`   |    `5` |
| `Math.trunc()`  | Removes decimal           | `Math.trunc(4.9)`  |    `4` |
| `Math.max()`    | Largest value             | `Math.max(10, 20)` |   `20` |
| `Math.min()`    | Smallest value            | `Math.min(10, 20)` |   `10` |
| `Math.abs()`    | Absolute value            | `Math.abs(-10)`    |   `10` |
| `Math.random()` | Random number `0 ≤ n < 1` | `Math.random()`    | Random |
| `Math.sqrt()`   | Square root               | `Math.sqrt(25)`    |    `5` |
| `Math.pow()`    | Power                     | `Math.pow(2, 3)`   |    `8` |

### 🔥 Most Important for Interviews

```text
round() → Nearest integer
floor() → ↓ -Infinity
ceil()  → ↑ +Infinity
trunc() → Remove decimal
abs()   → Positive/absolute value
random() → 0 ≤ n < 1
sqrt()  → Square root
pow()   → Power
```
