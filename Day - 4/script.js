// console.log('working')


//CamelCase Convention 
// const userName = prompt("enter your name");
// const userCity = prompt("enter your city");
// const userPin = Number(prompt("enter your pin"));
// const userEmail = prompt("enter your email");


// `
// ${userName}
// `
// const mailingAddress = `
// Name : ${userName} 
// City : ${userCity} 
// Pin : ${userPin}
// Email : ${userEmail}
// `; 
// //template literal
// //Template literal syntax 
// alert("complete mailing address: \n " + mailingAddress)

// cocatenation => simple terms merge

// \n - to get things on a new line 



// Arrays : 2 ways of defining 
// 1. declaration of array 
// 2. array using JS new keyword. 

// 1. Array using array literal 
// let arrayName = [value1, value2, ...];
// let fruits = ["Banana", "Apple", "Mango"]  // of different datatypes

// 2. new Keyword 
// let arr1 = new Array(10, "20", 76, "Chandan");
// console.log(arrayName)

// arr1[0] = 10;
// arr1[1] = "Javascript"
// arr1[2] = "HTML"


// // Methods 
// console.log(arr1.length)

// console.log(typeof arr1);

// Array or Object 
// Javascript array uses indexes as Number while object uses indexes are names 

//Efficient and readable also will provide the speed to write the code..
// Go for 1st array literal 


// Methods in Array 
// 1. Length 
// 2. toString

// const subject = ["Hindi", "Maths", "Science", "Social Science"];

//Array is a object

// console.log(subject.toString());
// console.log(subject);


// let arr1 = new Array(10, "20", 76);

// arr1[3] = "Gujarati"
// arr1[4] = "Marathi"


//Loop through  
// for(let i=0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }



// 3. Push - add the element in the last index of an array
// let city = ["Mumbai", "Gurgaon", "Bangluru"]

// city.push('Lucknow')
// console.log(city);

// 4. Pop - remove the element form the last index 

// let city1 = ["Mumbai", "Gurgaon", "Bangluru"]
// city1.pop();
// console.log(city1)

// 5. Shift - removes the first element 
// let language = ['Hindi', 'Urdu', 'Marathi', 'Kannada'] 
// modified array 
// let first = language.shift();

// console.log(first);
// console.log(language);

// 6. unshift  - add one or more element in the beginning of an array

// let language = ['Hindi', 'Urdu', 'Marathi', 'Kannada'] 

// variable second telling us about the length of an array after modification
//  language.unshift("Bhojpuri");
// console.log(second);
// console.log(language);


// Reverse 
// let num = [10, 20, 30, 40, 50, 60]
//change
// console.log(num);
// let reverseArray = num.reverse();
// console.log(reverseArray);


// Map - Map is an iterative method to execute some operations on the given array

let num1 = [2, 4, 5, 6, 8] 

// it will iterate through all the elements present in that array 

function square(num1){
    return num1*num1;
}
// iteration 
let cube1 = num1.map(square);
console.log(cube1)

// Callback function is a function which is passed as a agrument to another function 