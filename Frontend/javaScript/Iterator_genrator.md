# JavaScript Interview Questions — Iterable, Iterator & Generator

---

# 1. What is Iteration?

> **Iteration in programming means repeatedly accessing or processing elements one by one from a collection.**

Examples of collections:

```text
Array
String
Map
Set
```

Example:

```js
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}
```

Output:

```text
10
20
30
```

JavaScript is accessing the values one by one.

```text
10
 ↓
20
 ↓
30
 ↓
Finished
```

This process is called **Iteration**.

---

# 2. What is an Iterable?

> **An iterable is an object that implements the `Symbol.iterator` method. Calling this method returns an iterator that JavaScript can use to access the object's values one by one.**

In simple words:

> **Iterable = An object that tells JavaScript how to start iterating over it.**

The important requirement is:

```js
object[Symbol.iterator]
```

If an object implements the iterable protocol, it has:

```js
object[Symbol.iterator]()
```

which returns:

```text
Iterator
```

Flow:

```text
Iterable Object
      ↓
[Symbol.iterator]()
      ↓
Returns Iterator
      ↓
iterator.next()
      ↓
Values one by one
```

---

# 3. Built-in Iterables

Examples of built-in JavaScript iterables include:

```text
Array
String
Map
Set
TypedArray
```

For example:

```js
const arr = [10, 20, 30];
```

`arr` is iterable.

Therefore:

```js
arr[Symbol.iterator]
```

exists.

And:

```js
arr[Symbol.iterator]()
```

returns an iterator.

Important correction for interviews:

> **Plain JavaScript objects `{}` are NOT iterable by default.**

For example:

```js
const user = {
    name: "Gourav",
    age: 24
};

for (const value of user) {
    console.log(value);
}
```

This throws:

```text
TypeError: user is not iterable
```

because a plain object doesn't implement `Symbol.iterator` by default.

---

# 4. How Can We Check Whether Something is Iterable?

Example:

```js
const arr = [10, 20, 30];

console.log(arr[Symbol.iterator]);
```

You will find a function.

Conceptually:

```text
arr
 │
 ├── 10
 ├── 20
 ├── 30
 │
 └── Symbol.iterator
          │
          ▼
       function
```

So:

```js
typeof arr[Symbol.iterator] === "function"
```

can be used as a simple check.

---

# 5. What is `Symbol.iterator`?

> **`Symbol.iterator` is a well-known JavaScript symbol used to define how an object should be iterated.**

Simple meaning:

> **"Tell JavaScript how to iterate over me."**

For example:

```js
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();
```

Here:

```text
arr
 ↓
Iterable

arr[Symbol.iterator]()
 ↓
Iterator
```

Important:

`Symbol.iterator` itself does **not iterate through everything**.

Instead:

```text
Symbol.iterator()
       ↓
Returns an Iterator
       ↓
Iterator's next()
       ↓
Produces values
```

---

# 6. What is the Iterable Protocol?

> **Iterable Protocol is a JavaScript rule that says an iterable object must have a `[Symbol.iterator]()` method, and that method must return an iterator.**

Rule:

```text
Object wants to be Iterable
          ↓
Must implement
          ↓
[Symbol.iterator]()
          ↓
Must return
          ↓
Iterator
```

Conceptually:

```js
const obj = {

    [Symbol.iterator]() {

        return iterator;

    }

};
```

Now JavaScript knows:

```text
"To iterate over obj,
call obj[Symbol.iterator]()"
```

---

# 7. What is an Iterator?

> **An iterator is an object that has a `next()` method. Every time `next()` is called, it returns an object containing `value` and `done`.**

Example:

```js
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();
```

Now:

```js
console.log(iterator.next());
```

Output:

```js
{ value: 10, done: false }
```

Again:

```js
console.log(iterator.next());
```

Output:

```js
{ value: 20, done: false }
```

Again:

```js
console.log(iterator.next());
```

Output:

```js
{ value: 30, done: false }
```

Again:

```js
console.log(iterator.next());
```

Output:

```js
{ value: undefined, done: true }
```

Complete code:

```js
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
// { value: 10, done: false }

console.log(iterator.next());
// { value: 20, done: false }

console.log(iterator.next());
// { value: 30, done: false }

console.log(iterator.next());
// { value: undefined, done: true }
```

---

# 8. Complete Iterable → Iterator Flow

```text
Array
  ↓
Iterable
  ↓
[Symbol.iterator]()
  ↓
Iterator
  ↓
next()
  ↓
{ value: 10, done: false }
  ↓
next()
  ↓
{ value: 20, done: false }
  ↓
next()
  ↓
{ value: 30, done: false }
  ↓
next()
  ↓
{ value: undefined, done: true }
```

This is the most important relationship to remember.

---

# 9. What is the Iterator Protocol?

> **Iterator Protocol is a JavaScript rule that says an iterator must have a `next()` method, and `next()` must return an object containing `value` and `done`.**

Rule:

```text
Iterator
   ↓
Must have
   ↓
next()
   ↓
Must return
   ↓
{
   value: ...,
   done: ...
}
```

Example:

```js
iterator.next();
```

returns:

```js
{
    value: 10,
    done: false
}
```

---

# 10. Iterable Protocol vs Iterator Protocol

This is an important interview difference.

| Iterable Protocol                      | Iterator Protocol                |
| -------------------------------------- | -------------------------------- |
| Defines how iteration starts           | Defines how iteration continues  |
| Requires `[Symbol.iterator]()`         | Requires `next()`                |
| `[Symbol.iterator]()` returns iterator | `next()` returns `{value, done}` |
| Belongs to iterable object             | Belongs to iterator              |

Easy memory trick:

```text
Iterable Protocol
       ↓
"Give me an iterator"


Iterator Protocol
       ↓
"Give me the next value"
```

---

# 11. What are `value` and `done`?

Every:

```js
iterator.next()
```

returns something like:

```js
{
    value: 10,
    done: false
}
```

### `value`

> **The current value produced by the iterator.**

Example:

```text
value = 10
```

### `done`

> **A boolean that tells whether the iteration has finished.**

```text
done = false
```

means:

```text
More values are available
```

Whereas:

```text
done = true
```

means:

```text
Iteration finished
```

---

# 12. Manual Iteration

Normally we write:

```js
const arr = [10, 20, 30];

for (const value of arr) {

    console.log(value);

}
```

But internally, iteration is based on the iterator protocol.

We can manually do:

```js
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {

    console.log(result.value);

    result = iterator.next();

}
```

Output:

```text
10
20
30
```

Flow:

```text
iterator.next()
      ↓
{value: 10, done: false}
      ↓
Print 10
      ↓
iterator.next()
      ↓
{value: 20, done: false}
      ↓
Print 20
      ↓
iterator.next()
      ↓
{value: 30, done: false}
      ↓
Print 30
      ↓
iterator.next()
      ↓
{value: undefined, done: true}
      ↓
STOP
```

---

# 13. How Does `for...of` Work?

When we write:

```js
for (const num of arr) {

    console.log(num);

}
```

we don't manually call:

```js
iterator.next();
```

because `for...of` uses the iterable/iterator protocols for us.

Conceptually:

```text
for...of
   ↓
Gets Symbol.iterator
   ↓
Gets Iterator
   ↓
Calls next()
   ↓
Gets value
   ↓
Calls next()
   ↓
Gets value
   ↓
...
   ↓
done === true
   ↓
STOP
```

That's why:

```js
for (const num of numbers()) {
    console.log(num);
}
```

doesn't require:

```js
gen.next();
```

manually.

`for...of` handles that process.

---

# 14. Creating Our Own Iterable Manually

Suppose we want this object:

```js
const numbers = {
    start: 1,
    end: 3
};
```

to work with:

```js
for (const num of numbers) {

    console.log(num);

}
```

A normal plain object is not iterable.

So we implement:

```js
Symbol.iterator
```

Example:

```js
const numbers = {

    start: 1,
    end: 3,

    [Symbol.iterator]() {

        let current = this.start;
        const end = this.end;

        return {

            next() {

                if (current <= end) {

                    return {
                        value: current++,
                        done: false
                    };

                }

                return {
                    value: undefined,
                    done: true
                };
            }

        };
    }
};
```

Now:

```js
for (const num of numbers) {

    console.log(num);

}
```

Output:

```text
1
2
3
```

---

# 15. Custom Iterable Flow

Our object:

```text
numbers
│
├── start
├── end
│
└── Symbol.iterator()
         ↓
     returns Iterator
         │
         └── next()
                ↓
          {value, done}
```

Now JavaScript can iterate over it.

```text
numbers
   ↓
Iterable Protocol
   ↓
Symbol.iterator()
   ↓
Iterator
   ↓
Iterator Protocol
   ↓
next()
   ↓
1
   ↓
2
   ↓
3
```

---

# 16. Problem With Creating Iterators Manually

Creating custom iterators manually requires writing:

```text
Symbol.iterator
next()
current value
done
state management
```

Example:

```js
return {

    next() {

        if (current <= end) {

            return {
                value: current++,
                done: false
            };

        }

        return {
            value: undefined,
            done: true
        };
    }

};
```

This works, but it can become verbose.

JavaScript provides a simpler solution:

# Generators

---

# 17. What is a Generator?

> **A generator is a special function that can pause and resume its execution using `yield`. It provides a simpler way to create iterators.**

Generator function syntax:

```js
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}
```

The:

```text
*
```

makes it a **generator function**.

And:

```text
yield
```

produces values one by one while pausing execution.

---

# 18. Normal Function vs Generator Function

Normal function:

```js
function numbers() {

    return 10;

}
```

Generator function:

```js
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}
```

Difference:

```text
Normal Function
      ↓
Runs
      ↓
return
      ↓
Finished


Generator Function
      ↓
next()
      ↓
Runs until yield
      ↓
PAUSE
      ↓
next()
      ↓
RESUME
```

---

# 19. Calling a Generator Function

Consider:

```js
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}
```

Now:

```js
const gen = numbers();
```

Important:

Calling:

```js
numbers()
```

does **not immediately execute the generator body like a normal function**.

Instead, it returns a:

```text
Generator Object
```

So:

```text
numbers()
    ↓
Generator Object
    ↓
Stored in gen
```

---

# 20. Generator Object

```js
const gen = numbers();
```

`gen` is a generator object.

The generator object is:

```text
Iterator
+
Iterable
```

This is very important.

```text
Generator Function
       ↓
Call it
       ↓
Generator Object
       │
       ├── Iterator
       │      ↓
       │    next()
       │
       └── Iterable
              ↓
       [Symbol.iterator]()
```

So:

> **The generator function itself is not "the iterable object." Calling it creates a generator object, and that generator object is both an iterator and iterable.**

---

# 21. Using `next()` With Generator

```js
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}

const gen = numbers();

console.log(gen.next());
```

Execution starts.

It reaches:

```js
yield 10;
```

Then pauses.

Result:

```js
{
    value: 10,
    done: false
}
```

Call again:

```js
console.log(gen.next());
```

The generator resumes from where it paused.

It reaches:

```js
yield 20;
```

Result:

```js
{
    value: 20,
    done: false
}
```

Again:

```js
console.log(gen.next());
```

Result:

```js
{
    value: 30,
    done: false
}
```

Again:

```js
console.log(gen.next());
```

Result:

```js
{
    value: undefined,
    done: true
}
```

---

# 22. Complete Generator Execution

```js
function* numbers() {

    yield 10;

    yield 20;

    yield 30;

}

const gen = numbers();

console.log(gen.next());
// { value: 10, done: false }

console.log(gen.next());
// { value: 20, done: false }

console.log(gen.next());
// { value: 30, done: false }

console.log(gen.next());
// { value: undefined, done: true }
```

Flow:

```text
numbers()
   ↓
Generator Object
   ↓
gen.next()
   ↓
Start Function
   ↓
yield 10
   ↓
PAUSE
   ↓
{value:10, done:false}


gen.next()
   ↓
RESUME
   ↓
yield 20
   ↓
PAUSE
   ↓
{value:20, done:false}


gen.next()
   ↓
RESUME
   ↓
yield 30
   ↓
PAUSE
   ↓
{value:30, done:false}


gen.next()
   ↓
RESUME
   ↓
Function Ends
   ↓
{value:undefined, done:true}
```

---

# 23. Why Don't We Call `.next()` With `for...of`?

Consider:

```js
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}

for (const num of numbers()) {

    console.log(num);

}
```

Output:

```text
10
20
30
```

We don't manually call:

```js
gen.next();
```

because `for...of` automatically uses the iterable and iterator protocols.

Conceptually:

```text
numbers()
    ↓
Generator Object
    ↓
for...of gets iterator
    ↓
next()
    ↓
10
    ↓
next()
    ↓
20
    ↓
next()
    ↓
30
    ↓
next()
    ↓
done = true
    ↓
STOP
```

So:

> **`for...of` automatically calls the iterator's `next()` method until `done` becomes `true`.**

---

# 24. Creating a Custom Iterable Using Generator

Earlier we manually wrote:

```text
Symbol.iterator
+
next()
+
value
+
done
```

Generators make this much easier.

Example:

```js
const numbers = {

    start: 1,
    end: 5,

    *[Symbol.iterator]() {

        for (
            let i = this.start;
            i <= this.end;
            i++
        ) {

            yield i;

        }

    }

};
```

Now:

```js
for (const num of numbers) {

    console.log(num);

}
```

Output:

```text
1
2
3
4
5
```

This is a very useful generator use case.

---

# 25. Manual Iterator vs Generator

Manual approach:

```text
Want Custom Iteration
        ↓
Create
Symbol.iterator
        ↓
Return Iterator
        ↓
Create next()
        ↓
Manage value
        ↓
Manage done
```

Generator approach:

```text
Want Custom Iteration
        ↓
Use Generator
        ↓
function*
        ↓
yield
        ↓
JavaScript handles
iterator state/results
```

Therefore:

> **Generators provide a simpler way to implement iteration logic.**

---

# 26. Generator Relationship

Remember this complete relationship:

```text
Want Custom Iteration
        ↓
Can manually create
Symbol.iterator + next()
        ↓
        OR
        ↓
Use Generator
function* + yield
        ↓
Much Simpler
        ↓
Generator Object
        ↓
Iterator + Iterable
```

---

# 27. What is `yield`?

> **`yield` is a keyword used inside a generator function. It produces a value and pauses the execution of the generator until `next()` is called again.**

Example:

```js
function* test() {

    console.log("A");

    yield 10;

    console.log("B");

    yield 20;

    console.log("C");

}
```

Now:

```js
const gen = test();
```

Nothing from the generator body is printed yet.

Call:

```js
gen.next();
```

Output:

```text
A
```

Result:

```js
{
    value: 10,
    done: false
}
```

Generator pauses.

Call again:

```js
gen.next();
```

Output:

```text
B
```

Result:

```js
{
    value: 20,
    done: false
}
```

Again:

```js
gen.next();
```

Output:

```text
C
```

Result:

```js
{
    value: undefined,
    done: true
}
```

---

# 28. Generator Pause and Resume

```text
Generator Starts
      ↓
console.log("A")
      ↓
yield 10
      ↓
PAUSE
      ↓

next()

      ↓
RESUME
      ↓
console.log("B")
      ↓
yield 20
      ↓
PAUSE
      ↓

next()

      ↓
RESUME
      ↓
console.log("C")
      ↓
Function Ends
```

This is the special power of generators.

---

# 29. What is Lazy Evaluation?

> **Lazy evaluation means generating or calculating a value only when it is requested.**

Generators support lazy evaluation naturally.

Example:

```js
function* numbers() {

    console.log("Generating 1");

    yield 1;

    console.log("Generating 2");

    yield 2;

    console.log("Generating 3");

    yield 3;

}
```

Now:

```js
const gen = numbers();
```

At this point:

```text
No values generated yet
```

Call:

```js
gen.next();
```

Only then:

```text
Generating 1
```

runs.

The generator doesn't need to calculate every value at once.

---

# 30. Why is Lazy Evaluation Useful?

Suppose we have a huge sequence.

Instead of generating:

```text
1
2
3
4
5
...
1,000,000
```

all at once and storing everything, a generator can produce:

```text
Request
  ↓
Generate 1


Request
  ↓
Generate 2


Request
  ↓
Generate 3
```

So:

```text
Generate only when needed
```

This can be useful for:

```text
Large sequences
Large datasets
Streaming-style processing
Custom iteration
Infinite sequences
Memory-efficient processing
```

---

# 31. Infinite Generator Example

Generators can represent sequences that conceptually never end.

Example:

```js
function* counter() {

    let count = 1;

    while (true) {

        yield count++;

    }

}
```

Now:

```js
const gen = counter();

console.log(gen.next().value);
// 1

console.log(gen.next().value);
// 2

console.log(gen.next().value);
// 3
```

We don't generate infinite numbers immediately.

Instead:

```text
next()
 ↓
1

next()
 ↓
2

next()
 ↓
3
```

This is **Lazy Evaluation**.

---

# 32. `yield` vs `return`

## What is `yield`?

> **`yield` produces a value and pauses the generator so execution can resume later when `next()` is called again.**

## What is `return`?

> **`return` immediately finishes the function and optionally provides its final return value. Once `return` executes, that invocation cannot resume.**

Simple difference:

```text
yield
  ↓
Give value
  ↓
Pause
  ↓
Resume later


return
  ↓
Give final value
  ↓
END
```

---

# 33. `yield` vs `return` Table

| `yield`                      | `return`                                     |
| ---------------------------- | -------------------------------------------- |
| Pauses generator             | Ends function                                |
| Can resume later             | Cannot resume                                |
| Used inside generators       | Used in normal and generator functions       |
| Produces one value at a time | Produces a final return value                |
| Multiple `yield`s allowed    | First executed `return` ends that invocation |
| `done: false` while yielding | Generator `return` produces `done: true`     |

---

# 34. `return` Inside a Generator

Example:

```js
function* numbers() {

    yield 10;

    return 20;

    yield 30;

}
```

Now:

```js
const gen = numbers();

console.log(gen.next());
```

Output:

```js
{
    value: 10,
    done: false
}
```

Again:

```js
console.log(gen.next());
```

Output:

```js
{
    value: 20,
    done: true
}
```

The generator is finished.

Therefore:

```js
yield 30;
```

will never execute.

Another:

```js
console.log(gen.next());
```

gives a completed result such as:

```js
{
    value: undefined,
    done: true
}
```

---

# 35. Important `for...of` + `return` Detail

Consider:

```js
function* numbers() {

    yield 10;

    return 20;

}
```

Using:

```js
for (const num of numbers()) {

    console.log(num);

}
```

Output:

```text
10
```

Not:

```text
10
20
```

Why?

Because `return 20` completes the generator with:

```js
{
    value: 20,
    done: true
}
```

`for...of` processes yielded iteration values and stops when:

```text
done === true
```

---

# 36. Generator Object is Both Iterator and Iterable

This is one of the most important interview concepts.

```js
function* numbers() {

    yield 10;
    yield 20;

}

const gen = numbers();
```

`gen` has:

```text
next()
```

Therefore:

```text
gen is an Iterator
```

It also implements:

```text
Symbol.iterator
```

Therefore:

```text
gen is Iterable
```

So:

```text
Generator Object
      │
      ├── Iterator
      │      ↓
      │    next()
      │
      └── Iterable
             ↓
      Symbol.iterator
```

---

# 37. Does Generator Make Every Object Iterable Automatically?

No.

Creating:

```js
function* numbers() {

    yield 10;

}
```

doesn't magically make some unrelated plain object iterable.

Instead:

```text
Generator Function
      ↓
Call Generator
      ↓
Generator Object
      ↓
That Generator Object
is Iterator + Iterable
```

To make your own object iterable using a generator:

```js
const obj = {

    *[Symbol.iterator]() {

        yield 10;
        yield 20;
        yield 30;

    }

};
```

Now:

```js
for (const value of obj) {

    console.log(value);

}
```

works.

---

# 38. Where Are Iterables Used Automatically?

JavaScript syntax/features that consume iterables include:

```text
for...of
Spread Operator (...)
Array.from()
Destructuring
Promise.all()
Map constructor
Set constructor
```

Example:

```js
const arr = [10, 20, 30];

const copy = [...arr];
```

The spread operator can consume iterable values.

Another:

```js
const str = "ABC";

console.log([...str]);
```

Output:

```js
["A", "B", "C"]
```

Because strings are iterable.

---

# 39. `for...in` vs `for...of`

Important interview topic.

### `for...in`

Used to iterate over enumerable property keys.

```js
const user = {

    name: "Gourav",
    age: 24

};

for (const key in user) {

    console.log(key);

}
```

Output:

```text
name
age
```

### `for...of`

Used to iterate over values from an iterable.

```js
const arr = [10, 20, 30];

for (const value of arr) {

    console.log(value);

}
```

Output:

```text
10
20
30
```

Difference:

| `for...in`                        | `for...of`                                     |
| --------------------------------- | ---------------------------------------------- |
| Iterates enumerable property keys | Iterates iterable values                       |
| Commonly used with objects        | Commonly used with arrays, strings, Maps, Sets |
| Doesn't require iterable protocol | Uses iterable protocol                         |
| Gives keys/property names         | Gives yielded/iterated values                  |

Memory trick:

```text
for...IN
   ↓
property keys


for...OF
   ↓
iterable values
```

---

# 40. Complete Mental Model

```text
                    ITERATION
                        │
                        ▼
                    ITERABLE
                        │
              [Symbol.iterator]()
                        │
                        ▼
                    ITERATOR
                        │
                      next()
                        │
                        ▼
              { value, done }
                        │
            ┌───────────┴───────────┐
            │                       │
       done = false             done = true
            │                       │
        Continue                    STOP
```

Generators simplify this:

```text
Want Custom Iterator / Iterable Logic
                │
                ▼
            function*
                │
                ▼
              yield
                │
                ▼
        Generator Object
                │
        ┌───────┴───────┐
        │               │
     Iterator        Iterable
        │               │
      next()      Symbol.iterator
```

---

# 41. Important Interview Questions

## What is an Iterable?

> **An iterable is an object that implements `[Symbol.iterator]()` and can provide an iterator.**

---

## What is an Iterator?

> **An iterator is an object with a `next()` method that returns `{ value, done }`.**

---

## What is Iterable Protocol?

> **The iterable protocol requires an iterable object to implement `[Symbol.iterator]()` that returns an iterator.**

---

## What is Iterator Protocol?

> **The iterator protocol requires an iterator to have a `next()` method that returns an object containing `value` and `done`.**

---

## What is `Symbol.iterator`?

> **`Symbol.iterator` is the well-known symbol JavaScript uses to obtain an iterator from an iterable object.**

---

## What is a Generator?

> **A generator is a special function declared with `function*` that can pause and resume using `yield`, providing a simpler way to create iterators.**

---

## What Does `yield` Do?

> **`yield` produces a value and pauses generator execution until `next()` is called again.**

---

## What is Lazy Evaluation?

> **Lazy evaluation means calculating or generating a value only when it is requested.**

---

## Is a Generator Object an Iterator?

Yes.

Because it has:

```js
next()
```

---

## Is a Generator Object Iterable?

Yes.

Because it implements:

```js
Symbol.iterator
```

Therefore:

> **Generator Object = Iterator + Iterable**

---

## Why Doesn't `for...of` Need `.next()`?

> **Because `for...of` automatically obtains the iterator and repeatedly calls `next()` until `done` becomes `true`.**

---

# 42. Quick Interview Revision Table

| Concept                | Simple Meaning                      |
| ---------------------- | ----------------------------------- |
| **Iteration**          | Access values one by one            |
| **Iterable**           | Object that can provide an iterator |
| **`Symbol.iterator`**  | Method/key used to obtain iterator  |
| **Iterable Protocol**  | Requires `[Symbol.iterator]()`      |
| **Iterator**           | Object that provides next values    |
| **Iterator Protocol**  | Requires `next()` → `{value, done}` |
| **`value`**            | Current produced value              |
| **`done`**             | Whether iteration is finished       |
| **Generator Function** | Special `function*`                 |
| **Generator Object**   | Iterator + Iterable                 |
| **`yield`**            | Produce value + pause               |
| **`return`**           | Final value + finish                |
| **Lazy Evaluation**    | Generate only when requested        |
| **`for...of`**         | Automatically consumes an iterable  |

---

# 43. Final Memory Trick

```text
Iterable
   ↓
"I CAN be iterated"

   ↓

Symbol.iterator()
   ↓
"Here is HOW"

   ↓

Iterator
   ↓
"I know the current position"

   ↓

next()
   ↓
"Give next value"

   ↓

{ value, done }
```

Generator:

```text
function*
   ↓
Generator Function

Call it
   ↓
Generator Object

Generator Object
   ↓
Iterator + Iterable

next()
   ↓
Run

yield
   ↓
Value + PAUSE

next()
   ↓
RESUME

yield
   ↓
Value + PAUSE

return / Function End
   ↓
done: true
```

# Final One-Line Revision

**Iteration means accessing values one by one → an Iterable implements `[Symbol.iterator]()` → `Symbol.iterator()` returns an Iterator → an Iterator implements `next()` → `next()` returns `{value, done}` → Generators simplify iterator creation using `function*` and `yield` → calling a generator returns a Generator Object that is both Iterator and Iterable → `yield` produces a value and pauses execution → `return` permanently finishes it → generators support lazy evaluation by generating values only when requested.**
