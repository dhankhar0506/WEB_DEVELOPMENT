// ============================================================
// JAVASCRIPT STRING - MOST IMPORTANT & MOST USED METHODS
// ============================================================


// ============================================================
// 1. length
// ============================================================
// Returns the number of characters in a string.
// length is a PROPERTY, not a method.

const str = "JavaScript";

console.log("length:", str.length);
// 10


// ============================================================
// 2. toUpperCase()
// ============================================================
// Converts the string to uppercase.

const name = "gourav";

console.log("toUpperCase:", name.toUpperCase());
// GOURAV


// ============================================================
// 3. toLowerCase()
// ============================================================
// Converts the string to lowercase.

const username = "GOURAV";

console.log("toLowerCase:", username.toLowerCase());
// gourav


// ============================================================
// 4. trim()
// ============================================================
// Removes whitespace from both beginning and end.

const email = "   gourav@gmail.com   ";

console.log("trim:", email.trim());
// gourav@gmail.com


// Real Project Example:
// Very common while handling form input.

const userEmail = "   test@gmail.com   ";

const cleanEmail = userEmail.trim();

console.log("Clean Email:", cleanEmail);


// ============================================================
// 5. trimStart()
// ============================================================
// Removes whitespace from the beginning.

const text1 = "   Hello World";

console.log("trimStart:", text1.trimStart());
// Hello World


// ============================================================
// 6. trimEnd()
// ============================================================
// Removes whitespace from the end.

const text2 = "Hello World   ";

console.log("trimEnd:", text2.trimEnd());
// Hello World


// ============================================================
// 7. includes()
// ============================================================
// Checks whether a string contains a specific text.
// Returns true or false.

const message = "Welcome to JavaScript";

console.log("includes:", message.includes("JavaScript"));
// true

console.log("includes:", message.includes("Python"));
// false


// Real Project Example:
// Search functionality

const productName = "Apple iPhone 15";

console.log(
    "Search:",
    productName.toLowerCase().includes("iphone")
);
// true


// ============================================================
// 8. startsWith()
// ============================================================
// Checks whether a string starts with a specific text.

const url = "https://example.com";

console.log("startsWith:", url.startsWith("https"));
// true


// ============================================================
// 9. endsWith()
// ============================================================
// Checks whether a string ends with a specific text.

const fileName = "profile.jpg";

console.log("endsWith:", fileName.endsWith(".jpg"));
// true


// ============================================================
// 10. indexOf()
// ============================================================
// Returns the index of the FIRST occurrence.
// Returns -1 if not found.

const sentence = "JavaScript is awesome";

console.log("indexOf:", sentence.indexOf("Script"));
// 4

console.log("indexOf:", sentence.indexOf("Python"));
// -1


// ============================================================
// 11. lastIndexOf()
// ============================================================
// Returns the index of the LAST occurrence.

const text3 = "hello hello world";

console.log("lastIndexOf:", text3.lastIndexOf("hello"));
// 6


// ============================================================
// 12. charAt()
// ============================================================
// Returns the character at a specific index.

const language = "JavaScript";

console.log("charAt:", language.charAt(0));
// J

console.log("charAt:", language.charAt(4));
// S


// ============================================================
// 13. at()
// ============================================================
// Returns the character at a specific index.
// Supports negative indexes.

const language2 = "JavaScript";

console.log("at(0):", language2.at(0));
// J

console.log("at(-1):", language2.at(-1));
// t

console.log("at(-2):", language2.at(-2));
// p


// ============================================================
// 14. charCodeAt()
// ============================================================
// Returns the UTF-16 code of the character.

const letter = "A";

console.log("charCodeAt:", letter.charCodeAt(0));
// 65


// ============================================================
// 15. codePointAt()
// ============================================================
// Returns the Unicode code point of a character.

const emoji = "😀";

console.log("codePointAt:", emoji.codePointAt(0));
// 128512


// ============================================================
// 16. slice()
// ============================================================
// Extracts part of a string.
// Does NOT modify the original string.
//
// slice(start, end)
// end is NOT included.

const text4 = "JavaScript";

console.log("slice:", text4.slice(0, 4));
// Java

console.log("slice:", text4.slice(4, 10));
// Script


// Negative indexes are supported.

console.log("slice:", text4.slice(-6));
// Script


// ============================================================
// 17. substring()
// ============================================================
// Extracts characters between two indexes.
// Negative values are treated as 0.

const text5 = "JavaScript";

console.log("substring:", text5.substring(0, 4));
// Java


// ============================================================
// 18. substr() - OLD / DEPRECATED
// ============================================================
// Do NOT use this in new code.
// Prefer slice() instead.

// const text6 = "JavaScript";
// console.log(text6.substr(0, 4));


// ============================================================
// 19. replace()
// ============================================================
// Replaces the FIRST matching occurrence.

const message2 = "Hello World";

const result1 = message2.replace("World", "JavaScript");

console.log("replace:", result1);
// Hello JavaScript


// ============================================================
// 20. replaceAll()
// ============================================================
// Replaces ALL matching occurrences.

const message3 = "Java Java Java";

const result2 = message3.replaceAll("Java", "JavaScript");

console.log("replaceAll:", result2);
// JavaScript JavaScript JavaScript


// ============================================================
// 21. split()
// ============================================================
// Converts a string into an ARRAY.

const skills = "HTML,CSS,JavaScript,React";

const skillArray = skills.split(",");

console.log("split:", skillArray);
// ["HTML", "CSS", "JavaScript", "React"]


// Very important in projects.

const sentence2 = "Hello World";

console.log("split:", sentence2.split(" "));
// ["Hello", "World"]


// Split every character

console.log("split:", "Hello".split(""));
// ["H", "e", "l", "l", "o"]


// ============================================================
// 22. concat()
// ============================================================
// Combines strings.

const firstName = "Gourav";
const lastName = "Dhankhar";

const fullName = firstName.concat(" ", lastName);

console.log("concat:", fullName);
// Gourav Dhankhar


// Modern and more common approach:

const fullName2 = `${firstName} ${lastName}`;

console.log("Template Literal:", fullName2);


// ============================================================
// 23. repeat()
// ============================================================
// Repeats a string a specified number of times.

const star = "*";

console.log("repeat:", star.repeat(5));
// *****


// ============================================================
// 24. padStart()
// ============================================================
// Adds characters to the beginning
// until the string reaches the specified length.

const number = "123";

console.log("padStart:", number.padStart(5, "0"));
// 00123


// Real Project Example:
// Formatting IDs

const id = "25";

console.log("ID:", id.padStart(5, "0"));
// 00025


// ============================================================
// 25. padEnd()
// ============================================================
// Adds characters to the end
// until the string reaches the specified length.

const number2 = "123";

console.log("padEnd:", number2.padEnd(5, "0"));
// 12300


// ============================================================
// 26. match()
// ============================================================
// Searches a string using a regular expression.
// Returns matching results.

const text7 = "My phone number is 9876543210";

const result3 = text7.match(/\d+/);

console.log("match:", result3);


// ============================================================
// 27. matchAll()
// ============================================================
// Returns an iterator containing ALL matches.

const text8 = "JavaScript JavaScript React";

const matches = text8.matchAll(/JavaScript/g);

for (const match of matches) {
    console.log("matchAll:", match[0]);
}


// ============================================================
// 28. search()
// ============================================================
// Searches using a regular expression.
// Returns the index of the first match.
// Returns -1 if not found.

const text9 = "Hello JavaScript";

console.log("search:", text9.search(/JavaScript/));
// 6


// ============================================================
// 29. normalize()
// ============================================================
// Normalizes Unicode text.
// Mostly useful when dealing with Unicode characters.

const text10 = "é";

console.log("normalize:", text10.normalize());


// ============================================================
// 30. toString()
// ============================================================
// Returns the string representation.

const value = 123;

console.log("toString:", value.toString());
// "123"


// ============================================================
// 31. String()
// ============================================================
// Converts a value into a string.
//
// String() is a FUNCTION, not an instance method.

const number3 = 100;

console.log("String:", String(number3));
// "100"

console.log("String:", String(true));
// "true"

console.log("String:", String(null));
// "null"


// ============================================================
// 32. String.fromCharCode()
// ============================================================
// Creates a string from UTF-16 character codes.

console.log(
    "fromCharCode:",
    String.fromCharCode(65, 66, 67)
);
// ABC


// ============================================================
// 33. String.fromCodePoint()
// ============================================================
// Creates a string from Unicode code points.

console.log(
    "fromCodePoint:",
    String.fromCodePoint(128512)
);
// 


// ============================================================
// QUICK REVISION
// ============================================================
//
// length       -> Get string length
//
// toUpperCase  -> Convert to uppercase
// toLowerCase  -> Convert to lowercase
//
// trim         -> Remove whitespace from both sides
// trimStart    -> Remove whitespace from beginning
// trimEnd      -> Remove whitespace from end
//
// includes     -> Check if text exists
// startsWith   -> Check beginning
// endsWith     -> Check ending
//
// indexOf      -> Find first index
// lastIndexOf  -> Find last index
//
// charAt       -> Get character by index
// at           -> Get character by index, supports negative index
//
// slice        -> Extract part of string
// substring    -> Extract part of string
//
// replace      -> Replace first match
// replaceAll   -> Replace all matches
//
// split        -> String -> Array
// concat       -> Combine strings
//
// repeat       -> Repeat string
// padStart     -> Add characters at beginning
// padEnd       -> Add characters at end
//
// match        -> Find regex matches
// matchAll     -> Find all regex matches
// search       -> Search using regex
//
// normalize    -> Normalize Unicode
// toString     -> Convert value to string
//
// ============================================================