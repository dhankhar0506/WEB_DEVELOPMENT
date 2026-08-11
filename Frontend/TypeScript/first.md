## What is TypeScript?
-> TypeScript is a programming language built on top of JavaScript that adds static type checking and some additional development features.

> In JS:
    - let age = 25;
    - age = "Gourav"; // Allowed
    > JavaScript is dynamically typed, so the variable can hold a number and later a string.
> TypeScript
    - let age: number = 25;
    - age = "Gourav"; // ❌ Type error

        TypeScript
┌─────────────────────────┐
│                         │
│      JavaScript         │
│   ┌───────────────┐     │
│   │               │     │
│   └───────────────┘     │
│                         │
│ + Types                 │
│ + Interfaces            │
│ + Type system features  │
└─────────────────────────┘


## Main Features TypeScript Adds to JavaScript
-> Static Type Checking
    -> let age: number = 25;
    -> age = "hello"; // ❌

> 2. Type Inference  
    -> Type inference means TypeScript automatically determines a value's type from the code without requiring an explicit type annotation.
    -> You don't always need to specify the type.

-> 3. Basic Types
    - let name: string = "Gourav";
    - let age: number = 25;
    - let active: boolean = true;

    Array => 
    let skills: string[] = [
        "React",
        "Node",
        "Next"
    ];

> 4. Function Types
        function add(a: number, b: number): number {
            return a + b;
        }
    
    -> Function returning nothing
            Use void:
            function printMessage(message: string): void {
                console.log(message);
            }

> 5. Object Types
    const user: {name: string;age: number;} 
        = {
            name: "Gourav",
            age: 25
        };

## Interface
-> An interface defines the expected shape/structure of an object.
    interface User {
        name: string;
        age: number;
        email: string;
    }

## Optional Properties ?
    interface User {
        name: string;
        age: number;
        phone?: string;
    }

## readonly
    -> Means a property shouldn't be reassigned through this type.
    -> Prevents reassignment through that typed property.
        interface User {
            readonly id: number;
            name: string;
        }

        const user: User = { id: 1,name: "Gourav"};

        user.name = "Rahul"; // ✅

        user.id = 2; // ❌

## Union Types
    -> Sometimes a value can legitimately have more than one type/value.
    
    let id: string | number;

    id = 101;       // ✅
    id = "USER101"; // ✅

    id = true;      // ❌

## Literal Types
    -> A literal type restricts the variable to specific exact values.
    -> let status:"pending" | "success" | "failed";

## Extending Interfaces
    -> Extending Interfaces
        interface Person {
            name: string;
            age: number;
        }

        interface Employee extends Person {
            salary: number;
        }

## any 
    -> Don't type-check this value. I will handle it myself.

## unknown 
    -> We don't currently know what type this value is. 
        -> I don't know whether data is actually a string. Check it first.
        
        if (typeof data === "string") {
            data.toUpperCase(); 
        }

## interface vs type
-> Both can define the shape of an object.

> interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Gourav",
    age: 25
};

> type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Gourav",
    age: 25
};

> Key difference: type is more flexible
-> type is more flexible because it can represent unions, literals, intersections, etc

-> Interfaces are mainly used for object/class shapes, support extends, and also support declaration merging.

Interface => Use interface mainly for object shapes/contracts. 
Type => Use type when you need unions, literals, intersections, or aliases.

## Type narrowing
-> means using checks such as typeof, in, or other conditions to reduce a broad type into a more specific type before using it.
    function printValue(value: string | number) {
        console.log(value.toUpperCase()); // ❌
    }

    function printValue(value: string | number) {

        if (typeof value === "string") {
            console.log(value.toUpperCase());
        } else {
            console.log(value.toFixed(2));
        }
    }

## Generics <T>
-> T is a type placeholder. The actual type is decided when the generic is used, either explicitly by you or automatically by TypeScript through inference.
-> Generics allow us to create reusable, type-safe code where the actual type can be decided when the code is used.
    function getValue<T>(value: T): T {
        return value;
    }
    getValue<string>("Gourav");
    // T = string

    getValue<number>(100);
    // T = number

## Partial<T>
-> Your understanding here is exactly right.
-> Partial<T> takes an existing type/interface and makes all its properties optional, so we don't need to add ? one by one.