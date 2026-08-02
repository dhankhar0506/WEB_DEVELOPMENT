## Spread Operator
-> Used to spread/copy array elements.
- Creates a shallow copy.
    - const arr1 = [1, 2, 3];
    - const arr2 = [...arr1];

2. Combine arrays:
    - const a = [1, 2];
    - const b = [3, 4];
    - const result = [...a, ...b]; // [1, 2, 3, 4]

## Rest ...
->Same syntax ..., but different purpose.
-> Rest collects remaining values.'

    1.=> const user = {
                name: "Gourav",
                age: 25,
                city: "Delhi"
            };

            const { name, ...rest } = user;

            console.log(rest);
            // { age: 25, city: "Delhi" }

## What is Enumerable?

-> enumerable is a property attribute that decides whether a property should appear during common object enumeration operations.
-> It allows us to exclude/hide a property from common object listing methods, copying operations, and loops, while the property still exists in the object.
    const user = {
        name: "Gourav",
        age: 25
    };

    Object.defineProperty(user, "id", {
        value: 101,
        enumerable: false
    });

    - user.id; // ✅ 101
    - Object.keys(user);// ["name", "age"]
    So id exists, but is not enumerated .

-> What is an Enumeration Operation?
 Enumeration simply means going through/listing an object's properties one by one.

-> We can make a method non-enumerable
    - const user = {
        name: "Gourav"
    };
    
    - Object.defineProperty(user, "greet", {
        value: function () {console.log("Hello");},enumerable: false
    });

->      USER OBJECT
┌──────────────────────────┐
│ name: "Gourav"     👁️    │ enumerable
│ age: 25            👁️    │ enumerable
│ city: "Delhi"      👁️    │ enumerable
│ internalId: 9283   🙈    │ non-enumerable
└──────────────────────────┘

## Conditionals
-> Conditional statements allow us to execute different code based on whether a condition is true or false

## if_else if_ else
    const marks = 75;
    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 70) {
        console.log("B");
    } else if (marks >= 50) {
        console.log("C");
    } else {
        console.log("Fail");
    }

## switch
    const role = "admin";
    switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    case "guest":
        console.log("Guest access");
        break;

    default:
        console.log("Invalid role");
    }
    -> Without break, JavaScript continues executing the next cases. This is called fall-through.

## Ternary Operator
 -> const result = age >= 18 ? "Adult" : "Minor";

## && for conditional execution
    -> 


## Functions
-> A function is a reusable block of code designed to perform a particular task.
    
    - function add(a, b) {
        return a + b;
    }

    - add(10, 20); // 30
    - add      → function name
    - a, b     → parameters
    - 10, 20   → arguments
    - return   → sends result back

## Different Types of Functions
1. Function Declaration
    -> function greet(name) {
            return `Hello ${name}`;
        }

    - greet("Gourav");
    - Function declarations are hoisted, so this works

2. Function Expression => A function stored in a variable.
    const greet = function () {
        console.log("Hello");
    };

    greet();

3. Arrow Function
    -> const add = (a, b) => {
        return a + b;
    };

    -> const square = n => n * n;
    -> Arrow functions don't have their own this.

4. Callback Function => A function passed to another function.

    function greet(name) {
        console.log("Hello " + name);
    }

    function processUser(callback) {
            callback("Gourav");
    }

    processUser(greet);

5. Higher-Order Function
    => takes another function as an argument, or
    => returns another function.

    =>  function calculate(a, b, operation) {
            return operation(a, b);
        }

        const add = (a, b) => a + b;
        calculate(10, 20, add); // 30
    -> calculate → higher-order function
    -> add → callback function

    - map()
    - filter()
    - reduce()
    - forEach()

6. IIFE => Immediately Invoked Function Expression
    (function () {
        console.log("Hello");
    })();

7. Generator Function => A special function that can pause and resume execution.
    function* numbers() {
        yield 1;
        yield 2;
        yield 3;
    }

    const gen = numbers();

    gen.next(); // { value: 1, done: false }
    gen.next(); // { value: 2, done: false }


## LOOP 
-> A loop repeatedly executes code until a condition is met or a sequence has been processed.
    
    1. for Loop =>Best when you need control over the index.
        const arr = ["A", "B", "C"];
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

    2. while => Runs while a condition remains true.
        - let i = 0;

        while (i < 5) {
            console.log(i);
            i++;
        }
    
    3. do...while => Executes at least once, then checks the condition.
    let i = 10;

        do {
            console.log(i);
            i++;
        } while (i < 5);
    
    4. for...of  => Used to iterate over values of iterables.
        - const arr = ["React", "Node", "MongoDB"];
        - for (const value of arr) {
            console.log(value);
        }
        Array
        String
        Map
        Set
**Yes — plain JavaScript objects are not iterable by default, which is why for...of doesn't directly work on them**
    
    5. for...in => Used to iterate over enumerable string property keys of an object, including inherited enumerable ones.
        const user = {
            name: "Gourav",
            age: 25
        };

        for (const key in user) {
            console.log(key);
        }

## break and continue   
1. break => Stops the loop completely.
2. continue => Skips only the current iteration.

## Iterable vs Enumerable
- Enumerable Related to object properties.
    - Should this property participate in common property enumeration?
- Iterable => Related to values being produced one-by-one in a defined sequence.

## isInstance()
    - const arr = [1, 23, 4];
    - console.log(arr instanceof Array);
    // true