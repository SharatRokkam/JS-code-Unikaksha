// console.log("working")


// let var1 = "Hello"
// let var2 = "World"


// console.log(`${var1} ${var2}`)
// console.log(var1 + var2) //less used nowadays


// question was to make changes into the string from "Sharat Rokkam" to "Sharat R "


// let myName = "Sharat Rokkam"


//Difference 
// console.log(myName.slice(0, 8))
// console.log(myName.substring(0, 8))



// Arrow Function - ES6
// const truncate = (str1, WordCount) => {


//split splits the string and converts it to string
// const words = str1.split(" ").slice(0, WordCount).join(' ')
//     const words = str1.split(" ");
//     const truncatedWords = words.slice(0, WordCount)
//     const truncatedStr = truncatedWords.join(' ')

//     return truncatedStr;

// }

// Development -> arrow ES syntax 


// Function expression 
// function truncate(){

// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));



// const reverseString = (someString) => {

//     let reversedStr = '';
//     for (let i = someString.length - 1; i >= 0; i--) {
//         reversedStr += someString[i];
//     }

//     return reversedStr;
// }


// console.log(reverseString("This is a String "))

// People used var keyword till 2015, then came your other keywords to define a variable let and const


// Blocked scope variable 
// {
//     let myName = "Sharat"

// }

// console.log(myName)
// var is global scoped variable 
// cannot be changed 


const myName = "John Doe";

console.log(myName)