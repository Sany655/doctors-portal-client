import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading'

const AddDoctor = () => {
    const imgRef = useRef()
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', image: null })
    function handleSubmit(e) {
        e.preventDefault()
        if (form.image) {
            setLoading(true)
            const formdata = new FormData();
            formdata.append('name', form.name);
            formdata.append('email', form.email);
            formdata.append('img', form.image);
            axios.post('/doctors', formdata).then(res => {
                if (res.data.insertedId) {
                    alert('Succesfully Added')
                }
                setForm({ name: '', email: '', image: null })
                imgRef.current = null;
            }).finally(()=>{
                setLoading(false)
            })
        }
    }
    return (
        <Paper elavation={4}>
            <h2>Add Doctor</h2>
            {loading?<Loading />:(
            <form onSubmit={handleSubmit}>
                <TextField style={{ marginBottom: '20px' }} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required type='text' label='Name' variant='standard' sx={{ mb: 2 }} />
                <br />
                <TextField style={{ marginBottom: '20px' }} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required type='email' label='Email' variant='standard' sx={{ mb: 2 }} />
                <br />
                <input ref={imgRef} style={{ marginBottom: '20px' }} required type="file" onChange={e => setForm({ ...form, image: e.target.files[0] })} />
                <br />
                <Button style={{ marginBottom: '90px' }} type='submit' variant='contained'>Submit</Button>
            </form>
            )}
        </Paper>
    )
}

export default AddDoctor
