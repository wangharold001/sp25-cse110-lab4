1. Line 9 prints: "values added: 20"

2. "final result: 20"

3. You should avoid var since the scope of variables declared this way extends through the entire function, even if they were intended for just a loop or some other conditional block. As a result they could lead to naming conflicts.

4. "values added: 20"

5. This line returns an error because it calls "result" outside of its scope; result was declared inside of the if condition and since it doesn't have function scope, it is no longer a valid variable outside of the if-block.

6. Line 9 follows line 7, which contains an illegal reassignment of a const. So the program will throw a TypeError before that line is run.

7. For the same reason, line 13 will not run either. If we had passed add = False, we would have called result outside of its scope (in fact it would not have been declared in the first place).

