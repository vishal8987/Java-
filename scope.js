// variable and block Scope

// scope--- variable where the variable is defined and accessable :

let score=90; 
// global scope

if(true)
{
    let score=50 
    // block scope
    score=60;
    console.log(score);  
    // nearst value
}
console.log(score);