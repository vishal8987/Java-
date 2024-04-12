// settimeout And setInterval
// setTimeout--> Run Function "Once" After "Interval " of time 
// setInterval --> run function repeatdly ,starting after the  interval of time ,then repeating...
// setTimeout Syntax 
// srtTimeOut(fun|code , delay ,arg1 ,arg2 ..)

function greeting(name){
    console.log(`welcome ${name} to this family`);
}
// setTimeout(greeting,5000 ,"Vishal")
// setInterval(greeting ,1000)