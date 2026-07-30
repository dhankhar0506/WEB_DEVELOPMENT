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