# CSS (Cascading Style Sheets)

## What is CSS?

* **CSS (Cascading Style Sheets)** is a stylesheet language used to **style and design HTML elements**.
* CSS controls the **appearance, layout, spacing, colors, fonts, responsiveness, and visual effects** of a webpage.

---

# Why Do We Use CSS?

CSS is used to:

* 🎨 Change colors
* 📝 Change fonts
* 📏 Add spacing using `margin` and `padding`
* 📐 Control layout
* 📱 Make websites responsive
* ✨ Add animations and visual effects

---

# Basic CSS Syntax

A CSS rule consists of:

* **Selector** → Which HTML element to style
* **Property** → What to change
* **Value** → The value assigned to the property

```css
selector {
    property: value;
}
```

### Example

```css
h1 {
    color: blue;
}
```

* `h1` → Selector
* `color` → Property
* `blue` → Value

> **Interview Point:** `selector`, `property`, and `value` are the basic parts of a CSS rule. They are not called CSS attributes.

---

# CSS Selectors

A **CSS selector** tells CSS which HTML element or elements should be styled.

## Most Common CSS Selectors

### 1. Element Selector

Selects HTML elements based on their tag name.

```css
p {
    color: red;
}
```

This applies the style to all `<p>` elements.

---

### 2. ID Selector (`#`)

Selects an element using its `id`.

* An `id` should normally be **unique within a page**.

```css
#header {
    color: blue;
}
```

```html
<h1 id="header">Hello</h1>
```

---

### 3. Class Selector (`.`)

Selects one or more elements that share the same class.

```css
.title {
    color: green;
}
```

```html
<h1 class="title">Hello</h1>
<p class="title">World</p>
```

Both elements will receive the same style.

---

### 4. Universal Selector (`*`)

Applies styles to all elements.

```css
* {
    margin: 0;
    padding: 0;
}
```

---

### 5. Group Selector (`,`)

Allows multiple selectors to share the same CSS rules.

```css
h1, p, button {
    color: blue;
}
```

This applies `color: blue` to all `<h1>`, `<p>`, and `<button>` elements.

---

# Types of CSS

There are three main ways to apply CSS.

## 1. Inline CSS

CSS is written directly inside the HTML element using the `style` attribute.

```html
<h1 style="color: red;">Hello</h1>
```

### Advantages

* Quick for small changes.

### Disadvantages

* Difficult to maintain.
* Not reusable.
* Mixes HTML and CSS.

---

## 2. Internal CSS

CSS is written inside the `<style>` tag in the HTML document.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

---

## 3. External CSS

CSS is written in a separate `.css` file.

### `style.css`

```css
h1 {
    color: blue;
}
```

### HTML

```html
<link rel="stylesheet" href="style.css">
```

> **Best practice:** External CSS is generally preferred because it improves reusability, maintainability, and separation of concerns.

---

# Why Is CSS Called "Cascading"?

CSS is called **Cascading** because multiple CSS rules can apply to the same element.

The browser uses the **cascade**, including factors such as:

* Importance (`!important`)
* Origin
* Specificity
* Source order

to determine which rule should win.

### Example

```css
p {
    color: red;
}

p {
    color: blue;
}
```

The second rule wins because both selectors have the same specificity and the second rule appears later.

> **Interview Point:** **Specificity** is an important part of the CSS cascade.

---

# CSS Colors

CSS colors are used to change the color of:

* Text
* Backgrounds
* Borders
* Other HTML elements

---

# Ways to Specify Colors in CSS

There are several common ways to specify colors.

## 1. Color Name

```css
color: red;
color: green;
color: blue;
```

---

## 2. HEX (Hexadecimal)

HEX colors start with `#`.

```css
color: #ff0000;
```

Example:

```text
#RRGGBB
```

* `RR` → Red
* `GG` → Green
* `BB` → Blue

---

## 3. RGB

RGB stands for:

* **R** → Red
* **G** → Green
* **B** → Blue

Each value normally ranges from `0` to `255`.

```css
color: rgb(255, 0, 0);
```

---

## 4. RGBA

RGBA stands for:

* **R** → Red
* **G** → Green
* **B** → Blue
* **A** → Alpha / transparency

```css
color: rgba(255, 0, 0, 0.5);
```

The alpha value ranges from `0` to `1`.

* `0` → Fully transparent
* `1` → Fully opaque

---

## 5. HSL

HSL stands for:

* **H** → Hue
* **S** → Saturation
* **L** → Lightness

```css
color: hsl(0, 100%, 50%);
```

---

# CSS Gradients

A **gradient** is a background created by smoothly blending two or more colors.

## Linear Gradient

```css
background: linear-gradient(direction, color1, color2);
```

### Example

```css
background: linear-gradient(45deg, red, blue);
```

This creates a linear gradient from red to blue at a `45deg` angle.

---

# CSS Background

CSS background properties are used to control the background of an HTML element, including:

* Background color
* Background image
* Position
* Size
* Repetition
* Attachment

---

## 1. `background-color`

Sets the background color.

```css
div {
    background-color: green;
}
```

### `opacity`

Controls the opacity of the **entire element**, including its content.

```css
div {
    background-color: green;
    opacity: 0.3;
}
```

> **Important:** `opacity: 0.3` makes the entire `<div>` transparent, not just the background.

If you only want the background color to be transparent, use `rgba()` or another color function with alpha.

```css
div {
    background-color: rgba(0, 128, 0, 0.3);
}
```

---

## 2. `background-image`

Adds an image as the background.

```css
div {
    background-image: url("nature.jpg");
}
```

---

## 3. `background-repeat`

Controls whether the background image repeats.

Common values:

* `repeat` → Default; repeats horizontally and vertically
* `no-repeat` → Does not repeat
* `repeat-x` → Repeats horizontally
* `repeat-y` → Repeats vertically

```css
div {
    background-repeat: no-repeat;
}
```

---

## 4. `background-position`

Sets the position of the background image.

Common values:

* `left`
* `right`
* `center`
* `top`
* `bottom`

```css
div {
    background-position: center;
}
```

---

## 5. `background-size`

Controls the size of the background image.

Common values:

* `auto`
* `cover`
* `contain`

```css
div {
    background-size: cover;
}
```

### `cover`

The image covers the entire element, but some parts of the image may be cropped.

### `contain`

The complete image remains visible, but empty space may remain.

---

## 6. `background-attachment`

Determines how the background behaves when the page or element is scrolled.

Common values:

* `scroll` → Default
* `fixed`
* `local`

```css
div {
    background-attachment: fixed;
}
```

---

# CSS Borders

A **CSS border** creates a line around an HTML element.

```css
selector {
    border: 2px solid black;
}
```

The shorthand syntax is:

```css
border: width style color;
```

Example:

```css
border: 2px solid black;
```

* `2px` → Border width
* `solid` → Border style
* `black` → Border color

---

# Why Do We Use Borders?

Borders are used to:

* Highlight an element
* Separate sections
* Design buttons
* Design cards
* Design forms
* Improve UI appearance

---

# Border Properties

## 1. `border-width`

Controls the thickness of the border.

```css
border-width: 2px;
```

---

## 2. `border-style`

Controls the style of the border.

Common values:

```css
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
```

---

## 3. `border-color`

Controls the border color.

```css
border-color: black;
```

---

## 4. `border-radius`

Creates rounded corners.

```css
border-radius: 10px;
```

For a circular element:

```css
border-radius: 50%;
```

---

# CSS Border - Individual Sides

You can style each side independently.

```css
p {
    border-top-style: dotted;
    border-right-style: solid;
    border-bottom-style: dotted;
    border-left-style: solid;
}
```

You can also control individual side properties:

```css
p {
    border-top: 2px solid red;
    border-right: 2px solid blue;
    border-bottom: 2px solid green;
    border-left: 2px solid black;
}
```

---

# CSS Outline vs Border

## Border

* A border is a visible line around an HTML element.
* It is part of the **CSS Box Model**.
* It can affect the element's dimensions/layout.

```css
border: 2px solid black;
```

## Outline

* An outline is drawn outside the border.
* It is **not part of the CSS Box Model**.
* It generally does not affect the element's layout or dimensions.
* It is often used to highlight elements, especially for focus states.

```css
outline: 2px solid blue;
```

### Interview Difference

| Border                              | Outline                                 |
| ----------------------------------- | --------------------------------------- |
| Part of the box model               | Not part of the box model               |
| Can affect element dimensions       | Does not affect layout dimensions       |
| Can have individual sides           | Does not work exactly like border sides |
| Commonly used for visual boundaries | Commonly used for highlighting/focus    |

---

# CSS Margin

A **margin** is the space **outside the border** of an element.

It creates distance between the element and surrounding elements.

```css
p {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
}
```

---

# `margin: auto`

`margin: auto` can be used to center a block-level element horizontally when it has a defined width.

```css
div {
    width: 300px;
    margin: auto;
}
```

> **Important:** `margin: auto` does not automatically center an element vertically.

---

# CSS Padding

**Padding** is the space between an element's **content and border**.

```css
div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
}
```

---

# Margin vs Padding

```text
+-----------------------------------+
|              Margin               |  ← Outside space
|   +---------------------------+   |
|   |          Border           |   |
|   |   +-------------------+   |   |
|   |   |      Padding      |   |   |
|   |   |   +-----------+   |   |   |
|   |   |   |  Content  |   |   |   |
|   |   |   +-----------+   |   |   |
|   |   +-------------------+   |   |
|   +---------------------------+   |
+-----------------------------------+
```

### Simple Difference

* **Margin** → Space outside the border
* **Padding** → Space inside the border, around the content

---

# Can Inline Elements Use Width, Height, and Margin?

Normally, inline elements do not behave like block-level elements for `width` and `height`.

### Inline Elements

❌ `width` → Does not control the inline element's size normally.

❌ `height` → Does not control the inline element's size normally.

✅ `margin-left` / `margin-right` → Can affect horizontal spacing.

⚠️ `margin-top` / `margin-bottom` → Do not create vertical layout spacing in the same way as block elements.

### Solution

Use:

```css
display: inline-block;
```

or:

```css
display: block;
```

Example:

```css
span {
    display: inline-block;
    width: 200px;
    height: 50px;
    margin: 20px;
}
```

> **Interview Point:** `inline-block` allows an element to remain inline while accepting width, height, and box-model dimensions more like a block element.

---

# CSS Height and Width

The `width` and `height` properties control the size of an element.

* **Width** → Controls horizontal size.
* **Height** → Controls vertical size.

```css
div {
    width: 300px;
    height: 150px;
    background-color: lightblue;
}
```

---

# `min-width`, `max-width`, `min-height`, and `max-height`

These properties control the minimum and maximum dimensions of an element.

## `max-width`

Sets the maximum width an element can have.

```css
img {
    max-width: 100%;
}
```

This is commonly used to make images responsive.

---

## `min-width`

Sets the minimum width an element can have.

```css
div {
    min-width: 200px;
}
```

---

## `max-height`

Sets the maximum height an element can have.

```css
div {
    max-height: 500px;
}
```

---

## `min-height`

Sets the minimum height an element can have.

```css
div {
    min-height: 200px;
}
```

---

# CSS Units

CSS units define the size, length, spacing, or dimensions of an element.

There are two main categories:

1. **Absolute Units**
2. **Relative Units**

---

# 1. Absolute Units

Absolute units generally represent fixed physical or pixel-based sizes.

The most commonly used in web development is:

### `px` — Pixels

A pixel is a fixed CSS length unit.

```css
div {
    width: 300px;
}
```

---

# 2. Relative Units

Relative units depend on another value, such as:

* Parent element
* Root font size
* Viewport size

---

## `%` — Percentage

Usually relative to the corresponding size of the containing block.

```css
.parent {
    width: 400px;
}

.child {
    width: 50%;
}
```

The child will have a width of:

```text
200px
```

because:

```text
50% of 400px = 200px
```

> **Important:** `%` does not always mean "relative to the parent" for every CSS property. Its reference depends on the property.

---

## `em`

`em` is relative to the **font size of the relevant parent element** for `font-size`.

Example:

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em;
}
```

Here:

```text
2em = 2 × 20px = 40px
```

> **Interview Point:** `em` can compound when nested because it is relative to the inherited/current font size.

---

## `rem`

`rem` means **root em**.

It is relative to the font size of the root `<html>` element.

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem;
}
```

Therefore:

```text
2rem = 2 × 16px = 32px
```

### `em` vs `rem`

* `em` → Relative to the relevant/current font size, often the parent for `font-size`.
* `rem` → Relative to the root `<html>` font size.

---

## `vw` — Viewport Width

`vw` stands for **Viewport Width**.

```css
div {
    width: 50vw;
}
```

`1vw` = `1%` of the viewport width.

Therefore:

```text
100vw = 100% of viewport width
```

---

## `vh` — Viewport Height

`vh` stands for **Viewport Height**.

```css
div {
    height: 100vh;
}
```

`1vh` = `1%` of the viewport height.

---

## `auto`

`auto` allows the browser to calculate the value based on the layout and available space.

```css
div {
    width: auto;
}
```

A common example is:

```css
div {
    width: 300px;
    margin: auto;
}
```

Here, the browser automatically calculates the left and right margins to center the block when possible.

---

# Common CSS Units

| Unit   | Meaning                                              | Example            |
| ------ | ---------------------------------------------------- | ------------------ |
| `px`   | CSS pixel                                            | `width: 300px;`    |
| `%`    | Relative to the applicable containing/reference size | `width: 50%;`      |
| `vw`   | Viewport width                                       | `width: 100vw;`    |
| `vh`   | Viewport height                                      | `height: 100vh;`   |
| `rem`  | Relative to root font size                           | `font-size: 2rem;` |
| `em`   | Relative to relevant/current font size               | `font-size: 2em;`  |
| `auto` | Browser calculates the value                         | `width: auto;`     |

---

# Quick Interview Revision

### CSS

> CSS is a stylesheet language used to style and design HTML elements.

### Selector

> A selector tells CSS which HTML element(s) should be styled.

### Property

> A property defines what aspect of an element should be changed.

### Value

> A value specifies what the property should be changed to.

### Margin

> Space outside an element's border.

### Padding

> Space between the content and border.

### Border

> A line around an element and part of the CSS box model.

### Outline

> A line outside the border that does not participate in the box model.

### `em`

> Relative to the relevant/current font size.

### `rem`

> Relative to the root (`html`) font size.

### `vw`

> Relative to viewport width.

### `vh`

> Relative to viewport height.

### `max-width`

> Defines the maximum width an element can have.

### `min-width`

> Defines the minimum width an element can have.

### `cover`

> Makes a background image cover the entire container, potentially cropping parts of the image.

### `contain`

> Scales a background image so the entire image remains visible, potentially leaving empty space.
