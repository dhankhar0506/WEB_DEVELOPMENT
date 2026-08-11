# Event Handling in React

## What is Event Handling?

> **Event Handling** is the process of executing a function when a user interacts with the UI, such as clicking a button, typing in an input, or submitting a form.

---

# What are Events?

> In JavaScript, an **event** is an action that happens in the browser, often triggered by user interaction or by the browser itself.

### Examples

* Mouse clicks
* Key presses
* Form submissions
* Page loads

> **Event Handling** means performing an action when a user interacts with the UI.

---

# Types of Events

## 1. Browser Events

> **Browser events** are triggered automatically by the browser or system, not directly by the user.

### Examples

| Event    | Description                                    |
| -------- | ---------------------------------------------- |
| `load`   | When the page finishes loading                 |
| `resize` | When the browser window size changes           |
| `scroll` | When the user scrolls, detected by the browser |

---

## 2. User Events

> **User events** are triggered directly by user actions or interaction with the UI.

### Examples

| Event       | Description                                 |
| ----------- | ------------------------------------------- |
| `click`     | When a user clicks a button                 |
| `keydown`   | When a user presses a key                   |
| `keyup`     | When a user releases a key                  |
| `input`     | When a user types or changes an input value |
| `change`    | When a form field's value changes           |
| `mouseover` | When a user hovers over an element          |

---

# Event Handling in React

In React, event handlers are passed as props to elements.

### Example

```jsx
function App() {

    function handleClick() {
        alert("Button Clicked");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}
```

### How it works

```text
User clicks button
        ↓
onClick event occurs
        ↓
handleClick()
        ↓
alert("Button Clicked")
```

---

# Important Interview Point

In React:

```jsx
<button onClick={handleClick}>
    Click Me
</button>
```

Here:

* `onClick` → React event handler prop
* `handleClick` → Function that handles the event

### ❌ Don't call the function directly

```jsx
<button onClick={handleClick()}>
    Click Me
</button>
```

This calls the function immediately during rendering.

### ✅ Pass the function

```jsx
<button onClick={handleClick}>
    Click Me
</button>
```

The function runs when the click event occurs.

---

# 🔥 Quick Interview Revision

> **Event:** An action that happens in the browser, such as a click, key press, or page load.

> **Event Handling:** Executing a function in response to an event.

> **Browser Event:** An event triggered by the browser/system, such as `load` or `resize`.

> **User Event:** An event triggered directly by user interaction, such as `click`, `keydown`, or `input`.

> **React Event Handler:** A function passed to an event prop such as `onClick`, `onChange`, or `onSubmit`.
