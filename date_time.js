// Date and Time
// Date object always carry Both Date And Time:
// Using Date Method:
/*
let currentDate = new Date(23 , 12,3);  // 0 to 11 (Month)
console.log(currentDate);


// using timeStamp (integer number represent in "ms" from 1-1-1970);
let currDate = new Date(0);
// 1 day = 34*60*60
console.log(currDate);


// to get time in "ms"
let currDate =new Date().getTime();
console.log(currDate)

// 1712172864060 =total time in ms


// Date & time (methods)

let completetime= new Date();
console.log(completetime);
// get full year 
console.log(completetime.getFullYear());
// get Month 
console.log(completetime.getMonth()); //0-11
// get week day
console.log(completetime.getDay());  // 0-sunday
console.log(completetime.getDate());
// get hours 
console.log(completetime.getHours());
*/
// Digital clock 

let hourhand =document.querySelector('.hour');
let minhand =document.querySelector('.min');
let sechand =document.querySelector('.sec');

let ticking =function(){
    let currDate = new Date();

    let gethour = currDate.getHours();
    let getmin = currDate.getMinutes();
    let getsec = currDate.getSeconds();

    hourhand.textContent =gethour;
    minhand.textContent =getmin;
    sechand.textContent =getsec;

}

setInterval(ticking ,1000);  //1000 = 1sec