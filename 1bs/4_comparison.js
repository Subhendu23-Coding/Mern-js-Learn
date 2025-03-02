/***********************************Number Comparisons:*********************** */
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// 2 >= 1: Yaha 2 greater ya equal hai 1 se, isliye true.
// 2 < 1: Yaha 2 less than 1 nahi hai, isliye false.
// 2 == 1: Yaha 2, 1 ke equal nahi hai, isliye false.
// 2 != 1: 2, 1 se different hai, isliye true.

/*****************************String Comparisons:**************************************** */

console.log("2" > 1);  // true
console.log("02" > 1); // true


// "2" > 1: "2" ko number 2 me convert kar ke compare kiya jaata hai, aur 2, 1 se bada hai, toh true.
// "02" > 1: "02" ko 2 me convert kiya jaata hai (leading zero ko ignore kiya jata hai), toh yeh bhi true hai.

/******************************* Comparisons with null*********************************** */

console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0);  // => true

// null > 0: null ko 0 ke barabar nahi samjha jaata, toh false.
// null == 0: null aur 0 ko equal nahi maana jaata, toh false.
// null >= 0: null ko 0 ke barabar samjha jaata hai, toh true.

/***********************************Comparisons with undefined************************************ */

console.log(undefined); // undefined
console.log(undefined == 0); // => false
console.log(undefined > 0); // => false
console.log(undefined < 0); // => false

// undefined == 0: undefined ko 0 ke equal nahi maana jaata, toh false.
// undefined > 0 aur undefined < 0: Jab bhi aap undefined ko kisi number ke saath compare karte hain, toh false hi return hota hai.

/*********************Strict Equality Comparison (===):************************************************** */

console.log("2" === 2); // => false //"2" === 2: Yaha ek taraf string "2" hai aur doosri taraf number 2 hai. Type alag hone ki wajah se comparison false hai.

