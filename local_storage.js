// Local  Storage
/*
// In previous to-do list task when we reresh thebrowser we loose the curr state data 
// store and retrieve data from database
// and also from local storage
// is an api provided by browser to store data inside browser
console.log(window.localStorage);
console.log(localStorage);

// Local Storage 
// set item 
// get item 
// update item

// set the item in local Storage:
localStorage.setItem('passion' ,"programming");
localStorage.setItem('age' , 22);
console.log(localStorage);

// get the item from Local Storage:
console.log(localStorage.getItem('age'));

// update:

localStorage.setItem('passion' , "coding");// this will overwrite heprevious value
// console.log(localStorage)
localStorage.setItem('ag',28);

// remove item:
localStorage.removeItem('ag');
localStorage.removeItem('age');
*/
// there is a method clear which will clear all the items stored in the local-storage


// How to store complex Data Structure like array and objects:
// ultimately in local storage data Store in String formate:

let vechile =[
    {company:"Honda",model:"2009"},
    {company:"Toyota",model:"2010"}
]

console.log(vechile)
let stringofVechile = JSON.stringify(vechile);
console.log(stringofVechile)

localStorage.setItem("vechile" ,stringofVechile);
console.log(localStorage)

// get stored item again in the object fomat

let storedata = localStorage.getItem("vechile")
let objectformate = JSON.parse(storedata);
console.log(objectformate)
console.log(typeof objectformate)
// use local storage for something which you want to store 


