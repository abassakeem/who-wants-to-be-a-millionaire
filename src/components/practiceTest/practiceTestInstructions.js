import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Image, Row } from 'react-bootstrap';
import lifeline from "./../../assets/img/lifeline.png"
import hint from "./../../assets/img/hint.png";
import clock from "./../../assets/img/clock.png";


const QuizInstructions = () => {
   
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
   <Fragment>
  <Button variant="outline-dark" onClick={handleShow}>
        Instructions
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1>How to Play the Game</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body> <Container>
            <Row>
                <Col>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.<Image className="quiz-logo-img" src={clock} fluid/></li>
                <li>The game consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50-50 chances <Image className="quiz-logo-img" src={lifeline} fluid/> </li>
                        <li>5 Hints <Image className="mb-2 quiz-logo-img" src={hint} fluid/></li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                    
                </li>
                <li>
                    Using a hint by clicking the icon
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                    will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
                   
                </li>
                <li>Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the game loads.</li>
                <li>Let's do this if you think you've got what it takes?</li>
            </ul>
            <div>
                
                
            </div>
        </div>
        </Col>
        </Row>
        </Container></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <Link className='btn btn-secondary' to="/">No take me back</Link>
          </Button>
          <Button variant="primary" onClick={handleClose}>
          <Link className='btn btn-primary' to="/practice_test/start">Okay, Let's do this!</Link>
          </Button>
        </Modal.Footer>
      </Modal>


    
       
    </Fragment> );
    }

export default QuizInstructions;