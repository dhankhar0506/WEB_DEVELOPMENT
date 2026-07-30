# Web APIs (HTML5 Browser APIs)

> **Definition:**  
**Web APIs** are **browser-provided APIs** that JavaScript uses to interact with browser features and external services.

> **Remember:**  
HTML creates the webpage, CSS styles it, and **JavaScript uses Web APIs to access browser capabilities**.

---

# Common Web APIs

- Fetch API
- DOM API
- Geolocation API
- Local Storage API
- Canvas API
- History API
- Clipboard API
- Drag and Drop API
- Notification API
- WebSocket API
- Web Worker API
- Media API

---

# DOM API

> **Definition:**  
The **DOM (Document Object Model) API** is a set of JavaScript methods and properties provided by the browser to **access, read, modify, create, and delete HTML elements** on a webpage.

### Simple Flow

```text
HTML + CSS
     │
Creates the Web Page
     │
JavaScript
     │
Uses DOM API
     │
Read • Update • Create • Delete HTML Elements
```

### Common DOM Operations

- Read HTML Elements
- Change Text
- Change CSS Styles
- Add New Elements
- Remove Elements
- Handle Events

### Example

```javascript
document.getElementById("title").innerHTML = "Hello World";
```

---

# Fetch API

> **Definition:**  
The **Fetch API** is a Web API provided by the browser that allows JavaScript to send **HTTP requests** to a server and receive data **asynchronously** using **Promises**.

### Supported HTTP Methods

- GET
- POST
- PUT
- DELETE
- PATCH

### Example

```javascript
fetch("https://api.example.com/users")
.then(response => response.json())
.then(data => console.log(data));
```

### Common Uses

- Fetch User Data
- Login
- Registration
- Upload Data
- Call REST APIs

---

# HTTP vs API

## HTTP

> **Definition:**  
**HTTP (HyperText Transfer Protocol)** is the communication protocol used to transfer requests and responses between the client and the server.

### Responsibility

- Carries Requests
- Carries Responses

---

## API

> **Definition:**  
An **API (Application Programming Interface)** is a collection of endpoints or services provided by the server that define what operations can be performed.

### Example Endpoints

```text
/login

/users

/products

/orders
```

---

## HTTP vs API

| HTTP | API |
|------|-----|
| Communication Protocol | Collection of Endpoints/Services |
| Transfers Requests & Responses | Defines available operations |
| Example: GET, POST | Example: `/login`, `/users` |

> **Easy Analogy**

```text
HTTP = Road

API = Destination (Restaurant, Hospital, Shop)
```

HTTP takes you to the API.

---

# Local Storage API

> **Definition:**  
The **Local Storage API** allows JavaScript to store data in the user's browser as **key-value pairs**.

### Features

- Stores Data in Browser
- Data persists even after:
  - Browser closes
  - System restarts
- Remains until manually removed

### Example

```javascript
localStorage.setItem("username", "Gourav");

localStorage.getItem("username");
```

### Common Uses

- Theme Preference
- Login Status
- Shopping Cart
- User Settings

---

# Geolocation API

> **Definition:**  
The **Geolocation API** provides the user's current location.

### Returns

- Latitude
- Longitude

### Common Uses

- Google Maps
- Food Delivery Apps
- Ride Booking Apps
- Weather Apps

### Example

```javascript
navigator.geolocation.getCurrentPosition();
```

---

# Drag and Drop API

> **Definition:**  
Allows HTML elements or files to be dragged and dropped.

### Real-Life Example

Dragging a file into **Gmail** to upload it.

### Common Uses

- File Upload
- Kanban Boards
- Trello-like Applications

---

# History API

> **Definition:**  
The **History API** allows JavaScript to control the browser's history.

### Common Operations

- Back
- Forward
- Change URL without page reload

### Example

```javascript
history.back();

history.forward();
```

### Used In

- React Router
- Single Page Applications (SPA)

---

# Notification API

> **Definition:**  
Allows websites to display browser notifications.

### Example

```
🔔 New Message Received
```

### Common Uses

- Gmail
- WhatsApp Web
- Slack
- Calendar Reminders

---

# WebSocket API

> **Definition:**  
The **WebSocket API** enables **two-way real-time communication** between the client and the server.

Unlike HTTP, the connection remains open, allowing both the client and server to send data instantly.

### Common Uses

- Chat Applications
- Live Notifications
- Online Games
- Stock Market Updates

### Example

```text
Client ↔ Server
```

---

# Web Worker API

> **Definition:**  
The **Web Worker API** allows JavaScript to run **heavy or time-consuming tasks** in a separate background thread.

This keeps the main UI thread responsive and prevents the webpage from freezing.

---

# Why Do We Need Web Workers?

Normally, JavaScript is **single-threaded**, meaning it executes **one task at a time** on the main thread.

### Without Web Worker

```text
User Click
      │
Heavy Calculation (10 sec)
      │
Page Freezes ❌
```

The browser cannot respond to:

- Button Clicks
- Scrolling
- Typing

until the task finishes.

---

# With Web Worker

```text
Main Thread (UI)

│
├── Button Click ✅
├── Scrolling ✅
└── Typing ✅

        │

Web Worker (Background)

│
Heavy Calculation
```

The UI remains smooth while the worker performs heavy tasks.

---

# Why Can't a Web Worker Access the DOM?

Only the **main thread** is allowed to update the webpage.

If multiple threads modified the DOM at the same time, it could cause:

- Inconsistent Updates
- Race Conditions
- Unexpected Behavior

### Workflow

```text
Main Thread
      │
Creates Worker
      │
Worker Performs Heavy Task
      │
Worker Sends Result
      │
Main Thread Updates DOM
```

> **Interview Tip:**  
A Web Worker **cannot access the DOM directly**. It must send the result back to the main thread, which updates the UI.

---

# Media API

> **Definition:**  
The **Media API** provides access to the user's **camera** and **microphone**.

### Common Uses

- Video Calling
- Online Meetings
- QR Code Scanner
- Camera Apps
- Voice Recording

### Example

```javascript
navigator.mediaDevices.getUserMedia();
```

---

# Interview Summary

| API | Purpose |
|------|---------|
| DOM API | Read, create, update, and delete HTML elements |
| Fetch API | Send HTTP requests to servers |
| Local Storage API | Store data in the browser permanently |
| Geolocation API | Get user's latitude and longitude |
| Drag and Drop API | Drag and drop elements/files |
| History API | Control browser history |
| Notification API | Display browser notifications |
| WebSocket API | Two-way real-time communication |
| Web Worker API | Run heavy tasks in the background |
| Media API | Access camera and microphone |

---

# Quick Revision

```text
DOM API         → Manipulate HTML

Fetch API       → Call Server APIs

Local Storage   → Store Browser Data

Geolocation     → Get User Location

Drag & Drop     → Drag Files/Elements

History API     → Browser Navigation

Notification    → Browser Notifications

WebSocket       → Real-Time Communication

Web Worker      → Background Thread

Media API       → Camera & Microphone
```