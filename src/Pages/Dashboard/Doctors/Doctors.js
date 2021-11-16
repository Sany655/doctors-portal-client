import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios('/doctors', (res) => {
            setDoctors(res.data);
            console.log(res.data);
        })
    }, [])
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
                                <TableCell align="center">{doctor.img}</TableCell>
                                <TableCell align="center">{doctor.name}</TableCell>
                                <TableCell align="center">{doctor.email}</TableCell>
                                <TableCell align="center">
                                    some Action
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Doctors
