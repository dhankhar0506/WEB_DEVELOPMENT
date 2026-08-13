# CSS `display` Property

The `display` property controls how an HTML element participates in the layout.

It determines whether an element behaves as:

* Block
* Inline
* Inline-block
* Flex container
* Grid container
* Hidden element

---

## 1. `display: block`

A block-level element:

* Starts on a new line.
* Takes the full available width by default.
* Allows `width` and `height`.
* Allows margin and padding.

```css
div {
    display: block;
}
```

Common block-level elements include:

```html
<div></div>
<p></p>
<h1></h1>
<section></section>
```

---

## 2. `display: inline`

An inline element:

* Does not start on a new line.
* Takes only as much horizontal space as its content requires.
* `width` and `height` do not control its size in the normal inline formatting.
* Horizontal margins and padding work normally.
* Vertical margins do not create layout spacing in the same way as block elements.

```css
span {
    display: inline;
}
```

Example:

```html
<span>Hello</span>
<span>World</span>
```

Both elements appear on the same line when enough space is available.

---

## 3. `display: inline-block`

`inline-block` combines features of **inline** and **block** elements.

* Stays on the same line like an inline element.
* Allows `width` and `height`.
* Supports padding and margins.
* Can be sized like a block-level box.

```css
.box {
    display: inline-block;
    width: 200px;
    height: 100px;
}
```

### Interview Point

> `inline-block` allows an element to remain inline while still accepting width and height.

---

## 4. `display: none`

Completely removes the element from the layout.

```css
.box {
    display: none;
}
```

The element:

* Is not visible.
* Does not occupy space.
* Is not rendered as part of the page layout.

---

## 5. `display: flex`

Turns an element into a **flex container**.

```css
.container {
    display: flex;
}
```

Its direct children become **flex items**.

Flexbox is mainly used for **one-dimensional layouts**:

* Row
* Column

---

## 6. `display: grid`

Turns an element into a **grid container**.

```css
.container {
    display: grid;
}
```

Its direct children become **grid items**.

CSS Grid is mainly useful for **two-dimensional layouts**:

* Rows
* Columns

---

# `display: none` vs `visibility: hidden`

| `display: none`                            | `visibility: hidden`          |
| ------------------------------------------ | ----------------------------- |
| Element is removed from the layout         | Element remains in the layout |
| Does not occupy space                      | Occupies its original space   |
| Element is not visible                     | Element is invisible          |
| Layout is recalculated without the element | Space remains reserved        |

### Example

```css
.box1 {
    display: none;
}

.box2 {
    visibility: hidden;
}
```

### Simple Interview Answer

> `display: none` removes the element from the layout, while `visibility: hidden` hides the element but keeps its space.

---

# CSS `position` Property

The `position` property controls how an element is positioned in the document.

It determines how an element responds to positioning offsets such as:

* `top`
* `right`
* `bottom`
* `left`

---

# Position Values

The commonly used values are:

1. `static`
2. `relative`
3. `absolute`
4. `fixed`
5. `sticky`

---

# 1. `position: static`

`static` is the **default positioning** of an element.

The element:

* Follows the normal document flow.
* Is positioned normally.
* Does not respond to `top`, `right`, `bottom`, or `left`.

```css
div {
    position: static;
}
```

### Example

```css
div {
    position: static;
    top: 20px; /* Does not work */
}
```

> **Interview Point:** `static` is the default value of the `position` property.

---

# 2. `position: relative`

`relative` positions an element relative to its **original position**.

```css
div {
    position: relative;
    top: 20px;
    left: 30px;
}
```

The element moves:

* `20px` downward
* `30px` to the right

### Important Point

The element's **original space is still reserved** in the document.

```text
Original Position
       ↓
   [ Element ]

After relative positioning:

   [ Original Space ]
           ↓
       [ Element ]
```

> **Interview Point:** `relative` is commonly used as the positioning context for an absolutely positioned child.

---

# 3. `position: absolute`

An absolutely positioned element is removed from the normal document flow.

It is positioned relative to its **nearest positioned ancestor**.

A positioned ancestor is generally an ancestor whose `position` is not `static`, such as:

```text
relative
absolute
fixed
sticky
```

If no suitable positioned ancestor exists, the containing block is generally established by the initial containing block.

### Example

```css
div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid green;
}

div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid red;
}
```

```html
<div class="relative">
    <div class="absolute">
        Absolute Element
    </div>
</div>
```

Here:

```text
.relative
    ↓
    position: relative
    ↓
.absolute
    ↓
    position: absolute
```

The `.absolute` element is positioned relative to `.relative`.

### Why `position: relative` is commonly used with `absolute`

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

This allows the child to be positioned inside the parent.

---

# 4. `position: fixed`

A fixed-position element is positioned relative to the **viewport** in the common case.

It remains in the same place when the page is scrolled.

```css
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

This can be used for:

* Floating buttons
* Fixed navigation
* Chat buttons
* Back-to-top buttons

### Example

```css
.chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

The button stays at the bottom-right of the viewport while scrolling.

---

# 5. `position: sticky`

`sticky` behaves like a combination of **relative and fixed positioning**.

An element initially behaves normally in the document flow.

When scrolling reaches its specified offset, it sticks within its scrolling container.

```css
.header {
    position: sticky;
    top: 0;
}
```

### Example

```css
.header {
    position: sticky;
    top: 0;
}
```

The header scrolls normally until it reaches the top of the viewport, then remains stuck there while its containing scroll area allows.

> **Important:** A sticky element normally needs at least one inset such as `top`, `bottom`, `left`, or `right` to define where it should stick.

---

# Position Comparison

| Position   | Normal Flow      | Keeps Original Space | Positioned Relative To           |
| ---------- | ---------------- | -------------------- | -------------------------------- |
| `static`   | Yes              | Yes                  | Normal document flow             |
| `relative` | Yes              | Yes                  | Its original position            |
| `absolute` | No               | No                   | Nearest positioned ancestor      |
| `fixed`    | No               | No                   | Usually viewport                 |
| `sticky`   | Yes, until stuck | Yes                  | Its scrolling/containing context |

---

# CSS Position Offsets

Position offsets are:

```css
top
right
bottom
left
```

They specify how far a positioned element is placed from the corresponding edge of its containing block or positioning context.

### Example

```css
.box {
    position: relative;
    top: 20px;
    left: 30px;
}
```

This moves the element:

* `20px` downward from its original position.
* `30px` to the right.

> **Important:** `top`, `right`, `bottom`, and `left` do not affect a normally positioned `static` element.

---

# Why Do We Use `position`?

The `position` property is commonly used to:

* Move elements
* Overlay elements
* Create sticky headers
* Create fixed navigation bars
* Create floating buttons
* Place elements at specific locations
* Position badges and icons inside components

---

# CSS `z-index`

The `z-index` property controls the **stacking order** of overlapping elements.

A higher stacking level generally appears above a lower one when the elements participate in comparable stacking contexts.

```css
.box1 {
    position: relative;
    z-index: 1;
}

.box2 {
    position: relative;
    z-index: 2;
}
```

Here, `.box2` can appear above `.box1`.

### Example

```css
.modal {
    position: fixed;
    z-index: 1000;
}
```

> **Interview Point:** `z-index` is commonly used when elements overlap, but stacking contexts can affect which `z-index` values can be compared.

---

# CSS Float

The `float` property moves an element to the **left or right side of its containing block**, allowing surrounding inline content to wrap around it.

Common values:

```css
float: left;
float: right;
float: none;
```

### Example

```css
img {
    float: left;
}
```

Text can then wrap around the image.

### Important Point

Historically, `float` was commonly used for page layouts.

Today:

* **Flexbox** is preferred for one-dimensional layouts.
* **CSS Grid** is preferred for two-dimensional layouts.
* `float` is still useful for **wrapping text around images**.

---

# What is `clear`?

The `clear` property controls whether an element is allowed to appear beside floated elements.

It can force an element to move below floated elements.

Common values:

```css
clear: left;
clear: right;
clear: both;
clear: none;
```

### Example

```css
.footer {
    clear: both;
}
```

This prevents the footer from appearing beside left- or right-floated elements.

### Simple Interview Definition

> `clear` prevents an element from wrapping around floated elements and can force it below them.

---

# CSS Pseudo-classes

A **pseudo-class** is a keyword added to a selector to style an element based on a particular **state or condition**.

Syntax:

```css
selector:pseudo-class {
    property: value;
}
```

---

# Common Pseudo-classes

## 1. `:hover`

Applies styles when the pointer is over an element.

```css
button:hover {
    background-color: blue;
}
```

---

## 2. `:active`

Applies styles while an element is being activated.

```css
button:active {
    transform: scale(0.95);
}
```

---

## 3. `:focus`

Applies styles when an element has focus.

Commonly used with form controls.

```css
input:focus {
    outline: 2px solid blue;
}
```

---

## 4. `:visited`

Styles a link that has already been visited.

```css
a:visited {
    color: purple;
}
```

---

## 5. `:first-child`

Selects an element if it is the first child of its parent.

```css
p:first-child {
    color: red;
}
```

---

## 6. `:last-child`

Selects an element if it is the last child of its parent.

```css
p:last-child {
    color: blue;
}
```

---

## 7. `:nth-child()`

Selects an element based on its position among its siblings.

### Even elements

```css
li:nth-child(even) {
    background-color: lightgray;
}
```

### Odd elements

```css
li:nth-child(odd) {
    background-color: white;
}
```

### Specific position

```css
li:nth-child(3) {
    color: red;
}
```

---

# Pseudo-class vs Pseudo-element

| Pseudo-class                   | Pseudo-element                       |
| ------------------------------ | ------------------------------------ |
| Describes a state or condition | Styles a specific part of an element |
| Uses `:`                       | Commonly uses `::`                   |
| Example: `:hover`              | Example: `::before`                  |
| Example: `:focus`              | Example: `::first-letter`            |

---

# CSS Pseudo-elements

A **pseudo-element** is a keyword added to a selector to style a **specific part of an element** or insert generated content.

Syntax:

```css
selector::pseudo-element {
    property: value;
}
```

---

# Common Pseudo-elements

## 1. `::before`

Inserts generated content before the element's content.

```css
p::before {
    content: "👉 ";
}
```

Example:

```html
<p>Hello</p>
```

Output:

```text
👉 Hello
```

> **Important:** `content` is normally required for generated content with `::before`.

---

# 2. `::after`

Inserts generated content after the element's content.

```css
p::after {
    content: " ✔";
}
```

Output:

```text
Hello ✔
```

---

# 3. `::first-letter`

Styles the first letter of text.

```css
p::first-letter {
    font-size: 30px;
}
```

---

# 4. `::first-line`

Styles the first formatted line of text.

```css
p::first-line {
    color: blue;
}
```

> The exact first line depends on the element's width, font, and other layout conditions.

---

# Other Common Pseudo-elements

## `::selection`

Styles text when the user selects it.

```css
::selection {
    background: yellow;
    color: black;
}
```

## `::placeholder`

Styles placeholder text in form controls.

```css
input::placeholder {
    color: gray;
}
```

---

# CSS `!important` Rule

The `!important` annotation gives a declaration very high priority in the CSS cascade.

It can override normal declarations that would otherwise win based on specificity and source order.

```css
p {
    color: red !important;
}
```

If another normal rule tries to change the color:

```css
p {
    color: blue;
}
```

The `!important` declaration can win:

```text
Color = red
```

---

# Why Does `!important` Sometimes Appear Necessary?

Sometimes a CSS declaration does not apply because another rule wins in the cascade.

For example:

```css
.title {
    color: red;
}

#heading {
    color: blue;
}
```

The ID selector has higher specificity, so blue wins.

Using:

```css
.title {
    color: red !important;
}
```

can override the normal declaration.

### Best Practice

Avoid using `!important` unnecessarily.

It can make CSS:

* Harder to maintain
* Harder to debug
* More difficult to override later

Use it when there is a genuine need rather than as the first solution to a specificity problem.

---

# Quick Interview Revision

## `display: block`

> Starts on a new line and normally takes the available width.

## `display: inline`

> Remains in the same line and does not normally accept width and height as block elements do.

## `display: inline-block`

> Behaves like an inline element while allowing width and height.

## `display: none`

> Removes the element from the layout and makes it invisible.

## `visibility: hidden`

> Hides the element while preserving its layout space.

## `position: static`

> Default positioning; offset properties do not apply.

## `position: relative`

> Moves an element relative to its original position while preserving its space.

## `position: absolute`

> Removes an element from normal flow and positions it relative to its nearest positioned ancestor.

## `position: fixed`

> Positions an element relative to the viewport in the common case and keeps it fixed during scrolling.

## `position: sticky`

> Behaves normally until a scroll threshold is reached, then sticks within its scrolling context.

## `z-index`

> Controls the stacking order of overlapping elements.

## `float`

> Moves an element left or right and allows surrounding content to wrap around it.

## `clear`

> Prevents an element from being positioned beside floated elements.

## Pseudo-class

> Styles an element based on its state or condition, such as `:hover`, `:focus`, or `:active`.

## Pseudo-element

> Styles a specific part of an element or inserts generated content, such as `::before`, `::after`, or `::first-letter`.

## `!important`

> Gives a CSS declaration very high priority in the cascade and should be used sparingly.
