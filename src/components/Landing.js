import React from 'react';
import "./Landing.css";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Button 
} from 'reactstrap';

const Landing = () => (
  <section className="landing">
    <div className="container"> 

      <Row>
        {/* <Col sm="12" md={{ size: 8, offset: 2 }}> */}
        <Col xs="12" md="12">
          <h1 className="mainTitle">Bloc Jams</h1>      
        </Col>
      </Row>

      <Row>
        <Col>  
          <h3 className="hero-title">Turn the music up!</h3>
        </Col>
      </Row>

      <section className="selling-points">
        <Row>
          <Col xs="12" md="4">
            <Card className="point"> 
              <CardTitle className="point-title">Choose your music</CardTitle> 
              <CardText className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</CardText>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card className="point"> 
              <CardTitle className="point-title">Unlimited, streaming, ad-free</CardTitle> 
              <CardText className="point-description">No arbitrary limits. No distractions.</CardText>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card className="point"> 
              <CardTitle className="point-title">Mobile enabled</CardTitle> 
              <CardText className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</CardText>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  </section>
);

export default Landing;