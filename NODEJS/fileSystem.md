# File System

-> fs stands for File System.

-> It is a built-in Node.js module used to interact with files and folders on our system.

-> It works with files as bytes, so it can work with many file types:

```text
.txt    .json    .csv
.jpg    .png     .gif
.pdf
.mp3    .mp4
.zip
```

etc.

```js
const fs = require("fs");
```

---

## What is JSON?

-> JSON = JavaScript Object Notation

-> JSON is a text-based data format used to store and transfer structured data.

### JavaScript Object

→ Exists as a JavaScript data structure in memory.

### JSON

→ Text format used for storage/transfer.

```js
JSON.stringify()
```

-> `JSON.stringify()` converts a JavaScript value/object into a JSON string.

```json
'{"id":101,"name":"Gourav"}'
```

```js
JSON.parse()
```

-> Converts JSON into a JavaScript object.

---

## Using fs, we can:

* Read files
* Write/create files
* Append data
* Rename files
* Delete files
* Create/delete folders
* Check file information

---

## 1. Read File → `fs.readFile()`

-> `utf8` → Node decodes the bytes into a JavaScript string.

-> Without this, Node returns a Buffer.

```js
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

-> Suppose `[data.txt]` contains:

---

## 2. Read File Using `fs/promises`

```js
const fs = require("fs/promises");

async function readData() {
    const data = await fs.readFile("data.txt", "utf8");

    console.log(data);
}

readData();
```

---

## 3. Write File → `writeFile()`

-> `writeFile()` is used to create a new file or write data into an existing file.

-> Write → replace content

```js
const fs = require("fs");

fs.writeFile("data.txt", "Hello Node.js", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File written");
});
```

### OR

```js
const fs = require("fs/promises");

const student = {
    id: 101,
    name: "Gourav",
    course: "MTech"
};

await fs.writeFile(
    "student.json",
    JSON.stringify(student)
);
```

---

## 4. Append File → `appendFile()`

-> Append means adding new data at the end of an existing file without deleting the old content.

-> Append → add content

```js
const fs = require("fs");

fs.appendFile("data.txt", "\nLearning Node.js", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Data added");
});
```

---

## 5. Rename File → `rename()`

-> `rename()` is used to change the name or path of a file/directory.

```js
const fs = require("fs");

fs.rename("data.txt", "user.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File renamed");
});
```

---

## 6. Delete File → `unlink()`

```js
const fs = require("fs");

fs.unlink("data.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File deleted");
});
```

---

# What if the file is VERY large?

Suppose:

```text
students.csv = 5 GB
```

We use a **stream**:

```js
const fs = require("fs");

const stream = fs.createReadStream("students.csv");

stream.on("data", (chunk) => {
    console.log(chunk);
});

stream.on("end", () => {
    console.log("File completed");
});
```

### Flow

```text
5 GB File
    ↓
[chunk]
    ↓
process
    ↓
[chunk]
    ↓
process
```

-> You do not manually split the file yourself. The stream implementation handles reading data in chunks.

---

# Why is `readFile()` bad for a huge file?

```js
const data = await fs.readFile("students.csv");
```

-> `readFile()` reads the entire file before giving you the result.

```text
students.csv = 5 GB
Server RAM   = 8 GB

    5 GB File
        ↓
    readFile()
        ↓
Load entire file into memory
        ↓
~5 GB data in memory 😬
        ↓
Give data to your code
```

-> This creates high memory usage and can hurt or even crash the process depending on limits and available memory.

### Use Stream Instead

```js
const fs = require("fs");

const stream = fs.createReadStream("students.csv");

stream.on("data", (chunk) => {
    console.log(chunk);
});

stream.on("end", () => {
    console.log("Reading completed");
});

stream.on("error", (err) => {
    console.log(err);
});
```

---

# `fs` vs `fs/promises`

## Normal `fs` → Callback

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

## `fs/promises` → Promise

```js
const fs = require("fs/promises");

async function getData() {
    try {
        const data = await fs.readFile("data.txt", "utf8");

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getData();
```

-> Normal `fs.readFile()` and `fs/promises.readFile()` are both asynchronous.

-> Normal `fs` uses a callback, while `fs/promises` returns a Promise.

---

# What is Buffer?

-> A Buffer is Node.js's way of working with raw binary data.

```text
<Buffer ff d8 ff e0 00 10 4a 46 ...>
```

---

## Why does Node need Buffer?

Backend applications frequently deal with raw bytes:

* Images
* Videos
* PDFs
* File uploads
* Network packets/data
* Streams
* Encryption

---

# What is Base64?

-> Base64 is a text encoding used to represent binary data as text characters.

```text
Binary bytes
    ↓
Base64 encoding
    ↓
Text
```

---

## Buffer vs Base64

| Buffer                                   | Base64                                                 |
| ---------------------------------------- | ------------------------------------------------------ |
| Represents binary bytes in Node memory   | Text representation/encoding of binary data            |
| Efficient for binary processing          | Convenient when binary needs to be represented as text |
| Node.js-specific API/type                | Base64 is a general encoding standard                  |
| Used for files/network/binary operations | Used when binary needs text-safe representation        |

---

# Real Project: User Uploads Profile Image

```html
<input type="file" />
```

-> User selects:

```text
gourav.jpg
```

-> Usually the frontend sends it using `FormData`:

```js
const formData = new FormData();

formData.append("profileImage", file);

await fetch("/api/profile", {
    method: "POST",
    body: formData
});
```

-> The browser sends an HTTP request using:

```text
multipart/form-data
```

-> Your Node HTTP server receives the HTTP request.

-> In an Express application, we commonly use middleware/library such as **Multer** to parse `multipart/form-data`.

### File Upload Flow

```text
Frontend
    ↓
File (image/video/audio)
    ↓
FormData
    ↓
HTTP multipart/form-data
    ↓
Express
    ↓
Multer parses multipart request
    ↓
Gets file
    ↓
Buffer OR temporary disk file
    ↓
Your backend sends it to Cloudinary
    ↓
Cloudinary stores file
    ↓
Returns URL + other information
    ↓
Backend stores URL/key in MongoDB
```

---

# Handle Large Files

### Small Image

```text
Frontend → Backend → Multer → Cloudinary
```

### Large Video

```text
Frontend → Backend (only asks for signed upload authorization)
                ↓
        Frontend → Cloud directly
```

---

# Why Multer?

-> Your backend might want to resize an image, inspect metadata, enforce application-specific rules, or otherwise process it before upload. In that case using Multer.

-> But if none of that requires the bytes to pass through your server, direct cloud upload can be used for both small and large files.

---

# Workflow of File Upload

```text
User selects video
        ↓
Frontend checks file.size
        ↓
Large file
        ↓
Frontend DOES NOT send 5 GB to backend
        ↓
Frontend → Backend
"Give me upload permission"
        ↓
Backend checks:
Is user authenticated?
Is user authorized to upload?
Is requested file type/size allowed?
        ↓
YES
        ↓
Backend generates signed upload
information / temporary authorization
        ↓
Frontend receives it
        ↓
Frontend ==================> Cloud Storage
                5 GB video
                directly
        ↓
Cloud stores video
        ↓
URL / storage key
```

---

# Directories

## `mkdir()` — Create Directory

```js
const fs = require("fs/promises");

await fs.mkdir("uploads");
```

### OR

-> For nested directories:

```js
await fs.mkdir("uploads/students/images", {
    recursive: true
});
```

-> `recursive: true` means Node can create missing parent directories too.

---

## `readdir()` — Read Directory

-> `readdir()` returns the entries inside a directory.

---

## `rm()` — Remove

```js
await fs.rm("uploads", {
    recursive: true
});
```

-> `recursive: true` allows removing a directory and its contents.
