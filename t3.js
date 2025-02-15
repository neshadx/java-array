 /*
 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not. 
*/

let books = ["Python", "Clean Code", "Javascript"];
console.log(books.includes("Javascript"));

if (books.includes("Javascript")) {
    console.log("yes");
} else {
    console.log("No");
}