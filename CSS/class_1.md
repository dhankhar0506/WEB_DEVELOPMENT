## What is CSS?
- CSS (Cascading Style Sheets) is a stylesheet language used to style and design HTML elements.

## Why do we use CSS?
🎨 Change colors
📝 Change fonts
📏 Add spacing (margin, padding)
📐 Control layout
📱 Make websites responsive
✨ Add animations and effects

## Attributes of CSS
- Selector → Which element to style (h1)
- Property → What to change (color)
- Value → New value (blue)
    selector {
        property: value;
    }

## CSS Selectors
- A selector tells CSS which HTML element to style.

## Most Common CSS Selectors
- Element Selector
    p {
        color: red;
    }

- ID Selector (#) = Selects an element using its unique id.
    - An id should be unique on a page.
    #header {
        color: blue;
    }

- Class Selector = The Class Selector (.) selects one or more elements that share the same class.
    .title {
        color: green;
    }
    <h1 class="title">Hello</h1>
    <p class="title">World</p>

- Universal Selector (*)= The Universal Selector (*) applies styles to every element on the page.
    * {
        margin: 0;
        padding: 0;
    }

- Group Selector (,) = The Group Selector allows multiple selectors to share the same CSS rules.
    h1, p, button {
        color: blue;
    }

## Types of CSS

- Inline CSS = Applied directly inside an HTML element.
    <h1 style="color:red;">Hello</h1>

- Internal CSS = Written inside the <style> tag.
- External CSS =  Written in a separate .css file.

## Q. Why is CSS called "Cascading"?
Because when multiple CSS rules apply to the same element, the browser follows the cascade (priority rules) to decide which style to apply.


## CSS Colors
- CSS Colors are used to change the color of text, backgrounds, borders, and other HTML elements.

## CSS Gradients
- A gradient is a background made by blending multiple colors smoothly.
{background: linear-gradient(direction, color1, color2);}
{background: linear-gradient(45deg, red, blue);}


## Q. How many ways can you specify colors in CSS?
    Color Name =  red / green / blue
    HEX(Hexadecimal) = Starts with #
    RGB = Red, Green, Blue. Each value ranges from 0–255.
    RGBA = RGB + Alpha (Transparency)(0-1)
    HSL


## CSS Background
- CSS Background properties are used to set the background of an HTML element, such as its color, image, position, size, and repetition.
1. background-color
    div {
        background-color: green;
        opacity: 0.3;
    }
2. background-image = Adds an image as the background.
    - background-image: url("nature.jpg")

3. background-repeat = Controls whether the background image repeats
    - repeat (Default)
    - no-repeat
    - repeat-x
    - repeat-y

4. background-position = Sets the position of the background image.
    - left
    - right
    - center
    - top
    - bottom

5. background-size = Controls the size of the background image
    - auto
    - cover
    - contain

6. background-attachment = Determines whether the background scrolls with the page.
    - scroll (Default)
    - fixed
    - local




## CSS Borders
- A CSS Border is used to create a line around an HTML element.
    selector {
        border: 2px solid black;
    }

## Why do we use Borders?
- Highlight an element
- Separate sections
- Design buttons, cards, and forms
- Improve UI

## Border Properties
1. border-width
2. border-style = solid / dashed / groove/ double
3. border-color
4. Border Radius    
5. CSS Border - Individual Sides
    p {
        border-top-style: dotted;
        border-right-style: solid;
        border-bottom-style: dotted;
        border-left-style: solid;
    }

## Q = CSS Outline vs Border
- Border = A border is a visible line around an HTML element. It is part of the CSS Box Model.
- outline = An outline is a line drawn outside the border. It is not part of the CSS Box Model
    - An outline is mainly used to highlight an element without changing its size or layout.


## CSS Margins
- A margin is the space outside the border of an HTML element. It creates distance between the element and other elements.
   
    p {
        margin-top: 100px;
        margin-bottom: 100px;
        margin-right: 150px;
        margin-left: 80px;
    }
    
    - Used to center a block-level element horizontally.
    div {
        width: 300px;
        margin: auto;
    }

## What is Padding?
- A padding is the space between an element's content and its border.
    - div {
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 80px;
    }

    +---------------------------+
    |         Margin            |  ← Outside space
    |  +---------------------+  |
    |  |      Border         |  |
    |  | +-----------------+ |  |
    |  | |    Padding      | |  |
    |  | | +-------------+ | |  |
    |  | | |   Content   | | |  |
    |  | | +-------------+ | |  |
    |  | +-----------------+ |  |
    |  +---------------------+  |
    +---------------------------+



## Q. Can inline elements use width, height, and margin?
- Inline elements ignore width and height. Left and right margins work, but top and bottom margins do not affect the layout as they do for block elements. If you need these properties, use display: inline-block or display: block.
❌ width → Doesn't work on inline elements.
❌ height → Doesn't work on inline elements.
✅ margin-left / margin-right → Work.
⚠️ margin-top / margin-bottom → Don't create normal vertical spacing.
✅ Use display: inline-block if you need width, height, and full margin support.

## CSS Height and Width
- The width and height properties are used to set the size of an HTML element.
- Width → Controls the horizontal size.
- Height → Controls the vertical size.
Width sets how wide an element is, and height sets how tall it is.
    
    div {
        width: 300px;
        height: 150px;
        background-color: lightblue;
    }

## properties  of width and height (same with height too)
-   max-width= Sets the maximum width an element can have.
    img {
        max-width: 100%;
    }

- min-width = Sets the minimum width.
    div {
        min-width: 200px;
    }


## What are CSS Units?
- CSS units define the size, length, spacing, or dimensions of an element.

## Types of CSS Units
- Absolute Units (Fixed size)
- Relative Units (Relative to another value)

1. px (Pixels) = A fixed unit.

2. % Relative to the parent element.(for width and height)
    .parent {
        width: 400px;
    }

    .child {
        width: 50%;
    } // child = 200px

3. em = Relative to the font size of the parent element.
    .parent {
        font-size: 20px;
    }

    .child {
            font-size: 2em;
    }

4. rem = Relative to the root (html) font size.
        html {
            font-size: 16px;
        }

        h1 {
            font-size: 2rem;
        }

5. vw (Viewport Width)  = Relative to the browser window's width.


## Common Units
Unit	Meaning	Example
px	Fixed pixels	width: 300px;
%	Percentage of parent	width: 50%;
vw	Viewport width	width: 100vw;
vh	Viewport height	height: 100vh;
rem	Relative to root font size	width: 20rem;
em	Relative to parent font size	width: 15em;
auto	Browser calculates size	width: auto;