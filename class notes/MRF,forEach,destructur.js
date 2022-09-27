var arr=[12,13,14,15];
//output:var res=[24,36,28,30];
//step 01:for loop
//setp 02:multiply each element by 2
//step 03:create a res array and push it 
//step 04:printing the res array

//map method:
//map method takes function as a parameter
//apply on each and every element of the array
//return a new array
//Syntax:arrayname.map(function);
//inside the map method,it is taking a function as a parameter
//inside that function,we use one more parameter,ele
//ele represent the array elements 
var res=arr.map((ele)=>ele*2);
console.log(res);

//1.for an array var arr=["apple","mangoe",orange"]; ,add "s" at the end of each fruit so that the output is
//["apples","mangoes","oranges"]; using map method
var arr=["apple","mangoe","orange"];
var res=arr.map((ele)=>ele+"s");
console.log(res);
var arr=[12,13,14,15];
//output:var res=[12,14];
//step 01:for loop
//setp 02:divide(%) each element by 2
//step 03:if remainder 0  push it to res array else skip
//step 04:printing the res array

//filter :method based on condition
//odd or even is a condition
//filter method takes function as a parameter
//apply on each and every element of the array
//if the condition in which element inside the array passess then it will be 
//pushed if not rejected
//if ans is true:will be pushed
//if ans is false:will be rejected
//return a new array
//Syntax:arrayname.filter(function);
var res=arr.filter((ele)=>ele%2===0);
console.log(res);

 //1.find the names of the country whose population is less than 3laksh
 //1.find the names of the country whose population is less than 3laksh
    var popu=res.filter((ele)=>ele.population<300000);
    console.log(popu);
    var result1=popu.map((ele)=>`${ele.name} :${ele.region}`);
    console.log(result1);
 //2.print the names of those countires which belongs to Europe region
  //2.print the names of those countires which belongs to Europe region
  var result=res.filter((ele)=>ele.region=="Europe").map((ele)=>ele.name);
   console.log(result);
//Reduce function
var arr=[12,13,14,15];
//Reduce function will reduce the array into  a single value
//Syntax:arrayname.reduce((acc,cv)=>{},initial value)
//acc:accumulator:initial value:userdefined
//cv:array element:userdefined
//The final output is a number
//2 cases
//when intial value is not given
//it will take the value of first element of array
var res=arr.reduce((acc,cv)=>acc+cv);
console.log(res);

//when initial value is given
//acc will have the intial value which is given
var res1=arr.reduce((acc,cv)=>acc+cv,0);
console.log(res1);

//3.find the sum of the total population of all the countires using reduce function
 var result1=res.reduce((acc,cv)=>acc+cv.population,0);
   console.log(result1);
var arr=[12,13,14,15];
//ForEach 
//it is applicable only for arrays
//it takes function as a parameter
///it is applicable only for printing purpose
//it will be applying on each and every element of array
//it returns undefined

//final use is for the printing purpose
var res=arr.forEach((element)=>console.log(element));
console.log(res);
var arr=[12,13,14,15];
//ForEach 
//it is applicable only for arrays
//it takes function as a parameter
///it is applicable only for printing purpose
//it will be applying on each and every element of array
//it returns undefined

//final use is for the printing purpose
arr.forEach((element)=>console.log(element*2));
//expanding the array elements 
//destruturing
//it is a syntax that allows  us to unpack the array elememtns
//into the bunch of variables
let arr=["john","doe"];
//fname:arr[0],lname:arr[1]
let[fname,lname]=arr;
console.log(fname);
console.log(lname);
console.log(mname);

var obj={
  fname:"john",
  lname:"doe",
  mname:"is"
};

//Syntax:{sourceobjectkey:targetvalue}=objectname
//target value is userdefined variable
let {fname:f,lname:l,mname:m}=obj;
console.log(l);
console.log(m);