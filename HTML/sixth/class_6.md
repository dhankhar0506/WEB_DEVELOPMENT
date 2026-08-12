# HTML Layout Elements

> **Definition:**  
HTML5 introduced **semantic layout elements** to organize a webpage into meaningful sections.

### Benefits

- Improves Readability
- Better SEO (Search Engine Optimization)
- Better Accessibility
- Easier Code Maintenance

---

# Common HTML Layout Elements

| Element | Purpose |
|----------|---------|
| `<header>` | Top section of a page or section |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | Groups related content |
| `<article>` | Independent content (Blog, News, Post) |
| `<aside>` | Sidebar or related content |
| `<footer>` | Bottom section of a page |

---

## Layout Structure

```text
+--------------------------------+
|           HEADER               |
+--------------------------------+
|          NAVIGATION            |
+--------------------------------+
|            MAIN                |
|  +--------------------------+  |
|  | SECTION                  |  |
|  +--------------------------+  |
|  | ARTICLE                  |  |
|  +--------------------------+  |
|  | ASIDE                    |  |
|  +--------------------------+  |
+--------------------------------+
|           FOOTER               |
+--------------------------------+
```

---

## Example

```html
<header>
    Website Header
</header>

<nav>
    Navigation Menu
</nav>

<main>

    <section>

        <article>
            Blog Post
        </article>

    </section>

    <aside>
        Related Posts
    </aside>

</main>

<footer>
    Copyright © 2026
</footer>
```

---

# HTML Semantic Elements

> **Definition:**  
Semantic elements are HTML tags that **clearly describe the meaning and purpose** of their content.

### Benefits

- Easier to Read
- Better SEO
- Better Accessibility
- Easier Maintenance

---

## Non-Semantic Elements

These elements **do not describe** their content.

### Examples

```html
<div></div>

<span></span>
```

**Reason**

- Generic containers
- Tell nothing about their content

---

## Semantic Elements

These elements clearly define their purpose.

### Examples

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

<img>

<table>
```

---

# HTML Entities

> **Definition:**  
HTML Entities are **special codes** used to display reserved characters and special symbols in HTML.

### Syntax

- Starts with `&`
- Ends with `;`

Example

```html
&lt;
```

---

## Common HTML Entities

| Character | Entity Name | Entity Number | Meaning |
|------------|-------------|---------------|---------|
| `<` | `&lt;` | `&#60;` | Less Than |
| `>` | `&gt;` | `&#62;` | Greater Than |
| `&` | `&amp;` | `&#38;` | Ampersand |
| `"` | `&quot;` | `&#34;` | Double Quote |

---

# What are HTML Symbols?

> **Definition:**  
HTML Symbols are special characters such as:

- Mathematical Symbols
- Currency Symbols
- Copyright Symbols
- Trademark Symbols

They can be displayed using:

- Entity Names
- Entity Numbers

---

# HTML Symbol vs HTML Entity

## HTML Symbol

The **actual character** you see on the webpage.

Example

```text
©
```

---

## HTML Entity

The **code** you write in HTML to represent a symbol.

Example

```html
&copy;
```

---

## Why Use HTML Entities?

Entities prevent conflicts with HTML syntax and ensure correct rendering.

### Reserved Characters

```text
<  → Starts an HTML Tag

>  → Ends an HTML Tag

&  → Starts an HTML Entity
```

If written directly, the browser may interpret them as HTML instead of displaying them.

---

## Example

### Using the Symbol

```html
<p>
Copyright © 2026 Gourav
</p>
```

---

### Using the Entity

```html
<p>
Copyright &copy; 2026 Gourav
</p>
```

### Output

```text
Copyright © 2026 Gourav
```

---

## Easy Way to Remember

```text
Symbol = The actual picture

©
```

```text
Entity = The code that creates the picture

&copy;
```

> **Interview Tip:**  
Entities are safer because they always render correctly, while symbols may depend on character encoding.

---

# HTML Character Encoding

## What is Character Encoding?

> **Definition:**  
Character Encoding is a standard that tells the browser how to convert **binary data (0s and 1s)** into readable characters like:

- Letters
- Numbers
- Symbols
- Emojis

It tells the browser how to interpret and display characters correctly.

---

# Why is Character Encoding Needed?

Computers understand only:

```text
0 and 1
```

Character encoding maps those binary values to readable characters.

---

# UTF-8 (Universal Text Format)

> **Definition:**  
UTF-8 is the **recommended character encoding** for HTML5.

### HTML Code

```html
<meta charset="UTF-8">
```

### Supports

- ✅ Multiple Languages
- ✅ Currency Symbols
- ✅ Emojis
- ✅ Mathematical Symbols
- ✅ Special Characters

> **Interview Tip:**  
Always use:

```html
<meta charset="UTF-8">
```

because it supports almost every character used worldwide.

---

# Other Character Encodings

| Encoding | Purpose |
|-----------|---------|
| UTF-8 | Supports almost every language (Recommended) |
| ASCII | Supports only basic English characters |
| ISO-8859-1 | Older encoding for Western European languages |

---

# HTML vs XHTML (Interview Notes)

## What is XHTML?

> **Definition:**  
XHTML (**Extensible HyperText Markup Language**) is a **stricter, XML-based version of HTML**.

It requires well-formed and properly structured code.

---

# HTML vs XHTML

| HTML | XHTML |
|------|--------|
| Flexible | Strict |
| Tags can be lowercase or uppercase | Tags must be lowercase |
| Closing tags are optional for some elements | Every tag must be closed |
| Attribute values may be unquoted (`<input type=text>`) | Attribute values must be quoted (`<input type="text">`) |
| Empty tags don't need `/` | Empty tags must end with `/>` |
| More forgiving of errors | Errors are not tolerated |

---

## HTML Example

```html
<input type=text>

<br>
```

Valid in HTML.

---

## XHTML Example

```html
<input type="text" />

<br />
```

Required in XHTML.

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| HTML Layout Elements | Organize webpage into meaningful sections |
| Semantic Elements | Improve readability, SEO, and accessibility |
| Non-Semantic Elements | Generic containers (`<div>`, `<span>`) |
| HTML Entities | Display reserved characters safely |
| HTML Symbols | Display currency, mathematical, copyright symbols |
| UTF-8 | Recommended HTML5 character encoding |
| ASCII | Supports basic English characters only |
| XHTML | Stricter, XML-based version of HTML |
