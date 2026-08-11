# Security Overview

```text
Security
│
├── Environment Variables
│
├── Input Validation
│
├── Avoid Blocking Event Loop
│
├── Dependency Auditing
│
└── Safe File Handling
```

---

## 1. Environment Variables

-> Environment variables store **configuration values and sensitive information outside the source code.**

```env
DB_PASSWORD=mypassword123
JWT_SECRET=abc123
PORT=3000
```

---

## 2. Input Validation

-> Input validation checks that **user input is in the correct format before processing or storing it.**

---

## 3. Avoid Blocking the Event Loop

-> Avoid performing long-running or CPU-intensive tasks on the main Event Loop because they can block other requests.

---

## 4. Dependency Auditing

-> `npm audit` scans installed packages for **known security vulnerabilities**.

```bash
npm audit
```

---

## 5. Safe File Handling

-> Safe file handling means **validating and securely processing uploaded files** to prevent:

* Malicious uploads
* Unauthorized file access
