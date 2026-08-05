## First Understand the Problem
    Suppose your React project has
        Home 100 KB
        Login 100 KB
        Dashboard 100 KB
        Profile 100 KB
        Settings 100 KB
        Admin 100 KB 
    Total -> 600kb 

> case1 : Without Code Splitting
        Browser
          ↓
        Download
            Home
            Login
            Dashboard
            Profile
            Settings
            Admin
          ↓
        600 KB 
    -> Even if the user only visits Home, the browser downloads everything.
    -> This increases the initial loading time.

> case 2: With Code Splitting
    -> In this every component download on demand
        Home.js 
            ↓
        100 KB

        ----------------

        Dashboard.js
          ↓
        120 KB

        ----------------

        Profile.js
          ↓
        80 KB
        ----------------
        Settings.js
          ↓
        90 KB

## Code Splitting
-> Code splitting means dividing one large JavaScript bundle into smaller chunks so the browser only downloads the code when it is needed.
-> Reduce the initial JavaScript bundle size and improve initial loading performance.
-> Code splitting usually splits the application by routes (pages) or by dynamically imported components, not every single component.
-> Suppose your application has:
    Home
    About
    Dashboard
    Admin
    Profile
    ->  Split
          ↓
        Many Files


## What is Lazy Loading?
-> Lazy Loading is a technique where a component or page is loaded only when it is actually needed.

    Load
      ↓
    Only Required File   


**Code Splitting creates the chunks. Lazy Loading decides when to load them.**

## Suspense 
-> displays a fallback UI while a lazy-loaded component is being downloaded.

        import { lazy, Suspense } from "react";
        const Home = lazy(() => import("./pages/Home"));
        const Dashboard = lazy(() => import("./pages/Dashboard"));
        const Profile = lazy(() => import("./pages/Profile"));

        function App() {
            return (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Home />
                </Suspense>
            );
        }

## complete working
When we build a React application, tools like Vite or Webpack create a production build (bundle) and we deploy it to a server such as Netlify or Vercel. Without code splitting, the entire application is bundled into one large JavaScript file, so the browser downloads everything during the initial page load, even if the user only visits the Home page.

With code splitting, the application is divided into smaller JavaScript chunks. When the user first opens the application, only the code required for the Home page (along with the main application code) is downloaded.

If the user later navigates to the About page, React dynamically requests the About chunk from the server. While that chunk is downloading, Suspense displays a fallback UI such as a loading spinner. Once the download completes, React renders the About page without reloading the entire application.


##  What is a Bundle?
-> A Bundle is an optimized JavaScript file created from your React project so that the browser can execute it.
-> Bundle = Combined JavaScript files ready for the browser.
-> A Build Tool converts source code into optimized files that browsers can understand.

## What happens inside Build?
1. Convert JSX -> javascript code
2. Combine Files to make one production ready component
3. Remove Comments
4. Minify -> Minification removes unnecessary spaces, comments, and line breaks to reduce file size.
   function add(a,b){
         return a+b;
   }

   function add(a,b){return a+b}


## What is Bundling?
-> Bundling is the process of combining application files and dependencies into optimized JavaScript files for the browser.

## production build?
-> Production Build is the final optimized application that we deploy to the server.

## What is Transpiling?
-> Transpiling converts modern JavaScript and JSX into browser-compatible JavaScript.

## What is Tree Shaking?
-> Tree Shaking removes unused code from the final bundle.

##  What is the dist folder?
-> The dist folder contains the final production-ready files generated after running npm run build. These files are deployed to hosting platforms like Netlify or Vercel

## Suppose your project has
    - These are separate files. But the browser cannot understand a React project structure.
        App.jsx
        Navbar.jsx
        Footer.jsx
        Login.jsx
        Dashboard.jsx
        Button.jsx
        Card.jsx
    - It only understands
        HTML
        CSS
        JavaScript
    

    React Files 
        ↓
    Build Tool (Vite)
        ↓
    JavaScript Bundles
        ↓
    Browser


## What is Transpiling?
-> Transpiling is the process of converting modern JavaScript or JSX into browser-compatible JavaScript.

## What is HMR?
-> Hot Module Replacement (HMR) is a development feature provided by Vite that updates only the modified module in the browser without refreshing the entire page, preserving the application state whenever possible.

## HMR VS REACT
| Developer Changes Code | User Clicks Button       |
| ---------------------- | ------------------------ |
| HMR (Vite)             | React                    |
| Trigger = Save File    | Trigger = Event          |
| Updates source code    | Updates state            |
| Development only       | Development + Production |
| No page refresh        | No page refresh          |

## what is HMR?
->HMR is a development feature provided by Vite. It is triggered when the developer changes and saves the source code. HMR replaces only the modified module in the browser without refreshing the page.

## what is react state update
-> React state updates are different—they are triggered by user interactions such as clicks or input changes. React handles those updates by re-rendering the affected components and updating the DOM using the Virtual DOM and diffing algorithm.
