var res=document.createElement("div")
res.setAttribute("id","myID")
res.innerHTML="something"
document.body.append(res)

document.getElementById("myID").addEventListener("mouseover",function(){
    document.getElementById("myID").style.color="skyblue"
});
document.getElementById("myID").addEventListener("mouseout",function(){
    document.getElementById("myID").style.color="black"
});