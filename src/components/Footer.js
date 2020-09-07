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

}
@media only screen and (max-width: 600px) {
  .footer {
    height:5%;
  }
  .footerRow{
    padding-bottom:10%;
  }
}
*{
  font-family: 'Kufam', cursive !important;
}
*{
  border-style:solid;
  border-color:black;
}

  
`;

const Footer = () => (
 <Styles>
  <div className="footer container-fluid">
    <div className="row footerRow">
    <div className="col-lg-4 col-4">Helo</div>
    <p className="col-lg-4 col-4" >This is some content in sticky footer</p>
    <span className="col-lg-4 col-4">HI</span>
    </div>
  </div>

  </Styles>
);

export default Footer;



