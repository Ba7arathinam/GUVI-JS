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
        //console.log(res[i].name,res[i].region,res[i].subregion)
        
    }
};