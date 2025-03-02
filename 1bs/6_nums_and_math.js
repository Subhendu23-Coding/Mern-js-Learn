/************************Working with Numbers****************** */

const score = 800;
console.log(score); // 800
const balance = new Number(200);
console.log(balance); // [Number 200]

// score ek primitive number hai. Jab hum console.log(score) karte hain, to output hota hai: 800.
// balance ek Number object hai, jo new Number() se banaya gaya hai. Jab hum console.log(balance) karte hain, to ye output karta hai: [Number 200]. Number object ek reference type hota hai, jo primitive number se alag hota hai.


// 1. `toString()` method
console.log(balance.toString());  // "200"

// 2. `toString().length` (String length)
console.log(balance.toString().length);  // 3

// 3. `toFixed(1)` method
console.log(balance.toFixed(1));  // "200.0"

// 4. `toFixed(2)` method
console.log(balance.toFixed(2));  // "200.00"


// toString() method se Number object ko string mein convert kiya jata hai. 200 ko "200" string mein convert kiya gaya.
// toString().length se aap us string ki length nikal sakte hain. "200" ki length 3 hai.
// toFixed(1) method se decimal places ko control kiya jata hai. Yahan 1 decimal place dikhaya gaya hai: "200.0".
// toFixed(2) se 2 decimal places show kiye ja rahe hain: "200.00".


/*********************************Number Precision and Formatting************************** */

const otherNumber = 234.9876; 

// 1. `toPrecision(4)` method
console.log(otherNumber.toPrecision(4));  // "234.9"

// 2. `toLocaleString('en-IN')` method
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // "1,000000"

// 3. `Number.MAX_VALUE`
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308


// toPrecision(4) se number ko significant digits tak round kiya jata hai. Yahan 4 digits tak round kiya gaya: "234.9".
// toLocaleString('en-IN') method se number ko Indian numbering system me convert kiya gaya hai: "1,0000000".
// Number.MAX_VALUE se sabse bada possible number milta hai jo JavaScript mein represent kiya ja sakta hai. Output hoga: 1.7976931348623157e+308.


/*********************** Math Methods************************************* */

console.log(Math);  // Math object
console.log(Math.abs(-33));  // 33
console.log(Math.round(5.8));  // 6
console.log(Math.ceil(5.5));  // 6
console.log(Math.floor(5.9));  // 5
console.log(Math.min(5, 4, 7, 8));  // 4
console.log(Math.max(5, 6, 8, 9));  // 9
console.log(Math.sqrt(38));  // 6.164414002968976
console.log(Math.random());  // Random number between 0 and 1
console.log(Math.random() * 10);  // Random number between 0 and 10
console.log((Math.random() * 10) + 1);  // Random number between 1 and 11
console.log(Math.random() * ((max - min) + 1));  // Random number between 0 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * ((max - min) + 1) + min));  // Random integer between 10 and 20



// Math.abs(-33) se absolute value milti hai, yani negative number ko positive me convert kar diya jata hai: 33.
// Math.round(5.8) se number ko round kiya jata hai, yahan 6 milta hai, kyunki 5.8 ko round karke 6 ki taraf kiya gaya.
// Math.ceil(5.5) se round up kiya jata hai, yahan 6 milega.
// Math.floor(5.9) se round down kiya jata hai, yahan 5 milega.
// Math.min(5, 4, 7, 8) se sabse chhota number find hota hai, yahan 4 hai.
// Math.max(5, 6, 8, 9) se sabse bada number find hota hai, yahan 9 hai.
// Math.sqrt(38) se square root nikaalna hota hai, yahan 6.164414002968976 milega.
// Math.random() se random number between 0 and 1 milega, jaise 0.57842.
// Math.random() * 10 se random number between 0 and 10 milega, yeh ek floating point number hoga.
// (Math.random() * 10) + 1 se random number 1 aur 11 ke beech milega.
// Math.random() * ((max - min) + 1) se random number 0 se max-min tak milega.
// Math.floor(Math.random() * ((max - min) + 1) + min) se random integer milega min aur max ke