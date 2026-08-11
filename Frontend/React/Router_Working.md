# React Router — Dynamic Route Flow

## Step 1: Product List Page

* Suppose user opens:

```text
/products
```

* React matches:

```jsx
<Route path="/products" element={<Products />} />
```

* So React renders:

```jsx
<Products />
```

### Products Component Calls Backend

Now `Products` calls the backend.

Backend returns:

```js
[
    { id: 101, name: "iPhone" },
    { id: 102, name: "Samsung" },
    { id: 103, name: "OnePlus" }
]
```

Now React shows:

```text
iPhone → View Details
----------------
Samsung → View Details
```

---

## Step 2: User Clicks "View Details"

Suppose the user clicks:

```text
iPhone
```

The link is:

```jsx
<Link to={`/product/${product.id}`}>
    View Details
</Link>
```

### What Happens?

* User clicks the link.
* Browser URL changes.
* Browser Router detects that change.

For:

```js
product.id = 101
```

React changes the URL:

```text
/products
    ↓
/product/101
```

> **Nothing else has happened yet.**

---

## Step 3: BrowserRouter Notices URL Changed

Old URL:

```text
/products
```

↓

New URL:

```text
/product/101
```

`BrowserRouter` notices that the URL has changed.

---

## Step 4: Routes Checks Every Route

Suppose we have:

```jsx
<Routes>

    <Route
        path="/products"
        element={<Products />}
    />

    <Route
        path="/product/:id"
        element={<Product />}
    />

</Routes>
```

React Router checks the routes.

For:

```text
/product/101
```

it matches:

```jsx
<Route
    path="/product/:id"
    element={<Product />}
/>
```

### What Does `:id` Mean?

```text
/product/:id
```

means:

> **"Whatever comes after `/product/`, I'll store it in a variable called `id`."**

Example:

```text
/product/101
```

Then:

```text
id = 101
```

---

## Step 5: React Renders Product Component

After matching the route:

```jsx
<Product />
```

React renders the `Product` component.

---

## Step 7: Product Component Reads URL

Inside the `Product` component:

```jsx
function Product() {

    const { id } = useParams();

}
```

`useParams()` reads the dynamic value from the URL.

For:

```text
/product/101
```

we get:

```js
id = 101
```

---

## Step 8: Call Backend

Now the `Product` component can call the backend using the `id`:

```js
fetch(`/api/product/${id}`)
```

For example:

```text
/product/101
        ↓
id = 101
        ↓
fetch("/api/product/101")
        ↓
Backend returns product details
```

---

# Complete Flow

```text
User opens /products
        ↓
BrowserRouter detects URL
        ↓
Routes matches /products
        ↓
<Product />? No
<Products /> renders
        ↓
Products calls backend
        ↓
Backend returns product list
        ↓
React displays products
        ↓
User clicks "View Details"
        ↓
<Link to="/product/101">
        ↓
URL changes
        ↓
/products → /product/101
        ↓
BrowserRouter notices URL change
        ↓
Routes checks routes
        ↓
Matches /product/:id
        ↓
<Product /> renders
        ↓
useParams()
        ↓
id = 101
        ↓
fetch("/api/product/101")
        ↓
Backend returns product details
```

# Interview Crux

```text
/products
   ↓
Products Component
   ↓
User clicks View Details
   ↓
/product/101
   ↓
BrowserRouter detects URL change
   ↓
Routes matches /product/:id
   ↓
Product Component renders
   ↓
useParams() → id = 101
   ↓
Backend API → /api/product/101
```
