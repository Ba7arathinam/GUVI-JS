// //This table is in HTML, create the sasme table With Below Mentioned Information
// //Using DOM 
// //Deploy the same using netlify
// //Remainder:don't use innerHTML propery 1st Method

// <table class="table">
// <thead class="thead-dark">
//   <tr>
//     <th scope="col">First</th>
//     <th scope="col">Middle</th>
//     <th scope="col">Last</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>


// </tbody>
// </table>


var tab=document.createElement("table")
var tab1=document.createElement("thead")
var tab2=document.createElement("tr")
var th1=document.createElement("th")
var th2=document.createElement("th")
var th3=document.createElement("th")
var tab3=document.createElement("tbody")
var tab4=document.createElement("tr")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
tab.setAttribute("class","table")
tab1.setAttribute("class","thead-dark")
th1.setAttribute("scope","col")
th2.setAttribute("scope","col")
th3.setAttribute("scope","col")
th1.innerText="First"
th2.innerText="Middle"
th3.innerText="Last"
td1.innerText="Mark"
td2.innerText="Otto"
td3.innerText="@mdo"
tab2.append(th1,th2,th3)
tab1.append(tab2)
tab4.append(td1,td2,td3)
tab3.append(tab4)
tab.append(tab1,tab3)
document.body.append(tab)