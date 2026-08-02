## What is an Iterable?
    -> An iterable is an object that has a **Symbol.iterator** method. When we call Symbol.iterator(), it returns an iterator, which is used to iterate over the values of that object.
    -> In JavaScript, an object is iterable if it has a special method:[Symbol.iterator]
    -> An iterable is an object that implements the Symbol.iterator method, which returns an [iterator].
- Examples of built-in iterables:Array  / string / object / Map /set

- Exmpale = arr                    → Iterable
          arr[Symbol.iterator]() → returns Iterator

## Iterable Protocol
-> Iterable Protocol is a JavaScript rule that says an iterable object must have a [Symbol.iterator]() method, and that method must return an iterator.

## what is Iteration?
->Iteration in programming means repeatedly accessing or processing elements one by one from a collection (like an array, string, or object).

## What is an Iterator?
-> An iterator is an object that has a next() method. Every time we call next(), it returns the current value and a done boolean, and moves to the next value. When done becomes true, the iteration is finished.

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


            Array
                ↓
            Iterable
                ↓
            Symbol.iterator()
                ↓
            Iterator
                ↓
            next()
                ↓
            { value: 10, done: false }

## . Iterator Protocol
-> Iterator Protocol is a JavaScript rule that says an iterator must have a next() method, and next() must return an object containing value and done.


## What are value and done?
- value = current value
- done = whether iteration has finished

## Why do we need Symbol.iterator?

-> Think of Symbol.iterator as: "Tell JavaScript how to iterate over me."

->    const arr = [10, 20, 30];

    const iterator = arr[Symbol.iterator]();

    let result = iterator.next();

    while (!result.done) {
    console.log(result.value);

    result = iterator.next();
    }

## What is a Generator?
-> A generator is a special function that can pause and resume its execution using yield. It provides a simpler way to create iterators.
-> The * makes it a generator function.
-> When you create a generator function, JavaScript handles the iterator/iterable machinery for the generator object automatically.
-> A generator is one of the easiest ways to create your own iterable/iterator.

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

##      Want custom iteration
            ↓
        Can manually create
        Symbol.iterator + next()
            ↓
            OR
            ↓
        Use Generator
        function* + yield
            ↓
        Much simpler
            ↓
        Generator object is
        Iterator + Iterable

## Lazy Evaluation
-> Lazy evaluation means generating/calculating a value only when it is requested.

## yield vs return 

- What is yield? => yield is a keyword used inside a generator function. It returns a value and pauses the execution of the generator until next() is called again.

What is return? => return immediately ends the function and returns a final value. Once return executes, the function cannot resume.

-> yield produces a value and pauses the generator so it can resume on the next next() call, whereas return produces a final value and permanently finishes the generator.

| yield                       | return                               |
| --------------------------- | ------------------------------------ |
| Pauses function             | Ends function                        |
| Can resume later            | Cannot resume                        |
| Used only in generators     | Used in normal & generator functions |
| Returns one value at a time | Returns one final value              |
| Multiple `yield` allowed    | Only one effective `return`          |
