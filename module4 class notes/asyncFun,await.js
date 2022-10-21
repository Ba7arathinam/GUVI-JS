container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));


function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${data1[i].name}</h5>
  <h5 class="card-title">${data1[i].capital}</h5>
  </div>
</div>
  
   </div>`;
document.body.append(container); 
}

}

//Fetch consist of the multiple .then 
//easier way of writing 

//Async and Await
//it is a easier/syntactic sugar of writing the promises
//it is applicable to the functions

//normal function to async
//An async function always returns the promise
//Await: instead of .then 
//it is a keyword inside the async function
//it is used inside the async function

async function bar(){
let res= await fetch("https://restcountries.com/v2/all");
let result=await res.json();
console.log(result);
}
bar();

//1.Assignment
//Print the total cases of TN state 
//consisiting of Deaths,recovered,Active
API:https://data.covid19india.org/v4/min/data.min.json
async function bar(){
let res= await fetch("https://data.covid19india.org/v4/min/data.min.json");
let result=await res.json();
console.log(`Confirmed:${result.TN.total.confirmed}`);
}
bar();

//try-catch
//try-catch: is a error handler statement in async and await
//try-:testing block
//catch:error handler

function bar(){
    return new Promise((resolve,reject)=>reject("this is rejected"));
}//try-catch
//try-catch: is a error handler statement in async and await
//try-:testing block
//catch:error handler

function see(){
    return new Promise((resolve,reject)=>resolve("this is resolved"));
}
async function foo(){
    try {

        let res1 =await see();
        let res= await bar();
        console.log(res1);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

foo();


//Multiple api with async and await
//restcountires as well as the openweathermap
async function restdata(){
let res=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
let res1= await res.json();
console.log(res1);
// console.log(res1[0].name);
// console.log(res1[0].latlng);
try {
    for(var i=0;i<res1.length;i++){
    var name=res1[i].name;
    var latlong=res1[i].latlng;
    if(latlong.length===undefined){
        throw new Error("invalid coordinates");
    }
    opendata(name,...latlong);
    }
} catch (error) {
    console.log("invalid"+error.message);
}
}
//lat:33
//lon:65
async function opendata(name,lat,lon){
try {
let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`);
let res1= await res.json();
console.log(`Country name:${name} , Temp:${res1.main.temp}`);
} catch (error) {
    console.log(error.message);
}
}


restdata();