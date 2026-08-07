## Security Overview
    Security
    │

    ├── Environment Variables

    ├── Input Validation

    ├── Avoid Blocking Event Loop

    ├── Dependency Auditing

    └── Safe File Handling

1. -> Environment variables store configuration values and sensitive information outside the source code.
   DB_PASSWORD=mypassword123
   JWT_SECRET=abc123
   PORT=3000

2. Input validation checks that user input is in the correct format before processing or storing it.
3.  Avoid Blocking the Event Loop
4.  npm audit scans installed packages for known security vulnerabilities.
5.  Safe file handling means validating and securely processing uploaded files to prevent malicious uploads or unauthorized file access.