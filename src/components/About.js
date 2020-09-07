import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
*{
    font-family: 'Kufam', cursive !important;
  }
  .about{
    margin-top:10%;
    text-align:center;
  }

`;


const About = () => {
    return (
        <Styles>
        <div class="about">
            <h1>About this project</h1>
            <p>This is a todo application that allows users to keep track of their items that they have to complete.</p>
            <p>Created with React, React Redux, React Router, Bootstrap 4, React Bootstrap and Styled Components</p>
            
            
        </div>
        </Styles>
    )
  }


  export default About;