## What is an Object?
-> An object is a collection of key-value pairs used to store related data.
-> non Primitive data type
=> Object = collection of key-value pairs.
    const person = {
        name: "Gourav",
        age: 25,

        greet() {
            console.log("Hello");
        }
    };

name, age → keys / properties
"Gourav", 25, "Jalandhar" → values

2. Property = > A property is a key-value pair inside an object.
3. Method => A method is a function stored as an object's property.

4. Creating Objects
    - Object literals
        - const user = {
                name: "Gourav",
                age: 25
            };
    - new Object()
        - const user = new Object();

        - user.name = "Gourav";
        - user.age = 25
    
5. Object.create() =>  Creates a new object with the given object as its prototype.
    -> So yes, Object.create() is commonly used for prototype-based inheritance.
        const person = {
            greet() {
                console.log("Hello");
            }
        };

        - const user = Object.create(person);
        - user.name = "Gourav";
        - user.greet(); // Hello

6. Accessing Object Properties
    
    - Dot notation  
        const user = {
            name: "Gourav",
            age: 25
        };

        console.log(user.name); // Gourav   
    
    - Bracket notation 
        - (Bracket notation is useful when the property name is dynamic)
        - when space between the keys
        
        - const user = {
                name: "Gourav",
                age: 25
        };

        const key = "name";

        console.log(user[key]); // Gourav



7. Add / Update / Delete Properties
    => ADD -> const user = {
        name: "Gourav"
    };

    user.age = 25; // no age property in the obj so js Add as new property in the obj
    
    =>Update =  const user = {
            name: "Gourav"
            age:26
        };
    user.age = 32 // it update the value  

    => delete user.age;

8. Object Methods => When a function is stored inside an object, we call it a method.
        const user = {
        name: "Gourav",

        greet() {
                console.log(`Hello ${this.name}`);
            }
        };

        user.greet();\// Hello Gourav

9. Important Built-in Object Methods
    -> Object.keys()
        -> const user = {
                name: "Gourav",
                age: 25
            };

        - console.log(Object.keys(user));
        - ["name", "age"]
    
    -> Object.values()   
        -> console.log(Object.values(user));
        -> ["Gourav", 25]
    
    -> Object.entries()
        -> Returns key-value pairs
        -> console.log(Object.entries(user));
        -> [ ["name", "Gourav"], ["age", 25] ]

10. loops =>
        for (const [key, value] of Object.entries(user)) {
            console.log(key, value);
        }

11. Object.fromEntries() => Converts key-value pairs back into an object.
        - const arr = [["name", "Gourav"], ["age", 25]]
        - const user = Object.fromEntries(arr);

        - console.log(user);
        {
            name: "Gourav",
            age: 25
        }

12. Object.assign() => Used to copy or merge objects.

        const obj1 = {
            name: "Gourav"
        };

        const obj2 = {
            age: 25
        };

        - const result = Object.assign({}, obj1, obj2);
        - console.log(result);
    OR

        - const result = { ...obj1, ...obj2};
    
13. Object.hasOwn() => Checks whether a property exists directly on the object.
        - const user = {
            name: "Gourav"
        };

        console.log(Object.hasOwn(user, "name"));// true
        console.log(Object.hasOwn(user, "age")); // false

14. (in) Operator => Checks whether a property exists in the object or its prototype chain.
    - const user = {
         name: "Gourav"
    };

    - console.log("name" in user);// true

**Object.hasOwn() checks own properties, while in also checks the prototype chain.**

16. getPrototypeOf  => Object.getPrototypeOf() returns the prototype object from which an object inherits properties and methods.
    - const parent = {
        greet() {}
    };
    - const child = Object.create(parent);
    - console.log(Object.getPrototypeOf(child) === parent);// true

15. Object.freeze()
    - adding properties
    - deleting properties
    - modifying properties
        
        const user = {
            name: "Gourav",
            age: 25
        };

        - Object.freeze(user);
        - user.age = 30;       // won't change
        - user.city = "Delhi"; // won't add
        - delete user.name;    // won't delete

16. Object.seal()
    - Prevents:
        - adding properties ❌
        - deleting properties ❌
    - But existing values can be modified ✅

        const user = {
            name: "Gourav",
            age: 25
        };

        - Object.seal(user);

        - user.age = 30;       // ✅
        - user.city = "Delhi"; // ❌
         - delete user.name;    // ❌
    
**Both seal and frozen are shallow.  The nested address object wasn't frozen.**

17. Object Destructuring
    const user = {
          name: "Gourav",
            age: 25
    };

    const { name, age } = user;

    console.log(name);
    console.log(age);

18. Loop Through an Object
    -> for...in
    
    const user = {
        name: "Gourav",
        age: 25
    };

    - for (const key in user) {
        console.log(key, user[key]);
    }