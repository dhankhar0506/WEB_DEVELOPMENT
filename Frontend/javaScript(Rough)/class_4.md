## HOSTING and TDZ

                Code (USING VAR)

                console.log(a);
                var a = 10;
                console.log(a);

                ──────────────────────────────

                Memory Creation Phase

                a → undefined

                ──────────────────────────────

                Code Execution Phase

                Line 1

                console.log(a)

                ↓

                undefined

                Memory

                a → undefined

                ──────────────────────────────

                Line 2

                a = 10

                Memory

                a → 10

                ──────────────────────────────

                Line 3

                console.log(a)

                ↓

                10






                    Code(USING LET)

                    console.log(a);

                    let a = 10;

                    console.log(a);

                    ──────────────────────────────

                    Memory Creation Phase

                    a → <uninitialized>

                    (TDZ Starts)

                    ──────────────────────────────

                    Code Execution Phase

                    Line 1

                    console.log(a)

                    ↓

                    ReferenceError

                    Program Stops ❌

                    Line 2 → Not Executed

                    Line 3 → Not Executed