import React from 'react'
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import "./Filters.css"
import PropTypes from "prop-types"

const Filters = ({typeFilter, setTypeFilter, ascending, setAscending}) => {

    const handleFilter = (e, updatedFilter) => {
        setTypeFilter(updatedFilter)
    }

    const handleAscending = (e, updatedAscending) => {
        if (updatedAscending !== null) {
            setAscending(updatedAscending)
        }
    }

    //console.log(typeFilter)
    //console.log(ascending)

    return (
        <div className="filters-div">
            <ToggleButtonGroup value={typeFilter} exclusive onChange={handleFilter} sx={{mr: 4}}>
                <ToggleButton value="title">
                    Title
                </ToggleButton>
                <ToggleButton value="rating">
                    Rating
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup value={ascending} exclusive onChange={handleAscending}>
                <ToggleButton value="ascending">
                    Ascending
                </ToggleButton>
                <ToggleButton value="descending">
                    Descending
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

Filters.propTypes = {
    typeFilter: PropTypes.string,
    setTypeFilter: PropTypes.func,
    ascending: PropTypes.string,
    setAscending: PropTypes.func
}

export default Filters