1. The bug is that document.getElementByID().value returns a string. When we add them together, the "sum" is concatenation of the two user inputs, which is not the addition operation that we want.

2. I fixed the bug by casting num1, num2 to integers after receiving the input from the user. That way, the "+" operator knows to add two numbers instead of string concat.