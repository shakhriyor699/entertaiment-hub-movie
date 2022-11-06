import { Chip } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Genres = ({ type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    }

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        )
        setGenres([...genres, genre])
        setPage(1)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }
    }, [])

    return (
        <div style={{ padding: '6px 0' }}>

            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    clickable
                    color="primary"
                    size='small'
                    key={genre.id}
                    onDelete={() => handleRemove(genre)}
                />
            ))}

            {
                genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        clickable
                        color="secondary"
                        size='small'
                        key={genre.id}
                        onClick={() => handleAdd(genre)}
                    />
                ))
            }
        </div>
    )
}

export default Genres