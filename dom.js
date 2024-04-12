// javascript Dom (Document Object Model)
// created by browser as the html called 'document object'
// in document object there is model of complete html in tre like structure
console.log("Hare Krishna")
// getting html elements using querySelector/All
// querySelector returns "first element " that match css selectors
// to get all matched elements we use queryselectorAll


// let resultaedlement = document.querySelector('p')
let resultaedlement = document.querySelectorAll('p')
console.log(resultaedlement)


// Access elements with class
let resultaedlement2 = document.querySelector('.coder')
console.log(resultaedlement2)


// let resultaedlement = document.querySelector('#ankit')
// console.log(resultaedlement)

/*
// otherways to get html elements:-->
let resultaedlement = document.querySelectorAll('p')
console.log(resultaedlement)

resultaedlement.forEach(element => {
    console.log(element)
});

// get elements by tagname
let tagnameElem = document.getElementsByTagName('p');
console.log(tagnameElem)

// tagnameElem.array.forEach(element => {
//     console.log(element)
//     // it will not run thats why we use queryselectiz
// });

let classNameEle =document.getElementsByClassName('coder')
console.log(classNameEle)
// use always queryselectors

*/

/*
// updating And changing Content
// innertext
let heading = document.querySelector('h1')
console.log(heading.innerText)
// innerHTML
// it doesnot  ignore spaces
console.log(heading.innerHTML)
*/
/*
// ignore spaces:
let content =document.querySelector('.content')
console.log(content.innerText)
// content.innerText =" <p>Great Coders </p>" 
// update

// inner HTML
// it doesnot ignore spaes 
// retrieve and set content in html
console.log(content.innerHTML)
content.innerHTML +=" <p>Great Coders </p>"
// += krne se overflow nhi hota hai 

*/
/*

// getting and setting attributes of Elements:
// https://youtu.be/lGmRnu--iU8?si=YX6rOA_-UgMugZUT

let clink=document.querySelector('a')
console.log(clink.getAttribute('href'))
// get function is for read and set for write 
// set the attribute 
clink.setAttribute('href' ,"https://www.youtube.com/watch?v=lGmRnu--iU8&t=13576s")
console.log(clink.getAttribute('href'))
clink.innerText="Master class of js "
*/
/*
// Adding style in DOM
let heading = document.querySelector('h1');
heading.style.color="red";
heading.style.backgroundColor=" grey";
*/
/*
// Add ,remove And Replace class of Element :
let heading = document.querySelector('h1'); 
// add he class
heading .classList.add('newclass')

// remove 
heading.classList.remove('newclass')
// replace 
heading.classList.replace('main','newclass')
*/


// parent , children and siblings Elements :
/*
let parentEle =document.querySelector('.content')
// All children of Parent
console.log(parentEle.children)
// we cannot run for each Method on HTMLCollection so first convert into Array

console.log(Array.from(parentEle.children))

Array.from(parentEle.children).forEach(function(element){
    element.classList.add('codersm')
})
*/
/*
// child Elemnt 
let childelem= document.querySelector('h4')
// find the parent of the specific child 
console.log (childelem.parentElement)

// find the next sibilings of the child 
console.log(childelem.nextElementSibling)
console.log(childelem.previousElementSibling)

*/

/*
// creating 
const ul=document.querySelector('ul') 
ul.addEventListener("Click",()=>{
    // console.log("INSIDE UL")
})
*/
/*
// Event Basics (click event)
let EventEle = document.querySelector('.clickme')
// console.log(EventEle)
EventEle.addEventListener('click',function(){
    let li =document.createElement('li')
    // console.log("Clicked me")
    li.textContent = "Something New Added "
    ul.append(li)
    // ul.prepend(li)
})
*/


/*
let elements = document.querySelectorAll('li')
console.log(elements)
elements.forEach(function(element){
    element.addEventListener('click' ,function(e){
        // console.log("Item Clicked")
        console.log(e.target)
        e.target.style.textDecoration ="line-through"

    })
})
*/

/*
// removing 
let elements = document.querySelectorAll('li')
elements.forEach(function(element){
    element.addEventListener('click',e=>{
        console.log("Inside LI")
        e.target.remove()
    })
})*/
/*
const ul=document.querySelector('ul')
ul.addEventListener('click',(e)=>{
    // console.log("INSIDE UL")
    // console.log(e)
    if(e.target.nodeName=="LI"){
        e.target.remove()
    }
})
*/

