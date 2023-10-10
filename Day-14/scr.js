// console.log("working");

// Callback = It is a kind which is passed as an argument to another function, to perform async operation

// function printA(callback) {
//     console.log("A");
//     callback()

// }

// function printE() {
//     console.log("E");

// }


// printA(printE)


// Web Storage API 

// setInterval(() => {
//     console.log('Hello everyone');
// }, 5000) // time in milliseconds


// clearInterval , clearTimeout

// function printVowels(name, time){
//     setTimeout(() =>{
//         console.log(name);
//     }, time)
// }

// function printAllUsers(){
//     printVowels("A", 1000)
//     printVowels("E", 5000)
//     printVowels("I", 2000)
//     printVowels("O", 10000)
//     printVowels("U", 2000)

// }

// printAllUsers()


//line 38 execution should not start until unless line 37 is being executed 

// AEIOU serialy 

// Callback Hell - bugs , error after unmanageable code 

// function printVowels() {
//     setTimeout(() => {
//         console.log("A")
//         setTimeout(() => {
//             console.log("E")
//             setTimeout(() => {
//                 console.log("I");
//                 setTimeout(() => {
//                     console.log("O");
//                     setTimeout(() => {
//                         console.log("U");
//                     }, 2000)
//                 }, 1000)
//             }, 6000)
//         }, 3000)
//     }, 2000)
// }

// printVowels()


// Promises = Its heaven for callback hell 
// Promises is an object function which takes 2 parameters, first is resolve and another is reject

//RESOLVE : - if n completion of function you have got desired output then that means your promise has been resolved and its output you can handle in ".then" function

//REJECT : if promise gets failed due to any scenariom then its error can be captured in '.catch"
// function 

// Hope for the best(.then/resolve) and be prepared for the worst (.catch/reject )


// function printAlpha(num, name, time) {
//     return new Promise((resolve, reject) => {
//         if (num == 2) {
//             setTimeout(() => {
//                 console.log(name);
//                 resolve("Promise has been resolved")
//             }, time);
//         } else {
//             console.log("error");
//             reject("Promise has been rejected")
//         }
//     })
// }

// function printVowels() {

//     //invoked this printAlpha
//     printAlpha(3, "student", 2000)
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
//         .finally(() => console.log("DONE"))
// }

// printVowels()



// let promise = new Promise(function (resolve, reject) {

//     const x = "pakka promise"
//     const y = "pakka promise"

//     if (x === y) {
//         resolve();
//     }
//     else {
//         reject()
//     }
// });

// promise.then(() => {
//     console.log("Hurray! promise successful");
// }).catch(() => {
//     console.log("Oops! there is an error");
// })



// AEIOU 

function printAlpha(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name);
            resolve('Promise is resolved')
        }, time);
    })
}

//.then - over again - Promises chaining 
// function printVowels() {
//     printAlpha("A", 2000)
//         .then(() => printAlpha("E", 5000))
//         .then(() => printAlpha("I", 2000))
//         .then(() => printAlpha("O", 6000))
//         .then(() => printAlpha("U", 3000))
//         .catch((error) => console.log(error));

// }

// where ever async will go await follows it 
// It will  provide you the most optimal solution 
// async function printVowels() {
//     await printAlpha("A", 2000)
//     await printAlpha("E", 3000)
//     await printAlpha("I", 5000)
//     await printAlpha("O", 1000)
//     await printAlpha("U", 8000)
// }

// printVowels()

