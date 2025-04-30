## Javascript Questions
1. Line 12 will print "3" since i was declared as var.

2. Line 13 will print "150" since discountedPrice is function-scoped.

3. Line 14 will print "150" since finalPrice is function-scoped.

4. It will return [50, 100, 150]. The method iterated over [100,200,300], halves each price, and rounds it to the nearest int to avoid any floating point issues, then pushes it into the discounted array, which is returned.

5. Line 13 will throw an error since result was declared with let and is not function-scoped.

6. Line 13 will throw an error since discountedPrice is not function-scoped.

7. Line 14 logs "150" to the console since finalPrice is defined throughout the function.

8. Again, the function returns [50,100,150] since discountedPrices is defined throughout the function; even though it takes values that are defined only inside of the for loop.

9. Line 11 will throw an error since i does not exist outside of the for block.

10. Line 12 logs "3" as length is function-scoped, and none of the other lines throw an error.

11. The function will return [50, 100, 150] because inside the loop, nothing throws an error, so the loop logic proceeds as usual. Each price is discounted by 50% and returned in the same order as an array.

## Data Types
12. 
A. student.name

B. student['Grad Year']

C. student.greeting()

D. student['Favorite Teacher'].name

E. student.courseLoad[0]

## Basic Operators & Type Conversion 
13. A. Outputs "32" as a string because '+' with a string operand is done as concatenation

B. Outputs 1 because '-' is always a numeric subtraction, so the strings are casted into integers

C. Outputs 3 as an int since null is casted into 0 as an int which is added to 3.

D. Outputs '3null' since null is casted into the string "null" which is concatenated iwth the string "3".

E. Outputs 4 as an int since 'true' boolean is associated with the int 1 which is added to 3.

F. Outputs 0 since false and null are both casted to integers and associated with zero.

G. Outputs "3undefined" as a string since undefined is converted to str.

H. Outputs "NaN" since "undefined" cannot be casted to an int, so becomes NaN which is subtracted from 3 = NaN.

14. A. Outputs true since 2 is converted to a number.

B. Outputs false since both operands are passsed as string, so 2 is actually higher in lexicographic order.

C. Outputs true since the string "2" is casted to 2 as an integer.

D. Outputs False since they are of different types.

E. Outputs false since true is casted to 1 as an int and 2!=1.

F. Boolean(2) is true so both sides are boolean and true. Outputs true.

15. '==' checks for loose equality; casts both operands to a common type before comparing, so class difference does not matter.

'===' checks for both type and value equality; no operand is casted.

16. 


