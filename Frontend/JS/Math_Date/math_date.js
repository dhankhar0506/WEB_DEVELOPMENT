// ============================================================
// JAVASCRIPT MATH & DATE
// MOST IMPORTANT & MOST USED METHODS
// ============================================================


// ============================================================
//                     MATH METHODS
// ============================================================


// ============================================================
// 1. Math.round()
// ============================================================
// Rounds a number to the nearest integer.

console.log("Math.round:", Math.round(4.6));
// 5

console.log("Math.round:", Math.round(4.4));
// 4


// ============================================================
// 2. Math.floor()
// ============================================================
// Rounds a number DOWN to the nearest integer.

console.log("Math.floor:", Math.floor(4.9));
// 4

console.log("Math.floor:", Math.floor(4.1));
// 4


// ============================================================
// 3. Math.ceil()
// ============================================================
// Rounds a number UP to the nearest integer.

console.log("Math.ceil:", Math.ceil(4.1));
// 5

console.log("Math.ceil:", Math.ceil(4.9));
// 5


// ============================================================
// 4. Math.trunc()
// ============================================================
// Removes the decimal part.
// Does NOT round the number.

console.log("Math.trunc:", Math.trunc(4.9));
// 4

console.log("Math.trunc:", Math.trunc(-4.9));
// -4


// ============================================================
// 5. Math.random()
// ============================================================
// Returns a random number between 0 (inclusive)
// and 1 (exclusive).

console.log("Math.random:", Math.random());


// Random number between 1 and 10

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Random 1-10:", randomNumber);


// Real Project Example:
// Generate random OTP digit

const otpDigit = Math.floor(Math.random() * 10);

console.log("OTP Digit:", otpDigit);


// Generate 6-digit OTP

const otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);


// ============================================================
// 6. Math.max()
// ============================================================
// Returns the largest number.

console.log(
    "Math.max:",
    Math.max(10, 50, 20, 80, 30)
);
// 80


// With an array use spread operator:

const numbers = [10, 50, 20, 80, 30];

console.log("Maximum:", Math.max(...numbers));
// 80


// ============================================================
// 7. Math.min()
// ============================================================
// Returns the smallest number.

console.log(
    "Math.min:",
    Math.min(10, 50, 20, 80, 30)
);
// 10


console.log(
    "Minimum:",
    Math.min(...numbers)
);
// 10


// ============================================================
// 8. Math.abs()
// ============================================================
// Returns the absolute value.
// Converts negative number to positive.

console.log("Math.abs:", Math.abs(-100));
// 100

console.log("Math.abs:", Math.abs(100));
// 100


// Real Project Example:
// Difference between two values

const price1 = 1000;
const price2 = 750;

const difference = Math.abs(price1 - price2);

console.log("Difference:", difference);
// 250


// ============================================================
// 9. Math.pow()
// ============================================================
// Returns a number raised to a power.

console.log("Math.pow:", Math.pow(2, 3));
// 8

// Modern alternative:

console.log("Exponent:", 2 ** 3);
// 8


// ============================================================
// 10. Math.sqrt()
// ============================================================
// Returns the square root.

console.log("Math.sqrt:", Math.sqrt(25));
// 5

console.log("Math.sqrt:", Math.sqrt(100));
// 10


// ============================================================
// 11. Math.cbrt()
// ============================================================
// Returns the cube root.

console.log("Math.cbrt:", Math.cbrt(27));
// 3


// ============================================================
// 12. Math.sign()
// ============================================================
// Returns:
// 1  -> positive
// -1 -> negative
// 0  -> zero

console.log("Math.sign:", Math.sign(10));
// 1

console.log("Math.sign:", Math.sign(-10));
// -1

console.log("Math.sign:", Math.sign(0));
// 0


// ============================================================
// 13. Math.log()
// ============================================================
// Returns the natural logarithm.

console.log("Math.log:", Math.log(10));


// ============================================================
// 14. Math.PI
// ============================================================
// Mathematical constant π.

console.log("Math.PI:", Math.PI);


// Real Project Example:
// Calculate circle area

const radius = 5;

const area = Math.PI * radius * radius;

console.log("Circle Area:", area);


// ============================================================
//                  DATE METHODS
// ============================================================


// ============================================================
// Creating a Date
// ============================================================


// Current date and time

const now = new Date();

console.log("Current Date:", now);


// Current timestamp

console.log("Timestamp:", Date.now());


// Specific date

const date = new Date("2026-08-14");

console.log("Specific Date:", date);


// ============================================================
// 15. Date.now()
// ============================================================
// Returns current time in milliseconds
// since January 1, 1970 (Unix epoch).

const timestamp = Date.now();

console.log("Date.now:", timestamp);


// Real Project Example:
// Store creation timestamp

const createdAt = Date.now();

console.log("Created At:", createdAt);


// ============================================================
// 16. getFullYear()
// ============================================================
// Returns the year.

const today = new Date();

console.log("Year:", today.getFullYear());


// ============================================================
// 17. getMonth()
// ============================================================
// Returns the month.
//
// IMPORTANT:
// January = 0
// February = 1
// ...
// December = 11

console.log("Month:", today.getMonth());


// To display normal month number:

console.log("Month:", today.getMonth() + 1);


// ============================================================
// 18. getDate()
// ============================================================
// Returns the day of the month.
// 1 - 31

console.log("Date:", today.getDate());


// ============================================================
// 19. getDay()
// ============================================================
// Returns the day of the week.
//
// Sunday = 0
// Monday = 1
// Tuesday = 2
// ...
// Saturday = 6

console.log("Day:", today.getDay());


// ============================================================
// 20. getHours()
// ============================================================
// Returns the hour.
// 0 - 23

console.log("Hours:", today.getHours());


// ============================================================
// 21. getMinutes()
// ============================================================
// Returns minutes.
// 0 - 59

console.log("Minutes:", today.getMinutes());


// ============================================================
// 22. getSeconds()
// ============================================================
// Returns seconds.
// 0 - 59

console.log("Seconds:", today.getSeconds());


// ============================================================
// 23. getMilliseconds()
// ============================================================
// Returns milliseconds.
// 0 - 999

console.log("Milliseconds:", today.getMilliseconds());


// ============================================================
// 24. getTime()
// ============================================================
// Returns timestamp in milliseconds.

const time = today.getTime();

console.log("getTime:", time);


// Date.now() and getTime()

console.log(Date.now());
console.log(today.getTime());


// ============================================================
// 25. toISOString()
// ============================================================
// Converts date into ISO 8601 format.
//
// Very commonly used with APIs and databases.

console.log(
    "toISOString:",
    today.toISOString()
);

// Example:
// 2026-08-14T00:00:00.000Z


// ============================================================
// 26. toDateString()
// ============================================================
// Returns a readable date string.

console.log(
    "toDateString:",
    today.toDateString()
);


// ============================================================
// 27. toTimeString()
// ============================================================
// Returns a readable time string.

console.log(
    "toTimeString:",
    today.toTimeString()
);


// ============================================================
// 28. toLocaleDateString()
// ============================================================
// Formats date according to locale.

console.log(
    "toLocaleDateString:",
    today.toLocaleDateString()
);


// Example:

console.log(
    "Indian Date:",
    today.toLocaleDateString("en-IN")
);


// ============================================================
// 29. toLocaleTimeString()
// ============================================================
// Formats time according to locale.

console.log(
    "toLocaleTimeString:",
    today.toLocaleTimeString("en-IN")
);


// ============================================================
// 30. toLocaleString()
// ============================================================
// Formats both date and time.

console.log(
    "toLocaleString:",
    today.toLocaleString("en-IN")
);


// ============================================================
// 31. setFullYear()
// ============================================================
// Changes the year.

const date1 = new Date();

date1.setFullYear(2030);

console.log("setFullYear:", date1);


// ============================================================
// 32. setMonth()
// ============================================================
// Changes the month.
//
// January = 0
// December = 11

const date2 = new Date();

date2.setMonth(0);

console.log("setMonth:", date2);


// ============================================================
// 33. setDate()
// ============================================================
// Changes the day of the month.

const date3 = new Date();

date3.setDate(20);

console.log("setDate:", date3);


// ============================================================
// 34. setHours()
// ============================================================
// Changes the hour.

const date4 = new Date();

date4.setHours(10);

console.log("setHours:", date4);


// ============================================================
// 35. setMinutes()
// ============================================================
// Changes minutes.

const date5 = new Date();

date5.setMinutes(30);

console.log("setMinutes:", date5);


// ============================================================
// 36. Date.parse()
// ============================================================
// Converts a date string into a timestamp.

const parsedDate = Date.parse("2026-08-14");

console.log("Date.parse:", parsedDate);


// ============================================================
// REAL PROJECT EXAMPLES
// ============================================================


// ============================================================
// Example 1: Check whether a date has passed
// ============================================================

const expiryDate = new Date("2026-12-31");
const currentDate = new Date();

if (currentDate > expiryDate) {
    console.log("Expired");
} else {
    console.log("Still Valid");
}


// ============================================================
// Example 2: Difference between two dates
// ============================================================

const startDate = new Date("2026-08-01");
const endDate = new Date("2026-08-14");

const differenceInMilliseconds =
    endDate - startDate;

const differenceInDays =
    differenceInMilliseconds /
    (1000 * 60 * 60 * 24);

console.log("Difference in Days:", differenceInDays);
// 13


// ============================================================
// Example 3: Add days to a date
// ============================================================

const orderDate = new Date();

orderDate.setDate(orderDate.getDate() + 7);

console.log("Delivery Date:", orderDate);


// ============================================================
// Example 4: Format date for API
// ============================================================

const apiDate = new Date();

console.log(
    "API Date:",
    apiDate.toISOString()
);


// ============================================================
// QUICK REVISION - MATH
// ============================================================
//
// Math.round() -> Round to nearest integer
// Math.floor() -> Round DOWN
// Math.ceil() -> Round UP
// Math.trunc() -> Remove decimal
//
// Math.random() -> Random number
// Math.max() -> Maximum number
// Math.min() -> Minimum number
// Math.abs() -> Absolute value
// Math.pow() -> Power
// Math.sqrt() -> Square root
// Math.cbrt() -> Cube root
// Math.sign() -> Positive / Negative / Zero
// Math.PI -> Value of PI
//
// ============================================================


// ============================================================
// QUICK REVISION - DATE
// ============================================================
//
// new Date()             -> Create Date object
// Date.now()             -> Current timestamp
// Date.parse()           -> String -> timestamp
//
// getFullYear()          -> Get year
// getMonth()             -> Get month (0-11)
// getDate()              -> Get day of month (1-31)
// getDay()               -> Get day of week (0-6)
// getHours()             -> Get hours
// getMinutes()           -> Get minutes
// getSeconds()           -> Get seconds
// getMilliseconds()      -> Get milliseconds
// getTime()              -> Get timestamp
//
// toISOString()          -> API-friendly date format
// toDateString()         -> Readable date
// toTimeString()         -> Readable time
// toLocaleDateString()   -> Localized date
// toLocaleTimeString()   -> Localized time
// toLocaleString()       -> Localized date + time
//
// setFullYear()           -> Change year
// setMonth()              -> Change month
// setDate()               -> Change date
// setHours()              -> Change hours
// setMinutes()            -> Change minutes
//
// ============================================================