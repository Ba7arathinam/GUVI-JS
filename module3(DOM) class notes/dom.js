//To create any HTML element Dynamically we need to have 3 steps

//Step 01: use an Inbuilt method called document.createElement("elementname");
//it takes tag name as a parameter
//it returns the html element
var ele=document.createElement("div");
//<div></div>
//Step 02:adding the Content
//innerHTML property :this is a property that helps us to add the contnet
//to the dynamically created HTML tag
ele.innerHTML="this is a element";
//<div>this is element</div>
//step 03:element has to be displayed so we are adding the created element 
//to body of document
document.body.append(ele);

var ele=document.createElement("div");
ele.innerHTML="<span>this is span</span>";
// ele.innerText="<span>this is span</span>";
document.body.append(ele);
//Properties:
//innerHTML property
//if you want to nest (one inside the other )
//use innerHTML
//if you give one html element inside the innerHTML
//it will parses that HTML element

//innerText:it will consider the tag also as a content
var ele=document.createElement("div");
ele.innerHTML=`
<p>this is p</p>
<span>this is span</span>
`;
// ele.innerText="<span>this is span</span>";
document.body.append(ele);
//Properties:
//innerHTML property
//if you want to nest (one inside the other )
//use innerHTML
//if you give one html element inside the innerHTML
//it will parses that HTML element

//innerText:it will consider the tag also as a content
//Applying CSS:
// var ele=document.createElement("div");
// ele.innerHTML="this is div";
// ele.style.backgroundColor="green";
// document.body.append(ele);

//Attribute ?
//to add attribute to the HTML element we use setAttribute Method
//this method takes 2 parameters
//setAttribute("class/idname","value");
var ele=document.createElement("div");
ele.innerHTML="this is div";
ele.setAttribute("class","main5");
//if you wanted to add multiple class names to the same element
ele.classList.add("main1","main2","main3");
document.body.append(ele);

//convert it into DOM code
<div class="main">
    <span class="main1">
    this is span
   </span>
</div>
var div=document.createElement("div");
div.setAttribute("class","main");

var span=document.createElement("span");
span.setAttribute("class","main1");
span.innerHTML="this is span";

//parent.append(child);
div.append(span);
document.body.append(div);
//Assigment 01 using second method convert it into  DOM 
<div class="container">
    <div class="row">
        <div class="col">this is col</div>
    </div>
</div>