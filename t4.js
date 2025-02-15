/*
4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/

let age = 27;
let friends = ["Alex", "Neshad", "Smeer"];

console.log(Array.isArray(age));
console.log(Array.isArray(friends));

console.log(Array.isArray(age) ? "age is an array." : "age is NOT an array.");
console.log(Array.isArray(friends) ? "friends is an array." : "friends is NOT an array.");
