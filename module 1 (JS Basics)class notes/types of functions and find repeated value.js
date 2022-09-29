//Anonymous function
//Arrow function 
//IIFE

//Anonymous function
//Syntax: var variablename=function(){}
// var res=function(){
// return "hello world";
// }
// console.log(res());
//parameters
var res1=function(a,b){
    return a*b;
    }
    console.log(res1(12,13));
    //Arrow Functions:
    //to reduce the code length  
    //Syntax: var variablename=()=>{}
    // var res1=()=>{}
    //Suppose if you have a single statement
    //then there is no need of return keyword
    
    //Anonymous function
    var res=function(){
    return "hello world";
    }
    //Arrow Function
    var res=()=>"hello world";
    
    //Ex:02
    //Anonymous Function
    var res1=function(a,b){
    return a*b;
    }
    
    //Arrow Function
    var res1=(a,b)=>a*b;
    //Arrow Functions:
    //to reduce the code length  
    //Syntax: var variablename=()=>{}
    // var res1=()=>{}
    //Suppose if you have a single statement
    //then there is no need of return keyword
    
    //Scenario 02:
    //when you have more than one statement inside the function
    //then it is needed to use the return keyword 
    // var res1=function(a,b){
    // console.log("hello guvi");
    // var num=23;
    // return a*b;
    // }
    //Arrow functions
    var res1=(a,b)=>{
    console.log("hello guvi");
    var num=23;
    return a*b;
    }
    
    console.log(res1(12,13));
    
    var res1=(a,b)=>a*b;
    console.log(res1(12,13));
    // IIFE:immeaditely invoked function expression
    //it has to execute immeadiately once  it is written/declared 
    (function foo(a,b){
    console.log(a*b);
    })(12,13);
    
   // 5.Write a JavaScript program to find the most frequent item of an array.
    //Sample array: 
   // var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
    //Sample Output: q ( 5 times )
    // Write a JavaScript program to find the most frequent item of an array.
    // Sample array: 
    var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
    // Sample Output: q ( 5 times )
    // [2,3,3,3,3,4,9,q,q,q,q,q];
    var minocc=1;
    var count=0;
    var element;
    //taking each element from the array
    for(var i=0;i<arr1.length;i++){
    for(var k=i;k<arr1.length;k++){
    if(arr1[i]==arr1[k]){
    count++;
    if(minocc<count){
    minocc=count;
    element=arr1[i];
    }
    }
    }
    
    count=0;
    }
    
    console.log(element+" "+minocc);
    