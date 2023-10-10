    // console.log("working");

    // Array Destructuring - ES6 version

    // const fruits = ["Banana", "Watermelon", "Mango", "Grapes", "Kiwi", "Pineapple"]


    // Spread and Rest Operator - ES6 

    // let [firstFrt, secondFrt, ...thirdFrt] = fruits;

    // let [] = fruits;

    // console.log('FirstFruit :', firstFrt)
    // console.log('SecondFruit :', secondFrt)
    // console.log('ThirdFruit :', thirdFrt)
    // console.log('FourthFruits :', fourthFrt)



    // Strings 
    // String is an object and it is a sequence of charaters that can be written with single or double quotation mark 

    // let str = "Hello"
    // console.log(typeof str)

    // There are two ways to define or declare a string 

    // 1. string literal 
    // let stringName = "stringValue"

    // 2. string object(new keyword )
    // let array1  = new Array()
    // let stringName1 = new String("string literal")
    // console.log(stringName1)

    // prototype is also an object which stores various methods and function in it 

    // String Methods 
    // 1. concat - to merge two strings you can use concatenation (+)


    // console.log("My Name is " + myName + " and my profession is " + myProfession);

    // Alternative 
    // `` -> template literal
    // String Interpolation  
    // console.log(`My Name is ${myName} and my profession is ${myProfession}`)


    // console.log(myProfession[9])

    // console.log(myProfession.charAt(14))
    // console.log(myProfession.length);

    // console.log(myProfession.__proto__.)

    // console.log(myProfession.toLowerCase());
    // console.log(myProfession.toUpperCase());

    // const newString = myProfession.substring(-19, 6);
    // console.log(newString)


    // Main difference between these two is that slice expects negative value but substring won't accept 

    // const anotherValue = myProfession.slice(-18, 7)
    // console.log(anotherValue)


    // const myName = "    John           "


    // console.log(myProfession.includes('f'))
    // const myName


    // console.log(myName)
    // console.log(myName.trim())

    // // let variableName = myProfession.replace('Developer', 'Analyst')
    // console.log(variableName)

    // let split = ;



    // string into array --> reverse --> array into string 
    // repoleveDKcatSlluF

    // const myProfession = "FullStack Developer"
    // r e p o l e v e D K c a t S l l u F 
    // console.log(myProfession.split("").reverse().join(''));

    // Numbers

    // const number = 100;



    // const num1 = new Number(200);

    // tofixed is used while creating any decimal related variables example while creating any ecommerce application.
    // console.log(num1.toFixed(2))

    // const Num2 = 100000000;
    // console.log(Num2.toLocaleString('en-IN'))

    // console.log(typeof number)

    // Math is inbuilt library - is an Object - Javascript


    // -ve to +ve 
    // console.log(Math.abs(-10));

    // round 
    // console.log(Math.round(50.4383));


    //ceil - ceiling is always on the top
    // console.log(Math.ceil(50.13));

    // floor - bottom value 
    // console.log(Math.floor(50.4383));


    // Min and Max
    // console.log(Math.min(3,4,5,7,46))
    // console.log(Math.max(3,4,5,7,46))


    // random 
    // Dice Game 

    // Always gives you value between 0 to 1
    // console.log(Math.random());
    // console.log(Math.floor(Math.random() * 10) + 1)


    // 10 to 20

    // const min = 10;
    // const max = 20;
    // console.log(Math.floor(Math.random() * (max - min) + 10));

    // Write a function to generate the random numbers between 1 to 6 