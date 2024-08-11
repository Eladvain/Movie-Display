import React from 'react'
import movieCardCss from '../CSS/movieCard.css'

const MovieCard = ({movieItem}) => {
  return (
    <div className='movie-card'>
      <div className='sep-card pic-movie'>
        <img id='pic' src={movieItem.urlToImage} alt='png'></img>
      </div>
      <div className='sep-card details-movie'>
        <div className='headline-div'>
          <div className='name-div'>
            <h1 id = 'movie-name'>{movieItem.source['name']}</h1>
          </div>
          <div className='bookmarked-div'>
            <button id = 'bookmarked-btn'>bookmarked</button>
          </div>
        </div>    
        <div className='title-div'>
          <p id='movie-title'>{movieItem.title}</p>
        </div>
        <div className='date-div'>
          <p id='movie-date'>{movieItem.publishedAt}</p>
        </div>  
      </div>  
    </div>
  )
}

export default MovieCard
