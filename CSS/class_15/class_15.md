## CSS Flexbox

-> Flexbox is a layout model for arranging items (horizontally or vertically) within a container, in a flexible and responsive way.

Flex Container (Parent)
    ↓
┌───────────────┐
│ Child 1       │
│ Child 2       │
│ Child 3       │   
└───────────────┘

## Flex Container vs Flex Items

<div class="container"> 
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

.container → Flex Container (Parent)
.item → Flex Items (Children)

## Parent/Flex Container Properties

    display : flex

    flex-direction : row(default) , column

    flex-wrap

    flex-flow

    justify-content -> works on the MAIN axis.

    align-items -> works on the CROSS axis.

    align-content -> align-content controls the spacing/position of multiple flex lines.
    - It becomes useful when you have:
    - flex-wrap: wrap;

    gap

    row-gap

    column-gap

# Main Axis vs cross axis

1.  flex-direction: row;
    Main Axis → X / horizontal
    Cross Axis → Y / vertical

            Cross Axis
              ↓
        ┌─────────────┐
        │  1 → 2 → 3  │
        └─────────────┘
          Main Axis →

2.  flex-direction: column;
    Main Axis → Y / vertical
    Cross Axis → X / horizontal

## PART 2 — Child/Flex Item Properties

    - order -> order rearranges flex items visually without changing their actual HTML/DOM order.
    - flex-grow ->flex-grow controls how much a child can grow when extra space is available.
    - flex-shrink ->flex-shrink controls how much a child can shrink when there isn't enough space.
    - flex-basis -> flex-basis: 200px means the flex item starts with a basis of 200px on the main axis, and then Flexbox can grow or shrink it depending on the available space.
    - flex is the shorthand property for flex-grow, flex-shrink, and flex-basis.
        - flex: grow shrink basis;

