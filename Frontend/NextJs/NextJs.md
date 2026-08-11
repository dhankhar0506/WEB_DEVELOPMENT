## Why Next.js if we already have React?
-> React is primarily a UI library.
-> Next.js is a React framework that provides features such as file-based routing, server-side capabilities, multiple rendering strategies, data fetching and caching, API endpoints, metadata/SEO features, and performance optimizations.

Next.js
│
├── Frontend
│   ├── Pages
│   ├── Components
│   ├── Layouts
│   └── Routing
│
└── Server-side
    ├── Route Handlers / APIs
    ├── Authentication logic
    ├── Database calls
    ├── Server Components
    └── Server Actions

## File based routing
-> File-based routing means you don't manually configure routes like React Router. In Next.js, the folder/file structure inside app determines the URL routes.
    app/
    │
    ├── page.js
    │
    ├── about/
    │   └── page.js
    │
    ├── students/
    │   └── page.js
    │
    └── students/
        └── [id]/
            └── page.js
    -> It's not that every file inside app automatically becomes a route.
    -> only the page.ts files

## 1. How to Create a Next.js App
-> npx create-next-app@latest my-app
    Would you like to use TypeScript?        Yes
    Would you like to use ESLint?            Yes
    Would you like to use Tailwind CSS?      Your choice
    Would you like your code inside src/?    Your choice
    Would you like to use App Router?        Yes

    cd my-app
    npm run dev

## Basic Next.js Folder Structure

    my-app/
    │
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── public/
    │
    ├── node_modules/
    │
    ├── package.json
    ├── package-lock.json
    ├── next.config.ts
    ├── tsconfig.json
    └── eslint.config.mjs

> page.tsx => page.tsx defines the UI for a route.
->  app/
        └── about/
            └── page.tsx

        export default function About() {
            return (
                <h1>About Page</h1>
            );
        }
    -> localhost:3000/about
    -> page.tsx makes a route publicly accessible.

>layout.tsx 
    -> A layout contains UI that is shared between pages.
        export default function RootLayout({ children,}: {children: React.ReactNode;}) {
            return (
                <html lang="en">
                    <body>
                        <Navbar />

                        {children}

                        <Footer />
                    </body>
                </html>
            );
        }
    -> Suppose you visit: /about
    -> RootLayout
        │
        ├── Navbar
        │
        ├── About Page  ← children
        │
        └── Footer
    -> Layout contains shared UI that persists across pages/routes.

> public/ 
    ->Used for static files

> components/
    -> components/
        ├── Navbar.tsx
        ├── Footer.tsx
        ├── Button.tsx
        └── StudentCard.tsx

> Dynamic Routes
    ->  app/
        └── students/
            ├── page.tsx
            │
            └── [id]/
                └── page.tsx
    -> [id] represents a dynamic route parameter.

>Special App Router Files
    app/
    └── students/
        ├── page.tsx
        ├── layout.tsx
        ├── loading.tsx
        ├── error.tsx
        └── not-found.tsx
    
> API / Route Handlers
    -> Next.js can also create backend endpoints.
    -> app/
        └── api/
            └── students/
                    └── route.ts

    -> export async function GET() {
            return Response.json({
                message: "Students"
            });
        }

    GET /api/students
        ↓
    app/api/students/route.ts

**page.tsx  → UI page  AND route.ts  → HTTP endpoint/route handler**


## Real Project Strcture 

    my-app/
    │
    ├── app/
    │   │
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   │
    │   ├── about/
    │   │   └── page.tsx
    │   │
    │   ├── students/
    │   │   ├── page.tsx
    │   │   │
    │   │   └── [id]/
    │   │       └── page.tsx
    │   │
    │   └── api/
    │       └── students/
    │           └── route.ts
    │
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   └── StudentCard.tsx
    │
    ├── lib/ (HELPER FILE)
    │   └── db.ts (mongo data base connection)
    │
    ├── public/
    │   ├── logo.png
    │   └── images/
    │
    ├── .env.local
    ├── package.json
    ├── tsconfig.json
    └── next.config.ts

> Local layout.tsx vs global/root layout.tsx
They both run. The nested layout does not override the root layout. They are nested inside each other.



## What is link?
    app/
    │
    ├── students/
    │   │
    │   ├── page.tsx              ← List of students
    │   │
    │   └── [id]/
    │       └── page.tsx          ← Individual student page
    │
    └── api/
        └── students/
            │
            ├── route.ts          ← GET/POST /api/students
            │
            └── [id]/
                └── route.ts      ← GET/PATCH/DELETE /api/students/:id

>    UI ROUTE                         API ROUTE

    students/[id]/page.tsx          api/students/[id]/route.ts
            ↓                                ↓
    /students/2                     /api/students/2

    Shows UI                        Returns data

> Where do we define <Link>?
    import Link from "next/link";

    export default function StudentsPage() {

        const students = [
            { id: 1, name: "Aman" },
            { id: 2, name: "Rahul" },
            { id: 3, name: "Neha" }
        ];

        return (
            <div>

                {students.map((student) => (

                    <Link
                        key={student.id}
                        href={`/students/${student.id}`}
                    >
                        {student.name}
                    </Link>

                ))}

            </div>
        );
    }

##    CLICK RAHUL
         ↓
    <Link href="/students/2">
        ↓
    Browser URL becomes

    /students/2
        ↓
    Next.js file routing matches

    app/students/[id]/page.tsx
        ↓
    params.id = "2"
        ↓
    page.tsx needs student data
        ↓
    GET /api/students/2
        ↓
    Next.js API routing matches

    app/api/students/[id]/route.ts
        ↓
    params.id = "2"
        ↓
    Get student data
        ↓
    JSON response
    {
    id: 2,
    name: "Rahul"
    }
        ↓
    page.tsx receives data
        ↓

    UI displays

    Rahul