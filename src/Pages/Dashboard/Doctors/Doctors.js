import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loading from '../../Shared/Loading/Loading'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios('/doctors', (res) => {
            setDoctors(res.data);
            console.log(res.data);
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Loading />
    }
    return (
        <div>
            <h2>Total Doctors : {doctors.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((doctor) => (
                            <TableRow
                                key={doctor._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">{doctor._id}</TableCell>
                                <TableCell align="center"><img height='100%' width='100%' src={`data:image/png;base64,${doctor.image}`} alt="" /></TableCell>
                                <TableCell align="center">{doctor.name}</TableCell>
                                <TableCell align="center">{doctor.email}</TableCell>
                                <TableCell align="center"><Button variant='outline' color='danger' onClick={()=>alert('coming soon')}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Doctors
