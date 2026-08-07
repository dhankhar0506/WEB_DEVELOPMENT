## Why Child Process?
-> Node.js has one main JavaScript thread.
    Suppose a user requests:  
        - Generate PDF
        - This task takes 20 seconds.
        
         User 1
            ↓
        Generate PDF (20 sec)
            ↓
        Main Thread Busy ❌
            ↓
        User 2 also waits ❌
    - "I won't do this on my main thread."
    - Solution : 
                Main Process
                    ↓
                Create Child Process
                    ↓
                Child Generates PDF
                    ↓
                Main Process Serves Other Users
    - When Do We Use Child Processes?
      - Generate Large PDF
      - Video Conversion (FFmpeg)
      - Run Python Script
      - Image Processing

## Child Process Methods
1. spawn()=>  Starts another process and gives the output little by little (stream).
2. exec() => Runs a command and waits until it finishes, then returns all the output at once.
3. fork() => Creates another Node.js process to run another JavaScript file.
   - const { fork } = require("child_process");

## differnce between libuv and child process

| Task                    | libuv | Child Process |
| ----------------------- | :---: | :-----------: |
| Read file               |   ✅   |       ❌       |
| Write file              |   ✅   |       ❌       |
| Database query          |   ✅   |       ❌       |
| HTTP request            |   ✅   |       ❌       |
| Generate PDF            |   ❌   |       ✅       |
| Run Python AI model     |   ❌   |       ✅       |
| FFmpeg video conversion |   ❌   |       ✅       |
| Image compression       |   ❌   |       ✅       |
