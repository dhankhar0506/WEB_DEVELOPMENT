## OOP Pillars
OOP
│
├── Class
├── Object
├── Encapsulation
├── Inheritance
├── Polymorphism
└── Abstraction

## class 
- A class is a blueprint (template) used to create objects
    class Student {
        constructor(name) {
            this.name = name;
        }

        study() {
            console.log(this.name + " is studying");
        }
    }

## object
- An object is a real instance created from a class.
- const s1 = new Student("Gourav");
- const s2 = new Student("Rahul");

## Constructor
- A special method that runs automatically when new creates an object.

##  Properties
- Definition Variables stored inside an object.
    this.name = name;
    this.age = age;

## Methods
- Definition Functions inside a class.

## Inheritance
- Inheritance means reusing the properties and methods of another object instead of writing them again.
- code reusability
- memory optimization

    - class Animal {
        eat() {
            console.log("Eating");
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Barking");
        }
    }


## What Does extends Do?
- extends means: Dog inherits everything from Animal.

## What is super()?
- super() calls the parent class constructor.
- super is used to access and call the parent class's constructor and methods.
    class Animal {
        constructor(type) {
            this.type = type;
        }

        eat() {
            console.log(`${this.type} is eating`);
        }
    }

    class Dog extends Animal {
        constructor(name, type) {
            super(type);       // Parent constructor
            this.name = name;
        }

        show() {
            console.log(this.type);   // Parent property
            super.eat();              // Parent method
        }
    }

    const dog = new Dog("Tom", "Dog");
    dog.show();


## Method overriding
Method overriding occurs when a child class defines a method with the same name as a method in its parent class. The child implementation replaces the parent's implementation.

## Method Overloading
## Run-Time Polymorphism (Method Overriding)
Does JavaScript Support Method Overloading? ❌ No.
JavaScript does not support true method overloading. If multiple methods have the same name, the last one overwrites the previous ones. Similar behavior can be achieved using default parameters, rest parameters, or argument checks.

## Constructor Overloading
Does JavaScript support constructor overloading? ❌ No.
class Student {

    constructor(name) {}

    constructor(name, age) {}

}

## Property Overriding
    class Animal {

        constructor() {
            this.type = "Animal";
        }

    }

    class Dog extends Animal {

        constructor() {

            super();

            this.type = "Dog";

        }

    }

    const dog = new Dog();

    console.log(dog.type);


## Static Methods
- Static methods belong to the class, not to objects.
    class MathUtil {

        static add(a, b) {
            return a + b;
        }

    }

console.log(MathUtil.add(2, 3));

const m = new MathUtil();

m.add(); // TypeError

## Encapsulation
- Encapsulation is the process of bundling data (properties) and methods (functions) together inside a class or object while restricting direct access to some data.

class Student {

    #marks = 80; # -> used to hide the data 
}

1. Encapsulation Using Private Fields (#)
    and we hide methods also

    class Student {

        #marks = 80;
        
        #verifymarksi() {
            return "verify marks;
        }

        showMarks() {
            console.log(this.#marks);
        }

    }

    const s = new Student();

    s.showMarks();

2. Using Getters and Setters
    - Instead of methods like getMarks() and setMarks(), JavaScript provides get and set.
    class Student {

        #marks = 80;

        get marks() {
            return this.#marks;
        }

        set marks(value) {

            if (value >= 0 && value <= 100) {

                this.#marks = value;

            }

        }

    }

    const s = new Student();

    console.log(s.marks);

    s.marks = 90;

    console.log(s.marks);

## Why is Encapsulation Used?
    Data hiding
    Data security
    Controlled access
    Better code organization
    Easier maintenance





## What is Abstraction?
-> Abstraction is the process of hiding the internal implementation details and showing only the essential functionality to the user.
Does JavaScript Have Abstract Classes? ❌ No.


## What is polymorphism?
- Polymorphism is the ability of the same method or interface to perform different behaviors depending on the object that calls it.
- Same method name, different behavior.
    class Animal {

        sound() {
            console.log("Animal Sound");
        }

    }

    class Dog extends Animal {

        sound() {
            console.log("Bark");
        }

    }

    class Cat extends Animal {

        sound() {
            console.log("Meow");
        }

    }

    const dog = new Dog();
    const cat = new Cat();

    dog.sound();
    cat.sound();
- same sound function different behaviour

##  Compile-Time Polymorphism (Method Overloading)
- Does JavaScript Support It? ❌ No.
- Same method name, different parameters.
    class Calculator {

        add(int a, int b) {
            return a + b;
        }

        add(int a, int b, int c) {
            return a + b + c;
        }

        add(double a, double b) {
            return a + b;
        }
    }

## Run-Time Polymorphism (Method Overriding)

## | Method Overloading                | Method Overriding              |
| --------------------------------- | ------------------------------ |
| Same method name                  | Same method name               |
| Different parameters              | Same parameters (usually)      |
| Same class                        | Parent & Child classes         |
| Java decides which method to call | Child replaces parent's method |
| ❌ Not supported in JavaScript     | ✅ Supported in JavaScript      |

