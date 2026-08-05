## What are Forms:
->Forms are used to collect user input like:
    Login
    Registration
    Search
    Feedback
    Payment

## In React, there are two ways to handle forms.
    - Controlled Components
    - Uncontrolled Components

## What is a Controlled Component?
-> A Controlled Component is a form element whose value is controlled by React State. The input value is stored in state, and every change updates the state using [onChange].
    
    User Types
        │
        ▼
    onChange Event
        │
        ▼
    setState()
        │
        ▼
    React State Updated
        │
        ▼
    Input Value Updated

    import { useState } from "react";

    function Login() {

    const [name, setName] = useState("");

        return (
            <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>{name}</h2>
            </>
        );
    }

## Select Example
-> import { useState } from "react";

    function App() {

    const [city, setCity] = useState("");

    return (
        <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        >
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Jaipur">Jaipur</option>
        </select>
    );
    }

## checkbox
    import { useState } from "react";

    function App() {

    const [checked, setChecked] = useState(false);

    return (
        <>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />

        {checked && <h2>Accepted</h2>}
        </>
    );
    }

## Radio
    import { useState } from "react";

    function App() {

    const [gender, setGender] = useState("");

    return (
        <>
        <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
        />
        Male

        <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
        />
        Female

        <h2>{gender}</h2>
        </>
    );
    }

## What is an Uncontrolled Component?
-> An Uncontrolled Component is a form element where the input value is managed by the DOM instead of React State. React accesses the value using a Ref.

## use of useRef
-> useRef is used when we need to store a value or access a DOM element without causing a component re-render.
-> useRef is a React Hook that is used to access DOM elements directly or store mutable values without causing a component re-render.
->useRef is a React Hook used when we want to access a DOM element or store a mutable value without causing a re-render. It returns a reference to the DOM element, allowing us to perform browser-level operations such as focusing an input, reading a file input, scrolling, or playing a video. Since these operations do not change the JSX, React does not need to re-render the component.

    import { useRef } from "react";

    function Counter() {
    const countRef = useRef(0);

    const increase = () => {
        countRef.current++;
        console.log(countRef.current);
    };

    return (
        <>
        <h1>{countRef.current}</h1>

        <button onClick={increase}>
            Increment
        </button>
        </>
    );
    }
    -> it updates change in console but do not update the UI

## use case
->  | Use Case              | Why useRef?                            |
    | --------------------- | -------------------------------------- |
    | Focus Input           | Call `focus()` on DOM element          |
    | File Upload           | Read selected files                    |
    | Scroll                | Scroll to an element                   |
    | Timer                 | Store interval ID                      |
    | Previous Value        | Store previous value without re-render |
    | Video                 | Play/Pause video                       |
    | Third-party Libraries | Access DOM elements                    |




## Can we use useRef instead of useState for all inputs?
-> ❌ No. Because useRef does not trigger a re-render.
-> If the UI depends on the input value (validation, live search, error messages, enabling/disabling buttons, conditional rendering), use useState.

## What is Re-render?
-> Re-render means React executes the component function again to generate a new JSX (Virtual DOM). It does NOT reload the page. React then compares the new Virtual DOM with the previous one and updates only the changed parts of the Real DOM.
-> Re-render does not mean page reload. It means React executes the component again to create a new UI description (JSX/Virtual DOM) so the UI can reflect the latest state or props. 

        State Changed
            ↓
        Counter() executes again
            ↓
        return <h1>1</h1>
            ↓
        New Virtual DOM
            ↓
        Compare
            ↓
        Update only <h1>
            ↓
        Browser shows 1
    Notice
        ❌ Page Reload
        ❌ Browser Refresh

    Only : ✅ Component executes again.