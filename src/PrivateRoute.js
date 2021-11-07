import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../src/hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div style={{height:'80vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress color="inherit"/></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (
                user.uid ? children
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default PrivateRoute;