import { Col, Container, Image, Row } from "react-bootstrap";
import aboutUs from"./../../../assets/img/about-us.svg";

import CountUp from 'react-countup';
import "./aboutUs.css";
const AboutUs = () => {
    return ( 

        <Container>
            <div className="about-us-section ">
            <Row className="align-items-center justify-content-center">
                <Col lg="7" md= "7" sm="6">
                    <div className="about-img justify-content-center align-items-center">
                        <Image src={aboutUs} alt="" fluid className="justify-content-center align-items-center  about-us-image text-center"/>
                    </div>
                
                </Col>
                <Col lg="5" md= "5" sm="6">
                    <div className="about-content">
                        .
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora architecto voluptatum iure nihil perferendis laudantium reiciendis tenetur doloremque adipisci.</p>
                        <div className="about-counter">
                            <div className="d-flex gap-5 align-items-center ">
                           
                                <div className="single-counter">
                                    <span className="counter">
                                    
                                        <CountUp start={0} end={21} duration={2} suffix="K"/>
                                    </span>
                                    <p className="counter-title">Completed Questions</p>
                                </div>
                            
                                <div className="single-counter">
                                    <span className="counter">
                                    
                                        <CountUp start={0} end={12} duration={2} suffix="K"/>
                                    </span>
                                    <p className="counter-title">Taking  jamb</p>
                                </div>
                                </div>
                            <div className="d-flex gap-5 align-items-center ">
                           
                                <div className="single-counter">
                                    <span className="counter">
                                    
                                        <CountUp start={0} end={13} duration={2} suffix="K"/>
                                    </span>
                                    <p className="counter-title">Completed Questions</p>
                                </div>
                            
                                <div className="single-counter">
                                    <span className="counter">
                                    
                                        <CountUp start={0} end={72} duration={2} suffix="K"/>
                                    </span>
                                    <p className="counter-title">Taking  jamb</p>
                                </div>
                                </div>
                              
                            
                                
                        
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
     );
}
 
export default AboutUs;