import React from "react";
import styled from 'styled-components';
const Styles = styled.div`
.footer{
  margin-top: 1rem;
  padding: 1rem;
  background-color: #222;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color:#9FFFCB;
  text-align:center;
  
`;

const Footer = () => (
 <Styles>
  <div className="footer container-fluid">
    <div className="row">
    <div className="col-lg-4 col-sm-6">Helo</div>
    <p className="col-lg-4 col-sm-12">This is some content in sticky footer</p>
    <span className="col-lg-4 col-sm-6">HI</span>
    </div>
  </div>

  </Styles>
);

export default Footer;



