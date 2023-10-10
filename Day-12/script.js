// // console.log('workinng');

// // Object Destructuring

// // Object - Non_primitive data type

// // const person = {
// //     name: 'Raghu Singh',
// //     age: 25,
// //     occupation: 'Developer'
// // }

// // console.log(person);

// // Destructuring = extracting values from object and assign them to variables with the same names as the object's keys

// // Basic Destructuring
// // const {name, age, occupation} = person;

// // change variable name on the go / aliasing during destructuring
// // const {name: fullName, age, occupation} = person;

// // console.log(fullName);
// // console.log(occupation);
// // console.log(age);


// // Destructuring is particularly useful when working with function parameters

// // function displayInfo({ name, age, occupation }) {
// //     console.log(`Name : ${name}, Age: ${age}, Occupation: ${occupation}`);
// // }

// // displayInfo(person);


// //passing this objects as arguments
// // const user1 = {

// //     firstName: "Ariba",
// //     LastName: 'Nigar',
// //     age: 23,
// //     email: "test@example.com",
// //     lastVisited: '23rd Sept 2023'

// // }

// // Few entries of the user


// // Nested -
// // const user = {
// //     details: {
// //         name: "Rohan",
// //         age: 30
// //     },

// //     address: {
// //         city: "Nagpur",
// //         country: 'India'
// //     }
// // }

// // const { details: { name, age }, address: { city, country } } = user;

// // console.log(name, age, city, country);


// // Getter and setter

// // const temperature = {
// //     celsius: 25,
// //     get fahrenheit() {
// //         return this.celsius * 9 / 5 + 32; //77
// //     },

// //     set fahrenheit(value) {
// //         this.celsius = (value - 32) * 5 / 9;  //0
// //     }
// // }


// // console.log(temperature.fahrenheit);
// // temperature.fahrenheit = 33;
// // console.log(temperature.celsius);

// // object - methods

// // array - map, filter , reduce , sort , join , reverse

// // objects  - keys, values, assign, entries, hasownProperty


// // Keys : return an array of given object's own enumerable property names
// // const person = { name: "Surbhi", age: 25 }
// // const keys = Object.keys(person);
// // console.log(keys);

// // values : return an array of given object's own property values

// // console.log(values);\

// // entries : return an array of given object's property pairs
// // const person = { name: "Surbhi", age: 25 }
// // const entries = Object.entries(person);
// // console.log(entries);
// // [[name, "Surbhi"], [age, 25]]  //nested array

// // assign : copies all the values of all enumerable props from one or more source objects to a target object

// // const obj1 = { a: 1, b: 3 };
// // const obj2 = { b: 2, c: 5 };

// // const mergedObj = Object.assign({}, obj1, obj2)
// // console.log(mergedObj);

// // hasOwnProperty : return the value in boolean indicating if the object has the specified property as its own property


// // const person = { name: "Surbhi", age: 25 }
// // const hasName = person.hasOwnProperty('age');
// // console.log(hasName);

// // includes , find \



// // Pass by value 
// // the actual value(copy) of the variable is passed to the function, in this scenario , modifications are made to the parameter inside the function do not affect the original value outside the function 

// // function increment(x) {
// //     x++;
// //     console.log(x); // 6
// // }

// // let num = 5;
// // increment(num);
// // console.log(num); //5


// // Pass by refrence 
// // the memory address(reference) of the variable is passed to the function, modification made to the paramete inside the function directly affect the original value.

// // function modifyArray(arr) {
// //     arr.push(4)
// //     console.log(arr)
// // }

// // let myArray = [1, 2, 3, 5]

// // modifyArray(myArray)
// // //existing array 
// // console.log(myArray);


// // Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];


// function displayReadingStatus(books) {
//     for (let book of books) {
//         const status = book.readingStatus ? 'already read' : 'not read yet'
//         console.log(`${book.title}, ${book.author} , ${status}`);
//     }

// }

// displayReadingStatus(library);



// let user = {
//     name: "raj",
//     age: 23
// }

// function displayInfo (company, designation){
//     console.log("Hello inside the function", this);
//     console.log(this.name + "is " + this.age + "years old.", company, designation);
// }

// displayInfo.call(user, "TCS", "dev")
// var globalVar = "I am global";

    (function () {
        //IIFE body
        const localVar = "I am local";
        console.log(localVar);
        console.log(globalVar);
    })();


    console.log(globalVar);
    console.log(localVar);


// function printUsername(name, time){
//         setTimeout(()=>{
//             console.log(name);
//         }, time)
//     }
    
    
//     function printAllUsers(){
//         printUsername("A", 2000);
//         printUsername("E", 5000);
//         printUsername("I", 1000);
//     }
    
    
//     printAllUsers();


function printAlphabets (alpha, time, callbackFun){
    setTimeout(() => {
        console.log(alpha);
        callbackFun()
    }, time);
}



function printVowels (){
    printAlphabets("A", 1000, ()=>{
        printAlphabets("E", 5000, ()=>{
            printAlphabets("I", 2000, ()=>{
                printAlphabets("O", 3000, ()=>{
                    printAlphabets("U", 6000, ()=>{
                        console.log("Welcome to Callback Hell !!!!!");
                    });
                });
            });
        });
    });
}

printVowels()
