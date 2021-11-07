import { Container } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography, Paper, Grid } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const UnderBanner = () => {
    return (
        <Container sx={{ mt: -10 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }} spacing='40'>
                <Grid item md={4}>
                    <Paper elavation='3' sx={{ bgcolor: 'success.main', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, py: 1 }}>
                        <AccessTimeIcon sx={{ fontSize: 60, mr:2 }} />
                        <Box>
                            <Typography variant='h5'>Opening Hours</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper elavation='3' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, py: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 60, mr:2 }} />
                        <Box>
                            <Typography variant='h5'>Visit Our Location</Typography>
                            <Typography variant='body1'>Agrabad City Mall, Uganda</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper elavation='3' sx={{ bgcolor: 'success.main', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, py: 1 }}>
                        <CallIcon sx={{ fontSize: 60, mr:2 }} />
                        <Box>
                            <Typography variant='h5'>Contact Us Now</Typography>
                            <Typography variant='body1'>+88018111111</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UnderBanner
