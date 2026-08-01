## CSS display Property
- The display property controls an element's layout and behavior, such as whether it appears as a block, inline, flex, grid, or is hidden.
1. display: block
    - Starts on a new line
    - Takes the full available width
    - You can set width and height

2. display: inline
    Does not start on a new line
    Takes only the width of its content
    width and height do not work

3. display: inline-block : Combines features of both block and inline.
    Stays on the same line
    Allows width and height
    Supports margin and padding on all sides
4. display: none = Hides the element completely.
5. display: flex = Turns an element into a flex container.
6. display: grid = Turns an element into a grid container

## Q4. Difference between display: none and visibility: hidden?
display: none	visibility: hidden
Removes the element from the layout	Keeps the element's space but hides it

## CSS position Property
The position property tells the browser how an element should be placed on the webpage.

- Position Values
1. static is the default positioning
- follows the normal page flow.
- top, left, right, bottom do not work.
    div {
        position: static;
    }

2. relative moves an element relative to its original position while keeping its original space.
- But its old space is still reserved.
    div {
         position: relative;
        top: 20px;
        left: 30px;
    }

3. position: absolute = It is positioned relative to its nearest positioned ancestor
If no positioned parent exists, it uses the whole page (viewport).
    div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid green;
    }

    div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid red;
    }


4. position: fixed =The element is fixed to the browser window (viewport).
    
    button{
        position: fixed;
        bottom:20px;
        right:20px;
    }
5.position : sticky = An element with position: sticky; toggles between a relative and fixed position, depending on the scroll position.
- When it reaches the specified position, it sticks there.

## What are CSS position offsets?
Position offsets are top, right, bottom, and left. They specify how far a positioned element is placed from the corresponding edge.

##  Why do we use position?
Move elements
Overlay elements
Create sticky headers
Create fixed navigation bars
Place elements at exact locations

## What is z-index?
- z-index controls the stacking order of overlapping elements. A higher value appears on top.



## CSS Float
The float property moves an element to the left or right of its container, allowing surrounding content to wrap around it. Its common values are left, right, and none. The clear property is used to stop elements from wrapping around floated elements. Today, float is mainly used for wrapping text around images, while Flexbox and Grid are preferred for modern layouts.

## What is clear?
clear prevents an element from wrapping around floated elements and forces it to appear below them.

## CSS Pseudo-classes
Pseudo-classes apply styles when an element is in a specific state, such as being hovered, focused, or clicked.
- Common Pseudo-classes
1. :hover
2. :active
3. :focus
4. :visited
5. :first-child
6. :last-child
7. :nth-child() // odd / even

##  CSS Pseudo-Elements
A CSS pseudo-element is a keyword that can be added to a selector, to style a specific part of an element.
- Style the first letter or first line, of an element
- Insert content before or after an element
1.     p::before {
        content: "👉 ";
    }
2. p::after {
    content: " ✔";
}
3. p::first-letter {
    font-size: 30px;
}
4.  p::first-line {
    color: blue;
}

## CSS The !important Rule
- The !important rule gives a CSS property the highest priority, overriding most other CSS rules.
- Sometimes another CSS rule overrides your style.