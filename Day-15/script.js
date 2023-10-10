// console.log("working")

// Constructor function : is just another function to create and intialize the object 


//Keep first letter of function name in capital 

// Vehicle Management system
function Car(make, model, speed) {
    this.make = make;
    this.model = model;
    this.price = 1000000;
    this.speed = speed;



}

//we create instances/ example of Car constructor
const myCar1 = new Car("Toyota", "Fortuner")
const myCar2 = new Car("Hyundai", "i20", "150km/h")

// console.log(myCar3 instanceof Car)
// console.log(myCar1.hasOwnProperty('pric'));
// console.log(myCar2)
// console.log(myCar1)


//if you want to add any particular property to any instances you can do it
myCar1.safety = "5star";
console.log(myCar1);
console.log(myCar2);

// in every object there will prototype object which has proto object inside it..
Car.prototype.start = function () {
    console.log("Engine started");
}

myCar1.start();
myCar1.color = "White";

console.log(myCar2);
console.log(myCar1.color);

// Car.prototype = Object.create(Vehicle.prototype);

// const Vehicle = new Car('Ford', "Mustang");
//Change the prototype to a new object 
// Inheritance - We as human inherit the some properties of Parents 
let Vehicle = Object.create(Car)
console.log(Vehicle);


// Each object, array etc always contains prototype object from which we can access all the inbuilt function .
// Prototype is just another object which is present inside any object and array. Using which we are abel to use different features and function of JS.

// Incase of myCar1, its prototype level 1 is Car constructor then prototype level 2 is object constructor and this chain goes on like this until you dont get value of __proto__ as null. This concept is called as prototype chaining.

