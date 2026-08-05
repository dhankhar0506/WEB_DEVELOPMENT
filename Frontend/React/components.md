## What is a Component?

-> A Component is an independent and reusable piece of UI that returns JSX. Multiple components can be combined to build a complete application.
-> Functional Components do not have lifecycle methods like Class Components.
-> Instead, they use Hooks.

## Types of Components

1.  class components (older)
2.  Functional Component => A Functional Component is a JavaScript function that returns JSX.
    function App(){

        return(

            <h1>Hello React</h1>

        )

    }

## Why Functional Components are Popular?

    - Easy to write
    - Less code
    - Faster to understand
    - Supports Hooks
    - Preferred in modern React

## Functional Component with State
    import { useState } from "react";

    function Counter() {

        const [count, setCount] = useState(0);

        return (
            <>
                <h1>{count}</h1>

                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </>
        );
    }


## What is class components?

-> A Class Component is an ES6 class that extends React.Component and returns JSX using the render() method.
-> extends React.Component means the class inherits all the properties and methods from the React.Components
-> A Class Component extends React.Component, which means it inherits React's built-in functionality such as setState(), props, state, and lifecycle methods, allowing it to behave as a React component.

## Q2 Why extend React.Component?

- To inherit
  setState()
  state
  props
  lifecycle methods

## Main Parts of Class Component

1. Constructor => The constructor is called first when the component is created. It is used to initialize state and bind methods.
2. State => State is an object that stores data that can change during the lifetime of a component.
3. setState() is used to update the state and trigger a re-render.
4. render() returns JSX that React displays on the screen.

## Lifecycle Methods in class components

1.  componentDidMount() => It is a lifecycle method that runs once after the component is rendered (mounted) on the screen. It is mainly used for API calls, event listeners, and timers.

2.  componentDidUpdate() => It is a lifecycle method that runs after the component is re-rendered due to changes in state or props. It is mainly used to perform actions after an update.

3.  componentWillUnmount()=> It is a lifecycle method that runs just before the component is removed from the screen. It is mainly used to clean up resources like timers, event listeners, or subscriptions.

            User Opens Profile
                    │
                    ▼
            componentDidMount()
            (API Call)

            ----------------------------

            User Updates Profile
                    │
                    ▼
            componentDidUpdate()
            (After State/Props Change)

            ----------------------------

            User Leaves Profile
                    │
                    ▼
            componentWillUnmount()
            (Cleanup)
