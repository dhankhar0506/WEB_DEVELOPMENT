## CSS 2D Transforms
- CSS 2D Transforms allow you to move, rotate, scale, or skew an element on a 2D plane (X and Y axes) without affecting the document layout.
- transform: transform-function;
1. Move elements
2. Rotate images/icons
3. Zoom in/out
4. Create hover effects
5. Build animations


## Main 2D Transform Functions

1. translate(x,y) => Moves an element from its current position.
2. rotate(angle-45de) =>Rotates an element clockwise or counterclockwise.
3. scale(x,y) => Changes the size of an element.
    - scaleX()
    - scaleY()
4.  transform: skewX(20deg) / skewY(20deg)


## CSS Transitions
- CSS Transitions allow an element to change smoothly from one style to another over a specified duration.
- A transition creates a smooth animation when a CSS property changes.
- transition: property duration timing-function delay
{
    transition-property:  all / background-color
    transition-duration: 1s
    transition-timing-function : ease / linear / ease-in / ease-in-out
    transition-delay: 
}


## CSS Animations

- CSS Animations allow an element to change styles automatically over time without requiring user interaction.
animation:  name - move
            duration -1s
            timing-function - ease / linear / ease-in / ease-in-out
            delay 
            iteration-count 2/3/ infinite
            direction / normal / reverse / alternate
            fill-mode 
            play-state;

Step 1: Create Animation using @keyframes
    @keyframes move {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(200px);
        }
    }
   
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}


Step 2: Apply Animation
    .box {
        animation: move 2s;
    }

## CSS Filters
CSS Filters are used to apply visual effects like blur, brightness, grayscale, and contrast to elements (mostly images).
    blur(6px);
    brightness(150%);
    contrast(150%)
    grayscale()
    sepia()
    invert()
    opacity()
    saturate()
    hue-rotate()
    drop-shadow()


## CSS Image Shapes
CSS Image Shapes allow you to change the appearance or layout of images, such as making them circular, rounded, clipped into custom shapes, or controlling how text wraps around them.
img {
    clip-path: circle(50%);
     clip-path: ellipse(40% 50%);
      clip-path: polygon(
        50% 0%,
        100% 100%,
        0% 100%
    );
}


## CSS Variables - var() Function
CSS Variables (also called Custom Properties) are used to store reusable values such as colors, fonts, spacing, or sizes.
CSS Variables let you save a value once and use it many times.

Step 1: Create a Variable
--variable-name: value;

Step 2: Use the Variable
var(--variable-name);


    :root {
        --primary-color: blue;
    }

    h1 {
        color: var(--primary-color);
    }

    p {
        color: var(--primary-color);
    }

    button {
        background: var(--primary-color);
    }


## CSS Media Queries
CSS Media Queries are used to apply different CSS styles based on the device's screen size, resolution, or orientation.
Media Types
Type	Meaning
all	Default, all devices
screen	Computer, mobile, tablet screens
print	Printed pages
speech	Screen readers
    
    @media screen and (max-width: 768px) {

        body {
            background: lightblue;
        }

    }

-max-width 
    @media (max-width: 768px) {

        body {
            background: yellow;
        }

    }

-min-width
    @media (min-width: 768px) {

    body {
            background: green;
        }

    }

- Orientation
    @media (orientation: landscape /portrait) {

    body {
        background: lightgreen;
        }
    }


- Break Point
    @media screen and (max-width: 768px) and (orientation: portrait) {

    body {
        background: lightblue;
    }

}
