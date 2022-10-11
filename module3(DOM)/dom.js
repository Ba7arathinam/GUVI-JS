var ele=document.createElement("div")
ele.setAttribute("class","main")
ele.innerHTML="<span class=main>this is span<span>"


document.body.append(ele)

// alter method

var div=document.createElement("div")
div.setAttribute("class","main")

var span=document.createElement("span")
span.setAttribute("class","main1")

div.append(span);
document.body.append(div);
