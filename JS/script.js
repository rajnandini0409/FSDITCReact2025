//Normal function

// function fun(msg){
//     return "Heyyy "+ msg
//     console.log("jvjsnijvn")  //unreachable code
// }
// console.log(fun("greeting"))


// function as expression

// const data=function(a,b){
//     return a+b;
// }
// console.log(data(3,4))

//Arrow Function

// const data=(a,b)=>{
//     return a+b
// }
// console.log(data(3,5))

// const data=msg=>msg
// console.log(data("Greeting......"))



//IIFE********************************************* */

// (function () {
//     console.log("WElcome")
// })();/


//SET TIME OUT******************************************** */

// setTimeout(()=>{
//     console.log("Hiii......")
// },1000)

// console.log("HElloo")   //fisrtly it executed and after 1sec above will executed


//default parameter*************************** */

// function greet(msg="java"){ 
//     console.log(msg+" is a good language")
// }

// greet();



function selectlanguage(lang){
    let result
    if(lang=="java"){
        function javaCompiler(){
            return "using java compiler"
        }
        result=javaCompiler();
    }
    else if(lang=='c'){
        function cCompiler(){
            return "using C compiler"
        }
        result=cCompiler();
    }
    else{
       function python(msg="python"){
        return "Using python compiler"
       }
       result=python()
   }

    return result
}

console.log(selectlanguage())