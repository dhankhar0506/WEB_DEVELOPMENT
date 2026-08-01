## JavaScript Execution Flow
   
        1. Program Starts
                │
                ▼
        2. JavaScript creates the Global Execution Context (GEC)
                │
                ▼
        3. Pushes the Global Execution Context into the Call Stack
                │
                ▼
        4. Starts the Memory Creation Phase of the Global Execution Context
                │
                ▼
        5. Scans the entire global code
                │
                ├── Creates memory for variables
                ├── Stores function declarations
                └── Initializes var variables to undefined
                │
                ▼
        6. Memory Creation Phase completes
                │
                ▼
        7. Starts the Code Execution Phase
                │
                ▼
        8. Executes code line by line
                │
                ├── Assigns values to variables
                ├── Executes console.log()
                └── When a function is called...
                        │
                        ▼
        9. Creates a Function Execution Context
                │
                ▼
        10. Pushes the Function Execution Context onto the Call Stack
                │
                ▼
        11. Executes the Function Execution Context
                │
                ├── Memory Creation Phase
                └── Code Execution Phase
                │
                ▼
        12. Function finishes
                │
                ▼
        13. Removes (Pops) the Function Execution Context from the Call Stack
                │
                ▼
        14. Resumes the Global Execution Context
                │
                ▼
        15. Global code finishes
                │
                ▼
        16. Removes the Global Execution Context from the Call Stack
                │
                ▼
        17. Program Ends