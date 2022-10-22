import React from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        <Link to="/" className="nav-text">Gallery</Link>
        <Link to="/list" className="nav-text">List</Link>
    </div>
  )
}

export default Navigation