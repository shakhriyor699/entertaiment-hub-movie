import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Movies = () => {
    const [page, setPage] = useState(1)

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        
        console.log(data);
    }

    useEffect(() => {
        fetchMovies()
    }, [page])


    return (
        <div>
            <span className='pageTitle'>Movies</span>

        </div>
    )
}

export default Movies