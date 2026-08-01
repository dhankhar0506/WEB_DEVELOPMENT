## What is the CSS Box Model?
- Every HTML element is treated as a box made up of Content, Padding, Border, and Margin.

## How Total Size is Calculated
- box-sizing: content-box(default)
-Content      = 200px
Left Padding = 20px
Right Padding= 20px
Left Border  = 5px
Right Border = 5px

Total Width = 200 + 20 + 20 + 5 + 5
            = 250px

- box-sizing: border-box
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: border-box;
} Total Width = 200px

## CSS Text 
- CSS Text properties are used to control the appearance and formatting of text on a web page
1. color
2. text-align : center / right / left / justify
3. text-decoration : none / underline/ overline / line-through
    - text-decoration-line: underline;
    - text-decoration-color: red;
    - text-decoration-style: wavy;
4. text-transform : uppercase lowercase capitalize none
5. letter-spacing = Controls the space between letters.
6. word-spacing = Controls the space between words.
7. line-height = Controls the space between lines of text.
8.  text-shadow =  The text-shadow property adds shadow to text.
    h1 {
        text-shadow: 2px 2px 5px red;
    }

## CSS Text Effects
CSS Text Effects are properties used to control how text is displayed, especially when the text is too long or needs better readability.
1. text-overflow = ellipsis ...
    - .box {
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

2. text-overflow = clip
    - .box {
        width: 150px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: clip;
    }


3. word-wrap : Breaks long words so they fit inside the container.
    .box2{
    width:150px;
    border:1px solid black;
    overflow-wrap:break-word;
    }

4. word-break = The CSS word-break property specifies how words should break when reaching the end of a line.
        {
            word-break: normal; // only at spaces
            word-break: break-all; // break anywhere in the middle of words
        }
5. {
    writing-mode:horizontal-tb; // Hello
    writing-mode:vertical-rl; //    H
                                    e
                                    l
                                    l
                                    o
    }


## CSS The overflow Property
- overflow decides whether extra content is shown, hidden, or scrollable when it doesn't fit inside an element.
Suppose a <div> has a fixed size.

.box {
    width: 300px;
    height: 150px;
    border: 2px solid black;
}
If the content is larger than 300px × 150px, it will overflow the box.
The overflow property tells the browser what to do with that extra content.

Values of overflow
1. overflow: visible;
2. overflow: hidden;
3. overflow: scroll;
4. overflow: auto;


## CSS Fonts

- CSS Font properties are used to control the appearance of text, such as its family, size, weight, style, and spacing.
1. font-family : Arial, Helvetica, sans-serif
2. font-size: 32px;
3. font-weight : Controls how bold the text appears.(100-900)
4. font-style: italic / oblique
5. font-variant: small-caps (HELLO WORLD (small capital letters))


## CSS Icons - Font Awesome
- CSS icons are icon fonts or SVG icons used to display graphical symbols such as search, home, user, cart, and settings.
- Font Awesome is a popular icon library that provides thousands of ready-to-use icons.

## How to Use Font Awesome
- Step 1: Add the CDN(content delievery network)

## CSS Links
- CSS Links are used to style HTML hyperlinks (<a> tags).

| State     | Selector    | Description                       |
| --------- | ----------- | --------------------------------- |
| Unvisited | `a:link`    | Link has not been visited yet     |
| Visited   | `a:visited` | User has already visited the link |
| Hover     | `a:hover`   | Mouse is over the link            |
| Active    | `a:active`  | User is clicking the link         |

1. a:link = Styles an unvisited link.
    a:link {
        color: blue;
    }

2. a:visited = Styles a visited link.
    a:visited {
        color: purple;
    }

3. hover = Changes the style when the mouse pointer is over the link.
    a:hover {
        color: red;
    }

4. Remove Underline {text-decoration: none;}


## What are CSS Lists?
CSS Lists are used to style ordered (<ol>) and unordered (<ul>) lists.
1. ul {
    list-style-type: square disc circle	 square	 none
}

2. ol {
    list-style-type: upper-roman; decimal upper-alpha lower-alpha upper-roman lower-roman
}

## CSS Tables
- CSS Table properties are used to style HTML tables, such as borders, spacing, alignment, width, and layout.
    - table, th, td {
        border: 1px solid black;
        border-collapse: collapse;        
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

