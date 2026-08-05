## 1. Diffing Algorithm
-> Diffing is the process of comparing the old Virtual DOM with the new Virtual DOM to find the minimum changes required to update the Real DOM.

## Fiber
Definition -> Fiber is React's reconciliation engine introduced in React 16 that breaks rendering work into small units, allowing React to pause, resume, prioritize, and schedule rendering efficiently.

> Fiber does not determine which components changed. Fiber is React's rendering engine that schedules and prioritizes rendering work. The Virtual DOM and Diffing Algorithm determine what has changed, and React updates only those changed parts of the Real DOM.


## working of fiber.
->React fiber render some products then user clicks search, React stops rendering and gives the thread to browser, browser takes search text, then React again takes the main thread and renders the remaining products.
-> React itself handles all the scheduling, prioritization, pausing, and resuming.

React decides based on
    Available time
    Priority
    Browser workload

- Suppose an API returns 1000 products.
- React starts rendering them, but Fiber breaks the rendering work into small units instead of processing everything in one long task. 
- After completing some work, React voluntarily yields control to the browser.
- If the user starts typing in the search box, the browser immediately handles that high-priority input, keeping the UI responsive.
- Once the browser is free, React either resumes the remaining rendering work or, if the search changed the required UI, it can discard the unfinished work and start rendering the filtered product list instead.
-  This ability to pause, resume, prioritize, and even abandon outdated work is the key advantage of React Fiber.


## React Optimization

Optimization means => Make React faster by reducing unnecessary renders and expensive calculations.
1. React.memo()
2. useMemo()
3. useCallback()
4. Lazy Loading
5. code spliting
6. Debounce
7. Throttle

## Synchronous Rendering 
-> means React performs all rendering work in one continuous task without pausing. During this time, the JavaScript thread is busy, so the browser cannot process other tasks like clicks, typing, or scrolling until React finishes.
       
        React starts rendering
            ↓
        Rendering takes 200ms
            ↓
        User clicks button
            ↓
        Browser waits ❌
            ↓
        Rendering completes
            ↓
        Now browser handles click