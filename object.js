// objects

"use strict"
/*
let car ={
    color:"black",
    mode: "x5",
    company:"suzuki"
}
console.log(car);

// accessing the js object properties
console.log(car["color"])
console.log(car.company)

let propertyName ="color";
console.log(car[propertyName])
// as a variabe we check 
// console.log(car.propertyName)  -->we check the same 

// modify the object 

car.color="brown";
console.log(car.color)

// delete properties in the object
let obj ={
    prop1 :"value1",
    prop2 : "value2"
}
let returnvalue = delete obj.prop1
// it always return true :
console.log(obj.prop1);
console.log(obj.prop2);


// methods : jab kisi object ke ander function ho to usko method bolte hai 
let agecal=function(birthyear){
    let age= 2024-birthyear
    console.log(`current age is ${age}`)
}
agecal(2001);
// on the top is function 

let person = {
    agecala : function(birthyear2){
        let age2 =2023-birthyear2;
        return age2;
    }

}
console.log(`current age is ${person.agecala(2003)}`)


// this keyword:
// in each method we have an access of special keyword called this
// this keyword represents the object , calling the "methods" in which "this " is present

let person2={
    firstname:"Vishal" ,
    lastName: "das",
    city:"darbhanga",
    Dateofbirth:"28-08-2001" ,
    education:"ug",
    getSummary:function(){
        return ` ${this.firstname} ${this.lastName} lived in ${this.city} .he is in college ${this.education} student and his dob is ${this.Dateofbirth}`
        
    }
}
console.log(person2.getSummary())
// step1 : check in which method we use "this" keyword
// step2: owner of that method (who is calling those method)

// for each method -->callback function
// its another type of loop which we used to travesred over the array
let dishes =['chat', 'momo', 'pizza', 'biryani'];
 for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
    

 }
 console.log("**********");
//  using for each loop
dishes.forEach(function(element){
    console.log(element);
})

// object inside array:
let bockedlist =[{userName:"john",reason:"absive content"}, {userName:"Nikku",reason:"laundiyabazi"}]
console.log(bockedlist)
for(let i=0;i<bockedlist.length;i++){
    console.log(`user ${bockedlist[i].userName} Blocked Due to this reason ${bockedlist[i].reason}`)
}

// Math object built in object in javaScript :

console.log(Math)
let number = 7.6;
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number))

let random = Math.random()
console.log(Math.round(random*100))


// call and apply method 
// we can manually set the value of "this" keyword 
let mainplane = {
    airname:"airbus",
    itcode:"f1",
    booking:[],
    book:function(flightNum ,p_name){
        console.log(`${p_name} booked flight on ${this.airname} with flightnumber ${this.itcode} ${flightNum}`)
        this.booking.push({flight:`${this.airname}`,p_name:p_name ,flightNum:` ${this.itcode} ${flightNum}` })
    }
}
mainplane.book(553 ,"carlos")
mainplane.book(765 ,"jack")
// console.log(mainplane)

// new airline launched of same group 

let childplane ={
    airname:"child_plane" ,
    itcode: "cp",
    booking:[],

}
let book = mainplane.book;
// book(877 ,"vishal")  
// book is regular function
// "this" value is undefined at least in strict mode
// solution using "call" method 
book.call(childplane,689 ,"Zack");
console.log(childplane)
book.call(mainplane ,678 ,"vishal"); 
console.log(mainplane)

// apply method 
book.apply(childplane , [785 ,"NIKKU"])
*/


// bind method 
function greet()
{
    console.log(`Welcome ${this.firstname} ${this.lastname} on the coderdost`)
}
let user ={
    firstname:"john",
    lastname:"paul"
}
let greets = greet.bind(user)
greets();

// oject/array how "refrence" are passed to variable 
let arr =[1,2,3,4,5,6];
let getref = arr;
getref[6]=7;
// getref.shift()
// it will remove first element
console.log( " original array is ",arr);
// also change cause both point to the same reference 
console.log( " reference array is ",getref);
console.log( " ******* ");

// pass by value
let getvalue =[...arr];
// arr[7]=8;
getvalue[7]=8;
getvalue.shift()
console.log( " original array is ",arr);
console.log( " get array is ",getvalue);
// note :array and objects are pass by ref.agar assignment operator se new value create karte hai to 

// foe-in Loop (each iteration return a "key" o object)
/*
let car={
    model:"2023",
    color:"back",
    company:"toyota"
}
console.log(car);
let x= " "
// these properties are called inumerable property
// thats why we write these in for in llop
for(let key in car){
    x= x+ car[key];
    console.log(key);
}
*/


