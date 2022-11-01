import React from 'react'
import { Pagination } from '@mui/material'
import './CustomPagination.css';





const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='pagination'>
                <Pagination  color="primary" onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} hideNextButton hidePrevButton/>

        </div>
    )
}

export default CustomPagination