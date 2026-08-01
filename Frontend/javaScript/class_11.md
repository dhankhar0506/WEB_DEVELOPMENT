## What is this in JavaScript?
- this is a keyword that refers to the object that is calling the function.
- It points to who is calling the function.
  const person = {
  name: "John",
  sayHi: function() {
  console.log(this.name);
  }
  };
  this-> person.sayHi(); // "John"

## explain how this works in JavaScript

[Memory]
user
│
├── name = "Gourav"
│
└── show ----------------------+
|
▼
function show() {
console.log(this.name);
}
▲
|
x -----------------------------+

            x has:
            ✔ Function reference

            x does NOT have:
            ❌ name
            ❌ user object
            ❌ this

## Problem -2

const person = {
name: "Rahul",

    show() {
        console.log(this.name);
    }

};

    person(memory)
    │
    ├── name ─────► "Rahul"
    │
    └── show ─────► Function Object (0x100)

// create a new object student
const student = {
name: "Amit"
}

    person(memory)
    │
    ├── name ─────► "Rahul"
    │
    └── show ─────► Function (0x100)


    student
    │
    └── name ─────► "Amit"

// reference the function show of person to student
student.show = person.show;

    person
    │
    ├── name ─────► "Rahul"
    │
    └── show ─────► Function (0x100)



    student
    │
    ├── name ─────► "Amit"
    │
    └── show ─────► Function (0x100)

// actually -> it doesnot create a copt it just creates a reference to the function show of person object
person.show ───┐
│
▼
Room 101
▲
│
student.show───┘

## Problem=3

const user = {
name: "Gourav",

    show() {
        console.log(this.name);
    }

};

setTimeout(user.show, 1000); // output ->undefined
-> yha par bhi hum user.show ki sirf refrence pass kar rahe hai settimeout ko, isliye setitmeout function ke pass memory level par name name property nahi hai, isliye undefined print hoga.

## problem=4

const obj = {

    name: "Gourav",

    show: () => {
        console.log(this.name);
    }

};

obj.show(); // undefined
Arrow function = Does NOT create its own this.
Instead it says: "I'll use my parent's this." This is called lexical this.

## problem=5

const obj = {

    name: "Gourav",

    show() {

        const x = () => {
            console.log(this.name);
        };

        x();
    }

};

    obj (0x100)
    │
    ├── name ─────► "Gourav"
    │
    └── show ─────► Function (0x500)

- The arrow function doesn't have its own this. It captures the this from its surrounding execution context / lexical scope . Since show() was called as obj.show(), this inside show() points to obj. The arrow function captures that this, so later this.name becomes obj.name, which prints "Gourav".\

## problem=6

const user = {
name: "Gourav",

    show() {
        console.log("A:", this.name);

        const inner = function () {
            console.log("B:", this.name);
        };

        const arrow = () => {
            console.log("C:", this.name);
        };

        inner();
        arrow();
    }

};

user.show();
A: Gourav
B: undefined
C: Gourav



## Why do we need call(), apply(), and bind()?
-> JavaScript gives us three methods to manually decide the value of this.

## call() method
    function printName() {
        console.log(this.name);
    }

    const student1 = {
        name: "Gourav"
    };

    printName.call(student1); // Gourav

## What normally happens?
    printName(); in this case this -> ? it doesnot point to anyone
    -> undefined will be printed because this is not pointing to any object.

## What happens with call()?
 -> "Execute printName immediately, but before you start, set this to student1."
    Execution Context
        this
        │
        ▼
        student1 // Gourav
    
       
## behind the scenes
        student1
        │
        └── name → "Gourav"

        printName
        │
        └── Function

        printName.call(student1);

        Execution Context

            this
            │
            ▼
            student1


## what is call apply and bind in javascript?
1. What is call()? => call() immediately executes the function and sets this to the object you provide.
   => function.call(thisValue)
   - call(user, arg1, arg2, arg3) arguments are passed separately.
  
2. apply() => apply() immediately executes the function and sets this to the object you provide.
   => function.apply(thisValue)
   -> Arguments are inside an array.
   - apply(user, [arg1, arg2, arg3]) arguments are passed as an array.

3. bind() => bind() creates a new function with a fixed this value.
       function greet() {
          console.log(this.name);
      }

      const user = {
          name: "Gourav"
      };
      const x = greet.bind(user);
      bind() = doesn't call the function.
            = It creates a new function.


## why we send arrow function as a callback function?
=> setTimeout(() => user.show(), 1000);
"when we pass arrow function as callback function in setTimeout it is like anonymous function or kind of reference we send to setTimeout. When it is done then it calls the function inside the arrow function."