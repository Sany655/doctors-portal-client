import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../src/hooks/useAuth'

const AdminRoute = ({ children, ...rest }) => {
    const { admin, adminLoading } = useAuth();

    if (adminLoading) {
        return <div style={{height:'80vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress color="inherit"/></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (
                admin ? children
                    : <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default AdminRoute;