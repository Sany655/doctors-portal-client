import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import React, { useEffect } from 'react'
import BookAppontment from '../BookAppontment/BookAppontment'

const AvailableAppoinments = ({ value, setValue }) => {
    const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('./data.JSON').then((res) => res.json()).then((data) => { setData(data) })
    }, [])
    return (
        <div style={{ marginTop: 50, marginBottom: 50 }}>
            <Typography variant='h5' sx={{ textAlign:'center',my: 5 }}>Available Appointments on {value.toDateString()}</Typography>
            <Container>
                <Grid container>
                    {
                        data.map((d, i) => (
                            <Grid md={4} item key={i}>
                                <Paper elavation='3' sx={{ p:3, m:2 }}>
                                    <Typography variant='h4' color='success.main'>{d.title}</Typography>
                                    <Typography sx={{ my: 1 }} variant='p'>Time : {d.time}</Typography>
                                    <Typography sx={{ my: 1 }} variant='body1'>Available Space : {d.space}</Typography>
                                    <BookAppontment appointment={{...d,date:value.toLocaleDateString()}}/>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default AvailableAppoinments
