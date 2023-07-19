import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./practicetest.css"
import practiceTest from "./../../assets/img/practice-test.svg"
import { Link } from "react-router-dom";
import PracticeTestInstructions from "../practiceTest/practiceTestInstructions";
const PracticeTest = () => {
    return ( 
        <div className="practice-test-container">
            <Container>
            <Link to="/" className="btn btn-success back-button" >Back</Link>
                
                <div className="section">
            <Row className="d-flex text-center align-items-center justify-content-center">
            <Col lg="12" className="align-items-center justify-content-center text-center practice-test  links">
                     <div className="practice-test-text">
                    <h2>StudyJunction</h2>
                    <p>Practice Test</p>
                    
                    </div>
                    </Col>
                    <Col   md="6" lg= "6">
                    <Image className="quiz-image text-center " src={practiceTest} alt="" fluid /> </Col>
                <Col xxs="6"  xs="6" sm="6" md="6" lg= "6" >
                <div className="right">
                <div className="instructions p-3"><PracticeTestInstructions /></div>
                        <div className="buttons d-flex align-items-center justify-content-center text-center">

                    <Link to="/practice_test/start" className="btn m-4  btn-primary practice-test-start-button" variant="outline-success">Start </Link>
                        <Link to="/login" className="btn m-4 btn-outline-success practice-test-signin-button" variant="outline-success">log in</Link>
                    
                    
                          </div>
                          </div>
                </Col>
                
            </Row>
            </div>
            </Container>
        </div>
     );
}
 
export default PracticeTest;