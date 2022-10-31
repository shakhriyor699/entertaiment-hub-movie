import { Pagination, ThemeProvider } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme';
import React from 'react'

import './CustomPagination.css';


let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
})

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='pagination'>
            <ThemeProvider theme={theme}>
                <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination