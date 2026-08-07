## What is Passport.js?

-> Passport.js is an authentication middleware/framework that supports different authentication strategies. JWT is one token format/mechanism that can be used for authentication.

                Passport.js
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      Local        JWT        Google
     Strategy    Strategy     Strategy
        ↓           ↓           ↓
 Email/Password  JWT Token   Google Login

-> JWT can be implemented without Passport, but then we write and maintain the authentication middleware ourselves. With Passport, its JWT strategy handles much of that repeated authentication work for us.

-> JWT can be implemented manually by writing our own authentication middleware. Passport provides reusable authentication strategies, such as a JWT strategy, which reduces boilerplate and organizes authentication logic.

> Without Passport
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


With Passport
-> You configure the JWT strategy once.
router.get(
    "/profile",
    passport.authenticate("jwt", {
        session: false
    }),
    getProfile
);