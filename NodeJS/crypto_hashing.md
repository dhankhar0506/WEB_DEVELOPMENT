## Node.js crypto Module
-> crypto is a built-in Node.js module used for cryptographic operations such as hashing, encryption/decryption, secure random data generation, and UUID generation.
> const crypto = require("crypto");
    crypto
    ├── Hashing
    ├── Encryption / Decryption
    ├── Random Bytes
    └── UUID

## Hashing ⭐
-> Hashing converts data into a fixed-length hash value and is designed to be one-way.
    "hello"
        ↓
    Hash Function
        ↓
    2cf24dba5fb0a30e...

    const crypto = require("crypto");
    const hash = crypto
        
        //  hashing algorithm
        .createHash("sha256")->
        
        // data to hash
        .update("hello") -> 
        
        //  return hash as hexadecimal text -> 0 1 2 3 4 5 6 7 8 9 A B C D E F
        .digest("hex"); ->

    console.log(hash);

> Same input gives the same hash
> Small input change produces a very different hash:
    Password
        ↓
    Hash
        ↓
    Hash value

## Why does hashing give a fixed-size output?
-> A hash algorithm has a predefined output size, regardless of how large the input is.
-> SHA-256 always produces 256 bits = 32 bytes.
    "Gourav"
        ↓
    SHA-256
        ↓
    256-bit hash


    "Hello my name is Gourav and I am learning Node.js..."
        ↓
    SHA-256
        ↓
    256-bit hash

## Why is hashing one-way?
-> Input → Hash
but Hash → Original Input  it is nearly impossible 

## type of hashing algorithm 
| Algorithm |       Output | Status / common context               |
| --------- | -----------: | ------------------------------------- |
| MD5       |      128-bit | ❌ Cryptographically broken            |
| SHA-1     |      160-bit | ❌ Broken for collision resistance     |
| SHA-256   |      256-bit | ✅ General cryptographic hashing       |
| SHA-512   |      512-bit | ✅ General cryptographic hashing       |
| bcrypt    | configurable | Password hashing                      |
| scrypt    | configurable | Password hashing                      |
| Argon2    | configurable | Password hashing                      |
| PBKDF2    | configurable | Password-based key derivation/hashing |

## SHA-256 is a general-purpose cryptographic hash.
For passwords, we purposely want slow, salted, expensive password-hashing/KDF algorithms such as Argon2, scrypt, bcrypt, or PBKDF2.

Why slow?
-> Because if a hacker steals your password database, we want each password guess to be expensive.


## What is Salt?
-> A salt is a random value generated uniquely for each password and incorporated into the password hashing process.
>  const salt = crypto.randomBytes(16);
> const salt = crypto.randomBytes(16).toString("hex"); if store as a text

    Gourav:

    password = hello123
    salt     = RANDOM_A

    password + salt
        ↓
    password hashing
        ↓
    HASH_A

    => Same password +  Different salt = Different stored hashes

## what is bcrypt?
-> bcrypt is specifically designed for password hashing and handles the salt + cost + password hashing process for you.
-> Exactly. If you're using bcrypt for password hashing, you don't need Node's crypto.createHash() to hash the password.

## How do we mix salt with password using bcrypt?
    - const bcrypt = require("bcrypt");
    - const password = "hello123";
    
    // Generate salt
    - const salt = await bcrypt.genSalt(10);

    // Hash password using salt
    - const hashedPassword = await bcrypt.hash(password,salt);

    - console.log(hashedPassword);


## What is 10?
-> 10 is the cost factor / salt rounds.
-> Higher value means bcrypt performs more computational work


## If bcrypt generates a different random salt every time, the same password should produce a different hash. So how can login comparison work?
>Registration
    - const hash = await bcrypt.hash("hello123", 10);
        Password = hello123
            +
        Random Salt = ABC123
            +
        Cost = 10
            ↓
        bcrypt
            ↓
        bcrypt result
> The returned bcrypt string contains the salt and cost information along with the derived hash.
$2b$10$abcdefghijklmnopqrstuuXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 │   │  │                    │
 │   │  │                    └── derived hash portion
 │   │  │
 │   │  └── salt portion
 │   │
 │   └── cost = 10
 │
 └── bcrypt version

-> You're storing an encoded bcrypt password record containing the information bcrypt needs later.


> 2. User logs in
    -> contains the existing bcrypt string from registration / DB
    -> const isMatch = await bcrypt.compare(
            "hello123",
            user.password
        );
    -> Step 1 — Read stored bcrypt string
        Stored:
            version
            cost = 10
            salt = RANDOM_ABC
            hash = HASH_X
    -> Extract the original salt
    -> Process entered password using same salt/cost
    -> Because the password, salt and parameters match the registration values, the derived result matches.


