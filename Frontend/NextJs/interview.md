# Next.js Interview Notes

---

# 1. What is App Router?

**App Router** is the modern routing system in Next.js that uses the `app` directory and file-system-based routing.

It provides special files such as:

* `page.tsx`
* `layout.tsx`
* `loading.tsx`
* `error.tsx`
* `route.ts`

These files define the behavior and UI of routes.

---

# 2. What is `page.tsx`?

In the Next.js App Router, `page.tsx` is a special file that defines the **UI for a route**.

```text
page.tsx
   │
   ├── TypeScript + JSX
   │
   └── Special Next.js filename
```

---

# 3. `layout.tsx`

A **layout** is used for UI that should be shared across multiple pages.

---

# 4. Server Component vs Client Component

## Server Component

A **Server Component** runs/renders on the server and is good for:

* Fetching data
* Accessing backend resources
* Rendering non-interactive UI

---

## Client Component

A **Client Component** also gets server-rendered initially, but its JavaScript runs in the browser so it can handle:

* State
* Events
* Effects
* Browser APIs

> In the App Router, components are **Server Components by default**.

### Major Advantage

A Server Component can access server-side resources directly.

```text
Request /students
       ↓
Server Component executes on server
       ↓
connectDB()
       ↓
MongoDB
       ↓
Student.find()
       ↓
Server renders result
       ↓
Browser receives rendered UI
```

---

# 5. By Default — Next.js

```text
Next.js App Router
       ↓
Components are Server Components by default
       ↓
Can directly access server resources
       ↓
DB / secrets / filesystem / server code
```

---

# 6. When Do You Need Browser Interactivity?

You need a Client Component when you use browser/client-side features such as:

```text
useState
useEffect
onClick
onChange
onSubmit
localStorage
window
document
```

---

# 7. `"use client"`

`"use client"` tells Next.js that a component needs client-side/browser features such as:

* State
* Effects
* Event handlers
* Browser APIs

`"use client"` is a Next.js directive used to mark a component as a **Client Component**.

We use it when the component needs client-side features such as:

* React state
* React effects
* Event handlers
* Browser APIs

---

# 8. How Does Only Server-Side Rendering Work?

### Flow

```text
1. User requests /products
          ↓
2. Request goes to server
          ↓
3. Server gets data from DB
          ↓
4. Server generates HTML
          ↓
5. Server sends HTML response
          ↓
6. Browser receives HTML + CSS
          ↓
7. Browser paints the page
```

### Example: User Navigates to `/products/2`

```text
User clicks
     ↓
Request → Server
     ↓
Server gets product 2 from DB
     ↓
Server generates NEW HTML
     ↓
Sends HTML to browser
     ↓
Browser loads/renders new page
```

> A Server Component can generate UI and data, but browser interactivity requires JavaScript running in the browser.

The browser can display a button, but if there is no client-side JavaScript attached, clicking it won't run React state logic.

---

# 9. What is a Client Component?

Client Components are used when we need **browser-side interactivity**.

We mark them with:

```js
"use client";
```

They allow us to use:

* React state
* Effects
* Event handlers
* Browser APIs such as `window`
* `localStorage`

---

# 10. CSR — Client-Side Rendering

**CSR** means the browser receives HTML, CSS, and JavaScript.

JavaScript/React runs in the browser to generate/update the UI, and the browser finally paints it.

### CSR Flow

```text
Server
   ↓
HTML + CSS + JS
   ↓
Browser
   ↓
JavaScript / React executes
   ↓
Creates / updates DOM
   ↓
Browser paints UI
   ↓
User interacts
   ↓
React handles events/state
   ↓
If data needed → API call
```

## Benefits

1. **Highly interactive UI** — buttons, modals, dropdowns, filters, etc.
2. **Fast UI updates after load** — React can update only the necessary part.
3. **No full page reload for every interaction.**
4. **Great for state management** — `useState`, Redux, Context, etc.
5. **Browser APIs available** — `localStorage`, `window`, `document`, etc.

---

# 11. SSR — Server-Side Rendering

The server generates the **initial HTML with the actual content** and sends it to the browser.

The browser paints that HTML.

> Server generates the initial page content and sends it to the browser.

## Benefits

1. Better initial content delivery
2. **Better SEO** — search engines can receive page content directly in the HTML.
3. **Good for slower devices** — less initial content-generation work has to happen in the user's browser.
4. Good for static data like blog pages, etc.
5. **Security** — DB credentials, secret keys, etc. stay on the server.

---

# 12. How SEO / Search Engines Work

### What happens when Google finds your website?

Example:

```text
https://shop.com/products/iphone
```

A search engine crawler such as Googlebot requests this URL, similar to a browser.

Google analyzes the returned page to understand things such as:

* Page title
* Headings
* Product name
* Description
* Links
* Structured data
* Other page content

It then uses that information for **indexing and ranking**.

### Why SSR Helps SEO

SSR improves SEO because the server sends meaningful page content in the initial HTML response.

Search-engine crawlers can immediately discover and understand:

* Headings
* Text
* Links
* Metadata
* Other content

without depending entirely on client-side JavaScript to generate the page.

---

# 13. Does `"use client"` Disable SSR?

> **`"use client"` does NOT automatically mean "no SSR" or "bad SEO."**

In Next.js, a Client Component can still be **pre-rendered on the server** for the initial page load, and then hydrated in the browser.

> `"use client"` does not disable server pre-rendering. It creates a client boundary so the component can be hydrated and interactive in the browser.

For SEO-important dynamic data, prefer fetching/rendering it on the server rather than waiting for `useEffect` after page load.

---

# 14. SSG — Static Site Generation

**SSG** means Next.js generates the page in advance, usually at **build time**, and stores it.

When a user requests that page, the already-generated page is served instead of generating it again.

---

## Why Use SSG?

Use SSG when content doesn't change frequently, such as:

* About Us
* Privacy Policy
* Terms & Conditions
* Documentation
* Static blog/content pages

### SSG Flow

```text
Build time
    ↓
Next.js gets data
    ↓
Generates static page
    ↓
Stores/caches it
    ↓
Users get same generated version
```

---

# 15. ISR — Incremental Static Regeneration

**ISR** is a static page like SSG, but Next.js can periodically **revalidate and update** the static/cached content without rebuilding and redeploying the entire application.

Example:

```text
Keep serving the static/cached page
          ↓
After 60 seconds
          ↓
Page becomes eligible for revalidation
          ↓
Next.js revalidates
          ↓
Gets latest data
          ↓
Updates cached/generated version
```

---

# 16. What is Caching?

**Caching** means Next.js stores a previously fetched/generated result so it can reuse it instead of doing the same work again.

> The Next.js built-in server caching being discussed is for server-side data/rendering work.

If 1,000 users request the same data, repeatedly fetching it can be unnecessary.

### Benefits

* Faster responses
* Fewer database/API calls
* Less server work
* Lower load on external APIs

---

# 17. What is Revalidation?

**Revalidation** means refreshing/invalidation of cached data so Next.js can get fresh data and update what it serves.

Example:

```text
Cache this data
      ↓
After 60 seconds
      ↓
Eligible to be refreshed/revalidated
```

---

# 18. Route Handlers vs Server Actions

## Route Handlers

> **Route Handlers are used when we want to expose an HTTP API endpoint.**

The client sends an HTTP request, Next.js maps it to the appropriate Route Handler, and the handler performs server operations and returns a response.

## Server Actions

> **Server Actions allow us to invoke server-side functions from our Next.js UI without manually creating and calling an API endpoint.**

The Server Action can directly access server resources such as the database.

---

# 19. What is `not-found.tsx`?

`not-found.tsx` is a special Next.js file used to show a **custom 404 UI** when a requested resource/page is not found.

---

# 20. How Do You Create GET/POST APIs?

## GET

```js
export async function GET() {
    dbConnect();

    const students = await Student.find();

    return Response.json(students);
}
```

## POST

```js
export async function POST(request: Request) {
    dbConnect();

    const body = await request.json();

    const student = await Student.create({
        name: body.name,
        email: body.email
    });

    return Response.json(student, {
        status: 201
    });
}
```

---

# 21. Middleware / Proxy in Next.js

**Proxy** is code that runs before a request reaches your page/route, allowing you to check the request and decide whether to:

* Continue
* Redirect
* Rewrite
* Modify request/response behavior

Proxy/Middleware is useful for request-level logic such as:

* Authentication checks
* Redirects
* Rewrites
* Locale/language routing
* Adding/changing headers

### Flow

```text
Client
   ↓
GET /api/users
   ↓
proxy.ts
← if matcher includes this route
   ↓
Check token
   ↓
NextResponse.next()
← "Allow this request to continue to its normal Next.js destination."
   ↓
app/api/users/route.ts
   ↓
GET()
   ↓
DB
   ↓
Response
```

---

# 22. Can a Server Component Import a Client Component?

**Yes.** ✅

A Server Component can import and render a Client Component.

This is actually a very common Next.js pattern.

---

# 23. Can a Client Component Import a Server Component?

**Generally, No.**

A Client Component cannot directly import a Server Component.

---

# 24. What is a Dynamic Route in Next.js?

A **dynamic route** is a route where part of the URL can change dynamically.

Examples:

* Product ID
* User ID
* Username
* Blog slug

Example:

```text
/products/123
/products/456
/users/gourav
/blog/nextjs-routing
```

---

# 25. How Does `[...slug]` Work in Next.js?

`[...slug]` is a **Catch-all Dynamic Route**.

It captures multiple URL segments inside one dynamic route.

### Examples

```text
/docs/javascript
/docs/javascript/arrays
/docs/javascript/arrays/map
/docs/javascript/arrays/filter
/docs/react
/docs/react/hooks
/docs/react/hooks/useState
```

### Folder Structure

```text
docs/
└── [...slug]/
    └── page.tsx
```

> After `/docs`, it catches all the parameters/segments.

---

## Optional Catch-All Route `[[...slug]]`

`[[...slug]]` also matches the route **without any additional segment**.

```text
[[...slug]]

/docs                         ✅
/docs/react                   ✅
/docs/react/hooks             ✅
/docs/react/hooks/useState    ✅
```

---

# 26. What Are Nested Routes?

**Nested routes** mean creating routes inside other routes using nested folders.

### Example

```text
app/
└── dashboard/
    ├── page.tsx
    │
    ├── profile/
    │   └── page.tsx
    │
    └── settings/
        └── page.tsx
```

---

# 27. What Are Route Groups in Next.js?

**Route Groups** allow us to organize routes into folders without adding that folder name to the URL.

### Folder Structure

```text
app/
└── (auth)/
    ├── login/
    │   └── page.tsx
    │
    └── register/
        └── page.tsx
```

The `(auth)` folder does **not** appear in the URL.

```text
/auth/login      ❌
/auth/register   ❌

/login           ✅
/register        ✅
```

---

# 28. How Do You Create a Custom 404 Page?

`not-found.tsx` is a special Next.js file used to show a custom UI when a page/resource is not found (`404`).

---

# 29. How Do You Navigate Between Pages in Next.js?

Navigation can be performed using different approaches.

---

## Using `<Link>` — Most Common

```jsx
import Link from "next/link";

export default function Home() {
    return (
        <Link href="/about">
            About
        </Link>
    );
}
```

---

## Using `useRouter()`

Sometimes you want to navigate **after some logic happens**.

Example:

```text
Login successful
      ↓
Navigate to dashboard
```

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    function handleLogin() {

        // login logic...

        router.push("/dashboard");
    }

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}
```

---

# 30. What is `usePathname()`?

`usePathname()` gives you the **current URL pathname**.

Example URL:

```text
https://example.com/products/iphone?color=black
```

```js
const pathname = usePathname();

console.log(pathname);
```

Output:

```text
/products/iphone
```

---

# 31. What is `useSearchParams()`?

`useSearchParams()` is used to read **query/search parameters** from the URL.

Example:

```text
/products?category=mobile&sort=price
```

```js
const searchParams = useSearchParams();

const category = searchParams.get("category");
const sort = searchParams.get("sort");
```

---

# 32. What Are Route Handlers?

**Route Handlers** allow us to create HTTP API endpoints in the Next.js App Router.

---

# 33. What is `route.ts`?

`route.ts` is a special Next.js file used to define **HTTP request handlers** for a route.

---

## API Routes vs Route Handlers

| API Routes           | Route Handlers                  |
| -------------------- | ------------------------------- |
| Pages Router         | App Router                      |
| `pages/api`          | `app/.../route.ts`              |
| `req`, `res` style   | Web `Request` / `Response` APIs |
| Older routing system | App Router approach             |

---

# 34. Why is Next.js Good for SEO?

Next.js is good for SEO because it can generate useful HTML content and metadata on the server/static output.

This allows search engines to understand the page without depending entirely on client-side JavaScript.

---

# 35. How Does `<Image>` Optimize Images?

The Next.js `Image` component can provide:

* Appropriate image sizing
* Responsive image delivery
* Lazy loading by default for appropriate images
* Modern optimized formats where supported/configured
* On-demand image optimization

---

# 36. `<img>` vs Next.js `<Image>`

| `<img>`                                 | Next.js `<Image>`                                   |
| --------------------------------------- | --------------------------------------------------- |
| Standard browser image element          | Next.js optimized image component                   |
| You manage optimization yourself        | Built-in optimization features                      |
| Lazy loading can be configured manually | Lazy loading handled by default for suitable images |
| Responsive sizing requires manual work  | Supports responsive image sizing                    |
| Dimensions may be omitted               | Dimensions/import information helps reserve space   |

---

# 37. What is Metadata API?

The **Metadata API** allows you to define SEO-related metadata for your Next.js pages.

Metadata can include:

* Title
* Description
* Open Graph information
* Robots settings
* Icons
* And more

---

# 38. What is Dynamic Import using `next/dynamic`?

`next/dynamic` is used to **lazy-load a component**.

Its JavaScript is loaded separately when that component is needed instead of being part of the initial JavaScript bundle.

It enables **code splitting**, so heavy client-side components can be loaded separately instead of increasing the initial JavaScript bundle.

---

# 39. What is Hydration in Next.js?

**Hydration** means React attaches client-side JavaScript and event handlers to the server-rendered HTML, making the page interactive.

In simple words:

> Hydration is the process where React makes server-rendered HTML interactive by attaching client-side JavaScript behavior to it.

### Hydration Flow

```text
User requests page
       ↓
Next.js Server
       ↓
Generate initial HTML
       ↓
Browser receives HTML
       ↓
User can see initial content
       ↓
Client JS loads
       ↓
React starts in browser
       ↓
React matches initial client output
with server-rendered HTML
       ↓
HYDRATION
       ↓
React connects state/events/behavior
       ↓
Page becomes interactive
```

---

# 40. What is a Hydration Error?

A **hydration error** occurs when the HTML/content React expects on the client is different from what was rendered on the server.

### Simple Flow

```text
Server-rendered HTML
        ↓
Browser receives HTML
        ↓
React runs on client
        ↓
Client output ≠ Server output
        ↓
Hydration Error
```

---

# ⭐ Quick Interview Revision

| Topic                   | One-Line Definition                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------ |
| **App Router**          | Modern Next.js routing system using the `app` directory.                             |
| **`page.tsx`**          | Defines the UI for a route.                                                          |
| **`layout.tsx`**        | Shared UI across multiple pages.                                                     |
| **Server Component**    | Runs/renders on the server and can access server resources.                          |
| **Client Component**    | Used for browser interactivity, state, effects, and browser APIs.                    |
| **`"use client"`**      | Marks a component as a Client Component.                                             |
| **CSR**                 | Rendering/updating UI primarily in the browser using JavaScript.                     |
| **SSR**                 | Server generates the initial HTML and sends it to the browser.                       |
| **SSG**                 | Page is generated ahead of time, usually at build time.                              |
| **ISR**                 | Static content that can be revalidated and updated without a full rebuild.           |
| **Caching**             | Reuses previously fetched/generated results.                                         |
| **Revalidation**        | Refreshes or invalidates cached data to get fresh content.                           |
| **Route Handler**       | Creates HTTP API endpoints in the App Router.                                        |
| **Server Action**       | Invokes server-side functions from the UI without manually creating an API endpoint. |
| **`not-found.tsx`**     | Custom UI for not-found/404 situations.                                              |
| **Dynamic Route**       | Route containing dynamic URL segments.                                               |
| **`[...slug]`**         | Catch-all dynamic route.                                                             |
| **`[[...slug]]`**       | Optional catch-all dynamic route.                                                    |
| **Nested Route**        | Route created inside another route folder.                                           |
| **Route Group**         | Organizes routes without adding the folder name to the URL.                          |
| **`useRouter()`**       | Programmatic navigation.                                                             |
| **`usePathname()`**     | Gets the current pathname.                                                           |
| **`useSearchParams()`** | Reads URL query parameters.                                                          |
| **`route.ts`**          | Defines HTTP request handlers.                                                       |
| **Metadata API**        | Defines SEO-related metadata.                                                        |
| **`next/dynamic`**      | Dynamically imports/lazy-loads components.                                           |
| **Hydration**           | React attaches client-side behavior to server-rendered HTML.                         |
| **Hydration Error**     | Client-rendered output doesn't match server-rendered HTML.                           |

---

# 🔥 Core Next.js Flow

```text
Next.js App Router
        ↓
Server Components by default
        ↓
Server can fetch data / access DB
        ↓
Generate initial UI
        ↓
HTML sent to Browser
        ↓
Browser paints UI
        ↓
Client Components hydrate
        ↓
React attaches state/events
        ↓
Page becomes interactive
```

---

# 🎯 Highest-Priority Interview Topics

For interview revision, focus especially on:

1. **App Router**
2. **Server vs Client Components**
3. **`"use client"`**
4. **SSR vs CSR**
5. **SSG vs ISR**
6. **Caching & Revalidation**
7. **Route Handlers**
8. **Server Actions**
9. **Dynamic Routes**
10. **Catch-all & Optional Catch-all Routes**
11. **Nested Routes**
12. **Route Groups**
13. **`useRouter()`**
14. **`usePathname()`**
15. **`useSearchParams()`**
16. **SEO in Next.js**
17. **`<Image>`**
18. **Metadata API**
19. **`next/dynamic`**
20. **Hydration & Hydration Errors**
