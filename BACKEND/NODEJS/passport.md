# What is Passport.js?

-> **Passport.js** is an authentication middleware/framework that supports different authentication strategies. **JWT is one token format/mechanism that can be used for authentication.**

```text
            Passport.js
                │
    ┌───────────┼───────────┐
    ↓           ↓           ↓
  Local        JWT        Google
 Strategy    Strategy     Strategy
    ↓           ↓           ↓
```

```text
Email/Password   JWT Token   Google Login
```

---

# Passport.js Authentication Strategies

Passport.js provides different authentication strategies, such as:

* **Local Strategy** → Email/Password
* **JWT Strategy** → JWT Token
* **Google Strategy** → Google Login

---

# Can JWT Work Without Passport.js?

-> **Yes.**

JWT can be implemented without Passport, but then we write and maintain the authentication middleware ourselves.

-> With Passport, its JWT strategy handles much of that repeated authentication work for us.

### Important Interview Point

-> JWT can be implemented manually by writing our own authentication middleware.

-> Passport provides reusable authentication strategies, such as a JWT strategy, which reduces boilerplate and organizes authentication logic.

---

# Without Passport

If we implement JWT authentication manually, we need to handle the authentication flow ourselves:

```text
Request
   ↓
Extract Bearer token        ← You
   ↓
Check token exists          ← You
   ↓
jwt.verify()                ← You
   ↓
Handle invalid/expired      ← You
   ↓
Set req.user                ← You
   ↓
next()                      ← You
```

### What We Handle Manually

1. Extract the token from the request.
2. Check whether the token exists.
3. Verify the JWT using `jwt.verify()`.
4. Handle invalid or expired tokens.
5. Set the authenticated user on `req.user`.
6. Call `next()`.

---

# With Passport

-> With Passport, you configure the JWT strategy once.

Then you can use Passport's authentication middleware on protected routes.

```js
router.get(
    "/profile",
    passport.authenticate("jwt", {
        session: false
    }),
    getProfile
);
```

-> Passport handles the authentication process according to the configured JWT strategy before the request reaches `getProfile`.

---

# Simple Interview Answer

> **Passport.js is an authentication middleware for Node.js/Express that provides reusable authentication strategies such as Local, JWT, and Google authentication. JWT can be implemented without Passport, but Passport's JWT strategy reduces authentication boilerplate by handling common token authentication steps through middleware.**

### Remember

```text
Passport.js
     ↓
Authentication Framework/Middleware
     ↓
Different Strategies
     ├── Local
     ├── JWT
     └── Google

JWT ≠ Passport

JWT → Token mechanism
Passport → Authentication middleware/framework
```
