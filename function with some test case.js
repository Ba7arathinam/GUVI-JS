
function foo(arr,n){
if(n==undefined){
    return arr[0]
}if(n<0){
    return [];
}else{
    return arr.slice(0,n)
}
    }
    console.log(foo([1,2,3,4],2))
