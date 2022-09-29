var arr=[3,'q','q','q',2,4,2,3,'q',1];
var minocc=1;
var count=0;
var element;
for(var i=1;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        if(minocc<count){
            minocc=count;
            element=arr[i];
        }
    }
    }
   count =0;
}
console.log(element+" "+(minocc +"times"))