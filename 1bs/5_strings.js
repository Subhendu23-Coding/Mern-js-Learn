/*******************************String Interpolation Issue****************************** */
const name = "Subho";
const repoCount = 10;
console.log($name + repoCount + "Value");  // "Subho10Value"
console.log('Hello my name is ${name} amd my repo count is ${repoCount}');

//const gemName = new String ('subho');
// const gemName = new String ('#');


/********************************* String Object with new String()****************************/

const gemName = new String('subho');

console.log(gemName);           // [String: 'subho'] (এটি একটি অবজেক্ট)
console.log(typeof gemName);    // "object" (এটি স্ট্রিং টাইপের অবজেক্ট)
console.log(gemName == 'subho'); // false (যেহেতু এটি একটি অবজেক্ট, তাই তুলনা করার সময় এটি false দিবে)
console.log(gemName.valueOf()); // "subho" (এটি স্ট্রিং অ্যাক্সেস করতে valueOf() মেথড ব্যবহার করতে হবে)


// gemName ek String object hai, isliye typeof gemName output karega "object".
// gemName == 'subho' comparison false return karega, kyunki gemName ek object hai, aur JavaScript me objects ko primitive types se directly compare nahi kiya jaa sakta.
// valueOf() method se hum String value ko access kar sakte hain, jisse "subho" milega.


/**********************************Accessing Characters in a String****************************** */
// String Character Access: Aap string ke characters ko indexing se access kar sakte ho. Jaise, gameName[0] se 'S' milega.
//Out-of-bounds Access: Agar aap kisi invalid index (jaise gameName[5]) ko access karte ho, toh undefined milega, kyunki string ke andar utni characters nahi hain.

const gameName = "Subho";

console.log(gameName[0]); // 'S'
console.log(gameName[1]); // 'u'
console.log(gameName[2]); // 'b'
console.log(gameName[3]); // 'h'
console.log(gameName[4]); // 'o'
console.log(gameName[5]); // undefined (যেহেতু `gameName` এর ইনডেক্স 5 এ কোনো চরিত্র নেই)

/****************************************String Prototype and Properties********************************** */
// __proto__ aapko string ke prototype ko dikhata hai.
// length se string ka length yaani number of characters ko find kiya jaa sakta hai.
// toUpperCase() string ko uppercase me convert kar deta hai.
// charAt(4) se index 4 ka character milta hai.
// indexOf('h') first occurrence of "h" ko find karta hai aur return karta hai

console.log(gameName.__proto);           // Prototype dikhata hai
console.log(gameName.length);            // Length of the string
console.log(gameName.toUpperCase());    // Converts string to uppercase
console.log(gameName.charAt(4));         // Character at index 4
console.log(gameName.indexOf('h'));     // First occurrence of 'h' in the string



/*********************************Finding Multiple Occurrences of 'h'****************************** */

let index = -1;
while ((index = gameName.indexOf('h', index + 1)) !== -1) {
  console.log(`Found 'h' at index: ${index}`);
}

// Is loop me hum indexOf() ko use kar rahe hain "h" ke multiple occurrences ko find karne ke liye.
// Jab tak "h" nahi milta, loop chalti rahegi aur har occurrence ke index ko print karegi.


/******************************************Substring and Slice Methods************************************** */

// substring(startIndex, endIndex): Yeh method string ke ek specific range ko extract karta hai. Example: gameName.substring(0, 4) will give "Subh".
// slice(startIndex, endIndex): Yeh method bhi similar kaam karta hai, lekin negative indices bhi accept karta hai. Agar invalid range ho (jaise slice(-13, 2)), toh empty string return hoti hai.

const newString = gameName.substring(0, 4);  // স্ট্রিংয়ের 0 থেকে 4 ইনডেক্স পর্যন্ত অংশ কেটে নেয়
console.log(newString); // "Subh"

const anotherString = gameName.slice(-13, 2);  // স্ট্রিংয়ের শেষ থেকে 13তম ইনডেক্স থেকে 2 ইনডেক্স পর্যন্ত কাটবে
console.log(anotherString); // ""

// substring(0, 4) se hum 0 se 4 index tak ki string nikaal rahe hain. Output: "Subh".
// slice(-13, 2) mein negative index use karke, hum string ko last se count kar rahe hain. Lekin yeh method empty string return karega.

/********************************************Trim and Other Useful Methods*************************************** */

// trim(): Yeh method string ke starting aur ending spaces ko remove kar deta hai. Example: " Subho ".trim() gives "Subho".
// replace(): Yeh method string ke kisi part ko replace karne ke liye use hota hai. Jaise: url.replace('%20', '-') will replace %20 with -.
// includes(): Yeh method check karta hai ki string ke andar diya gaya substring hai ya nahi.
// split(): Yeh method string ko diya gaya separator ke hisaab se split karne ke liye use hota hai. Jaise gameName.split('-') will return ["Subho"].

const newStringOne = "  Subho  "; // অতিরিক্ত স্পেস সহ স্ট্রিং
console.log(newStringOne);  // "  Subho  "
console.log(newStringOne.trim());  // "Subho" (অতিরিক্ত স্পেস মুছে ফেলবে)

// const url = "www.abc.com";

// 1. `replace()` মেথড
console.log(url.replace('%20', '-'));  // '%20' স্ট্রিংটিকে '-' দিয়ে প্রতিস্থাপন করবে

// 2. `includes()` মেথড
console.log(url.includes('index.js'));  // স্ট্রিংয়ে '#' আছে কিনা চেক করবে

// 3. `split()` মেথড
console.log(gameName.split('-'));  // '-' দিয়ে স্ট্রিংটিকে বিভক্ত করবে


