# Date in JavaScript

> **Date** is a built-in JavaScript object used to work with **dates and times**.

```javascript
typeof new Date();
// "object"
```

---

# 1. Creating Dates

## Current Date & Time

```javascript
const now = new Date();

console.log(now);
```

> `new Date()` returns a `Date` object representing the **current date and current time**.

---

## Date from String

```javascript
new Date("2026-08-15");
// String → Date
```

---

## Date from Components

### Syntax

```javascript
new Date(year, month, day, hours, minutes, seconds);
```

Example:

```javascript
const date = new Date(2026, 7, 15, 14, 30, 45);

// 15 August 2026
// 2:30:45 PM
// Local time
```

### Important: Month Starts from `0`

```text
0 → January
1 → February
2 → March
3 → April
4 → May
5 → June
6 → July
7 → August
```

---

# 2. Date Getter Methods

```javascript
const date = new Date(2026, 7, 15);
```

| Method              | Returns                   |
| ------------------- | ------------------------- |
| `getFullYear()`     | Year                      |
| `getMonth()`        | Month → `0-11`            |
| `getDate()`         | Day of month → `1-31`     |
| `getDay()`          | Day of week → `0-6`       |
| `getHours()`        | Hours → `0-23`            |
| `getMinutes()`      | Minutes → `0-59`          |
| `getSeconds()`      | Seconds → `0-59`          |
| `getMilliseconds()` | Milliseconds → `0-999`    |
| `getTime()`         | Timestamp in milliseconds |

### Examples

```javascript
date.getFullYear();
// 2026

date.getMonth();
// 7 → August

date.getDate();
// 15

date.getHours();
// 0-23

date.getMinutes();
// 0-59

date.getSeconds();
// 0-59

date.getMilliseconds();
// 0-999
```

---

# 3. `getDate()` vs `getDay()`

This is an important interview question.

### `getDate()`

Returns the **day of the month**.

```javascript
date.getDate();
// 1-31
```

### `getDay()`

Returns the **day of the week**.

```javascript
date.getDay();
// 0-6
```

### Days of the Week

```text
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
```

### Remember

```text
getDate() → Date of month → 1-31
getDay()  → Day of week   → 0-6
```

---

# 4. Timestamp

## `getTime()`

Returns the date as a **timestamp in milliseconds since January 1, 1970 UTC**.

```javascript
const date = new Date();

date.getTime();
```

---

## `Date.now()`

Returns the **current timestamp in milliseconds**.

```javascript
const timestamp = Date.now();

console.log(timestamp);
```

Commonly used for:

* Timestamps
* Performance/time measurement

---

# 5. Comparing Dates

Convert dates to timestamps and compare them.

```javascript
const start = new Date("2026-01-01");
const end = new Date("2026-02-01");

console.log(start.getTime() < end.getTime());
// true
```

---

# 6. Formatting Methods

```javascript
const date = new Date(2026, 7, 15);
```

---

## `toDateString()`

Returns a readable date string.

```javascript
console.log(date.toDateString());

// "Sat Aug 15 2026"
```

---

## `toTimeString()`

Returns the local time with timezone information.

```javascript
console.log(date.toTimeString());

// "00:00:00 GMT+0530 (India Standard Time)"
```

---

## `toLocaleDateString()`

Formats the date according to a locale.

```javascript
date.toLocaleDateString("en-IN");

// "15/8/2026"
```

### Custom Format

```javascript
date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});
```

---

## `toLocaleString()`

Formats both date and time according to a locale.

```javascript
const date = new Date(2026, 7, 15, 14, 30);

date.toLocaleString("en-IN");

// "15/8/2026, 2:30:00 pm"
```

---

## `toISOString()`

Converts a `Date` into standard **ISO format in UTC**.

```javascript
const date = new Date();

console.log(date.toISOString());

// "2026-08-02T08:00:00.000Z"
```

> Commonly used with **APIs and databases**.

---

# Quick Revision

| Code / Method                | Purpose                  |
| ---------------------------- | ------------------------ |
| `new Date()`                 | Current date & time      |
| `new Date("date")`           | String → Date            |
| `new Date(year, month, ...)` | Components → Date        |
| `getFullYear()`              | Year                     |
| `getMonth()`                 | Month → `0-11`           |
| `getDate()`                  | Date of month → `1-31`   |
| `getDay()`                   | Day of week → `0-6`      |
| `getHours()`                 | Hours → `0-23`           |
| `getMinutes()`               | Minutes → `0-59`         |
| `getSeconds()`               | Seconds → `0-59`         |
| `getMilliseconds()`          | Milliseconds → `0-999`   |
| `getTime()`                  | Timestamp                |
| `Date.now()`                 | Current timestamp        |
| `toDateString()`             | Readable date            |
| `toTimeString()`             | Readable time + timezone |
| `toLocaleDateString()`       | Localized date           |
| `toLocaleString()`           | Localized date + time    |
| `toISOString()`              | ISO date in UTC          |

---

# Important Interview Points

* `Date` is a **built-in JavaScript object**.
* `typeof new Date()` returns `"object"`.
* JavaScript months are **zero-indexed** when using `new Date(year, month, ...)`.
* `getDate()` returns the **day of the month**.
* `getDay()` returns the **day of the week**.
* `getTime()` returns a timestamp in **milliseconds**.
* `Date.now()` returns the **current timestamp**.
* `toISOString()` returns the date in **UTC ISO format**.
