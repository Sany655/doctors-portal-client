import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Loading from '../../Shared/Loading/Loading';
import { Box } from '@mui/system';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios('/doctors').then((res) => {
            setDoctors(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography variant='h2'>Doctors</Typography>
            {loading ? <Loading /> : (
                <Grid container spacing={2}>
                    {
                        doctors.map((doctor, index) => (
                            <Grid item key={index} sm={8} lg={4}>
                                <Box>
                                    <img height='300px' width='100%' src={`data:image/png;base64,${doctor.image}`} alt="" />
                                    <h4>{doctor.name}</h4>
                                    <p>{doctor.email}</p>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            )}
        </Container>
    )
    if (doctors.length==0) {
        return '';
    }
}

export default Doctors
