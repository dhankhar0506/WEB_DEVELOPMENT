````md id="html-advanced-interview-notes"
# HTML Interview Questions (Advanced)

---

# 1. What is the Difference Between HTML4 and HTML5?

> **Answer:**  
HTML5 is the **latest version of HTML** and introduced many modern features for building web applications.

| HTML4 | HTML5 |
|--------|--------|
| No semantic tags | Introduced semantic tags (`<header>`, `<section>`, `<article>`, etc.) |
| No built-in audio/video support | Built-in `<audio>` and `<video>` elements |
| Limited form input types | New input types (`email`, `date`, `number`, `color`, etc.) |
| No Local or Session Storage | Supports Local Storage & Session Storage |
| Less mobile-friendly | Better support for mobile and responsive design |
| No Canvas API | Introduced Canvas for drawing graphics |
| Limited browser APIs | Added Geolocation, Drag & Drop, Web Workers, etc. |

> **Interview Point:**  
HTML5 introduced **semantic elements, multimedia support, Canvas, SVG, new form controls, storage APIs, browser APIs, and improved SEO, accessibility, and mobile support.**

---

# 2. What is Canvas?

> **Answer:**  
The **`<canvas>`** element is an HTML5 element used to draw **graphics using JavaScript**.

Unlike SVG, Canvas is **pixel-based**, meaning graphics are drawn pixel by pixel.

### Common Uses

- Games
- Charts
- Drawing Applications
- Animations
- Image Editing

### Example

```html
<canvas id="canvas" width="400" height="200"></canvas>
```

> **Interview Point:**  
Canvas requires **JavaScript** to draw graphics.

---

# 3. What is SVG?

> **Answer:**  
**SVG (Scalable Vector Graphics)** is used to create **vector-based graphics** using XML.

Unlike Canvas, SVG graphics can be scaled without losing quality.

### Common Uses

- Icons
- Logos
- Diagrams
- Maps
- Flowcharts

### Example

```html
<svg width="100" height="100">

</svg>
```

---

# 4. Difference Between Canvas and SVG

| Canvas | SVG |
|---------|-----|
| Pixel-based graphics | Vector-based graphics |
| Drawn using JavaScript | Created using XML elements |
| Best for games and animations | Best for icons, logos, and diagrams |
| Hard to edit individual objects | Easy to edit individual objects |
| Performance is better for complex graphics | Better for scalable graphics |

> **Easy to Remember:**  
> **Canvas → Pixels → Games 🎮**  
> **SVG → Vectors → Logos 🎨**

---

# 5. What is SEO?

> **Definition:**  
**SEO (Search Engine Optimization)** is the process of optimizing a website so that it ranks higher in search engine results (like Google) and receives more **organic (free)** traffic.

### Goals of SEO

- Increase website visibility
- Rank higher on Google
- Get more organic traffic
- Improve user experience

---

## How HTML Helps SEO

HTML improves SEO by using:

- Semantic Tags
- Meta Tags
- Proper Heading Structure (`<h1>` → `<h2>` → `<h3>`)
- Descriptive Page Titles
- Alt Text for Images

### Example

```html
<title>Learn HTML - Complete Tutorial</title>
```

> **Interview Point:**  
Use meaningful semantic tags instead of only `<div>` elements to improve SEO.

---

# 6. What is Accessibility?

> **Definition:**  
**Accessibility** is the practice of designing websites so that **everyone**, including people with disabilities, can access and use them easily.

### HTML Improves Accessibility Using

- Semantic Tags
- `alt` Attribute
- `<label>`
- `aria-label`
- `tabindex`
- Proper Heading Structure

### Benefits

- Better Screen Reader Support
- Better Keyboard Navigation
- Improved User Experience
- Inclusive Web Design

---

# 7. What are the New Features of HTML5?

HTML5 introduced many new features, including:

- Semantic Tags
- Audio & Video Support
- Canvas
- SVG
- Local Storage
- Session Storage
- Geolocation API
- Drag & Drop API
- Web Workers API
- New Form Input Types
- Better SEO
- Better Accessibility
- Improved Mobile Support

> **Interview Point:**  
These features made HTML5 suitable for building modern, interactive web applications.

---

# Frequently Asked HTML Interview Questions

- What is HTML?
- Why is HTML not a programming language?
- What is HyperText?
- What is a Markup Language?
- What is the difference between Tag and Element?
- What are HTML Tags?
- What are Attributes?
- What are Global Attributes?
- What are Empty (Void) Tags?
- What is the difference between Block and Inline Elements?
- What are Semantic Tags?
- What is the difference between Semantic and Non-Semantic Tags?
- What is the difference between `id` and `class`?
- What is the difference between `name` and `id`?
- What is the difference between GET and POST?
- What is the difference between Radio Button and Checkbox?
- Why do we use the `<label>` tag?
- What is Local Storage?
- What is Session Storage?
- What is Canvas?
- What is SVG?
- What is the difference between Canvas and SVG?
- What is an `<iframe>`?
- What are HTML Entities?
- What are the new features of HTML5?
- What is SEO?
- What is Accessibility?
- What are Web APIs?
- What is the Fetch API?
- What is the DOM API?

---

# Interview Summary

| Topic | Key Point |
|--------|-----------|
| HTML5 | Latest version of HTML with modern features |
| Canvas | Pixel-based graphics using JavaScript |
| SVG | Vector-based graphics using XML |
| Canvas vs SVG | Canvas for games, SVG for icons and logos |
| SEO | Improves search engine ranking and organic traffic |
| Accessibility | Makes websites usable for everyone |
| HTML5 Features | Semantic tags, multimedia, storage APIs, browser APIs, better SEO & accessibility |

---

# Quick Revision

```text
HTML5
↓
Semantic Tags
Audio & Video
Canvas
SVG
Local Storage
Session Storage
Geolocation
Drag & Drop
Web Workers
New Input Types
Better SEO
Better Accessibility
Better Mobile Support

--------------------------------

Canvas
↓
Pixel Graphics
Games
Charts
Animations

--------------------------------

SVG
↓
Vector Graphics
Icons
Logos
Diagrams

--------------------------------

SEO
↓
Higher Google Ranking
More Organic Traffic

Uses:
Semantic Tags
Meta Tags
Proper Headings
Title Tag
Alt Text

--------------------------------

Accessibility
↓
Accessible for Everyone

Uses:
Semantic Tags
alt
label
aria-label
tabindex
```
````
