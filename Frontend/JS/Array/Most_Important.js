// ============================================================
// JAVASCRIPT ARRAY - MOST IMPORTANT & MOST USED METHODS
// ============================================================


// ============================================================
// 1. map()
// ============================================================
// Creates a NEW array by transforming every element.
// Does NOT modify the original array.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log("map:", doubled);
// [2, 4, 6, 8, 10]


// Real Project Example:
// Transform API data

const users = [
    { id: 1, name: "Gourav" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" },
];

const userNames = users.map((user) => user.name);

console.log("User Names:", userNames);
// ["Gourav", "Rahul", "Aman"]


// React Example:
//
// users.map((user) => (
//     <div key={user.id}>{user.name}</div>
// ));


// ============================================================
// 2. filter()
// ============================================================
// Creates a NEW array containing elements
// that satisfy a condition.

const numbers_1 = [10, 20, 30, 40, 50];

const greaterThan20 = numbers_1.filter((num) => num > 20);

console.log("filter:", greaterThan20);
// [30, 40, 50]


// Real Project Example:
// Get active users

const users_1 = [
    { id: 1, name: "Gourav", active: true },
    { id: 2, name: "Rahul", active: false },
    { id: 3, name: "Aman", active: true },
];

const activeUsers = users_1.filter((user) => user.active);

console.log("Active Users:", activeUsers);


// ============================================================
// 3. find()
// ============================================================
// Returns the FIRST element that satisfies the condition.
// Returns undefined if nothing is found.

const users_2 = [
    { id: 1, name: "Gourav" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" },
];

const user = users_2.find((user) => user.id === 2);

console.log("find:", user);
// { id: 2, name: "Rahul" }


// Real Project Example:
// Find a product by ID

const products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Phone", price: 30000 },
];

const product = products.find((product) => product.id === 102);

console.log("Product:", product);


// ============================================================
// 4. reduce()
// ============================================================
// Reduces the entire array into ONE final value.
// Very useful for totals, calculations, counting, grouping, etc.

const prices = [100, 200, 300, 400];

const total = prices.reduce((acc, price) => {
    return acc + price;
}, 0);

console.log("Total:", total);
// 1000


// Real Project Example:
// Shopping cart total

const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
];

const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
}, 0);

console.log("Cart Total:", cartTotal);
// 53000


// ============================================================
// 5. forEach()
// ============================================================
// Executes a function for every element.
// Does NOT return a new array.

const numbers_2 = [10, 20, 30];

numbers_2.forEach((num) => {
    console.log("forEach:", num);
});


// Real Project Example:

const users_3 = ["Gourav", "Rahul", "Aman"];

users_3.forEach((user) => {
    console.log(`Welcome ${user}`);
});


// Important:
// map() -> returns a NEW array
// forEach() -> returns undefined


// ============================================================
// 6. some()
// ============================================================
// Returns TRUE if AT LEAST ONE element
// satisfies the condition.

const numbers_3 = [10, 20, 30, 40];

const hasGreaterThan30 = numbers_3.some((num) => num > 30);

console.log("some:", hasGreaterThan30);
// true


// Real Project Example:
// Check whether any user is an admin

const users_4 = [
    { name: "Gourav", role: "user" },
    { name: "Rahul", role: "admin" },
    { name: "Aman", role: "user" },
];

const hasAdmin = users_4.some((user) => user.role === "admin");

console.log("Has Admin:", hasAdmin);
// true


// ============================================================
// 7. every()
// ============================================================
// Returns TRUE only if ALL elements
// satisfy the condition.

const numbers_4 = [10, 20, 30, 40];

const allGreaterThan5 = numbers_4.every((num) => num > 5);

console.log("every:", allGreaterThan5);
// true


const allGreaterThan20 = numbers_4.every((num) => num > 20);

console.log("every:", allGreaterThan20);
// false


// Real Project Example:
// Check whether all products are in stock

const products_1 = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: true },
];

const allProductsAvailable = products_1.every(
    (product) => product.inStock
);

console.log("All Products Available:", allProductsAvailable);
// true


// ============================================================
// 8. findIndex()
// ============================================================
// Returns the INDEX of the first element
// that satisfies the condition.
// Returns -1 if nothing is found.

const users_5 = [
    { id: 101, name: "Gourav" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Aman" },
];

const userIndex = users_5.findIndex((user) => user.id === 102);

console.log("findIndex:", userIndex);
// 1


// Useful when updating an item:

const index = users_5.findIndex((user) => user.id === 102);

if (index !== -1) {
    users_5[index].name = "Rahul Kumar";
}

console.log(users_5);


// ============================================================
// 9. includes()
// ============================================================
// Checks whether an array contains a specific value.
// Returns TRUE or FALSE.

const roles = ["admin", "user", "manager"];

console.log("includes:", roles.includes("admin"));
// true

console.log("includes:", roles.includes("guest"));
// false


// Real Project Example:

const allowedRoles = ["admin", "manager"];

const currentUserRole = "admin";

if (allowedRoles.includes(currentUserRole)) {
    console.log("Access Granted");
}


// ============================================================
// 10. sort()
// ============================================================
// Sorts the ORIGINAL array.
// For numbers, provide a comparison function.

const numbers_5 = [50, 10, 40, 20, 30];

numbers_5.sort((a, b) => a - b);

console.log("Ascending:", numbers_5);
// [10, 20, 30, 40, 50]


// Descending

numbers_5.sort((a, b) => b - a);

console.log("Descending:", numbers_5);
// [50, 40, 30, 20, 10]


// Real Project Example:
// Sort products by price

const products_2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 30000 },
];

products_2.sort((a, b) => a.price - b.price);

console.log("Products by Price:", products_2);


// ============================================================
// 11. slice()
// ============================================================
// Returns a portion of an array.
// DOES NOT modify the original array.
//
// slice(start, end)
// end is NOT included.

const numbers_6 = [10, 20, 30, 40, 50];

const sliced = numbers_6.slice(1, 4);

console.log("slice:", sliced);
// [20, 30, 40]

console.log("Original:", numbers_6);
// [10, 20, 30, 40, 50]


// Real Project Example:
// Pagination

const pageData = numbers_6.slice(0, 3);

console.log("Page Data:", pageData);
// [10, 20, 30]


// ============================================================
// 12. splice()
// ============================================================
// Adds, removes, or replaces elements.
// MODIFIES the original array.
//
// splice(startIndex, deleteCount, newElements)

const numbers_7 = [10, 20, 30, 40, 50];

numbers_7.splice(2, 1);

console.log("After splice:", numbers_7);
// [10, 20, 40, 50]


// Add elements

const numbers_8 = [10, 20, 40];

numbers_8.splice(2, 0, 30);

console.log("Add:", numbers_8);
// [10, 20, 30, 40]


// Replace elements

const numbers_9 = [10, 20, 30];

numbers_9.splice(1, 1, 200);

console.log("Replace:", numbers_9);
// [10, 200, 30]


// ============================================================
// 13. push()
// ============================================================
// Adds element(s) to the END.
// Modifies the original array.

const arr = [10, 20];

arr.push(30);

console.log("push:", arr);
// [10, 20, 30]


// Multiple elements

arr.push(40, 50);

console.log("push multiple:", arr);
// [10, 20, 30, 40, 50]


// ============================================================
// 14. concat()
// ============================================================
// Combines arrays.
// Does NOT modify the original arrays.

const frontend = ["HTML", "CSS", "JavaScript"];

const backend = ["Node.js", "Express", "MongoDB"];

const skills = frontend.concat(backend);

console.log("concat:", skills);


// Modern alternative using spread:

const skills_2 = [...frontend, ...backend];

console.log("spread:", skills_2);


// ============================================================
// 15. pop()
// ============================================================
// Removes the LAST element.
// Modifies the original array.

const numbers_10 = [10, 20, 30];

const removedElement = numbers_10.pop();

console.log("Removed:", removedElement);
// 30

console.log("Array:", numbers_10);
// [10, 20]


// ============================================================
// 16. shift()
// ============================================================
// Removes the FIRST element.
// Modifies the original array.

const numbers_11 = [10, 20, 30];

const firstElement = numbers_11.shift();

console.log("Removed:", firstElement);
// 10

console.log("Array:", numbers_11);
// [20, 30]


// ============================================================
// 17. unshift()
// ============================================================
// Adds element(s) to the BEGINNING.
// Modifies the original array.

const numbers_12 = [20, 30];

numbers_12.unshift(10);

console.log("unshift:", numbers_12);
// [10, 20, 30]


// ============================================================
// 18. join()
// ============================================================
// Converts array elements into a STRING.

const skills_3 = ["React", "Node.js", "MongoDB"];

const skillString = skills_3.join(", ");

console.log("join:", skillString);
// React, Node.js, MongoDB


// ============================================================
// 19. flat()
// ============================================================
// Flattens nested arrays.

const nestedArray = [1, [2, 3], [4, 5]];

const flatArray = nestedArray.flat();

console.log("flat:", flatArray);
// [1, 2, 3, 4, 5]


// ============================================================
// 20. flatMap()
// ============================================================
// Performs map() + flat(1).

const numbers_13 = [1, 2, 3];

const flatMapped = numbers_13.flatMap((num) => {
    return [num, num * 2];
});

console.log("flatMap:", flatMapped);
// [1, 2, 2, 4, 3, 6]


// ============================================================
// 21. at()
// ============================================================
// Returns an element at a particular index.
// Supports negative indexes.

const numbers_14 = [10, 20, 30, 40, 50];

console.log("at(0):", numbers_14.at(0));
// 10

console.log("at(-1):", numbers_14.at(-1));
// 50

console.log("at(-2):", numbers_14.at(-2));
// 40


// ============================================================
// 22. toSorted()
// ============================================================
// Creates a NEW sorted array.
// Does NOT modify the original.

const numbers_15 = [50, 10, 40, 20, 30];

const sortedNumbers = numbers_15.toSorted((a, b) => a - b);

console.log("toSorted:", sortedNumbers);
// [10, 20, 30, 40, 50]

console.log("Original:", numbers_15);
// [50, 10, 40, 20, 30]


// ============================================================
// 23. toReversed()
// ============================================================
// Creates a NEW reversed array.
// Does NOT modify the original.

const numbers_16 = [1, 2, 3, 4, 5];

const reversedNumbers = numbers_16.toReversed();

console.log("toReversed:", reversedNumbers);
// [5, 4, 3, 2, 1]

console.log("Original:", numbers_16);
// [1, 2, 3, 4, 5]


// ============================================================
// 24. toSpliced()
// ============================================================
// Similar to splice() but does NOT modify the original.

const numbers_17 = [10, 20, 30, 40];

const newNumbers = numbers_17.toSpliced(1, 2, 200, 300);

console.log("toSpliced:", newNumbers);
// [10, 200, 300, 40]

console.log("Original:", numbers_17);
// [10, 20, 30, 40]


// ============================================================
// 25. with()
// ============================================================
// Creates a NEW array with an element replaced.
// Does NOT modify the original.

const numbers_18 = [10, 20, 30];

const updatedNumbers = numbers_18.with(1, 200);

console.log("with:", updatedNumbers);
// [10, 200, 30]

console.log("Original:", numbers_18);
// [10, 20, 30]




// ==================================================
// Static Array Methods
// ==================================================


// Array.isArray()
// Checks whether the given value is an array

console.log("Array.isArray:", Array.isArray([1, 2, 3]));
console.log("Array.isArray:", Array.isArray("Hello"));


// Array.from()
// Creates a new array from an iterable or array-like object

const str = "Hello";
const arrFrom = Array.from(str);

console.log("Array.from:", arrFrom);


// Array.of()
// Creates a new array from the given arguments

const arrOf = Array.of(10, 20, 30);

console.log("Array.of:", arrOf);




// ============================================================
// QUICK REVISION
// ============================================================
//
// map()       -> Transform every element
// filter()    -> Get multiple matching elements
// find()      -> Get first matching element
// findIndex() -> Get index of first matching element
// reduce()    -> Convert array into one value
// forEach()   -> Execute code for every element
// some()      -> At least one satisfies condition?
// every()     -> All satisfy condition?
// includes()  -> Does value exist?
// sort()      -> Sort original array
// slice()     -> Copy/extract portion
// splice()    -> Add/remove/replace in original array
// push()      -> Add at end
// pop()       -> Remove from end
// shift()     -> Remove from beginning
// unshift()   -> Add at beginning
// concat()    -> Combine arrays
// join()      -> Array -> String
// flat()      -> Flatten nested array
// flatMap()   -> map() + flat(1)
// at()        -> Get element by index
// toSorted()  -> Immutable sort
// toReversed()-> Immutable reverse
// toSpliced() -> Immutable splice
// with()      -> Immutable element replacement
//
// ============================================================