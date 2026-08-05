## Node.js os Module
-> The os module is a built-in Node.js module that gives information about the operating system and machine/server where the Node.js application is running.
-> const os = require("os");    
-> The os module gives information about the machine where Node.js is running. Backend developers can use this information for diagnostics, monitoring, and some runtime decisions

## os.cpus() — CPU information
-> Returns information about the machine's logical CPUs/cores

## os.totalmem() and os.freemem()
-> It talks about Ram of you PC
-> totalmem() => Returns total system memory in bytes.
    => const totalGB = os.totalmem() / 1024 / 1024 / 1024;
    => console.log(totalGB); // convert into GB
## Returns the amount of free system memory in bytes.
=>const freeGB = os.freemem() / 1024 / 1024 / 1024;
    -> console.log(freeGB);

    Server RAM = 16 GB
    Used
    ██████████

    Free
    ██████

    os.totalmem() → total RAM
    os.freemem()  → free RAM

## os.platform() => Returns the operating-system platform.
    win32
    linux
    darwin
    Your PC

    Windows
        Development:
        os.platform()
        → win32


    AWS Linux Server
        Production:
        os.platform()
        → linux

## os.hostname() => Returns the machine's hostname.
    -> DESKTOP-ABC123 or gourav 
    -> suppose you have multiple backend instances:
                Load Balancer
                    ↓
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Server-1    Server-2    Server-3