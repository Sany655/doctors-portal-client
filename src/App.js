import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointments from './Pages/Appoinments/Appointments/Appointments';
import Login from './Pages/Authentications/Login/Login';
import Register from './Pages/Authentications/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute';
import AuthProvider from './context/AuthProvider';
import axios from 'axios';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

// axios.defaults.baseURL = 'https://arcane-sea-19571.herokuapp.com/'
axios.defaults.baseURL = 'http://localhost:5000/'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appointments">
            <Appointments />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}


export default App;
