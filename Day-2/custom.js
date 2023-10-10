// var a = 10 // global scope


// function f2(){
//     var a = 12;  // local scope
// }


// {
//     let b =10;
// }

// console.log(b)

// Global scope variables can be accessed anywhere in the program and local scope variable can be accessible within its scope


// var let and const 


// var is a global scoped variable
// var abhishek;  //variable declaration

// abhishek = 10; //variable intialization

// var abhishek = "chandan";

// var abhishek = "true"


// console.log(abhishek)

// Important : It can be redeclared and reintialize 
//Due to this you will end up having difficulties to understand the bugs and error
// that is the reason let and const variables were introduced

// let and const 
// Use let and const to declare or define a variable 


// Let is blocked or local scoped variable and also it can be reintialized but cannot be redeclared.
// let value = 50;

// function run(){
//     let value = "Burz Khalifa"
//     console.log(value);
// }

// run()


// let a ; 
// a = "value"

// let a = 10;


// Const variable cannot be declared nor reintialized
// const a = 50;

// const a = 50;


// 1.var can be redeclared and reintialized
//2. let can reintialized but cannot be redeclared
//3. const neither be redeclared nor reinitalized also it needs to be initialized on the same line

// const a = 10;

// const a = 20;
// console.log(a)

//Algorithm :

// 1. Given 3 variables, intialized it with values  daysInYear = 365; /daysInWeek = 7; /yearsInLifetime = 80;
// 2. Create a variables called weekInLifetime --camel convention
// 3. calcalute the average = dayInYear * yearInLifetime / daysInWeek ;
//4. Print it on the console.

// const daysInYear = 365;
// const daysInWeek = 7;
// const yearsInLifetime = 80;

// const weeksInLifetime = daysInYear * yearsInLifetime / daysInWeek;

// console.log(weeksInLifetime)

// arithematic operator

// Assignment -> =, +=, -=, *= , /= , %=

// let a = 10;
// let sum = 5;
// // sum = sum + a;

// // sum -= a;
// sum = sum - a//both are same
// console.log(sum)

// Comparison (Relational)
// ==(double equal to), ===(triple equal to), >(greater than), <(less than) , !=(not equal to) 
// <=, => 

// IMP : == vs ===
// double equal to checks value on the other hand === checks both value and datatype


// Bitwise Operator 
// &(Bitwise AND), |(Bitwise OR), ^(Bitwise XOR),~(Bitwise NOT) <<(Bitwise right shift), >>>(left shift),<<<(right shift with zero)


// both the condition needs to be true then it will give you true - AND
// any single condition need to be true in OR and XOR
// if (10 == 20 ^ 20 == 20) {
//     console.log("true");
// }
// else {
//     console.log("false")
// }


// Special Operator  - typeof

// Ternary Operator 

// Syntax: condition ?  true :  false
// this is kind of if else but written in a single line 