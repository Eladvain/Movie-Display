import React, { useEffect, useState } from 'react'
import movieListCss from '../CSS/movieList.css'
import MovieCard from './MovieCard';

const MoviesList = () => {

  const [movieList, setMovieList] = useState([]);

  async function getMovies(){
    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
    const jsonResponse = await response.json();
    // console.log("movie_list = "+JSON.stringify(jsonResponse));
    const articles = jsonResponse.articles;
    // console.log("articles = "+JSON.stringify(articles))
    setMovieList([...articles]);
    console.log("moviesList = "+JSON.stringify(movieList))

  }

  useEffect( () => {
    console.log("in use effevt")
    getMovies();
  }, [])

  return (
    <div className='list-card'>
      {movieList.map((movie)=>{
        console.log("movie = "+JSON.stringify(movie))
        return <MovieCard movieItem = {movie} />
      })}
    </div>
  )
}

export default MoviesList
