import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const Register = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/';
    const { signinUsingGoogle, user, register, error, setError, loading, setLoading } = useAuth()
    const [form, setForm] = React.useState({})

    if (user.uid) {
        history.push(redirect_url)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password2 !== form.password) {
            setError('Password not matched, retype both passwords')
        }
        else {
            setLoading(true)
            register(form.email, form.password, form.name)
        }
    }

    const inputSettings = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'name':
                setForm({ ...form, name: inputValue });
                break;
            case 'password':
                setForm({ ...form, password: inputValue });
                break;
            case 'password2':
                setForm({ ...form, password2: inputValue });
                break;
            case 'email':
                setForm({ ...form, email: inputValue });
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        setError('')
    })

    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item sm={6}>
                    <img src='./images/login.png' width='80%' alt='Stay with us' />
                </Grid>
                <Grid item sm={6} sx={{ h: '100%', textAlign: 'center' }}>
                    <Paper elavation='3' sx={{ p: 10, my: 5 }}>
                        <Typography sx={{ my: 1 }} variant='h3'>Register</Typography>
                        {loading ? <CircularProgress /> : <form onSubmit={handleSubmit}>
                            <TextField onChange={inputSettings} required name='name' sx={{ my: 2 }} fullWidth id="name" label="Full Name" type='text' variant="standard" />
                            <TextField onChange={inputSettings} required name='email' sx={{ my: 2 }} fullWidth id="email" label="Email" type='email' variant="standard" />
                            <TextField onChange={inputSettings} required name='password' sx={{ my: 2 }} fullWidth id="password" label="Password" type='password' variant="standard" />
                            <TextField onChange={inputSettings} required name='password2' sx={{ my: 2 }} fullWidth id="password2" label="Retype Password" type='password' variant="standard" />
                            <Button type='submit' sx={{ my: 1 }} variant='contained'>Register</Button>
                            {
                                error ? <Typography sx={{ my: 1 }} color='red' variant='body1'>{error}</Typography> : ''
                            }
                        </form>}
                        <Typography sx={{ my: 1 }} variant='body1'>Or</Typography>
                        <Button sx={{ my: 1 }} variant='outlined' onClick={signinUsingGoogle}>Connect With Google <GoogleIcon sx={{ mx: 2 }} /></Button>
                        <Typography sx={{ my: 1 }} variant='body1'>Already have an account? <Link to='/login' >Login</Link></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register
