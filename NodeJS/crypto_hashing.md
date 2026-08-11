# Node.js `crypto` Module

## What is the `crypto` Module?

> `crypto` is a built-in Node.js module used for cryptographic operations such as hashing, encryption/decryption, secure random data generation, and UUID generation.

```text
const crypto = require("crypto");

crypto
├── Hashing
├── Encryption / Decryption
├── Random Bytes
└── UUID
```

---

# Hashing ⭐

> Hashing converts data into a fixed-length hash value and is designed to be one-way.

```text
"hello"
   ↓
Hash Function
   ↓
2cf24dba5fb0a30e...
```

### Example

```js
const crypto = require("crypto");

const hash = crypto
  // hashing algorithm
  .createHash("sha256")
  // data to hash
  .update("hello")
  // return hash as hexadecimal text
  // 0 1 2 3 4 5 6 7 8 9 A B C D E F
  .digest("hex");

console.log(hash);
```

### Important Points

> Same input gives the same hash.

> Small input change produces a very different hash.

```text
Password
   ↓
Hash
   ↓
Hash value
```

---

# Why Does Hashing Give a Fixed-Size Output?

> A hash algorithm has a predefined output size, regardless of how large the input is.

### SHA-256

> SHA-256 always produces **256 bits = 32 bytes**.

```text
"Gourav"
   ↓
SHA-256
   ↓
256-bit hash
```

Even if the input is very large:

```text
"Hello my name is Gourav and I am learning Node.js..."
   ↓
SHA-256
   ↓
256-bit hash
```

The output size remains fixed.

---

# Why Is Hashing One-Way?

Hashing works like:

```text
Input
  ↓
Hash
```

But:

```text
Hash
  ↓
Original Input
```

> Recovering the original input from a cryptographic hash is designed to be computationally infeasible.

---

# Types of Hashing Algorithms

| Algorithm |       Output | Status / Common Context               |
| --------- | -----------: | ------------------------------------- |
| MD5       |      128-bit | ❌ Cryptographically broken            |
| SHA-1     |      160-bit | ❌ Broken for collision resistance     |
| SHA-256   |      256-bit | ✅ General cryptographic hashing       |
| SHA-512   |      512-bit | ✅ General cryptographic hashing       |
| bcrypt    | Configurable | Password hashing                      |
| scrypt    | Configurable | Password hashing                      |
| Argon2    | Configurable | Password hashing                      |
| PBKDF2    | Configurable | Password-based key derivation/hashing |

---

# SHA-256 vs Password Hashing

> SHA-256 is a general-purpose cryptographic hash.

For passwords, we purposely want **slow, salted, expensive password-hashing/KDF algorithms** such as:

* Argon2
* scrypt
* bcrypt
* PBKDF2

### Why Slow?

> Because if a hacker steals your password database, we want each password guess to be expensive.

---

# What is Salt?

> A salt is a random value generated uniquely for each password and incorporated into the password hashing process.

### Generate Salt Using `crypto`

```js
const salt = crypto.randomBytes(16);
```

If you want to store the salt as text:

```js
const salt = crypto.randomBytes(16).toString("hex");
```

### Salt Flow

```text
Gourav:

password = hello123
salt     = RANDOM_A

password + salt
      ↓
password hashing
      ↓
HASH_A
```

> Same password + Different salt = Different stored hashes

---

# What is `bcrypt`?

> `bcrypt` is specifically designed for password hashing and handles the salt + cost + password hashing process for you.

> Exactly. If you're using bcrypt for password hashing, you don't need Node's `crypto.createHash()` to hash the password.

---

# How Do We Mix Salt with Password Using `bcrypt`?

```js
const bcrypt = require("bcrypt");

const password = "hello123";

// Generate salt
const salt = await bcrypt.genSalt(10);

// Hash password using salt
const hashedPassword = await bcrypt.hash(password, salt);

console.log(hashedPassword);
```

---

# What is `10`?

> `10` is the **cost factor / salt rounds**.

> Higher value means bcrypt performs more computational work.

---

# If `bcrypt` Generates a Different Random Salt Every Time, How Can Login Comparison Work?

If bcrypt generates a different random salt for every password hash, the same password should produce a different hash.

So how does login comparison work?

---

## Registration

```js
const hash = await bcrypt.hash("hello123", 10);
```

Flow:

```text
Password = hello123
      +
Random Salt = ABC123
      +
Cost = 10
      ↓
   bcrypt
      ↓
bcrypt result
```

The returned bcrypt string contains the **salt and cost information** along with the derived hash.

Example structure:

```text
$2b$10$abcdefghijklmnopqrstuuXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
│   │  │                    │
│   │  │                    └── derived hash portion
│   │  │
│   │  └── salt portion
│   │
│   └── cost = 10
│
└── bcrypt version
```

> You're storing an encoded bcrypt password record containing the information bcrypt needs later.

---

# User Logs In

The database contains the existing bcrypt string from registration.

```js
const isMatch = await bcrypt.compare(
  "hello123",
  user.password
);
```

### Step 1 — Read Stored bcrypt String

Stored:

```text
version
cost = 10
salt = RANDOM_ABC
hash = HASH_X
```

### Step 2 — Extract the Original Salt

`bcrypt` reads the salt and cost from the stored bcrypt string.

### Step 3 — Process Entered Password

The entered password is processed using the **same salt and cost**.

### Step 4 — Compare Results

Because the:

* Password
* Salt
* Parameters

match the registration values, the derived result matches.

```text
Entered Password
      ↓
bcrypt.compare()
      ↓
Stored bcrypt Hash
      ↓
Read Salt + Cost
      ↓
Hash Entered Password
      ↓
Compare Derived Hash
      ↓
Match?
   ↙     ↘
 YES      NO
  ↓        ↓
Valid    Invalid
```

---

# Interview Crux

### `crypto.createHash()`

> Used for general-purpose cryptographic hashing.

```js
crypto.createHash("sha256")
```

### `bcrypt`

> Designed specifically for password hashing and handles **salt + cost + hashing**.

```js
bcrypt.hash(password, 10);
```

### Salt

> A random value added to password hashing so that the same password does not produce the same stored hash.

### Cost Factor

> Controls how much computational work bcrypt performs. Higher cost means more work per password guess.
