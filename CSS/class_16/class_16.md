# CSS Grid

> **Definition:**
> **CSS Grid** is a **two-dimensional layout system** used to create layouts using **rows and columns**.

### Flexbox vs Grid

```text
Flexbox → 1D → Row OR Column
Grid    → 2D → Row + Column
```

### CSS Grid Layout

```text
            Column 1   Column 2   Column 3
             ↓          ↓          ↓

        ┌─────────┬─────────┬─────────┐
Row 1 → │         │         │         │
        ├─────────┼─────────┼─────────┤
Row 2 → │         │         │         │
        └─────────┴─────────┴─────────┘
```

---

# Flexbox vs Grid

## Flexbox

* Flexbox mainly controls items along **one main axis** at a time.
* Flexbox is **one-dimensional**.
* It mainly controls elements along a **single axis**:

  * Row
  * OR
  * Column

## CSS Grid

* CSS Grid gives you explicit control over **both rows and columns**.
* Grid is **two-dimensional**.
* It provides explicit control over:

  * Rows
  * Columns

### Quick Comparison

| Feature   | Flexbox                 | CSS Grid                     |
| --------- | ----------------------- | ---------------------------- |
| Dimension | 1D                      | 2D                           |
| Main use  | Row OR Column           | Rows + Columns               |
| Control   | One axis                | Two axes                     |
| Best for  | Component-level layouts | Page/layout-level structures |

---

# CSS Grid Container

A **Grid Container** is an element on which `display: grid` is applied.

```html
<div class="container">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

```css
.container {
    display: grid;
}
```

The child elements (`A`, `B`, `C`) become **Grid Items**.

---

# CSS Grid — Grid Container Properties

## 1. `display: grid`

> `display: grid` converts an element into a **Grid Container**.

```css
.container {
    display: grid;
}
```

Once an element becomes a grid container, its direct children become **grid items**.

---

# 2. `grid-template-columns`

> `grid-template-columns` defines the **number and size of columns** in a grid.

### Example

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}
```

This creates **3 columns**, each having a width of `200px`.

```text
+---------+---------+---------+
|         |         |         |
| Column1 | Column2 | Column3 |
|         |         |         |
+---------+---------+---------+
```

### Using `fr`

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

```text
+-------------+-------------+-------------+
|     1fr     |     1fr     |     1fr     |
+-------------+-------------+-------------+
```

> **`fr` means fraction of the available space.**

For example:

```css
grid-template-columns: 1fr 2fr;
```

means:

```text
Available Space
      ↓

+----------+--------------------+
|   1fr    |        2fr         |
+----------+--------------------+
```

The second column receives **twice as much available space** as the first.

---

# 3. `grid-template-rows`

> `grid-template-rows` defines the **number and size of rows**.

### Example

```css
.container {
    display: grid;
    grid-template-rows: 100px 200px;
}
```

This creates:

```text
+-------------------------+
|                         |
|         100px           |
|                         |
+-------------------------+
|                         |
|         200px           |
|                         |
+-------------------------+
```

The first row is `100px` high and the second row is `200px` high.

---

# 4. `repeat()`

> `repeat()` is a CSS function used to **avoid repeating the same grid value multiple times**.

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

You can write:

```css
grid-template-columns: repeat(4, 1fr);
```

This means:

> Create **4 columns**, each having `1fr`.

### Example

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
```

```text
+--------+--------+--------+--------+
|  1fr   |  1fr   |  1fr   |  1fr   |
+--------+--------+--------+--------+
```

---

# 5. `minmax()`

> `minmax()` defines the **minimum and maximum size** of a grid track.

### Example

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
}
```

This means:

* Create 3 columns.
* Each column should be **at least `200px`**.
* Each column can grow up to **`1fr`**.

```text
Minimum Width
     ↓
  200px

Maximum Available Space
     ↓
    1fr
```

### General Syntax

```css
minmax(minimum, maximum)
```

Example:

```css
minmax(200px, 1fr)
```

---

# 6. `auto-fit`

> `auto-fit` automatically creates as many columns as can fit into the available space.

It is commonly used with `repeat()` and `minmax()` to create **responsive grids**.

### Example

```css
.container {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    );
}
```

### How it works

If the container is wide:

```text
+--------+--------+--------+--------+
|   A    |   B    |   C    |   D    |
+--------+--------+--------+--------+
```

If the container becomes smaller:

```text
+--------+--------+
|   A    |   B    |
+--------+--------+
|   C    |   D    |
+--------+--------+
```

The number of columns adjusts automatically based on the available space.

> **Common interview point:**
> `auto-fit` is useful for creating responsive layouts without manually defining the number of columns for different screen sizes.

---

# 7. `gap`

> `gap` creates space **between grid rows and columns**.

### Example

```css
.container {
    display: grid;
    gap: 20px;
}
```

This creates `20px` spacing between both rows and columns.

```text
+------+    +------+    +------+
|  A   |    |  B   |    |  C   |
+------+    +------+    +------+
     ↑          ↑
   20px       20px
```

### Different Row and Column Gaps

```css
.container {
    row-gap: 10px;
    column-gap: 20px;
}
```

Or:

```css
.container {
    gap: 10px 20px;
}
```

Here:

```text
10px → Row Gap
20px → Column Gap
```

---

# 8. `grid-auto-rows`

> `grid-auto-rows` controls the size of **implicitly created rows**.

### Example

```css
.container {
    display: grid;
    grid-auto-rows: 100px;
}
```

If Grid automatically creates additional rows, each implicit row will have a height of `100px`.

```text
Row 1 → 100px
Row 2 → 100px
Row 3 → 100px
...
```

### Explicit vs Implicit Rows

**Explicit rows:**

```css
grid-template-rows: 100px 200px;
```

**Implicit rows:**

```css
grid-auto-rows: 100px;
```

---

# 9. `grid-auto-columns`

> `grid-auto-columns` controls the size of **implicitly created columns**.

### Example

```css
.container {
    grid-auto-columns: 150px;
}
```

Automatically created columns will have a size of `150px`.

```text
Column 1 → 150px
Column 2 → 150px
Column 3 → 150px
...
```

---

# 10. `justify-content`

> `justify-content` controls the **horizontal position of the entire grid inside the container** when there is extra horizontal space.

### Example

```css
.container {
    justify-content: center;
}
```

```text
Container
┌─────────────────────────────────────┐
│                                     │
│       ┌─────┬─────┬─────┐           │
│       │  A  │  B  │  C  │           │
│       └─────┴─────┴─────┘           │
│                                     │
└─────────────────────────────────────┘
                ↑
            Whole Grid
```

### Common Values

```css
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

> **Important:** `justify-content` positions the **whole grid**, not individual grid items.

---

# 11. `align-content`

> `align-content` controls the **vertical position of the entire grid inside the container** when there is extra vertical space.

### Example

```css
.container {
    align-content: center;
}
```

```text
Container
┌───────────────────────────┐
│                           │
│                           │
│      ┌────┬────┬────┐     │
│      │ A  │ B  │ C  │     │
│      └────┴────┴────┘     │
│                           │
└───────────────────────────┘
             ↑
         Whole Grid
```

### Common Values

```css
align-content: start;
align-content: end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

> **Important:** `align-content` works on the **whole grid** and needs extra space in the grid container.

---

# CSS Grid Child Properties

The following properties are applied to **Grid Items**, not the Grid Container.

```html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

---

# `span` in CSS Grid

> **`span` means how many grid tracks an item should occupy.**

For example:

```css
grid-column: 1 / span 3;
```

means:

> Start from column line `1` and occupy **3 columns**.

```text
Column 1       Column 2       Column 3
    ↓              ↓              ↓

+--------------------------------------+
|              Item A                 |
+--------------------------------------+
        ←────── 3 columns ──────→
```

---

# 12. `grid-column`

> `grid-column` controls where a grid item starts and ends across **columns**.

### Start / End

```css
.item {
    grid-column: 1 / 3;
}
```

This means:

```text
Start → Column Line 1
End   → Column Line 3
```

```text
Column Lines:

    1          2          3          4
    ↓          ↓          ↓          ↓

    +----------+----------+----------+
    |          |          |          |
    |          |          |          |
    +----------+----------+----------+
```

The item occupies the space between line `1` and line `3`.

### Using `span`

```css
.item {
    grid-column: 1 / span 3;
}
```

This means:

> Start at line `1` and span across **3 columns**.

### Using `-1`

```css
.item {
    grid-column: 1 / -1;
}
```

> `-1` represents the **last grid line**.

Therefore:

```css
grid-column: 1 / -1;
```

is commonly used when an item should span the **entire width of the grid**.

---

# 13. `grid-row`

> `grid-row` controls where a grid item starts and ends across **rows**.

### Example

```css
.item {
    grid-row: 1 / 3;
}
```

This means:

```text
Start → Row Line 1
End   → Row Line 3
```

### Using `span`

```css
.item {
    grid-row: 1 / span 2;
}
```

This means:

> Start at row line `1` and occupy **2 rows**.

---

# 14. `justify-self`

> `justify-self` controls the **horizontal alignment of an individual grid item inside its grid area**.

### Example

```css
.item {
    justify-self: center;
}
```

### Common Values

```css
justify-self: start;
justify-self: end;
justify-self: center;
justify-self: stretch;
```

### Important Difference

```text
justify-content → positions the whole grid
justify-self    → positions one grid item
```

---

# 15. `align-self`

> `align-self` controls the **vertical alignment of an individual grid item inside its grid area**.

### Example

```css
.item {
    align-self: center;
}
```

### Common Values

```css
align-self: start;
align-self: end;
align-self: center;
align-self: stretch;
```

### Important Difference

```text
align-content → positions the whole grid
align-self    → positions one grid item
```

---

# `justify-content` vs `justify-self`

| Property          | Applies To     | Purpose                                   |
| ----------------- | -------------- | ----------------------------------------- |
| `justify-content` | Grid Container | Positions the **whole grid horizontally** |
| `justify-self`    | Grid Item      | Positions **one item horizontally**       |

---

# `align-content` vs `align-self`

| Property        | Applies To     | Purpose                                 |
| --------------- | -------------- | --------------------------------------- |
| `align-content` | Grid Container | Positions the **whole grid vertically** |
| `align-self`    | Grid Item      | Positions **one item vertically**       |

---

# Quick CSS Grid Cheat Sheet

## Grid Container Properties

```css
display: grid;

grid-template-columns: ...;
grid-template-rows: ...;

repeat(...);
minmax(...);

grid-auto-rows: ...;
grid-auto-columns: ...;

gap: ...;
row-gap: ...;
column-gap: ...;

justify-content: ...;
align-content: ...;
```

## Grid Item Properties

```css
grid-column: ...;
grid-row: ...;

justify-self: ...;
align-self: ...;
```

---

# Important Interview Points

### 1. What is CSS Grid?

> CSS Grid is a **two-dimensional layout system** that allows developers to create layouts using **rows and columns**.

### 2. Grid vs Flexbox?

> Flexbox is **one-dimensional** and mainly works with a row or column, while Grid is **two-dimensional** and controls both rows and columns.

### 3. What does `fr` mean?

> `fr` stands for **fraction** and represents a fraction of the available space in the grid container.

### 4. What does `repeat()` do?

> `repeat()` avoids writing the same grid track definition multiple times.

```css
grid-template-columns: repeat(4, 1fr);
```

### 5. What does `minmax()` do?

> `minmax()` defines the **minimum and maximum size** of a grid track.

```css
minmax(200px, 1fr);
```

### 6. What does `auto-fit` do?

> `auto-fit` automatically fits as many grid columns as possible into the available space.

```css
grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
);
```

### 7. What is `gap`?

> `gap` creates spacing between **grid rows and columns**.

### 8. What is `grid-column: 1 / -1`?

> It makes the grid item span from the **first grid line to the last grid line**, effectively spanning the entire grid width.

### 9. `justify-content` vs `justify-self`?

```text
justify-content → Whole Grid
justify-self    → Individual Grid Item
```

### 10. `align-content` vs `align-self`?

```text
align-content → Whole Grid
align-self    → Individual Grid Item
```

---

# Complete Example

```html
<div class="container">
    <div class="item item1">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>
```

```css
.container {
    display: grid;

    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    );

    gap: 20px;

    justify-content: center;
    align-content: center;
}

.item1 {
    grid-column: 1 / -1;
}
```

Here:

```text
display: grid
        ↓
Creates Grid Container

grid-template-columns
        ↓
Defines columns

repeat()
        ↓
Repeats the column definition

auto-fit
        ↓
Fits columns according to available space

minmax()
        ↓
Controls minimum and maximum column size

gap
        ↓
Creates space between items

grid-column: 1 / -1
        ↓
Makes the first item span the complete grid width
```

---

# Final Mental Model

```text
                    CSS GRID
                       │
             ┌─────────┴─────────┐
             │                   │
        Grid Container       Grid Items
             │                   │
      ┌──────┼──────┐       ┌────┼────┐
      │      │      │       │    │    │
   Columns  Rows   Alignment Column Row Alignment
      │      │      │          │    │      │
      │      │      │          │    │      │
grid-template-  justify-     grid- grid- justify-
columns         content      column row   self
                align-                   align-
                content                  self
```

> **Remember:**
> **Container properties define the grid.**
> **Child properties control individual grid items.**
