## What is a URL?
- URL = Uniform Resource Locator
- A URL tells us where a resource is located and how to access it.
- https://example.com:443/products/101?category=mobile&sort=price#reviews
  │          │         │              │                           │
protocol    host     port           path                       hash
                                  │
                                  └── query parameters

## URL Parsing?
-> URL parsing means breaking a URL into its different components.

> const myURL = new URL( "https://example.com:443/products/101?category=mobile&sort=price");
console.log(myURL.protocol);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);

protocol  → https:
hostname/domain name  → example.com
port      → 443
pathname  → /products/101
search    → ?category=mobile&sort=price

## Query Parameters 
/products?category=mobile&brand=apple
    ? → query starts

    category=mobile
        &
    brand=apple

> Query parameters are commonly used for:
    --> console.log(myURL.searchParams.get("category"));
    Filtering
    Sorting
    Searching
    Pagination
    Optional parameters

## Query params vs Route param (in EXPRESS module)
-> Route parameter => Usually used to identify a particular resource:
    -> req.params.id
    /users/101
    /products/500
    /orders/123

-> Quer params =>Usually used to identify a particular resource
    -- req.query.category
    -- req.query.page


> In a real Express application, the frontend sends information in different places depending on what the API is doing, and the backend reads it and returns the appropriate response.

    app.get("/users/:id", async (req, res) => {
        const { id } = req.params;

        const user = await User.findById(id);

        res.json(user);
    });

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