// ============================================================
// JAVASCRIPT OPERATORS
// MOST IMPORTANT & MOST USED
// ============================================================


// ============================================================
// 1. ARITHMETIC OPERATORS
// ============================================================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
// 13

console.log("Subtraction:", a - b);
// 7

console.log("Multiplication:", a * b);
// 30

console.log("Division:", a / b);
// 3.333...

console.log("Modulus:", a % b);
// 1

console.log("Exponentiation:", a ** b);
// 1000


// ============================================================
// 2. ASSIGNMENT OPERATORS
// ============================================================

let x = 10;

x += 5;   // x = x + 5
console.log("+= :", x);
// 15

x -= 5;   // x = x - 5
console.log("-= :", x);
// 10

x *= 2;   // x = x * 2
console.log("*= :", x);
// 20

x /= 2;   // x = x / 2
console.log("/= :", x);
// 10

x %= 3;   // x = x % 3
console.log("%= :", x);
// 1

x **= 3;  // x = x ** 3
console.log("**= :", x);
// 1


// ============================================================
// 3. COMPARISON OPERATORS
// ============================================================

console.log(10 == "10");
// true

console.log(10 === "10");
// false

console.log(10 != "10");
// false

console.log(10 !== "10");
// true

console.log(10 > 5);
// true

console.log(10 < 20);
// true

console.log(10 >= 10);
// true

console.log(10 <= 10);
// true


// IMPORTANT:
// Prefer === and !==
// because they also check data type.

console.log(10 === 10);
// true

console.log(10 === "10");
// false


// ============================================================
// 4. LOGICAL OPERATORS
// ============================================================


// AND (&&)
// Returns true when BOTH conditions are true.

const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
// true


// OR (||)
// Returns true when AT LEAST ONE condition is true.

const isAdmin = false;
const isManager = true;

console.log(isAdmin || isManager);
// true


// NOT (!)
// Reverses the boolean value.

const loggedIn = true;

console.log(!loggedIn);
// false


// ============================================================
// 5. NULLISH COALESCING OPERATOR (??)
// ============================================================
// Returns the right-side value only when
// the left-side value is null or undefined.

const username = null;

const displayName_1 = username ?? "Guest";

console.log(displayName_1);
// Guest


// Important difference between || and ??

const count = 0;

console.log(count || 10);
// 10

console.log(count ?? 10);
// 0


// ============================================================
// 6. OPTIONAL CHAINING (?.)
// ============================================================
// Safely accesses nested properties.
// Prevents error when a value is null/undefined.

const user = {
    name: "Gourav",
    address: {
        city: "Delhi",
    },
};

console.log(user?.address?.city);
// Delhi

console.log(user?.profile?.email);
// undefined


// Very common with API responses:

const response = {
    data: {
        user: {
            name: "Gourav",
        },
    },
};

console.log(response?.data?.user?.name);


// ============================================================
// 7. TERNARY OPERATOR
// ============================================================
// Short form of if/else.
//
// condition ? trueValue : falseValue

const userAge = 20;

const status = userAge >= 18
    ? "Adult"
    : "Minor";

console.log(status);
// Adult


// React Example:
//
// {isLoggedIn ? <Dashboard /> : <Login />}


// ============================================================
// 8. INCREMENT / DECREMENT
// ============================================================

let count1 = 10;

count1++;

console.log("Increment:", count1);
// 11

count1--;

console.log("Decrement:", count1);
// 10


// Pre-increment

let num1 = 10;

console.log(++num1);
// 11


// Post-increment

let num2 = 10;

console.log(num2++);
// 10

console.log(num2);
// 11


// ============================================================
// 9. UNARY OPERATORS
// ============================================================

let value = "10";

console.log(+value);
// 10

console.log(-value);
// -10


// typeof

console.log(typeof "Hello");
// string

console.log(typeof 100);
// number

console.log(typeof true);
// boolean


// ============================================================
// 10. typeof OPERATOR
// ============================================================

console.log(typeof "Gourav");
// string

console.log(typeof 25);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined

console.log(typeof {});
// object

console.log(typeof []);
// object


// ============================================================
// 11. instanceof
// ============================================================
// Checks whether an object belongs to a particular class/type.

const arr = [1, 2, 3];

console.log(arr instanceof Array);
// true

console.log(arr instanceof Object);
// true


// ============================================================
// 12. IN OPERATOR
// ============================================================
// Checks whether a property exists in an object.

const person = {
    name: "Gourav",
    age: 25,
};

console.log("name" in person);
// true

console.log("email" in person);
// false


// ============================================================
// 13. DELETE OPERATOR
// ============================================================
// Deletes an object property.

const employee = {
    name: "Gourav",
    age: 25,
};

delete employee.age;

console.log(employee);
// { name: "Gourav" }


// ============================================================
// 14. SPREAD OPERATOR (...)
// ============================================================
// Expands elements/properties.
//
// Very important in React and MERN.

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
// [1, 2, 3, 4, 5]


// Object spread

const user1 = {
    name: "Gourav",
    age: 25,
};

const updatedUser = {
    ...user1,
    age: 26,
};

console.log(updatedUser);


// ============================================================
// 15. REST OPERATOR (...)
// ============================================================
// Collects multiple values into an array.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30));
// 60


// Object rest

const user2 = {
    name: "Gourav",
    age: 25,
    role: "Developer",
};

const { name, ...otherDetails } = user2;

console.log(name);
// Gourav

console.log(otherDetails);
// { age: 25, role: "Developer" }


// ============================================================
//                  ES6+ FEATURES
// ============================================================


// ============================================================
// 1. let and const
// ============================================================
// ES6 introduced let and const.
//
// let -> value can be reassigned
// const -> value cannot be reassigned

let username1 = "Gourav";

username1 = "Rahul";

console.log(username1);


const age1 = 25;

// age1 = 30; // Error


// ============================================================
// 2. ARROW FUNCTIONS
// ============================================================
// Shorter syntax for functions.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Arrow function

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20));


// Short form

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));
// 20


// ============================================================
// 3. TEMPLATE LITERALS
// ============================================================
// Use backticks (`).
// Allows variables and expressions inside ${}.

const name1 = "Gourav";
const age2 = 25;

const message = `My name is ${name1} and I am ${age2} years old.`;

console.log(message);


// ============================================================
// 4. DESTRUCTURING
// ============================================================


// Array destructuring

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);
// red

console.log(second);
// green


// Object destructuring

const user3 = {
    name: "Gourav",
    age: 25,
};

const { name: userName, age: userAge1 } = user3;

console.log(userName);
console.log(userAge1);


// ============================================================
// 5. DEFAULT PARAMETERS
// ============================================================
// Provides a default value when argument is undefined.

function greet(name = "Guest") {
    return `Hello ${name}`;
}

console.log(greet("Gourav"));
// Hello Gourav

console.log(greet());
// Hello Guest


// ============================================================
// 6. REST PARAMETERS
// ============================================================

function total(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(total(10, 20, 30, 40));
// 100


// ============================================================
// 7. SPREAD SYNTAX
// ============================================================


// Array

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr2);


// Object

const obj1 = {
    name: "Gourav",
};

const obj2 = {
    ...obj1,
    age: 25,
};

console.log(obj2);


// ============================================================
// 8. ENHANCED OBJECT LITERALS
// ============================================================

const userName1 = "Gourav";
const userAge2 = 25;

const user4 = {
    userName1,
    userAge2,
};

console.log(user4);


// Method shorthand

const user5 = {
    name: "Gourav",

    greet() {
        console.log(`Hello ${this.name}`);
    },
};

user5.greet();


// ============================================================
// 9. COMPUTED PROPERTY NAMES
// ============================================================

const property = "email";

const user6 = {
    [property]: "gourav@gmail.com",
};

console.log(user6);


// ============================================================
// 10. FOR...OF LOOP
// ============================================================
// Iterates over values of iterable objects.

const numbers1 = [10, 20, 30];

for (const number of numbers1) {
    console.log(number);
}


// String

for (const char of "Hello") {
    console.log(char);
}


// ============================================================
// 11. FOR...IN LOOP
// ============================================================
// Iterates over object property keys.

const user7 = {
    name: "Gourav",
    age: 25,
};

for (const key in user7) {
    console.log(key, user7[key]);
}


// ============================================================
// 12. PROMISES
// ============================================================
// Represents the eventual success or failure
// of an asynchronous operation.

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// ============================================================
// 13. CLASS
// ============================================================
// ES6 introduced class syntax.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const user8 = new User("Gourav", 25);

user8.greet();


// ============================================================
// 14. MODULES
// ============================================================
// export / import
//
// Example:
//
// export const name = "Gourav";
//
// import { name } from "./user.js";
//
// In Node.js you may also commonly see:
//
// module.exports = ...
// require(...)


// ============================================================
// 15. SYMBOL
// ============================================================
// Creates a unique primitive value.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false


// ============================================================
// 16. MAP
// ============================================================
// Map is a collection of key-value pairs.
// Keys can be any data type.

const userMap = new Map();

userMap.set("name", "Gourav");
userMap.set("age", 25);

console.log(userMap.get("name"));
// Gourav

console.log(userMap.has("age"));
// true


// ============================================================
// 17. SET
// ============================================================
// Stores UNIQUE values.

const numbers2 = new Set([1, 2, 2, 3, 3, 4]);

console.log(numbers2);
// Set(4) {1, 2, 3, 4}

console.log(numbers2.has(2));
// true

numbers2.add(5);

console.log(numbers2);


// ============================================================
// 18. PROMISE + ASYNC/AWAIT
// ============================================================
// async/await makes Promise-based asynchronous code
// easier to read.
//
// Note:
// async/await was introduced after the original ES6 release,
// but it is an essential modern JavaScript feature.

async function getData() {
    try {
        const response = await fetch(
            "https://api.example.com/users"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


// ============================================================
// 19. OPTIONAL CHAINING
// ============================================================

const response_1 = {
    data: {
        user: {
            name: "Gourav",
        },
    },
};

console.log(response_1?.data?.user?.name);
// Gourav

console.log(response_1?.data?.profile?.email);
// undefined


// ============================================================
// 20. NULLISH COALESCING
// ============================================================

const userName2 = null;

const displayName = userName2 ?? "Guest";

console.log(displayName);
// Guest


// ============================================================
// 21. SHORT-CIRCUIT EVALUATION
// ============================================================

// AND

const isLoggedIn = true;

isLoggedIn && console.log("Show Dashboard");


// OR

const userName3 = "";

const displayName2 = userName3 || "Guest";

console.log(displayName2);
// Guest


// ============================================================
// 22. LOGICAL ASSIGNMENT OPERATORS
// ============================================================

// ||=
// Assigns only if the left side is falsy.

let name2 = "";

name2 ||= "Guest";

console.log(name2);
// Guest


// &&=
// Assigns only if the left side is truthy.

let userLoggedIn = true;

userLoggedIn &&= false;

console.log(userLoggedIn);
// false


// ??=
// Assigns only if the left side is null/undefined.

let userRole = null;

userRole ??= "user";

console.log(userRole);
// user


// ============================================================
// QUICK REVISION - OPERATORS
// ============================================================
//
// +       -> Addition
// -       -> Subtraction
// *       -> Multiplication
// /       -> Division
// %       -> Remainder
// **      -> Power
//
// =       -> Assignment
// +=      -> Add and assign
// -=      -> Subtract and assign
// *=      -> Multiply and assign
// /=      -> Divide and assign
//
// ==      -> Loose equality
// ===     -> Strict equality
// !=      -> Loose inequality
// !==     -> Strict inequality
// >       -> Greater than
// <       -> Less than
// >=      -> Greater than or equal
// <=      -> Less than or equal
//
// &&      -> AND
// ||      -> OR
// !       -> NOT
//
// ??      -> Nullish coalescing
// ?.      -> Optional chaining
// ?:      -> Ternary
//
// ...     -> Spread / Rest
// typeof  -> Check data type
// instanceof -> Check object type
// in      -> Check property existence
// delete  -> Delete property
//
// ============================================================


// ============================================================
// QUICK REVISION - ES6 / MODERN JAVASCRIPT
// ============================================================
//
// let / const
// Arrow Functions
// Template Literals
// Destructuring
// Default Parameters
// Rest Parameters
// Spread Syntax
// Enhanced Object Literals
// Computed Properties
// for...of
// for...in
// Classes
// Modules
// Promises
// Symbol
// Map
// Set
//
// Modern additions commonly used with ES6:
// Optional Chaining
// Nullish Coalescing
// Async / Await
// Logical Assignment Operators
//
// ============================================================