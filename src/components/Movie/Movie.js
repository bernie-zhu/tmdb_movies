import React from 'react'
import PropTypes from "prop-types"

const Movie = ({title, poster}) => {
  return (
    <div className="movie-div">
        <img src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title}/>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string
}

export default Movie