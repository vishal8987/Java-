/*
// regular expression (Regex --part 1 for password)
// it is a pattern of character used to do pattern matching or we can say for "data validation"
// Implementaion of password vlidation
// length Atleast =8
// At least contain one upper case letter
// Atleast contain one lower case letter
// At least contain one digit inbetween 0 to 9

let form = document.querySelector('.signup-form');
let email= document.querySelector('#email')
let password= document.querySelector('#password')
let passwordpattern= "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
// condition of password as given 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let passwordvalue=password.value;
    console.log(passwordvalue)
    let result =passwordvalue.match(passwordpattern)
    console.log(result)
    if(result){
        console.log("your password is Strong")
    }
    else{
        console.log("try again")
    }
})

*/

// regular Expression (Regex --part 2 for username)
// basic form validation using Regex
// Implement userName Validation
// usernmae ocan only consists of A-Z and a-z
// length of username is in between 6 to 12 
let form = document.querySelector('.signup-form');
let email= document.querySelector('#email')
let user= document.querySelector('#name')
let password= document.querySelector('#password')
let userpattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit',(e=>{
    e.preventDefault();
    let username= user.value;
    console.log(username)
    // test method return boolean values:
    let result=userpattern.test(username)
    if(result==true){
        console.log("User name is Valid");
    }
    else{
        console.log("Username is Invalid")
    }
}))

// Live event 
user.addEventListener('keyup',(e=>{
    // if(userpattern.test(e.target.value))
    if(userpattern.test(form.name.value)){
        console.log("Passed")
        user.setAttribute('class', 'success')
    }
    else{
        // console.log("Failed")
        user.setAttribute('class', 'error')
    }
}))

