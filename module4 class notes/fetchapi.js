//multiple promises
var p1= new Promise((resolve,reject)=>{
    if(true){
      setTimeout(()=>{
        resolve("Promise 1 is resolved ");
      },3000);
    }
    else{
      setTimeout(()=>{
        reject("promise 1 is rejected");
      },1500)
    }
    });
    var p2= new Promise((resolve,reject)=>{
      if(false){
        setTimeout(()=>{
          resolve("Promise 2 is resolved ");
        },2000);
      }
      else{
        setTimeout(()=>{
          reject("promise 2 is rejected");
        },4000);
      }
      });
      var p3= new Promise((resolve,reject)=>{
        if(false){
          setTimeout(()=>{
            resolve("Promise 3 is resolved ");
          },1000);
        }
        else{
          setTimeout(()=>{
            reject("promise 3 is rejected");
          },2000);
        }
        });
    //executing the promise at a timeeeee...
    //promise.all
    //promise.all takes the array of promises as an input
    //it will wait untill all the executions are completed
    //it returns the results of promises in an array
    Promise.all([p2,p1,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
    //promise.all : if one promise getting rejected..then rest of the promises are ignored
    
    //to overcome the drawback we will be using the 
    
    //promise.allSettled
    //promise.all takes the array of promises as an input
    //it will show all the promises as such whether it has been resolved or rejected
    //The ouput will be an array of Objects
    Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((ele)=>console.log(ele)));
    //XHR has the draw back
    //To ovecome the XHR process we use the fetch 
    
    //fetch is an alternative to the XHR
    //Syntax:fetch("api url")
    //fetch takes api url as a parameter
    //it returns the promise object
    var res=fetch("https://restcountries.com/v2/all")
    .then((data)=>data.json()).then((data1)=>console.log(data1)).catch((error)=>console.log(error));
    
    //the data coming from the fetch is of promise
    //inside the promise object we have results in readable streams
    //to convert the readable streams into objects
    //we need .json() method.
    
    //.json method is returning again the promise,
    //to handle this promise.use one more .then()
    
    //Assignement 01:
    //Use the Below API to fetch the results of all the countrynames in console
    https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json