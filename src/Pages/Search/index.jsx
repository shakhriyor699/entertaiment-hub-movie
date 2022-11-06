import { Button, Tab, Tabs, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from 'react'

const Search = () => {
    const [type, setType] = useState(0)


    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
        },
    });



    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: '15px 0' }}>
                    <TextField
                        style={{ flex: 1, color: 'white' }}
                        className='searchBox'
                        label="Search"
                        variant="filled"
                    // onChange={(e) => setType(e.target.value)}
                    />
                    <Button variant='countained' style={{ marginLeft: 10 }}>
                        <SearchIcon />
                    </Button>
                </div>
                <Tabs value={type} indicatorColor='primary' textColor='primary'>
                    <Tab style={{ width: '50%' }} label='Search Movies' />
                    <Tab style={{ width: '50%' }} label='Search TV Series' />
                </Tabs>
            </ThemeProvider>


        </div>
    )
}

export default Search