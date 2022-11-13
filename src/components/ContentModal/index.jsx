import * as React from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { img_300, unavailable } from '../../config/config';
import { YouTube } from '@mui/icons-material';

import './ContentModal.css';
import Gallery from '../Carousel';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // width: '100%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#282c34',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ContentModal({ children, media_type, id }) {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = useState([]);
    const [video, setVideo] = useState([]);


    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };


    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setContent(data);
    }
    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);


        setVideo(data.results[0]?.key);
    }


    useEffect(() => {
        fetchData()
        fetchVideo()
    })

    return (
        <div>
            <Button className='media' onClick={handleOpen}>{children}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='contentModal'>
                            <img className='ContentModal__landscape' src={content.backdrop_path ? `${img_300}/${content.poster_path}` : unavailable} alt="" />
                            <div className="ContentModal__about">
                                <span className='ContentModal__title'>
                                    {content.name || content.title} ({(content.first_air_date || content.release_date || "-----").substring(0, 4)})
                                </span>
                                {content.tagline && (
                                    <i className='tagline'>{content.tagline}</i>
                                )}
                                <span className='ContentModal__description'>
                                    {content.overview}
                                </span>
                                <div>
                                    <Gallery media_type={media_type} id={id} />
                                </div>
                                <Button variant="contained" color="secondary" startIcon={<YouTube />} onClick={() => window.open(`https://youtube.com/watch?v=${video}`, "_blank")}>Watch the Trailer</Button>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}