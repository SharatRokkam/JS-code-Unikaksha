// console.log('working ');

// Function - 3 ways 

// 1. Function declaration 
// Syntax :- 
// function funcName(){

// }

// funcName()


// 2. Function Expression 
// Syntax :- 

//acting as variable coz it is assigned to it
// var funcName = function functionName(){

// }

// funcName()

// 3. Arrow Function 
// const arrowFunc = () =>{

// }
// arrowFunc()


// Types of Function 
// 1. Normal function
// 2. anonymous function = unamed function
// 3. Callback function 
// 4. IIFE 
// 5. Recursive function
// 6. Constructor function 


// IIFE - Immediately invoked function expression

// It is a function that is defined and executed immediately after its creation, this function is often used to create a private scope of variables and to avoid polluting the global scope.

//private variables which you dont want to be exposed to other scope or global scope
// Syntax 
// (function(){
//     //code 
// })
// ();// invoked this function 


// Var - Global scope variable - defined inside the IIFE it wont be accessible outside of it...
// (function(){
//     var x = 10;
//     console.log(x);
// })();

// console.log(x); // x is not defined

// Global scope
// var globalVar = "I am global";


// iife 
// (function () {
//     // IIFE scope
//     var localVar = "I am local"
//     console.log(globalVar);
//     console.log(localVar);
// })();


// console.log(globalVar);
// console.log(localVar); //Reference error


// Call, Apply, Bind 
// These are just 3 ways of invoking or calling a function 
//When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking the first argument as an object 
// It will assume that the first argument which is coming while calling the function will be an object only


// creating an object for reference 
// let user1 = {
//     name: 'Ranjeet',
//     age: 23,
//     salary: 50000,
//     state: 'UP',
// }


// let user2 = {
//     name: 'Pubalan',
//     age: 25,
//     salary: 70000,
//     state: 'Kerala',
// }



// function displayUserInfo(a) {
//         console.log('Hello inside the function', a);
//         console.log(a.name + ' is ' + a.age + ' years old.');
//     }

//     // this invokation was without call apply bind 
// displayUserInfo(user1)


// function displayUserInfo(company, designation, employeeID) {
//     console.log('Hello inside the function', this);
//     console.log(this.name + ' is ' + this.age + ' years old.', company, designation, employeeID);
// }


// Call : incase of call each and every argument which is required to be passed to the function will be passed "individually"
// displayUserInfo.call(user1, "TCS", "Developer");

// Apply : Incase of each and every argument which is required to be passed to the fucntion will be passed inside an array.

// displayUserInfo.apply(user2, ["Amazon", "Analyst", 123343]);


// Bind : Incase of bind it will return you a new function, and this new function you can use anytime anywhere

// var newFunc = displayUserInfo.bind(user2);
// newFunc("Infosys", "Tester", 232232)



// Closures = It is a combination of inner function and lexical environment created by inner function 
// We are able to access this variable inside inner function because closures

// function outer() {
//     let a = 10;

//     function inner() {
//         console.log(a);
//     }

//     inner()
// }

// outer()

//Closure


// created a variable

// DisplayAge won't be able to access the variable defined outside of its lexical environment 
//Global scope
// Dukan 
// var age1 = 30;
// var age = 20;

// Defined an outer function
function outer() {
    //created a variable in lexical environment of displayAge()
    var age = 30;
    console.log("age :", age)
    function inner() {
        // var age = 20;
        console.log("inner function : ", age);
    }

    inner()
}

outer();