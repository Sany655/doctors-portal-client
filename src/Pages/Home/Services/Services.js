import { Typography, Grid, Container } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <Typography variant='h4' sx={{ color: 'success.main' }}>OUR SERVICES</Typography>
            <Typography variant='h2' sx={{ color: 'black' }}>Service we provide</Typography>
            <Container>
                <Grid container sx={{ my: 5 }}>
                    <Grid item sm={4}>
                        <img alt='unavailable' src='./images/fluoride.png' />
                        <Typography variant='h5' sx={{ my: 2 }}>Fluoride Treatment</Typography>
                        <Typography variant='p'>Lorem Ipsum is simply dummy
                            printing and typesetting indust
                            Ipsum has been the</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <img alt='unavailable' src='./images/cavity.png' />
                        <Typography variant='h5' sx={{ my: 2 }}>Cavity Filling</Typography>
                        <Typography variant='p'>Lorem Ipsum is simply dummy
                            printing and typesetting indust
                            Ipsum has been the</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <img alt='unavailable' src='./images/whitening.png' />
                        <Typography variant='h5' sx={{ my: 2 }}>Teeth Whitening</Typography>
                        <Typography variant='p'>Lorem Ipsum is simply dummy
                            printing and typesetting indust
                            Ipsum has been the</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Services
