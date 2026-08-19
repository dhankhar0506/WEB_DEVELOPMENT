<!-- ## useReducer
useReducer is a React Hook used to manage state when the state logic is more complex or has multiple types of updates.
    const [state, dispatch] = useReducer(reducer, initialState);
    state
    ↓
    dispatch(action)
    ↓
    reducer
    ↓
    new state

## Simple Example — Counter
    import { useReducer } from "react";

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                if (state.count >= 10) {
                    alert("Count cannot be greater than 10");
                    return state;
                }

                return {
                    count: state.count + 1,
                };

            case "decrement":
                if (state.count <= 0) {
                    alert("Count cannot be less than 0");
                    return state;
                }

                return {
                    count: state.count - 1,
                };

            default:
                return state;
        }
    }

    function Counter() {
        const [state, dispatch] = useReducer(reducer, {count: 0,});

    return (
        <>
            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: "decrement" })}>
                -
            </button>

            <button onClick={() => dispatch({ type: "increment" })}>
                +
            </button>
        </>
        );
    } -->

    # React `useReducer()`

## What is `useReducer()`?

`useReducer` is a React Hook used to manage state when the **state logic is more complex or has multiple types of updates**.

### Basic Structure

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### How `useReducer()` Works

```text
State
  ↓
dispatch(action)
  ↓
Reducer
  ↓
New State
```

* **`state`** → Current state.
* **`dispatch`** → Sends an action to the reducer.
* **`action`** → Describes what should happen.
* **`reducer`** → Contains the logic for updating the state.
* **`initialState`** → Initial value of the state.

---

# Simple Example — Counter

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      if (state.count >= 10) {
        alert("Count cannot be greater than 10");
        return state;
      }

      return {
        count: state.count + 1,
      };

    case "decrement":
      if (state.count <= 0) {
        alert("Count cannot be less than 0");
        return state;
      }

      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </>
  );
}

export default Counter;
```

## Example Flow

When the user clicks `+`:

```text
User clicks +
      ↓
dispatch({ type: "increment" })
      ↓
reducer(state, action)
      ↓
Check action.type
      ↓
"increment"
      ↓
count + 1
      ↓
New state
      ↓
Component re-renders
```

When the user clicks `-`:

```text
User clicks -
      ↓
dispatch({ type: "decrement" })
      ↓
reducer(state, action)
      ↓
Check action.type
      ↓
"decrement"
      ↓
count - 1
      ↓
New state
      ↓
Component re-renders
```

## Important Point

The **reducer should not directly modify the existing state**. It should return the new state.

```jsx
return {
  count: state.count + 1,
};
```

## Interview Definition

> **`useReducer` is a React Hook used to manage complex state logic by dispatching actions to a reducer function, which calculates and returns the new state.**
