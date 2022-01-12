import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import SingleMovie from './SingleMoovie/SingleMovie'

export default function MovieDetails() {

const params = useParams()
 console.log("Params", typeof params.movie.imdbID)

 const [movie, setMovie] = useState(null)


useEffect(() => {
   
    const movieId = params.movie.imdbID
    const movieDetails = .find(movie => movie.imdbID === movieId)
    
}, [])



    return (
        <div>
            <h1>testing</h1>
        </div>
    )
}
