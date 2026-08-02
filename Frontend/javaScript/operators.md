## OPERATORS
-> An operator is a symbol or keyword used to perform an operation on one or more values.

1. Arithmetic Operators
    - let a = 10;
    - let b = 3;

    - a + b;  // 13  Addition
    - a - b;  // 7   Subtraction
    - a * b;  // 30  Multiplication
    - a / b;  // 3.333...
    - a % b;  // 1   Remainder
    - a ** b; // 1000 Exponent

2. Increment & Decrement
    - let a = 5;    
    - Post-increment a++ // increment
        - let a = 5;
        - console.log(a++); // 5
        - console.log(a);   // 6
    
    - Pre-increment ++a
        - let a = 5;
        - console.log(++a); // 6
        - console.log(a);   // 6

    - a--; // decrement
    - --a; // post decrement

3. Assignment Operators
    let x = 10;

    x += 5; // x = x + 5
    x -= 5; // x = x - 5
    x *= 5; // x = x * 5
    x /= 5; // x = x / 5
    x %= 5; // x = x % 5
    x **= 2; // x = x ** 2

4. Comparison Operators
    -> == Loose Equality  (Compares values only)
        -> 5 == "5"; // true
    
    -> === Strict Equality (Compares value and type)
        -> 5 === "5"; // false
        -> 5 === 5;   // true

    -> != Loose Not Equal    
    
    ->  10 > 5;   // true
        10 < 5;   // false
        10 >= 10; // true
        10 <= 5;  // false

5. Logical Operators => Used to combine or manipulate conditions.
    &&  AND => Returns/continues to the right side when the left side is truthy; otherwise
        
        => && checks from left to right and stops at the first falsy value. 
        
        => If all values are truthy, it returns the last value.
        
        => console.log(10 && 20 && 30); // return 30
        
        => console.log(10 && 0 && 30); // return 0 because 0 is falsy value and it stops at 0 
        ->  const age = 25;
            const hasLicense = true;

            if (age >= 18 && hasLicense) {
                console.log("Can drive");
            }
    
    ||  OR => At least one condition should be truthy.
        => || checks from left to right and stops at the first truthy value. If all values are falsy, it returns the last value
        -> Also commonly used for fallback values:
        -> const username = "" || "Guest";
            console.log(username); // Guest
    
    !   NOT

6.  Optional Chaining(?) => Used to safely access nested properties/methods when something might be null or undefined.
    
    =>  const user = {};
        console.log(user.address.city);
        // TypeError
    
    => console.log(user.address?.city);
        // undefined

7. || => uses the right-side value when the left side is falsy.'
    => false
        0
        -0
        0n
        ""
        null
        undefined
        NaN
    -> const count = 0 || 10;
        console.log(count); // 10
    -> The problem is that sometimes 0, false, or "" are valid values, but || replaces them.

8. ?? — Nullish Coalescing
    -> ?? uses the right-side value only when the left side is null or undefined

9. falsy Value => 
    Boolean(false);     // false
    Boolean(0);         // false
    Boolean(-0);        // false
    Boolean(0n);        // false
    Boolean("");        // false
    Boolean(null);      // false
    Boolean(undefined); // false
    Boolean(NaN);       // false