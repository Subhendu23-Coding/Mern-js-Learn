// 1. Data Type Checking with typeof 
//typeof operator se hum variable ka data type check karte hain. Yaha, score ek string hai, isliye output string hoga.

let score = "Subho";
// let score = "33abc";
// let score = undefined;
// let score = null;
// let score = true;

console.log(typeof score);  // string
console.log(typeof(score)); // string

/*************************2. Converting String to Number Using Number()*********************** */

// let score = "25"; //Agar hum "25" ko number me convert karte, toh output 25 hota.
let valueInNumber = Number(score); //Number() function ka use string ko number me convert karne ke liye hota hai. Agar string mein valid number nahi hai (jaise "Subho"), toh NaN (Not a Number) milega.
console.log(typeof valueInNumber);  // "number" 
console.log(valueInNumber);         // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

/****************************************3. Converting to Boolean Using Boolean()***************************** */
//Boolean() se hum kisi bhi value ko boolean (true ya false) me convert kar sakte hain. Agar string khali ho (""), toh wo false hoti hai. Agar string mein kuch bhi likha ho ("Subho"), toh wo true hota hai.

// let isLoggedIn = 0
// let isLoggedIn = 1
// let isLoggedIn = "Subho";
let isLoggedIn = ""; // খালি স্ট্রিং, যা false হবে
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // false

// 1 => true; 0 => false
// "" => false
// "Subho" => true

/*********************************4. Converting Number to String Using String()****************************** */

let someNumber = 42;    //
let stringNumber = String(someNumber);// String() se hum kisi number ko string mein convert kar sakte hain. Yaha pe 42 ko "42" me convert kar diya gaya hai.
console.log(stringNumber);         // "42"
console.log(typeof stringNumber);  // "string"


/**********************5. Basic Arithmetic Operations:**************************************** */

let value = 5;
let negValue = -value;
console.log(negValue); // -5  //Unary negation (-) se hum kisi value ka negative bana lete hain. Jaise 5 ko -5 bana diya gaya.


console.log(2 + 2); // 4  + (addition)
console.log(2 - 2); // 0  - (subtraction)
console.log(2 * 2); // 4  * (multiplication)
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8   (exponentiation, jaise 2 ** 3 ka matlab 2^3 hai, jo 8 hota hai)
console.log(2 / 3); // 0.6666666666666666 / (division, 2 / 3 ka result decimal form me hota hai)
console.log(2 % 3); // 2  % (modulus, jo remainder deta hai, jaise 2 % 3 = 2)


// let str1 = "hello";
// let str2 = " Subho";
// let str3 = str1 + str2;
// console.log(str3);


/************************6. String Concatenation:****************************************** */

//Jab hum string aur number ko + operator se jodte hain, toh JavaScript number ko string me convert kar leta hai aur unhe concatenate kar deta hai.

console.log("1" + 2);  // "1" + 2 = "12" // String first: "1" + 2 ka result "12" hoga.
console.log(1 + "2");  // "12"  //Number first: 1 + "2" ka result "12" hoga, because first addition is a number operation and second part will treat it as string concatenation.
console.log("1" + 2 + 2); // "1" + 2 = "12", then "12" + 2 = "122"
console.log(1 + 2 + "2"); // 1 + 2 = 3, then 3 + "2" = "32"

// console.log((3 + 4) * 5 % 3);

// num1 = num2 = num3 = 2 + 2;  // very bad practice
// console.log(+true);  // very bad practice
// console.log(+""); => 0;
// console.log(true);

// let num1, num2, num3;

/*******************************************Increment Operators:******************************** */
// Post-increment (gameCounter++) mein pehle value use hoti hai, fir increment hota hai.
// Pre-increment (++gameCounter) mein pehle value increment hoti hai, fir use hoti hai.
// Yaha pe pehle gameCounter++ se value 11 hoti hai, aur fir ++gameCounter se 12 ho jata hai.

let gameCounter = 10;
gameCounter++;  // post-increment: gameCounter becomes 11, but after this line.
++gameCounter;  // pre-increment: gameCounter becomes 12.
console.log(gameCounter); // 12





