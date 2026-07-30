# HTML Comments

> **Definition:**  
HTML comments are **not displayed** in the browser but help document the HTML source code.

### Syntax

```html
<!-- This is a comment -->
```

### Uses

- Explain code
- Temporarily disable code
- Improve readability

---

# HTML Colors

HTML supports different color formats.

## RGB Color

### Syntax

```css
rgb(red, green, blue)
```

Each parameter has a value between **0 and 255**.

Example

```css
rgb(255,0,0)
```

➡️ Red Color

---

### Total Possible Colors

```
256 × 256 × 256 = 16,777,216 Colors
```

---

## RGBA Color

### Syntax

```css
rgba(red, green, blue, alpha)
```

The **alpha** value controls transparency.

| Alpha Value | Meaning |
|-------------|---------|
| 0 | Fully Transparent |
| 0.5 | 50% Transparent |
| 1 | Fully Visible |

### Example

```css
rgba(255,0,0,0.5)
```

---

# HTML Styles - CSS

> **CSS = Cascading Style Sheets**

CSS is used to format the layout of a webpage.

Using CSS, you can control:

- Text Color
- Font
- Font Size
- Spacing
- Positioning
- Layout
- Background Color
- Background Images
- Responsive Design
- Much More...

---

# Ways to Add CSS

CSS can be added in **3 ways**.

---

## 1. Inline CSS

Uses the `style` attribute inside an HTML element.

### Example

```html
<h1 style="color:blue;">
A Blue Heading
</h1>
```

### Used For

- Styling a single element

---

## 2. Internal CSS

Uses the `<style>` tag inside the `<head>` section.

### Example

```html
<style>
body{
    background-color: powderblue;
}

h1{
    color: blue;
}

p{
    color: red;
}
</style>
```

### Used For

- Styling a single HTML page

---

## 3. External CSS

Uses a separate `.css` file.

### Example

```html
<link rel="stylesheet" href="styles.css">
```

### Used For

- Styling multiple HTML pages
- Best Practice ✅

---

# HTML Links

> **Definition:**  
HTML links are hyperlinks that allow users to jump from one page to another.

### Syntax

```html
<a href="URL">Link Text</a>
```

---

## Open Link in New Tab

```html
<a href="https://www.w3schools.com/"
target="_blank">
Visit W3Schools!
</a>
```

### `target="_blank"`

Opens the link in a **new browser tab**.

---

## Title Attribute

The `title` attribute displays a tooltip when the user hovers over the link.

### Example

```html
<a href="https://www.w3schools.com/html/"
title="Go to W3Schools HTML section">
Visit our HTML Tutorial
</a>
```

> **Hover the mouse** over the link to see the title.

---

## Use an Image as a Link

Images can also work as hyperlinks.

### Example

```html
<a href="default.asp">
<img
src="smiley.gif"
alt="HTML tutorial"
style="width:42px;height:42px;">
</a>
```

---

## Link to an Email Address

The `mailto:` keyword opens the user's default email application.

### Example

```html
<a href="mailto:someone@example.com">
Send Email
</a>
```

---

# HTML Images

> **Definition:**  
The HTML `<img>` tag is used to embed an image into a webpage.

### Syntax

```html
<img src="url" alt="alternate text">
```

---

## Example

```html
<img
src="img_girl.jpg"
alt="Girl in a jacket"
width="500"
height="600">
```

### Important Attributes

| Attribute | Purpose |
|-----------|---------|
| `src` | Specifies the image path |
| `alt` | Alternative text shown if the image cannot load |
| `width` | Image width |
| `height` | Image height |

> **Interview Tip:**  
Always use the `alt` attribute because it improves **accessibility** and **SEO**.



# HTML Image Map

> **Definition:**  
An **Image Map** is an image that contains **multiple clickable areas**. Each clickable area can open a different webpage or perform a different action.

### Syntax

```html
<img src="image.jpg" usemap="#myMap">

<map name="myMap">
    <area
        shape="rect"
        coords="34,44,270,350"
        href="page1.html">
</map>
```

### `usemap` Attribute

The `usemap` attribute connects an `<img>` element with a `<map>` element by referring to its **name**.

```html
<img src="image.jpg" usemap="#myMap">
```

```html
<map name="myMap">
```

---

## `<area>` Tag

Defines a clickable area inside an image.

### Common Attributes

| Attribute | Purpose |
|-----------|---------|
| `shape` | Defines the shape of the clickable area |
| `coords` | Coordinates of the clickable area |
| `href` | Destination link |

### Rectangle Coordinates

```text
coords="20,30,180,150"

x1, y1, x2, y2
```

---

# HTML Background Images

A background image can be added using the **CSS `background-image` property**.

### Example

```html
<p style="background-image: url('img_girl.jpg');">
```

> **Note:**  
Background images are added using **CSS**, not a separate HTML tag.

---

# HTML `<picture>` Element

> **Definition:**  
The `<picture>` element allows you to provide **multiple versions** of an image.

The browser automatically chooses the most appropriate image based on:

- Screen Size
- Device Resolution
- Supported Image Format

### Example

```html
<picture>

    <source
        media="(min-width:1000px)"
        srcset="desktop.jpg">

    <source
        media="(min-width:600px)"
        srcset="tablet.jpg">

    <img
        src="mobile.jpg"
        alt="Nature">

</picture>
```

### Responsive Images

- Desktop → `desktop.jpg`
- Tablet → `tablet.jpg`
- Mobile → `mobile.jpg`

> **Interview Tip:**  
The `<picture>` element is mainly used for **Responsive Images**.

---

# HTML Favicon

> **Definition:**  
A **Favicon** is a small icon that represents a website.

It appears in:

- Browser Tab
- Bookmarks
- Browser History

### Example

```html
<link
rel="icon"
type="image/x-icon/png/svg"
href="favicon.ico">
```

---

# HTML Page Title

The `<title>` tag specifies the title of an HTML document.

### Important Points

- Placed inside the `<head>` section.
- Appears on the browser tab.
- Used in search engine results.
- Important for SEO.

### Example

```html
<head>
    <title>My Portfolio</title>
</head>
```

---