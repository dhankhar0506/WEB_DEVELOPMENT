> Step 1: Product List Page
    - Suppose user opens => /products
    - React matches => <Route path="/products" element={<Products />} />
    - So React renders => <Products />
    
    - Now Products calls the backend.
      - Backend returns :   
          - [
                {id:101,name:"iPhone"},
                {id:102,name:"Samsung"},
                {id:103,name:"OnePlus"}
            ]
    - Now React shows: 
        - iPhone => View Details
        ----------------
        - Samsung => View Details

> Step 2: User Clicks "View Details"
    - Suppose user clicks : iPhone
      
      - <Link to={`/product/${product.id}`}> -> User click the link -> browser URL changes -> broswer Router detect that changes
            View Details
        </Link>
    
    - product.id = 101
    - React changes the URL
    /products
        ↓
    /product/101
    - Nothing else has happened yet.

> Step 3: BrowserRouter Notices URL Changed
    Old URL => /products
        ↓
    New URL=> /product/101

> Step 4: Routes Checks Every Route 
    <Routes>
        
        <Route  path="/products"   element={<Products/>}  />

        <Route path="/product/:id"  element={<Product/>} />
    </Routes>    

    -> "Whatever comes after /product/, I'll store it in a variable called id."

> Step 5: React Renders Product Component
        -> <Product/>   

> Step 7: Product Component Reads URL
     function Product(){

        const {id}=useParams();

    }
> Step 8: Call Backend
    -> fetch(`/api/product/${id}`)