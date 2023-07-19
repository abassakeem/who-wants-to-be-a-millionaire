import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./newsletter.css"


const Newsletter = () => {
    return ( 
        <div className="newsletter">
        <Container >
            <div className="newsletter-section">

            
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className="newsletter-h2">Subscribe to our Newsletter</h2>
                     <Form className="d-flex justify-content-center align-items-center subscribe-form">
                        <input
                        type="email"
                        placeholder="Subscribe"
                        className="me-2 subscribe-input"
                        aria-label="Email"
                        />
                        <Button className="subscribe-button" variant="dark">Sign up</Button>
                    </Form>
                </Col>
            </Row>
            </div>
        </Container>
        </div>
     );
}
 
export default Newsletter;