// var c = 300;
let a = 300; // => global scope

if(true){
    let a = 10; // => block scop
    const b = 20;
    console.log("Inner: ",a); // block scope
}

// for (let i = 0; i < array.length; i++){
// const element = array[i];
//}

console.log(a); // global scope
// console.log(b);
//console.log(c);

function one(){
    const username = "Subhendu";
    function two(){
        const website = "youtube";
        console.log(username);
        function three(){
            console.log(website);
        }
        three();
    }
    //console.log(website);
    two();
}

//one();

if(true){
    const username = "Subhendu";
    if(username === "Subhendu"){
        const website = "linkedIn";
        console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);

/*******************************Interesting********************** */
// addOne(5);

console.log(addOne(5)); // => expcted output:6
function addOne(num){
    return num + 1;

}

// Hoisting Example
// addTwo(5);

const addTwo = function(num){  // Expression sometimes, which is also a function
    return num + 2;
}
// addTwo(5);
console.log(addTwo(5));   // Expected output: 7