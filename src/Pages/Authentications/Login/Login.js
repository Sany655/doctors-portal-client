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
const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/';
    const { signinUsingGoogle, user, login, error, setError, loading, setLoading } = useAuth()
    const [form, setForm] = React.useState({})

    if (user.uid) {
        history.push(redirect_url)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        login(form.email, form.password)
    }

    const inputSettings = (e) => {
        const inputType = e.target.type;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'password':
                setForm({ ...form, password: inputValue });
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
                <Grid item sm={6} sx={{ h: '100%', textAlign: 'center' }}>
                    <Paper elavation='3' sx={{ p: 10, my: 5 }}>
                        <Typography sx={{ my: 1 }} variant='h3'>Login</Typography>
                        {loading ? <CircularProgress /> : <form onSubmit={handleLogin}>
                            <TextField onChange={inputSettings} required name='email' sx={{ my: 2 }} fullWidth id="outlined-basic" label="Email" type='email' variant="standard" />
                            <TextField onChange={inputSettings} required name='password' sx={{ my: 2 }} fullWidth id="outlined-basic" label="Password" type='password' variant="standard" />
                            <Button type='submit' sx={{ my: 1 }} variant='contained'>Login</Button>
                        </form>}
                        <Typography sx={{ my: 1 }} variant='body1'>Or</Typography>
                        <Button sx={{ my: 1 }} variant='outlined' onClick={signinUsingGoogle}>Connect With Google <GoogleIcon sx={{ mx: 2 }} /></Button>
                        <Typography sx={{ my: 1 }} variant='body1'>Haven't an account? <Link to='/register' >Register</Link></Typography>
                        {
                            error ? <Typography sx={{ my: 1 }} color='red' variant='body1'>{error}</Typography> : ''
                        }
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <img src='./images/login.png' width='80%' alt='Stay with us' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
