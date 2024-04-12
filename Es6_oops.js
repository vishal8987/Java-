/*
// ES6 classes (they still implement prototype inheritance behind the scene )

// class Declaration

class Car {
    // constructor
    constructor(color ,model){
       this.color =color;
       this.model =model; 
    }
    // here making function is efficient
    startengine(){
        console.log("this is start engine method of the acr")
    }
}

Car.prototype.breakMethod = function(){
    console.log("Break method of car");
}
let Honda =new Car("Red",2003);
console.log(Honda)
// console.log(Honda.__proto__.isPrototypeOf(Honda))
Honda.startengine()

// Important point :
// class are not hoisted
// classes are also first class citizens(pass as an argument or return )
// classes are executed in the strict Mode
*/

/*
// setter and getter method 
// setter and getter allows you to define object Accessor (computed properties)
// we can also use in class

// class declaration
class Car {
    constructor(color ,model){
       this.color =color;
       this.model =model; 
    }
    startengine(){
        console.log("this is start engine method of the acr")
    }
    get _startengine(){
        console.log("This is start engine method using get")
    }

    set changecolor(color){
        console.log(this.color =color)
    }
    get description(){
        return `color of Bike is ${this.color} and its Model is ${this.model}`
    }
}
let Honda =new Car("Red",2003);
// console.log(Honda)
// console.log(Honda.__proto__);
// Honda.startengine(); // accessing as function
// Honda._startengine; // accessing as property
// Honda.changecolor ="Blue"; // set as property 
// console.log(Honda)

console.log(Honda.description)
*/

/*
// Static methods(methods which is not present on constructor "prototype" property bit "constructor " itself )
class Car {
    constructor(color ,model){
       this.color =color;
       this.model =model; 
    }
    startengine(){
        console.log("this is start engine method of the acr")
    }

}
// prototype se instance method bante the
// now static method
// static method (can never inherited to all objects)
Car.breakmethod  = function(){
    console.log("this is the break method of car:")
}

let Honda =new Car("Red",2003);
Honda.startengine();
Car.breakmethod();

console.log(Number.parseInt(12)); //they are static method 
 */

// class inheritance(sub class)

class Car {
    constructor(color ,model){
       this.color =color;
       this.model =model; 
    }
    startengine(){
        console.log("this is start engine method of the acr")
    }

}

// child class
class bike extends Car{
    // Add some new porperties and "method" as well as 
    constructor(color ,model ,enginecapacity){
        super(color,model)
        this.enginecapacity =enginecapacity;
    }

}
let result = new bike("Black" ,2023 ,"125cc");
console.log(result);
let honda =new Car("Blue",2003);
console.log(honda)