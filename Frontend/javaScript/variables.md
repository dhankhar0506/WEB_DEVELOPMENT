1. What is a Variable?
-> A variable is a named container used to store a value in memory.

2. Ways to Declare Variables
var a = 10;
let b = 20;
const c = 30;

3. differnce between them ?
| Keyword | Re-declare | Re-assign | Scope    | Hoisted         |
| ------- | ---------- | --------- | -------- | --------------- |
| `var`   | ✅          | ✅         | Function | ✅ (`undefined`) |
| `let`   | ❌          | ✅         | Block    | ✅ (TDZ)         |
| `const` | ❌          | ❌         | Block    | ✅ (TDZ)         |

4. What are Data Types?
-> A data type tells what kind of value a variable contains.
    let age = 25;        // Number
    let name = "Gourav"; // String
-> two types => Primitive and Non-Primitive (Reference).

5. Primitive Data Types
    | Type      | Example         |
    | --------- | --------------- |
    | String    | `"hello"`       |
    | Number    | `10`, `10.5`    |
    | BigInt    | `123n`          |
    | Boolean   | `true`, `false` |
    | Undefined | `undefined`     |
    | Null      | `null`          |
    | Symbol    | `Symbol("id")`  |

6. Declaration => Declaration means creating/introducing a variable using var, let, or const
    let age;
    var name;
    const country = "India";

**With const, you must initialize it during declaration**

7. Initialization =>Initialization means giving a variable its first value.
    let age;     // Declaration
    age = 25;    // Initialization  

8. Mutation => Mutation means changing the existing value/object itself without replacing it with a new object.

    const person = { name: "Gourav" };

    person.name = "Rahul"; // Mutation
    person.age = 25;       // Mutation

    const arr = [1, 2, 3];

    arr[0] = 10;   // ✅ Mutation — update
    arr.push(4);   // ✅ Mutation — add
    arr.pop();     // ✅ Mutation — remove

-> mutation does not mean only changing an existing element. Mutation means changing the state/content of an existing object or array.

9. Immutability => Immutability means the existing value itself cannot be changed.
    Primitive values (string, number, boolean, etc.) are immutable.

        let name = "Gourav";
        name[0] = "S"; // doesn't change the string
        console.log(name); // "Gourav"

10. undefined vs null
-> undefined => A variable has been declared but not assigned a value.
    - typeof → "undefined"
-> null => Meaning: An intentional assignment of "no value."
        - Unlike undefined, JavaScript does not assign null automatically—you set it explicitly.
        - typeof → "object"

11. Symbol => Symbol is a primitive data type used to create unique values.
    const id1 = Symbol();
    const id2 = Symbol();

    console.log(id1 === id2); // false

12. typeof => typeof is an operator used to check the type of a value.
        typeof function() {}; // "function"
        typeof []; // "object"
        typeof null; // "object" ⚠️
        typeof 10;          // "number"
        typeof "Gourav";    // "string"
        typeof true;        // "boolean"
        typeof undefined;   // "undefined"
        typeof 10n;         // "bigint"
        typeof Symbol();    // "symbol"'
        typeof NaN; // number
        typeof Infinity; // "number"


13. Copy by Value => Copy by value means the actual value is copied into another variable.
    - This happens with primitive values.
        let a = 10;
        let b = a;

        b = 20;

        console.log(a); // 10
        console.log(b); // 20
    b gets its own primitive value. Changing b doesn't affect a.

14. Copy by Reference => With objects, copying a variable copies the reference to the same object, not a new independent object.
    => Because both variables refer to the same object.
    => the object reference is copied, so both variables can refer to the same object.
        let person1 = {
            name: "Gourav"
        };

        let person2 = person1;

        person2.name = "Rahul";

        console.log(person1.name); // Rahul

     person1 ───┐
                │
                ▼
                { name: "Gourav" }
                ▲
                │
    person2 ───┘

15. What is autoboxing ?
-> Almost everything in JavaScript can behave like an object, but not everything is actually an object.
-> Primitives are not objects, but JavaScript provides temporary wrapper/object-like behavior that allows primitives to access methods such as those on String.prototype and Number.prototype. This is called autoboxing.
->      Primitive
        "Gourav"
        ↓
        JavaScript temporarily gives object-like wrapper behavior
        ↓
        String.prototype
        ↓
        toUpperCase()
        slice()
        includes()

16. What is NaN? 
-> NaN stands for "Not-a-Number". It represents an invalid numeric result.
    
    - const result = Number("hello");
    - console.log(result); // NaN
    - 0 / 0; // NaN   

16. Shallow Copy
-> Shallow copy creates a new top-level object, but nested objects are still shared by reference
    - copies the first/top level, while nested objects remain shared references.
        const person1 = {
        name: "Gourav",
        address: {
            city: "Jalandhar"
        }
        };

    const person2 = { ...person1 }; // using spread operator

    person1 ──► { name: "Gourav" }
                    │
                    ▼
                { city: "Jalandhar" }
                    ▲
                    │
    person2 ──► { name: "Gourav" }

17. Deep Copy 
-> Deep copy creates a completely independent copy, including nested objects.
    const person1 = {
            name: "Gourav",
            address: {
                city: "Jalandhar"
            }
        };

    const person2 = structuredClone(person1);
    const person3 = JSON.parse(JSON.stringify(person1));

18. Property vs Method in JavaScript 
        '
        const person = {
            name: "Gourav",          // Property
            age: 25,                 // Property

            greet() {                // Method
                return "Hello";
            }
        };