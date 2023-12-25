import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "./Youtube.css"


const Youtube = () => {

    const [video, setVideo] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getData();
    },[id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setVideo(data.results))
    }

  return (
    <>
        <div className='ytmain'>
                <h1>Official video</h1>
            <div className='ytvideo'>
            {
                video.slice(0,4).map(ytvideo => (
                    <iframe width="250" height="200"
                             src={`https://www.youtube.com/embed/${ytvideo.key}?si=N4W-pQSJEQps_yCM`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                ))
            }
            </div>
        </div>
    </>
  )
}

export default Youtube