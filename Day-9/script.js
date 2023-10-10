// console.log("wokring")

// function addWithTax(amt1, amt2) {

//     if (amt1 <= 10) {
//         amt1 = amt1 + 1;
//     }
//     else {
//         amt1 = amt1 + 2;
//         // tax2 = 2;
//     }


//     if (amt2 <= 10) {
//         amt2 = amt2 + 1;
//     }
//     else {
//         amt2 = amt2 + 2;
//     }

//     const total = amt1 + amt2;

//     return total;

// }

// const result = addWithTax(12, 20);
// console.log(result);
// // console.log(result);

// function addWithTax(amt1, amt2) {

//     // ternary operator => condition ? true : false ;
//     const value1 = amt1 <= 10 ? amt1 + 1 : amt1 + 2;
//     const value2 = amt2 <= 10 ? amt2 + 1: amt2 + 2;

//     return value1 + value2;
// }

// const result = addWithTax(15, 19);
// console.log(result);


// for in loop 
// Syntax : 

// for (variable in Object{
//     //code 
// })


// const person = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 20
// }

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// >= 10 = 1; 11 to 20 => 2; >20 = 3 

// function addWithSurcharge(amt1, amt2) {
//     const surchargeRate = {
//         10: 1,
//         20: 2,
//         30: 3,

//     }

//     // arrow function
//     const calculateSurcharge = (amount) => {
//         for (const limit in surchargeRate) {
//             if (amount <= limit) {
//                 return surchargeRate[limit]
//             }
//             return 4;
//         }
//     }

//     const surcharge1 = calculateSurcharge(amt1);
//     const surcharge2 = calculateSurcharge(amt2);
//     // const surcharge2 = calculateSurcharge(amt2);
//     // const surcharge2 = calculateSurcharge(amt2);
//     // const surcharge3 = calculateSurcharge(amt3);


//     const total = amt1 + amt2  + surcharge1 + surcharge2;

//     return total;
// }

// const res = addWithSurcharge(10, 30);
// console.log(res);

// Most optimal way of doing



//for of loop


// const array = [2, 4, 5, 6, 7, 8];

// for (const element of array) {
//     console.log(array[element])
// }

// map and set 


// const string1 = 'javascripttutorial'

// for(const element of string1){
//     console.log(string1[element]);
// }


// xyz()
// console.log(apple);
// console.log(apple2);
// var apple = 10;

// function apple2 () {
//     console.log("Hello Javascript");
// }






