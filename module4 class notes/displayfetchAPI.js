


.main1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }
    //Index.css
    
    //scirpt.js
    let div=document.createElement("div");
    div.setAttribute("class","main1");
    
    
    
    let formgroup=document.createElement("div");
    formgroup.setAttribute("class","form-group");
    
    
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","form-control");
    input.setAttribute("id","main");
    input.setAttribute("placeholder","Covid 19 API");
    input.style.width="520px";
    
    let button=document.createElement("button");
    button.setAttribute("type","button");
    button.classList.add("btn","btn-primary");
    button.innerHTML="Search";
    button.style.marginLeft="200px";
    button.style.marginTop="20px";
    button.addEventListener("click",foo);
    //for active cases
    let active=document.createElement("div");
    active.setAttribute("id","active");
    //<div id="active">Total Number Of Active cases:123455</div>
    formgroup.append(input,button,active);
    
    //For active cases
    
    div.append(formgroup);
    document.body.append(div);
    
    
    async function foo(){
    try {
    let countryname=document.getElementById("main").value;
    console.log(countryname);
    let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
    let res1= await res.json();
    console.log(res1);
    //998
    var index=res1.length-1;
    //res1[998].Active
    console.log(res1[index].Active);
    active.innerHTML=`Total Active cases:${res1[index].Active}`;
    } catch (error) {
      console.log(error);
    }
    
    }