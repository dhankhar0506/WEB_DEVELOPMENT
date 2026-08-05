## What is React?
-> React is an open-source JavaScript library developed by Facebook for building reusable, component-based user interfaces.
-> It uses the Virtual DOM for efficient updates and improves application performance.
-> It updates only the changed parts of the UI using the Virtual DOM, making applications fast and efficient.
-> React is an open-source JavaScript library developed by Facebook (Meta) for building interactive and dynamic user interfaces. It follows a component-based architecture, where the UI is divided into small, independent, and reusable components. These components can be combined to build complex applications while making the code easier to maintain and reuse.
-> React uses a Virtual DOM, which is a lightweight JavaScript representation of the Real DOM. Whenever the application state changes, React creates a new Virtual DOM, compares it with the previous one using the Diffing Algorithm (Reconciliation), and updates only the changed parts of the Real DOM. This improves performance by avoiding unnecessary DOM updates.


## How to Create a React App
-> npx create-react-app my-app
->  cd my-app
    npm start

## using Vite
-> npm create vite@latest or npm create vite@latest my-app
->   React
      ↓
    JavaScript / TypeScript
-> npm install
-> npm run dev

## why vite?
Vite is a modern frontend build tool and development server that provides fast project startup, instant hot updates, and optimized production builds.

## Features of React
1. Component Based  => 
    - Everything is divided into components.
    - Every component can be reused.

2. Reusable => Use everywhere.
     - Same component.
     - Different data.

3. Virtual DOM =>
    - React creates a virtual representation of the real DOM.
    - It updates only the parts of the DOM that have changed, improving performance.

4. Declarative=>
    - React allows developers to describe what the UI should look like for a given state.
    - It automatically updates the UI when the state changes.

## Why React is called a Library?
-> Because React only focuses on building the UI and relies on other libraries for routing, state management, forms, and API handling.
-> React is called a library because it focuses only on building the UI. For features like routing, state management, form handling, or API calls, we use external libraries such as React Router, Redux Toolkit, Formik, and Axios.

## Q4. Why is React fast?
-> React uses a Virtual DOM to compare changes with the previous UI and updates only the modified parts of the Real DOM, reducing unnecessary DOM operations.

## What is Component-Based Architecture?
-> In React, the UI is divided into small, independent, reusable components. Each component manages its own logic and can be combined to build complex applications.

## How React Works Internally?
->  function App() {
        return <h1>Hello React</h1>;
    }
    -> Browser understands only:
        HTML
        CSS
        JavaScript
    It does NOT understand JSX (<h1>Hello React</h1> inside JavaScript).

    Step 1: You Write JSX
        -> This is not valid JavaScript.    
        -> It's JSX (JavaScript XML).
    
    Step 2: Babel Converts JSX into JavaScript
        -> React projects use Babel (a JavaScript compiler or transpiler).
        -> Babel converts JSX into valid JavaScript code that browsers can understand.
    
    Step 3: React.createElement()-> (React.createElement() is an inbuilt React API.)
        -> This function creates a JavaScript object, not an HTML element.
        - This object is called a React Element.
        -> React Element / React element tree = A plain JavaScript object that describes what should appear on the screen.
   
    Step 4: React Builds the Virtual DOM
        -> It’s an in‑built feature of React’s core library that automatically converts React elements (the objects you write in JSX) into a lightweight, in‑memory tree structure — the Virtual DOM.
        -> React takes all these React Elements and creates a tree.
            function App() {
                return (
                        <div>
                        <h1>Hello</h1>
                        <button>Click</button>
                        </div>
                );
            }

        ->  div
            ├── h1
            └── button (This tree is called the Virtual DOM.)


    step5 : ReactDOM Renders It
        -> Now ReactDOM reads the Virtual DOM. -> It creates actual HTML nodes.-> Now the browser displays it.
        -> Now ReactDOM converts the Virtual DOM into the Real DOM.


## How does React handle multiple things at the same time?

-> Imagine this You chnaged : 
    state
    added button
    added form
    changed heading
    Step 1

Solution=>     
        Execute App()
                ↓
        Step 2:  Create ONE complete Virtual DOM
                ↓

        Step 3: Compare with previous Virtual DOM
                ↓

        Step 4 : Find all differences
                ↓

        Step 5 : Update only those differences

## What is SPA?
SPA (Single Page Application) is a web application where only one HTML page is loaded initially. After that, React updates only the required part of the UI without reloading the entire page.

## Advantages of SPA
    Fast navigation
    Better User Experience
    No full page reload
    Less server requests
    Only required data is fetched

## What is MPA?
-> MPA (Multi Page Application) is a web application where every page request loads a completely new HTML page from the server.

## SPA vs MPA ?
| SPA                 | MPA                             |
| ------------------- | ------------------------------- |
| Single HTML page    | Multiple HTML pages             |
| Loads once          | Loads every request             |
| No page refresh     | Full page refresh               |
| Faster navigation   | Slower navigation               |
| Better UX           | Traditional UX                  |
| React, Angular, Vue | PHP, JSP, ASP.NET (traditional) |

## Why is React called SPA?
-> Because React loads the application only once. After that, it updates only the changed part of the UI using the Virtual DOM instead of requesting a new HTML page from the server.


## IMPORTANT POINTS
1. React creates only ONE new Virtual DOM for each render, containing ALL the latest changes. It does NOT create one Virtual DOM for every individual change.
2. React does not create a separate Virtual DOM for each change. During a render, it creates one new Virtual DOM (React Element tree) that represents the entire latest UI. It then compares this new tree with the previous one and applies only the necessary changes to the Real DOM. If multiple state updates are batched together, React usually performs a single render and creates a single new Virtual DOM for all those changes.



## How React Handles State Updates?
- When we call setState (setCount, setName, etc.), React does not immediately update the UI.

Instead, React:
    Stores (queues) the update.
    Waits until the current event handler (function) finishes executing.
    Processes all queued updates together.
    Creates one new Virtual DOM.
    Compares it with the old Virtual DOM.
    Updates only the changed parts of the Real DOM.

         Button Click
            │
            ▼
        handleClick()
            │
            ▼
        setCount()
            │
            ▼
        Queue Update
            │
            ▼
        setName()
            │
            ▼
        Queue Update
            │
            ▼
        handleClick() finishes
            │
            ▼
        React processes all queued updates
            │
            ▼
        Creates ONE new Virtual DOM
            │
            ▼
        Diffing (Compare Old vs New)
            │
            ▼
        Update Real DOM
            │
            ▼
        Browser UI Updated

## 2. What is Automatic Batching?
=> Automatic Batching is a React optimization where multiple state updates inside the same event are grouped together into one render.
    => Instead of rendering after every setState(), React renders only once.

## . Does React Wait for Some Time?
- No. = React does not wait for 100ms or 1 second.
- React waits until the current JavaScript event (event handler) finishes executing

## What is an Update Queue?
->  Update Queue is an internal queue in React that stores all state updates (setState calls) that occur during the current event or function execution. After the event handler finishes executing, React processes the queued updates together, performs one render, and updates the UI.
-> Update Queue is a temporary storage where React keeps state updates until the current event finishes executing.

## What is Functional Update?
-> Functional Update is a way of updating state by passing a callback function to the state setter. React executes this callback while processing the Update Queue and passes the latest state value (prev) to it. It should be used whenever the new state depends on the previous state.
- Instead of passing a value, we pass a function in updated Queue
- React executes this function later while processing the Update Queue.
-> (prev)=>prev+1
 
## Does the Update Queue track all updates?
 -> No. The Update Queue only stores React state updates (setState, useState setters, reducer dispatches, etc.). It does not track normal JavaScript variables, function calls, loops, conditions, or console logs. Those are executed immediately by JavaScript.

## React vs JS?
React does not execute JavaScript code. The JavaScript engine executes all normal statements, variables, loops, and function calls using the normal execution context and call stack. React only becomes involved when a React API, such as setState, useState setter, or dispatch, is called. At that point, React queues the update and processes it after the current JavaScript event finishes.

## What is a React API?
-> A React API is any built-in function or method provided by the React library that allows developers to create components, manage state, handle side effects, optimize performance, and render UI. Examples include useState, useEffect, useContext, and createRoot.
-> A React API is a built-in function or feature provided by the React library that allows developers to interact with React.
    useState()
    useEffect()
    useRef()
    useMemo()
    React.memo()
    createContext()
-> ✅ useState() is a React Hook (React API).
-> ✅ setCount() is not a global React API. It is the state updater function returned by useState().

## what is render means in react?