## React Routing
-> Routing is the process of navigating between different pages/components in a React application without reloading the entire page.
    Without Routing

                Home
                ↓
                Reload Browser
                ↓
                About

    With Routing

                Home
                ↓
                About
                ↓
                No Page Reload

    This is why React applications are called Single Page Applications (SPA).

> npm install react-router-dom (Installation)

    src/
        pages/
            Home.jsx
            About.jsx
            Contact.jsx
            Login.jsx
            Dashboard.jsx
            Profile.jsx
        App.jsx
        main.jsx

>Step 1 : Wrap BrowserRouter => main.jsx
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./App";

    ReactDOM.createRoot(document.getElementById("root")).render(

        <BrowserRouter> -> BrowserRouter is the root component that enables navigation in a React app by syncing the UI with the browser’s URL.
            <App />
        </BrowserRouter>
    );

> Step 2 : Create Routes -> Routes is a container that holds all Route components.
        import {  Routes,  Route } from "react-router-dom";

        import Home from "./pages/Home";
        import About from "./pages/About";

        function App() {

            return (
                <Routes>
                    <Route path="/"  element={<Home />}  />
                    <Route  path="/about"   element={<About />} />
                </Routes>

            );

        }

## BrowserRouter
-> BrowserRouter enables routing using the browser's History API. It should wrap the entire application.
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./App";

    ReactDOM.createRoot(document.getElementById("root")).render(

        <BrowserRouter>

            <App/>

        </BrowserRouter>

    );

## Routes
-> Routes is a container that holds all Route components and checks which Route matches the current URL.
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

## Route
-> A Route maps a URL path to a React component.

    <Route path="/about" element={<About/>} />

## Link
-> Link is a React Router component used to navigate between pages when the user clicks on it, without reloading the browser.

## . Where do we use Navbar.jsx?
-> Navbar.jsx is a reusable component that contains the navigation UI, such as the logo and links. It is usually placed in App.jsx outside the Routes component so that it remains visible on every page, while only the page content inside Routes changes.

## useNavigate 
-> useNavigate is a React Router Hook used to navigate programmatically using JavaScript, such as after a successful login, logout, or form submission.
        Real Use Cases: 
                    Login
                    loginSuccess()
                         ↓
                    navigate("/dashboard")
        Go Back => navigate(-1);
        Forward => navigate(1);

## useParams()
-> useParams returns dynamic values from the URL.
        -> Route path="/product/:id" element={<Product/>}  />
        -> example : /product/20
                   : const {id} = useParams();


## useLocation()
-> useLocation returns information about the current URL.
    const location = useLocation();
    console.log(location.pathname);

## useSearchParams()
-> Used to read and update query parameters in the URL.
    /products?page=2
        const [searchParams]=useSearchParams();
        searchParams.get("page");

    -> update params
        setSearchParams({

            page:3

        });


## Dynamic Routing
-> Dynamic Routing is a routing technique where a part of the URL is dynamic (changes) so that the same component can display different data based on the URL value.
    
    Instead of creating multiple routes like:

            <Route path="/product1" element={<Product />} />
            <Route path="/product2" element={<Product />} />
            <Route path="/product3" element={<Product />} />
    
    We create one dynamic route.

                    <Route path="/product/:id"  element={<Product />}/>

## Protected Routes
-> A Protected Route is a wrapper component that checks whether a user is authenticated before allowing access to a protected page. If the user is authenticated, it renders the requested page; otherwise, it redirects the user to the Login page.

## Navigate Component
-> <Navigate /> is a React Router component used to redirect the user to another route during rendering.
    It is mainly used for:
        Protected Routes
        Authentication
        Redirecting invalid URLs
        Redirecting after checking a condition\
    -> <Navigate to="/login" />

## 404 Page -> If URL doesn't exist
        <Route path="*" element={<NotFound/>} />

## Complete example: 
> App.jsx  

    import Navbar from "./components/Navbar";

    import Home from "./pages/Home";
    import About from "./pages/About";
    import Contact from "./pages/Contact";

    import { Routes, Route } from "react-router-dom";

    function App() {

        return (
                <>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </>
        );

    }

    export default App;
> Navbar.jsx
        import { Link } from "react-router-dom";
        import "./Navbar.css";

        function Navbar() {
            return (
                <nav className="navbar">
                <h2>My Website</h2>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>

                    </div>
                </nav>
            );
        }

        export default Navbar;
>Login.jsx =>Here we'll use useNavigate().
    import { useNavigate } from "react-router-dom";
    function Login() {
        const navigate = useNavigate();
        
        function handleLogin() {
            alert("Login Successful");
            navigate("/dashboard");
        }

        return (
            <button onClick={handleLogin}>
                Login
            </button>
        );

    }

    export default Login;


##  Protected Routes
-> ProtectedRoute is a wrapper component that checks whether the user is authenticated before rendering a protected page. If authentication succeeds, it renders the requested page; otherwise, it redirects the user to the Login page.
>Protected Routes : 
        import { Routes, Route } from "react-router-dom";
        import Login from "./pages/Login";
        import Dashboard from "./pages/Dashboard";
        import ProtectedRoute from "./routes/ProtectedRoute";

        function App() {
        return (
            <Routes>

            {/* First page */}
            <Route path="/" element={<Login />} />

                {/* Protected page */}
                <Route
                    path="/dashboard"
                    element={ProtectedRoute> <Dashboard /> </ProtectedRoute> }/>

                </Routes>
        );
        }

        export default App;

> Protected Routes.jsx
        function ProtectedRoute({ children }) {

            const token = localStorage.getItem("token");

            // Token doesn't exist
            if (!token) {
                return <Navigate to="/login" />;
            }

            // Check with backend
            const isValid = verifyToken(token);

            if (!isValid) {
                return <Navigate to="/login" />;
            }

            return children;
        }
## What is children in React?

children is a special prop in React that represents the content placed between the opening and closing tags of a component. It allows components to wrap and render dynamic content without knowing what that content is in advance.

## ## useParams()
-> useParams() is a Hook used to read dynamic values from the URL path.
        -> Route path="/product/:id" element={<Product/>}  />
        -> example : /product/20
                   : const {id} = useParams();
    ->  Product 101
        Product 102
        Product 103

    -> <Route path="/product/:id"   element={<Product />}/>

    OR 

    ->  import { useParams } from "react-router-dom";
        
        function Product() {
            const { id } = useParams();
            return <h1>Product Id : {id}</h1>;

        }


## useSearchParams()
-> useSearchParams() is a Hook used to read and update query parameters in the URL.
    -> /products?page=2

        import { useSearchParams } from "react-router-dom";
        
        function Products() {
            const [searchParams] = useSearchParams();
            const page = searchParams.get("page");
            return <h1>Page : {page}</h1>;

        }

        OR 
        -> TO update 
        setSearchParams({
            page: 5
        });
    
    example : /products?category=mobile&sort=price&page=3
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    const sort = searchParams.get("sort");
    const page = searchParams.get("page");
                
> / → Usually used for Path Parameters (Resource Identifier) → Used to identify which specific resource you want. (/product/101)
> ? → Used for Query Parameters (Filters, Search, Options) → useSearchParams() Used for optional information like filtering, sorting, searching, pagination.



## useLocation()
-> useLocation() is a React Router Hook that returns information about the current URL, such as the pathname, query string, hash, and state.
    -> http://localhost:5173/product/101?page=2
    const location = useLocation();
    console.log(location);
    {
        pathname: "/product/101",
        search: "?page=2",
        hash: "",
        state: null,
        key: "abc123"
    }



## Nested Routing
-> Nested Routing is the process of defining child routes inside a parent route so that the child component is rendered within the parent component.
    -> Dashboard → Parent Route
    -> Orders, Profile → Child (Nested) Routes

        <Route  path="/dashboard"  element={<Dashboard />}  >

            <Route
                path="profile"
                element={<Profile />}
            />

            <Route
                path="orders"
                element={<Orders />}
            />

        </Route>

> Step 2: Dashboard Component
    function Dashboard() {
        return (
            <>
                <h1>Dashboard</h1>

                <Link to="profile">Profile</Link>

                <Link to="orders">Orders</Link>

                <Outlet />
            </>
        );
    }

## Outlet
-> <Outlet /> is a placeholder inside the parent component where the matched child (nested) route is rendered.
    
    import { Outlet } from "react-router-dom";
    function Dashboard() {
        return (
            <>
                <h1>Dashboard</h1>
                    <Link to="orders">
                        Orders
                    </Link>
                <Outlet />

            </>

        );

    }