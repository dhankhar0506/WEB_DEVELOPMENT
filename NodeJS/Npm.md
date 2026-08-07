## What is npm?
-> npm (Node Package Manager) is the default package manager for Node.js used to install, update, remove, and manage project dependencies.
example -> npm install express
    Project
    ↓
    npm
    ↓
    Download Package
    ↓
    node_modules
    ↓
    Use in Project

## package.json
-> package.json is the main configuration file of a Node.js project. It stores project information, dependencies, scripts, and metadata.
    Instead of remembering every package,
        Express
        Mongoose
        JWT
        bcrypt
    -> everything is listed in package.json.

## package-lock.json
-> package-lock.json records the exact versions of installed packages and their dependencies to ensure consistent installations.

>package.json specifies which packages your project depends on, while package-lock.json locks the exact installed versions to ensure reproducible installs.

## Semantic Versioning (SemVer)
MAJOR.MINOR.PATCH
    1.4.2

1. patch =>  Bug fixes
2. MINOR => New features
3. MAJOR => Breaking changes

## Local vs Global Packages
Local -> Installed only for the current project.
    -> npm install express
Global Package -> Installed once for the whole system.
    ->npm install -g nodemon

## Dependencies vs Dev Dependencies
-> Dependencies => Packages required when the application runs.
    -> npm install express
-> Dev Dependencies -> packages used only during development.
    -> npm install --save-dev nodemon
    -> npm install -D nodemon

## Scripts
-> Scripts are custom commands defined in package.json that can be executed using npm run.

## npx
-> npx executes an npm package without requiring you to install it globally.

## npm vs npx
npm -> npm is used to install and manage packages that your application depends on. These packages are stored in node_modules and listed in package.json.
npx -> npx is used to execute CLI packages without requiring a global installation. It is commonly used for one-time commands or project setup tools.