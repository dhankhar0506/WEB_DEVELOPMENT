# What is npm?

-> **npm (Node Package Manager)** is the default package manager for Node.js used to install, update, remove, and manage project dependencies.

### Example

```bash
npm install express
```

### npm Flow

```text
Project
   ↓
  npm
   ↓
Download Package
   ↓
node_modules
   ↓
Use in Project
```

---

# package.json

-> `package.json` is the main configuration file of a Node.js project. It stores project information, dependencies, scripts, and metadata.

Instead of remembering every package:

* Express
* Mongoose
* JWT
* bcrypt

-> Everything is listed in `package.json`.

---

# package-lock.json

-> `package-lock.json` records the exact versions of installed packages and their dependencies to ensure consistent installations.

> `package.json` specifies which packages your project depends on, while `package-lock.json` locks the exact installed versions to ensure reproducible installs.

---

# Semantic Versioning (SemVer)

```text
MAJOR.MINOR.PATCH
1.4.2
```

1. **PATCH** → Bug fixes
2. **MINOR** → New features
3. **MAJOR** → Breaking changes

---

# Local vs Global Packages

## Local Package

-> Installed only for the current project.

```bash
npm install express
```

The package is installed inside the project's:

```text
node_modules
```

---

## Global Package

-> Installed once for the whole system.

```bash
npm install -g nodemon
```

---

# Dependencies vs Dev Dependencies

## Dependencies

-> Packages required when the application runs.

```bash
npm install express
```

Examples:

* `express`
* `mongoose`
* `bcrypt`
* `jsonwebtoken`

---

## Dev Dependencies

-> Packages used only during development.

```bash
npm install --save-dev nodemon
```

or

```bash
npm install -D nodemon
```

---

# Scripts

-> Scripts are custom commands defined in `package.json` that can be executed using `npm run`.

Example:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Run the script:

```bash
npm run dev
```

---

# What is npx?

-> `npx` executes an npm package without requiring you to install it globally.

It is commonly used for:

* One-time commands
* CLI tools
* Project setup tools

Example:

```bash
npx create-react-app my-app
```

---

# npm vs npx

| npm                                   | npx                                   |
| ------------------------------------- | ------------------------------------- |
| Used to install and manage packages   | Used to execute CLI packages          |
| Packages are stored in `node_modules` | Executes a package/CLI                |
| Packages are listed in `package.json` | Commonly used for one-time commands   |
| Used for application dependencies     | Commonly used for project setup tools |

### Simple Difference

> **npm → Install and manage packages**

> **npx → Execute packages/CLI tools**

---

# Interview Quick Revision

### npm

-> Package manager for Node.js used to install, update, remove, and manage dependencies.

### package.json

-> Contains project information, dependencies, scripts, and metadata.

### package-lock.json

-> Locks the exact installed versions of packages and their dependencies.

### SemVer

```text
MAJOR.MINOR.PATCH
```

* **MAJOR** → Breaking changes
* **MINOR** → New features
* **PATCH** → Bug fixes

### Local Package

-> Available only inside the current project.

### Global Package

-> Available system-wide.

### Dependencies

-> Required when the application runs.

### Dev Dependencies

-> Used during development.

### npx

-> Executes npm packages/CLI tools without requiring a global installation.

### npm vs npx

```text
npm → Install / Manage
npx → Execute
```
