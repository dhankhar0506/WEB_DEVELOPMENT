# React `useDeferredValue()`

## What is `useDeferredValue()`?

`useDeferredValue` gives you a **delayed/lower-priority version of a value** so that urgent UI updates can stay responsive.

`useDeferredValue` is a React Hook that gives you a **lower-priority version of a value**.

It allows urgent UI, like **typing in an input**, to update immediately while expensive UI using the deferred value can update later.

### Simple Flow

```text
User types
    ↓
query updates immediately
    ↓
Input stays responsive
    ↓
deferredQuery updates later
    ↓
Expensive UI updates
```

---

## When to Use `useDeferredValue()`

`useDeferredValue` is useful when a **frequently changing value causes expensive rendering**.

It allows the urgent UI, such as a text input, to stay responsive while the UI depending on the deferred value updates at a lower priority.

### Good Example

Imagine searching through **10,000 products**:

```text
User types
    ↓
Input updates immediately
    ↓
query
    ↓
useDeferredValue()
    ↓
deferredQuery
    ↓
Filter 10,000 products
    ↓
Update ProductList
```

---

# Example — Search 10,000 Products

```jsx
import { useState, useDeferredValue } from "react";

function Search({ products }) {
  const [query, setQuery] = useState("");

  // Lower-priority version of query
  const deferredQuery = useDeferredValue(query);

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(deferredQuery.toLowerCase())
  );

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
      />

      <ProductList products={filteredProducts} />
    </>
  );
}
```

---

# `query` vs `deferredQuery`

```text
query
  ↓
Urgent value
  ↓
Input uses it
  ↓
Updates immediately
```

```text
deferredQuery
  ↓
Lower-priority value
  ↓
Expensive UI uses it
  ↓
Can update later
```

### Example

```text
User types: "a"

query          → "a"
deferredQuery  → "a"


User quickly types: "ap"

query          → "ap"
deferredQuery  → may temporarily remain "a"

Later:

deferredQuery  → "ap"
```

The important point is that **`deferredQuery` may temporarily lag behind `query`**.

---

# `useDeferredValue()` vs `useTransition()`

Both are used to keep the UI responsive, but they work differently.

| `useDeferredValue()`          | `useTransition()`                      |
| ----------------------------- | -------------------------------------- |
| Defers a **value**            | Marks a **state update** as non-urgent |
| You already have a value      | You control the state update           |
| Example: defer `query`        | Example: defer `setSearchResults()`    |
| No `startTransition()` needed | Uses `startTransition()`               |

### Easy Way to Remember

```text
useDeferredValue
       ↓
"Give me a lower-priority version
of this value."
```

```text
useTransition
       ↓
"Treat this state update
as non-urgent."
```

---

# Important Point

`useDeferredValue` **does not make the expensive calculation faster**.

Instead, it allows React to **prioritize the urgent UI first** and update the UI using the deferred value later.

---

# Interview Definition

> **`useDeferredValue` is a React Hook that provides a lower-priority version of a value, allowing urgent UI updates to remain responsive while expensive UI updates using the deferred value can happen later.**
