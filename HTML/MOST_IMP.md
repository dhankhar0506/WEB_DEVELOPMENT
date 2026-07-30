## What is an HTML Editor?
=> An HTML Editor is a software application that allows developers to write, edit, and manage HTML code for creating web pages.
Visual Studio Code (VS Code) ⭐⭐⭐⭐⭐
Notepad (Windows) => index.htm



## HTML - The Head Element
The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>
The <head> element contains information (metadata) about the HTML document. This information is not displayed on the webpage but is used by the browser and search engines.

<title> = Displays the title of the webpage in the browser tab.
  - The <title> tag defines the title of the webpage shown in the browser tab and search engine results.
  - <title>My Portfolio</title>
  - Search engine results (SEO)

<meta> Provides extra information (metadata) about the webpage.
  - <meta charset="UTF-8">
  - <meta name="viewport" content="width=device-width, initial-scale=1.0">
  - SEO (description, keywords, etc.)

<link> Links external resources to the HTML page.
  - The <link> tag is used to connect external resources like CSS files and favicons to the webpage.
  - <link rel="stylesheet" href="style.css">

- <style> Writes CSS directly inside the HTML document. </style>

- <script> Adds JavaScript to make the webpage interactive. 
  - Button click events
    Form validation
    Animations
    API calls

- <base>
  - Defines the base URL for all relative links in the page.
  - <base href="https://example.com/docs/">
  - <a href="about.html">About</a>
  - Automatically= https://example.com/docs/about.html
  - Useful when many links share the same base path.




## HTML Elements

=> An HTML element is defined by a start tag, some content, and an end tag.
<tagname>Content goes here...</tagname>

## HTML Attributes

=> All HTML elements can have attributes and Attributes provide additional information about elements
<a href="https://www.w3schools.com">Visit W3Schools</a>  
<img src="img_girl.jpg" width="500" height="600" alt="Girl with a jacket">

## There are two ways to specify the URL in the src attribute:

=> URL(URL (Uniform Resource Locator))

- [Absolute_URL]= An Absolute URL is the complete web address, including Protocol (https://) + Domain name (example.com)+ Path to the resource
- [Relative_URL]= A Relative URL specifies the location of a resource relative to the current webpage. It does not include the protocol or domain name.

## HTML Headings (BLOCK)

=> HTML headings are titles or subtitles that you want to display on a webpage.

<h1>Heading 1</h1> Page title
<h2>Heading 2</h2> Section titles
<h3>Heading 3</h3> Sub-sections
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

- Each HTML heading has a default size
- However, you can specify the size for any heading with the style attribute, using the CSS font-size property
- <h1 style="font-size:60px;">Heading 1</h1>

## HTML Paragraphs (BLOCK)

=> A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>'

**[Note]=> Large or small screens, and resized windows will create different results.**

## HTML Horizontal Rules(-------------------------)(empty tag / null tags)

=> The <hr> element is used to separate content (or define a change) in an HTML page and displayed as a horizontal rule.
The <hr> tag is an empty tag, which means that it has no end tag.

## HTML Line Breaks(empty tag / null tags)

=> The HTML <br> element defines a line break.

<p>This is<br>a paragraph<br>with line breaks.</p>

## <pre> Tag (Preformatted Text)

=> It displays text exactly as it is written in the HTML code, preserving:















## HTML Styles

=> The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
<tagname style="property:value;"> (The property is a CSS property. The value is a CSS value.)

## HTML Text Formatting

- <b>- The <b> tag makes text bold but does not add any semantic meaning.
  - Used for appearance
  - Non-semantic

- The <strong> tag makes text bold and tells browsers/search engines/screen readers that the text is important.
  - Used for meaning + appearance
  - Semantic

- The <i> tag displays text in italic without adding semantic meaning.
  - Non-semantic
- The <em> tag displays text in italic and indicates emphasis.
  - Semantic
- <mark> — Highlighted Text
- <small> — Smaller Text
- <del> — Deleted Text [Strike through]
- <ins> — Inserted Text [Underlined]
- <sub> — Subscript CO₂ (<p>CO<sub>2</sub></p>)
- <sup> — Superscript x² (<p>x<sup>2</sup></p>)


## HTML Text & Quotation Tags
- The <abbr> tag is used to define an abbreviation or acronym.
  - <p>I am learning <abbr title="HyperText Markup Language">HTML</abbr>.</p>
- <bdo> — Bidirectional Override
  - dir="ltr" → Left to Right
  - dir="rtl" → Right to Left
  - <bdo dir="rtl">Hello World</bdo>

## HTML Comments
=> HTML comments are not displayed in the browser, but they can help document your HTML source code.
<!-- This is a comment -->


## HTML Colors
=> RGB Color Values ( rgb(red, green, blue))
    - Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.
    - 256 x 256 x 256 = 16777216 possible colors!
    - rgba(red, green, blue, alpha) = The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):
  

## HTML Styles - CSS
=> CSS stands for Cascading Style Sheets. Cascading Style Sheets (CSS) is used to format the layout of a webpage.
With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

= Using CSS = CSS can be added to HTML documents in 3 ways:
    
[Inline] - by using the style attribute inside HTML elements
    - <h1 style="color:blue;">A Blue Heading</h1>
    
[Internal] - by using a (<style></style>) element in the <head> section.
   - An internal CSS is used to define a style for a single HTML page.
   - <style>
        body {background-color: powderblue;}
        h1   {color: blue;}
        p    {color: red;}
    </style>
    
[External] - by using a <link> element to link to an external CSS file
    - An external style sheet is used to define the style for many HTML pages.
    -  <link rel="stylesheet" href="styles.css">
  

## HTML Links
=> HTML links are hyperlinks. You can click on a link and jump to another document.
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!></a>
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a> (HOVER PE show title)

- HTML Links - Use an Image as a Link
    <a href="default.asp">
    <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
    </a>

- Link to an Email Address=
  -  <a href="mailto:someone@example.com">Send email</a>


## HTML Images
= The HTML <img> tag is used to embed an image in a web page.
<img src="url" alt="alternatetext">
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">























## What is an Image Map?
=> An Image Map is an image that contains multiple clickable areas. Each clickable area can open a different webpage or perform a different action.
    <img src="image.jpg" usemap="#myMap"> <!-- The usemap attribute connects an image (<img>) to a <map> element by referring to its name.-->
    <map name="myMap">
        <area shape="rect" coords="34,44,270,350" href="page1.html">
    </map>
    coords="20,30,180,150" x1,y1,x2,y2

## HTML Background Images
- To add a background image on an HTML element, use the HTML style attribute and the CSS background-image property: 
  - <p style="background-image: url('img_girl.jpg');">

## What is the <picture> Element?
- The <picture> element is used to provide multiple versions of an image, allowing the browser to choose the most appropriate image based on screen size, resolution, or supported image format.
Same image is shown on:
    Desktop
    Tablet
    Mobile
    <picture>
        <source media="(min-width: 1000px)" srcset="desktop.jpg">
        <source media="(min-width: 600px)" srcset="tablet.jpg">
        <img src="mobile.jpg" alt="Nature">
    </picture>

## HTML Favicon
A favicon is a small icon that represents a website. It is displayed in the browser tab, bookmarks, and browser history to help users identify the website.
<link rel="icon" type="image/x-icon/png/svg" href="favicon.ico">

## HTML Page Title
- The <title> tag specifies the title of an HTML document.
- It is placed inside the <head> section.
- The title should describe the content and the meaning of the page.
- The page title is very important for search engine optimization (SEO). The text is used by search engine algorithms to decide the order when listing pages in search results.

## HTML Tables
- HTML tables are used to display data in rows and columns.
- colspan = Merges columns.
- rowspan = Merges rows.
  - <table>
          <caption>
          Student Details
          </caption>

          <thead>
              <tr>
                <th>Name</th> // table head data 
                <th>Marks</th>
              </tr>
          </thead>

          <tbody>
              <tr> // table row 
                <td>John</td> // table data
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

## HTML Lists

Unordered HTML List 
  - An unordered list starts with the <ul> tag. Each list item starts with the <li> ta
  - The list items will be marked with bullets 
  - 
  - <ul style="list-style-type:circle / disc / square>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>

Ordered HTML List
  - An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.
  -  type="1"  / type="A" / type="a" / type="I"(roman case)
  - <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
  </ol>

HTML Description Lists
  - A Description List is an HTML list used to display names/terms and their corresponding descriptions or definitions.
  - <dl>
      <dt>Coffee</dt>  <!---  Defines the term (name/title) -- >
        <dd>- black hot drink</dd>  <!--- Defines the description (definition) -- >
      <dt>Milk</dt>
        <dd>- white cold drink</dd>
  </dl>




















## HTML Block and Inline Elements
Block-level Elements : A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
  - A block-level element always takes up the full width available 
  - <div> = The <div> element is often used as a container for other HTML elements.
  - <p> / <h1>-<h6>/ <form> / <ul> / <video> / <audio> / <header>	<footer>	<main>	<section>	

Inline Elements:  An inline element does not start on a new line. It only takes up as much width as its content requires.\
  - <span> The <span> element is an inline container used to mark up a part of a text, or a part of a document. 
  - <a>	 <img>	 <strong> <abbr> <input> <label> <select> <iframe>


##  HTML Div Element
The <div> element is used as a container for other HTML elements
- Center a <div> Horizontally
  - <div class="box">
      Centered Div
    </div>
  - .box{
      width:300px;
      margin:auto;
      border:2px solid black;
      text-align:center;
      }

## What is float?
The float property was originally introduced to wrap text around images, but it was later used to create page layouts.
  - float: left; / right
  - <img src="image.jpg" class="left">
      <p>
      This text wraps around the image.
      </p>
     
      .left{
          float:left;
          margin-right:15px;
      }

## HTML Buttons
- The <button> element is used to create a clickable button on a webpage.
- Trigger JavaScript functions
- Submit forms and Reset forms
- [Attributes] = disabled / type / onclick
- <form action="/action_page.php">
    First name: <input type="text" name="fname">
    <button type="submit">Submit</button>
    <button type="reset">Reset Form</button>
    <button onclick="alert('Hello!')">Click Event</button>
  </form>



## HTML Iframes
- An <iframe> (Inline Frame) is used to embed another webpage or external content inside the current HTML page.
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        allowfullscreen>
    </iframe>
- Can every website be embedded in an iframe?
Answer: No. Many websites prevent embedding using security headers like X-Frame-Options or Content-Security-Policy (CSP).
  = A Content Security Policy (CSP) helps protect your site from threats

- Iframe - Target for a Link
  - <iframe src="demo_iframe.htm" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>

  <p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>

**[name] The name attribute is used to identify an element. In forms, it connects the frontend to the backend by sending data as name=value. In some elements like radio buttons, it is also used to group related elements.**

## HTML javascript
- JavaScript is used in HTML to make web pages interactive and dynamic.
- JavaScript is a client-side scripting language used to make HTML pages interactive and dynamic.
  - Respond to button clicks
    Validate forms
    Change HTML content
    Change CSS styles
    Show alerts 
    Perform calculations
    Fetch data from APIs









## How to Add JavaScript in HTML?

- [Inline_JavaScript]
  - <button onclick="alert('Hello!')">
        Click Me
    </button>

- [Internal_JavaScript]
  - <button onclick="showMessage()">Click</button>
  - 
      <script>
        function showMessage() {
            alert("Hello World");
        }
      </script>

- [External_JavaScript]
  
  <body>
      <h1>Hello</h1>
      <!---Reason: HTML loads first, then JavaScript runs, making the page load faster. --->
      <script src="script.js"></script> 
  </body>

  - defer : Yes, you can remember defer as "execute at the end" 
  - defer tells the browser to download the JavaScript file while parsing the HTML, but execute it only after the HTML document has been completely parsed.
  - parse : The browser has read and understood the HTML code and built the webpage structure (DOM).
    <head>
        <script src="app.js" defer></script>
    </head>
    <body>
        <h1>Hello</h1>
    </body>

**The <noscript> tag is used to display alternative content when JavaScript is disabled or unavailable in the browser.**











## HTML Layout Elements
- HTML5 introduced semantic layout elements to organize a webpage into meaningful sections. These elements improve readability, SEO, and accessibility.
  - Common HTML Layout Elements
    <header>	Top section of a page or section
    <nav>	Navigation links
    <main>	Main content of the page
    <section>	Groups related content
    <article>	Independent content (blog, news, post)
    <aside>	Sidebar or related content
    <footer>	Bottom section of the page
    +--------------------------------+
    |          HEADER                |
    +--------------------------------+
    | NAVIGATION                     |
    +--------------------------------+
    | MAIN                           |
    |  +--------------------------+  |
    |  | SECTION                  |  |
    |  +--------------------------+  |
    |  | ARTICLE                  |  |
    |  +--------------------------+  |
    |  | ASIDE                    |  |
    |  +--------------------------+  |
    +--------------------------------+
    |          FOOTER                |
    +--------------------------------+    

##  HTML Semantic Elements
- Semantic elements are HTML tags that clearly describe the meaning and purpose of their content They make the code easier to read and improve SEO and accessibility.- 
- Examples of non-semantic elements : <div> and <span> - Tells nothing about its content. Does not describe its purpose
- Examples of semantic elements: <img>, <table>, and <article> - Clearly defines its content.

## HTML Entities
- HTML Entities are special codes used to display reserved characters and special symbols in HTML.
- They start with & and end with ;
  <	&lt;	&#60;	Less than sign
  >	&gt;	&#62;	Greater than sign
  &	&amp;	&#38;	Ampersand
  "	&quot;	&#34;	Double quotes

## What are HTML Symbols?
- HTML Symbols are special characters such as mathematical, currency, and copyright symbols that can be displayed using HTML entity names or entity numbers.


## HTML Symbol → 
  the actual character you see on the page (like ©).

## HTML Entity → 
  the code you write in HTML to represent that symbol (like &copy;).
  Prevents conflicts with HTML syntax and ensures correct rendering of reserved or hard-to-type characters.
    < → Starts an HTML tag.
    > → Ends an HTML tag.
    & → Starts an HTML entity.
    If you write them directly, the browser may interpret them as HTML instead of displaying them.

  Example
      <!-- Using symbol directly -->
      <p>Copyright © 2026 Gourav</p>

      <!-- Using entity -->
        <p>Copyright &copy; 2026 Gourav</p>
      
      Both show the same result: Copyright © 2026 Gourav

      Symbol = the picture (©)
      Entity = the recipe/code (&copy;) that tells the browser how to draw that picture.
      So, entities are safer to use in HTML because they always render correctly, while symbols depend on encoding support.


## HTML Encoding (Character Sets)
  Character Encoding is a standard that tells the browser how to convert binary data (0s and 1s) into readable characters like letters, numbers, symbols, and emojis.
  Character encoding tells the browser how to interpret and display characters correctly in an HTML document.

## Why is Character Encoding Needed?
  Computers only understand binary (0s and 1s).
  Character encoding maps those binary values to characters.

- UTF-8 (Universal Text Format)  (Most Common Encoding) = HTML5 recommends UTF-8 because it supports almost every character used worldwide.
    Because it supports:
    <meta charset="UTF-8">  
    ✅ Multiple languages
    ✅ Currency symbols
    ✅ Emojis
    ✅ Mathematical symbols
    ✅ Special characters

- ASCII	Supports only basic English characters
- ISO-8859-1	Older encoding for Western European languages

## HTML vs XHTML (Interview Notes)
XHTML (Extensible HyperText Markup Language) is a stricter version of HTML that follows XML rules.
XHTML is a stricter and XML-based version of HTML. It requires well-formed and properly structured code.
HTML                             vs                   XHTML
Flexible	                                            Strict
Tags can be lowercase or uppercase	                  Tags must be lowercase
Closing tags are optional for some elements	          Every tag must be closed
Attribute values may be unquoted(<input type=text>)   Attribute values must be quoted (<input type="text" />)
Empty tags don't need closing slash	                  Empty tags must end with />
More forgiving of errors	                            Errors are not tolerated














## HTML Forms
- An HTML Form is used to collect user input and send it to a server for processing.

- Important Attributes of <form> => <form action="/login" method="post">

- Common Form Elements: text
                        password
                        email
                        number
                        date
                        radio
                        checkbox
                        file
                        submit

[action_Attribute]
  - the action attribute specifies where the form data should be sent after submission.
  - <form action="/login">

[method]
  - The method attribute specifies how form data is sent to the server.
  - <form method="GET">




## HTML Input Types
- text / password / email / number / tel / url / datetime-local / 

-[file]
    <form>
      <label for="myfile">Select a file:</label>
      <input type="file" id="myfile" name="myfile">
    </form>

-[range]
  <form>
    <label for="vol">Volume (between 0 and 50):</label>
    <input type="range" id="vol" name="vol" min="0" max="50">
  </form>

[Radio-Button] (ONLY ONE CAN BE SELECTED )
  - A radio button lets the user select only one option from a group.'
  - All radio buttons with the same name belong to one group.
  - <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female

[Checkbox]
  - A checkbox allows users to select multiple options.
  - <input type="checkbox" name="skills" value="HTML"> HTML
    <input type="checkbox" name="skills" value="CSS"> CSS
    <input type="checkbox" name="skills" value="JS"> JavaScript


## HTML Form Elements (Interview Crisp Notes)

- [input]=  The <input> element is used to take input from the user.

- [label]= A label provides a name or description for an input field.
      <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname">
      </form>

-[select]=  A <select> element creates a dropdown list.
  - The <select> tag is used to create a dropdown list, and <option> defines the available choices.
  - <select name="country" multiple id="abc">
      <option>India</option>
      <option>USA</option>
      <option>Canada</option>
    </select>

-[textarea]=  Used to collect multi-line text.
  - <textarea name="message" rows="10" cols="30">
      The cat was playing in the garden.
    </textarea>

-[fieldset]= The fieldset element is used to group related data in a form, and the legend element defines a caption for the fieldset element
    <form action="/action_page.php">
      <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
      </fieldset>
    </form>

[datalist]=  The <datalist> element provides a list of predefined suggestions for an <input> field.
      = User can type a new value
      = Type: Ch... =  Suggestions: Chrome, Firefox
        You can still type: Opera ✅. Even though Opera is not in the <datalist>, the browser still accepts it.
        <label for="browser">Choose a browser:</label>
        <input list="browsers" id="browser" name="browser">
        <datalist id="browsers">
          <option value="Chrome">
          <option value="Firefox">
          <option value="Edge">
          <option value="Safari">
        </datalist>

## HTML Input Attributes
- [type] = Specifies the type of input field.

- [name]= The name attribute is used to identify a form field when the data is sent to the server.
  - The name attribute is an identifier for a form field. When the form is submitted, the browser sends data as key-value pairs,    where name is the key. The backend uses this key to identify the field and apply the appropriate validation or processing.

- [id] = Provides a unique identifier for an element.
-[value] = The input value attribute specifies an initial value for an input field
- [placeholder] = Displays a hint inside the input field.
- [required] = Makes the field mandatory.
- [readonly] = The value can be seen but cannot be edited.
- [Disabled] = Disables the input completely.
- [maxlength] = for character
- [max] = numbers
- [accept] =Restricts the types of files that can be uploaded.

- Read only. You can read it but can't change it. 
- Backend gets the value.



- Disabled = Doesn't participate.
- The field is completely inactive.
- Backend does not get the value.

The readonly attribute makes an input non-editable, but its value is still submitted with the form. It is useful for fields like User ID or Order ID. The disabled attribute completely disables the input, preventing interaction, and its value is not submitted. It is used for inactive or unavailable fields.

## HTML Canvas Graphics

## HTML Multimedia
- HTML Media is used to embed audio and video directly into a web page without using external plugins like Flash.
- [audio]=  The <audio> element is used to embed audio files in a web page.
      <audio controls loop muted autoplay preload>
        <source src="song.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>



- [video] = The <video> element is used to embed videos in a web page
        <video width="500" controls autoplay loop width height poster>
            <source src="movie.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
-[source] = It allows the browser to choose a supported file format.
  = <video controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.webm" type="video/webm">
    </video>

-[track] = The <track> element adds subtitles, captions, or descriptions to a video.
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles.vtt"
         kind="subtitles"
         srclang="en"
         label="English">
</video> 

## HTML - What is a Web API?

- A Web API allows JavaScript to communicate with the browser or external services to perform tasks.
- HTML APIs are browser-provided APIs introduced with HTML5 that allow JavaScript to access browser features such as Geolocation, Local Storage, Drag & Drop, and Web Workers. These APIs are also part of the broader category called Web APIs.

## Why do we need Web APIs?

JavaScript alone cannot:
  Access the user's location
  Store data in the browser
  Make HTTP requests
  Access the camera or microphone
  Set timers
  Web APIs provide these capabilities.













## Web APIs are browser-provided APIs that JavaScript uses to interact with browser features.
  Fetch API
  Geolocation API
  Local Storage API
  Canvas API
  History API
  Clipboard API
  WebSocket API


 
## What is DOM API?
==> DOM API is a set of JavaScript methods and properties provided by the browser to access, read, modify, create, and delete HTML elements on a web page.
- HTML + CSS only create the page.
- JavaScript uses the DOM API to interact with that page.

## What is Fetch API?
Fetch API is a Web API provided by the browser that allows JavaScript to send HTTP requests (GET, POST, PUT, DELETE, etc.) to a server and receive data asynchronously using Promises.


## HTTP vS API
HTTP is the communication protocol that carries requests and responses between the client and the server. API is a set of endpoints or services provided by the server, such as /login, /users, or /products, that define what operations can be performed.

## Local Storage API
Local Storage API is a Web API provided by the browser that allows JavaScript to store data in the user's browser as key-value pairs. The data persists even after the browser is closed or the system is restarted, until it is manually removed.

## Geolocation API
Gets the user's current location.
The Geolocation API provides the user's latitude and longitude.

## Drag and Drop API
Allows elements to be dragged and dropped.
Dragging a file into Gmail to upload it.

## History API
Controls browser history.

## Notification API
Shows browser notifications.

## WebSocket API
Provides real-time communication between client and server.
WebSocket API enables two-way real-time communication.

## Web Worker API
Web Worker API is a Web API provided by the browser that allows JavaScript to run heavy tasks in a separate background thread, so the main UI thread remains responsive.
it prevents the webpage from freezing while performing time-consuming operations.

## Why Do We Need Web Workers?
Normally, JavaScript is single-threaded, meaning it executes one task at a time on the main thread.

If a heavy task runs on the main thread:
User Click
      │
Heavy Calculation (10 sec)
      │
Page Freezes ❌
The browser cannot respond to clicks, scrolling, or typing until the task finishes.

## With Web Worker
Main Thread (UI)
      │
      ├── Button Click ✅
      ├── Scrolling ✅
      └── Typing ✅

             │

     Web Worker (Background)
      │
Heavy Calculation

## Why Can't a Web Worker Access the DOM?
Because only the main thread is allowed to update the webpage.
If multiple threads changed the DOM at the same time, it could lead to inconsistent updates and race conditions. So the worker sends the result back, and the main thread updates the UI.




## Media API
Accesses the camera and microphone.
Media API provides access to the user's camera and microphone.

