import './App.css';
import { useState } from 'react';
import React from 'react';
function App() {
  const Movie = [{ 
    name:"LoveToday",
    gender:"-2022 | Comedy | 2h 35m",
    pic:"https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
    rating:"⭐9.1",
    disc:"Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles.",
   },
   {
    name:"Diary",
    gender:"-2022 | Thriller/Mystery |2h 11m",
    pic:"https://th.bing.com/th/id/OIP.IGdy7K9XTcQsfsduOoeS5QHaKX?w=203&h=284&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating:"⭐8.6",
    disc:"Diary is a 2022 Indian Tamil-language supernatural mystery thriller film written and directed by debutant Innasi Pandiyan and produced by S. Kathiresan under the banner of Five Star Creations LLP. The film was distributed by his cousin Udhayanidhi Stalin under his banner Red Giant Movies.",
},
   {
    name:"Rorschach",
    gender:"-2022 |Mystery|2h 30m",
    pic:"https://th.bing.com/th/id/OIP.W0inkWYMSqHoR2wvirCX0wHaJP?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating:"⭐7.5",
    disc:"Rorschach is a 2022 Indian Malayalam-language neo-noir psychological supernatural action thriller film directed by Nissam Basheer and produced by Mammootty under, Mammootty Kampany. It stars Mammootty, Sharafudheen, Jagadish, Grace Antony, Bindu Panicker, Kottayam Nazeer, Sanju Sivram and Asif Ali",
},
   {
    name:"Thallumaala",
    gender:"-2022 | Action | 2h 28m",
    pic:"https://th.bing.com/th/id/OIP.A8pkXepcrrTjQz65pJh-nAHaKz?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating:"⭐8",
    disc:"A young, carefree man who's drawn into fights falls in love with a star vlogger, where the impact of his fists could have disastrous effects on his blossoming relationship.",
     },
    ] ;
  return (
    <div className="App">
    {Movie.map((post) =>(
    <Movies
    name={post.name}
    pic={post.pic}
    rating={post.rating}
    disc={post.disc}
    gender={post.gender}
    />))
    }
      </div>
  
  );
 

}

function Movies(post) {
  const{name,pic,rating,disc,gender} = post;//object destructing
  return(
    <div className="movie">
    
       <div className="moviebox"> <img className="Movie-img" id="img" src={pic} alt={name}></img>
       <h5 className="moviebox" >{name}{gender}{rating}</h5>
       <p className="moviebox">{disc} </p>
       <Counter/>
       </div>

       
      
      </div>

  );
}

function Counter(){
  let [like,setLike] = useState(0);
  let [dislike,setDislike] = useState(0);
  return(
    <div className="rate">
      <button className="rate" onClick={()=> setLike(like+1)}>👍{like}</button>
      <button className="rate" onClick={()=> setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}
export default App;
