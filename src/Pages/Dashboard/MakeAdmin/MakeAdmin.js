import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const MakeAdmin = () => {
    const [form, setForm] = useState({})
    const { token } = useAuth()
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios('/admin/users').then((res) => {
            setUsers(res.data)
        })
        console.log('coming soon admin sdk!');
    }, [])
    function handleSubmit(e) {
        e.preventDefault();
        makingAdmin(form);
    }

    function makingAdmin(user) {
        axios({
            method: 'put',
            url: '/users/admin',
            data: user,
            headers: { 'authorization': `Bearer ${token}` }
        }).then(res => {
            alert(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    function deleThisAccount() {
        alert('Listed for delete this user')
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit} style={{ padding: '25px' }}>
                <input value={form.value} onChange={(e) => setForm({ ...form, email: e.target.value })} required type='email' />
                <button>Make Admin</button>
            </form>
            <h2>All users here, chose wisely</h2>
            {
                users.map((user, index) => (
                    <Paper key={user.uid} elavation={3} sx={{ p: 5, m: 5 }}>
                        <img alt='user image' src={user.photoURL} />
                        <h4>{user.displayName}</h4>
                        <p>{user.email}</p>
                        <p>{user.uid}</p>

                        <Button
                            onClick={() => deleThisAccount()} variant='contained'>Delete This Account</Button>
                        <Button onClick={() => makingAdmin(user)} variant='outlined'>Make Admin</Button>
                    </Paper>
                ))
            }
        </div>
    )
}

export default MakeAdmin
