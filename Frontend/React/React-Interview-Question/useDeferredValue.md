<!-- ## useDeferredValue
-> useDeferredValue gives you a delayed/lower-priority version of a value so that urgent UI updates can stay responsive.

-> useDeferredValue is a React Hook that gives you a lower-priority version of a value. It allows urgent UI, like typing in an input, to update immediately while expensive UI using the deferred value can update later.

-> useDeferredValue is useful when a frequently changing value causes expensive rendering. It allows the urgent UI, such as a text input, to stay responsive while the UI depending on the deferred value updates at a lower priority.

## Example

Imagine searching through 10,000 products:
    import { useState, useDeferredValue } from "react";

    function Search({ products }) {
        const [query, setQuery] = useState("");

        // Lower-priority version of query
        const deferredQuery = useDeferredValue(query);

        const filteredProducts = products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(deferredQuery.toLowerCase())
        );

        return (
            <>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                />

                <ProductList products={filteredProducts} />
            </>
        );
} -->

## useDeferredValue
-> useDeferredValue gives you a delayed/lower-priority version of a value so that urgent UI updates can stay responsive.

-> useDeferredValue is a React Hook that gives you a lower-priority version of a value. It allows urgent UI, like typing in an input, to update immediately while expensive UI using the deferred value can update later.

-> useDeferredValue is useful when a frequently changing value causes expensive rendering. It allows the urgent UI, such as a text input, to stay responsive while the UI depending on the deferred value updates at a lower priority.

## Example

Imagine searching through 10,000 products:
    import { useState, useDeferredValue } from "react";

    function Search({ products }) {
        const [query, setQuery] = useState("");

        // Lower-priority version of query
        const deferredQuery = useDeferredValue(query);

        const filteredProducts = products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(deferredQuery.toLowerCase())
        );

        return (
            <>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                />

                <ProductList products={filteredProducts} />
            </>
        );
}