# HTML (HyperText Markup Language)

## What is HTML?

> **Definition:**  
HTML (**HyperText Markup Language**) is the **standard markup language** used to create the **structure** of web pages.

It uses **tags** (such as `<h1>`, `<p>`, `<img>`) to define different elements on a webpage.

HTML tells the browser **what content to display**, while **CSS controls how it looks** and **JavaScript makes it interactive**.

> **Interview Definition:**  
> HTML is the standard markup language used to create the structure of web pages using tags.

---

# Tag vs Element

## Tag

> **Definition:**  
A **tag** is a keyword enclosed in angle brackets (`<>`).

### Example

```html
<p>
</p>
```

### Purpose

Tags tell the browser where an element **starts** or **ends**.

---

## Element

> **Definition:**  
An **element** is the complete HTML component.

It consists of:

- Opening Tag
- Content
- Closing Tag

### Example

```html
<p>Hello World</p>
```

### Difference

| Tag | Element |
|------|----------|
| `<p>` | `<p>Hello World</p>` |
| Opening/Closing keyword | Complete HTML structure |

---

# What are HTML Tags?

> **Definition:**  
HTML tags are predefined keywords enclosed in angle brackets (`<>`).

They tell the browser how to **display** or **structure** content.

### Example

```html
<h1>Hello</h1>

<p>Welcome to HTML.</p>
```

---

# Types of HTML Tags

HTML tags are mainly of **two types**.

---

## 1. Paired (Container) Tags

Require **both opening and closing tags**.

### Examples

```html
<p></p>

<h1></h1>

<div></div>

<span></span>
```

---

## 2. Self-Closing (Void) Tags

Do **not** require a closing tag.

### Examples

```html
<img>

<br>

<hr>

<input>

<meta>

<link>
```

---

# Block vs Inline Elements

HTML elements are mainly divided into **two categories**.

- Block Elements
- Inline Elements

---

# Block Elements

### Characteristics

- Starts on a new line
- Takes the full available width
- Can contain block and inline elements

### Examples

```html
<div></div>

<p></p>

<h1></h1>

<section></section>

<article></article>

<header></header>

<footer></footer>

<nav></nav>

<form></form>

<ul></ul>

<ol></ol>

<li></li>
```

---

# Inline Elements

### Characteristics

- Does not start on a new line
- Takes only the required width
- Usually contains text or other inline elements

### Examples

```html
<span></span>

<a></a>

<img>

<strong></strong>

<em></em>

<label></label>

<input>

<button></button>
```

---

# Semantic Tags

> **Definition:**  
Semantic tags clearly describe the **meaning** and **purpose** of their content.

### Advantages

- Better Readability
- Better SEO
- Better Accessibility
- Easier Maintenance

### Common Semantic Tags

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>
```

---

# Non-Semantic Tags

> **Definition:**  
Non-semantic tags **do not describe** the meaning of their content.

They are mainly used for grouping or styling elements.

### Common Non-Semantic Tags

```html
<div>

<span>

<b>      <!-- Use <strong> for importance -->

<i>      <!-- Use <em> for emphasis -->
```

---

# Semantic vs Non-Semantic Tags

| Semantic Tags | Non-Semantic Tags |
|---------------|-------------------|
| Describe the meaning of content | Do not describe the meaning |
| Better SEO | No SEO benefit |
| Better Accessibility | Limited Accessibility |
| Easier to understand | Generic containers |
| Examples: `<header>`, `<section>`, `<article>` | Examples: `<div>`, `<span>`, `<b>`, `<i>` |

---

# Interview Quick Revision

| Topic | Key Point |
|--------|-----------|
| HTML | Creates the structure of a webpage |
| Tag | Opening or closing keyword |
| Element | Opening tag + Content + Closing tag |
| Paired Tag | Requires opening & closing tag |
| Void Tag | No closing tag |
| Block Element | Starts on a new line, takes full width |
| Inline Element | Takes only required width |
| Semantic Tag | Describes the meaning of content |
| Non-Semantic Tag | Generic container with no meaning |





# HTML Interview Questions

## 1. What is HTML?

> **Answer:**  
HTML (**HyperText Markup Language**) is the **standard markup language** used to create the **structure** of web pages using tags.

---

## 2. Is HTML a Programming Language?

> **Answer:**  
**No.**

HTML is a **markup language**, not a programming language, because it does **not** support programming concepts such as:

- Variables
- Loops
- Conditions
- Functions

It only defines the **structure** of a webpage.

---

## 3. Why Do We Use HTML?

We use HTML to:

- Create the structure of web pages.
- Organize webpage content.
- Display text, images, videos, forms, and links.
- Work with CSS for styling.
- Work with JavaScript for interactivity.

---

## 4. What is the Difference Between a Tag and an Element?

### Tag

A keyword enclosed inside angle brackets (`<>`).

Example

```html
<p>
```

---

### Element

The complete HTML structure.

It consists of:

- Opening Tag
- Content
- Closing Tag

Example

```html
<p>Hello World</p>
```

---

## 5. What are Semantic Tags?

> **Answer:**  
Semantic tags clearly describe the **meaning** and **purpose** of their content.

### Benefits

- Better SEO
- Better Accessibility
- Better Readability
- Easier Maintenance

Examples:

```html
<header>

<nav>

<section>

<article>

<footer>
```

---

## 6. What is the Difference Between Block and Inline Elements?

| Block Elements | Inline Elements |
|----------------|-----------------|
| Starts on a new line | Stays on the same line |
| Takes full available width | Takes only the required width |
| Can contain block and inline elements | Usually contains text or other inline elements |

---

# Quick Revision

| Topic | Key Point |
|--------|-----------|
| HTML | Structure of a webpage |
| Tag | Keyword inside `<>` |
| Element | Opening Tag + Content + Closing Tag |
| Paired Tag | Has opening & closing tags |
| Self-Closing (Void) Tag | No closing tag |
| Block Element | Starts on a new line and takes full width |
| Inline Element | Stays on the same line and takes required width |
| Semantic Tag | Meaningful (`<header>`, `<section>`) |
| Non-Semantic Tag | Generic (`<div>`, `<span>`) |

---

# Basic Structure of an HTML Document

Every HTML document follows a standard structure.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>

<body>

    <h1>Welcome</h1>
    <p>Hello, World!</p>

</body>

</html>
```

---

# HTML Document Structure

## 1. `<!DOCTYPE html>`

> **Definition:**  
Declares the document as **HTML5**.

### Purpose

- Tells the browser which version of HTML is being used.
- Enables standards mode in browsers.

### Example

```html
<!DOCTYPE html>
```

> **Interview Point:**  
`<!DOCTYPE html>` tells the browser that the document is written in **HTML5**.

> **VS Code Shortcut:**  
Type `!` and press **Enter** to generate the basic HTML boilerplate.

---

## 2. `<html>`

> **Definition:**  
The `<html>` element is the **root element** of an HTML document.

It wraps all HTML content.

### Example

```html
<html lang="en">
```

### `lang` Attribute

The `lang` attribute specifies the language of the webpage.

```html
<html lang="en">
```

### Why `lang="en"`?

- Improves SEO
- Helps screen readers
- Improves accessibility

---

## 3. `<head>`

> **Definition:**  
The `<head>` element contains **metadata** (information about the webpage).

### Characteristics

- Not displayed on the webpage.
- Used by browsers and search engines.
- Stores metadata and external resources.

### Common Tags Inside `<head>`

- `<title>`
- `<meta>`
- `<link>`
- `<style>`
- `<script>`

---

## 4. `<meta charset="UTF-8">`

> **Definition:**  
Sets the character encoding to **UTF-8**.

### Example

```html
<meta charset="UTF-8">
```

### Why Use UTF-8?

Supports:

- Multiple Languages
- Currency Symbols
- Emojis
- Mathematical Symbols
- Special Characters

---

## 5. `<meta name="viewport">`

> **Definition:**  
Makes the webpage responsive on different screen sizes.

### Example

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

### Purpose

- Proper scaling on mobile devices
- Responsive web design

---

## 6. `<title>`

> **Definition:**  
Sets the title displayed in the browser tab.

### Example

```html
<title>My Website</title>
```

### Importance

- Browser Tab Title
- Search Engine Results
- SEO

---

## 7. `<body>`

> **Definition:**  
The `<body>` element contains all the **visible content** displayed on the webpage.

### Common Elements Inside `<body>`

- Headings
- Paragraphs
- Images
- Links
- Buttons
- Tables
- Forms
- Videos
- Audio

### Example

```html
<body>

    <h1>Welcome</h1>

    <p>Hello, World!</p>

</body>
```

---

# Interview Summary

| Element | Purpose |
|----------|---------|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html>` | Root element of the webpage |
| `<head>` | Stores metadata and external resources |
| `<meta charset="UTF-8">` | Sets character encoding |
| `<meta name="viewport">` | Makes the page responsive |
| `<title>` | Browser tab title and SEO |
| `<body>` | Contains all visible webpage content |

---

# Quick Revision

```text
<!DOCTYPE html>   → HTML5 Declaration

<html>            → Root Element

<head>            → Metadata

<meta charset>    → Character Encoding

<meta viewport>   → Responsive Design

<title>           → Browser Tab Title

<body>            → Visible Webpage Content
```



````md id="html-head-body-attributes"
# Difference: `<head>` vs `<body>`

| `<head>` | `<body>` |
|----------|----------|
| Contains metadata | Contains visible content |
| Not displayed on the webpage | Displayed in the browser |
| Used by browsers and search engines | Used by users |
| Includes `<title>`, `<meta>`, `<link>`, `<style>`, `<script>` | Includes headings, paragraphs, images, forms, tables, videos, etc. |

> **Easy to Remember:**  
> **`<head>` = Information about the webpage**  
> **`<body>` = Information shown on the webpage**

---

# Interview Questions

## 1. What is `<!DOCTYPE html>`?

> **Answer:**  
`<!DOCTYPE html>` declares the document as **HTML5** and tells the browser which version of HTML is being used.

---

## 2. What is the Purpose of the `<head>` Tag?

> **Answer:**  
The `<head>` tag contains **metadata** (information about the webpage).

It is **not visible** to users but is used by browsers and search engines.

It commonly contains:

- `<title>`
- `<meta>`
- `<link>`
- `<style>`
- `<script>`

---

## 3. What is the Purpose of the `<body>` Tag?

> **Answer:**  
The `<body>` tag contains **all the visible content** displayed in the browser.

Examples include:

- Headings
- Paragraphs
- Images
- Links
- Forms
- Tables
- Videos
- Audio

---

## 4. Why Do We Use `lang="en"`?

> **Answer:**  
The `lang` attribute specifies the language of the webpage.

### Benefits

- Improves SEO.
- Helps search engines identify the page language.
- Helps screen readers pronounce content correctly.
- Improves accessibility.

### Example

```html
<html lang="en">
```

---

## 5. Why is the Viewport Meta Tag Important?

> **Answer:**  
The **viewport** is the visible area of a webpage on a user's device.

The viewport meta tag makes webpages **responsive** by setting:

- The page width equal to the device width.
- The initial zoom level to **100%**.

### Example

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

---

## 6. What is Metadata?

> **Answer:**  
**Metadata** is information **about a webpage** that is stored inside the `<head>` section.

It is **not visible** to users but helps browsers and search engines understand the webpage.

### Common Uses

- Character Encoding
- Responsive Design
- SEO
- Page Information
- Browser Configuration

---

## 7. What is UTF-8?

> **Answer:**  
**UTF-8** is a **character encoding** that tells the browser how to represent and display text.

We use:

```html
<meta charset="UTF-8">
```

to support:

- Almost all languages
- Special characters
- Currency symbols
- Mathematical symbols
- Emojis 😊

> **Easy to Remember:**  
> **UTF-8 = Universal Text Format 🌍**

---

# Quick Revision

| Topic | Key Point |
|--------|-----------|
| `<!DOCTYPE html>` | Declares HTML5 |
| `<html>` | Root element |
| `lang="en"` | Specifies page language |
| `<head>` | Metadata (Hidden) |
| `<meta charset="UTF-8">` | Character encoding |
| `<meta name="viewport">` | Responsive design |
| `<title>` | Browser tab title |
| `<body>` | Visible webpage content |

---

# HTML5 vs Earlier HTML Versions (HTML4/XHTML)

> **Definition:**  
HTML5 is the **latest version** of HTML.

Compared to HTML4/XHTML, it introduced many modern features.

| HTML5 | HTML4 / XHTML |
|--------|---------------|
| Semantic tags (`<header>`, `<section>`) | Mostly generic tags like `<div>` |
| Built-in `<audio>` and `<video>` | Required external plugins (Flash) |
| New form input types | Limited input types |
| Canvas & SVG support | No built-in Canvas support |
| Local Storage API | Cookies mainly used for storage |
| Geolocation API | Not available |
| Better SEO & Accessibility | Limited support |
| Mobile-friendly | Less mobile support |

> **Interview Point:**  
HTML5 introduced **semantic elements, multimedia support, Canvas, new form controls, Local Storage, Geolocation API, and improved SEO, accessibility, and mobile support.**

---

# HTML Attributes

## What are Attributes?

> **Definition:**  
HTML **attributes** provide **additional information** about HTML elements.

They are written inside the **opening tag** and usually consist of a **name** and a **value**.

### Syntax

```html
<tagname attribute="value">
    Content
</tagname>
```

### Examples

```html
<a href="https://example.com">
    Visit Website
</a>

<img src="image.jpg" alt="Nature">
```

> **Interview Point:**  
Attributes provide extra information about an HTML element and are always written inside the **opening tag**.

---

# Characteristics of HTML Attributes

- Written inside the opening tag.
- Usually written as **name="value"** pairs.
- Provide extra information about an element.
- Some attributes are specific to certain elements (e.g., `href` for `<a>`, `src` for `<img>`).
- Some attributes are **global**, meaning they can be used with almost all HTML elements (e.g., `id`, `class`, `title`, `style`).

---

# Common HTML Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `id` | Unique identifier | `id="header"` |
| `class` | Groups elements for CSS/JS | `class="btn"` |
| `style` | Inline CSS | `style="color:red"` |
| `title` | Tooltip text | `title="Click Here"` |
| `href` | Link destination | `<a href="page.html">` |
| `src` | File path | `<img src="image.jpg">` |
| `alt` | Alternative text for images | `alt="Nature"` |
| `width` | Width of element | `width="300"` |
| `height` | Height of element | `height="200"` |
| `value` | Default value | `<input value="Admin">` |

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| `<head>` | Stores metadata and resources |
| `<body>` | Displays webpage content |
| Metadata | Information about the webpage |
| UTF-8 | Character encoding |
| Viewport | Makes webpages responsive |
| HTML5 | Modern HTML with semantic tags and APIs |
| Attribute | Provides additional information about an element |
| Global Attributes | Can be used with most HTML elements |
````




````md id="html-global-attributes-void-tags"
# Global Attributes

> **Definition:**  
**Global attributes** are HTML attributes that can be used with **almost every HTML element**.

Unlike element-specific attributes (such as `href` for `<a>` or `src` for `<img>`), global attributes work with most HTML elements.

---

# Common Global Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `id` | Unique identifier for an element | `id="header"` |
| `class` | Groups elements for CSS or JavaScript | `class="container"` |
| `style` | Applies inline CSS | `style="color:red"` |
| `title` | Shows a tooltip on hover | `title="Click Here"` |
| `hidden` | Hides the element | `hidden` |
| `lang` | Specifies the language | `lang="en"` |
| `dir` | Sets text direction (`ltr` / `rtl`) | `dir="ltr"` |
| `tabindex` | Controls keyboard navigation | `tabindex="1"` |
| `contenteditable` | Makes content editable | `contenteditable="true"` |
| `draggable` | Allows dragging the element | `draggable="true"` |

---

## Example

```html
<p
id="intro"
class="text"
title="Welcome">

Hello World

</p>
```

> **Interview Point:**  
Global attributes can be used with **almost every HTML element**.

---

# Empty (Void) Tags

## What are Empty (Void) Tags?

> **Definition:**  
**Empty (Void) tags** are HTML tags that **do not have a closing tag** and **cannot contain any content**.

They perform a specific task without needing opening and closing tag pairs.

---

# Common Empty (Void) Tags

```html
<br>

<hr>

<img>

<input>

<meta>

<link>

<source>

<area>

<col>

<embed>

<track>

<wbr>
```

---

## Example

```html
<img src="logo.png" alt="Logo">

<br>

<hr>
```

---

## Why Don't Void Tags Have Closing Tags?

Void tags don't contain:

- Text
- Child Elements
- Inner HTML

Therefore, a closing tag is unnecessary.

> **Interview Point:**  
Void tags do not have closing tags because they **cannot contain any content**.

---

# What is HyperText?

> **Definition:**  
**HyperText** is **text that contains hyperlinks**, allowing users to navigate from one webpage or document to another.

When a user clicks a hyperlink, the browser opens the linked resource.

---

## Example

```html
<a href="https://example.com">

Visit Example

</a>
```

Here, **"Visit Example"** is **HyperText** because it links to another webpage.

---

## Why is it Called HyperText?

Unlike normal text, **HyperText** is interconnected through hyperlinks, allowing users to move between related pages or resources with a click.

---

## Common Uses of HyperText

- Website Navigation
- Linking Webpages
- Opening Documents
- Downloading Files
- Sending Emails (`mailto:`)

---

# Interview Questions

## 1. What are Global Attributes?

> **Answer:**  
Global attributes are attributes that can be used with **almost every HTML element**.

Examples include:

- `id`
- `class`
- `style`
- `title`
- `hidden`
- `lang`

---

## 2. What is the Difference Between Global and Element-Specific Attributes?

| Global Attributes | Element-Specific Attributes |
|-------------------|-----------------------------|
| Can be used with almost all HTML elements | Can only be used with specific elements |
| Examples: `id`, `class`, `style`, `title` | Examples: `href` (`<a>`), `src` (`<img>`), `action` (`<form>`) |

---

## 3. What are Void (Empty) Tags?

> **Answer:**  
Void (Empty) tags are HTML tags that **do not have a closing tag** because they **cannot contain any content**.

Examples:

```html
<br>

<hr>

<img>

<input>
```

---

## 4. Why Don't Void Tags Have Closing Tags?

> **Answer:**  
Because they cannot contain text or child elements, so a closing tag is not required.

---

## 5. What is HyperText?

> **Answer:**  
HyperText is **text that contains hyperlinks**, allowing users to navigate between webpages or documents.

---

# Interview Summary

| Topic | Key Point |
|--------|-----------|
| Global Attributes | Can be used with almost every HTML element |
| `id` | Unique identifier |
| `class` | Groups elements for CSS/JavaScript |
| `style` | Applies inline CSS |
| `title` | Displays tooltip text |
| Void (Empty) Tags | No closing tag and cannot contain content |
| HyperText | Text containing hyperlinks for navigation |

---

# Quick Revision

```text
Global Attributes
↓
Used with almost every HTML element

Examples:
id
class
style
title
hidden
lang
dir
tabindex
contenteditable
draggable

----------------------------

Void Tags
↓
No Closing Tag

Examples:
<br>
<hr>
<img>
<input>
<meta>
<link>

----------------------------

HyperText
↓
Text + Hyperlink

Example:
<a href="page.html">
```
````
