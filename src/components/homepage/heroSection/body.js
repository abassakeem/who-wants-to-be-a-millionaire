import {  Col, Container, Image, Row } from "react-bootstrap";
import img1 from "./../../../assets/img/wwtbam.jpg";
import './body.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

const BodySection = () => {
    return ( 
        
        <Container className="hero-whole-container ">
            <div className="hero-section">
            <Row className="align-items-center justify-content-center">
                
            <Col  sm="6" className="d-flex justify-content-center align-items-center">
                    <Image className="welcome-image text-center mb-5" src={img1} alt="" fluid /> </Col>
                <Col  sm="6">
                    <div className="body-content">
                    <h2 className="mb-4 " >WHO WANTS TO BE A MILLIONAIRE<br/><small><span className="text-1"> Become a millionaire today.</span></small>
                       
                       
                        
                    </h2>
                    <p className="mb-4 text-3">Test your brain and stand a chance to win a million naira</p>
                    <div className="search ">
                    <div className="d-flex mb-5 justify-content-center align-items-center search-form">
                    <Link to="/start" className="btn btn-primary signup-button m-2" >Start Game</Link>
                        
                        <Link to="/start" className="btn btn-outline-success signin-button" >Start Game</Link>
                    </div>
                    </div>
                    </div>
                    
                    
                </Col>
               
            </Row>
            </div>
        </Container>
        
     );
}
 
export default BodySection;