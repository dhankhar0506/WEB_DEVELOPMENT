CSS Grid

What is CSS Grid?

-> CSS Grid is a two-dimensional layout system used to create layouts using rows and columns.

Flexbox → 1D → Row OR Column
Grid    → 2D → Row + Column

Grid Structure

            Column 1   Column 2   Column 3
               ↓          ↓          ↓

        ┌─────────┬─────────┬─────────┐
Row 1 → │         │         │         │
        ├─────────┼─────────┼─────────┤
Row 2 → │         │         │         │
        └─────────┴─────────┴─────────┘

Flexbox vs Grid

Flexbox

CSS Grid

One-dimensional layout

Two-dimensional layout

Mainly controls one axis

Controls rows and columns

Row OR column

Row AND column

Best for smaller/component-level layouts

Best for complete page/layout structures

Flexbox

-> Flexbox mainly controls items along one main axis at a time.

CSS Grid

-> CSS Grid gives you explicit control over both rows and columns.

CSS Grid Container

To use Grid, first make an element a Grid Container:

.container {
    display: grid;
}

Once display: grid is applied, the direct children become Grid Items.

CSS Grid — Container Properties

1. display: grid

-> Converts an element into a Grid Container.

.container {
    display: grid;
}

2. grid-template-columns

-> Defines the number and size of columns.

Fixed-size columns

.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

Using fr

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

-> fr means fraction of the available space.

Example:

grid-template-columns: 1fr 2fr;

-> The second column gets twice the available space of the first.

3. grid-template-rows

-> Defines the number and size of rows.

.container {
    display: grid;
    grid-template-rows: 100px 200px;
}

4. repeat()

-> repeat() avoids writing the same grid value multiple times.

Instead of:

grid-template-columns: 1fr 1fr 1fr 1fr;

Use:

grid-template-columns: repeat(4, 1fr);

-> Creates 4 equal columns.

5. minmax()

-> minmax() defines the minimum and maximum size of a grid track.

.container {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
}

-> Each column is at least 200px, but can grow up to 1fr.

Syntax

minmax(minimum, maximum)

Example:

minmax(200px, 1fr)

6. auto-fit

-> auto-fit automatically creates as many columns as can fit in the available space.

Common responsive pattern:

.container {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    );
}

-> Very useful for responsive card layouts.

Interview Point: auto-fit is commonly used with:

repeat(auto-fit, minmax(200px, 1fr))

7. gap

-> gap creates space between rows and columns.

.container {
    display: grid;
    gap: 20px;
}

You can separately control row and column gaps:

gap: 10px 20px;

row gap    → 10px
column gap → 20px

8. grid-auto-rows

-> Controls the size of implicitly created rows.

.container {
    display: grid;
    grid-auto-rows: 100px;
}

9. grid-auto-columns

-> Controls the size of implicitly created columns.

.container {
    display: grid;
    grid-auto-columns: 150px;
}

10. justify-content

-> Controls the horizontal position of the entire grid inside the container when there is extra horizontal space.

.container {
    display: grid;
    justify-content: center;
}

Common values:

justify-content: start;
justify-content: center;
justify-content: end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

Important: justify-content moves the entire grid, not individual grid items.

11. align-content

-> Controls the vertical position of the entire grid inside the container when there is extra vertical space.

.container {
    display: grid;
    align-content: center;
}

Common values:

align-content: start;
align-content: center;
align-content: end;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;

Important: align-content moves the entire grid, not individual grid items.

CSS Grid Child Properties

These properties are applied to individual Grid Items, not the Grid Container.

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

1. grid-column

-> Controls which columns a Grid Item occupies.

.item {
    grid-column: 1 / 3;
}

Syntax

grid-column: start / end;

-> grid-column: 1 / 3 occupies the space between column line 1 and column line 3, so it spans 2 columns.

span

-> span means how many grid tracks the item should occupy.

grid-column: 1 / span 3;

-> Start at column line 1 and occupy 3 columns.

grid-column: 1 / -1

-> -1 represents the last grid line.

.item {
    grid-column: 1 / -1;
}

-> The item spans from the first column line to the last column line.

Common use

Full-width header:

.header {
    grid-column: 1 / -1;
}

2. grid-row

-> Controls which rows a Grid Item occupies.

.item {
    grid-row: 1 / 3;
}

-> Starts at row line 1 and ends at row line 3, so it occupies 2 rows.

You can also use:

grid-row: 1 / span 2;

-> Start at row 1 and span 2 rows.

3. justify-self

-> Controls the horizontal position of an individual Grid Item inside its grid area.

.item {
    justify-self: center;
}

Common values:

justify-self: start;
justify-self: center;
justify-self: end;
justify-self: stretch;

Difference:

justify-content → positions the whole grid.

justify-self → positions one grid item.

4. align-self

-> Controls the vertical position of an individual Grid Item inside its grid area.

.item {
    align-self: center;
}

Common values:

align-self: start;
align-self: center;
align-self: end;
align-self: stretch;

Difference:

align-content → positions the whole grid vertically.

align-self → positions one grid item vertically.

Important Grid Properties — Quick Revision

Container Properties

Property

Purpose

display: grid

Creates Grid Container

grid-template-columns

Defines columns

grid-template-rows

Defines rows

repeat()

Repeats grid tracks

minmax()

Defines minimum and maximum size

auto-fit

Fits as many columns as possible

gap

Adds space between rows/columns

grid-auto-rows

Size of implicit rows

grid-auto-columns

Size of implicit columns

justify-content

Positions the entire grid horizontally

align-content

Positions the entire grid vertically

Child / Grid Item Properties

Property

Purpose

grid-column

Controls column placement/span

grid-row

Controls row placement/span

justify-self

Positions one item horizontally

align-self

Positions one item vertically

Most Important Interview Difference

                 CSS GRID
                    │
          ┌─────────┴─────────┐
          │                   │
       Container            Child
       Properties           Properties
          │                   │
          ▼                   ▼
 grid-template-columns   grid-column
 grid-template-rows      grid-row
 gap                     justify-self
 justify-content         align-self
 align-content
 grid-auto-rows
 grid-auto-columns

Easy Memory Trick

CONTENT  → Whole Grid
SELF     → Individual Item

justify-content → Whole Grid → Horizontal
align-content   → Whole Grid → Vertical

justify-self    → One Item → Horizontal
align-self      → One Item → Vertical

Grid Placement Memory

grid-column → Left / Right placement
grid-row    → Top / Bottom placement

span → How many tracks to occupy

1 / 3       → Start line 1, end line 3
1 / span 3  → Start at 1, occupy 3 tracks
1 / -1      → First line to last line