## Date in JavaScript
- typeof new Date(); // "object"
- Date is a built-in object used to work with dates and times.

1. const now = new Date();
    -> console.log(now); // 
    -> new Date() returns a Date object representing the current date AND current time.

2. We create a string into date 
    -> new Date(year, month , day , hours,minutes,second) 
        const date = new Date(2026, 7, 15, 14, 30, 45);
        15 August 2026
        2:30:45 PM
        (local time)
    
    -> new Date("2026-08-15");          // String → Date
    -> new Date(2026, 7, 15);           // Components → Date

0  → January
1  → February
2-> March 

=> const date = new Date();

3. date.getFullYear(); // 2026

4. date.getMonth() // 7 (August)

5.const date = new Date(2026, 7, 15);
    -> date.getDate(); // 15

6. date.getDay() //(day of week) 0(sunday)
    0 → Sunday
    1 → Monday
    2 → Tuesday
    3 → Wednesday
    4 → Thursday
    5 → Friday
    6 → Saturday

    -> getDate() → Date of month → 1-31
    -> getDay()  → Day of week   → 0-6

7. date.getHours(); (0–23)

8. date.getMinutes()(0-59)
9. date.getSeconds() (0-59)
10. date.getMilliseconds()(0-999)

11. date.getTime() !Important
    ->Returns the date as a timestamp in milliseconds since January 1, 1970 UTC.

12. Compare dates
    ->
    const start = new Date("2026-01-01");
    const end = new Date("2026-02-01");

    console.log(start.getTime() < end.getTime());

13. Returns the current timestamp in miilisecond
    - used to check the perfomance purpose
    const timestamp = Date.now();
    console.log(timestamp);

## Formatting Methods
=> const date = new Date(2026, 7, 15);
    
    -> toDateString()
        console.log(date.toDateString()); // Sat Aug 15 2026
    
    -> toTimeString()
       console.log(date.toTimeString());//  00:00:00 GMT+0530 (India Standard Time) 
    
    -> toLocaleDateString()
        const date = new Date(2026, 7, 15);
        console.log(date.toLocaleDateString("en-IN")); // 15/8/2026
    
    -> date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })

    -> toLocaleString()
        -> const date = new Date(2026, 7, 15, 14, 30);
        -> console.log(date.toLocaleString("en-IN")); // 15/8/2026, 2:30:00 pm  
    
    -> const date = new Date();
        - console.log(date.toISOString());
        - 2026-08-02T08:00:00.000Z
        - toISOString() converts a Date into standard ISO format in UTC. Commonly used with APIs and databases.





Date in JavaScript

Date is a built-in JavaScript object used to work with dates and times.

typeof new Date(); // "object"

1. Creating Dates

Current Date & Time

const now = new Date();
console.log(now);

new Date() returns a Date object representing the current date and time.

Date from String

new Date("2026-08-15"); // String → Date

Date from Components

new Date(year, month, day, hours, minutes, seconds);

const date = new Date(2026, 7, 15, 14, 30, 45);
// 15 August 2026, 2:30:45 PM (local time)

Important: Month starts from 0.

0 → January
1 → February
2 → March
...
7 → August

Date Getter Methods

const date = new Date(2026, 7, 15);

Method

Returns

getFullYear()

Year → 2026

getMonth()

Month → 0-11

getDate()

Day of month → 1-31

getDay()

Day of week → 0-6

getHours()

Hours → 0-23

getMinutes()

Minutes → 0-59

getSeconds()

Seconds → 0-59

getMilliseconds()

Milliseconds → 0-999

getTime()

Timestamp in milliseconds

getDay()

0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday

getDate() vs getDay()

getDate() → Date of month → 1-31
getDay()  → Day of week   → 0-6

Timestamp

getTime()

Returns the date as a timestamp in milliseconds since January 1, 1970 UTC.

const date = new Date();
date.getTime();

Date.now()

Returns the current timestamp in milliseconds.

const timestamp = Date.now();
console.log(timestamp);

Commonly used for timestamps and performance/time measurement.

Comparing Dates

Convert dates to timestamps and compare them.

const start = new Date("2026-01-01");
const end = new Date("2026-02-01");

console.log(start.getTime() < end.getTime()); // true

Formatting Methods

const date = new Date(2026, 7, 15);

toDateString()

Returns a readable date string.

date.toDateString();
// "Sat Aug 15 2026"

toTimeString()

Returns the local time with timezone information.

date.toTimeString();
// "00:00:00 GMT+0530 (India Standard Time)"

toLocaleDateString()

Formats the date according to a locale.

date.toLocaleDateString("en-IN");
// "15/8/2026"

Custom format:

date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

toLocaleString()

Formats both date and time according to a locale.

const date = new Date(2026, 7, 15, 14, 30);

date.toLocaleString("en-IN");
// "15/8/2026, 2:30:00 pm"

toISOString()

Converts a Date into standard ISO format in UTC.

const date = new Date();

console.log(date.toISOString());
// "2026-08-02T08:00:00.000Z"

Commonly used with APIs and databases.

Quick Revision

new Date()              → Current date & time
new Date("date")        → String → Date
new Date(year, month...) → Components → Date

getFullYear()           → Year
getMonth()              → Month (0-11)
getDate()               → Date of month (1-31)
getDay()                → Day of week (0-6)
getHours()              → Hours (0-23)
getMinutes()            → Minutes (0-59)
getSeconds()            → Seconds (0-59)
getMilliseconds()       → Milliseconds (0-999)
getTime()               → Timestamp

Date.now()              → Current timestamp
toDateString()          → Readable date
toTimeString()          → Readable time + timezone
toLocaleDateString()    → Localized date
toLocaleString()        → Localized date + time
toISOString()           → ISO date in UTC