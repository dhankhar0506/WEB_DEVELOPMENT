# JSX

## What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

React converts JSX into JavaScript before the browser executes it.

> JSX makes the code easier to read, write, and maintain.

### Example

```jsx
const element = <h1>Hello React</h1>;
```

Babel then compiles JSX into JavaScript, which the browser can understand.

---

## Does Browser Understand JSX?

**NO ❌**

Browsers only understand:

* HTML
* CSS
* JavaScript

The browser does **not** directly understand JSX.

```text
JSX
  ↓
Babel / Build Tool
  ↓
JavaScript
  ↓
Browser
```

---

# JSX Rules

## 1. Return Only One Parent Element

A React component should return a single root element.

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);
```

You can also use a Fragment:

```jsx
return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);
```

---

## 2. Use `className` Instead of `class`

In JSX, use `className` instead of `class`.

```jsx
<button className="btn">
    Click
</button>
```

> Because `class` is a reserved keyword in JavaScript.

---

## 3. Use camelCase for Attributes

JSX uses JavaScript-style camelCase for many attributes.

### HTML

```html
<button onclick="">
```

### JSX

```jsx
<button onClick="">
```

Examples:

```jsx
onClick
onChange
onSubmit
className
tabIndex
```

---

## 4. JavaScript Inside `{}`

We use curly braces `{}` to write JavaScript expressions inside JSX.

### Why Curly Braces?

Curly braces tell JSX:

> **"Now switch from JSX to JavaScript."**

### Example

```jsx
const name = "Gourav";

return (
    <h1>
        Hello {name}
    </h1>
);
```

Output:

```text
Hello Gourav
```

### Another Example

```jsx
const age = 25;

return (
    <h1>
        Age: {age}
    </h1>
);
```

Output:

```text
Age: 25
```
