# Node.js `os` Module

-> The `os` module is a built-in Node.js module that gives information about the operating system and machine/server where the Node.js application is running.

```js
const os = require("os");
```

-> The `os` module gives information about the machine where Node.js is running. Backend developers can use this information for diagnostics, monitoring, and some runtime decisions.

---

# `os.cpus()` — CPU Information

-> Returns information about the machine's logical CPUs/cores.

```js
const os = require("os");

console.log(os.cpus());
```

---

# `os.totalmem()` and `os.freemem()`

-> These methods provide information about the **RAM** of your PC/server.

## `os.totalmem()`

-> Returns the total system memory in **bytes**.

```js
const totalGB = os.totalmem() / 1024 / 1024 / 1024;

console.log(totalGB);
```

-> The value is converted from bytes to GB.

## `os.freemem()`

-> Returns the amount of free system memory in **bytes**.

```js
const freeGB = os.freemem() / 1024 / 1024 / 1024;

console.log(freeGB);
```

### RAM Example

```text
Server RAM = 16 GB

Used
██████████

Free
██████

os.totalmem() → Total RAM
os.freemem()  → Free RAM
```

---

# `os.platform()`

-> Returns the operating-system platform.

Common values:

```text
win32
linux
darwin
```

### Example

```js
const os = require("os");

console.log(os.platform());
```

### Development vs Production

```text
Your PC

Windows
    Development:
    os.platform()
    → win32


AWS Linux Server
    Production:
    os.platform()
    → linux
```

---

# `os.hostname()`

-> Returns the machine's hostname.

```js
const os = require("os");

console.log(os.hostname());
```

Example output:

```text
DESKTOP-ABC123
```

or:

```text
gourav
```

### Multiple Backend Instances

Suppose you have multiple backend instances:

```text
             Load Balancer
                   ↓
       ┌───────────┼───────────┐
       ↓           ↓           ↓
   Server-1     Server-2     Server-3
```

-> `os.hostname()` can help identify which machine/server is running the Node.js process.

---

# Quick Interview Revision

| Method          | Purpose                               |
| --------------- | ------------------------------------- |
| `os.cpus()`     | Returns logical CPU/core information  |
| `os.totalmem()` | Returns total system RAM in bytes     |
| `os.freemem()`  | Returns free system RAM in bytes      |
| `os.platform()` | Returns the operating-system platform |
| `os.hostname()` | Returns the machine/server hostname   |

### Remember

```text
os.cpus()     → CPU information
os.totalmem() → Total RAM
os.freemem()  → Free RAM
os.platform() → Operating system
os.hostname() → Machine name
```
