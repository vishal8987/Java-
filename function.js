// functions
// it is a simple piece of code which can use in our program many times 
// it is just like holding some piece of code:

function nameoffunction()
{
    // body 
    console.log ("you are runing a code present inside this function")
}

// functioncall
nameoffunction();
let fun = function(){
    // also called anoynomous function 
    console.log("this ia also an example of function :")
}
fun();

let invitation = function(name= "defaultName" ,time ="night"){
    console.log(`welcome ${name} you are invited at the event and the time is ${time}`)
}
invitation("vishal", "mornings");
invitation("harry");