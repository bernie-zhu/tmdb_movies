import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import PropTypes from "prop-types"
import "./Genres.css"

const Genres = ({allGenres, setAllGenres, genres, setGenres}) => {

    const getAllGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=61eb3247777aa2291a66578eebdf7983&language=en-US`);
    
        setAllGenres(data.genres)
        //console.log("here", allGenres)
    }

    const genreChange = (e, updatedGenres) => {
        setGenres(updatedGenres)
    }

    //console.log(genres)

    useEffect(() => {
      getAllGenres()
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (    
        <div className="genre-div">
            <ToggleButtonGroup value={genres} onChange={genreChange} sx={{display: 'flex', flexWrap: "wrap", justifyContent: "center"}}>
                {allGenres && allGenres.map((genre) => (
                    <ToggleButton value={genre.id} key={genre.id} sx={{color: "#000", backgroundColor: "#476A6F", mr: 1, mb : 1, borderRadius: 1}}>
                        {genre.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

Genres.propTypes = {
    allGenres: PropTypes.array,
    setAllGenres: PropTypes.func,
    genres: PropTypes.array,
    setGenres: PropTypes.func
}

export default Genres