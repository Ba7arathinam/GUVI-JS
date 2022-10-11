var ele=document.createElement("div")
ele.setAttribute("class","main")
ele.innerHTML="<span class=main>this is span<span>"


document.body.append(ele)

// // alter method

var div=document.createElement("div")
div.setAttribute("class","main")

var span=document.createElement("span")
span.setAttribute("class","main1")

div.append(span);
document.body.append(div);

//assignment sum
var sign=document.createElement("div")
var sign1=document.createElement("div")
var sign2=document.createElement("div")
sign.setAttribute("class","container")
sign1.setAttribute("class","row")
sign2.setAttribute("class","col")
sign2.innerText="this is col"
sign1.append(sign2)
sign.append(sign1)
document.body.append(sign)