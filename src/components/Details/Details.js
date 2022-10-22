import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import "./Details.css"
import DetailsMovie from "../Movie/DetailsMovie"

const Details = () => {
  const { passedId } = useParams()

  const [movie, setMovie] = useState()
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    for (let i = 1; i < 10; i++) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=61eb3247777aa2291a66578eebdf7983&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_watch_monetization_types=flatrate&vote_count.gte=10`);
      for (let j = 0; j < 20; j++) {
        //movies.push(data.results[j])
        setMovies(movies => [...movies, data.results[j]])
      }
    }
  }

  const getDetails = async () => {
    //console.log(id)
    //console.log("here")
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${passedId}?api_key=61eb3247777aa2291a66578eebdf7983&language=en-US`)
    //console.log("here", data)
    setMovie(data)
    //console.log("here2", movie)
  }

  const handlePageChangeForward = (e) => {
    for (let i = 0; i < movies.length; i++) {
      //console.log("for loop id:", movies[i].id)
      //console.log("passed id: ", passedId)
      // eslint-disable-next-line
      if (movies[i].id == passedId && i < movies.length) {
        //console.log("here", movies[i].id)
        const nextId = movies.at(i + 1).id
        window.location.href = "details/" + nextId
      }
    }
    // if (index < allMovies.length) {
    //   const nextId = allMovies.at(index++ + 1)
    //   window.location.href="/details/" + nextId
    // }
  }

  const handlePageChangeBackward = (e) => {
    for (let i = 0; i < movies.length; i++) {
      // eslint-disable-next-line
      if (movies[i].id == passedId && i > 0) {
        const prevId = movies.at(i - 1).id
        window.location.href = "/details/" + prevId
      }
    }
    // if (index > 0) {
    //   const prevId = allMovies.at(index-- - 1)
    //   window.location.href="/details/" + prevId
    // }
  }

  useEffect(() => {
    getDetails()
    getMovies()
    //console.log(movies)
    //setMovie(movies[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //const movie = movies[0]
  //console.log(movie)
  //console.log(movies[0])

  return (
    <div className="details-div">
      <div className="movie-details">
        <ArrowBackIosIcon sx={{ ml: 2, mt: 2, mr: 72}} onClick={handlePageChangeBackward}/>
        <ArrowForwardIosIcon onClick={handlePageChangeForward}/>
        <div className="movie-components">
          {(() => {
            if (movie) {
              return (
                <div className="movie-components">
                  <DetailsMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                  <div className="movie-text">
                    <h3> {movie.title} </h3>
                    <h4> Release Date: {movie.release_date} </h4>
                    <h4> Rating: {movie.vote_average} </h4>
                    <p> {movie.overview} </p>
                  </div>
                </div>
              )
            }
          })()}
        </div>
      </div>
    </div>
  )
}

export default Details