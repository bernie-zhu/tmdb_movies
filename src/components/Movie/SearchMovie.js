import React from 'react'
import "./SearchMovie.css"
import PropTypes from "prop-types"

const SearchMovie = ({title, poster}) => {
  return (
    <div className="search-movie-div">
        <img src={`http://image.tmdb.org/t/p/w200${poster}`} alt={title}/>
    </div>
  )
}

SearchMovie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string
}

export default SearchMovie