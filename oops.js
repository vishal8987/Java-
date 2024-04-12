// object orented programming
// constructor function and the new operator 
// we cannot use arrow function as constructor 

// call "constructor" function using arrow function

// 1 new (object) created 
// 2 "this" ={object};
// 3 object linked to prototype
// 4 functional automatically return {object};

// prototype 
// each object created by "constructor" function have an access to all "methods" present inside thr "constructor" prototype


let Car = function(color ,model){
    // console.log(this);
    // properties
    this.color =color;
    this.model =model;

   /* // not a good pratice 
    this.login = function(){
        console.log("login method");
    }
    */
}
// prototypical inheritance 
Car.prototype.startengine =function(){
    console.log("This is the start engine method")
}
// we can also set "properties" to prototype
Car.prototype.company ="honda";

console.log(Car.prototype)
let instanceofcar =new Car("yellow" ,2021);
let instance = new Car("Blue" ,2000);
console.log(instanceofcar,instance);
console.log(instance instanceof Car);
instanceofcar.startengine();

console.log(instance.__proto__)

let array = [1,2,34,56];
console.log(array.__proto__);
console.log(array.__proto__.__proto__); // chaining of prototype
console.log(Object.prototype)
