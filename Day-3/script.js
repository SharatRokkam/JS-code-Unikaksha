console.log("working")

// Datatype:

// 1. Number:
// let a = 10;
// let value = 445.32;

// //2. String
// let car = "Mercedez"

// // Javascript takes any number as string when its added with it 
// console.log(a + car);

// console.log(a + value + car);

// 10 + 445.32 + Mercedez
// both were numbers for js until it reach the string 
// 455.32Mercedez

// 3. Boolean 
// let isLoggedIn = true;
// const isVariable = false;

// let a = 10;
// let b = 10;

// let result = (a===b) ? true : false; 
// console.log(result);

// 4. Null 

// When you dont want to assign any value to a variable in the program then you can give it null.. 
// let value = null;


// // 5. Undefined 
// let school;
// console.log(school);

// 6. after ES6 version this data type got introduced...
// Symbol 

// let value1 = Symbol("hello");
// let value2 = Symbol("hello");

// Because Symbol is always unique and it cannot changed(immutable)

//== it just checks the value
// it checks the value as well as datatype 
// if(value1 === value2){
//     console.log(true);
// }

// else{
//     console.log(false)
// }

// BigInt (ES7)
// let bigValue = BigInt(10929394940034394903939489303838494033893202093838930984849403838329329383883933N);


// let value1 = prompt("Enter first number")
// let value2 = prompt("enter second number")

// const result = value1 * value2;
// const result2 = value1 / value2;

// alert(result)
// alert(result2)

// Non - Primitive Data Type 
// Array :

const array1 = []; //empty array


// Index Start with Zero 
// const a = [10, 30, 33, "school", "college"]; //square brackets

// console.log(a[3]);


// Objects 
// data type to store data in key : value pair 
//curly brackets 
let obj1 = {
    name: "Mr.Bean",
    age: 43,
    height: 6.1
}


// obj1.name = "John"
// obj1.age = 55

// object with new value 
// console.log(obj1)



// Function 

// Function is a block of code to perform some operations or any particular task 
// function name, parameter , return, arguments
// function needs to be called 

// function multiply(a, b){
//     return a-b;
// } v

// const result = multiply(15, 20 )
// document.getElementById("test").innerHTML = result;

var a = 10;
var b = 20;
console.log(a+b);

