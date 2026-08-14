# What is a URL?

* **URL = Uniform Resource Locator**
* A URL tells us where a resource is located and how to access it.

### Example

```text
https://example.com:443/products/101?category=mobile&sort=price#reviews
│          │         │              │                           │
protocol   host      port           path                       hash
│
└── query parameters
```

---

# URL Parsing

-> **URL parsing** means breaking a URL into its different components.

```javascript
const myURL = new URL(
    "https://example.com:443/products/101?category=mobile&sort=price"
);

console.log(myURL.protocol);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);
```

### URL Components

```text
protocol  → https:
hostname  → example.com
port      → 443
pathname  → /products/101
search    → ?category=mobile&sort=price
```

---

# Query Parameters

```text
/products?category=mobile&brand=apple
         ↑
      query starts
```

```text
category=mobile
       &
brand=apple
```

-> Query parameters are commonly used for:

* Filtering
* Sorting
* Searching
* Pagination
* Optional parameters

### Accessing Query Parameters

```javascript
console.log(myURL.searchParams.get("category"));
```

---

# Query Params vs Route Params in Express

## Route Parameter

-> Route parameter is **usually used to identify a particular resource**.

```text
/users/101
/products/500
/orders/123
```

```javascript
req.params.id
```

### Example

```javascript
app.get("/users/:id", async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    res.json(user);
});
```

Here:

```text
/users/101
      ↑
   Route Param
```

`101` identifies a specific user.

---

# Query Parameters

-> Query parameters are commonly used for **filtering, searching, sorting, pagination, and optional information**.

```javascript
req.query.category
req.query.page
```

### Example

```text
/products?category=mobile&page=2
```

Here:

```text
category=mobile
page=2
```

are query parameters.

---

# Route Params vs Query Params

| Route Params                         | Query Params                        |
| ------------------------------------ | ----------------------------------- |
| `req.params`                         | `req.query`                         |
| Usually identify a specific resource | Usually filter/search/sort/paginate |
| Usually part of the URL path         | Come after `?`                      |
| `/users/101`                         | `/users?role=admin`                 |
| `101` → specific user                | `role=admin` → filter               |

---

# Request Data Flow in Express

> In a real Express application, the frontend sends information in different places depending on what the API is doing, and the backend reads it and returns the appropriate response.

```text
Frontend
    ↓
HTTP Request
    ↓
┌─────────────────────────────────┐
│ req.params → specific resource  │
│ req.query  → filter/search/page │
│ req.body   → data to create/edit│
└─────────────────────────────────┘
    ↓
Controller
    ↓
Database / business logic
    ↓
Response
    ↓
Frontend
```

### Quick Example

```text
GET /users/101?role=student&page=1
       │
       └── Route Param
             ↓
          req.params.id

role=student&page=1
       │
       └── Query Params
             ↓
          req.query
```

> **Interview Tip:**
> `req.params` → **Which resource?**
> `req.query` → **How should I filter/search/sort it?**
> `req.body` → **What data are you sending to create/update?**
