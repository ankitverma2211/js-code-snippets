let person  = {
    name:"Ankit",
    age:"37"
}
/**
 * This is the function we are going to bind to a perticular context
*/
function sayHi(args){
    console.log(`${args} , My name is ${this.name} and my age is ${this.age} `)
}



/**
 * Now lets create our own pollyfill and we will call iBind :)
 * The thing to remeber is when we create a bounded function 
 * we will return a function 
 */

 Function.prototype.iBind = function(context,...args){
     let fn = this;
     return function(...params){
         fn.apply(context,[...args,...params])
     }
 }

 let boundedFunc = sayHi.bind(person,'Hola')
 let iBoundedFunc = sayHi.iBind(person,'Gola')


boundedFunc();
iBoundedFunc();