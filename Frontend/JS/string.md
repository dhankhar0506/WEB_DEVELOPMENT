# JavaScript Strings — Interview Notes

## 1. What is a String?

-> A string is a **primitive data type** used to represent textual data.

```js
const name = "Gourav";
const city = 'Jalandhar';
```

---

## 2. Strings are Immutable

=> Strings are immutable — once created, the existing string value cannot be modified.

---

# Most Common String Properties & Methods

```js
const str = "Hello World";
```

## 3. `length`

Returns the number of characters in a string.

```js
str.length; // 11
```

### Important

`length` is a **property**, not a method.

```js
str.length;   // ✅
str.length(); // ❌
```

---

## 4. Access Characters

Characters can be accessed using their index.

```js
str[0]; // "H"
str[1]; // "e"
```

---

## 5. `charAt()`

Returns the character at a given index.

```js
str.charAt(0); // "H"
```

---

## 6. `at()`

Returns a character at an index and supports **negative indexes**.

```js
str.at(0);  // "H"
str.at(-1); // "d"
```

---

## 7. `includes()`

Checks whether a string contains another string.

```js
str.includes("World"); // true
str.includes("Java");  // false
```

---

## 8. `indexOf()`

Returns the first index of a substring.

```js
str.indexOf("World"); // 6
str.indexOf("o");     // 4
```

If the substring is not found, it returns:

```js
-1
```

---

## 9. `lastIndexOf()`

Returns the index of the last occurrence.

```js
const str = "hello world";

str.lastIndexOf("o"); // 7
```

---

## 10. `startsWith()`

Checks whether a string starts with something.

```js
"Hello World".startsWith("Hello"); // true
```

---

## 11. `endsWith()`

Checks whether a string ends with something.

```js
"Hello World".endsWith("World"); // true
```

---

## 12. `slice()`

Extracts part of a string.

```js
const str = "JavaScript";

str.slice(0, 4); // "Java"
```

**End index is not included.**

### Negative Indexes

`slice()` supports negative indexes.

```js
str.slice(-6); // "Script"
```

---

## 13. `substring()`

Similar to `slice()`.

```js
str.substring(0, 4); // "Java"
```

### Difference with Negative Index

```js
str.slice(-6);      // "Script"
str.substring(-6);  // treats negative as 0
```

---

## 14. `toUpperCase()`

Converts a string to uppercase.

```js
"gourav".toUpperCase(); // "GOURAV"
```

---

## 15. `toLowerCase()`

Converts a string to lowercase.

```js
"GOURAV".toLowerCase(); // "gourav"
```

---

## 16. `trim()`

Removes whitespace from both ends of a string.

```js
const name = "   Gourav   ";

name.trim(); // "Gourav"
```

---

## 17. `replace()`

Replaces the **first matching occurrence** when given a string search value.

```js
const str = "Hello Java Java";

str.replace("Java", "JS");

// "Hello JS Java"
```

---

## 18. `replaceAll()`

Replaces **all matching occurrences**.

```js
str.replaceAll("Java", "JS");

// "Hello JS JS"
```

---

## 19. `split()` — String → Array

Splits a string and returns an array.

```js
const str = "HTML,CSS,JavaScript";

str.split(",");

// ["HTML", "CSS", "JavaScript"]
```

---

## 20. `concat()`

Combines strings.

```js
const first = "Gourav";
const last = "Dhankhar";

first.concat(" ", last);

// "Gourav Dhankhar"
```

---

## 21. Template Literals

Template literals are created using **backticks**.

```js
const name = "Gourav";
const age = 25;

const message = `My name is ${name} and I am ${age}`;
```

---

## 22. `join()` — Array → String

Converts array elements into a string.

```js
["HTML", "CSS", "JS"].join(" ");

// "HTML CSS JS"
```

---

# Check Palindrome

A **palindrome** reads the same forward and backward.

Examples:

```text
madam
racecar
level
```

### Example

```js
const str = "madam";

const reversed = str.split("").reverse().join("");

console.log(str === reversed); // true
```

---

# Reverse a String

```js
const str = "hello";

const reversed = str.split("").reverse().join("");

console.log(reversed); // "olleh"
```

---

# Quick String Revision

| Property / Method | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `length`          | Returns number of characters                  |
| `str[index]`      | Access character by index                     |
| `charAt()`        | Returns character at index                    |
| `at()`            | Returns character and supports negative index |
| `includes()`      | Checks whether substring exists               |
| `indexOf()`       | Returns first matching index                  |
| `lastIndexOf()`   | Returns last matching index                   |
| `startsWith()`    | Checks beginning of string                    |
| `endsWith()`      | Checks ending of string                       |
| `slice()`         | Extracts part of string                       |
| `substring()`     | Extracts part of string                       |
| `toUpperCase()`   | Converts to uppercase                         |
| `toLowerCase()`   | Converts to lowercase                         |
| `trim()`          | Removes whitespace from both ends             |
| `replace()`       | Replaces first matching occurrence            |
| `replaceAll()`    | Replaces all matching occurrences             |
| `split()`         | Converts String → Array                       |
| `concat()`        | Combines strings                              |
| Template Literals | Create strings using backticks and `${}`      |
| `join()`          | Converts Array → String                       |
