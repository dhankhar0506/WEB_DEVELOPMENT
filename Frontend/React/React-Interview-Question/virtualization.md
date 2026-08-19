<!-- ## React Virtualization 
-> Virtualization is a technique where React renders only the items currently visible on the screen instead of rendering the entire large list.
-> It is also called windowing.

## What Problem Does Virtualization Solve?
-> Suppose you have: 10,000 items and render all of them:
    10,000 items
        ↓
    10,000 DOM elements
The browser now has to create and manage a very large DOM tree.

-> More memory usage : Every DOM element requires memory.
-> More rendering work 
The browser has more elements to deal with when it calculates things like:
    Layout
    Styles
    Painting
    Updating the page

-> Scrolling can become slower

## what is Scrolling?
-> It means moving the visible area of a webpage up, down, left, or right to see content that is outside the current screen.

## What is Overscan?
-> Overscan means rendering a few extra items outside the currently visible area so scrolling feels smoother.

## Libraries
react-window
react-virtualized


## how it works?
    10,000 items
        ↓
    Data exists in JavaScript memory
        ↓
    Only visible + a few nearby items
    are mounted in the DOM
        ↓
    User scrolls
        ↓
    Items that are no longer needed
    are unmounted
        ↓
    New visible items are mounted -->
    # React Virtualization

## What is React Virtualization?

Virtualization is a technique where React renders **only the items currently visible on the screen** instead of rendering the entire large list.

It is also called **windowing**.

```text
Large List
   ↓
Only visible items are rendered
   ↓
Smaller DOM
   ↓
Better performance
```

---

# What Problem Does Virtualization Solve?

Suppose you have **10,000 items** and render all of them:

```text
10,000 items
     ↓
10,000 DOM elements
```

The browser now has to create and manage a **very large DOM tree**.

### Problems

### 1. More Memory Usage

Every DOM element requires memory.

```text
More DOM elements
       ↓
More memory usage
```

### 2. More Rendering Work

The browser has more elements to deal with when it calculates things like:

* Layout
* Styles
* Painting
* Updating the page

### 3. Slower Scrolling

A very large DOM can make scrolling and UI interactions slower.

---

# What is Scrolling?

Scrolling means **moving the visible area of a webpage up, down, left, or right** to see content that is outside the current screen.

Example:

```text
Before scrolling:

┌─────────────────┐
│ Item 1          │
│ Item 2          │
│ Item 3          │
│ Item 4          │
│ Item 5          │ ← Visible
└─────────────────┘

        ↓ Scroll

┌─────────────────┐
│ Item 6          │
│ Item 7          │
│ Item 8          │
│ Item 9          │
│ Item 10         │ ← Now visible
└─────────────────┘
```

With virtualization, React can remove items that are no longer visible and render the newly visible items.

---

# What is Overscan?

**Overscan** means rendering a few extra items **outside the currently visible area** so scrolling feels smoother.

For example:

```text
Visible area
┌─────────────────┐
│ Item 20         │
│ Item 21         │
│ Item 22         │
│ Item 23         │
│ Item 24         │
└─────────────────┘

Extra items
↑ Item 18, 19
↓ Item 25, 26
```

These extra items are rendered even though they are not currently visible.

### Why use Overscan?

When the user scrolls, the nearby items are already rendered, which helps prevent visible delays or blank areas.

---

# Libraries

Common React virtualization libraries include:

* `react-window`
* `react-virtualized`

---

# How Does Virtualization Work?

```text
10,000 items
      ↓
Data exists in JavaScript memory
      ↓
Only visible + a few nearby items
are mounted in the DOM
      ↓
User scrolls
      ↓
Items that are no longer needed
are unmounted
      ↓
New visible items are mounted
```

---

# Without Virtualization

```text
10,000 items
      ↓
10,000 DOM elements
      ↓
Large DOM
      ↓
More memory
      ↓
More rendering work
      ↓
Potentially slower UI
```

# With Virtualization

```text
10,000 items
      ↓
Data remains available
      ↓
Only visible + overscan items
      ↓
Small DOM
      ↓
Less memory
      ↓
Less rendering work
      ↓
Better scrolling performance
```

---

# Important Interview Point

> **Virtualization does not remove the data. It reduces the number of DOM elements by rendering only the visible items and a small number of nearby items.**

### Easy Way to Remember

```text
Virtualization
      ↓
Large List
      ↓
Render only what user can see
      +
A few nearby items (Overscan)
      ↓
Smaller DOM
      ↓
Better Performance
```

## Interview Definition

> **React Virtualization is a technique for efficiently rendering large lists by mounting only the visible items, instead of rendering every item in the DOM. It is also known as windowing.**
