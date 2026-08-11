# Node.js `path` Module

-> The **path module** is a built-in Node.js module used to create, combine, extract, and manipulate file/folder paths safely.

```javascript
const path = require("path");
```

---

## 1. `path.join()`

-> `path.join()` combines multiple path parts into one normalized path.

```javascript
const result = path.join(
    "uploads",
    "students",
    "profile.jpg"
);

console.log(result);
```

**Output:**

```text
uploads/students/profile.jpg
```

---

## What is `__dirname`?

-> `__dirname` gives the **absolute path of the directory containing the current JavaScript file in CommonJS**.

---

## 2. `path.resolve()`

-> `path.resolve()` creates an **absolute path**.

```javascript
const result = path.resolve(
    "uploads",
    "profile.jpg"
);

console.log(result);
```

**Output:**

```text
C:\project\uploads\profile.jpg
```

---

## 3. `path.basename()`

-> `path.basename()` returns the **last portion of a path**, usually the file name.

```javascript
path.basename("/users/gourav/uploads/profile.jpg");
```

**Output:**

```text
profile.jpg
```

---

## 4. `path.dirname()`

-> `path.dirname()` returns the **directory/folder portion of a path**, excluding the last part.

```text
/users/gourav/uploads/profile.jpg
│                     │         │
│                     │         └── basename
│                     └──────────── dirname
│
└── path
```

```javascript
const filePath = "/uploads/students/profile.jpg";

console.log(path.dirname(filePath));
```

**Output:**

```text
/uploads/students
```

### Example

```text
/uploads/students/profile.jpg

dirname  → /uploads/students
basename → profile.jpg
extname  → .jpg
```

---

## 5. `path.extname()`

-> `path.extname()` returns the **extension of the path**.

```javascript
path.extname("video.mp4");
// .mp4

path.extname("data.json");
// .json

path.extname("document.pdf");
// .pdf
```

---

## Quick Revision

| Method            | Purpose                  | Example                    |
| ----------------- | ------------------------ | -------------------------- |
| `path.join()`     | Combines path parts      | `uploads/images/a.jpg`     |
| `path.resolve()`  | Creates absolute path    | `C:\project\uploads\a.jpg` |
| `path.basename()` | Gets last part/file name | `profile.jpg`              |
| `path.dirname()`  | Gets directory portion   | `/uploads/students`        |
| `path.extname()`  | Gets file extension      | `.jpg`                     |

> **Interview Tip:** `join()` combines paths, while `resolve()` produces an absolute path.
