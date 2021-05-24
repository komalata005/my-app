import React from "react";
import ReactDOM from 'react-dom';
import { Container, Row, Col } from "react-bootstrap";
import Type from "../Type";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <image src="./Assets/home-bg.jpg"></image>
          <Row>
            <Col md={7} className="home-header">
  

              <h1 className="heading-name">
                
                <strong className="main-name">Get Great Meals at Greater Prices
</strong>
              </h1>
<p>
We don’t believe that to have a great meal you need to spend a fortune.
Get your favorite restaurant dishes at greater prices with no delivery charges ever.      

</p>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    
  );
  <footer/>

}

export default Home;
