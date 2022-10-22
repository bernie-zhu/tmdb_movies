import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Movie from "../Movie/Movie"
import MoviePagination from "../Pagination/MoviePagination"
import Genres from "../Genres/Genres"
import "./Gallery.css"

const Gallery = () => {

    const [page, setPage] = useState([1])
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [allGenres, setAllGenres] = useState([])

    const getMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=61eb3247777aa2291a66578eebdf7983&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`);

        setMovies(data.results)
        //console.log(data)
    }

    useEffect(() => {
      getMovies()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, genres])
    

  return (
    <div>
      <Genres allGenres={allGenres} setAllGenres={setAllGenres} genres={genres} setGenres={setGenres} />
        <div className="displayed-movies">
            {
                movies.map((movie) => 
                    <a key={movie.id} href={`details/${movie.id}`}>
                      <Movie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <p className="movie-title">{movie.title}</p>
                    </a>
                )
            }
        </div>
        <MoviePagination setPage={setPage}/>
    </div>
  )
}

export default Gallery