# JavaScript Async Programming — Callback, Promise & async/await

## What is a Callback?

-> A callback is a function that is passed to another function and is executed later when a task is completed.

```javascript
function greet(name, callback) {
    console.log("Hello", name);
    callback();
}

greet("Gourav", () => {
    console.log("Welcome!");
});
```

---

## What is Callback Hell?

-> Callback Hell happens when multiple asynchronous operations are nested inside each other, making the code difficult to read and maintain.

```javascript
getUser((user) => {
    getOrders(user, (orders) => {
        getPayment(orders, (payment) => {
            sendEmail(payment, () => {
                console.log("Done");
            });
        });
    });
});
```

---

## How can Callback Hell be solved?

Callback Hell can be solved using:

* Promises
* async/await

---

## What is a Promise?

-> A Promise is an object that represents the eventual success or failure of an asynchronous operation.

```javascript
const promise = fetch("/users");

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

## Promise States

A Promise has three states:

1. Pending
2. Fulfilled
3. Rejected

---

## What is async/await?

* async/await is a cleaner way to work with Promises.
* `async` makes a function return a Promise.
* `await` waits for a Promise to settle before continuing inside that async function.

```javascript
async function getUser() {
    const response = await fetch("/users");
    const data = await response.json();

    console.log(data);
}
```

---

## What is Promise.all()?

-> `Promise.all()` runs multiple Promises concurrently and waits for all of them to fulfill.

```javascript
const results = await Promise.all([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
]);
```

-> If one Promise rejects, `Promise.all()` immediately rejects.

```text
Promise 1 ──→ Success
Promise 2 ──→ Success
Promise 3 ──→ Error
                ↓
          Promise.all()
                ↓
              Reject
```

---

## What is Promise.allSettled()?

-> `Promise.allSettled()` waits for all Promises to finish, regardless of whether they succeed or fail.

```javascript
const results = await Promise.allSettled([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
]);
```

---

## How do you handle errors with async/await?

-> Use `try...catch`.

```javascript
async function getUsers() {
    try {
        const response = await fetch("/users");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
```
