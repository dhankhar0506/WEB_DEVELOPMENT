# CSS Box Model

## What is the CSS Box Model?

Every HTML element is treated as a **box** made up of four parts:

1. **Content**
2. **Padding**
3. **Border**
4. **Margin**

```text
+---------------------------------------+
|                Margin                 |
|   +-------------------------------+   |
|   |            Border             |   |
|   |   +-----------------------+   |   |
|   |   |       Padding         |   |   |
|   |   |   +---------------+   |   |   |
|   |   |   |    Content    |   |   |   |
|   |   |   +---------------+   |   |   |
|   |   +-----------------------+   |   |
|   +-------------------------------+   |
+---------------------------------------+
```

### Box Model Components

* **Content** → Actual text, image, or other content.
* **Padding** → Space between content and border.
* **Border** → Line around the padding/content.
* **Margin** → Space outside the border.

---

# How Total Size Is Calculated

## `box-sizing: content-box`

`content-box` is the **default value**.

With `content-box`, the specified `width` represents **only the content width**.

### Example

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: content-box;
}
```

Calculation:

```text
Content       = 200px
Left Padding  = 20px
Right Padding = 20px
Left Border   = 5px
Right Border  = 5px

Total Width = 200 + 20 + 20 + 5 + 5
            = 250px
```

### Formula

```text
Total Width =
Content Width
+ Left Padding
+ Right Padding
+ Left Border
+ Right Border
```

---

# `box-sizing: border-box`

With `border-box`, the specified `width` includes:

* Content
* Padding
* Border

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: border-box;
}
```

```text
Total Width = 200px
```

The browser adjusts the content area so that the **total width remains 200px**.

### `content-box` vs `border-box`

| Property                                          | `content-box` | `border-box` |
| ------------------------------------------------- | ------------- | ------------ |
| Default                                           | Yes           | No           |
| `width` includes content                          | Yes           | Yes          |
| `width` includes padding                          | No            | Yes          |
| `width` includes border                           | No            | Yes          |
| Total size can become larger than specified width | Yes           | No           |

### Common Practice

A common CSS reset is:

```css
* {
    box-sizing: border-box;
}
```

This makes width and height calculations easier to manage.

---

# CSS Text

CSS text properties are used to control the **appearance, alignment, decoration, transformation, spacing, and shadow of text**.

## Common CSS Text Properties

1. `color`
2. `text-align`
3. `text-decoration`
4. `text-transform`
5. `letter-spacing`
6. `word-spacing`
7. `line-height`
8. `text-shadow`

---

## 1. `color`

Controls the color of text.

```css
p {
    color: blue;
}
```

---

## 2. `text-align`

Controls the horizontal alignment of text.

Common values:

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

Example:

```css
h1 {
    text-align: center;
}
```

---

## 3. `text-decoration`

Adds or removes decoration from text.

Common values:

```css
text-decoration: none;
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
```

Example:

```css
a {
    text-decoration: none;
}
```

### Individual Text Decoration Properties

#### `text-decoration-line`

```css
p {
    text-decoration-line: underline;
}
```

#### `text-decoration-color`

```css
p {
    text-decoration-color: red;
}
```

#### `text-decoration-style`

```css
p {
    text-decoration-style: wavy;
}
```

You can combine them:

```css
p {
    text-decoration: underline red wavy;
}
```

---

## 4. `text-transform`

Controls the capitalization of text.

Common values:

```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
text-transform: none;
```

Example:

```css
h1 {
    text-transform: uppercase;
}
```

---

## 5. `letter-spacing`

Controls the space between individual letters.

```css
h1 {
    letter-spacing: 2px;
}
```

---

## 6. `word-spacing`

Controls the space between words.

```css
p {
    word-spacing: 10px;
}
```

---

## 7. `line-height`

Controls the vertical space between lines of text.

```css
p {
    line-height: 1.5;
}
```

---

## 8. `text-shadow`

Adds a shadow to text.

```css
h1 {
    text-shadow: 2px 2px 5px red;
}
```

Syntax:

```text
text-shadow: horizontal-offset vertical-offset blur-radius color;
```

---

# CSS Text Effects

CSS text effects are used to control how text behaves when it is too long or needs special formatting.

Common properties include:

1. `text-overflow`
2. `overflow-wrap`
3. `word-break`
4. `writing-mode`

---

# 1. `text-overflow`

Controls how overflowing text is displayed when it cannot fit inside its container.

## `text-overflow: ellipsis`

Displays `...` when text is clipped.

```css
.box {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

Example:

```text
This is a very long...
```

> **Important:** `text-overflow: ellipsis` normally needs `overflow: hidden` and a constrained width, along with text that is prevented from wrapping, such as `white-space: nowrap`.

---

## `text-overflow: clip`

Clips the overflowing text without showing `...`.

```css
.box {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
}
```

---

# 2. `overflow-wrap`

Allows long words or unbroken strings to wrap onto the next line so they fit inside the container.

```css
.box {
    width: 150px;
    border: 1px solid black;
    overflow-wrap: break-word;
}
```

> **Interview Point:** `word-wrap` is an older name/alias for `overflow-wrap`. Prefer `overflow-wrap` in modern CSS.

---

# 3. `word-break`

Specifies how words should break when reaching the end of a line.

### `normal`

Uses normal word-breaking rules.

```css
.box {
    word-break: normal;
}
```

### `break-all`

Allows text to break between almost any characters.

```css
.box {
    word-break: break-all;
}
```

> `break-all` can break words in the middle, so it should be used carefully because it can reduce readability.

---

# 4. `writing-mode`

Controls whether text is laid out horizontally or vertically.

### Horizontal

```css
.box {
    writing-mode: horizontal-tb;
}
```

Output:

```text
Hello
```

### Vertical

```css
.box {
    writing-mode: vertical-rl;
}
```

Output is arranged vertically, with the exact direction depending on the writing mode and text direction.

---

# CSS `overflow` Property

The `overflow` property controls what happens when content **does not fit inside an element's box**.

Suppose a `<div>` has a fixed size:

```css
.box {
    width: 300px;
    height: 150px;
    border: 2px solid black;
}
```

If the content is larger than `300px × 150px`, it may overflow the box.

The `overflow` property tells the browser what to do with that extra content.

---

# Values of `overflow`

## 1. `overflow: visible`

Content is allowed to extend outside the element.

```css
.box {
    overflow: visible;
}
```

This is the default.

---

## 2. `overflow: hidden`

Extra content is clipped and not displayed outside the box.

```css
.box {
    overflow: hidden;
}
```

---

## 3. `overflow: scroll`

Provides scrolling mechanisms even when the content does not necessarily overflow.

```css
.box {
    overflow: scroll;
}
```

---

## 4. `overflow: auto`

The browser provides scrolling when necessary.

```css
.box {
    overflow: auto;
}
```

### Common Difference

| Value     | Behavior                               |
| --------- | -------------------------------------- |
| `visible` | Content can overflow outside           |
| `hidden`  | Extra content is clipped               |
| `scroll`  | Scrolling mechanism is always provided |
| `auto`    | Scrolling is provided when needed      |

---

# CSS Fonts

CSS font properties control the appearance of text, including:

* Font family
* Font size
* Font weight
* Font style
* Font variant

---

## 1. `font-family`

Specifies the font used for text.

```css
p {
    font-family: Arial, Helvetica, sans-serif;
}
```

The browser tries the fonts from **left to right**.

If Arial is unavailable, it tries Helvetica, and then the generic `sans-serif` family.

---

## 2. `font-size`

Controls the size of text.

```css
h1 {
    font-size: 32px;
}
```

---

## 3. `font-weight`

Controls how thick or bold the text appears.

Common numeric values range from:

```text
100 → Thin
200
300 → Light
400 → Normal
500 → Medium
600
700 → Bold
800
900 → Black
```

Example:

```css
h1 {
    font-weight: 700;
}
```

Common keyword values:

```css
font-weight: normal;
font-weight: bold;
```

---

## 4. `font-style`

Controls the style of the font.

Common values:

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

Example:

```css
p {
    font-style: italic;
}
```

---

## 5. `font-variant`

Controls alternate font variations.

A common value is:

```css
font-variant: small-caps;
```

Example:

```css
p {
    font-variant: small-caps;
}
```

This displays lowercase letters in a small-cap style.

---

# CSS Icons — Font Awesome

CSS icons are graphical symbols used to represent things such as:

* Search
* Home
* User
* Cart
* Settings
* Menu

**Font Awesome** is a popular icon library that provides thousands of ready-to-use icons.

---

# How to Use Font Awesome

One common approach is to load Font Awesome using a CDN.

### Step 1: Add the Font Awesome CDN

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
```

### Step 2: Use an Icon

```html
<i class="fa-solid fa-house"></i>
```

Another example:

```html
<i class="fa-solid fa-user"></i>
```

> **Interview Point:** A **CDN (Content Delivery Network)** delivers files such as CSS, JavaScript, fonts, and images from distributed servers so they can be loaded efficiently.

---

# CSS Links

CSS link styling is used to style HTML hyperlinks created using the `<a>` element.

CSS provides pseudo-classes for different link states.

| State     | Selector    | Description                     |
| --------- | ----------- | ------------------------------- |
| Unvisited | `a:link`    | Link has not been visited       |
| Visited   | `a:visited` | User has visited the link       |
| Hover     | `a:hover`   | Mouse pointer is over the link  |
| Active    | `a:active`  | Link is being activated/clicked |

---

## 1. `a:link`

Styles an unvisited link.

```css
a:link {
    color: blue;
}
```

---

## 2. `a:visited`

Styles a link that the user has already visited.

```css
a:visited {
    color: purple;
}
```

---

## 3. `a:hover`

Changes the style when the mouse pointer moves over the link.

```css
a:hover {
    color: red;
}
```

---

## 4. `a:active`

Styles the link while it is being activated/clicked.

```css
a:active {
    color: green;
}
```

---

## Remove Link Underline

By default, links are commonly displayed with an underline.

You can remove it using:

```css
a {
    text-decoration: none;
}
```

### Common Link State Order

For predictable behavior, remember:

```text
:link
:visited
:hover
:active
```

A common mnemonic is **LVHA**:

> **L**o**V**e **HA**te

---

# CSS Lists

CSS list properties are used to style HTML ordered and unordered lists.

HTML lists:

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
</ul>

<ol>
    <li>First</li>
    <li>Second</li>
</ol>
```

---

# `list-style-type`

Controls the marker style of list items.

## Unordered List (`ul`)

Common values:

```css
ul {
    list-style-type: disc;
}
```

Other common values:

```css
list-style-type: circle;
list-style-type: square;
list-style-type: none;
```

Example:

```css
ul {
    list-style-type: square;
}
```

---

## Ordered List (`ol`)

Common values:

```css
ol {
    list-style-type: decimal;
}
```

Other values:

```css
list-style-type: upper-alpha;
list-style-type: lower-alpha;
list-style-type: upper-roman;
list-style-type: lower-roman;
```

Example:

```css
ol {
    list-style-type: upper-roman;
}
```

---

# CSS Tables

CSS table properties are used to style HTML tables, including:

* Borders
* Spacing
* Alignment
* Width
* Layout
* Row styling

---

## Basic Table Styling

```css
table,
th,
td {
    border: 1px solid black;
}
```

---

# `border-collapse`

Controls whether table borders are separated or collapsed into a single border.

```css
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}
```

### `collapse`

Adjacent borders are combined into a single border.

### `separate`

Borders remain separate.

> **Important:** `border-collapse` is primarily applied to the `<table>` element.

A cleaner version is:

```css
table {
    border-collapse: collapse;
}

th,
td {
    border: 1px solid black;
}
```

---

# `:nth-child()`

The `:nth-child()` pseudo-class can be used to select elements based on their position among their siblings.

### Example — Alternate Table Rows

```css
tr:nth-child(even) {
    background-color: #f2f2f2;
}
```

This applies the background to every even-numbered table row.

You can also select odd rows:

```css
tr:nth-child(odd) {
    background-color: #ffffff;
}
```

---

# Quick Interview Revision

## CSS Box Model

> Every HTML element is represented as a box consisting of **content, padding, border, and margin**.

## `content-box`

> The default `box-sizing` value. The specified width/height applies to the content area only.

## `border-box`

> The specified width/height includes the content, padding, and border.

## Margin

> Space outside the border.

## Padding

> Space between the content and border.

## `text-align`

> Controls the horizontal alignment of text.

## `text-decoration`

> Adds or removes decorations such as underline, overline, or line-through.

## `text-transform`

> Controls text capitalization.

## `letter-spacing`

> Controls the space between characters.

## `word-spacing`

> Controls the space between words.

## `line-height`

> Controls the vertical distance between lines of text.

## `text-overflow`

> Controls how overflowing text is represented, such as with `ellipsis`.

## `overflow-wrap`

> Allows long words or unbroken strings to wrap within their container.

## `word-break`

> Controls where words can break when reaching the edge of a line.

## `overflow`

> Controls what happens when content overflows an element's box.

## `font-family`

> Specifies the font used for text.

## `font-size`

> Controls the size of text.

## `font-weight`

> Controls how bold or thick text appears.

## `font-style`

> Controls whether text is normal, italic, or oblique.

## `:hover`

> Applies styles when the pointer is over an element.

## `:nth-child()`

> Selects elements based on their position among their siblings.

## CDN

> A CDN (Content Delivery Network) delivers web resources from distributed servers, often improving loading performance and availability.
