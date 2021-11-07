import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const BookAppontment = ({ appointment }) => {
    const { user } = useAuth()
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = React.useState({})
    const handleOpen = () => {
        // booking info settings here
        const newObj = Object.assign(appointment, user);
        setForm(newObj);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid gray',
        boxShadow: 24,
        p: 4,
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/appointments',form).then((res)=>{
            if (res.data.insertedId) {
                alert('Added your appontment')
                handleClose()
            }
        })
    }
    return (
        <div>
            <Button onClick={handleOpen} variant='contained' color='success'>Book Now</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mb: 1, textAlign: 'center' }}>
                            {form.title}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField disabled value={form.time} sx={{ my: 1 }} fullWidth id="time" label="Time" variant="outlined" />
                            <TextField defaultValue={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }) }} sx={{ my: 1 }} fullWidth id="name" label="Your Name" variant="outlined" />
                            <TextField defaultValue={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} sx={{ my: 1 }} fullWidth id="email" label="Your Email" variant="outlined" />
                            <TextField defaultValue={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }) }} sx={{ my: 1 }} fullWidth id="phone" label="Your Phone Number" variant="outlined" />
                            <TextField disabled defaultValue={form.date} sx={{ my: 1 }} fullWidth id="date" label="Date" variant="outlined" />
                            <Button type='submit' sx={{ my: 1 }} variant='contained' fullWidth>Book</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default BookAppontment
