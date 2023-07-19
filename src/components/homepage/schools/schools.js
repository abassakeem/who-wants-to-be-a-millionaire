import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import img1 from "./../../../assets/img/bu1.jpg";
import img2 from "./../../../assets/img/afe.png";
import img3 from "./../../../assets/img/cu-logo.png";
import img4 from "./../../../assets/img/oau.png";
import img5 from "./../../../assets/img/ui.png";
import img6 from "./../../../assets/img/unilag.png";
import './schools.css'


const Schools = () => {
    return ( 
        

        <Container >
            
            <div className="school-section">
            <Row className="mb-5 align-items-center text-center justify-content-center">
                <Col lg="4" sm="4" xs="4">
                    <h3></h3>
                    <Image className="school-img img-4" src={img4} alt="" fluid/>

                </Col>
                <Col lg="4" sm="4" xs="4">
                    <h3></h3>
                    <Image className="school-img img-5"  src={img5} alt="" fluid/>

                </Col>
                <Col lg="4" sm="4" xs="4">
                    <h3></h3>
                    <Image className="school-img img-6" src={img6} alt="" fluid/>

                </Col>
            </Row>    
            <Row className="align-items-center text-center justify-content-center">
                <Col lg="4" sm="4" xs="4" >
                    <h3></h3>
                    <Image className="school-img img-1"  src={img1} alt="" fluid/>

                </Col>
                <Col lg="4" sm="4" xs="4">
                    <h3></h3>
                    <Image className="school-img img-2" src={img2} alt="" fluid/>

                </Col>
                <Col lg="4"sm="4" xs="4">
                    <h3></h3>
                    <Image className="school-img img-3" src={img3} alt="" fluid/>

                </Col>
            </Row>
           
            </div>
            
        </Container>
     );
}
 
export default Schools;