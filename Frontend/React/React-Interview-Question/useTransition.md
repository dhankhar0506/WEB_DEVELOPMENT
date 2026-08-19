<!-- ## useTransition 
-> useTransition is a React Hook that marks a state update as non-urgent. React can prioritize more important work, such as user interactions, which helps keep the UI responsive.

## isPending
-> isPending tells us whether the transition is still in progress, so we can show a loading or pending UI.
-> isPending tells you whether the transition work is still pending.

## When to Use useTransition()
Good examples:
    Filtering a large list
    Updating a large search result
    Switching between heavy views/tabs
    Rendering expensive UI after user interaction

## Example
    const [isPending, startTransition] = useTransition();

    function handleSearch(value) {
        setQuery(value); // Urgent

        startTransition(() => {
            setSearchResults(filterProducts(value)); // Non-urgent
        });
    } -->

    # React `useTransition()`

## What is `useTransition()`?

`useTransition` is a React Hook that marks a **state update as non-urgent**.

React can prioritize more important work, such as **user interactions**, which helps keep the UI responsive.

### Basic Structure

```jsx
const [isPending, startTransition] = useTransition();
```

* **`startTransition`** → Used to mark a state update as non-urgent.
* **`isPending`** → Tells us whether the transition is still in progress.

---

# What is `isPending`?

`isPending` tells us whether the **transition work is still pending**.

It can be used to show a loading or pending UI while React is processing the transition.

```text
startTransition()
       ↓
Transition starts
       ↓
isPending = true
       ↓
React processes non-urgent update
       ↓
Transition completes
       ↓
isPending = false
```

---

# When to Use `useTransition()`

Good examples:

* Filtering a large list
* Updating a large search result
* Switching between heavy views/tabs
* Rendering expensive UI after user interaction

---

# Example

```jsx
const [isPending, startTransition] = useTransition();

function handleSearch(value) {
  setQuery(value); // Urgent

  startTransition(() => {
    setSearchResults(filterProducts(value)); // Non-urgent
  });
}
```

### How This Works

```text
User types
    ↓
setQuery(value)
    ↓
Urgent update
    ↓
Input stays responsive

        +

startTransition()
    ↓
setSearchResults(...)
    ↓
Non-urgent update
    ↓
React can prioritize other important work
```

---

# Urgent vs Non-Urgent Updates

### Urgent Update

An update that should happen immediately because it directly affects the user's interaction.

```jsx
setQuery(value);
```

Example:

```text
User types
   ↓
Input value should update immediately
```

### Non-Urgent Update

An update that can be processed after more important work.

```jsx
startTransition(() => {
  setSearchResults(filterProducts(value));
});
```

Example:

```text
Search results
      ↓
Large amount of UI work
      ↓
Can be processed as a transition
```

---

# Important Point

`useTransition` **does not make the calculation itself faster**.

Instead, it tells React:

> **"This update is less urgent, so prioritize more important UI work first."**

This helps keep the UI **responsive** during expensive rendering work.

---

# Interview Definition

> **`useTransition` is a React Hook used to mark state updates as non-urgent, allowing React to prioritize more important updates and keep the UI responsive.**

### Easy Way to Remember

```text
useTransition
      ↓
Mark update as non-urgent
      ↓
React prioritizes urgent work
      ↓
UI stays responsive
```
