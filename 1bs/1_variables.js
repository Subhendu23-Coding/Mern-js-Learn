// 01 Variable Types
// const (Constant): Used to declare a variable that will not change once assigned. It is block-scoped.
// const এমন একটি মান ঘোষণার জন্য ব্যবহৃত হয় যা একবার নির্ধারণ করার পর পরিবর্তিত হবে না। এটি ব্লক-স্কোপড।

/*************************************************************************************/
// let (Variable with Block Scope): Used for variables that might change. It has block scope, which means it is confined to the block where it is defined.
// let এমন মানের জন্য ব্যবহৃত হয় যেগুলি পরিবর্তিত হতে পারে। এটি ব্লক-স্কোপড হয়। accountEmail, accountCity, accountState

/*************************************************************************************/
// var (Function Scope - Not Recommended): var is function-scoped and should be avoided because of issues with hoisting and scope leakage. It can cause unexpected behavior.
// var ফাংশন-স্কোপড হয় এবং এটি ব্যবহার করা উচিত নয় কারণ এটি হোইস্টিং এবং অপ্রত্যাশিত আচরণ সৃষ্টি করতে পারে।

const accountId = "838888";  // const ka use un variables ke liye hota hai jo kabhi change nahi hote. Is case mein, accountId ko const se declare kiya gaya hai, iska matlab hai ki iski value ko aap badal nahi sakte. Yani, agar aap accountId = "123456"; likhenge toh error aayega. Iska value hamesha "838888" hi rahega.
let accountEmail = "subho@.com";  // let ka use un variables ke liye hota hai jo change ho sakte hain. Jaise ki accountEmail, jo aap baad mein update kar sakte hain. Jaise:
let accountPassword = "123pcs";  // accountPassword bhi update ho sakta hai. 

// var accountPassword = "123pcs"; // var ka use purane JavaScript versions mein hota tha, lekin var ko avoid karna chahiye kyunki yeh function-scoped hota hai. Matlab agar aap var ka use karte hain, toh wo poore function ya block ke andar accessible ho sakta hai. Yeh predictable behavior nahi deta. Isliye modern JavaScript mein let aur const ka use behtar hai.

let accountCity = "Kolkata";  // accountCity ko let se declare kiya gaya hai, jo baad mein change ho sakta hai.
let accountState = "West Bengal";  // accountState ko bhi let se declare kiya gaya hai.


// let variables ko modify karna allowed hai
// accountId ko change nahi kar sakte, kyunki woh const se declare kiya gaya hai
// accountId = 2;  // (not allowed)  // Error! AccountId const se declared hai, isliye change nahi kar sakte.

// accountEmail = "google@.com";   // Ye allowed hai, kyunki accountEmail let se declared hai
// accountPassword = "pcs123";     // Ye bhi allowed hai
// accountCity = "Bengaluru";      // Ye bhi allowed hai, lekin "bad use" ka matlab yeh hai ki agar city constant honi chahiye toh const ka use karein
// accountState = "K.T";           // Ye bhi allowed hai

console.log(accountId);  // Account ID ki value print karega, jo "838888" hai

// Table format mein print karega sabhi variables ko ek sath
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  