


# HTML JavaScript

> **Definition:**  
JavaScript is used in HTML to make webpages **interactive** and **dynamic**.

It is a **client-side scripting language**.

---

## Common Uses

- Respond to Button Clicks
- Validate Forms
- Change HTML Content
- Change CSS Styles
- Show Alerts
- Perform Calculations
- Fetch Data from APIs

---

## Example

```html
<button onclick="showMessage()">
Click Me
</button>

<script>

function showMessage(){

    alert("Hello World");

}

</script>
```


# How to Add JavaScript in HTML?

JavaScript can be added to an HTML document in **three ways**:

1. Inline JavaScript
2. Internal JavaScript
3. External JavaScript ⭐ (Best Practice)

---

# 1. Inline JavaScript

> **Definition:**  
Inline JavaScript is written **directly inside an HTML element** using an event attribute such as `onclick`.

### Example

```html
<button onclick="alert('Hello!')">
    Click Me
</button>
```

### Characteristics

- JavaScript is written inside the HTML tag.
- Suitable for small examples or testing.
- Not recommended for large applications because it mixes HTML and JavaScript.

---

# 2. Internal JavaScript

> **Definition:**  
Internal JavaScript is written inside the `<script>` tag within the same HTML document.

The `<script>` tag is usually placed:

- Before the closing `</body>` tag ✅ (Recommended)
- Inside the `<head>` section (if needed)

### Example

```html
<button onclick="showMessage()">
    Click
</button>

<script>

function showMessage(){

    alert("Hello World");

}

</script>
```

### Characteristics

- JavaScript remains inside the same HTML file.
- Easier to manage than inline JavaScript.
- Suitable for small or single-page websites.

---

# 3. External JavaScript ⭐ (Best Practice)

> **Definition:**  
External JavaScript is written in a separate `.js` file and linked to the HTML document using the `<script>` tag.

### HTML

```html
<script src="script.js"></script>
```

### `script.js`

```javascript
function showMessage(){

    alert("Hello World");

}
```

### Characteristics

- Keeps HTML and JavaScript separate.
- Easy to maintain.
- Reusable across multiple pages.
- Faster because browsers can cache the JavaScript file.

> **Best Practice:**  
For real-world projects, always use **External JavaScript**.

---

# Comparison

| Method | Location | Best Use |
|---------|----------|----------|
| Inline | Inside HTML element | Small examples |
| Internal | Inside `<script>` tag | Single-page websites |
| External | Separate `.js` file | Real-world projects ⭐ |

---

# Interview Summary

| Method | Syntax |
|---------|--------|
| Inline JavaScript | `onclick="alert('Hello')"` |
| Internal JavaScript | `<script>...</script>` |
| External JavaScript | `<script src="script.js"></script>` |

---

# Quick Revision

```text
Inline JS
↓
Inside HTML Element

<button onclick="...">

----------------------------

Internal JS
↓
Inside <script> Tag

<script>

</script>

----------------------------

External JS ⭐
↓
Separate JavaScript File

<script src="script.js"></script>
```



---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| Block Element | Starts on a new line and takes full width |
| Inline Element | Stays in the same line and takes required width |
| `<div>` | Block-level container |
| `<span>` | Inline container |
| `float` | Wraps text around images (older layout technique) |
| `<button>` | Creates clickable buttons |
| `<iframe>` | Embeds another webpage or external content |
| `name` Attribute | Identifies elements, sends form data, groups radio buttons, targets iframes |
| JavaScript | Adds interactivity and dynamic behavior to webpages |