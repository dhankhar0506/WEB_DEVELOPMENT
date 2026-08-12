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
