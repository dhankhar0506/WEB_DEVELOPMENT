
# HTML Canvas Graphics

> **Definition:**  
The `<canvas>` element is used to draw graphics on a webpage using **JavaScript**.

Unlike normal HTML elements, the `<canvas>` itself does **not draw anything**. JavaScript is required to draw shapes, text, images, or animations on it.

### Syntax

```html
<canvas id="myCanvas" width="400" height="200">
Your browser does not support the canvas element.
</canvas>
```

### Common Uses

- Charts & Graphs
- Games
- Animations
- Drawing Applications
- Image Editing
- Signatures

> **Interview Tip:**  
The `<canvas>` element is just a drawing area. **JavaScript** is required to create graphics.

---

# HTML Multimedia

> **Definition:**  
HTML Multimedia allows embedding **audio** and **video** directly into a webpage without using external plugins like Flash.

HTML5 introduced built-in multimedia support through:

- `<audio>`
- `<video>`

---

# `<audio>`

> **Definition:**  
The `<audio>` element is used to embed audio files in a webpage.

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

| Attribute | Purpose |
|-----------|---------|
| `controls` | Displays audio controls |
| `autoplay` | Starts automatically |
| `loop` | Plays repeatedly |
| `muted` | Starts in muted mode |
| `preload` | Loads audio before playing |

---

# `<video>`

> **Definition:**  
The `<video>` element is used to embed videos in a webpage.

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

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows video controls |
| `autoplay` | Starts automatically |
| `loop` | Repeats the video |
| `width` | Video width |
| `height` | Video height |
| `poster` | Thumbnail image before playback |

> **Interview Tip:**  
The `poster` attribute displays an image before the video starts playing.

---

# `<source>`

> **Definition:**  
The `<source>` element allows the browser to choose a supported media format.

If the browser cannot play the first format, it automatically tries the next one.

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

### Why Use Multiple `<source>` Tags?

Different browsers support different video/audio formats.

---

# `<track>`

> **Definition:**  
The `<track>` element adds subtitles, captions, or descriptions to a video.

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

### Common Attributes

| Attribute | Purpose |
|-----------|---------|
| `src` | Subtitle file path |
| `kind` | Type of track (subtitles, captions, descriptions) |
| `srclang` | Language of subtitles |
| `label` | Display name shown to users |

---

# HTML - What is a Web API?

> **Definition:**  
A **Web API** is a browser-provided interface that allows **JavaScript** to communicate with browser features or external services.

HTML5 introduced several built-in browser APIs.

These are commonly called:

- HTML5 APIs
- Browser APIs
- Web APIs

---

# Common Web APIs

- DOM API
- Fetch API
- Local Storage API
- Geolocation API
- Drag & Drop API
- Canvas API
- History API
- Clipboard API
- Notification API
- WebSocket API
- Web Worker API
- Media API

---

# Why Do We Need Web APIs?

JavaScript **alone cannot**:

- Access the user's location
- Store data in the browser
- Make HTTP requests
- Access the camera or microphone
- Display browser notifications
- Use the clipboard
- Set timers
- Run background threads

Web APIs provide these capabilities.

---

# Interview Summary

| Topic | Purpose |
|--------|---------|
| `<canvas>` | Draw graphics using JavaScript |
| `<audio>` | Embed audio files |
| `<video>` | Embed videos |
| `<source>` | Provide multiple media formats |
| `<track>` | Add subtitles and captions |
| Web API | Gives JavaScript access to browser features |
| DOM API | Manipulate HTML elements |
| Fetch API | Send HTTP requests |
| Local Storage API | Store data in the browser |
| Geolocation API | Get user's location |
| WebSocket API | Real-time communication |
| Web Worker API | Run heavy tasks in the background |
| Media API | Access camera and microphone |