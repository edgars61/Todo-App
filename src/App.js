import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {ContactForm} from './components/ContactForm'
import Todos from './components/Todos';

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';


import styled from 'styled-components';


class App extends Component{
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play video games'}
    ]
  }
   render (){return( <React.Fragment>
    <BrowserRouter>
    <Router>
      <NavigationBar />
      <Route path="/Contact" component={ContactForm}/>
      <Route path="/Todos" component={Todos}/>
    </Router>
    </BrowserRouter>
    
  </React.Fragment>
  
   )
   }
};




export default App;
