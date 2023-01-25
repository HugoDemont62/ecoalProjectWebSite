import * as React from 'react';
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import Hero from '../elements/hero.svg';
import BullHero from '../elements/bullHero.svg';
import scroll from '../elements/scroll.svg';
import AvisData from "../data/avisData.js";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import HomeStyle from "../styles/Home.module.css"

const style = HomeStyle

function Home() {
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
                            maxWidth: 1000,
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
                    <Box
                        component="img"
                        alt="Hero"
                        src={Hero}
                        sx={{
                            maxHeight: 1000,
                            maxWidth: 1000,
                            flexGrow: 1
                        }}>
                    </Box>

                </Grid>
                <Box
                    component="img"
                    alt="scroll"
                    src={scroll}
                    sx={{
                        mt: -22,
                        maxHeight: 150,
                        maxWidth: 1000,
                        flexGrow: 1
                    }}>
                </Box>
                <Box>
                    {/* Make a slider with the avis and Splide react with 3 avis per 3 avis and have all informations, date, picture avis and comment*/}
                    <div className={style.cards}>

                        <Splide aria-label="Slider" options={
                            {
                                type   : 'loop',
                                autoplay: true,
                                rewind: true,
                                width: 1300,
                                gap: '1rem'
                            }}>
                            {AvisData.map((data, index) => (
                                <SplideSlide>
                                    <div className={style.card}>
                                        <img src={data.picture} alt={index}/>
                                        <h1>{data.avis}</h1>
                                        <p>{data.comment}</p>
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