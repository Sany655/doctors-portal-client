import React from 'react'
import Calender from '../Calender/Calender'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Banner = ({value,setValue}) => {
    return (
        <Container maxWidth="xl" sx={{ backgroundImage: 'url("./images/bg.png")', backgroundPosition: 'left', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <Grid container>
                <Grid item sm={6} sx={{ height: '100%', mt: 10, px: 10 }}>
                    <Paper elavation='3'>
                        <Calender setValue={setValue} value={value}/>
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <img src="./images/chair.png" width='100%' alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Banner
