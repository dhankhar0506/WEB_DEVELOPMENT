## JavaScript Memory Model

                    Memory
           ┌──────────────────────┐
           │ Heap Memory          │
           │                      │
           │ Objects              │
           │ Arrays               │
           │ Functions            │
           └──────────────────────┘

                    ▲
                    │ References
                    │

           ┌──────────────────────┐
           │ Execution Context    │
           │                      │
           │ Lexical Environment  │
           │ this Binding         │
           │ Code Execution       │
           └──────────────────────┘

1.  Heap Memory = Stores objects, arrays, and functions. It is a large region of memory used for dynamic memory allocation.
    - it actually stores the values of objects, arrays, and functions.
      const obj = {
      name: "Gourav"
      };

      function test(){}

      obj
      │
      └── name → "Gourav"

      test()

      Function Object

2.  Lexical Environment = stores the variables and functions of a scope and a reference to its outer Lexical Environment.
    - it stores the variables and references of objects, arrays, and functions which stores in Heap Memory.

      function outer() {
      let a = 10;

             function inner() {
                 let b = 20;
                 console.log(a, b);
             }

             return inner;

      }

      const myFunc = outer();

      myFunc(); // 10 20

3.  this Binding -> stored seprately in the Execution Context. It points to the object that is currently calling the function.

                Execution Context

                Lexical Environment
                -------------------------

                this Binding

                ↓

                ?

                -------------------------

                Code

        -> const obj = {
        test
        };

            obj.test();
            Object before the dot? YES this -> obj

        -> function test(){
        console.log(this);
        }

            test();
            there is no object before the dot? NO this -> window(global object)

        -> const x = obj.test;
        x();
        who before the dot -> obj not x so this -> window(global object)
