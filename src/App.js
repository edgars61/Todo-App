import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {ContactForm} from './components/ContactForm'

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';


import styled from 'styled-components';


function App(){
   return( <React.Fragment>
    <BrowserRouter>
    <Router>
      <NavigationBar />
      <Route path="/Contact" component={ContactForm}/>
    </Router>
    </BrowserRouter>
  </React.Fragment>
  
   )
};




export default App;
