## What is debouncing in JavaScript?
-> Debouncing delays the execution of a function until the user stops triggering the event for a specified time.

- Suppose you have a search box.
    G
    Go
    Gou
    Gour
    Goura
    Gourav

- Without debounce:
    API Call
    API Call
    API Call
    API Call
    API Call
    API Call

- With debounce (500ms):
    User typing...

    (wait 500ms)

    ↓

    Only 1 API Call




function search(value) {
    console.log("Searching:", value);
}

function debounce(fn, delay) {

    let timer;
    return function (value) {

        // Cancel the previous timer (if any)
        clearTimeout(timer);

        // Create a new timer
        timer = setTimeout(() => {
            fn(value);

        }, delay);
    };
}


const debounceSearch = debounce(search, 500);


const input = document.getElementById("search");

input.addEventListener("input", (e) => {
    debounceSearch(e.target.value);

});


        <!--MEMORY LEVEL -->        
        
        debounce()

        fn ---------> search()

        delay ------> 500

        timer ------> undefined

        <!-- create a closure -->
       
        Returned Function
            │
            ▼
        Closure
        │
        ├── fn --------> search()
        │
        ├── delay -----> 500
        │
        └── timer -----> undefined

## why we clear the timer?
1. User types p (Time = 0ms)
   - debounceSearch("p");
   - Timer Table(created by browser):
    
    ID      Delay      Callback
    101     500ms      search("p") 
        
2. User types a (Time = 100ms)
    - debounceSearch("py");
    - Timer Table(created by browser):
        101     400ms left     search("p")
        102     500ms left     search("py")

3. User types a (Time = 200ms)
    - debounceSearch("pyq");
    - Timer Table(created by browser):
        101     400ms left     search("p")
        102     500ms left     search("py")
        103     500ms left     search("pyq")

-> in this case, after complete the  timer for each id it hit the API for each id. so we need to clear the previous timer to avoid multiple API calls.

## With clearTimeout()

 1. User types p (Time = 0ms)
   - debounceSearch("p");
   - Timer Table(created by browser):
    
    +----+------------------+---------+
    | ID | Callback         | Time    |
    +----+------------------+---------+
    | 1  | search("p")      | 3000ms  |
    +----+------------------+---------+

2. User types a (Time = 100ms)
    - clearTimeout(timer) // clear the previous timer 
    - debounceSearch("py");
    - it creates totally new timer and previous timer is cleared.
  - +----+------------------+---------+
    | ID | Callback         | Time    |
    +----+------------------+---------+
    | 1  | search("p")      | 3000ms  |
    +----+------------------+---------+



## Throttling :
Throttling ensures a function runs at most once within a specified time interval.
- Throttle executes immediately on the first event, blocks all events while the timer is running, and allows execution again only after the timer finishes.`

    
    const search = {
            search(value) {
                console.log(this.name, "Calling API with:", value);
            }
    };


    function throttle(fn, delay) {

        let canRun = true;

        return function (...args) {

            if (!canRun) return;

            canRun = false;

            fn.apply(this, args); 
            -> search.search.apply(user1, ["React"]);
            ->search.search.apply(user2, ["JavaScript"]);

            setTimeout(() => {
                canRun = true;
            }, delay);
        };
    }

    const user1 = {
            name: "Gourav"
        };

    user1.throttleSearch = throttle(search.search, 500);
    user1.throttleSearch("React"); // Output: Gourav Calling API with: React

    const user2 = {
         name: "Dhankhar"
    };

    user2.throttleSearch = throttle(search.search, 500);
    user2.throttleSearch("JavaScript"); // Output: Dhankhar Calling API with: JavaScript




##  | Debounce               | Throttle                             |
    | ---------------------- | ------------------------------------ |
    | Waits until user stops | Runs continuously at fixed intervals |
    | Search box             | Scroll                               |
    | Auto-save              | Resize                               |
    | Final action matters   | Continuous updates matter            |

## Memory Leak
-> A memory leak occurs when memory that is no longer needed cannot be freed by the Garbage Collector because something is still referencing it.

## Common Causes
1. Unremoved Event Listeners => If the button is removed from the page but the listener is never removed, the browser still keeps a reference to it.
2. Timers Not Cleared =>  setInterval(() => {
                            console.log("Running");
                        }, 1000);
3. Closures Holding Large Objects 