import { Grid, Typography, Button, Container } from '@mui/material'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <Container maxWidth="xl" >
                <Grid container sx={{ backgroundImage: 'url("./images/bg.png")', backgroundPosition: 'left', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <Grid item sm={6} sx={{ height: '100%', mt: 10, px: 10 }}>
                        <Typography variant="h3" sx={{ my: 2 }}>Your New Smile Start Here</Typography>
                        <Typography sx={{ my: 2 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde temporibus voluptatum quod ipsam totam reprehenderit commodi cupiditate repellendus illo saepe deleniti nihil ab fugit labore, nulla beatae officia, ipsa quia.</Typography>
                        <Button variant="contained" color="success">Get Appontment</Button>
                    </Grid>
                    <Grid item sm={6}>
                        <img src="./images/chair.png" width='100%' alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner
