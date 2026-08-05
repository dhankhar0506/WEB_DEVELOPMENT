## What are Props?
-> Props (Properties) are read-only data passed from a parent component to a child component. They are used to make components reusable and dynamic.
-> Props are data passed from Parent → Child.
-> Props in React are read‑only inputs passed from parent to child components, making the UI dynamic and reusable with different data

        Parent Component
            │
            │  name="Gourav"
            ▼
        Child Component
            │
            ▼
        props.name
            │
            ▼
        Display UI

    (Parent component)
    function App() {
        return (
            <>
                <Student name="Gourav" />
                <Student name="Rahul" />
            </>
        );
    }

    (Child component)
    function Student(props) {
        return <h1>Hello {props.name}</h1>;
    }


## Can Child Modify Props?
-> No, Props are Read Only (Immutable).

## Why are Props immutable?
-> Props are immutable because they are owned by the parent component. Allowing a child to modify them would break React's one-way data flow and make the application's state harder to predict and debug.

## What is One-Way Data Flow?
-> One-Way Data Flow means data always flows in one direction: from the Parent Component to the Child Component through Props.


# Importance  of Props
-> Make UI dynamic → Components can display different content based on the props they receive.
-> Enable reusability → The same component can be reused with different data.
-> Read‑only → Props cannot be changed inside the child component (immutable).

## Q6. Why use Props?
-> To pass data from parent to child and make components reusable.

## What is State?
-> State is data managed inside a component that can change over time. Whenever the state changes, React re-renders the component and updates the UI.

    import { useState } from "react";
    function Counter() {

        const [count, setCount] = useState(0);

        return (
            <>
                <h1>{count}</h1>

                <button
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
            </>
        );
    }

## Can we modify State?
-> Yes(mutable)

## Why use State?

To store data that changes over time, like counters, form values, user input, etc.

## Props vs State
| Props              | State                             |
| ------------------ | --------------------------------- |
| Passed by Parent   | Managed by Component              |
| Read-only          | Can be changed                    |
| Immutable          | Mutable (through setter function) |
| Used to pass data  | Used to store changing data       |
| Parent controls it | Component controls it             |
