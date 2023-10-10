// statements..

// Statments are the set of keywordds that commands the browser to perform desired task.
// Statements are used to "control the flow of program"

// example : if-else, for loop, variable declaration

// Syntax : Syntax is set of rules how program is created...Every programming languages has its own syntax


// Declare a variable 
// let x = 10; // declaration and intialization 

// alert("hello Javascript"); //if you want to simply show something or alert something..

// prompt("enter your name");  // if youwant to take value or inputs from the user than prompt it
   
// console.log("Hi, Javascript");   



// Comments - commnent is used when you don't want something to run or execute on the screen.
// also this is used to make the other person understand your code if you will add it..


// Question : Add 2 numbers and print the value in console 
// console.log(2+4);



// ctrl + / 

// Single line comment and multi line comment 

// is for single line comment

/*  
This is 
multiline
comment

*/


// Variables : are the container to store data or value 
// In Javascript there are 4 ways of defining or creating a variable 

/*
1. Automatically
2. using var keyword
3. using let keyword
4. using const keyword
*/
// Automatically creating the variable however it is worst practice to follow 
// value1 = 100;
// console.log(value1);


// value1 = 200;
// console.log(value1)

// var and automatically defining of variable can be redeclared and reintialised..

// var -- 1995 to 2015 it is also not preferred to create variable using var...
// var a = "chandan";
// console.log(a)


// let and const  - 2015 since then we must use const and let 
// let x = "Javascript"
// console.log(x);

//const - const value cannot changed.. in program if you dont want change the value at any point of time you should use const other wise let...
// const value = "2nd session"
// console.log(value);


// Prompt the user for their name
const userName = prompt("Enter your name:");

// Prompt the user for their city
const userCity = prompt("Enter your city:");

// Prompt the user for their street
const userStreet = prompt("Enter your street:");

// Prompt the user for their PIN code
const userPIN = prompt("Enter your PIN code:");

// Prompt the user for their house number
const userHouseNo = prompt("Enter your house number:");

// Create a variable to store the complete mailing address
const mailingAddress = `
  Name: ${userName}
  Street: ${userStreet}
  House No: ${userHouseNo}
  City: ${userCity}
  PIN Code: ${userPIN}
`;

// Display the complete mailing address
alert("Complete Mailing Address:\n" + mailingAddress);


