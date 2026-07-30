# HTML Layout Elements

> **Definition:**  
HTML5 introduced **semantic layout elements** to organize a webpage into meaningful sections.

### Benefits

- Improves Readability
- Better SEO (Search Engine Optimization)
- Better Accessibility
- Easier Code Maintenance

---

# Common HTML Layout Elements

| Element | Purpose |
|----------|---------|
| `<header>` | Top section of a page or section |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | Groups related content |
| `<article>` | Independent content (Blog, News, Post) |
| `<aside>` | Sidebar or related content |
| `<footer>` | Bottom section of a page |

---

## Layout Structure

```text
+--------------------------------+
|           HEADER               |
+--------------------------------+
|          NAVIGATION            |
+--------------------------------+
|            MAIN                |
|  +--------------------------+  |
|  | SECTION                  |  |
|  +--------------------------+  |
|  | ARTICLE                  |  |
|  +--------------------------+  |
|  | ASIDE                    |  |
|  +--------------------------+  |
+--------------------------------+
|           FOOTER               |
+--------------------------------+
```

---

## Example

```html
<header>
    Website Header
</header>

<nav>
    Navigation Menu
</nav>

<main>

    <section>

        <article>
            Blog Post
        </article>

    </section>

    <aside>
        Related Posts
    </aside>

</main>

<footer>
    Copyright © 2026
</footer>
```

---

# HTML Semantic Elements

> **Definition:**  
Semantic elements are HTML tags that **clearly describe the meaning and purpose** of their content.

### Benefits

- Easier to Read
- Better SEO
- Better Accessibility
- Easier Maintenance

---

## Non-Semantic Elements

These elements **do not describe** their content.

### Examples

```html
<div></div>

<span></span>
```

**Reason**

- Generic containers
- Tell nothing about their content

---

## Semantic Elements

These elements clearly define their purpose.

### Examples

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

<img>

<table>
```

---

# HTML Entities

> **Definition:**  
HTML Entities are **special codes** used to display reserved characters and special symbols in HTML.

### Syntax

- Starts with `&`
- Ends with `;`

Example

```html
&lt;
```

---

## Common HTML Entities

| Character | Entity Name | Entity Number | Meaning |
|------------|-------------|---------------|---------|
| `<` | `&lt;` | `&#60;` | Less Than |
| `>` | `&gt;` | `&#62;` | Greater Than |
| `&` | `&amp;` | `&#38;` | Ampersand |
| `"` | `&quot;` | `&#34;` | Double Quote |

---

# What are HTML Symbols?

> **Definition:**  
HTML Symbols are special characters such as:

- Mathematical Symbols
- Currency Symbols
- Copyright Symbols
- Trademark Symbols

They can be displayed using:

- Entity Names
- Entity Numbers

---

# HTML Symbol vs HTML Entity

## HTML Symbol

The **actual character** you see on the webpage.

Example

```text
©
```

---

## HTML Entity

The **code** you write in HTML to represent a symbol.

Example

```html
&copy;
```

---

## Why Use HTML Entities?

Entities prevent conflicts with HTML syntax and ensure correct rendering.

### Reserved Characters

```text
<  → Starts an HTML Tag

>  → Ends an HTML Tag

&  → Starts an HTML Entity
```

If written directly, the browser may interpret them as HTML instead of displaying them.

---

## Example

### Using the Symbol

```html
<p>
Copyright © 2026 Gourav
</p>
```

---

### Using the Entity

```html
<p>
Copyright &copy; 2026 Gourav
</p>
```

### Output

```text
Copyright © 2026 Gourav
```

---

## Easy Way to Remember

```text
Symbol = The actual picture

©
```

```text
Entity = The code that creates the picture

&copy;
```

> **Interview Tip:**  
Entities are safer because they always render correctly, while symbols may depend on character encoding.

---

# HTML Character Encoding

## What is Character Encoding?

> **Definition:**  
Character Encoding is a standard that tells the browser how to convert **binary data (0s and 1s)** into readable characters like:

- Letters
- Numbers
- Symbols
- Emojis

It tells the browser how to interpret and display characters correctly.

---

# Why is Character Encoding Needed?

Computers understand only:

```text
0 and 1
```

Character encoding maps those binary values to readable characters.

---

# UTF-8 (Universal Text Format)

> **Definition:**  
UTF-8 is the **recommended character encoding** for HTML5.

### HTML Code

```html
<meta charset="UTF-8">
```

### Supports

- ✅ Multiple Languages
- ✅ Currency Symbols
- ✅ Emojis
- ✅ Mathematical Symbols
- ✅ Special Characters

> **Interview Tip:**  
Always use:

```html
<meta charset="UTF-8">
```

because it supports almost every character used worldwide.

---

# Other Character Encodings

| Encoding | Purpose |
|-----------|---------|
| UTF-8 | Supports almost every language (Recommended) |
| ASCII | Supports only basic English characters |
| ISO-8859-1 | Older encoding for Western European languages |

---

# HTML vs XHTML (Interview Notes)

## What is XHTML?

> **Definition:**  
XHTML (**Extensible HyperText Markup Language**) is a **stricter, XML-based version of HTML**.

It requires well-formed and properly structured code.

---

# HTML vs XHTML

| HTML | XHTML |
|------|--------|
| Flexible | Strict |
| Tags can be lowercase or uppercase | Tags must be lowercase |
| Closing tags are optional for some elements | Every tag must be closed |
| Attribute values may be unquoted (`<input type=text>`) | Attribute values must be quoted (`<input type="text">`) |
| Empty tags don't need `/` | Empty tags must end with `/>` |
| More forgiving of errors | Errors are not tolerated |

---

## HTML Example

```html
<input type=text>

<br>
```

Valid in HTML.

---

## XHTML Example

```html
<input type="text" />

<br />
```

Required in XHTML.

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| HTML Layout Elements | Organize webpage into meaningful sections |
| Semantic Elements | Improve readability, SEO, and accessibility |
| Non-Semantic Elements | Generic containers (`<div>`, `<span>`) |
| HTML Entities | Display reserved characters safely |
| HTML Symbols | Display currency, mathematical, copyright symbols |
| UTF-8 | Recommended HTML5 character encoding |
| ASCII | Supports basic English characters only |
| XHTML | Stricter, XML-based version of HTML |







````md id="html-forms-webapi-notes"
# HTML Forms

> **Definition:**  
An **HTML Form** is used to collect user input and send it to a server for processing.

---

# Basic Form Syntax

```html
<form action="/login" method="post">

    <!-- Form Elements -->

</form>
```

---

# Important `<form>` Attributes

## `action`

> **Definition:**  
The `action` attribute specifies **where the form data should be sent** after submission.

### Example

```html
<form action="/login">
```

---

## `method`

> **Definition:**  
The `method` attribute specifies **how form data is sent to the server**.

### Example

```html
<form method="GET">
```

### Common Methods

| Method | Purpose |
|---------|----------|
| `GET` | Sends data through the URL (query string). Used for searching or fetching data. |
| `POST` | Sends data inside the request body. Used for login, registration, file upload, etc. |

> **Interview Tip:**  
Use **GET** for retrieving data and **POST** for sending sensitive or large data.

---

# Common Form Input Types

- `text`
- `password`
- `email`
- `number`
- `tel`
- `url`
- `date`
- `datetime-local`
- `file`
- `range`
- `radio`
- `checkbox`
- `submit`

---

# HTML Input Types

## `text`

Used to enter normal text.

```html
<input type="text">
```

---

## `password`

Hides the entered characters.

```html
<input type="password">
```

---

## `email`

Accepts only valid email addresses.

```html
<input type="email">
```

---

## `number`

Accepts numeric values only.

```html
<input type="number">
```

---

## `tel`

Used for phone numbers.

```html
<input type="tel">
```

---

## `url`

Accepts valid URLs.

```html
<input type="url">
```

---

## `datetime-local`

Allows users to select both date and time.

```html
<input type="datetime-local">
```

---

## `file`

Allows users to upload files.

### Example

```html
<form>

    <label for="myfile">
        Select a file:
    </label>

    <input
    type="file"
    id="myfile"
    name="myfile">

</form>
```

---

## `range`

Creates a slider.

### Example

```html
<form>

<label for="vol">
Volume (0 - 50)
</label>

<input
type="range"
id="vol"
name="vol"
min="0"
max="50">

</form>
```

---

## Radio Button

> **Definition:**  
A radio button allows the user to select **only one option** from a group.

### Important Point

All radio buttons with the **same `name`** belong to one group.

### Example

```html
<input
type="radio"
name="gender"
value="male">
Male

<input
type="radio"
name="gender"
value="female">
Female
```

---

## Checkbox

> **Definition:**  
A checkbox allows users to select **multiple options**.

### Example

```html
<input
type="checkbox"
name="skills"
value="HTML">
HTML

<input
type="checkbox"
name="skills"
value="CSS">
CSS

<input
type="checkbox"
name="skills"
value="JS">
JavaScript
```

---

# HTML Form Elements

---

## `<input>`

> **Definition:**  
The `<input>` element is used to take input from the user.

### Example

```html
<input type="text">
```

---

## `<label>`

> **Definition:**  
A label provides a name or description for an input field.

### Example

```html
<form>

<label for="fname">
First Name:
</label>

<input
type="text"
id="fname"
name="fname">

</form>
```

### Interview Tip

Clicking a label automatically focuses the corresponding input field.

---

## `<select>`

> **Definition:**  
The `<select>` element creates a dropdown list.

`<option>` defines the available choices.

### Example

```html
<select
name="country"
id="abc"
multiple>

<option>India</option>

<option>USA</option>

<option>Canada</option>

</select>
```

### `multiple`

Allows selecting more than one option.

---

## `<textarea>`

> **Definition:**  
Used to collect **multi-line text**.

### Example

```html
<textarea
name="message"
rows="10"
cols="30">

The cat was playing in the garden.

</textarea>
```

---

## `<fieldset>` & `<legend>`

> **Definition:**  
`<fieldset>` groups related form controls.

`<legend>` provides a title (caption) for the group.

### Example

```html
<form action="/action_page.php">

<fieldset>

<legend>Personalia</legend>

<label for="fname">
First Name:
</label>

<input
type="text"
id="fname"
name="fname"
value="John">

<label for="lname">
Last Name:
</label>

<input
type="text"
id="lname"
name="lname"
value="Doe">

<input
type="submit"
value="Submit">

</fieldset>

</form>
```

---

## `<datalist>`

> **Definition:**  
The `<datalist>` element provides predefined suggestions for an `<input>` field.

### Important Point

✅ Users can still type a value that is **not** present in the datalist.

### Example

```html
<label for="browser">
Choose a Browser:
</label>

<input
list="browsers"
id="browser"
name="browser">

<datalist id="browsers">

<option value="Chrome">

<option value="Firefox">

<option value="Edge">

<option value="Safari">

</datalist>
```

Typing **Opera** is still allowed even if it is not listed.

---

# HTML Input Attributes

## Common Input Attributes

| Attribute | Purpose |
|-----------|----------|
| `type` | Specifies the input type |
| `name` | Identifies the field when sending data to the backend |
| `id` | Unique identifier |
| `value` | Initial/default value |
| `placeholder` | Displays a hint |
| `required` | Makes the field mandatory |
| `readonly` | User cannot edit, but value is submitted |
| `disabled` | Completely disables the field |
| `maxlength` | Maximum number of characters |
| `max` | Maximum numeric value |
| `accept` | Restricts file upload types |

---

# `name` Attribute

> **Definition:**  
The `name` attribute identifies a form field when data is submitted.

The browser sends data as **key=value** pairs.

The backend uses the **name** as the key.

### Example

```html
<input
type="text"
name="username">
```

Submitted data:

```text
username=Gourav
```

---

# `readonly` vs `disabled`

## `readonly`

- User can **see** the value.
- User **cannot edit** it.
- Value **is submitted** to the backend.

### Example

```html
<input
type="text"
value="101"
readonly>
```

---

## `disabled`

- Completely inactive.
- User cannot interact.
- Value **is NOT submitted**.

### Example

```html
<input
type="text"
value="101"
disabled>
```

---

## Interview Difference

| `readonly` | `disabled` |
|------------|------------|
| Can read | Cannot interact |
| Cannot edit | Completely inactive |
| Value is submitted | Value is not submitted |

> **Use Case:**  
- `readonly` → User ID, Order ID
- `disabled` → Temporarily unavailable fields

---

# HTML Canvas Graphics

> **Definition:**  
The `<canvas>` element is used to draw graphics on a webpage using **JavaScript**.

Common Uses:

- Charts
- Games
- Animations
- Drawing Applications

---

# HTML Multimedia

> **Definition:**  
HTML Multimedia allows embedding **audio** and **video** directly into a webpage without external plugins like Flash.

---

# `<audio>`

Used to embed audio files.

### Example

```html
<audio
controls
loop
muted
autoplay
preload>

<source
src="song.mp3"
type="audio/mpeg">

Your browser does not support the audio element.

</audio>
```

### Common Attributes

- `controls`
- `autoplay`
- `loop`
- `muted`
- `preload`

---

# `<video>`

Used to embed videos.

### Example

```html
<video
width="500"
controls
autoplay
loop
poster="thumbnail.jpg">

<source
src="movie.mp4"
type="video/mp4">

Your browser does not support the video tag.

</video>
```

### Common Attributes

- `controls`
- `autoplay`
- `loop`
- `width`
- `height`
- `poster`

---

# `<source>`

> **Definition:**  
Allows the browser to choose a supported media format.

### Example

```html
<video controls>

<source
src="movie.mp4"
type="video/mp4">

<source
src="movie.webm"
type="video/webm">

</video>
```

---

# `<track>`

> **Definition:**  
Adds subtitles, captions, or descriptions to a video.

### Example

```html
<video controls>

<source
src="movie.mp4"
type="video/mp4">

<track
src="subtitles.vtt"
kind="subtitles"
srclang="en"
label="English">

</video>
```

---

# HTML - What is a Web API?

> **Definition:**  
A **Web API** allows **JavaScript** to communicate with the browser or external services to perform tasks.

HTML5 introduced several browser-provided APIs.

These are commonly called **HTML5 APIs** or **Web APIs**.

---

# Examples of HTML5/Web APIs

- Geolocation API
- Local Storage API
- Fetch API
- Drag & Drop API
- Web Workers API
- Canvas API
- History API

---

# Why Do We Need Web APIs?

JavaScript **alone cannot**:

- Access the user's location
- Store data in the browser
- Make HTTP requests
- Access the camera or microphone
- Set timers

Web APIs provide these capabilities.

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| `<form>` | Collects user input |
| `action` | Destination where form data is sent |
| `method` | Defines how data is sent (`GET` / `POST`) |
| Radio Button | Select only one option |
| Checkbox | Select multiple options |
| `<label>` | Describes an input field |
| `<select>` | Creates a dropdown |
| `<textarea>` | Multi-line text input |
| `<fieldset>` | Groups related form controls |
| `<legend>` | Caption for a fieldset |
| `<datalist>` | Provides input suggestions |
| `readonly` | Value submitted but not editable |
| `disabled` | Value not submitted |
| `<canvas>` | Draw graphics using JavaScript |
| `<audio>` | Embed audio |
| `<video>` | Embed video |
| `<source>` | Multiple media formats |
| `<track>` | Adds subtitles/captions |
| Web API | Gives JavaScript access to browser features |
````
