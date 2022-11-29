import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({movieList, setMovieList}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const form = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList, newMovie]);
  };
    return (
      <div className="add-movie-form">
        <TextField id="standard-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField id="standard-basic" label="poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        <TextField id="standard-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        <TextField id="standard-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        <Button variant="contained" onClick={form}>Add Movie</Button>
      </div>
    );
  }

