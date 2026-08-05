## Phase 1: Development (Writing Code)
    ->Suppose you create a React project.
        -> npm create vite@latest my-app
        -> npm install
        -> npm run dev
            Your React Code
                │
                ▼
            Vite Development Server(http://localhost:5173)
                │
                ▼
            Browser
    
    ->Browser opens localhost (http://localhost:5173)
        -> "I have React code, but browsers don't understand JSX."
   
    -> Vite Transpiles JSX
        Vite immediately converts
                 │
                 ▼
            return <h1>Hello</h1>;
                │ (convert into JS)
                ▼
            return React.createElement(
                "h1",
                null,
                "Hello"
            );

        This process is called Transpiling (Transpiling is converting modern JavaScript/JSX into JavaScript that browsers can execute.)

    -> React receives JavaScript
        -> React.createElement(...) => React Element => A React Element is simply a JavaScript object.
    
    -> Virtual DOM
        React combines thousands of these objects into one tree. called Virtual DOM
            App
             ↓
            Navbar
             ↓
            Home
             ↓
            Button
             ↓
            Footer


## During development → 
-> Vite + React work together.
## After deployment →
-> Vite is gone. The browser downloads the files from the server, and React alone handles rendering, state updates, and re-rendering. This is one of the most commonly misunderstood React concepts in interviews.


