##  Encryption 🔐
- Encryption converts readable data into unreadable ciphertext using a key, and authorized code can decrypt it using the required key.
    Original Data
        ↓
    Encryption + Key
        ↓
    Ciphertext
        ↓
    Decryption + Key
        ↓
    Original Data

## | Hashing                          | Encryption                                |
    | -------------------------------- | ----------------------------------------- |
    | One-way                          | Reversible with the appropriate key       |
    | No decryption                    | Can decrypt                               |
    | Password verification, integrity | Protect data that must later be recovered |

## Random Bytes 
-> crypto.randomBytes() generates cryptographically secure random bytes.
    - const crypto = require("crypto");
    - const token = crypto.randomBytes(32).toString("hex");   
    - console.log(token);
    - 32 means 32 bytes, not 32 bits.
    - 1 byte = 8 bits => 32*8=> 256
    -> 256 bits of cryptographically secure random data.

## UUID
-> UUID = Universally Unique Identifier
-> It's used to generate identifiers with an extremely low probability of collision.
    - const crypto = require("crypto");
    - const id = crypto.randomUUID();
    - console.log(id);

-> use case => Suppose users upload files:
    const fileName =  crypto.randomUUID() + ".jpg";



<!-- ----------------------------------------------------------------------------------------------------------------- -->

## encyption and decryption
const crypto = require("crypto");

> AES is a symmetric encryption algorithm.
const ALGORITHM = "aes-256-gcm";

// Store this in environment/secret manager in a real project.
    const ENCRYPTION_KEY = Buffer.from(
        process.env.ENCRYPTION_KEY,
        "hex"
    );

if (ENCRYPTION_KEY.length !== 32) {
    throw new Error(
        "ENCRYPTION_KEY must be exactly 32 bytes (64 hex characters)"
    );
}


// ================================
// ENCRYPT
// ================================

function encrypt(text) {

    // GCM commonly uses a 12-byte nonce/IV.
    // Generate a NEW IV for every encryption.
    const iv = crypto.randomBytes(12);

    // Create encryption object
    const cipher = crypto.createCipheriv( ALGORITHM, ENCRYPTION_KEY, iv);

    // Convert plaintext → encrypted bytes
    const encrypted = Buffer.concat([cipher.update(text, "utf8"),cipher.final()]);

    // Authentication tag verifies integrity/authenticity
    const authTag = cipher.getAuthTag();

    return {encryptedData: encrypted.toString("hex"), iv: iv.toString("hex"),authTag: authTag.toString("hex")};
}


// ================================
// DECRYPT
// ================================

function decrypt(encryptedData, iv, authTag) {

    // Convert stored hex strings back to bytes
    const encryptedBuffer =   Buffer.from(encryptedData, "hex");

    const ivBuffer = Buffer.from(iv, "hex");

    const authTagBuffer = Buffer.from(authTag, "hex");


    // Create decryption object
    const decipher = crypto.createDecipheriv(ALGORITHM,ENCRYPTION_KEY,ivBuffer);

    // Provide authentication tag
    decipher.setAuthTag(authTagBuffer);


    // Decrypt ciphertext
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer),decipher.final()]);

    return decrypted.toString("utf8");
}


// ================================
// TEST
// ================================

const originalData = "My secret information";

const result = encrypt(originalData);

console.log("Encrypted:", result);

const original = decrypt(
    result.encryptedData,
    result.iv,
    result.authTag
);

console.log("Decrypted:", original);
<!-- -------------------------------------------------------------------------------------------------------------- -->

> Step 1 — Generate key once
    - const crypto = require("crypto");
    - console.log(crypto.randomBytes(32).toString("hex"));
    -> Don't generate a new key every time your server starts, because previously encrypted data requires the corresponding key to decrypt.

> Step 2 : process.env.ENCRYPTION_KEY
    - This gives you a string.

> Step 3 — Convert hex representation back to bytes
    - const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY,"hex");

## toString("hex")
->  makes the bytes easier to represent/store as text
-> HEX =>  It's a text representation of bytes.

## i byte = 8 bits 
    10110101
    ↑      ↑
    8 bits
    = 1 byte

##  Why does AES-256 need bytes?
- Now the important part. => AES is a cryptographic algorithm defined to operate on binary data.




## ENCRYPTION FUNCTION
> But AES-GCM needs three main things:
1. Plain text        → "Hello Gourav"
2. Secret Key        → ENCRYPTION_KEY (32 bytes)
3. IV                → random value for this encryption

## Why do we need iv?
-> IV = Initialization Vector, also called a nonce in this context.
-> It is a new random value generated every time you encrypt data.
-> We can store the IV in the database.
>  const iv = crypto.randomBytes(12);

    - First encryption:
        Hello + SecretKe + IV_A
            ↓
        Ciphertext_A


    - Second encryption:
        Hello + SecretKey + IV_B
            ↓
        Ciphertext_B
    
    - Same text
    - Same key
    - Different IV
        ↓
    - Different encrypted result

## crypto.createCipheriv(algorithm,secretkey,iv) 
> const cipher = crypto.createCipheriv(
            ALGORITHM,
            ENCRYPTION_KEY,
            iv
        );
    -> You've only configured the encryption operation.
        -> which algo , secret key , iV

## Actually encryptioin happen here
// buffer.concat -> Combines encrypted byte chunks into ONE Buffer
    
>const encrypted = Buffer.concat([
        cipher.update(text, "utf8"),
        cipher.final()
]);

    - text = "Hello Gourav";
    -  utf8 = Interpret this JavaScript string using UTF-8 encoding.
    - cipher.update() processes the input. There is no more input; finish this encryption operation.

## what is auth tag? 
> const authTag = cipher.getAuthTag();
AuthTag is a small cryptographic value generated by AES-GCM that is used during decryption to verify that the encrypted data is authentic and has not been modified.

> return {encryptedData: encrypted.toString("hex"), iv: iv.toString("hex"),authTag: authTag.toString("hex")};
    encrypted → Buffer (bytes)
    iv        → Buffer (bytes)
    authTag   → Buffer (bytes)
    -> We convert them to hex:We convert binary bytes into a text representation using hexadecimal





## DECRYPTION FUNCTION
-> {
        encryptedData: "8af92c...",
        iv: "74bc21...",
        authTag: "93de..."
    }

> const encryptedBuffer = Buffer.from(encryptedData, "hex");
> const ivBuffer = Buffer.from(iv, "hex");
> const authTagBuffer = Buffer.from(authTag, "hex");

>const decipher = crypto.createDecipheriv(ALGORITHM,ENCRYPTION_KEY,ivBuffer);
-> Same algorithm + Same secret key + Same IV (encryption and decryption have the same)

> decipher.setAuthTag(authTagBuffer);
    ->The tag is used to authenticate the encrypted data.

-> Now actual decryption
const decrypted = Buffer.concat([decipher.update(encryptedBuffer),   decipher.final()]);

> return decrypted.toString("utf8");
    -> We need to convert those bytes back into a JavaScript string:



## What happens when deploying?

> Local development
    Your project might look like:
        project/
        ├── server.js
        ├── encryption.js
        ├── .env
        ├── .gitignore
        └── package.json
    -> we do not push the .env file on github

-> You generally should not upload/commit your .env file with your application code.
-> Instead, you configure secrets in your production environment.
    For example, on AWS there are multiple ways to manage configuration/secrets. Common approaches include environment configuration plus services such as AWS Secrets Manager or AWS Systems Manager Parameter Store.

## Local vs Production secrets
    LOCAL
    .env
    ↓
    ENCRYPTION_KEY
    JWT_SECRET
    DB credentials


    PRODUCTION (e.g. AWS)
    Secure configuration / secret-management service
    ↓
    Secrets made available to backend
    ↓
    process.env.ENCRYPTION_KEY

## encryption flow
    Frontend
        ↓
    Plaintext data
      ↓
    HTTPS / TLS encrypts data during transfer 🔐
        ↓
    Node.js Backend
        ↓
    TLS is terminated, so Node receives/works with plaintext
        ↓
    Backend decides this field needs storage encryption
        ↓
    AES-256-GCM
         +
    Secret Encryption Key
        +
        IV
        ↓
    Ciphertext
        ↓
    Store encrypted data + IV + authTag in DB