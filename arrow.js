// arrow function
// secial form of function expression it allows to wtite a function more fast becuse no ned to use functon keyword 
// no need to use paranthesis() in case of single parameter
// no need to use curly{} if single line code in functon 
// no need to use return if single line code in function

// functon expression 

let invitation =function(name){
    console.log(`Welcome ${name} to this event `)
}

invitation("vishal");

// Arrow 

// let me = vish => `welcome ${vish} in my Hotel`;
// console.log(me("Ankit"));

// or if we use braces 
let me = vish => 
{
  return` welcome ${vish} in my Hotel`
}
console.log(me("Ankit"));


// passing function as Argument (Higher order function example)
let upperCase = function(str)
{
    return str.toUpperCase();
}
let lowerCase = function(str)
{
    return str.toLowerCase();
}

let transformer =function(str ,fun)
{
    return fun(str)
}
console.log(transformer("vishal" ,upperCase));

// function returning another function

let compliment =function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
}
compliment("you are a good coder")("harry");

// 2nd method:

let complimented = compliment("you are a good coder ")
complimented("eliss")

// immediatly invoked functi expression : executed only once 
// this is the expression 
(function(name){
    console.log("This function will never execute again:" , name );
})("IIFE")
   
