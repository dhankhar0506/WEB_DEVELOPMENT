# HTML (HyperText Markup Language)

## What is HTML?

- HTML (HyperText Markup Language) is the standard markup language used to create the **structure** of web pages.
- It uses **tags** (such as `<h1>`, `<p>`, `<img>`) to define different elements on a webpage.
- It tells the browser **what content to display**, not **how it should look** (CSS handles styling).

> **Interview Definition:**  
> HTML is the standard markup language used to create the structure of web pages using tags.

[------------------------------------------------------------------------------------------------------------------------------]

# Tag vs Element (Interview)

## Tag

A **tag** is a keyword enclosed in angle brackets (`<>`).

Example:

```html
<p>
</p>
```

Tags tell the browser where an element starts or ends.

## Element

An **element** is the complete HTML component.

It consists of:

- Opening tag
- Content
- Closing tag

Example:

```html
<p>Hello World</p>
```

| Tag | Element |
|------|----------|
| `<p>` | `<p>Hello World</p>` |
| Opening/Closing keyword | Complete HTML structure |

[---------------------------------------------------------------------------------------------------------------------------------------------]

# What are HTML Tags?

HTML tags are predefined keywords enclosed in angle brackets (`<>`).

They tell the browser how to display or structure content.

Example:

```html
<h1>Hello</h1>
<p>Welcome to HTML.</p>
```

[---------------------------------------------------------------------------------------------------------------------------------------------]

# Types of HTML Tags

## 1. Paired (Container) Tags

Require both opening and closing tags.

Examples:

```html
<p></p>
<h1></h1>
<div></div>
<span></span>
```

## 2. Self-Closing (Void) Tags

Do not require a closing tag.

Examples:

```html
<img>
<br>
<hr>
<input>
<meta>
<link>
```

[---------------------------------------------------------------------------------------------------------------------------------------------]

# Block vs Inline Elements

## Block Elements

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

[---------------------------------------------------------------------------------------------------------------------------------------------]
## Inline Elements

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

[---------------------------------------------------------------------------------------------------------------------------------------------]

# Semantic Tags

Semantic tags clearly describe the meaning of their content.

### Advantages

- Improves code readability
- Better SEO
- Better Accessibility (Screen Readers)

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

[---------------------------------------------------------------------------------------------------------------------------------------------]
# Non-Semantic Tags

Non-semantic tags do not describe the meaning of their content.

They are mainly used for grouping or styling elements.

### Common Non-Semantic Tags

```html
<div>
<span>
<b>      <!-- Use <strong> for importance -->
<i>      <!-- Use <em> for emphasis -->
```

[---------------------------------------------------------------------------------------------------------------------------------------------]
# Semantic vs Non-Semantic Tags

| Semantic Tags | Non-Semantic Tags |
|---------------|-------------------|
| Describe the meaning of content | Do not describe the meaning |
| Better SEO | No SEO benefit |
| Better Accessibility | Limited Accessibility |
| Easier to understand | Generic containers |
| Examples: `<header>`, `<section>`, `<article>` | Examples: `<div>`, `<span>`, `<b>`, `<i>` |

[---------------------------------------------------------------------------------------------------------------------------------------------]

# Interview Questions

### 1. What is HTML?

HTML is the standard markup language used to create the structure of web pages using tags.

---

### 2. Is HTML a programming language?

No.

HTML is a **markup language**, not a programming language, because it does not support logic such as variables, loops, or conditions.

---

### 3. Why do we use HTML?

- To create the structure of web pages
- To organize content
- To display text, images, videos, forms, and links
- To work with CSS and JavaScript

---

### 4. What is the difference between a Tag and an Element?

- **Tag:** The keyword inside angle brackets (`<>`).
- **Element:** The complete structure (opening tag + content + closing tag).

---

### 5. What are semantic tags?

Semantic tags describe the meaning of their content and improve SEO, readability, and accessibility.

---

### 6. What is the difference between Block and Inline elements?

| Block | Inline |
|--------|--------|
| Starts on a new line | Stays on the same line |
| Takes full width | Takes only required width |
| Can contain block and inline elements | Usually contains text or inline elements |

[---------------------------------------------------------------------------------------------------------------------------------------------]

# Quick Revision

- **HTML** → Structure of a webpage
- **Tag** → Keyword inside `<>`
- **Element** → Tag + Content + Closing Tag
- **Paired Tag** → Has opening & closing tags
- **Self-Closing Tag** → No closing tag
- **Block Element** → New line + Full width
- **Inline Element** → Same line + Required width
- **Semantic Tag** → Meaningful (`<header>`, `<section>`)
- **Non-Semantic Tag** → Generic (`<div>`, `<span>`)

---




[---------------------------------------------------------------------------------------------------------------------------------------------]


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

- Declares the document as **HTML5**.
- Tells the browser which version of HTML to use.
- exclmation mark (! + enter)

> **Interview Point:** `<!DOCTYPE html>` tells the browser that the document is written in HTML5.

---

## 2. `<html>`

- Root element of the HTML document.
- Wraps all HTML content.
- `lang` attribute specifies the language of the webpage.

```html
<html lang="en">
```

> **Why `lang="en"`?**
> - Helps search engines (SEO).
> - Improves accessibility for screen readers.

---

## 3. `<head>`

Contains **metadata** (information about the webpage).

- Not visible on the webpage.
- Stores page information and resources.
- store style sheet too
- 

Common tags inside `<head>`:

- `<title>`
- `<meta>`
- `<link>`
- `<style>`
- `<script>`

---

## 4. `<meta charset="UTF-8">`

- Sets the character encoding to **UTF-8**.
- Supports most languages and special characters.

```html
<meta charset="UTF-8">
```

---

## 5. `<meta name="viewport">`

- Makes the webpage responsive on different screen sizes.
- Ensures proper scaling on mobile devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 6. `<title>`

- Sets the title displayed on the browser tab.

```html
<title>My Website</title>
```

---

## 7. `<body>`

Contains all **visible content** displayed on the webpage.

Examples:

- Headings
- Paragraphs
- Images
- Links
- Buttons
- Tables
- Forms

```html
<body>
    <h1>Welcome</h1>
    <p>Hello, World!</p>
</body>
```

---

# Difference: `<head>` vs `<body>`

| `<head>` | `<body>` |
|----------|-----------|
| Contains metadata | Contains visible content |
| Not displayed on the webpage | Displayed in the browser |
| Includes `<title>`, `<meta>`, `<link>`, `<style>`, `<script>` | Includes headings, paragraphs, images, forms, tables, etc. |

---

# Interview Questions

### 1. What is `<!DOCTYPE html>`?

It declares the document as **HTML5** and tells the browser which HTML version to use.

---

### 2. What is the purpose of the `<head>` tag?

The `<head>` contains metadata such as the page title, character encoding, CSS, JavaScript, and other information that is not displayed on the webpage.

---

### 3. What is the purpose of the `<body>` tag?

The `<body>` contains all the visible content displayed in the browser.

---

### 4. Why do we use `lang="en"`?

- Improves SEO.
- The lang attribute specifies the language of the webpage. It helps search engines understand the page language for better SEO and helps screen readers pronounce the content correctly, improving accessibility.

---

### 5. Why is the viewport meta tag important?

Viewport is the visible area of a webpage on a user's device. We use the viewport meta tag to make web pages responsive by setting the page width to the device's width and the initial zoom level to 100%.


### 6. what  is  meta data?

Metadata is information about a webpage that is stored inside the <head> section. It is not visible to users but helps browsers and search engines understand the webpage. We use metadata for character encoding, responsive design, SEO, and page information.

### 7.What is UTF-8?

UTF-8 is a character encoding that tells the browser how to represent and display text. We use <meta charset="UTF-8"> to support almost all languages, symbols, and emojis correctly.
UTF-8 = Universal Text Format 🌍
---

# Quick Revision

- `<!DOCTYPE html>` → Declares HTML5
- `<html>` → Root element
- `lang="en"` → Specifies page language
- `<head>` → Metadata (Hidden)
- `<meta charset="UTF-8">` → Character encoding
- `<meta name="viewport">` → Responsive design
- `<title>` → Browser tab title
- `<body>` → Visible webpage content

---

# HTML5 vs Earlier HTML Versions (HTML4/XHTML)

HTML5 is the latest version of HTML. Compared to earlier versions, it introduced semantic tags, built-in audio and video support, new form input types, Canvas and SVG graphics, Local Storage, Geolocation API, and better support for SEO, accessibility, and mobile devices.


# HTML Attributes

## What are Attributes?

- Attributes provide **additional information** about HTML elements.
- They are written inside the **opening tag**.
- Attributes usually consist of a **name** and a **value**.

### Syntax

```html
<tagname attribute="value">Content</tagname>
```

### Example

```html
<a href="https://example.com">Visit Website</a>
<img src="image.jpg" alt="Nature">
```

> **Interview Point:** Attributes provide extra information about an HTML element and are specified in the opening tag.

---

# Global Attributes

Global attributes are attributes that can be used with **almost all HTML elements**.

## Common Global Attributes

| Attribute | Purpose |
|-----------|---------|
| `id` | Unique identifier for an element |
| `class` | Groups elements for CSS or JavaScript |
| `style` | Applies inline CSS |
| `title` | Shows a tooltip on hover |
| `hidden` | Hides the element |
| `lang` | Specifies the language |
| `dir` | Sets text direction (`ltr` / `rtl`) |
| `tabindex` | Controls keyboard navigation |
| `contenteditable` | Makes content editable |
| `draggable` | Allows dragging the element |

### Example

```html
<p id="intro" class="text" title="Welcome">
    Hello World
</p>
```

> **Interview Point:** Global attributes can be used with almost every HTML element.

---

# Empty (Void) Tags

## What are Empty (Void) Tags?

- Empty (Void) tags **do not have a closing tag**.
- They **cannot contain content**.

### Common Empty Tags

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

### Example

```html
<img src="logo.png" alt="Logo">
<br>
<hr>
```

> **Interview Point:** Void tags do not have closing tags because they don't contain any content.

---

# What is HyperText?

HyperText is **text that contains links (hyperlinks) to other webpages or documents**.

When a user clicks a hyperlink, they are navigated to another page or resource.

### Example

```html
<a href="https://example.com">Visit Example</a>
```

Here, **"Visit Example"** is HyperText because it links to another webpage.

> **Interview Point:** HyperText is text that contains hyperlinks, allowing users to navigate between webpages.

---
