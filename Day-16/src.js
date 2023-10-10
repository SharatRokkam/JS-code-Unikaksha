// console.log("working");

// Class is used to provide templates to create one or more objects  

// Instance Properties - what they have
// - name
// - age 
// - weight

//Instance Methods - whay they do
// 1. Talk
// 2. Run
// 3. Jump

// class Rectangle {
//     //setup the object 
//     constructor(width, height, color) {
//         console.log("rectangle is created");

//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     getArea() {
//         return this.width * this.height;

//     }

//     printDescription() {
//         console.log(`I am rectangle of ${this.width} x ${this.height} and I am ${this.color} color`);
//     }
// }

// let myRect1 = new Rectangle(2, 5, "red");
// let myRect2 = new Rectangle(3, 4, "blue");

// myRect1.printDescription();
// myRect2.printDescription()


// console.log(myRect1.getArea());
// console.log();myRect1.getArea();


// console.log(myRect2);



// class Square {
//     constructor(width) {
//         this.width = width;
//         this.height = width;
//     }

//     static equals(a, b) {
//         return a.width * a.height === b.width * b.height;
//     }


// }

// let square1 = new Square(9);
// let square2 = new Square(9);
// // console.log(square1);

// console.log(Square.equals(square1, square2));


//Parent class
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }

}

// Inorder to inherit the properties Parent class extends keyword is used..
//Child Class
class Programmer extends Person {

    constructor(name, age, yearofExperience) {
        super(name, age);

        //custom behaviour
        this.yearofExperience = yearofExperience;
    }

    code() {
        console.log(`${this.name} is coding `);
    }

}

// 1st way of creating an instance

let person1 = new Person("Ariba", 27);
let programmer1 = new Programmer("Poornima", 25, 3)

// console.log(person1);
// console.log(programmer1.code());

// 2nd way creating of instance
const programmers = [
    new Programmer('Chandan', 30, 5),
    new Programmer('Surbhi', 26, 2)
];


function developSoftware(programmers) {
    //develop software
    for (let programmer of programmers){
        console.log(programmer);
        programmer.code()
    }
}


developSoftware(programmers)