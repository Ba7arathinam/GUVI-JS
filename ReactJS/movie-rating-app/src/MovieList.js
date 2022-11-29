import React from 'react';
import { Movie } from './App';



export function MovieList({movieList, setMovieList}) {


  return (
    <div>
    <div className="movie-list">
      {movieList.map((mov,index) => 
      (<div key={index}>
      <Movie Movie={mov} id={index}/> </div>)
      )}
    </div>
    </div>
  );
  }
  


