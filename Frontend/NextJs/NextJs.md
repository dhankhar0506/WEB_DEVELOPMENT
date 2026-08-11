# Next.js Interview Notes

## Why Next.js if We Already Have React?

* **React** is primarily a **UI library**.
* **Next.js** is a **React framework** that provides features such as:

  * File-based routing
  * Server-side capabilities
  * Multiple rendering strategies
  * Data fetching and caching
  * API endpoints
  * Metadata / SEO features
  * Performance optimizations

### Next.js

```text
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
```

---

# File-Based Routing

**File-based routing** means you don't manually configure routes like React Router.

In Next.js, the folder/file structure inside the `app` directory determines the URL routes.

```text
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
```

> It's not that every file inside `app` automatically becomes a route.

> **Only `page.ts` / `page.tsx` files define UI routes.**

---

# 1. How to Create a Next.js App

```bash
npx create-next-app@latest my-app
```

During setup:

```text
Would you like to use TypeScript?        Yes
Would you like to use ESLint?            Yes
Would you like to use Tailwind CSS?      Your choice
Would you like your code inside src/?    Your choice
Would you like to use App Router?        Yes
```

Then:

```bash
cd my-app
npm run dev
```

---

# Basic Next.js Folder Structure

```text
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
```

---

# `page.tsx`

`page.tsx` defines the **UI for a route**.

Example:

```text
app/
└── about/
    └── page.tsx
```

```tsx
export default function About() {
    return (
        <h1>About Page</h1>
    );
}
```

The route becomes:

```text
localhost:3000/about
```

> `page.tsx` makes a route publicly accessible.

---

# `layout.tsx`

A **layout** contains UI that is shared between pages.

Example:

```tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
```

Suppose you visit:

```text
/about
```

The structure becomes:

```text
RootLayout
    │
    ├── Navbar
    │
    ├── About Page ← children
    │
    └── Footer
```

> Layout contains shared UI that persists across pages/routes.

---

# `public/`

The `public/` folder is used for **static files**.

Example:

```text
public/
├── logo.png
└── images/
```

---

# `components/`

The `components/` folder can contain reusable UI components.

Example:

```text
components/
├── Navbar.tsx
├── Footer.tsx
├── Button.tsx
└── StudentCard.tsx
```

---

# Dynamic Routes

Dynamic routes allow a part of the URL to change dynamically.

Example:

```text
app/
└── students/
    ├── page.tsx
    │
    └── [id]/
        └── page.tsx
```

`[id]` represents a **dynamic route parameter**.

For example:

```text
/students/1
/students/2
/students/3
```

All of these can match:

```text
app/students/[id]/page.tsx
```

---

# Special App Router Files

Inside a route segment, Next.js supports special files such as:

```text
app/
└── students/
    ├── page.tsx
    ├── layout.tsx
    ├── loading.tsx
    ├── error.tsx
    └── not-found.tsx
```

### Common Files

| File            | Purpose          |
| --------------- | ---------------- |
| `page.tsx`      | UI for the route |
| `layout.tsx`    | Shared UI/layout |
| `loading.tsx`   | Loading UI       |
| `error.tsx`     | Error UI         |
| `not-found.tsx` | Not-found UI     |

---

# API / Route Handlers

Next.js can also create **backend endpoints**.

Example:

```text
app/
└── api/
    └── students/
        └── route.ts
```

Example:

```ts
export async function GET() {
    return Response.json({
        message: "Students"
    });
}
```

Request:

```text
GET /api/students
```

Next.js matches it with:

```text
app/api/students/route.ts
```

### Important

```text
page.tsx → UI page

route.ts → HTTP endpoint / Route Handler
```

---

# Real Project Structure

```text
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
├── lib/
│   └── db.ts
│
├── public/
│   ├── logo.png
│   └── images/
│
├── .env.local
├── package.json
├── tsconfig.json
└── next.config.ts
```

### `lib/`

`lib/` can contain helper files.

Example:

```text
lib/
└── db.ts
```

`db.ts` can contain the MongoDB database connection.

---

# Local `layout.tsx` vs Root `layout.tsx`

Both layouts run.

The nested layout **does not override** the root layout.

Instead, they are **nested inside each other**.

```text
Root Layout
    ↓
Nested Layout
    ↓
Page
```

---

# What is a Link?

Next.js provides the `<Link>` component for navigation between routes.

Import it using:

```tsx
import Link from "next/link";
```

---

# UI Route vs API Route

Consider this structure:

```text
app/
│
├── students/
│   │
│   ├── page.tsx
│   │
│   └── [id]/
│       └── page.tsx
│
└── api/
    └── students/
        │
        ├── route.ts
        │
        └── [id]/
            └── route.ts
```

These represent two different types of routes.

```text
UI ROUTE                              API ROUTE

students/[id]/page.tsx               api/students/[id]/route.ts
        ↓                                      ↓
/students/2                          /api/students/2
        ↓                                      ↓
Shows UI                             Returns data
```

---

# Where Do We Define `<Link>`?

Example:

```tsx
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
```

---

# Navigation Flow

Suppose the user clicks **Rahul**.

```text
CLICK RAHUL
    ↓
<Link href="/students/2">
    ↓
Browser URL becomes
    ↓
/students/2
    ↓
Next.js file routing matches
    ↓
app/students/[id]/page.tsx
    ↓
params.id = "2"
    ↓
page.tsx needs student data
    ↓
GET /api/students/2
    ↓
Next.js API routing matches
    ↓
app/api/students/[id]/route.ts
    ↓
params.id = "2"
    ↓
Get student data
    ↓
JSON response
    ↓
{
    id: 2,
    name: "Rahul"
}
    ↓
page.tsx receives data
    ↓
UI displays
    ↓
Rahul
```

---

# ⭐ Important Interview Point

Next.js separates **UI routes** and **API routes**:

```text
UI Route
    ↓
page.tsx
    ↓
Renders UI


API Route
    ↓
route.ts
    ↓
Handles HTTP request
    ↓
Returns data/response
```

---

# 🔥 Quick Revision

| Topic                  | Definition                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **React**              | UI library                                                                                             |
| **Next.js**            | React framework with routing, server-side capabilities, rendering strategies, APIs, caching, SEO, etc. |
| **File-Based Routing** | Folder/file structure determines routes                                                                |
| **`page.tsx`**         | Defines UI for a route                                                                                 |
| **`layout.tsx`**       | Shared UI between routes                                                                               |
| **`public/`**          | Stores static files                                                                                    |
| **`components/`**      | Stores reusable components                                                                             |
| **Dynamic Route**      | Route with dynamic URL parameters                                                                      |
| **`[id]`**             | Dynamic route parameter                                                                                |
| **`route.ts`**         | Defines HTTP Route Handlers                                                                            |
| **`loading.tsx`**      | Loading UI                                                                                             |
| **`error.tsx`**        | Error UI                                                                                               |
| **`not-found.tsx`**    | Not-found UI                                                                                           |
| **`<Link>`**           | Next.js component for route navigation                                                                 |
| **UI Route**           | Uses `page.tsx` and renders UI                                                                         |
| **API Route**          | Uses `route.ts` and handles HTTP requests                                                              |
| **`lib/`**             | Common location for helper/server utility code                                                         |
| **Root Layout**        | Top-level shared layout                                                                                |
| **Nested Layout**      | Layout for a specific route segment                                                                    |
