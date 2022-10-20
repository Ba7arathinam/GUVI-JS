//XHR-XML HTTP REQUEST
//res is a user definistion
var request=new XMLHttpRequest();
//HTTP method:GET
//ADD API URL
request.open("GET","https://restcountries.com/v2/all");
//send request to server
request.send();
//status code or server code is 200
//onload is a event which will be fired once a data
//successfully loaded a data
request.onload=function(){
    //apply the JSON.parse method
    //we convert into array object
    var res=JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        console.log( "name:"+res[i].name,"Capital:"+res[i].capital)
        console.log(res[i].name,res[i].region,res[i].subregion)
        
    }
    // use filter method to find population of country which has less than 3lakes
    var pop=res.filter((ele)=>ele.population<300000)
    console.log(pop)
    //find name and region of country of the country below 3lake
    var popu=pop.map((ele)=>`${ele.name},${ele.region}`);
    console.log(popu)
    //print countrys which belongs to the Europe with name and region
    var cun=res.filter((ele)=>ele.region=="Europe").map((ele)=>`${ele.name},${ele.region}`)
    console.log(cun)
    //find total population of overall countrys
    var tot=res.reduce((acc,cv)=>acc+cv.population,0);
    console.log("Total population is :"+tot)


}

//alter method for XML
//fetch
var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json()).then((data1)=>console.log(data1)).catch((error)=>console.log(error));

//the data coming from the fetch is of promise
//inside the promise object we have results in readable streams
//to convert the readable streams into objects
//we need .json() method.

//.json method is returning again the promise,
//to handle this promise.use one more .then()