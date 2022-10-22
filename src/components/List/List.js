import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SearchMovie from "../Movie/SearchMovie"
import Filters from "./Filters"
import "./List.css"

const List = () => {
  const [movies, setMovies] = useState([])
  const [searchStr, setSearchStr] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [ascending, setAscending] = useState("ascending")

  const getMovies = async () => {
    for (let i = 1; i < 100; i++) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=61eb3247777aa2291a66578eebdf7983&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_watch_monetization_types=flatrate&vote_count.gte=10`);
      for (let j = 0; j < 20; j++) {
        setMovies(movies => [...movies, data.results[j]])
      }
    }
  }
  //console.log(movies)

  const moviesRatingAscending = [...movies].sort((a, b) => a.vote_average - b.vote_average)
  const moviesRatingDescending = [...movies].sort((a, b) => b.vote_average - a.vote_average)
  const moviesTitleAscending = [...movies].sort((a, b) => a.title > b.title ? 1 : -1)
  const moviesTitleDescending = [...movies].sort((a, b) => a.title > b.title ? -1 : 1)
  //console.log("here", moviesRatingAscending)
  //console.log("here", moviesTitleDescending)

  useEffect(() => {
    getMovies();
    //console.log("here")
  }, [])

  //console.log("here", typeFilter, ascending)

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={event => {setSearchStr(event.target.value)}} />
      <Filters typeFilter={typeFilter} setTypeFilter={setTypeFilter} ascending={ascending} setAscending={setAscending}/>
      
        {(() => {
          //console.log("made it")
          if (typeFilter === "" || typeFilter == null) {
            return (
              movies.filter((movie) => {
                if (searchStr === "") {
                  return movie
                } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
                  return movie
                } else {
                  return null;
                }
              }).map((movie) => {
                return <a key={movie.id} href={`/details/${movie.id}`} className="link-wrapper">
                  <div key={movie.id} className="search-result"> 
                      <SearchMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <div className="search-result-text-div">
                        <p className="search-result-text">{movie.title}</p> 
                        <p className="search-result-text">Rating: {movie.vote_average}</p>
                        <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                      </div>
                  </div>
                </a>
              })
            )
          } else if (typeFilter === "title" && ascending === "ascending") {
            return (
              moviesTitleAscending.filter((movie) => {
                if (searchStr === "") {
                  return movie
                } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
                  return movie
                } else {
                  return null;
                }
              }).map((movie) => {
                return <a key={movie.id} href={`/details/${movie.id}`} className="link-wrapper">
                  <div key={movie.id} className="search-result"> 
                      <SearchMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <div className="search-result-text-div">
                        <p className="search-result-text">{movie.title}</p> 
                        <p className="search-result-text">Rating: {movie.vote_average}</p>
                        <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                      </div>
                  </div>
                </a>
              })
            )
          } else if (typeFilter === "title" && ascending === "descending") {
            return (
              moviesTitleDescending.filter((movie) => {
                if (searchStr === "") {
                  return movie
                } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
                  return movie
                } else {
                  return null;
                }
              }).map((movie) => {
                return <a key={movie.id} href={`/details/${movie.id}`} className="link-wrapper">
                  <div key={movie.id} className="search-result"> 
                      <SearchMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <div className="search-result-text-div">
                        <p className="search-result-text">{movie.title}</p> 
                        <p className="search-result-text">Rating: {movie.vote_average}</p>
                        <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                      </div>
                  </div>
                </a>
              })
            )
          } else if (typeFilter === "rating" && ascending === "ascending") {
            return (
              moviesRatingAscending.filter((movie) => {
                if (searchStr === "") {
                  return movie
                } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
                  return movie
                } else {
                  return null;
                }
              }).map((movie) => {
                return <a key={movie.id} href={`/details/${movie.id}`} className="link-wrapper">
                  <div key={movie.id} className="search-result"> 
                      <SearchMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <div className="search-result-text-div">
                        <p className="search-result-text">{movie.title}</p> 
                        <p className="search-result-text">Rating: {movie.vote_average}</p>
                        <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                      </div>
                  </div>
                </a>
              })
            )
          } else if (typeFilter === "rating" && ascending === "descending") {
            return (
              moviesRatingDescending.filter((movie) => {
                if (searchStr === "") {
                  return movie
                } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
                  return movie
                } else {
                  return null;
                }
              }).map((movie) => {
                return <a key={movie.id} href={`/details/${movie.id}`} className="link-wrapper">
                  <div key={movie.id} className="search-result"> 
                      <SearchMovie key={movie.id} title={movie.title || movie.name} poster={movie.poster_path}/>
                      <div className="search-result-text-div">
                        <p className="search-result-text">{movie.title}</p> 
                        <p className="search-result-text">Rating: {movie.vote_average}</p>
                        <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                      </div>
                  </div>
                </a>
              })
            )
          }
        })()}
      
      
        {/* {
          movies.filter((movie) => {
            if (searchStr == "") {
              return movie
            } else if (movie.title.toLowerCase().includes(searchStr.toLowerCase())) {
              return movie
            }
          }).map((movie) => {
            return <div key={movie.id} className="search-result"> 
                <SearchMovie key={movie.id} id={movie.id} title={movie.title || movie.name} date={movie.release_date || movie.first_air_date} media_type={movie.media_type} rating={movie.vote_average} poster={movie.poster_path}/>
                <div className="search-result-text-div">
                  <p className="search-result-text">{movie.title}</p> 
                  <p className="search-result-text">Rating: {movie.vote_average}</p>
                  <p className="sesarch-result-text">Release Date: {movie.release_date}</p>
                </div>
            </div>
        })
      } */}
    </div>
  )
}

export default List