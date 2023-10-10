// console.log("working")

// Array Methods... 

// Array Iteration 
// 1. for loop 
// for(let i= 0; i< Array.length; i++)

// while 
// while (condition > Array.length)

// array methods - foreach, map, every, some , reduce 

// 1. foreach - executes a provided function once for each  and every array element 


// initialized the index value
// let index = 0;
//defined an array with 5 elements

// defined a function which takes to parameters which are item and index
// let array = [10, 20, 30, 20, 50]
// function myFunc(item, index){
//         console.log(item)
//     }

//     // //foreach method
//     array.forEach(myFunc);


// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }


// anonymous function
// array.forEach(function(num){
//     console.log(num)
// })

// function expression 
// arrow function 


// Every Method 
// checks if all the elements present in the array satisfies the condition 
// true or false

// somem : any one condition should satisfy then it will give you true else false 


// const marksArr = [29, 12, 59, 36, 23, 21];


// // Syntax :
// let check = marksArr.some(function(item){
//     return item >= 35
// });

// console.log(check);


// Reduce Method 
//  - used to reduce an array to single value by executing a provided a function 

// Syntax = array.reduce(function(acc, currentValue, index, array), intialValue)

// acc = accumulated result  
// currentvalue - current element

// let numbers = [1,2,3,4,5,6,7]

// let sum = numbers.reduce(function(acc, cV){
//     return acc + cv
// 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21
// },0)

// console.log(sum)


// var we will not use --> redeclare or reinitialization 
// var a = 10
// var a = 20

// const value which will not change throughout the program 
// let sum = 0

// for(let i = 0; i< numbers.length; i++){
//     sum = sum + numbers[i]
// }
// console.log(sum)


// sort method 
// sorting in ascending(bydefault)
// element convert string 


// alphabetical order 
// const week = ["Sunday", "Thursday", "Saturday", "Wednesday"] // convert it string 

// week.sort()
// console.log(week);

const num = [1, 3, 5, 2, 8, 400, 10000]; // convert string
// num.sort()
// console.log(num);

num.sort(function (a, b) {
    return a - b;
})

// UTF-8   
// Alphabetical and number a to z 

// string to elments 

// number => UTF ()

// a - b => positive, negative and zero
// 1 - 3 => negative
// 3 - 5 => negative 
// 5 - 2 => positive
// 3 - 2 => positive 
// 1 - 2 => negative 
// 5 - 8 => -ve
// 8 - 400 => -ve
// 400 - 10000 => -ve 

// 1, 2, 3, 5, 8, 400, 10000

// console.log(num)


// lastIndexOf  and indexOf
// return the index of desired elements

// let marks = [20, 30, 34, 40, 39];


// let value = marks.lastIndexOf(40);
// console.log(value);

// Splice and Slice, find, include and filter(map) - Interview Task 

// let result = arr.splice(1,3)
// console.log(result);

// Splice or Slice 

// Slice - we can remove elements from the array, slice does not changes the array rather it gives the shallow copy of array

// let result = arr.slice(1, 4)
// slice(start, index-1)

// console.log(result);

//Splice - we can remove as well add elements to the array, modifying the array

// const arr = ["hyd", "mum", "guj", "chennai", "gurgaon"]

// let result = arr.splice(start, deletecount, addElement)
// let result = arr.splice(2, 3, "assam", "gwalior", "palwal")
// console.log(result)
// console.log(arr)


// const myName = "Zuckerberg"
// const myProfession = " jlsfjl"

// console.log("My name is " + myName + " and my profession is " + myProfession)

// String Interpolation 
// console.log(`My name is ${myProfession} and my profession is ${myName}`)

// console.log(myName.charAt(2))
// console.log(myName.indexOf("g"))
// console.log(myProfession[2])
// console.log(myProfession.__proto__)

// const newSt = myName.slice(0, 4)
// console.log(newSt);


// const numb = 100;
// console.log(numb.toFixed(3))

console.log()
