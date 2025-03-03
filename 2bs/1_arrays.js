/************ * Array Initialization****************/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["ram", "sam"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]);

// myArr ek array hai jisme numbers hain: [0, 1, 2, 3, 4, 5].
// myHeors mein do strings hain: "ram" aur "sam".
// myArr2 ek array hai jo new Array() constructor se bana hai. Ismein values hain: [1, 2, 3, 4].

/*****************************Array Methods: Push, Pop, Unshift, Shift*********************** */

// myArr.push(6);

// myArr.push(7);

// myArr.pop;

// myArr.unshift(9);

// myArr.shift();


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(newArr)
// console.log(typeof newArr);
// console.log(myArr);

/*****************************************Slice and Splice************************************* */
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.slice(1, 3);
console.log("C", myArr);
console.log(myn2);

