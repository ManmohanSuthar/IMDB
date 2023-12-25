import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
          <div className='hide'>
          <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Populer</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rating</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
          </div>
        </div>
    </div>
  )
}

export default Header