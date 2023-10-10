// console.log("working");

// Regex - Pattern used to match charater combination in a string 
// Global Flag - g 
// multiline - m
//insensitive - i 
// const regex = /like/g;
// const text = 'I like coding, I like Javascript, I like programming';


// replace - first occurance of the character will be replaced
//replaceAll - replaces all the occurances of the character 
// console.log(text.replace(regex, 'love'));


// Replace the Hello World string with underscore instead of whitespace 

// const regex = /\s/g

// const string1 = "Hello World"

// console.log(string1.replace(regex, '_'));


// const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;

// function validateEmail(email) {
//     return emailPattern.test(email);
// }


//Execution - Memory compnonet / code component - > execution phase - code component- emailpattern
// console.log(validateEmail('hello@example.com')); 
// console.log(validateEmail('hello_78@example.in')); 
// console.log(validateEmail('12hello_78@exampl.zzz')); 

// Map and Sets 
// key value pair - of any data type - store and retrieve data 
// collection of unique value 


// let array = new Array()
// let string = new String()

// constructor - M, Arr, Str

// creating a basic map
// let basicMap = new Map();

// console.log(basicMap);

// added the key value pairs

// basicMap.set('name', 'Leo');
// basicMap.set('age', 20)
// basicMap.set('isStudent', true)


// access the values using key
// console.log(basicMap.get('isStudent'));

//checking if the key exists

// two ways -->> ['']
// console.log(basicMap.has('name'));  //false

//deleting key value pairs
// console.log(basicMap.delete('age'));

// console.log(basicMap);


// for (let [key, value] of basicMap) {
//     console.log(`${key}: ${value} `);
// }



// Set - unique elements 
//create a set
// let basicSet = new Set();

// console.log(basicSet);


//adding the values to the set
// basicSet.add(10);
// basicSet.add('explain');
// basicSet.add(true);
// basicSet.add(10);


// //reference to the method/ 
// console.log(basicSet);
// basicSet.delete('explain');


// You need to find unique elements using set from the array

// const array = [1, 2, 3, 4, 5, 1, 3, 4, 6, 8, 9, 0]

// let basicSet = new Set(array);
// console.log(basicSet);

// const uniqueArray = Array.from(basicSet);

// console.log(uniqueArray);




var a = 10;
 
var a = 20;
