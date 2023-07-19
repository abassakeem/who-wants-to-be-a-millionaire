import { Col, Container, Image, Row } from "react-bootstrap";
import chooseUs from"./../../../assets/img/choose-Us.svg";
import CountUp from 'react-countup';
import "./chooseUs.css";
const ChooseUs = () => {
    return ( 

        <Container>
            <div className="about-us-section ">
            <Row className="align-items-center justify-content-center">
                
                <Col lg="5" md= "5" sm="6">
                    <div className="about-content">
                        .
                        <h2>Why choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora architecto voluptatum iure nihil perferendis laudantium reiciendis tenetur doloremque adipisci.</p>
                       
                    </div>
                </Col>
                <Col lg="7" md= "7" sm="6">
                    <div className="about-img justify-content-center align-items-center">
                        <Image src={chooseUs} alt="" fluid className="justify-content-center align-items-center  about-us-image text-center"/>
                    </div>
                
                </Col>
            </Row>
            </div>
        </Container>
     );
}
 
export default ChooseUs;