import React from 'react'
import "./DetailsMovie.css"
import PropTypes from "prop-types"

const DetailsMovie = ({title, poster}) => {
  return (
    <div className="details-movie-div">
        <img src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title}/>
    </div>
  )
}

DetailsMovie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string
}

export default DetailsMovie