import { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const apiKey = "c5a9bddf";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    //make fetch response and store response
    const res = await fetch(`${url}&t=${searchTerm}`);
    //Parsing JSON res into JS obj
    const data = await res.json();
    console.log(data);
    // setting Movie state to recieved data
    setMovie(data);
  };

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
