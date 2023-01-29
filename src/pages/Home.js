import * as React from 'react';
import {Box} from "@mui/system";
import {Button, Grid, Modal, Typography} from "@mui/material";
import Hero from '../elements/Vidéo.png';
import BullHero from '../elements/Sans titre - 1.png';
import AvisData from "../data/avisData.js";
import ArchiveData from "../data/archiveData";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import HomeStyle from "../styles/Home.module.css"
import playBtn from "../elements/play.png";


const style = HomeStyle

function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box
                flexDirection="column"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Grid container
                      alignItems='center'
                      justifyContent="center"
                      spacing={2}>
                    <Box
                        component="img"
                        alt="Bulle du hero"
                        src={BullHero}
                        sx={{
                            mr: -20,
                            maxHeight: 400,
                            maxWidth: 400,
                            objectFit: 'contain',
                            flexGrow: 1
                        }}>
                    </Box>
                    <Box>
                        <Typography color="inherit" sx={{fontSize: 100, fontWeight: '700', fontStyle: "italic"}}>
                            DISCOVER
                        </Typography>
                        <Typography color="inherit" sx={{fontSize: 128, fontWeight: '700', fontStyle: "italic"}}>
                            ECOAL
                        </Typography>
                    </Box>
                    <Button sx={{
                        position: "absolute",
                        bottom: 200,
                        '&:hover': {
                            transition: "all 0.3s ease-in-out",
                            opacity: 0.5,
                        }
                    }} onClick={handleOpen}>
                        <Box component="img" src={playBtn} sx={{
                            width: "200px",
                            height: "200px",
                            objectFit: "fit",
                        }} alt="btn play"/>
                    </Button>
                    <Modal open={open}
                           onClose={handleClose}
                           aria-labelledby="modal-modal-title"
                           aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 10,
                        }}>
                            <iframe width="1080" height="720" src="https://www.youtube.com/embed/iAiwBOJhuPs?controls=0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </Box>
                    </Modal>
                    <Box
                        component="img"
                        alt="Hero"
                        src={Hero}
                        sx={{
                            m: 2,
                            maxHeight: 800,
                            maxWidth: 1000,
                            objectFit: 'contain',
                            flexGrow: 1
                        }}>
                    </Box>

                </Grid>
                <Box>
                    <div className={style.cards}>
                        <div className={style.headerTitle}>
                            <h1>Archives from previous years</h1>
                            <div className={style.bulle}></div>
                        </div>

                        <Splide aria-label="Slider" options={
                            {
                                type: 'loop',
                                autoplay: true,
                                rewind: true,
                                width: 1400,
                                perPage: 1
                            }}>

                            {ArchiveData.map((data, index) => (
                                <SplideSlide>
                                    <div className={style.card}>
                                        <a href={"/pe/" + index}>
                                            <img src={data.img} alt={index}/>
                                        </a>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                    <div className={style.cards}>
                        <div className={style.headerTitle}>
                            <h1>some reviews from students</h1>
                            <div className={style.bulle}></div>
                        </div>
                        <Splide aria-label="Slider" options={
                            {
                                type: 'loop',
                                autoplay: true,
                                rewind: true,
                                width: 1400,
                                gap: '1rem',
                                perPage: 2,
                            }}>

                            {AvisData.map((data, index) => (
                                <SplideSlide>
                                    <div className={style.avis}>
                                        <div>
                                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                            <img src={data.picture} alt={index}/>
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div>
                                            <h2>{data.session}</h2>
                                            <p>{data.comment}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </Box>
            </Box>


        </>
    )
}

export default Home