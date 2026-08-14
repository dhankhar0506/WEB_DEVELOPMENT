// ============================================================
// JAVASCRIPT OBJECT - MOST IMPORTANT & MOST USED METHODS
// ============================================================


// ============================================================
// 1. Object.keys()
// ============================================================
// Returns an ARRAY containing all enumerable property names (keys).

const user = {
    name: "Gourav",
    age: 25,
    role: "Developer",
};

const keys = Object.keys(user);

console.log("Object.keys:", keys);
// ["name", "age", "role"]


// Real Project Example:
// Check how many properties an object has

console.log("Number of properties:", Object.keys(user).length);


// ============================================================
// 2. Object.values()
// ============================================================
// Returns an ARRAY containing all property values.

const values = Object.values(user);

console.log("Object.values:", values);
// ["Gourav", 25, "Developer"]


// Real Project Example:
// Check whether an object contains a specific value

const hasDeveloperRole = Object.values(user).includes("Developer");

console.log("Has Developer Role:", hasDeveloperRole);
// true


// ============================================================
// 3. Object.entries()
// ============================================================
// Returns an ARRAY containing [key, value] pairs.

const entries = Object.entries(user);

console.log("Object.entries:", entries);

// [
//     ["name", "Gourav"],
//     ["age", 25],
//     ["role", "Developer"]
// ]


// Very useful for iteration

Object.entries(user).forEach(([key, value]) => {
    console.log(key, ":", value);
});


// ============================================================
// 4. Object.fromEntries()
// ============================================================
// Converts an array of [key, value] pairs into an object.

const entries_1 = [
    ["name", "Gourav"],
    ["age", 25],
    ["role", "Developer"],
];

const userObject = Object.fromEntries(entries_1);

console.log("Object.fromEntries:", userObject);

// {
//     name: "Gourav",
//     age: 25,
//     role: "Developer"
// }


// Real Project Example:
// Transform data before sending to an API


// ============================================================
// 5. Object.assign()
// ============================================================
// Copies properties from one or more objects
// into a target object.

const user_1 = {
    name: "Gourav",
};

const userDetails = {
    age: 25,
    role: "Developer",
};

const mergedUser = Object.assign({}, user_1, userDetails);

console.log("Object.assign:", mergedUser);

// {
//     name: "Gourav",
//     age: 25,
//     role: "Developer"
// }


// Modern and commonly preferred approach:

const mergedUser_2 = {
    ...user_1,
    ...userDetails,
};

console.log("Spread:", mergedUser_2);


// ============================================================
// 6. Object.hasOwn()
// ============================================================
// Checks whether an object has its own property.
// Returns true or false.

const product = {
    name: "Laptop",
    price: 50000,
};

console.log(
    "Object.hasOwn:",
    Object.hasOwn(product, "price")
);
// true

console.log(
    "Object.hasOwn:",
    Object.hasOwn(product, "brand")
);
// false


// ============================================================
// 7. Object.create()
// ============================================================
// Creates a new object using another object
// as its prototype.

const personPrototype = {
    greet() {
        console.log("Hello!");
    },
};

const person = Object.create(personPrototype);

person.name = "Gourav";

console.log("Object.create:", person.name);

person.greet();


// ============================================================
// 8. Object.freeze()
// ============================================================
// Prevents adding, deleting, or modifying properties.
// The object becomes frozen.

const settings = {
    theme: "dark",
};

Object.freeze(settings);

// This modification will not work
// settings.theme = "light";

console.log("Frozen Object:", settings);


// Check whether object is frozen

console.log(
    "Object.isFrozen:",
    Object.isFrozen(settings)
);
// true


// ============================================================
// 9. Object.seal()
// ============================================================
// Prevents adding or deleting properties.
// Existing properties can still be modified.

const user_2 = {
    name: "Gourav",
    age: 25,
};

Object.seal(user_2);

// Modification is allowed
user_2.age = 26;

// Adding a new property is not allowed
// user_2.role = "Developer";

// Deleting is not allowed
// delete user_2.name;

console.log("Sealed Object:", user_2);


// Check whether object is sealed

console.log(
    "Object.isSealed:",
    Object.isSealed(user_2)
);
// true


// ============================================================
// 10. Object.is()
// ============================================================
// Compares two values.
// Similar to === but handles some special cases differently.

console.log("Object.is:", Object.is(10, 10));
// true

console.log("Object.is:", Object.is("Hello", "Hello"));
// true

console.log("Object.is:", Object.is(NaN, NaN));
// true

console.log("Object.is:", Object.is(0, -0));
// false


// ============================================================
// 11. Object.getOwnPropertyNames()
// ============================================================
// Returns an array containing all own property names,
// including non-enumerable properties.

const user_3 = {
    name: "Gourav",
    age: 25,
};

const propertyNames = Object.getOwnPropertyNames(user_3);

console.log(
    "Object.getOwnPropertyNames:",
    propertyNames
);


// ============================================================
// 12. Object.getOwnPropertySymbols()
// ============================================================
// Returns an array of the object's own Symbol properties.

const id = Symbol("id");

const user_4 = {
    name: "Gourav",
    [id]: 101,
};

const symbols = Object.getOwnPropertySymbols(user_4);

console.log(
    "Object.getOwnPropertySymbols:",
    symbols
);


// ============================================================
// 13. Object.getPrototypeOf()
// ============================================================
// Returns the prototype of an object.

const user_5 = {
    name: "Gourav",
};

const prototype = Object.getPrototypeOf(user_5);

console.log(
    "Object.getPrototypeOf:",
    prototype
);


// ============================================================
// 14. Object.setPrototypeOf()
// ============================================================
// Changes the prototype of an object.
//
// Generally avoid using this frequently in application code
// because it can have performance implications.

const animal = {
    eat() {
        console.log("Animal is eating");
    },
};

const dog = {
    bark() {
        console.log("Dog is barking");
    },
};

Object.setPrototypeOf(dog, animal);

dog.bark();
dog.eat();


// ============================================================
// 15. Object.isExtensible()
// ============================================================
// Checks whether new properties can be added to an object.

const user_6 = {
    name: "Gourav",
};

console.log(
    "Object.isExtensible:",
    Object.isExtensible(user_6)
);
// true


// ============================================================
// 16. Object.preventExtensions()
// ============================================================
// Prevents adding new properties.
// Existing properties can still be modified or deleted.

const user_7 = {
    name: "Gourav",
    age: 25,
};

Object.preventExtensions(user_7);

user_7.age = 26;

// New property cannot be added
// user_7.role = "Developer";

console.log("Prevent Extensions:", user_7);


// ============================================================
// 17. Object.defineProperty()
// ============================================================
// Creates or modifies a property with specific descriptors.

const user_8 = {};

Object.defineProperty(user_8, "name", {
    value: "Gourav",
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log("defineProperty:", user_8);


// ============================================================
// 18. Object.defineProperties()
// ============================================================
// Defines multiple properties at once.

const user_9 = {};

Object.defineProperties(user_9, {
    name: {
        value: "Gourav",
        writable: true,
        enumerable: true,
    },

    age: {
        value: 25,
        writable: true,
        enumerable: true,
    },
});

console.log("defineProperties:", user_9);


// ============================================================
// 19. Object.getOwnPropertyDescriptor()
// ============================================================
// Returns information about a property.

const user_10 = {
    name: "Gourav",
};

const descriptor = Object.getOwnPropertyDescriptor(
    user_10,
    "name"
);

console.log(
    "getOwnPropertyDescriptor:",
    descriptor
);


// ============================================================
// 20. Object.getOwnPropertyDescriptors()
// ============================================================
// Returns descriptors for all own properties.

const descriptors =
    Object.getOwnPropertyDescriptors(user_10);

console.log(
    "getOwnPropertyDescriptors:",
    descriptors
);


// ============================================================
// 21. Object.groupBy()
// ============================================================
// Groups elements of an iterable based on a callback.
// Useful when working with arrays of objects.
//
// Supported in modern JavaScript environments.

const employees = [
    {
        name: "Gourav",
        department: "IT",
    },
    {
        name: "Rahul",
        department: "HR",
    },
    {
        name: "Aman",
        department: "IT",
    },
];

const groupedEmployees = Object.groupBy(
    employees,
    (employee) => employee.department
);

console.log("Object.groupBy:", groupedEmployees);

// {
//     IT: [
//         { name: "Gourav", department: "IT" },
//         { name: "Aman", department: "IT" }
//     ],
//     HR: [
//         { name: "Rahul", department: "HR" }
//     ]
// }


// ============================================================
// 22. Object.fromEntries() + Object.entries()
// ============================================================
// Very useful combination for transforming objects.

const user_11 = {
    name: "Gourav",
    age: 25,
    role: "Developer",
};

const updatedUser = Object.fromEntries(
    Object.entries(user_11).map(([key, value]) => {
        return [key, String(value)];
    })
);

console.log("Transformed Object:", updatedUser);

// {
//     name: "Gourav",
//     age: "25",
//     role: "Developer"
// }


// ============================================================
// IMPORTANT OBJECT OPERATIONS
// ============================================================


// Access property using dot notation

const user_12 = {
    name: "Gourav",
    age: 25,
};

console.log("Dot notation:", user_12.name);


// Access property using bracket notation

console.log("Bracket notation:", user_12["name"]);


// Dynamic property access

const property = "age";

console.log(
    "Dynamic property:",
    user_12[property]
);


// Add property

user_12.role = "Developer";

console.log("After Add:", user_12);


// Update property

user_12.age = 26;

console.log("After Update:", user_12);


// Delete property

delete user_12.role;

console.log("After Delete:", user_12);


// ============================================================
// OBJECT SPREAD
// ============================================================
// Creates a new object by copying properties.

const user_13 = {
    name: "Gourav",
    age: 25,
};

const updatedUser_2 = {
    ...user_13,
    age: 26,
    role: "Developer",
};

console.log("Object Spread:", updatedUser_2);


// Very common in React state updates:
//
// setUser({
//     ...user,
//     name: "Rahul"
// });


// ============================================================
// OBJECT DESTRUCTURING
// ============================================================
// Extracts properties from an object.

const user_14 = {
    name: "Gourav",
    age: 25,
    role: "Developer",
};

const { name, age, role } = user_14;

console.log(name);
console.log(age);
console.log(role);


// ============================================================
// NESTED OBJECT DESTRUCTURING
// ============================================================

const employee = {
    name: "Gourav",
    address: {
        city: "Delhi",
        country: "India",
    },
};

const {
    address: { city, country },
} = employee;

console.log("City:", city);
console.log("Country:", country);


// ============================================================
// OBJECT PROPERTY SHORTHAND
// ============================================================

const userName = "Gourav";
const userAge = 25;

const user_15 = {
    userName,
    userAge,
};

console.log("Property Shorthand:", user_15);


// ============================================================
// COMPUTED PROPERTY NAME
// ============================================================

const key = "name";

const user_16 = {
    [key]: "Gourav",
};

console.log("Computed Property:", user_16);


// ============================================================
// QUICK REVISION
// ============================================================
//
// Object.keys()
//      -> Object -> Array of keys
//
// Object.values()
//      -> Object -> Array of values
//
// Object.entries()
//      -> Object -> Array of [key, value]
//
// Object.fromEntries()
//      -> Array of [key, value] -> Object
//
// Object.assign()
//      -> Merge/copy objects
//
// Object.hasOwn()
//      -> Check whether object has its own property
//
// Object.create()
//      -> Create object with specified prototype
//
// Object.freeze()
//      -> Prevent add/delete/update
//
// Object.seal()
//      -> Prevent add/delete, allow update
//
// Object.is()
//      -> Compare two values
//
// Object.groupBy()
//      -> Group array elements into an object
//
// Object.getPrototypeOf()
//      -> Get prototype
//
// Object.setPrototypeOf()
//      -> Set prototype
//
// Object.defineProperty()
//      -> Define a property with descriptors
//
// Object.getOwnPropertyDescriptor()
//      -> Get property descriptor
//
// ============================================================