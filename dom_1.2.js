
// more event :
/*
// copy event 
let copyRightEle= document.querySelector('.copy');
copyRightEle.addEventListener('copy',()=>{
    console.log("you cannot copy this")
})

// mouse move event:
let box = document.querySelector('.box')
box.addEventListener('mousemove',(e)=>{
    // console.log(e)
    console.log(e.offsetX ,e.offsetY)
})
*/
// form Events (submit form)
let form= document.querySelector('.signup-form')
// let email= document.querySelector('#email')
// let password= document.querySelector('#password')
// console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit the form Successfully")
    // console.log(email.value ,password.value)
    // method--2
    // console.log(form.email.value ,form.password.value)
    console.log(form.userEmail.value ,form.userpassword.value)
}) 