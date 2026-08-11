## What is App Router?
-> App Router is the modern routing system in Next.js that uses the app directory and file-system-based routing. 
-> In which we have  special files such as page.tsx, layout.tsx, loading.tsx, error.tsx, and route.ts define the behavior and UI of those routes.

## What is page.tsx?
-> In the Next.js App Router, page.tsx is a special file that defines the UI for a route.
-> page.tsx ()
    page.tsx
    │    │
    │    └── TypeScript + JSX
    │
    └── Special Next.js filename

## layout.tsx
 A layout is for UI that should be shared across multiple pages.


## Server Component vs Client Component in Next.js
-> Server Component → runs/renders on the server and is good for fetching data, accessing backend resources, and rendering non-interactive UI.

## Client Component in Next.js
-> Client Component → also gets server-rendered initially, but its JavaScript runs in the browser so it can handle state, events, effects, and browser APIs.

> In the App Router, components are Server Components by default.
> A major advantage is that a Server Component can access server-side resources directly.
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



## By default(NEXT.JS)
    Next.js App Router
            ↓
    Components are Server Components by default
            ↓
    Can directly access server resources
            ↓
    DB / secrets / filesystem / server code

## When you need browser interactivity:
    useState
    useEffect
    onClick
    onChange
    onSubmit
    localStorage
    window
    document

## use client" 
-> tells Next.js that this component needs client-side/browser features such as state, effects, event handlers, or browser APIs.
-> "use client" is a Next.js directive used to mark a component as a Client Component. We use it when the component needs client-side features such as React state, effects, event handlers, or browser APIs.

## How only server side rendring works , no client side rendring ?
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

> Then suppose the user clicks a link to /products/2:

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
    Browser loads/renders new pag

-> A Server Component can generate UI and data, but browser interactivity requires JavaScript running in the browser.
-> The browser can display the button, but if there's no client-side JavaScript attached, clicking it won't run React state logic like

## What is a Client Component?
-> Client Components are used when we need browser-side interactivity. 
-> We mark them with "use client". 
-> They allow us to use React state, effects, event handlers, and browser APIs such as window and localStorage.

## CSR — Client-Side Rendering
-> CSR means the browser receives HTML, CSS and JavaScript. JavaScript/React runs in the browser to generate/update the UI, and the browser finally paints it.
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
> Benifits
1. Highly interactive UI — buttons, modals, dropdowns, filters, etc.
2. Fast UI updates after load — React can update only the necessary part.
3. No full page reload for every interaction.
4. Great for state management — useState, Redux, Context, etc.
5. Browser APIs available — localStorage, window, document, etc.

## SSR
-> The server generates the initial HTML with the actual content and sends it to the browser. The browser paints that HTML.
-> Server generates the initial page content and sends it to the browser.

1.  
2. Better SEO — search engines can receive page content directly in the HTML.
3. Good for slower devices — less initial content-generation work has to happen in the user's browser.
4. good for static data like blog page etc
5. Security — DB credentials, secret keys, etc. stay on the server.

## how SEO/search engines work
> What happens when Google finds your website?
    - https://shop.com/products/iphone
-> A search engine crawler (such as Googlebot) requests this URL, similar to a browser
-> Google analyzes the returned page to understand things such as 
    Page title
    Headings
    Product name
    Description
    Links
    Structured data
    Other page content
-> It then uses that information for indexing and ranking.
-> SR improves SEO because the server sends meaningful page content in the initial HTML response. Search-engine crawlers can immediately discover and understand headings, text, links, metadata, and other content without depending entirely on client-side JavaScript to generate the page.

> "use client" does NOT automatically mean "no SSR" or "bad SEO."
-> In Next.js, a Client Component can still be pre-rendered on the server for the initial page load, and then hydrated in the browser.
-> "use client" does not disable server pre-rendering. It creates a client boundary so the component can be hydrated and interactive in the browser. For SEO-important dynamic data, prefer fetching/rendering it on the server rather than waiting for useEffect after page load.

## SSG — Static Site Generation
-> SSG means Next.js generates the page in advance, usually at build time, and stores it. When a user requests that page, the already-generated page is served instead of generating it again.

## Why use SSG?
->Use it when content doesn't change frequently, such as:
    About Us
    Privacy Policy
    Terms & Conditions
    Documentation
    Static blog/content pages

    Build time
    ↓
    Next.js gets data
    ↓
    Generates static page
    ↓
    Stores/caches it
    ↓
    Users get same generated version

## ISR — Incremental Static Regeneration
-> ISR is a static page like SSG, but Next.js can periodically revalidate and update the static/cached content without rebuilding and redeploying the entire application.
-> Keep serving the static/cached page, but after 60 seconds it becomes eligible for revalidation. When Next.js revalidates it, it gets the latest data and updates the cached/generated version.

##  What is Caching?
-> Caching means Next.js stores a previously fetched/generated result so it can reuse it instead of doing the same work again.
-> Yes — the Next.js built-in server caching we are discussing is for server-side data/rendering work.
->If 1,000 users request the same data, repeatedly fetching it can be unnecessary.
    Faster responses
    Fewer database/API calls
    Less server work
    Lower load on external APIs

## What is Revalidation?
-> Revalidation means refreshing/invalidation of cached data so Next.js can get fresh data and update what it serves.
-> Cache this data, but after 60 seconds it becomes eligible to be refreshed/revalidated.

## Route Handlers vs Server Actions?
-> "Route Handlers are used when we want to expose an HTTP API endpoint. The client sends an HTTP request, Next.js maps it to the appropriate Route Handler, and the handler performs server operations and returns a response. 
-> Server Actions allow us to invoke server-side functions from our Next.js UI without manually creating and calling an API endpoint. The Server Action can directly access server resources such as the database."

## What is not-found.tsx?
-> not-found.tsx is a special Next.js file used to show a custom 404 UI when a requested resource/page is not found.

## How do you create GET/POST APIs?
GET  -> export async function GET() {
        dbConnect()
        const students = await Student.find();

        return Response.json(students);
    }

POST-> export async function POST(request: Request) {
        dbConnect()
        const body = await request.json();

        const student = await Student.create({
            name: body.name,
            email: body.email
        });

        return Response.json(student, {
            status: 201
        });
    }

## Middleware / Proxy in Next.js
-> Proxy is code that runs before a request reaches your page/route, allowing you to check the request and decide whether to continue, redirect, rewrite, etc.
-> Proxy/Middleware is useful for request-level logic such as authentication checks, redirects, rewrites, locale/language routing, and adding/changing header

    Client
    ↓
    GET /api/users
    ↓
    proxy.ts          ← if matcher includes this route
    ↓
    Check token
    ↓
    NextResponse.next() -> "Allow this request to continue to its normal Next.js destination.
    ↓
    app/api/users/route.ts
    ↓
    GET()
    ↓
    DB
    ↓
    Response


## Can a Server Component import a Client Component?
-> Yes. ✅ A Server Component can import and render a Client Component. This is actually a very common Next.js pattern.

## Can a Client Component import a Server Component?
-> Generally, No — a Client Component cannot directly import a Server Component.

## What is a Dynamic Route in Next.js?
-> A dynamic route is a route where part of the URL can change dynamically, such as a product ID, user ID, username, or blog slug.

## How does [...slug] work in Next.js?
-> [...slug] is a Catch-all Dynamic Route. It captures multiple URL segments inside one dynamic route.
        /docs/javascript
        /docs/javascript/arrays
        /docs/javascript/arrays/map
        /docs/javascript/arrays/filter
        /docs/react
        /docs/react/hooks
        /docs/react/hooks/useState
    
    docs/
    └── [...slug]/
            └── page.tsx
    
    afer doc it  catch all the paramegter / segments
        [[...slug]]
            /docs                       ✅
            /docs/react                 ✅
            /docs/react/hooks           ✅
            /docs/react/hooks/useState  ✅


## what are nested routes?
->Nested routes mean creating routes inside other routes using nested folders.
    app/
    └── dashboard/
        ├── page.tsx
        │
        ├── profile/
        │   └── page.tsx
        │
        └── settings/
            └── page.tsx

## What are Route Groups in Next.js?
-> Route Groups allow us to organize routes into folders without adding that folder name to the URL.
    app/
    └── (auth)/
        ├── login/
        │   └── page.tsx
        │
        └── register/
            └── page.tsx
    /auth/login      ❌
    /auth/register   ❌

    /login
    /register

## How do you create a custom 404 page?
not-found.tsx is a special Next.js file used to show a custom UI when a page/resource is not found (404).

## How do you navigate between pages in Next.js?
-> it needs user interaction
-> 1. Using <Link> — most common
    import Link from "next/link";

    export default function Home() {
        return (
            <Link href="/about">
                About
            </Link>
        );
    }

-> useRouter() => Sometimes you want to navigate after some logic happens.
    Login successful
      ↓
    Navigate to dashboard
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


## What is usePathname()?
-> usePathname() gives you the current URL pathname.
    -> https://example.com/products/iphone?color=black
    
    - const pathname = usePathname();
    - console.log(pathname);
    
    - /products/iphone

## What is useSearchParams()?
->useSearchParams() is used to read query/search parameters from the URL.
    -> /products?category=mobile&sort=price

    - const searchParams = useSearchParams();

    - const category = searchParams.get("category");
    - const sort = searchParams.get("sort");


## What are Route Handlers?
-> Route Handlers allow us to create HTTP API endpoints in the Next.js App Router.

## What is route.ts?
-> route.ts is a special Next.js file used to define HTTP request handlers for a route.

## | API Routes           | Route Handlers                  |
    | -------------------- | ------------------------------- |
    | Pages Router         | App Router                      |
    | `pages/api`          | `app/.../route.ts`              |
    | `req`, `res` style   | Web `Request` / `Response` APIs |
    | Older routing system | App Router approach             |

## Why is Next.js good for SEO?
-> Next.js is good for SEO because it can generate useful HTML content and metadata on the server/static output, allowing search engines to understand the page without depending entirely on client-side JavaScript.

## How does <Image> optimize images?
-> The Image component can provide:
    Appropriate image sizing
    Responsive image delivery
    Lazy loading by default for appropriate images
    Modern optimized formats where supported/configured
    On-demand image optimization

##
| `<img>`                                 | Next.js `<Image>`                                   |
| --------------------------------------- | --------------------------------------------------- |
| Standard browser image element          | Next.js optimized image component                   |
| You manage optimization yourself        | Built-in optimization features                      |
| Lazy loading can be configured manually | Lazy loading handled by default for suitable images |
| Responsive sizing requires manual work  | Supports responsive image sizing                    |
| Dimensions may be omitted               | Dimensions/import information helps reserve space   |


## What is Metadata API?
-> The Metadata API allows you to define SEO-related metadata for your Next.js pages
-> Metadata can include things such as title, description, Open Graph information, robots settings, icons, and more.

## What is dynamic import using next/dynamic?
-> next/dynamic is used to lazy-load a component, so its JavaScript is loaded separately when that component is needed instead of being part of the initial JavaScript bundle 
-> next/dynamic is used to dynamically import and lazy-load components. It enables code splitting so heavy client-side components can be loaded separately instead of increasing the initial JavaScript bundle.

##  What is Hydration in Next.js?
-> Hydration means React attaches client-side JavaScript and event handlers to the server-rendered HTML, making the page interactive.
-> Hydration is the process where React makes server-rendered HTML interactive by attaching client-side JavaScript behavior to it.

## What is a Hydration Error?
-> A hydration error occurs when the HTML/content React expects on the client is different from what was rendered on the server.

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