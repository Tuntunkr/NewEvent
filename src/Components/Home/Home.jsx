import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../sass/index.scss";
import homeimage from "../../assets/Images/Home 1x.png";
import bx from "../../assets/Images/bx-filter@2x.png";
import "../Home/Home.css";
import Search from "../Search/Search";
import Card from "../Card/Cards";
import Footer from "../Footer/Footer"

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="content">
            <p className="sub-title"></p>
            <h1 className="title">
              FIND <span className="Find">YOUR</span> NEXT TECH CONFERENCE
              <span className="Find">IN THE</span> POLKADOT
              <span className="Find">ECOSYSTEM</span>
            </h1>
            <p className="description">
              Open-source and crowd-sourced list of meetup <br /> around
              Polkadot ecosystem
            </p>
            <a href="/">
              <button>Get Started</button>
            </a>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={homeimage} alt="home" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <div className="about_event">
              <section className="event">
                <div>
                  <h4 className="h4">100</h4>
                  <p className="ptag">Upcoming Event</p>
                </div>
                <div>
                  <h4 className="h4">91</h4>
                  <p className="ptag">Recently Added</p>
                </div>
                <div>
                  <h4 className="h4">91,000</h4>
                  <p className="ptag">All Time Events</p>
                </div>
              </section>
            </div>
            <div className="crypto">
              <h3>Crypto Event Calender</h3>
            </div>
            <div>
              <input
                className="input"
                type="search"
                placeholder="Search topic by names,tags or categories"
              />
              <button type="search" className="blogbtn">
                Search
              </button>
              <img src={bx} alt="bx" />
              <Card />

            </div>
            <Footer/>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
