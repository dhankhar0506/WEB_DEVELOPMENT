<!-- ##  Component
-> A component is a reusable piece of UI in React. It is usually a JavaScript function that returns JSX.
-> Components help us divide a React application into small, reusable and maintainable pieces.

## Props
-> Props are data passed from a parent component to a child component.
    
    Parent
        function App() {
            return <Student name="Gourav" course="Data Science" />;
        }
    
    Child
        function Student(props) {
            return (
                <h1>
                {props.name} - {props.course}
                </h1>
            );
        }
    -> Props are read-only.The child should not directly modify:

## {children} Prop
-> children is a special prop that contains whatever you put between a component's opening and closing tags.
        
        export default function App() {
            return (
                <Card>
                    <h1>Hello Gourav</h1>
                    <p>Welcome to React</p>
                </Card>
            );
        }

        function Card({ children }) {
            return (
                <div className="card">
                    {children}
                </div>
            );
        }

##  Why is children useful?
-> It allows you to create reusable wrapper/layout components.

## Lifting State Up 
lifting state up means moving state from a child component to their closest common parent so that multiple child components can share and coordinate that state.
    
    Parent
        function App() {
            const [name, setName] = useState("");

            return (
                <>
                    <Input name={name} setName={setName} />
                    <Display name={name} />
                </>
            );
        }
    
    Child
        function Input({ name, setName }) {
            return (
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            );
        } -->

# React Components, Props, Children & Lifting State Up

## Component

> A component is a reusable piece of UI in React. It is usually a JavaScript function that returns JSX.

Components help us divide a React application into **small, reusable, and maintainable pieces**.

### Example

```jsx
function Welcome() {
    return <h1>Hello Gourav</h1>;
}
```

---

# Props

> Props are data passed from a **parent component to a child component**.

### Example

#### Parent

```jsx
function App() {
    return <Student name="Gourav" course="Data Science" />;
}
```

#### Child

```jsx
function Student(props) {
    return (
        <h1>
            {props.name} - {props.course}
        </h1>
    );
}
```

### Important Point

> Props are **read-only**. The child should not directly modify the props received from the parent.

### Data Flow

```text
Parent
  │
  │ Props
  ↓
Child
```

Props allow the parent component to pass data or information to the child component.

---

# `{children}` Prop

> `children` is a special prop that contains whatever you put between a component's opening and closing tags.

### Example

```jsx
export default function App() {
    return (
        <Card>
            <h1>Hello Gourav</h1>
            <p>Welcome to React</p>
        </Card>
    );
}
```

The `Card` component receives the content through the `children` prop:

```jsx
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
```

### What Happens?

```text
<Card>
    <h1>Hello Gourav</h1>
    <p>Welcome to React</p>
</Card>
        ↓
children
        ↓
<h1>Hello Gourav</h1>
<p>Welcome to React</p>
```

---

# Why is `children` Useful?

> It allows you to create reusable **wrapper and layout components**.

For example, the same `Card` component can wrap different content:

```jsx
<Card>
    <h1>Profile</h1>
</Card>

<Card>
    <p>Welcome to React</p>
</Card>
```

The `Card` component remains the same, while the content inside it can change.

---

# Lifting State Up

> Lifting state up means moving state from a child component to their **closest common parent** so that multiple child components can share and coordinate that state.

### Without Lifting State Up

```text
Child 1 → Own State
Child 2 → Own State
```

The components cannot easily share the same state.

### With Lifting State Up

```text
             Parent
          State is here
           /        \
          ↓          ↓
       Child 1    Child 2
```

The parent owns the state and passes the required data/functions to the children through props.

---

## Example

### Parent

```jsx
function App() {
    const [name, setName] = useState("");

    return (
        <>
            <Input name={name} setName={setName} />
            <Display name={name} />
        </>
    );
}
```

### Child

```jsx
function Input({ name, setName }) {
    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
```

Here:

```text
              App
               │
        ┌──────┴──────┐
        ↓             ↓
      Input         Display
        │             ↑
        └── name ─────┘
```

The `App` component owns the state:

```jsx
const [name, setName] = useState("");
```

It passes:

* `name` → current state value
* `setName` → function to update the state

### Interview Point

> **Lifting state up = Move shared state to the closest common parent and pass the state and update functions to child components through props.**

---

# Quick Interview Summary

| Concept              | Simple Meaning                           |
| -------------------- | ---------------------------------------- |
| **Component**        | Reusable piece of UI                     |
| **Props**            | Data passed from parent to child         |
| **children**         | Content placed between component tags    |
| **Lifting State Up** | Moving shared state to the common parent |

```text
Component
→ Reusable UI

Props
→ Parent → Child data

children
→ Content inside component tags

Lifting State Up
→ Move shared state to common parent
→ Parent shares state with children through props
```
