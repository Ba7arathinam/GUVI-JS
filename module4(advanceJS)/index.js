var vote=parseInt(prompt("Enter Your age"))
 var v1=new Promise((resolve,reject)=>{
    if(vote>=18){
        resolve("You are Eligible for VOTE");
    }
    else{
        reject("You are NOT Eligible for VOTE");
    }
 })
 v1.then((pass)=>console.log(pass)).catch((err)=>console.log(err))

 //chain promiese
 function mul(number){
    return new Promise((resolve,reject)=>setTimeout(()=>{
      resolve(2*number)
    },3000));
    }
    mul(12)
    .then((data)=>{
      console.log(data);
      //mul(24);
      return mul(data);
    }).then((data1)=>{
      console.log(data1);
      //mul(48);
      return mul(data1);
    })
    .then((data2)=>console.log(data2));

    //in between reject use

    function mul(number){
        return new Promise((resolve,reject)=>setTimeout(()=>{
          resolve(2*number)
        },3000));
        }
        function bar(number){
            return new Promise((resolve,reject)=>setTimeout(()=>{
              reject(2*number +" This is Rejected")
            },3000));
            }
        mul(12)
        .then((data)=>{
          console.log(data);
          //mul(24);
          return mul(data);
        }).then((data1)=>{
          console.log(data1);
          //mul(48);
          return bar(data1);
        })
        .then((data2)=>console.log(data2)).catch((error)=>console.log(error));