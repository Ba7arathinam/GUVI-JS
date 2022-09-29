//ES5 vs ES6
//Hoisitng and Scope
//Template Literals
//spread operator and rest parameter
//destructruing

//Hositing:accessing the variable without declaring it 
//it is a developers error
// console.log(names);
// var names;
//let and const are introduced to overcome Hoisitng
console.log(str);
var str="hello";
let a1=23;
let b=24;
// //var b=24;
let b=25;
// console.log(b);

//var is a global scope and you can reassign it 
//but not the let and const (similar scoping not allowed)
var a; declaration
var a="guvi";//assigning the values
var b="geek";
a=23;//re assigining
console.log(a);

if(5>4){
let b=23;
{
console.log(b);
}
console.log(b);
}
console.log(b);
var a=23;
var b=24;
var name="guvi";
//the sum of a and b is (a+b) and also
//the value of a and b is 23 and 24
// console.log("the sum of a and b is"+(a+b));
//Template literals helps us to overcome concatenation
//Syntax=` ${expression}` 
console.log(`the sum of a and b is ${a+b} 
and the value of a and b is ${name} and ${b}`);
//spread operator
//It is introduced in ES6
//Syntax: ...
//Uses of spread Operator 
var arr=["guvi","geek"];
//Expanding the array elements
console.log(arr);
console.log(...arr);

//Converting strings into character array
let a="hello";
//using spread operator also we can convert string to character array
let char=[...a];
console.log(char);


//Combining the arrays
var arr1=["bob","jon","sofia"];
var arr2=["alice","bean"];
var arr3=[...arr1,...arr2];
console.log(arr3);

//Combining the objects
let obj1={a:1,b:2};
let obj2={c:3,d:4,...obj1};
console.log(obj2);

//rest parameter
//it is used inside the function 
//to conside the remaining values that are passed to a function
//it is coming inside the array
function foo(...rest){
  var sum=0;
  for(var i=0;i<rest.length;i++){
      sum=sum+rest[i];
  }
  return sum;
}
console.log(foo(12,13,14,15,16));