import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import {NavigationBar} from './components/NavigationBar'
import App from './App';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import ContactForm from './components/ContactForm'
import About from './components/About';
import Footer from './components/Footer';



const store = createStore(MainReducer)

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <Router>
  <NavigationBar />
  <Route path="/Contact" component={ContactForm}/>
  <Route path="/Todos" component={App}/>
  <Route path="/About" component={About}/>
  </Router>
  </BrowserRouter>
  <Footer/>
  </Provider>, document.getElementById('root'));
