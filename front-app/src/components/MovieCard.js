import React from 'react'
import movieCardCss from '../CSS/movieCard.css'

const MovieCard = ({movieItem}) => {
  return (
    <div className='movie-card'>
      <div className='sep-card pic-movie'>
        <p id='pic'>hello from world</p>
      </div>
      <div className='sep-card details-movie'>
        <p id = 'movie-name'>{movieItem.source['name']}</p>
        <p id='movie-title'>{movieItem.title}</p>
        <span id='movie-date'>{movieItem.publishedAt}</span>
      </div>  
    </div>
  )
}

export default MovieCard
