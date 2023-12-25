import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './Similar.css'
import Cards from "../card/card"



const Similar = () => {

    const [popular, setPopular] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getData();
    },[id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setPopular(data.results))
    }

  return (
    <>
    <div className='similar_main'>
        <h1>Similar Movies</h1>
        {
             popular.map(movie => (
                <Cards movie={movie} />
             ))
        }
    </div>
    </>
  )
}

export default Similar