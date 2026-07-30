# HTML Block and Inline Elements

HTML elements are mainly divided into **two categories**:

1. Block-level Elements
2. Inline Elements

---

# Block-level Elements

> **Definition:**  
A **block-level element** always starts on a **new line**, and browsers automatically add some space (margin) before and after it.

### Characteristics

- Starts on a new line.
- Takes up the **full width** available.
- Can contain both block-level and inline elements (depending on the element).

### Common Block Elements

| Element | Purpose |
|----------|---------|
| `<div>` | Generic container |
| `<p>` | Paragraph |
| `<h1>` - `<h6>` | Headings |
| `<form>` | Form |
| `<ul>` | Unordered List |
| `<video>` | Video |
| `<audio>` | Audio |
| `<header>` | Header Section |
| `<main>` | Main Content |
| `<section>` | Section |
| `<footer>` | Footer |

### Example

```html
<div>Hello</div>

<p>This is a paragraph.</p>

<h1>Heading</h1>
```

---

# Inline Elements

> **Definition:**  
An **inline element** does **not** start on a new line.

It only takes up **as much width as its content requires**.

### Characteristics

- Does not start on a new line.
- Takes only the required width.
- Appears in the same line as surrounding content.

### Common Inline Elements

| Element | Purpose |
|----------|---------|
| `<span>` | Inline container |
| `<a>` | Hyperlink |
| `<img>` | Image |
| `<strong>` | Important text |
| `<abbr>` | Abbreviation |
| `<input>` | Input Field |
| `<label>` | Label |
| `<select>` | Dropdown |
| `<iframe>` | Inline Frame |

### Example

```html
<p>
Hello
<span style="color:red;">World</span>
</p>
```

---

# `<div>` Element

> **Definition:**  
The `<div>` element is a **block-level container** used to group other HTML elements.

It has **no predefined styling**.

### Example

```html
<div>

    <h1>Title</h1>

    <p>Paragraph</p>

</div>
```

---

## Center a `<div>` Horizontally

### HTML

```html
<div class="box">
    Centered Div
</div>
```

### CSS

```css
.box{
    width:300px;
    margin:auto;
    border:2px solid black;
    text-align:center;
}
```

### Explanation

- `width` → Width of the div
- `margin:auto` → Centers the div horizontally
- `border` → Adds border
- `text-align:center` → Centers text inside the div

---

# What is `float`?

> **Definition:**  
The `float` property was originally introduced to **wrap text around images**, but it was later used to create page layouts.

### Values

```css
float:left;

float:right;
```

---

## Example

### HTML

```html
<img src="image.jpg" class="left">

<p>
This text wraps around the image.
</p>
```

### CSS

```css
.left{
    float:left;
    margin-right:15px;
}
```

### Output

```
[IMAGE]  This text wraps around the image...
```

> **Interview Tip:**  
Nowadays, **Flexbox** and **CSS Grid** are preferred over `float` for layouts.

---

# HTML Buttons

> **Definition:**  
The `<button>` element is used to create a clickable button on a webpage.

### Common Uses

- Trigger JavaScript functions
- Submit Forms
- Reset Forms

---

## Important Attributes

| Attribute | Purpose |
|-----------|---------|
| `type` | Defines button type |
| `onclick` | Executes JavaScript |
| `disabled` | Disables the button |

---

## Button Types

### Submit Button

```html
<button type="submit">
Submit
</button>
```

Submits the form.

---

### Reset Button

```html
<button type="reset">
Reset Form
</button>
```

Clears all form fields.

---

### Click Event

```html
<button onclick="alert('Hello!')">
Click Event
</button>
```

Shows an alert when clicked.

---

## Complete Example

```html
<form action="/action_page.php">

    First Name:
    <input
    type="text"
    name="fname">

    <button type="submit">
        Submit
    </button>

    <button type="reset">
        Reset Form
    </button>

    <button onclick="alert('Hello!')">
        Click Event
    </button>

</form>
```

---

# HTML Iframes

> **Definition:**  
An `<iframe>` (**Inline Frame**) is used to embed another webpage or external content inside the current HTML page.

---

## Example

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen>
</iframe>
```

### Common Uses

- YouTube Videos
- Google Maps
- External Websites
- PDFs
- Dashboards

---

# Can Every Website Be Embedded in an `<iframe>`?

## Answer:

**No.**

Many websites prevent embedding using security headers like:

- `X-Frame-Options`
- `Content-Security-Policy (CSP)`

### What is CSP?

> **Content Security Policy (CSP)** is a security mechanism that helps protect websites from attacks such as Cross-Site Scripting (XSS) by controlling which resources are allowed to load.

---

# Iframe as a Target for a Link

You can open a webpage inside an existing iframe.

### Example

```html
<iframe
src="demo_iframe.htm"
name="iframe_a"
height="300px"
width="100%"
title="Iframe Example">
</iframe>

<p>

<a
href="https://www.w3schools.com"
target="iframe_a">

W3Schools.com

</a>

</p>
```

When the link is clicked, it opens **inside the iframe**, not in a new tab.

---

# `name` Attribute

> **Definition:**  
The `name` attribute is used to identify an element.

### Uses

- Sends form data to the backend as **name=value**.
- Groups related radio buttons.
- Identifies an iframe as a target for links.

### Example (Form)

```html
<input
type="text"
name="username">
```

When submitted:

```
username=Gourav
```

---

### Example (Radio Button Group)

```html
<input type="radio" name="gender">

<input type="radio" name="gender">
```

Only one option can be selected because both belong to the same group.

---

### Example (Iframe Target)

```html
<iframe name="frame1"></iframe>

<a href="page.html" target="frame1">
Open Page
</a>
```

---