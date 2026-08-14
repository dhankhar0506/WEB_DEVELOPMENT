# JavaScript Interview Questions — OOP Concepts

---

# 1. OOP Pillars

**OOP (Object-Oriented Programming)** is a programming approach where we organize code using objects, classes, properties, and methods.

```text
OOP
│
├── Class
├── Object
├── Encapsulation
├── Inheritance
├── Polymorphism
└── Abstraction
```

The four main pillars of OOP are:

```text
OOP Pillars
│
├── Encapsulation
├── Inheritance
├── Polymorphism
└── Abstraction
```

`Class` and `Object` are fundamental OOP concepts used to implement these principles.

---

# 2. What is a Class?

> **A class is a blueprint (template) used to create objects.**

Example:

```js
class Student {

    constructor(name) {
        this.name = name;
    }

    study() {
        console.log(this.name + " is studying");
    }
}
```

Here:

```text
Student
   │
   ├── constructor()
   │
   └── study()
```

We can create multiple objects using the same class.

---

# 3. What is an Object?

> **An object is a real instance created from a class.**

Example:

```js
const s1 = new Student("Gourav");
const s2 = new Student("Rahul");
```

Conceptually:

```text
          Student Class
               │
        ┌──────┴──────┐
        ▼             ▼
       s1             s2
       │              │
    Gourav          Rahul
```

So:

> **Class = Blueprint**

> **Object = Actual instance created from that blueprint**

---

# 4. What is a Constructor?

> **A constructor is a special method that runs automatically when `new` creates an object from a class.**

Example:

```js
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}
```

When:

```js
const s1 = new Student("Gourav", 24);
```

runs:

```text
new Student(...)
       ↓
constructor(...)
       ↓
this.name = "Gourav"
this.age = 24
```

---

# 5. What are Properties?

> **Properties are variables/data stored inside an object.**

Example:

```js
this.name = name;
this.age = age;
```

For:

```js
const s1 = new Student("Gourav", 24);
```

the object contains:

```text
s1
│
├── name = "Gourav"
└── age = 24
```

---

# 6. What are Methods?

> **Methods are functions associated with a class or object.**

Example:

```js
class Student {

    study() {
        console.log("Studying");
    }

}
```

Here:

```js
study()
```

is a method.

---

# 7. What is Inheritance?

> **Inheritance means reusing/accessing the properties and methods of a parent class in a child class instead of writing the same functionality again.**

Main advantages:

1. Code reusability
2. Less duplicate code
3. Easier maintenance
4. Supports hierarchical relationships

Example:

```js
class Animal {

    eat() {
        console.log("Eating");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }

}
```

Now:

```js
const dog = new Dog();

dog.bark();
dog.eat();
```

`Dog` has its own:

```text
bark()
```

and inherits:

```text
eat()
```

from `Animal`.

Conceptually:

```text
Animal
  │
  │ eat()
  │
  ▼
 Dog
  │
  └── bark()
```

---

# 8. What Does `extends` Do?

> **`extends` creates an inheritance relationship between a child class and a parent class.**

Example:

```js
class Dog extends Animal {
}
```

means:

> **Dog inherits functionality from Animal.**

Conceptually:

```text
Animal
  │
  ▼
 Dog
```

So an instance of `Dog` can access inherited methods from `Animal`.

---

# 9. What is `super()`?

> **`super()` calls the parent class constructor.**

`super` can also be used to access parent class methods.

Example:

```js
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

        console.log(this.type); // Parent-initialized property

        super.eat();             // Parent method
    }

}

const dog = new Dog("Tom", "Dog");

dog.show();
```

Output:

```text
Dog
Dog is eating
```

---

## What Happens Here?

```js
const dog = new Dog("Tom", "Dog");
```

First:

```text
Dog constructor
      ↓
super(type)
      ↓
Animal constructor
      ↓
this.type = "Dog"
      ↓
Return to Dog constructor
      ↓
this.name = "Tom"
```

Final object:

```text
dog
│
├── name = "Tom"
└── type = "Dog"
```

---

# 10. Important Rule About `super()`

Inside a derived class constructor:

```js
class Dog extends Animal {

    constructor(name) {

        super();

        this.name = name;
    }

}
```

you must call `super()` before accessing `this`.

Incorrect:

```js
constructor(name) {

    this.name = name; // ❌

    super();
}
```

Correct:

```js
constructor(name) {

    super();

    this.name = name; // ✅
}
```

---

# 11. What is Method Overriding?

> **Method overriding occurs when a child class defines a method with the same name as a method in its parent class. The child implementation is used for child instances.**

Example:

```js
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
```

Now:

```js
const dog = new Dog();

dog.sound();
```

Output:

```text
Bark
```

Conceptually:

```text
Animal
  │
  └── sound()
       ↓
  "Animal Sound"


Dog extends Animal
  │
  └── sound()
       ↓
     "Bark"
```

The child provides its own implementation.

---

# 12. What is Method Overloading?

> **Method Overloading means having methods with the same name but different parameter lists in the same class.**

For example, languages such as Java can support patterns like:

```text
add(a, b)

add(a, b, c)

add(double a, double b)
```

---

# 13. Does JavaScript Support Method Overloading?

❌ **JavaScript does not support true method overloading based on different parameter signatures.**

If you declare multiple class methods with the same name:

```js
class Calculator {

    add(a, b) {
        return a + b;
    }

    add(a, b, c) {
        return a + b + c;
    }

}
```

the later definition replaces the earlier one.

JavaScript can achieve similar behavior using:

* Default parameters
* Rest parameters
* Argument checks
* Conditional logic

Example:

```js
class Calculator {

    add(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

}

const calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.add(10, 20, 30));
```

---

# 14. Constructor Overloading

## Does JavaScript Support Constructor Overloading?

❌ **No. JavaScript classes cannot define multiple constructors.**

This is invalid:

```js
class Student {

    constructor(name) {}

    constructor(name, age) {}

}
```

JavaScript allows only one:

```js
constructor()
```

per class.

Instead, we can use:

```js
class Student {

    constructor(name, age = 18) {

        this.name = name;
        this.age = age;

    }

}
```

---

# 15. Property Overriding

A child class can assign a new value to a property initialized by the parent.

Example:

```js
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
```

Output:

```text
Dog
```

Flow:

```text
new Dog()
   ↓
Dog constructor
   ↓
super()
   ↓
Animal constructor
   ↓
this.type = "Animal"
   ↓
Back to Dog
   ↓
this.type = "Dog"
   ↓
Final value = "Dog"
```

---

# 16. What are Static Methods?

> **Static methods belong to the class itself, not to individual instances created from the class.**

Example:

```js
class MathUtil {

    static add(a, b) {
        return a + b;
    }

}
```

Call it using:

```js
console.log(MathUtil.add(2, 3));
```

Output:

```text
5
```

But:

```js
const m = new MathUtil();

m.add();
```

results in an error because `add()` is not an instance method.

Conceptually:

```text
MathUtil
   │
   └── static add() ✅


m
│
└── add() ❌
```

Memory trick:

> **Static → Class**

> **Normal method → Instance**

---

# 17. What is Encapsulation?

> **Encapsulation is the process of bundling data (properties) and methods together inside a class or object while restricting direct access to some data.**

Simple understanding:

```text
Data + Methods
      ↓
Put Together
      ↓
Restrict Direct Access
      ↓
Encapsulation
```

JavaScript provides private class elements using:

```js
#
```

---

# 18. Encapsulation Using Private Fields `#`

Example:

```js
class Student {

    #marks = 80;

    showMarks() {
        console.log(this.#marks);
    }

}

const s = new Student();

s.showMarks();
```

Output:

```text
80
```

But accessing:

```js
s.#marks;
```

from outside the class is not allowed.

So:

```text
Student
│
├── #marks 🔒
│
└── showMarks() ✅
```

---

# 19. Can We Hide Methods Using `#`?

**Yes.**

Private methods can also be created using `#`.

Example:

```js
class Student {

    #marks = 80;

    #verifyMarks() {
        return "Verify marks";
    }

    showMarks() {

        console.log(this.#marks);

        console.log(this.#verifyMarks());
    }

}

const s = new Student();

s.showMarks();
```

Here:

```text
#marks
```

is a private field.

And:

```text
#verifyMarks()
```

is a private method.

Both can only be accessed within the class body.

---

# 20. Encapsulation Using Getters and Setters

Instead of creating methods like:

```text
getMarks()
setMarks()
```

JavaScript provides:

```js
get
set
```

Example:

```js
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
```

Output:

```text
80
90
```

---

# 21. Getter

A getter controls how a value is read.

```js
get marks() {
    return this.#marks;
}
```

We access it like a property:

```js
console.log(s.marks);
```

not:

```js
s.marks();
```

---

# 22. Setter

A setter controls how a value is changed.

```js
set marks(value) {

    if (value >= 0 && value <= 100) {

        this.#marks = value;

    }

}
```

Now:

```js
s.marks = 90;
```

calls the setter.

This allows validation before changing private data.

---

# 23. Why is Encapsulation Used?

Main reasons:

```text
Encapsulation
│
├── Data Hiding
├── Data Security / Protection
├── Controlled Access
├── Validation
├── Better Code Organization
└── Easier Maintenance
```

For example:

Instead of:

```text
Anyone
  ↓
Directly modify marks
```

we can use:

```text
User
 ↓
Setter
 ↓
Validation
 ↓
#marks
```

---

# 24. What is Abstraction?

> **Abstraction is the process of hiding internal implementation details and showing only the essential functionality to the user.**

Simple real-world example:

```text
Car

User sees:
│
├── Steering
├── Accelerator
└── Brake

User does NOT need to know:
│
├── Engine combustion details
├── Fuel injection details
└── Internal mechanical implementation
```

In programming:

```text
User
 ↓
Simple Public Method
 ↓
Hidden Internal Logic
```

Example:

```js
class Payment {

    pay(amount) {

        this.#validatePayment();
        this.#connectToBank();

        console.log(`Payment of ${amount} completed`);
    }

    #validatePayment() {
        console.log("Validating payment");
    }

    #connectToBank() {
        console.log("Connecting to bank");
    }

}
```

The user only needs:

```js
payment.pay(1000);
```

The internal implementation is hidden.

---

# 25. Does JavaScript Have Abstract Classes?

❌ **JavaScript does not have a built-in `abstract class` keyword like Java or C#.**

There is no native syntax like:

```text
abstract class Animal
```

in standard JavaScript.

However, abstraction can still be implemented using:

* Classes
* Private fields/methods
* Public interfaces/APIs
* Encapsulation
* Conventions and runtime checks

---

# 26. Encapsulation vs Abstraction

These two are often confused.

| Encapsulation                                 | Abstraction                                  |
| --------------------------------------------- | -------------------------------------------- |
| Bundles data and methods                      | Hides implementation complexity              |
| Controls access to data                       | Shows only essential functionality           |
| Focuses on protecting/managing internal state | Focuses on simplifying usage                 |
| Can use `#`, getters, setters                 | Can use public methods hiding internal logic |

Memory trick:

> **Encapsulation = Protect the data**

> **Abstraction = Hide the complexity**

---

# 27. What is Polymorphism?

> **Polymorphism is the ability of the same method/interface to perform different behaviors depending on the object using it.**

Simple definition:

> **Same method name → Different behavior**

Example:

```js
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
```

Output:

```text
Bark
Meow
```

Same:

```text
sound()
```

method.

Different behavior:

```text
Dog.sound()
    ↓
"Bark"

Cat.sound()
    ↓
"Meow"
```

This is polymorphism.

---

# 28. Types of Polymorphism

Common OOP terminology discusses:

```text
Polymorphism
│
├── Compile-Time Polymorphism
│      └── Method Overloading
│
└── Run-Time Polymorphism
       └── Method Overriding
```

For JavaScript interviews, remember:

```text
Method Overloading
       ↓
❌ Not natively supported as signature-based overloading


Method Overriding
       ↓
✅ Supported
```

---

# 29. Compile-Time Polymorphism — Method Overloading

> **Method Overloading means using the same method name with different parameter lists.**

Example from languages that support true method overloading:

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }

}
```

Same method:

```text
add()
```

Different parameters:

```text
add(a, b)

add(a, b, c)

add(double, double)
```

### Does JavaScript Support This?

❌ **Not as true signature-based method overloading.**

JavaScript can simulate similar behavior using:

```js
function add(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
```

---

# 30. Run-Time Polymorphism — Method Overriding

> **Method overriding happens when a child class provides its own implementation of a method inherited from the parent class.**

Example:

```js
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
```

Now:

```js
const dog = new Dog();

dog.sound();
```

Output:

```text
Bark
```

The actual behavior depends on the object at runtime.

---

# 31. Method Overloading vs Method Overriding

| Method Overloading                                             | Method Overriding                   |
| -------------------------------------------------------------- | ----------------------------------- |
| Same method name                                               | Same method name                    |
| Different parameters/signatures                                | Child provides a new implementation |
| Usually same class                                             | Parent & Child classes              |
| Common compile-time polymorphism concept                       | Run-time polymorphism concept       |
| ❌ True signature-based overloading not supported in JavaScript | ✅ Supported in JavaScript           |

---

# 32. Complete Inheritance Example

```js
class Animal {

    constructor(type) {
        this.type = type;
    }

    eat() {
        console.log(this.type + " is eating");
    }

    sound() {
        console.log("Animal Sound");
    }

}

class Dog extends Animal {

    constructor(name, type) {

        super(type);

        this.name = name;
    }

    sound() {
        console.log("Bark");
    }

    bark() {
        console.log(this.name + " is barking");
    }

}

const dog = new Dog("Tom", "Dog");

dog.eat();
dog.sound();
dog.bark();
```

Output:

```text
Dog is eating
Bark
Tom is barking
```

Here we have:

```text
Animal
│
├── constructor()
├── eat()
└── sound()
       │
       │ inheritance
       ▼
Dog
│
├── constructor()
├── sound()   ← Overridden
└── bark()
```

---

# 33. Complete OOP Connection

```text
                         OOP
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
      Class            Object          Properties
        │                 │
        │                 └── Real Instance
        │
        ├── constructor()
        │
        └── methods()
                          │
                          ▼
                    Four Pillars
                          │
        ┌─────────────────┼──────────────────┐
        │                 │                  │
        ▼                 ▼                  ▼
 Encapsulation       Inheritance       Polymorphism
        │                 │                  │
        │              extends               │
        │                 │           Method Overriding
        │               super()              │
        │                                    │
        ▼                                    ▼
 Private Fields                       Different Behavior
 Private Methods
 Getters/Setters

                          │
                          ▼
                     Abstraction
                          │
                          ▼
                 Hide Implementation
                          │
                          ▼
                 Show Essential API
```

---

# 34. Most Important Interview Definitions

| Topic                  | Interview Definition                                                               |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Class**              | Blueprint/template used to create objects                                          |
| **Object**             | Real instance created from a class                                                 |
| **Constructor**        | Special method automatically executed during object creation with `new`            |
| **Property**           | Data/value associated with an object                                               |
| **Method**             | Function associated with a class/object                                            |
| **Inheritance**        | Child class reuses/accesses functionality of parent class                          |
| **`extends`**          | Establishes class inheritance                                                      |
| **`super()`**          | Calls the parent constructor                                                       |
| **`super.method()`**   | Calls a parent class method                                                        |
| **Method Overriding**  | Child provides its own implementation of a parent method                           |
| **Method Overloading** | Same method name with different parameter signatures; not natively supported in JS |
| **Static Method**      | Method belonging to the class itself                                               |
| **Encapsulation**      | Bundling data/methods and controlling access                                       |
| **Abstraction**        | Hiding implementation details and exposing essential functionality                 |
| **Polymorphism**       | Same interface/method can produce different behavior                               |

---

# 35. OOP Interview Memory Trick

Remember the four pillars:

```text
E I P A

E → Encapsulation
I → Inheritance
P → Polymorphism
A → Abstraction
```

### Encapsulation

```text
Protect / Control Data
        ↓
#private
get / set
```

### Inheritance

```text
Parent
  ↓
extends
  ↓
Child
  ↓
Reuse functionality
```

### Polymorphism

```text
Same Method
    ↓
Different Behavior
```

### Abstraction

```text
Complex Implementation
        ↓
Hide
        ↓
Simple Interface
```

---

# Final Interview Flow

```text
Class
  ↓
Blueprint
  ↓
new
  ↓
Object
  ↓
constructor()
  ↓
Properties + Methods
  ↓
OOP Pillars
  │
  ├── Encapsulation
  │      ↓
  │   Hide / Control Data
  │
  ├── Inheritance
  │      ↓
  │   extends + super
  │
  ├── Polymorphism
  │      ↓
  │   Same Method
  │   Different Behavior
  │
  └── Abstraction
         ↓
      Hide Complexity
```

## One-Line Revision

**Class creates objects → constructor initializes them → properties store data → methods define behavior → inheritance reuses functionality → `extends` creates parent-child relationships → `super` accesses parent behavior → encapsulation controls data access → abstraction hides complexity → polymorphism gives the same method different behavior.**
