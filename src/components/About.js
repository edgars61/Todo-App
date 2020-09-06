import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
*{
    font-family: 'Kufam', cursive !important;
  }

`;


const About = () => {
    return (
        <Styles>
        <div>
            <h1>About this project</h1>
            <p>Thi is a todo application that allows users to keep track of their items that they have to complete.</p>
        </div>
        </Styles>
    )
  }


  export default About;