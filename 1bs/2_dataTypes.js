"use strict"; // strict mode mein code chalega, jisme errors jaldi show honge
            // treat all js code a newer version
            
console.log(5 + 5); // Output: 10, ye readable code hai jo easily samajh mein aata hai
console.log("Subho"); // Output: "Subho", ye ek string hai

let name = "Subho";  // name ek string variable hai
let age = "26";      // age ek string variable hai, lekin ideally yeh number hona chahiye
console.log(typeof 26); // Output: "number", 26 ek number type ka hai

let isLoggedIn = false;  // isLoggedIn ek boolean type ka variable hai
let state = "w.w";       // state ek string type ka variable hai

// number => 2 to the power 53
// bigint 
// string => " "
// boolean => true/false
// null => stanalone value
// undefined => value is not assigned yet
// symbol => unique

/***********Object*********** */

console.log(typeof "Subho");      // Output: string
console.log(typeof undefined);    // Output: undefined
console.log(typeof null);         // Output: object (JavaScript ka ek bug)
console.log(typeof "w.w");        // Output: string

// Explanation of Data Types

/* Boolean: True ya false ki values hoti hain.
Integer: Whole numbers (positive or negative) hote hain, jaise 10, -5.
String: Text data ko represent karta hai, jaise "hello", "Subho".
Array: Ek collection of items, jaise [1, 2, 3].
Float: Decimal numbers, jaise 5.5, 10.2.
Char: Single character ko store karne ke liye use hota hai (though, JavaScript mein string use karna preferred hai).*/