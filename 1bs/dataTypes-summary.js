// Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// String: Text ko represent karne ke liye use hota hai.
// Number: Numbers (integers aur floating-point numbers) ko represent karta hai.
// Boolean: True ya false value ko represent karta hai.
// null: Yeh ek special value hai, jo indicate karta hai ki koi value nahi hai (but it's actually of type object in JS!).
// undefined: Jab kisi variable ko value assign nahi ki jaati, to usko undefined maana jaata hai.
// Symbol: Yeh ek unique identifier create karta hai. Har symbol ka value unique hota hai, even if the description is the same.
// BigInt: Yeh bada number represent karne ke liye use hota hai jo normal Number type se zyada bada ho.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;  // typeof outsideTemp => object (yeh ek weird JavaScript behavior hai)
let userEmail; // undefined by default (agar variable ko value assign nahi ki gayi)
// let userEmail = undefined; (manually declared)

const id = Symbol('123');  // Symbol with a description
const anotherId = Symbol('123');  // Another Symbol with same description

// const bigNumber = 3456543576654356754n;

console.log(id === anotherId); // => false (Symbols are unique, even if descriptions are the same)
console.log(typeof id); // => "symbol"

/************************************** (Non-Primitive) Data Types:******************************* */
// Array: Ordered collection of values.
// Object: Collection of key-value pairs.
// Function: A block of code that performs a task when called.

const heros = ["ram", "sam", "madu"]; // Array
let myObj = {
    name: "Subho",
    age: 25,
}; // Object

const myFunction = function(){
    console.log(`Hello World!`);
}; // Function

// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3 (study material)


/************************************Stack vs Heap: *********************************/
// Stack: Primitive data types (like String, Number, Boolean, etc.) directly value store karte hain.
// Heap: Reference types (like Array, Object, Function) ka reference store hota hai, actual data nahi.


let myYoutubeName = "subhendumaajhi@gmail.com"; // Stack mein value store hoti hai
let anotherName = myYoutubeName; // "subhendumaajhi@gmail.com" ki copy ho gayi hai

anotherName = "majhi"; // new value assign kiya gaya

console.log(myYoutubeName); // "subhendumaajhi@gmail.com" (original value change nahi hui)
console.log(anotherName); // "majhi" (copy ho gayi thi, ab yeh new value ho gayi)

// Jab aap anotherName = myYoutubeName; likhte ho, to JavaScript mein yeh ek new copy banata hai. Isliye jab aap anotherName ko update karte ho, myYoutubeName ka value unchanged rahta hai.

/********************************************Reference Data Types in Heap:************************************** */
// Jab aap let userTwo = userOne; likhte ho, toh userTwo ko same reference milta hai jo userOne ke paas tha. Isliye jab aap userTwo ko update karte ho, toh userOne bhi update ho jaata hai, kyunki dono ek hi memory location ko point kar rahe hote hain

let userOne = {
    email: "newuser@google.com",
    upi: "nweuser@ybl"
};

let userTwo = userOne; // userTwo ko userOne ka reference mila

userTwo.email = "subhendumajhi@gmail.com"; // userTwo ka email change hota hai, jo userOne ko affect karega

console.log(userOne.email); // "subhendumajhi@gmail.com" (kyunki dono userOne aur userTwo ek hi reference ko point karte hain)
console.log(userTwo.email); // "subhendumajhi@gmail.com" (same reference, so same change)


