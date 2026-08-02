1. What is a String?
-> A string is a primitive data type used to represent textual data.
    const name = "Gourav";
    const city = 'Jalandhar';

2. Strings are Immutable
=> Strings are immutable — once created, the existing string value cannot be modified.

#  Most Common String Properties & Methods
=> const str = "Hello World";

1. str.length; // 11 (return number of characters)
    - Important: length is a property, not a method.
    - str.length    // ✅
    - str.length()  // ❌

2. Access Characters
    str[0]; // "H"
    str[1]; // "e"

3. charAt() => Returns the character at an index.
    - str.charAt(0); // "H"

4. at() => Returns a character at an index and supports negative indexes.
    - str.at(0);  // "H"
    - str.at(-1); // "d"

5. includes() =>  Checks whether a string contains another string.
    - str.includes("World"); // true
    - str.includes("Java");  // false

6. indexOf() => Returns the first index of a substring.
    - str.indexOf("World"); // 6
    - str.indexOf("o");     // 4
    if not found return -1

7.  lastIndexOf() => Returns the last occurrence index.
    - const str = "hello world";
    - str.lastIndexOf("o"); // 7

8. startsWith() => Checks whether a string starts with something.
    - "Hello World".startsWith("Hello"); // true

9. endsWith() => Checks whether a string ends with something.
    - "Hello World".endsWith("World"); // true

10. slice() => Extracts part of a string.
    - const str = "JavaScript";
    - str.slice(0, 4); // "Java"
    end is not included.
    Supports negative indexes:

11. substring() => Similar to slice().
    - str.substring(0, 4); // "Java"
    
    - str.slice(-6);      // "Script"
    - str.substring(-6);  // treats negative as 0

12. toUpperCase()
    - "gourav".toUpperCase(); // "GOURAV"

13. toLowerCase()
    - "GOURAV".toLowerCase();// "gourav"

14. trim() => Removes whitespace from both ends.
    - const name = "   Gourav   ";
    - name.trim(); // "Gourav"

15. replace() => Replaces the first matching occurrence when given a string search value.
    - const str = "Hello Java Java";
    - str.replace("Java", "JS");    
    - // "Hello JS Java"

16. replaceAll() => Replaces all matching occurrences.
    - str.replaceAll("Java", "JS");
    -  // "Hello JS JS"

17. String → Array
    - split() => Splits a string and returns an array.
    - const str = "HTML,CSS,JavaScript";
    - str.split(",");
    - ["HTML", "CSS", "JavaScript"]

18. concat() => Combines strings.
    const first = "Gourav";
    const last = "Dhankhar";

    first.concat(" ", last);
    // "Gourav Dhankhar"

19. Template Literals => Created using backticks:
    - const name = "Gourav";
    - const age = 25;
    - const message = `My name is ${name} and I am ${age}`;

20. join() → Array → String
    - ["HTML", "CSS", "JS"].join(" ");
    - // "HTML CSS JS"


## Check Palindrome 
-> A palindrome reads the same forward and backward.
    madam
    racecar
    level
    
    - const str = "madam";
    - const reversed = str.split("").reverse().join("");
    - console.log(str === reversed); // true

## Reverse a String
    - const str = "hello";
    - const reversed = str.split("").reverse().join("");
    - console.log(reversed); // "olleh"