import { Col, Container, Image, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./courses.css";
import maths from "./../../../assets/img/mathematics.png"
import english from "./../../../assets/img/english.png"
import physics from "./../../../assets/img/physics.png"
import chemistry from "./../../../assets/img/physics.png"
import biology from "./../../../assets/img/biology.png"
import economics from "./../../../assets/img/economics.png"
import more from "./../../../assets/img/more-button.png"

const Courses = () => {
    // CODE FOR THE REACT BOOTSTRAPVOVERLAY
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //CODE FOR THE courses
    const jambCourses=[
       
        {
            name:"Mathematics",
            url:"#",
            img:maths
        },
        {
            name:"English",
            url:"#",
            img:english
        },
        {
            name:"Physics",
            url:"#",
            img:physics
        },
        {
            name:"Chemistry",
            url:"#",
            img:chemistry
        },
        {
            name:"Biology",
            url:"#",
            img:biology
        },
        {
            name:"Economics",
            url:"#",
            img:economics
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Arts",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        },
        {
            name:"Mathematics",
            url:"#"
        }
    ]

    
    const limit = 6; //max number to fetch in the landing page 
    let count = 0; // Counter for tracking the number of fetched items
    const  limitedJambCourses= jambCourses.slice(0, limit); // slice the jambCourses array
    return ( 

        <Container>
            <div className="courses-section">
                {/* this would also increase as the off canvas one increases */}
            <Row>
                {limitedJambCourses.map((item,index)=>{

                    return(
               
               
                <Col lg="2" md="3" sm="4" xs="6" className="g-5 course-column" variant="outline-success" >
                    <div className="course-container d-flex justify-content-center align-items-center ">
                        <span className="course">{item.name}</span>
                        <Image src={item.img} alt="" fluid className="justify-content-center align-items-center  course-image  text-center"/>
                    </div>
                    
                </Col>);
                
})}
                
            </Row>
            <Row>
                <div className="course-button mt-5">
            <Button className="more-courses-button"  variant="outline-success" onClick={handleShow}>
                <Image className="more-img" src={more} fluid/>
            </Button>
            

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Courses</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {jambCourses.map((item,index)=>(

                                
                                
                    <Col className="offcanvas-courses">
                        <div className="course">
                            <span>{item.name}</span>
                        </div>
                    </Col>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
            </div>
            </Row>
            </div>
        </Container>
     );
}
 
export default Courses;