## Node.js path Module
-> The path module is a built-in Node.js module used to create, combine, extract, and manipulate file/folder paths safely.
-> const path = require("path");

1. path.join() -> Combines multiple path parts into one normalized path.
    const result = path.join(
        "uploads",
        "students",
        "profile.jpg"
    );
    console.log(result);
    -> uploads/students/profile.jpg

##  What is __dirname?

__dirname gives the absolute path of the directory containing the current JavaScript file in CommonJS.

2. path.resolve() -> resolve() creates an absolute path.
    const result = path.resolve(
        "uploads",
        "profile.jpg"
    );

    console.log(result);
    -> C:\project\uploads\profile.jpg

3. path.basename() -> Returns the last portion of a path, usually the file name.
4. path.dirname()-> Returns the directory/folder portion of a path.
    -> dirname() returns the directory portion of a path, excluding the last part.
    /users/gourav/uploads/profile.jpg
    │                     │         │
    └──── dirname ────────┘         │
                        └basename─┘
                                └── .jpg = extname
    
    -> /uploads/students/profile.jpg
        dirname  → /uploads/students
        basename → profile.jpg

5. path.extname() -> Returns the extension of the path.
    path.extname("video.mp4");
    // .mp4

    path.extname("data.json");
    // .json

    path.extname("document.pdf");
    // .pdf