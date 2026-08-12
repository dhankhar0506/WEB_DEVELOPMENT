# HTML Forms

> **Definition:**
> An **HTML Form** is used to collect user input and send it to a server for processing.

---

## Basic Form Syntax

```html
<form action="/login" method="post">

    <!-- Form Elements -->

</form>
```

---

# Important `<form>` Attributes

## `action`

> **Definition:**
> The `action` attribute specifies **where the form data should be sent** after submission.

### Example

```html
<form action="/login">
```

---

## `method`

> **Definition:**
> The `method` attribute specifies **how form data is sent to the server**.

### Example

```html
<form method="GET">
```

### Common Methods

| Method | Purpose                                                                             |
| ------ | ----------------------------------------------------------------------------------- |
| `GET`  | Sends data through the URL (query string). Used for searching or fetching data.     |
| `POST` | Sends data inside the request body. Used for login, registration, file upload, etc. |

> **Interview Tip:**
> Use **GET** for retrieving data and **POST** for sending sensitive or large data.

---

# Common Form Input Types

* `text`
* `password`
* `email`
* `number`
* `tel`
* `url`
* `date`
* `datetime-local`
* `file`
* `range`
* `radio`
* `checkbox`
* `submit`

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

Accepts email addresses and provides built-in browser validation for email-like input.

```html
<input type="email">
```

---

## `number`

Used for numeric input.

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

Used for URL input.

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

# Radio Button

> **Definition:**
> A radio button allows the user to select **only one option** from a group.

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

# Checkbox

> **Definition:**
> A checkbox allows users to select **multiple options**.

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

## `<input>`

> **Definition:**
> The `<input>` element is used to take input from the user.

### Example

```html
<input type="text">
```

---

## `<label>`

> **Definition:**
> A label provides a name or description for an input field.

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
> The `<select>` element creates a dropdown list.

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
> Used to collect **multi-line text**.

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
> `<fieldset>` groups related form controls.

> `<legend>` provides a title (caption) for the group.

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
> The `<datalist>` element provides predefined suggestions for an `<input>` field.

### Important Point

> Users can still type a value that is **not** present in the datalist.

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

| Attribute     | Purpose                                               |
| ------------- | ----------------------------------------------------- |
| `type`        | Specifies the input type                              |
| `name`        | Identifies the field when sending data to the backend |
| `id`          | Unique identifier                                     |
| `value`       | Initial/default value                                 |
| `placeholder` | Displays a hint                                       |
| `required`    | Makes the field mandatory                             |
| `readonly`    | User cannot edit, but value is submitted              |
| `disabled`    | Completely disables the field                         |
| `maxlength`   | Maximum number of characters                          |
| `max`         | Maximum numeric value                                 |
| `accept`      | Restricts file upload types                           |

---

# `name` Attribute

> **Definition:**
> The `name` attribute identifies a form field when data is submitted.

The browser sends data as **key=value** pairs.

The backend uses the **`name`** as the key.

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

* User can **see** the value.
* User **cannot edit** it.
* Value **is submitted** to the backend.

### Example

```html
<input
    type="text"
    value="101"
    readonly>
```

---

## `disabled`

* Completely inactive.
* User cannot interact.
* Value **is NOT submitted**.

### Example

```html
<input
    type="text"
    value="101"
    disabled>
```

---

## Interview Difference

| `readonly`         | `disabled`             |
| ------------------ | ---------------------- |
| Can read           | Cannot interact        |
| Cannot edit        | Completely inactive    |
| Value is submitted | Value is not submitted |

> **Use Case:**
>
> * `readonly` → User ID, Order ID
> * `disabled` → Temporarily unavailable fields
