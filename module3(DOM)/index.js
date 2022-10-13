function ctreatname(custname,disclass,disname,dis){
    var nam=document.createElement(custname)
    nam.setAttribute(disclass,disname)
    nam.innerHTML=dis
    return nam;
}
function intname(custname,disclass,disname,disclass1,disname1){
    var ele=document.createElement(custname)
    ele.setAttribute(disclass,disname)
    ele.setAttribute(disclass1,disname1)
    return ele;
}
function brak(bar){
    var br=document.createElement(bar)
    return br;
}

var firstname=ctreatname("label","for","firstname","FirstName")
var br1=brak("br")
var input1=intname("input","type","name","id","firstname")
var br2=brak("br")
var middilename=ctreatname("label","for","middlename","MiddleName")
var br3=brak("br")
var input2=intname("input","type","name","id","middlename")
var br4=brak("br")
var lastname=ctreatname("label","for","lastname","LastName")
var br5=brak("br")
var input3=intname("input","type","name","id","lastname")
var br6=brak("br")
var phnum=ctreatname("label","for","name","PhoneNumber")
var br7=brak("br")
var input4=intname("input","type","name","id","phonenumber")


document.body.append(firstname,br1,input1,br2,middilename,br3,input2,br4,lastname,br5,input3,br6,phnum,br7,input4)