import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
    }
})

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
    const classes = useStyles();

    return (
        <BottomNavigation
            sx={{ backgroundColor: '#2d313a' }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction style={{ color: 'white' }} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="TV Series" icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}