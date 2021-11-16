import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Home from '../Home/Home';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import Doctors from '../Doctors/Doctors';

const drawerWidth = 240;

const Dashboard = (props) => {
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerLinks = [
        { name: 'Landing Page', to: '/', icon: <HomeIcon /> },
        { name: 'Dashboard', to: `${url}`, icon: <DashboardIcon /> }
    ]

    if (admin) {
        drawerLinks.push(
            { name: 'Add Doctor', to: `${url}/addDoctor`, icon: <GroupAddIcon /> },
            { name: 'Doctors', to: `${url}/doctors`, icon: <PeopleAltIcon /> },
            { name: 'Make Admin', to: `${url}/makeAdmin`, icon: <AdminPanelSettingsIcon /> }
        )
    }

    drawerLinks.push({ name: 'Logout', to: '', icon: <LogoutIcon />, disabled: true })

    const drawer = (
        <div>
            <Toolbar><Typography variant='h6'>{user.name}</Typography></Toolbar>
            <Divider />
            <List>
                {drawerLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        onClick={(e) => {
                            if (link.disabled) {
                                e.preventDefault()
                                logout()
                            }
                        }}
                        exact
                        to={link.to}
                        style={{ textDecoration: 'none', color: 'black' }}
                        activeStyle={{ color: 'blue' }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.name} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, textAlign: 'center' }}
            >
                {/* <Toolbar /> */}
                <Switch>
                    <Route exact path={path}>
                        <Home />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor />
                    </AdminRoute>
                    <AdminRoute path={`${path}/doctors`}>
                        <Doctors />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

export default Dashboard
