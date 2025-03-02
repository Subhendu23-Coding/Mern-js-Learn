/****************************Date***********************/

let myDate = new Date();
console.log();
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());


// new Date(): Ye current date aur time ko store karta hai.
// toString(): Full date aur time ko ek string mein dikhata hai.
// toUTCString(): Date ko UTC format mein convert karta hai.
// toISOString(): ISO 8601 format mein date ko show karta hai.
// toDateString(): Sirf date ko string format mein dikhata hai.
// toLocaleDateString(): Date ko local format mein show karta hai (aapke locale ke hisaab se).
// toLocaleString(): Date aur time ko local format mein dikhata hai.
// toJSON(): Date ko JSON format mein convert karta hai.
// toTimeString(): Sirf time ko dikhata hai.
// toLocaleTimeString(): Time ko local format mein dikhata hai.

/****************************************Date************************************ */

console.log(myDate.getTimezoneOffset());

//getTimezoneOffset(): Aapke current timezone ka offset minutes mein return karega (jaise India ka offset +330 minutes hai)
/***************************************************************************************** */

console.log(typeof myDate); // Date is an object in JavaScript

//typeof: Isse aap type check kar sakte hain. myDate ka type "object" hoga kyunki Date ek object type ka data structure hai.

/************************************************************************************************************** */

let myBirthDate = new Date("1997-11-07");

//new Date("1997-11-07") se ek specific date, 7th November 1997, create ki gayi hai

/********************************************************************************************************* */

console.log(myBirthDate.toDateString());   // Date ko string mein display karta hai
console.log(myBirthDate.toLocaleString()); // Date aur time ko local format mein display karta hai
console.log(myBirthDate.toLocaleTimeString()); // Sirf time ko local format mein display karta hai


// toDateString(): Birth date ko short string format mein show karta hai.
// toLocaleString(): Local date aur time format mein display karega.
// toLocaleTimeString(): Local time format mein time dikhata hai


/********************************************************************** */
let myTimeStampInMilliSecond = Date.now(); // Current timestamp in milliseconds
let diff = (myTimeStampInMilliSecond - (myBirthDate.getTime())); // Difference between current time and birthdate in milliseconds

let ageInDays = ((((diff / 1000) / 60) / 60) / 24); // Converting milliseconds to days
let myAge = Math.floor(ageInDays / 365.25); // Converting days to years

let remainingDays = ageInDays - (myAge * 365.25); // Remaining days after full years
let ageMonths = Math.floor(Math.floor(remainingDays / 30.44)); // Converting remaining days to months

remainingDays -= ageMonths * 30.44 - 1; // Adjusting days
let ageDays = Math.floor(remainingDays); // Final remaining days

/*************************************************************************************** */

console.log(`My age is ${myAge} Years ${ageMonths} months and ${ageDays} days`);


/********************************************************************* */

let newDate = new Date();
console.log(newDate.getMonth());  // Returns month index (0 for January, 11 for December)
console.log(newDate.getDay());    // Returns day index (0 for Sunday, 6 for Saturday)

/*********************************************************************************************** */
let now = newDate.toLocaleString('default', {
    weekday: "long",
});
console.log(now); // Prints the current weekday name (e.g., "Monday")


