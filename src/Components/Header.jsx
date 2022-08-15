import React, { useState } from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import Logo from "../assets/Images/logo.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

export default function Header({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <>
      <nav>
        <div className="brand-container">
          <div className="brand">
            <Navbar.Brand as={NavLink} to="/">
              <img className="logo" src={Logo} alt="" />
            </Navbar.Brand>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </div>
          </div>
        </div>
        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
          <ul className="links">
            <li>
              <Nav.Link as={NavLink} to="/" className="menu">
                Home
              </Nav.Link>
            </li>
            <li>
              <NavDropdown
                title="Event"
                id="navbarScrollingDropdown"
                className="headers"
              >
                <Nav.Link as={NavLink} to="/events" className="headers">
                  All events
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/meetup" className="headers">
                  Meet Up
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/hackathon" className="headers">
                  Hackathon
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/addConference" className="headers">
                  Conference
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/webniars" className="headers">
                  Webinars
                </Nav.Link>
                <NavDropdown.Divider />

                <Nav.Link as={NavLink} to="/ama" className="headers">
                  AMA
                </Nav.Link>
              </NavDropdown>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/blog" className="menu">
                Blog
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/contactus" className="menu">
                Contact Us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/signup" className="navCta">
                Sign Up
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/signin" className="navCtas">
                Sign In
              </Nav.Link>
            </li>

            
          </ul>
        </div>
      </nav>
    </>
  );
}
