## What are Hooks?
-> Hooks are React functions that allow functional components to use React features such as state, effects/lifecycle-related behavior, context, refs, etc
-> Hooks are special React functions that allow functional components to use React features like state, effects, context, refs, etc.

## Why do we need Hooks?
-> Hooks allow functional components to use React features like state, effects, context, refs, and reusable stateful logic.

## useState() — Manage State
    -> useState is a React Hook that allows functional components to manage state. When the state is updated using its setter function, React re-renders the component to reflect the updated value in the UI.
    -> const [count, setCount] = useState(0);
        - count → current state/value
        - setCount → function used to update count
        - 0 → initial value

        import { useState } from "react";

        function Counter() {
        const [count, setCount] = useState(0);

        const increase = () => {
            setCount(count + 1);
        };

            return (
                <>
                    <h1>{count}</h1>
                    <button onClick={increase}>Increase</button>
                </>
            );
    }

##  useEffect 
    ->  it is a React Hook used to handle side effects in functional components, such as API calls, timers, and event listeners. It runs after the component renders and can be controlled using a dependency array.
    -> 
        import { useEffect } from "react";
        function Users() {

        useEffect(() => {
            fetch("https://api.example.com/users");
        }, []);

            return <h1>Users</h1>;
        }
    -> empty [] means the effect runs only once after the component's first render (mount).

##



## useRef 
    -> It is a React Hook used to store a value or directly access a DOM element without causing a re-render when its value changes.
    -> Suppose you want to focus an input when a button is clicked:
        -> You want to track how many times a user clicks a "More" button.
        -> If they click more than 5 times, you’ll hit an API to log this behavior (analytics tracking).
        -> You don’t want to trigger re-renders every time the counter changes, so storing it in state isn’t ideal.
        -> Instead, you can use useRef to keep track of the count.

     -> import { useRef } from "react";

        function App() {
        const inputRef = useRef(null);

        const handleClick = () => {
            inputRef.current.focus();
        };

        return (
            <>
            <input ref={inputRef} />

            <button onClick={handleClick}>
                Focus Input
            </button>
            </>
        );
        }


## useContext 
-> It is a React Hook used to access shared/global data in different components without passing that data manually through props at every level.
-> The main problem it solves is prop drilling.

> step1: UserContext.jsx -> Create context and provide dummy data.
    -  import { createContext, useEffect, useState } from "react";
        
        export const UserContext = createContext(null);
        
        export function UserProvider({ children }) {
        
            const [user, setUser] = useState(null);

            useEffect(() => {
                fetch("/api/user")
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                });
            }, []);

        return (
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
            );
        }

> step 2 : Wrap your application with the Provider.
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import { UserProvider } from "./context/UserContext";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <UserProvider>
            <App />
        </UserProvider>
    );

> step3 : 
    import Navbar from "./components/Navbar";
    import Profile from "./components/Profile";

    function App() {
    return (
        <>
        <Navbar />
        <Profile />
        </>
    );
    }

    export default App;

> step 4: Use the context
    import { useContext } from "react";
    import { UserContext } from "../context/UserContext";

    function Navbar() {
        const { user } = useContext(UserContext);

        return <h2>Welcome {user?.name}</h2>;
        }

    export default Navbar;
        

## children 
-> It   is a special React prop that contains the elements or components passed between a component's opening and closing tags.


## Prop drilling 
-> prop drlling in React means passing props through multiple layers of components just to reach a deeply nested child, even when intermediate components don’t use those props. This often makes code harder to maintain, less reusable, and more complex.

    -> 
    function App() {
        const user = { name: "Sarah", role: "Developer" };
        return <Dashboard user={user} />;
    }

    function Dashboard({ user }) {
        return <Sidebar user={user} />;
    }

    function Sidebar({ user }) {
        return <Navigation user={user} />;
    }

    function Navigation({ user }) {
        return <UserProfile user={user} />;
    }

    function UserProfile({ user }) {
        return <p>Welcome, {user.name}! Role: {user.role}</p>;
    }


## UseMemo()
=> useMemo is a React Hook used to cache the result of an expensive calculation so React doesn't calculate it again on every render.
    import { useState, useMemo } from "react";

    function App() {
        const [number, setNumber] = useState(2);
        const [count, setCount] = useState(0);

        const square = useMemo(() => {
            console.log("Calculating...");
            return number * number;
        }, [number]);

        return (
            <>
            <h2>Square: {square}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
            </>
        );
    }
    -> number changes → calculate square again ✅

            count changes → component re-renders
             → don't calculate square again ❌
             → use cached value ✅
             because useMemo depend on number 





## useCallback
=> useCallback is a React Hook that keeps the same function reference between re-renders and creates a new function reference only when its dependencies change.

## react.memo
=> "If this component's props are the same as before, you can skip re-rendering this component."
    - We mainly use it when a child component renders frequently or is expensive to render, while its props usually remain unchanged.

## Lifting State up 
-> Lifting state up means moving state from a child component to their common parent so multiple child components can use and update the same state.
        App
        /   \
    Product   Cart
    -> Why do we need it?

Because both sibling components need the same data.

## UseReducer
->  IT is a React Hook used to manage complex state when we have multiple state-update operations.
    -> Instead of writing many separate state-update functions, we manage them in a reducer.
    - ADD_ITEM
    - REMOVE_ITEM
    - CLEAR_CART


    import React, { useReducer } from "react";

    function reducer(state, action) {
            switch (action.type) {
                case "INCREMENT":
                    if (state >= 10) {
                        return state;
                    }
                    return state + 1;

                case "DECREMENT":
                    if (state <= 1) {
                        return state;
                    }
                    return state - 1;

                case "RESET":
                    return 1;

                default:
                    return state;
            }
    }

        function App() {
            const [quantity, dispatch] = useReducer(reducer, 1);

        return (
            <div>
            <h2>Quantity: {quantity}</h2>

                <button
                    onClick={() => dispatch({ type: "DECREMENT" })}>
                    -
                </button>

                <button
                    onClick={() => dispatch({ type: "INCREMENT" })} >
                    +
                </button>

                <button
                    onClick={() => dispatch({ type: "RESET" })} >
                    Reset
                </button>
            </div>
        );
        }

        export default App;'

## useId 
-> is a React Hook used to generate a unique ID, mainly for connecting form elements with labels and accessibility attributes.

    import { useId } from "react";
    function LoginForm() {
        const emailId = useId();

        return (
            <>
            <label htmlFor={emailId}> // htmlFor connects a <label> with a specific form input.
                Email
            </label>

            <input
                id={emailId}
                type="email"
            />
            </>
        );
    }

    export default LoginForm;


## useLayoutEffect
->  runs after the DOM is updated, but before the browser paints/shows the updated UI to the user.
-> useLayoutEffect runs synchronously after DOM updates but before the browser paints the screen.
        React Render
            ↓
        DOM Updated
            ↓
        useLayoutEffect() ✅
            ↓
        Browser Paints UI
            ↓
        useEffect()