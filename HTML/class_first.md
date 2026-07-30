# HTML Basics Notes

## What is an HTML Editor?

> **Definition:**  
An **HTML Editor** is a software application that allows developers to write, edit, and manage HTML code for creating web pages.

### Popular HTML Editors

- **Visual Studio Code (VS Code)** ⭐⭐⭐⭐⭐
- **Notepad (Windows)** → Save the file as `index.html` or `index.htm`

---

# HTML `<head>` Element

The HTML `<head>` element is a container for the following elements:

- `<title>`
- `<style>`
- `<meta>`
- `<link>`
- `<script>`
- `<base>`

> **Note:**  
The `<head>` element contains information (**metadata**) about the HTML document. This information is **not displayed** on the webpage but is used by browsers, search engines, and other web services.

---

## `<title>`

Displays the title of the webpage in the browser tab.

### Definition

The `<title>` tag defines the title of the webpage shown in:

- Browser Tab
- Search Engine Results (SEO)

### Example

```html
<title>My Portfolio</title>
```

### Uses

- Browser Tab Title
- Search Engine Optimization (SEO)

---

## `<meta>`

Provides extra information (**metadata**) about the webpage.

### Example

```html
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Uses

- Character Encoding
- Responsive Design
- SEO (Description, Keywords, etc.)

---

## `<link>`

The `<link>` tag is used to connect external resources like CSS files and Favicons.

### Example

```html
<link rel="stylesheet" href="style.css">
```

### Uses

- External CSS
- Favicons
- Fonts

---

## `<style>`

Writes CSS directly inside the HTML document.

### Example

```html
<style>
h1{
    color:blue;
}
</style>
```

---

## `<script>`

Adds JavaScript to make the webpage interactive.

### Common Uses

- Button Click Events
- Form Validation
- Animations
- API Calls
- DOM Manipulation

---

## `<base>`

Defines the base URL for all relative links in the page.

### Example

```html
<base href="https://example.com/docs/">

<a href="about.html">About</a>
```

Automatically becomes:

```text
https://example.com/docs/about.html
```

### Uses

- Useful when many links share the same base path.

---

# HTML Elements

> **Definition:**  
An HTML element is defined by a **Start Tag**, **Content**, and an **End Tag**.

### Syntax

```html
<tagname>Content goes here...</tagname>
```

### Structure

```
Start Tag + Content + End Tag = HTML Element
```

Example:

```html
<p>Hello World</p>
```

- `<p>` → Start Tag
- `Hello World` → Content
- `</p>` → End Tag

---

# HTML Attributes

> **Definition:**  
All HTML elements can have **attributes**.

Attributes provide additional information about HTML elements.

### Example

```html
<a href="https://www.w3schools.com">
    Visit W3Schools
</a>
```

```html
<img
src="img_girl.jpg"
width="500"
height="600"
alt="Girl with a jacket">
```

### Common Attributes

- href
- src
- alt
- width
- height
- id
- class
- style

---

# URL in HTML

**URL = Uniform Resource Locator**

There are **two ways** to specify the URL in the `src` attribute.

---

## 1. Absolute URL

An **Absolute URL** is the complete web address.

It contains:

- Protocol (`https://`)
- Domain Name (`example.com`)
- Resource Path

### Example

```text
https://example.com/images/logo.png
```

---

## 2. Relative URL

A **Relative URL** specifies the location of a resource relative to the current webpage.

It **does not include**:

- Protocol
- Domain Name

### Example

```text
images/logo.png
```

---

# HTML Headings (Block Elements)

HTML headings are titles or subtitles displayed on a webpage.

### Syntax

```html
<h1>Heading 1</h1> <!-- Page Title -->

<h2>Heading 2</h2> <!-- Section Title -->

<h3>Heading 3</h3> <!-- Sub-section -->

<h4>Heading 4</h4>

<h5>Heading 5</h5>

<h6>Heading 6</h6>
```

### Notes

- Every heading has its own default size.
- Only **one `<h1>`** should generally be used on a webpage (Best Practice).
- Headings are **Block Elements**.

### Change Heading Size

```html
<h1 style="font-size:60px;">
Heading 1
</h1>
```

---

# HTML Paragraphs (Block Elements)

> **Definition:**  
A paragraph always starts on a new line.

Browsers automatically add white space (margin) before and after a paragraph.

### Example

```html
<p>This is a paragraph.</p>

<p>This is another paragraph.</p>
```

> **Important Note**

Large screens, small screens, and resized browser windows may display paragraphs differently because HTML is responsive.

---

# HTML Horizontal Rule (`<hr>`)

The `<hr>` element is used to separate content or define a thematic change in an HTML page.

### Example

```html
<hr>
```

### Important Points

- Empty Tag (Void Element)
- No Closing Tag
- Displays a horizontal line

---

# HTML Line Break (`<br>`)

The `<br>` element defines a line break.

### Example

```html
<p>
This is<br>
a paragraph<br>
with line breaks.
</p>
```

### Important Points

- Empty Tag (Void Element)
- No Closing Tag
- Moves content to the next line

---

# HTML `<pre>` Tag (Preformatted Text)

The `<pre>` tag displays text **exactly** as written in the HTML code.

It preserves:

- Spaces
- Tabs
- Line Breaks

### Example

```html
<pre>
Hello

    HTML

        World
</pre>
```

### Output

```text
Hello

    HTML

        World
```

### Common Uses

- Poems
- Code Snippets
- ASCII Art
- Preformatted Text







# HTML Styles

> **Definition:**  
The HTML `style` attribute is used to add styles to an HTML element, such as color, font, size, background, and more.

### Syntax

```html
<tagname style="property:value;">
```

- **property** → CSS Property
- **value** → CSS Value

### Example

```html
<h1 style="color:blue;">Hello World</h1>

<p style="font-size:20px;">This is a paragraph.</p>
```

---

# HTML Text Formatting

HTML provides several tags to format text.

## `<b>` — Bold Text

The `<b>` tag makes text **bold** but does **not** add any semantic meaning.

### Features

- Used for appearance
- Non-semantic

### Example

```html
<b>Hello World</b>
```

---

## `<strong>` — Important Text

The `<strong>` tag makes text **bold** and tells browsers, search engines, and screen readers that the text is important.

### Features

- Used for meaning + appearance
- Semantic

### Example

```html
<strong>Important Notice</strong>
```

---

## `<i>` — Italic Text

The `<i>` tag displays text in **italic** without adding semantic meaning.

### Features

- Used for appearance
- Non-semantic

### Example

```html
<i>Hello World</i>
```

---

## `<em>` — Emphasized Text

The `<em>` tag displays text in **italic** and indicates emphasis.

### Features

- Used for meaning + appearance
- Semantic

### Example

```html
<em>This is important.</em>
```

---

## `<mark>` — Highlighted Text

Highlights text with a yellow background (default).

### Example

```html
<p>I love <mark>HTML</mark>.</p>
```

---

## `<small>` — Smaller Text

Displays text in a smaller font.

### Example

```html
<small>This text is smaller.</small>
```

---

## `<del>` — Deleted Text

Displays deleted text using a strike-through line.

### Example

```html
<del>₹999</del>
```

---

## `<ins>` — Inserted Text

Displays inserted text with an underline.

### Example

```html
<ins>New Content</ins>
```

---

## `<sub>` — Subscript

Displays text below the normal line.

### Example

```html
<p>CO<sub>2</sub></p>
```

**Output**

```
CO₂
```

---

## `<sup>` — Superscript

Displays text above the normal line.

### Example

```html
<p>x<sup>2</sup></p>
```

**Output**

```
x²
```

---

# HTML Text & Quotation Tags

## `<abbr>` — Abbreviation

The `<abbr>` tag defines an abbreviation or acronym.

When the user hovers over the text, the full form is displayed.

### Example

```html
<p>
I am learning
<abbr title="HyperText Markup Language">
HTML
</abbr>.
</p>
```

---

## `<bdo>` — Bidirectional Override

Changes the text direction.

### Attributes

- `dir="ltr"` → Left to Right
- `dir="rtl"` → Right to Left

### Example

```html
<bdo dir="rtl">Hello World</bdo>
```

---

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

# HTML Tables

> **Definition:**  
HTML tables are used to display data in **rows** and **columns**.

---

## Common Table Tags

| Tag | Purpose |
|------|----------|
| `<table>` | Creates a table |
| `<caption>` | Table Title |
| `<thead>` | Table Header |
| `<tbody>` | Table Body |
| `<tfoot>` | Table Footer |
| `<tr>` | Table Row |
| `<th>` | Table Header Cell |
| `<td>` | Table Data Cell |

---

## `colspan`

Merges multiple **columns**.

### Example

```html
<td colspan="2">Student Details</td>
```

---

## `rowspan`

Merges multiple **rows**.

### Example

```html
<td rowspan="2">John</td>
```

---

## Complete Table Example

```html
<table>

    <caption>
        Student Details
    </caption>

    <thead>
        <tr>
            <th>Name</th>
            <th>Marks</th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>John</td>
            <td>95</td>
        </tr>

        <tr>
            <td>Alice</td>
            <td>90</td>
        </tr>

    </tbody>

    <tfoot>

        <tr>
            <td>Total Students</td>
            <td>2</td>
        </tr>

    </tfoot>

</table>
```

---

# HTML Lists

HTML provides **three types** of lists.

1. Unordered List
2. Ordered List
3. Description List

---

# 1. Unordered List (`<ul>`)

> **Definition:**  
An unordered list displays items with **bullets**.

Each list item starts with the `<li>` tag.

### Syntax

```html
<ul>

    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>

</ul>
```

---

## Bullet Styles

```html
<ul style="list-style-type:disc;">
```

```html
<ul style="list-style-type:circle;">
```

```html
<ul style="list-style-type:square;">
```

### Example

```html
<ul style="list-style-type:circle;">

    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>

</ul>
```

---

# 2. Ordered List (`<ol>`)

> **Definition:**  
An ordered list displays items in a **specific order** using numbers or letters.

Each item starts with the `<li>` tag.

### Syntax

```html
<ol>

    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>

</ol>
```

---

## List Types

| Type | Output |
|------|--------|
| `1` | 1, 2, 3 |
| `A` | A, B, C |
| `a` | a, b, c |
| `I` | I, II, III |
| `i` | i, ii, iii |

### Example

```html
<ol type="A">

    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>

</ol>
```

---

# 3. Description List (`<dl>`)

> **Definition:**  
A Description List is used to display **terms (names)** and their corresponding **descriptions (definitions).**

---

## Tags Used

| Tag | Purpose |
|------|----------|
| `<dl>` | Description List |
| `<dt>` | Defines the Term |
| `<dd>` | Defines the Description |

---

### Example

```html
<dl>

    <dt>Coffee</dt>
    <dd>- Black hot drink</dd>

    <dt>Milk</dt>
    <dd>- White cold drink</dd>

</dl>
```

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| `<map>` | Defines an image map |
| `<area>` | Creates clickable regions in an image |
| `<picture>` | Displays responsive images |
| Favicon | Website icon shown in browser tab |
| `<title>` | Browser tab title & SEO |
| `<table>` | Displays data in rows and columns |
| `colspan` | Merge columns |
| `rowspan` | Merge rows |
| `<ul>` | Unordered (Bulleted) List |
| `<ol>` | Ordered (Numbered) List |
| `<dl>` | Description List |




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