import './App.css';
import { useState } from 'react';
import React from 'react';
import { MovieList } from './MovieList';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Routes, Route, Link } from "react-router-dom";
import { AddMovie } from './AddMovie';
import InfoIcon from '@mui/icons-material/Info';
import{useNavigate} from "react-router-dom"


function App() {
  const[movieList,setMovieList] = useState ([
    {
      name: "Vikram",
      poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ]);

  return(
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movie</Link></li>
        <li><Link to="/wel">AddMovie</Link></li>
      </ul>
         <Routes>
         <Route path="/movies" element={<MovieList movieList= {movieList} setMovieList={setMovieList}/>} />
       <Route path="/" element={<Home />} /> 
      <Route path="/wel" element={<AddMovie movieList= {movieList} setMovieList={setMovieList}/>} />
      <Route path="*" element={<Error />} /> 
      
      </Routes> 
    </div>
  
  );

}
function Home() {
  return (<div>
    <h1>Welcome da 😂</h1>
    </div>)
}
function Error() {
  return (<div >
    <h1 className="no-404">404 ERROR:)</h1>
    <img  className="err" src="https://www.bing.com/th/id/OGC.87bb2b84e94654e1a2efe66910814c9a?pid=1.7&rurl=https%3a%2f%2fgobarrelroll.com%2fwp-content%2fuploads%2f2018%2f09%2f404-error.gif&ehk=hEBYJM8%2fRfK17XSeZG9DgNf%2bAvyBC%2fEyf7HnHFhFtrA%3d" alt=""/>
    </div>)
}

 export function Movie({Movie , id}) {
 const styles={
  color: Movie.rating >= 8 ? "green" : "red",
 }
 const [show,setshow]=useState(true);
 const navigate =useNavigate();
  return (
  <div className="movie-container">
    <img src={Movie.poster} alt={Movie.name} className="movie-poster"/>
    <div className="movie-specs">
      <h2 className="movie-name">{Movie.name} 
      <IconButton aria-label="delete"  color="info" onClick={()=>setshow(!show)}>
      { show ?<ExpandLessIcon />: <ExpandMoreIcon />}
</IconButton>
<IconButton aria-label="delete"  color="info" onClick={()=>{navigate(`/movie/${id}`)}}>
<InfoIcon/> 
</IconButton>
{id}
</h2>
      <p  style={styles}className="movie-rating">⭐{Movie.rating}</p>
    </div>
    {show ?  <p className="movie-summary">{Movie.summary}</p>:null}
    <Counter/>
  </div>
  )
  }
function Counter(){
  let [like,setLike] = useState(0);
  let [dislike,setDislike] = useState(0);
  const likeStyles={
    color: like >=10 ?"green":"black",
  }
  const dislikeStyles={
    color: dislike >=10 ?"red":"black",
  }
  return(
    <div className="rate">
      <IconButton aria-label="delete" style={likeStyles} onClick={()=> setLike(like+1)}>
      <Badge badgeContent={like} color="success">
        👍
    </Badge>
     </IconButton>
     <IconButton aria-label="delete" style={dislikeStyles} onClick={()=> setDislike(dislike+1)}>
     <Badge badgeContent={dislike} color="warning">
     👎
    </Badge>
     </IconButton>
    </div>
  )
}
export default App;
