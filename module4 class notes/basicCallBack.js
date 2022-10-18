//Advance Javascript

//Sequential Execution:
//Synchronous  Execution:

console.log("first.....");
console.log("second.....");
console.log("third....");

//ex 02:
console.log("first......");
function foo(){
    console.log("function is calling...");
}
console.log("secondd......");
foo();
//Asynchronous function
//Settimeout is a inbuilt async function
//parameters:function as well as time in milli seconds
//it will make the code to wait after a specific time
//after that it will be executed 
console.log("app is downloading......");
setTimeout(()=>{
console.log("this is a blocking code....");
},3000);

setTimeout(()=>{
    console.log("this is a blocking code1....");
    },3000);
console.log("app downloaded......");
console.log("app downloaded......");
console.log("app downloaded......");
console.log("app downloaded......");
console.log("app downloaded......");
console.log("hello");

setInterval(()=>{
    console.log("hello guvi!!!!");
},1000);
console.log("executed");

//setInterval
// after a specific duration it will be repetative

//call stack: it is a register which keeps the track of the functions
//that are to be executed






var res=()=>{
    bar();
    console.log("hello");
    
}

var bar=()=>{
    console.log("guvi");
}

res();

// res();

// function res(){
//     bar();
//     console.log("hello");
// }
// function bar(){
//     console.log("guvi");
// }

//call stack: it is a register which keeps the track of the functions
//that are to be executed


//Web API: it is a place where the actual time consuming operations
//has been executed 

//Call back Queue: FIFO
//it is a place where the functions  that has to be 
//executed by the call stack will be placed


console.log("App is started")
setTimeout(function timer() {
        console.log('app is under  development');    
    }, 5000);


console.log("app  is under testing");

setTimeout(function timeout() {
    console.log("app is deployed");
}, 1000);

console.log("app completes");


//EventLoop: it checkes whether the call stack is empty or not
//if it is empty it will be pushed to the call stack to executed the function
//call back: a function which takes one more function as a parameter
//the function which is used a parameter is nothing but called as callback function

//the one which is sent as a parameter is nothig but called as call back function

function foo(res){
    //var result=bar;
    //var result=hello world
    var result=res;
     console.log(result);
    console.log("this is a foo function");
}

function bar(){
  return "hello world";
}

foo(bar());