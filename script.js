console.log("SHREE RADHE")
/*
var score=25;
var score=56; // redeclare
console.log(score)

let point= 34;
// let point=56;     redeclaration not allowed in let 
console.log(point)

const value=10;
console.log(value)


// string in js
console.log("RADHE RADHE")
let firstname="HARE";
let secondname="RAMA"
let thirdname="HARE";
let fourthname="KRISHNA";
let fifthdname="KRISHNA"
let sixthname="KRISHNA";
let seventhname="HARE";
let eighthname="HARE"
console.log(firstname,secondname,thirdname,fourthname,fifthdname,sixthname,seventhname,eighthname)
 
// String Concatination
console.log(firstname+ " "+ secondname+" "+thirdname+" "+fourthname+" "+fifthdname+" "+sixthname+" "+seventhname+eighthname)

// Method 2 using templat literals
let fullname= `love this ${firstname} ${secondname}`
console.log(fullname)

//getting string character
console.log(firstname[2])
console.log(firstname.toLowerCase())

console.log(firstname.indexOf("R"))

// common string method 
let hobbies='  reading playing travelling watching movie  ';
// trim method
let result= hobbies.trim()
console.log(hobbies)
console.log(result)

// index of
console.log(result.lastIndexOf("playing"))

// include method
console.log(result.includes("walking"))

//  slice method
let myname ="vishalkumar"
let vis=myname.slice(0,8)
console.log(vis) // excluding the last one:

//  note : original String doesnot mutate 
console.log("Original String =" , myname)
console.log ("Extracted String =" , vis)


// split the String
let favcolor= "blue black red yellow green";
let arrcolor= favcolor.split(' ');
console.log(arrcolor)

let str=" hello";
str= str+" Vishal";
console.log(str)
// in js Strings are immutable



// Numbers Datatypes:-
 
   let score=50;
   console.log(score,typeof score)  
   let result2= score*2 +(4*3)-8/2 % 4;
   console.log(result)
   // concatination a number with String
   let resulting = " My total Score is --> " + result2;
   console.log(resulting)
   */

   // loose equality and strict equality
   // loose equality operator
   /*let age =22; // number type value
   console.log(age=="22") //focus only on value not on type // generally we avoid this equality
   // strict equality operator
   console.log(age==="22")
   */
  /*
//   type conversion

let stringtype ="54";
console.log(stringtype , typeof stringtype)
// number method
let numtype= Number(stringtype);
console.log(numtype , typeof numtype)
*/
/*
//  boolean type
let age=12;
let bolleanofage = Boolean(age);
console.log(" Boolean of the age is ", bolleanofage)
//  in empty string it gives us false
*/


// Array 
let dishes =['chat', 'momo', 'pizza', 'biryani'];
console.log(dishes[4])
// modidfy the array
dishes[0]='kadhai paneer';
console.log(dishes)
//  array methods:-
// 1: join method
console.log(dishes.join(' '))
// 2: index of:-
console.log(dishes.indexOf("momo"))
// 3:- concatenate
let newDishes=['veg-chow', 'ros-gulla'];
console.log(dishes.concat(newDishes))
let updatedishes=dishes.concat(newDishes);
// 4: length
console.log(updatedishes.length)
// 5: push method---mutater method
console.log("new")
console.log(updatedishes.push("pani-puri"))
// it will return the length of the array after pushing
console.log(updatedishes)
// 6:- pop method
console.log(updatedishes.pop())


// Boolean values and comparision operators:-
let booleantpe=true;
let stringtype= "true";
console.log(typeof booleantpe ,typeof stringtype)

//  methods return Boolean Values:
let email ="vishalkumar26dbg@gmail.com";
let booleanvalue=email.includes("l");
console.log(email)
//  comaparision operator 
// == ,===,!==,!= ,> ,>= ,< ,<=
let points=23;
console.log(points=="low")
console.log(points!="234")
console.log(points==="23")


