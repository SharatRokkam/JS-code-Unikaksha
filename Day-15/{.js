// console.log("working")

// Constructor function : is just another function to create and intialize the object 

//Keep first letter of function name in capital 
function Car(make, model) {
    this.make = make;
    this.model = model;

}

// we created two instances of object Car
const myCar1 = new Car('Toyota', 'fortuner');
const myCar2 = new Car('Hyundai', 'i20');