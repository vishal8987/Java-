/*
// working with array (simple method )
let letters=["a","b","c","d"];
// reverse the array
// let reverse= letters.reverse();
// console.log(reverse)
// console.log(letters)
// here both will rotate becuse they are mutating array
let nums =[1,2,3,4];
let concated = nums.concat(letters);
// this will return copy cause this is not mutating 
console.log(...nums,...letters)
console.log(concated)

// join method
let joined = letters.join(' ')
console.log(joined)
console.log('a b c d')
console.log(typeof joined)
 

/*
// slice method 
// used to Extract part of the array
// Array.slice(startIndex ,lastIndex(excluded))
// returns new array of extracted elements 

let num = [3,4,5,6,9,2];
let extarctedarray=num.slice(1,4);
console.log( " Extracted array=" ,extarctedarray)
*/
/*
// splice method 
// used to add new element into the array
// Array.splice(Index ,deleteValue ,ValuetobeAdded)
// return deleted items in the form of array:
// its a mutating array:

let num2= [3,5,7,9,2]
let updated = num2.splice(1,2,1,8)
// it also mutate the original Array:
console.log("Original array =",num2)
console.log("Returned element Array : ",updated)

*/
/*
// at method
let num2= [3,5,7,9,2]
console.log(num2[2]);
console.log(num2.at(0))
// at will also access the negative index :

// getting the last index of the array:
console.log(num2[num2.length-1])
// it will give you the last index of the array
// slice method 
console.log(num2.slice(-1)[0])
// using at method
console.log(num2.at(-1))

// at method will also works on the strings 

let name= "Larry";
console.log(name.at(-1))

// Map method:
// create New array from original array by applying
// Transformation function

let salaries =[3000,5000,8000,9000]
let newsalaries = salaries.map(salary=>{
    let incrementedsal =salary/2;
    return salary+incrementedsal
})
console.log(  "After 50% increment",newsalaries)
// length of new array always equal to the original array:

// Filter method (used to perform filteration on array)

let gifts = ["watch","Ring","Teddy-bear","chocolate","i-phone","rose","Ear-Buds"];
// now you want to filter only watch and rings gift
let filtergift = gifts.filter(gift=>{
    if(gift=="Ring" || gift =="i-phone"){
        return gift;
    }
})
// it will return "new " array:
console.log(filtergift)
console.log(gifts)

// note: length of the new aray may or may not be equal to the original array:


// reduce Method
// run reducer function for each array elements :
// Array.reduce(function(total ,currentValue),initialValue)
// It return single value

// sum of all elements using reduce method 
// total=accumultor 
let nums1 =[1,3,4,5,7];
let sum= nums1.reduce(function(total,currentValu){
    return total+currentValu
},0)
console.log(sum)

// Does not mutate original Array
console.log(nums1)

// Find method 
// It return the "first" element we are looking for...
 
let students =[{id:1,name:"alex"},{id:2,name:"vishal"}]
let result2 = students.find(student=>{
    return student.id===2
})
console.log(result2)
// if there will not match then it will return undefined

// FindIndex Method
// execute function for each array elements 
// it return "index" of that array element who "first" pass test "otherwise " -1

let ages =[23,12,45,6,34,58];
let result3 =ages.findIndex(age=>{
    return age>40
})
console.log("Index of the required age:",result3)

// "some" and "every" method 
// some method return "true" if "any" array element pass the test
// every method return "true" if "all" elements pass the test

let scores =[34,56,43,65,322,67,32];
let result4 = scores.some(score=>{
    return score>300
})
let marks =[54,66,58,45,67]
let result5 = marks.every(mark=>{
    return mark>40
})
console.log(result4)
console.log(result5)

// Flat method :
// it creates a new array with the elements of the subarray 
// "concanated into it"

let arr2 =[1,2,3,4,[5,6,7]];
console.log("before flat",arr2);

let result6= arr2.flat()
// by default 1 value if you want to do at 2 or more level you have to write flat(depth value|level number )
console.log("After Flat",result6)

// flatMap  55:00
*/
/*
// flatMap Method 
// it is a combination of the map() method
// followed by the flat() method of depth 1
let cart =[{
    name:"Mobile phone",
    qty:2, 
    price:500,
},
{
    name:"tablet",
    qty:3,
    price:5000

}]
let newCart = cart.flatMap(item=>{
    if(item.name==="Mobile phone"){
        return [item, {
            name:"Screen protector",
            qty:1,
            price:0
        }]
    }
    else{
        return [item]
    }
    
})
console.log(newCart)
*/

/*
// sorting array using sort method
// by default sort method is used to sort strings
// it firstly convert everything into the string and then...
let letters=["r","e","r","d"];
console.log(letters.sort());
let nums =[1,3,1,4,6,-9,-44,-87];
// console.log(nums.sort());

// if a-b<0 =>a<b => A,B (keep order same)
// if a-b>0 => a>b =>B,A (Switch the order)

nums.sort((a,b)=>{
    if(a<b){
        return -1;  
        // Any num less than 0
    }
    if(a>b){
        return 1 
        // Any number greter than 0;
    }
})
console.log("sorted",nums);
*/

// chain methods
let num =[1,2,3,4,5,6];

let result = num.slice(0,3).splice(2,1,7).push(8);
console.log(result);
