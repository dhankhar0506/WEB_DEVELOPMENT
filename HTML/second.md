# HTML Interview Questions (Advanced)

# 1. What is the difference between HTML4 and HTML5?

HTML5 is the latest version of HTML with many new features.

| HTML4 | HTML5 |
|-------|--------|
| No semantic tags | Introduced semantic tags (`<header>`, `<section>`, etc.) |
| No native audio/video | Built-in `<audio>` and `<video>` |
| Limited form input types | New input types (`email`, `date`, `number`, etc.) |
| No Local Storage | Supports Local & Session Storage |
| Less mobile-friendly | Better mobile support |

> **Interview Point:** HTML5 introduced semantic elements, multimedia support, new form controls, storage APIs, and better SEO.

---

# 2. What is the difference between id and class?

| id | class |
|----|-------|
| Unique | Can be reused |
| One element | Multiple elements |
| Accessed using `#` in CSS | Accessed using `.` in CSS |
| Used by JavaScript frequently | Used mainly for styling groups |

### Example

```html
<h1 id="title">Welcome</h1>

<p class="text">Hello</p>
<p class="text">World</p>
```

> **Interview Point:** `id` should be unique, while `class` can be shared by multiple elements.

---

# 3. Difference between Relative URL and Absolute URL

A relative URL contains only the file path and is used to link resources within the same website. An absolute URL contains the complete web address, including the protocol and domain name, and can link to resources on any website.

## Relative URL

- Uses the current website path.
- Shorter.
- Used within the same project.

```html
<img src="images/logo.png">
```

---

## Absolute URL

- Complete URL including protocol.

```html
<img src="https://example.com/images/logo.png">
```

| Relative | Absolute |
|-----------|-----------|
| Inside same website | Any website |
| Short | Full URL |
| Faster to manage | Used for external resources |

---

# 4. What is the alt attribute?

The `alt` attribute provides alternative text for an image.

### Why is it important?

- Improves accessibility.
- Helps screen readers.
- Displays text if the image fails to load.
- Improves SEO.

```html
<img src="cat.jpg" alt="White Cat">
```

> **Interview Point:** Never leave the `alt` attribute empty unless the image is decorative.

---

# 5. Difference between GET and POST

| GET | POST |
|------|------|
| Retrieves data | Sends data |
| Data in URL | Data in request body |
| Less secure | More secure |
| Can be bookmarked | Cannot be bookmarked |
| Limited data size | Large amount of data |

> **Interview Point:** GET is used to fetch data, while POST is used to submit data.

---

# 6. Difference between Radio Button and Checkbox

## Radio Button

- Select only one option.

```html
<input type="radio">
```

---

## Checkbox

- Select multiple options.

```html
<input type="checkbox">
```

| Radio | Checkbox |
|---------|-----------|
| One selection | Multiple selections |
| Circular | Square |

---

# 7. Why do we use the label tag?

The `<label>` tag is associated with form controls.

Benefits

- Improves accessibility.
- Clicking the label selects the input.
- Better user experience.

```html
<label for="email">Email</label>
<input id="email" type="email">
```

---

# 8. Difference between name and id

| id | name |
|----|------|
| Unique identifier | Used while submitting forms |
| CSS & JavaScript | Backend/Form submission |
| One per page | Multiple elements can share it |

```html
<input id="email" name="userEmail">
```

---

# 9. What is Local Storage?

Local Storage stores data in the browser permanently until it is removed.

### Features

- Stores key-value pairs.
- Data persists after the browser is closed.
- Capacity: Around 5–10 MB.

```javascript
localStorage.setItem("name", "John");
```

---

# 10. What is Session Storage?

Session Storage stores data only for the current browser tab.

### Features

- Data is deleted when the tab is closed.
- Stores key-value pairs.

```javascript
sessionStorage.setItem("user", "Admin");
```

---

# 11. Difference between Local Storage and Session Storage

| Local Storage | Session Storage |
|---------------|-----------------|
| Permanent | Temporary |
| Shared across tabs | Only current tab |
| Survives browser restart | Cleared when tab closes |

---

# 12. What is Canvas?

Canvas is an HTML5 element used to draw graphics using JavaScript.

Examples

- Games
- Charts
- Drawing applications
- Animations

```html
<canvas id="canvas"></canvas>
```

---

# 13. What is SVG?

SVG (Scalable Vector Graphics) is used to create vector-based graphics.

Examples

- Icons
- Logos
- Diagrams

```html
<svg width="100" height="100">
```

---

# 14. Difference between Canvas and SVG

| Canvas | SVG |
|----------|-----|
| Pixel-based | Vector-based |
| JavaScript drawing | XML elements |
| Better for games | Better for icons & logos |
| Hard to edit individual objects | Easy to edit objects |

---

# 15. What is an iframe?

An iframe is used to embed another webpage inside the current webpage.

```html
<iframe src="https://example.com"></iframe>
```

Examples

- Google Maps
- YouTube videos
- External websites

---

# 16. What are HTML Entities?

HTML entities are special codes used to display reserved characters and special symbols in HTML. They usually begin with & and end with ;.

Examples

| Entity | Output |
|---------|--------|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&nbsp;` | Space |

---

# 17. What is SEO? 

SEO (Search Engine Optimization) improves a webpage's ranking in search engines.
SEO (Search Engine Optimization) is the process of optimizing a website so that it ranks higher in search engine results like Google and gets more organic (free) traffic.

Increase website visibility.
Rank higher on Google.
Get more organic traffic.
Improve user experience.

HTML helps SEO using

- Semantic tags
- Meta tags => Add Meta Description
- Proper headings = h1 → h2 → h3.
- Use Descriptive Title => <title>Learn HTML - Complete Tutorial</title>


How to Make a Website SEO-Friendly = Use meaningful tags instead of only <div>.



---

# 18. What is Accessibility?

Accessibility is the practice of designing websites so that everyone, including people with disabilities, can access and use them easily. It is achieved by using semantic HTML, alt text for images, proper labels, keyboard navigation, and sufficient color contrast.

HTML improves accessibility using

- Semantic tags
- alt attribute
- label
- aria-label
- tabindex

---

# 19. What are HTML5 APIs?

HTML5 provides built-in browser APIs.
HTML5 introduced these browser features/APIs, but JavaScript is used to access and use them.

HTML5 → Provides/supports the feature in the browser.
JavaScript → Uses (accesses) the feature through an API.

Examples

- Geolocation API
- Drag & Drop API
- Web Storage API
- Web Workers
- Canvas API

---

# 20. What are the new features of HTML5?

- Semantic tags
- Audio & Video support
- Canvas
- SVG
- Local Storage
- Session Storage
- Geolocation
- Drag & Drop
- New input types
- Better SEO
- Better Accessibility

---

# Frequently Asked HTML Interview Questions

- What is HTML?
- Why is HTML not a programming language?
- What is HyperText?
- What is a Markup Language?
- What is the difference between Tag and Element?
- What are Attributes?
- What are Global Attributes?
- What are Empty (Void) Tags?
- What is the difference between Block and Inline Elements?
- What are Semantic Tags?
- What is the difference between `id` and `class`?
- What is the difference between GET and POST?
- What is the difference between Radio Button and Checkbox?
- Why do we use the `label` tag?
- What is the difference between `name` and `id`?
- What is Local Storage?
- What is Session Storage?
- Canvas vs SVG?
- What is an iframe?
- What are HTML Entities?
- What are the new features of HTML5?
- What is SEO?
- What is Accessibility?