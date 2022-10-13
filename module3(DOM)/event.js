var bot=document.createElement("button");
bot.innerHTML="Click Here"
bot.addEventListener("click",()=>{
    var sap=document.createElement("span")
    sap.innerHTML="Welcome to guvi"
    sap.style.color="blue"
    sap.style.fontSize="20px"
    document.body.append(sap)
})
document.body.append(bot)
// alter method to do this usw function indivdualy
// function but(){
//     var sap=document.createElement("span")
//     sap.innerHTML="Welcome to guvi"
//     sap.style.color="blue"
//     sap.style.fontSize="20px"
//     document.body.append(sap)
// }