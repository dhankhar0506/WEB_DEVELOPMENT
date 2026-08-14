# JavaScript Interview Questions — Prototypes, Inheritance & Classes

---

# 1. What is a Prototype?

> **A Prototype is an object from which another object can inherit properties and methods.**

Simple way to remember:

> **Prototype = Backup object**

If JavaScript cannot find a property or method directly on an object, it looks for it in that object's prototype.

Example:

```js
const user = {
    name: "Gourav"
};

console.log(user.toString());
```

We did not create:

```js
user.toString
```

ourselves.

JavaScript finds it through the prototype chain.

Conceptually:

```text
user
 │
 │ Property not found?
 ▼
Prototype
 │
 │ Search here
 ▼
Parent Prototype
 │
 ▼
null
```

---

# 2. What is the Prototype Chain?

> **The Prototype Chain is the chain JavaScript follows when searching for a property or method through an object's prototypes.**

An object can have a prototype.

That prototype can itself have another prototype.

Eventually, the chain reaches:

```text
null
```

Conceptually:

```text
Object
   │
   ▼
Prototype
   │
   ▼
Prototype
   │
   ▼
Prototype
   │
   ▼
null
```

If JavaScript finds the property somewhere in this chain, it uses it.

If it reaches `null` without finding the property:

```js
console.log(obj.unknownProperty);
```

the result is generally:

```text
undefined
```

---

# 3. Creating Your Own Prototype

Suppose we create a constructor function:

```js
function Student(name) {
    this.name = name;
}
```

Now we want every student to have a `sayHello()` method.

Instead of creating a separate copy for every object, we can put the method on:

```js
Student.prototype
```

## Step 1 — Add Method to Prototype

```js
Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};
```

## Step 2 — Create Objects

```js
const s1 = new Student("Gourav");
const s2 = new Student("Rahul");

s1.sayHello(); // Hello Gourav
s2.sayHello(); // Hello Rahul
```

Conceptually:

```text
Student.prototype
       │
       └── sayHello()
              ▲
              │
        ┌─────┴─────┐
        │           │
       s1          s2
```

Both objects can use the **same shared method**.

---

# 4. Without Prototype

Consider:

```js
function Student(name) {
    this.name = name;

    this.sayHello = function () {
        console.log("Hello");
    };
}

const s1 = new Student("Gourav");
const s2 = new Student("Rahul");
```

Here:

```text
s1
 ├── name
 └── sayHello()   ← Copy 1


s2
 ├── name
 └── sayHello()   ← Copy 2
```

Every object gets its own function object for `sayHello()`.

So:

```text
s1.sayHello
      ≠
s2.sayHello
```

Each instance has its own copy/reference to a separately created function.

This can use unnecessary memory when many instances are created.

---

# 5. With Prototype

Better approach:

```js
function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};
```

Now:

```text
            Student.prototype
                   │
                   │
             sayHello()
                   ▲
                   │
             ┌─────┴─────┐
             │           │
            s1          s2
```

Both objects share the same method.

We can even check:

```js
console.log(s1.sayHello === s2.sayHello);
```

Output:

```text
true
```

Because both find the same function through `Student.prototype`.

---

# 6. Why are Prototypes Needed?

Main benefits:

## 1. Memory Optimization

Instead of creating the same method separately for every object:

```text
Object 1 → method copy
Object 2 → method copy
Object 3 → method copy
```

we can share one method:

```text
            Prototype
                │
              method
             ▲  ▲  ▲
            /   │   \
          o1    o2   o3
```

---

## 2. Code Reusability

Every object linked to the prototype can use the same methods.

```js
Student.prototype.sayHello = function () {
    console.log("Hello");
};
```

Now:

```js
s1.sayHello();
s2.sayHello();
```

both work.

---

## 3. Inheritance

Objects can inherit/access properties and methods through the prototype chain.

```text
Child Object
     ↓
Child Prototype
     ↓
Parent Prototype
     ↓
Object.prototype
     ↓
null
```

---

# 7. Why Do Arrays Have Methods Like `push()` and `map()`?

Because methods such as:

```js
push()
map()
filter()
reduce()
forEach()
```

are available through:

```js
Array.prototype
```

Example:

```js
const numbers = [1, 2, 3];

numbers.push(4);

numbers.map(num => num * 2);
```

We didn't manually add `push()` or `map()` to `numbers`.

Conceptually:

```text
numbers
   │
   ▼
Array.prototype
   │
   ├── push()
   ├── map()
   ├── filter()
   ├── reduce()
   └── forEach()
   │
   ▼
Object.prototype
   │
   ▼
null
```

So:

> **Arrays get methods like `push()` and `map()` through `Array.prototype`.**

---

# 8. Are Classes Based on Prototypes?

**Yes.**

> **JavaScript classes provide cleaner syntax over JavaScript's prototype-based object model.**

For example:

```js
class Student {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello");
    }
}
```

The method:

```js
sayHello()
```

is available through:

```js
Student.prototype
```

So classes still use prototypes internally.

---

# 9. What is a Constructor Function?

> **A constructor function is a function designed to be used with the `new` keyword to create and initialize objects.**

It assigns initial values to the new object using:

```js
this
```

Example:

```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

This function is used as a constructor when we call:

```js
const s1 = new Student("Gourav", 24);
```

Conceptually, `s1` gets properties like:

```js
s1 = {
    name: "Gourav",
    age: 24
};
```

Another object:

```js
const s2 = new Student("Rahul", 22);
```

gets its own properties.

---

# 10. What Does `this` Mean in a Constructor?

Inside:

```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

when called using:

```js
new Student("Gourav", 24);
```

`this` refers to the **newly created object**.

Conceptually:

```text
new Student("Gourav", 24)
          │
          ▼
Create new object
          │
          ▼
this → new object
          │
          ▼
this.name = "Gourav"
this.age  = 24
```

---

# 11. Where Should Constructor Methods Be Stored?

Properties that are different for each instance are commonly assigned inside the constructor:

```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

Shared methods can be placed on:

```js
Student.prototype
```

Example:

```js
Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};
```

So:

```text
s1
├── name
└── age
      │
      ▼
Student.prototype
      │
      └── sayHello()
```

---

# 12. `__proto__` vs `prototype`

This is a very common interview question.

## `prototype`

`prototype` is a property available on constructor functions/classes used in the prototype mechanism.

Example:

```js
Student.prototype
```

We can add shared methods:

```js
Student.prototype.sayHello = function () {
    console.log("Hello");
};
```

---

## `__proto__`

`__proto__` is a legacy accessor that exposes an object's internal prototype link.

Example:

```js
const s1 = new Student("Gourav");
```

Conceptually:

```text
s1
 │
 │ internal prototype
 ▼
Student.prototype
```

You may see this demonstrated as:

```js
s1.__proto__ === Student.prototype
```

Output:

```text
true
```

Modern JavaScript usually prefers:

```js
Object.getPrototypeOf(s1)
```

instead of directly using `__proto__`.

---

## `prototype` vs `__proto__`

| `prototype`                                 | `__proto__`                                                |
| ------------------------------------------- | ---------------------------------------------------------- |
| Commonly discussed on constructor functions | Legacy accessor on objects                                 |
| Used when defining shared instance methods  | Exposes an object's prototype link                         |
| Example: `Student.prototype`                | Example: `s1.__proto__`                                    |
| You commonly add shared methods here        | JavaScript follows the internal prototype chain for lookup |

Most important relationship:

```text
s1.__proto__
      │
      │ equals
      ▼
Student.prototype
```

Or preferably:

```js
Object.getPrototypeOf(s1) === Student.prototype;
```

---

# 13. What Does the `new` Keyword Do?

> **`new` creates a new object, links that object to the constructor's prototype, calls the constructor with `this` referring to the new object, and normally returns that object.**

Example:

```js
const s1 = new Student("Gourav", 24);
```

Conceptually, four important things happen:

```text
new Student(...)
      │
      ▼
1. Create new empty object
      │
      ▼
2. Link object's prototype
   to Student.prototype
      │
      ▼
3. Call Student()
   with this → new object
      │
      ▼
4. Return the object
```

Memory trick:

> **`new` = Create → Link → Call → Return**

---

# 14. `new` Keyword — Step by Step

Given:

```js
function Student(name) {
    this.name = name;
}

const s1 = new Student("Gourav");
```

Conceptually:

### Step 1 — Create Object

```js
const obj = {};
```

### Step 2 — Link Prototype

Conceptually:

```text
obj
 │
 ▼
Student.prototype
```

### Step 3 — Call Constructor

Conceptually:

```js
Student.call(obj, "Gourav");
```

Now:

```text
obj

{
    name: "Gourav"
}
```

### Step 4 — Return Object

Conceptually:

```js
s1 = obj;
```

Final relationship:

```text
s1
 │
 ├── name = "Gourav"
 │
 ▼
Student.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
```

---

# 15. What is Inheritance?

> **Inheritance means one object can access/use properties and methods from another object through the prototype chain.**

Example:

```text
Dog
 ↓
Animal
```

Dog can use functionality defined for Animal through prototype inheritance.

---

# 16. `Object.create()`

> **`Object.create()` creates a new object and sets the supplied object as its prototype.**

Example:

```js
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();
```

Conceptually:

```text
dog
 │
 ▼
animal
 │
 └── eat()
 │
 ▼
Object.prototype
 │
 ▼
null
```

`dog` doesn't directly contain:

```js
eat()
```

JavaScript finds it through its prototype.

---

# 17. `Object.create()` vs `new`

Both can establish prototype relationships, but they work differently.

### `new`

```js
const s1 = new Student("Gourav");
```

It:

```text
Creates object
      ↓
Links prototype
      ↓
Calls constructor
      ↓
Returns object
```

### `Object.create()`

```js
const obj = Object.create(parent);
```

It:

```text
Creates object
      ↓
Sets parent as prototype
      ↓
Does NOT automatically call
your constructor function
```

So:

> **`Object.create()` creates an object with a specified prototype, while `new` additionally invokes a constructor as part of instance creation.**

---

# 18. Prototype Inheritance Using Constructor Functions

Your example:

```js
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
```

Now establish inheritance:

```js
Dog.prototype = Object.create(Animal.prototype);
```

Conceptually:

```text
Dog.prototype
      │
      ▼
Animal.prototype
      │
      ▼
Object.prototype
      │
      ▼
null
```

---

# 19. Why Fix the Constructor?

After:

```js
Dog.prototype = Object.create(Animal.prototype);
```

the newly created prototype object inherits from `Animal.prototype`.

We commonly restore:

```js
Dog.prototype.constructor = Dog;
```

So the prototype's `constructor` property correctly points back to:

```js
Dog
```

---

# 20. Add Dog's Own Method

```js
Dog.prototype.bark = function () {
    console.log(this.name + " is barking");
};
```

Now create:

```js
const dog = new Dog("Tom", "Dog");
```

Call:

```js
dog.bark();
dog.eat();
```

Output:

```text
Tom is barking
Dog is eating
```

How?

For:

```js
dog.bark();
```

JavaScript searches:

```text
dog
 ↓
Dog.prototype
 ↓
bark() found ✅
```

For:

```js
dog.eat();
```

JavaScript searches:

```text
dog
 ↓
Dog.prototype
 ↓
Not found
 ↓
Animal.prototype
 ↓
eat() found ✅
```

---

# 21. Complete Inheritance Chain

```text
dog
 │
 │ [[Prototype]]
 ▼
Dog.prototype
 │
 │ bark()
 │
 ▼
Animal.prototype
 │
 │ eat()
 │
 ▼
Object.prototype
 │
 ▼
null
```

This is the:

> **Prototype Chain**

---

# 22. What is a Class?

> **A class is a blueprint/template for creating objects.**

JavaScript class syntax provides a cleaner way to work with constructors, prototypes, and inheritance.

Example:

```js
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
```

Output:

```text
Hello Gourav
```

---

# 23. What is the `constructor` Method in a Class?

> **`constructor` is a special class method that runs automatically when an instance is created using `new`.**

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

# 24. Where Are Class Methods Stored?

Consider:

```js
class Student {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello " + this.name);
    }
}
```

Then:

```js
const s1 = new Student("Gourav");
const s2 = new Student("Rahul");
```

The instance-specific property:

```js
this.name
```

belongs to each object.

Conceptually:

```text
s1
└── name = "Gourav"


s2
└── name = "Rahul"
```

But the class method:

```js
sayHello()
```

is available through:

```js
Student.prototype
```

Conceptually:

```text
            Student.prototype
                   │
                   └── sayHello()
                       ▲       ▲
                       │       │
                      s1      s2
```

So both instances share the method through the prototype.

---

# 25. Properties vs Methods

### Properties

Instance properties assigned using `this` are stored on the instance:

```js
this.name = name;
this.age = age;
```

Conceptually:

```text
s1

├── name
└── age
```

### Prototype Methods

Methods declared with normal class method syntax are available through the class's prototype:

```js
sayHello() {
    console.log("Hello");
}
```

Conceptually:

```text
Student.prototype

└── sayHello()
```

Therefore:

> **Instance properties → stored on the object**

> **Normal class methods → stored/shared through `Student.prototype`**

---

# 26. Constructor Function vs Class

### Constructor Function

```js
function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};
```

### Class

```js
class Student {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello " + this.name);
    }
}
```

Both use JavaScript's prototype-based object model.

The class syntax is cleaner and also has some semantic differences from ordinary functions, but for interview understanding:

> **Classes provide cleaner syntax over JavaScript's prototype-based inheritance system.**

---

# 27. Constructor Function vs Class — Structure

```text
Constructor Function

Student()
   │
   ├── this.name
   │
   └── Student.prototype
              │
              └── sayHello()


Class

Student
   │
   ├── constructor()
   │      └── this.name
   │
   └── Student.prototype
              │
              └── sayHello()
```

---

# 28. Complete Prototype Flow

Consider:

```js
function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const s1 = new Student("Gourav");
```

Complete flow:

```text
new Student("Gourav")
        │
        ▼
Create New Object
        │
        ▼
Link Prototype
        │
        ▼
s1.[[Prototype]]
        │
        ▼
Student.prototype
        │
        ▼
Call Constructor
        │
        ▼
this → s1
        │
        ▼
this.name = "Gourav"
        │
        ▼
Return s1
```

Final structure:

```text
s1
│
├── name = "Gourav"
│
└── [[Prototype]]
        │
        ▼
Student.prototype
        │
        ├── sayHello()
        │
        └── constructor
                │
                ▼
             Student
```

---

# 29. What Happens When `s1.sayHello()` Runs?

JavaScript first checks:

```text
s1
```

Does `s1` directly contain `sayHello`?

```text
No ❌
```

Then JavaScript checks:

```text
Student.prototype
```

It finds:

```text
sayHello() ✅
```

Then it executes the method with:

```text
this → s1
```

Therefore:

```js
console.log("Hello " + this.name);
```

becomes:

```js
console.log("Hello " + s1.name);
```

Output:

```text
Hello Gourav
```

Complete lookup:

```text
s1.sayHello()
      │
      ▼
Check s1
      │
   Not Found
      │
      ▼
Student.prototype
      │
   Found ✅
      │
      ▼
Execute sayHello()
      │
      ▼
this → s1
      │
      ▼
Hello Gourav
```

---

# 30. Important Interview Questions

## What is a Prototype?

> **A Prototype is an object from which another object can inherit/access properties and methods. If a property isn't found directly on an object, JavaScript searches its prototype chain.**

---

## What is Prototype Chain?

> **Prototype Chain is the sequence of prototype links JavaScript follows while searching for a property or method, eventually ending at `null`.**

---

## Why Do We Use Prototypes?

Main reasons:

1. **Memory optimization**
2. **Code reusability**
3. **Inheritance**

---

## Why Does an Array Have `map()`?

Because arrays inherit/access:

```text
Array.prototype.map()
```

through their prototype chain.

---

## What is a Constructor Function?

> **A constructor function is a function designed to be called with `new` to create and initialize objects.**

---

## What Does `new` Do?

```text
1. Creates object
2. Links its prototype
3. Calls constructor with this
4. Returns the object
```

Memory trick:

> **Create → Link → Call → Return**

---

## What is `prototype`?

> **`prototype` is the object used by constructor functions/classes for methods and properties that should be available to their instances through prototype inheritance.**

---

## What is `__proto__`?

> **`__proto__` is a legacy accessor exposing an object's internal prototype. Modern code generally prefers `Object.getPrototypeOf()`.**

---

## What is Inheritance?

> **Inheritance allows an object to access properties and methods through another object in its prototype chain.**

---

## What is `Object.create()`?

> **`Object.create(parent)` creates a new object whose prototype is `parent`.**

---

## What is a Class?

> **A class is a blueprint/template for creating objects and provides cleaner syntax for JavaScript's prototype-based object model.**

---

# Quick Interview Revision

| Concept                  | Simple Definition                                              |
| ------------------------ | -------------------------------------------------------------- |
| **Prototype**            | Object used as another object's prototype/backup lookup        |
| **Prototype Chain**      | Chain followed while searching for properties                  |
| **`prototype`**          | Prototype object associated with constructor functions/classes |
| **`__proto__`**          | Legacy accessor exposing an object's prototype                 |
| **Constructor Function** | Function used with `new` to create objects                     |
| **`new`**                | Creates, links, calls constructor, returns object              |
| **`Object.create()`**    | Creates object with specified prototype                        |
| **Inheritance**          | Accessing functionality through prototype relationships        |
| **Class**                | Cleaner syntax for creating objects/prototype relationships    |
| **`constructor`**        | Special class method run during `new` instance creation        |
| **Instance Properties**  | Properties stored directly on each instance                    |
| **Prototype Methods**    | Methods shared through the prototype                           |

---

# Final Prototype Mental Model

```text
                 Constructor
                   Student
                      │
                      │
                      ▼
              Student.prototype
                 │          │
                 │          └── sayHello()
                 │
        ┌────────┴────────┐
        │                 │
        ▲                 ▲
       s1                s2
        │                 │
name="Gourav"       name="Rahul"


Prototype Chain:

s1
 ↓
Student.prototype
 ↓
Object.prototype
 ↓
null
```

## One-Line Memory Trick

**Object → Property not found → Check Prototype → Keep searching Prototype Chain → Stop at `null`.**

And for constructors:

**`new` → Create Object → Link to `.prototype` → `this` points to object → Constructor runs → Object returned.**
