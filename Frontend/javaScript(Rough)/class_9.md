## What is a Prototype?
- A Prototype is an object from which another object can inherit properties and methods.
- Prototype = Backup object. 
- If JavaScript can't find a property on an object, it looks in its prototype.

## What is the Prototype Chain?

-Every object has a prototype.
- That prototype also has another prototype.

Eventually it reaches: null

## Creating Your Own Prototype
function Student(name) {
    this.name = name;

}

1. Add method
    Student.prototype.sayHello = function () {

      console.log("Hello " + this.name);

    };

2. creating object  

    const s1 = new Student("Gourav");
    const s2 = new Student("Rahul");
    s1.sayHello(); // Hello Gourav 
    s2.sayHello(); // Hello Rahul

## Without Prototype

function Student(name) {
    this.name = name;

    this.sayHello = function () {
        console.log("Hello");
    };
}

const s1 = new Student("Gourav");
const s2 = new Student("Rahul");

s1
 ├── name
 └── sayHello()   ← Copy 1

s2
 ├── name
 └── sayHello()   ← Copy 2

Every object gets its own copy of sayHello(). which is waste of memory 

## With Prototype

function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

    Student.prototype
        │
    sayHello()

    ▲        ▲
    │        │
    s1        s2

## why it is needed?
1. Memory Optimization
2. Code Reusability = Every object can use the same methods.
3. Inheritance = Objects can inherit methods from other objects.

## Q1. Why do arrays have methods like push() and map()?
Because these methods are defined in Array.prototype, and every array inherits from it.

## Are classes based on prototypes?
- Yes. JavaScript classes are just syntactic sugar over the prototype system.

## constructor function
A constructor is a special function used with the new keyword to create and initialize objects. It assigns initial values to the new object using this. Methods are usually placed on the constructor's prototype so they are shared by all instances.

function Student(name, age) {
    this.name = name;
    this.age = age;
}
this -> refers to current  object context
This function is called a constructor because we'll use it with new.

- const s1 = new Student("Gourav", 24);
    s1 = { // memory 
        name: "Gourav",
        age: 24
    }
- const s2 = new Student("Rahul", 22);


## __proto__ vs prototype
prototype is a property of constructor functions. It is used to store methods and properties that should be shared by all instances. __proto__ is a property of objects that points to the constructor's prototype object. When an object can't find a property or method on itself, JavaScript follows its __proto__ link to the prototype.

| `prototype`                      | `__proto__`                           |
| -------------------------------- | ------------------------------------- |
| Belongs to constructor/functions | Belongs to every object               |
| Used to store shared methods     | Used to point to the prototype object |
| You add methods here             | JavaScript uses it to find methods    |


##  new Keyword?
- new is a keyword that creates a new object and connects it to the constructor's prototype.
✅ Creating the object.
✅ Linking it to the prototype.
✅ Calling the constructor with this pointing to the new object.
✅ Returning the object.

## What is Inheritance?
- Inheritance means one object can use the properties and methods of another object.
- Object.create() creates a new empty object and sets its __proto__ to the object passed as an argument. It's similar to new because it creates an object and links its prototype, but unlike new, it doesn't call a constructor functio

            function Animal(type) {
                this.type = type;
            }

            Animal.prototype.eat = function () {
                console.log(this.type + " is eating");
            };

            function Dog(name, type) {
                this.name = name;
                this.type = type;
            }

            // Inheritance
            Dog.prototype = Object.create(Animal.prototype);

            // Fix constructor
            Dog.prototype.constructor = Dog;

            // Dog's own method
            Dog.prototype.bark = function () {
                console.log(this.name + " is barking");
            };

            const dog = new Dog("Tom", "Dog");

            dog.bark();
            dog.eat();


## class
A class is just a cleaner syntax (syntactic sugar) over JavaScript's prototype system.

## What is a Class?
- A class is a blueprint (template) for creating objects.
    
    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log("Hello " + this.name);
        }
    }

    const s1 = new Student("Gourav", 24);

    s1.sayHello();

## constructor
- A special method that runs automatically when you create an object with new

## Where are Methods Stored?
- They are NOT stored inside every object.
- they are stored in Student.prototype

## Properties (variables) → stored inside the object (s1)
## Methods (functions) → stored inside Student.prototype