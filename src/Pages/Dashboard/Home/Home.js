import React from 'react'
import Grid from '@mui/material/Grid';
import Calender from '../../Appoinments/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const Home = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <Grid container spacing='2'>
            <Grid item md={6}>
                <Calender value={value} setValue={setValue} />
            </Grid>
            <Grid item md={6}>
                <Appointments value={value.toDateString()} />
            </Grid>
        </Grid>
    )
}

export default Home
