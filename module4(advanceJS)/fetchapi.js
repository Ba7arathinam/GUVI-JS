var ap=fetch("//raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
ap.then((data)=>data.json()).then((data1)=>   {for(var i=0;i<data1.length;i++){
    var div=document.createElement("div")
    div.innerHTML=`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">CountryName:${data1[1].name}</div>
    <div class="card-body">
      <h5 class="card-title">Capital:${data1[1].capital}</h5>
      <h5 class="card-title">Population:${data1[1].population}</h5>
      <h5 class="card-title">Region:${data1[1].region}</h5>
      
    </div>
  </div>`;
  document.body.append(div);
  }
    
})
.catch((err)=>console.log(err));
