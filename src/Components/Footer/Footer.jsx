import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Footer/Footer.css";
import FooterLogo from "../../assets/Images/logo.svg";

function Footer() {
  return (
    <div>
      <h3>Subscribe</h3>
      &nbsp;
      <h6>Subscribe to our newsletter to stay updated at every moment.</h6>
      <input
                className="input"
                type="search"
                placeholder="Enter a valid email id"
              />
              <button type="search" className="blogbtn">
                Search
              </button>
      
      <hr/>
      <footer class="footer-section">
      <Container>
      <div class="footer-logo">
                    <a href="/">
                      <img src={FooterLogo} class="img-fluid" alt="logo" />
                    </a>
                  </div>
      <Row>
        <Col className="company">Company Name</Col>
        <Col sm={4}><div class="footer-social-icon">
        <Col className="company">Follow Us On</Col>
                        <a href="/">
                          <i class="fab fa-facebook-f facebook-bg"></i>
                        </a>
                        <a href="/">
                          <i class="fab fa-twitter twitter-bg"></i>
                        </a>
                        
                      </div></Col>
      </Row>
      <Row>
        <Col className="company">Location
        <div className="footer-menu">
                      <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div> </Col>
        
        <Col> 
       
                       
                      </Col>
        
                        


                      
      </Row>
      
    </Container>
      
        
        
      </footer>
    </div>
  );
}

export default Footer;
