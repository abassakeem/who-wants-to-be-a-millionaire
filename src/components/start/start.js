import { useState, useEffect, useRef, Fragment } from "react";
import PracticeTestInstructions from "../practiceTest/practiceTestInstructions";
import React, { Component } from 'react';

import classnames from 'classnames';
import { withRouter } from 'react-router-dom';


import isEmpty from './../../utility/is-empty.js';

import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import lifeline from "./../../assets/img/lifeline.png"
import hint from "./../../assets/img/hint.png";
import clock from "./../../assets/img/clock.png";
import "./start.css";
import questions from "./../questions/questions.json";
import { Link } from "react-router-dom";




class Start extends Component {
    constructor (props) {
        
        super(props);
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            nextButtonDisabled: false,
            previousButtonDisabled: true,
            previousRandomNumbers: [],
            time: {
                minutes: 0,
                seconds: 0,
            },
            selectedOptions: Array(questions.length).fill(null),
        };
        this.interval = null;
        this.correctSound = React.createRef();
        this.wrongSound = React.createRef();
        this.buttonSound = React.createRef();
    }

    componentDidMount () {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        this.startTimer();
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
          questions = this.state.questions;
          currentQuestion = questions[currentQuestionIndex];
          nextQuestion = questions[currentQuestionIndex + 1];
          previousQuestion = questions[currentQuestionIndex - 1];
      
          // Retrieve previously selected option for the current question
          const selectedOption = this.state.selectedOptions[currentQuestionIndex];
          const { answer, explanation } = currentQuestion;
      
          // Set the previously selected option as the answer
          if (selectedOption) {
            currentQuestion.answer = selectedOption;
          }
      
          this.setState({
            currentQuestion,
            nextQuestion,
            previousQuestion,
            numberOfQuestions: questions.length,
            answer,
            explanation,
            previousRandomNumbers: [],
          }, () => {
            this.showOptions();
            this.handleDisableButton();
          });
        }
      };
      

    handleOptionClick = (e) => {
        const selectedOption = e.target;
  const options = Array.from(document.querySelectorAll('.option'));

  options.forEach((option) => {
    if (option === selectedOption) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });

  const selectedOptionText = e.target.innerHTML.toLowerCase();
  if (selectedOptionText === this.state.answer.toLowerCase()) {
    this.correctTimeout = setTimeout(() => {
      // this.correctSound.current.play();
    }, 500);
    this.correctAnswer();
  } else {
    this.wrongTimeout = setTimeout(() => {
      // this.wrongSound.current.play();
    }, 500);
    this.wrongAnswer();
  }

  // Update the selected option in the state
  const { currentQuestionIndex, selectedOptions } = this.state;
  const updatedSelectedOptions = [...selectedOptions];
  updatedSelectedOptions[currentQuestionIndex] = selectedOptionText;
  this.setState({
    selectedOptions: updatedSelectedOptions,
  });
};

    handleNextButtonClick = () => {
        this.setState({ isStyleApplied: false }, () => {
            const options = Array.from(document.querySelectorAll('.option'));
            options.forEach(option => {
                option.classList.remove('selected');
            });
    
            this.playButtonSound();
    
            if (this.state.nextQuestion !== undefined) {
                this.setState(prevState => ({
                    currentQuestionIndex: prevState.currentQuestionIndex + 1
                }), () => {
                    this.displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.previousQuestion
                    );
                });
            }
        });
    };

    handlePreviousButtonClick = () => {
        
        this.playButtonSound();
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            });
        }
    };

    handleQuitButtonClick = () => {
        this.playButtonSound();
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    };

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }
        
    };

    playButtonSound = () => {
        this.buttonSound.current.play();
    };

    correctAnswer = () => {
       
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            // currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {            
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
       
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            // currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
        });

        this.setState({
            usedFiftyFifty: false
        });
    }

    handleHints = () => {
        if (this.state.hints > 0) {
            const options = Array.from(document.querySelectorAll('.option'));
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            while (true) {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
                    options.forEach((option, index) => {
                        if (index === randomNumber) {
                            option.style.visibility = 'hidden';
                            this.setState((prevState) => ({
                                hints: prevState.hints - 1,
                                previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
                            }));
                        }
                    });
                    break;
                }
                if (this.state.previousRandomNumbers.length >= 3) break;
            }
        }
    }

    handleFiftyFifty = () => {
        if (this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false) {
            const options = document.querySelectorAll('.option');
            const randomNumbers = [];
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            let count = 0;
            do {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer) {
                    if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
                            randomNumbers.push(randomNumber);
                            count ++;
                    } else {
                        while (true) {
                            const newRandomNumber = Math.round(Math.random() * 3);
                            if (!randomNumbers.includes(newRandomNumber) && newRandomNumber !== indexOfAnswer) {
                                randomNumbers.push(newRandomNumber);
                                count ++;
                                break;
                            }
                        }
                    }
                }
            } while (count < 2);

            options.forEach((option, index) => {
                if (randomNumbers.includes(index)) {
                    option.style.visibility = 'hidden';
                }
            });
            this.setState(prevState => ({
                fiftyFifty: prevState.fiftyFifty - 1,
                usedFiftyFifty: true
            }));
        }
    }

    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds,
                        distance
                    }
                });
            }
        }, 1000);
    }

    handleDisableButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                previousButtonDisabled: true
            });
        } else {
            this.setState({
                previousButtonDisabled: false
            });
        }

        if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }
    }
    handleClose = () => {
        this.setState({ show: false });
      };
    
      handleShow = () => {
        this.setState({ show: true });
      };
    

    endGame = () => {
        // alert('Quiz has ended!');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            fiftyFiftyUsed: 2 - state.fiftyFifty,
            hintsUsed: 5 - state.hints
        };
        setTimeout(() => {
            this.props.history.push('/start/quiz_summary', playerStats);
        }, 1000);
    }
    renderOptions = () => {
        const { currentQuestion, selectedOptions, currentQuestionIndex } = this.state;
        const options = ['optionA', 'optionB', 'optionC', 'optionD'];
      
        if (!currentQuestion) {
          return null; // Return null or a loading state if currentQuestion is undefined
        }
      
        return options.map((option, index) => {
          const optionText = currentQuestion[option];
          const isOptionSelected = selectedOptions[currentQuestionIndex] === optionText?.toLowerCase();
      
          return (
            <Col sm="6" className="justify-content-" key={optionText}>
              <div
                onClick={this.handleOptionClick}
                className={classnames('option', {
                  selected: isOptionSelected,
                })}
              >
                {optionText}
              </div>
            </Col>
          );
        });
      };
      

    render () {
        
        const { 
            currentQuestion, 
            currentQuestionIndex, 
            fiftyFifty, 
            hints, 
            numberOfQuestions,
            time ,
            explanation,
            isStyleApplied,
            show
        } = this.state;

    return ( 
        <div className="quiz-container d-flex justify-content-center align-items-center ">
            <Helmet><title>Quiz Page</title></Helmet>

           <Container>
           <Fragment>
            
                    <audio ref={this.correctSound} src={correctNotification}></audio>
                    <audio ref={this.wrongSound} src={wrongNotification}></audio>
                    <audio ref={this.buttonSound} src={buttonSound}></audio>
                </Fragment>
            <h1 className="quiz-text text-center mt-5">Practice Quiz</h1>
            <div className="practice-section">
            <Row>
                
                    
                <div></div>
                <Col xs="6"  className="d-flex justify-content-start">
                    
                <div className="lifeline-container" onClick={this.handleFiftyFifty}>
                    <Image  className="quiz-logo-img lifeline-logo" src={lifeline}/><span className="quiz-logo-text">{fiftyFifty}</span>
                </div>
                </Col>
                <Col xs="6" className=" hint-section d-flex justify-content-end">
                <div className="hint" onClick={this.handleHints}>
                    <Image  className="quiz-logo-img hint-logo" src={hint}/><span className="quiz-logo-text">{hints}</span>
                </div>

                </Col>
                <Col xs="6"  className="d-flex justify-content-start">
                    
                <div className="lifeline-container">
                    <p className="quiz-logo-text">{currentQuestionIndex + 1} of {numberOfQuestions}</p>
                </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                <div className="hint">
                    <Image className="quiz-logo-img clock-logo" src={clock}/>
                    <span  className="quiz-logo-text">{time.minutes}:{time.seconds}</span>
                </div>

                </Col>
                
                <Col sm="12">
                <div className="question text-center">
                    <h3 className="mt-3 quiz-question">{currentQuestion.question}</h3>
                </div>
                

               
                </Col>
                <Col sm="12">
                <div className="options">
                    <Row>{this.renderOptions()}
                        
                    {/* <Col sm="6" className="justify-content-">
                        <div onClick={this.handleOptionClick} className="option option1">
                            {currentQuestion.optionA}                           
                        </div>
                        </Col>
                    <Col sm="6" className="justify-content-">
                        <div onClick={this.handleOptionClick} className="option option2">
                        {currentQuestion.optionB} 
                        </div>
                    </Col>
                    <Col sm="6" className="justify-content-">
                        <div onClick={this.handleOptionClick} className="option option3">
                        {currentQuestion.optionC} 
                        </div>
                    </Col>
                    <Col sm="6" className="justify-content-">
                        <div onClick={this.handleOptionClick} className="option option4">
                        {currentQuestion.optionD} 
                        </div>
                        </Col> */}
                    </Row>
                 </div>
                </Col>
                <Col>
                <div className="button-container">
                    <Row>
                        <Col xs="6">
                    <Button onClick={this.handleButtonClick} variant="success" id="previous-button"  className={classnames('practice-quiz-button previous-button', {'disable practice-quiz-button previous-button': this.state.previousButtonDisabled})}>
                        Previous
                    </Button>
                    <Button onClick={this.handleButtonClick} variant="primary" className={classnames('practice-quiz-button next-button', {'disable practice-quiz-button next-button': this.state.nextButtonDisabled})} id="next-button" >
                        Next
                    </Button>
                    </Col>
                    <Col xs="6" className="justify-content-end d-flex">
                    
                    {/* <Button onClick={this.endGame} variant="danger" id="quit-button" className="practice-quiz-button quit-button ">
                        Submit
                    </Button> */}

                    
                    <Button variant="danger" onClick={this.handleShow}>
                            submit
                        </Button>

                        <Modal
                            show={show}
                            onHide={this.handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Confirm Submission</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to submit?
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={this.endGame}>Submit</Button>
                            </Modal.Footer>
                        </Modal>
                          
                    {/* <Link className="btn btn-success" to="/start/quiz_summary">submit 2</Link> */}
                    </Col>
                    {explanation && (
                        <div className="explanation">
                            <h4>Explanation:</h4>
                            <p>{explanation}</p>
                        </div>
                        )}
                    </Row>
                </div>
                
                </Col>
            </Row>
            </div>
           </Container>
            
        </div>
     );
}
}
 
export default withRouter(Start);