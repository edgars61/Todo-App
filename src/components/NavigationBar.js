import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Route } from "react-router-dom"
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { ContactForm } from './ContactForm';
const Styles = styled.div`
  .navbar { 
    background-color: #222; 
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { 
      color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">MyTodosApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link><NavLink to="/About">About</NavLink></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link><NavLink to="Todos">Todos</NavLink></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><NavLink to="Contact">Contact</NavLink></Nav.Link></Nav.Item>
          
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)