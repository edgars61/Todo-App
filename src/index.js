import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,} from 'redux'
import MainReducer from './reducers/MainReducer'
import {NavigationBar} from './components/NavigationBar'
import App from './App';
import { BrowserRouter as Router, Route,BrowserRouter } from "react-router-dom";
import ContactForm from './components/ContactForm'
import About from './components/About';




const store = createStore(MainReducer)

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <Router>
  <NavigationBar />
  <Route path="/Contact" component={ContactForm}/>
  <Route path="/Todos" component={App}/>
  <Route exact strict path ="/" component={About}/>
  </Router>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));
