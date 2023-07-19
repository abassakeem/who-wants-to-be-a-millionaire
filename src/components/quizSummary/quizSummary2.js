import React, { Component, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./quizSummary.css"

const QuizSummary2 = () => {
    return ( 

        <Fragment>
                    <Container>
                        <Row>
                    <div style={{ textAlign: 'center' }}>
                        
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container stats">
                        <h4></h4>
                        <h2>Your Score: &#37;</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="right"></span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right"></span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right"></span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right"></span><br />

                        <span className="stat left">Hints Used: </span>
                        <span className="right"></span><br />

                        <span className="stat left">50-50 Used: </span>
                        <span className="right"></span>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/quiz">Play Again</Link>
                            </li>
                            <li>
                                <Link to ="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                    </Row>
                    </Container>
                </Fragment>
     );
}
 
export default QuizSummary2;