// hoisting is a phenomena where all the variable and function declaration move to the top of the program, hoisting works with var keyword not let and const 

// Most Important - hoisting


// apple2();
// console.log(apple2());
// --> invoked before defining it 
//access the variable before its intialization
// console.log(apple1)
// apple2();
// console.log(apple1)
// var apple1 = 10;

// even though apple2 is a function but its defined as arrow function so thats why apple2 will be treated as variable 

// created an arrow function and assigned it to a variable 
// var apple2 = () => {
//     console.log("Apple");
// }
// apple2();

// value()
// console.log(apple1);

// var apple1 = function(){
//     console.log('hello world');
// }
// let value = apple2()


// Strict Mode - needs to be defined at the top of the program.
// 2000-3000 - mistakes


xyz = 10
console.log(xyz)


// function test() {
//     b = 20;
// }

// test()

// function test(a, b, c) {
//     "use strict"
//     console.log(a + b + c);
// }

// test(10, 20, 30)

// This Keyword 
// The object that is executing the current function 

// Simple thumb rule :
// 1. Method - refer to that object 
// 2. function - refer to global (browser - window, node - global)


// Method vs Function 

// Function is a block of code that performs some set of operation, independent of any object 
// Method is a function which is associated with a object 


// const video = {
//     title: 'Javascript',
//     play() {
//         console.log(this);
//     }
// }
// video.stop = function () {
//     console.log(this)
// }

// video.stop()


// function video() {
//     console.log(this)
// }

// video()


// Constructor Function - when creating a construction function you need to put the first letter of the name of the function in captial letter, good practice or good naming convention

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }


// Array, object---> new keyword 

// const v = new Video('Javascript')

// this keyword reference to empty object 


// Types of Error 

// 1. Syntax Error - occurs when you write incorrect predefined syntax 

// const hello = () => {
// console.log("hello")
// } 

// 2. Reference error 
// occurs when the Reference of the variable or function is not present 
// console.log(value);

// 3. Type Error 
// let a = 10;
// let b = "error"

// console.log(a + b);


// Type error because you are adding number to string 