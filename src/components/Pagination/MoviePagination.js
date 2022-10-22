import React from 'react'
import { Pagination } from "@mui/material"
import "./MoviePagination.css"
import PropTypes from "prop-types"

const MoviePagination = ({setPage, pages}) => {

  const pageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }

  return (
    <div className="pagination">
      <Pagination count={pages} variant="outlined" onChange={(page) => pageChange(page.target.textContent)} />
    </div>
  )
}

MoviePagination.propTypes = {
  pages: PropTypes.number,
  setPage: PropTypes.func
}

MoviePagination.defaultProps = {
  pages: 500
}

export default MoviePagination