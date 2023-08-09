import { Col, Container, Row } from "react-bootstrap";
import "./trivia.css"
import { useState } from "react";
import { useEffect } from "react";
import useSound from "use-sound";
import play from "./../../assets/audio/play.mp3";
import correct from "./../../assets/audio/correct.mp3";
import wrong from "./../../assets/audio/wrong.mp3";
import {GiSpeaker} from "react-icons/gi"
import {PiSpeakerSimpleSlashBold} from "react-icons/pi"




export default function Trivia ({data,setTimeOut,questionNumber,setQuestionNumber, setStop})  {




  
  const [isMuted, setIsMuted] = useState(false);
    const [question,setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play, { volume: isMuted ? 0 : 1 });
    const [correctAnswer] = useSound(correct, { volume: isMuted ? 0 : 1 });
    const [wrongAnswer] = useSound(wrong, { volume: isMuted ? 0 : 1 });
    
    const toggleMute = () => {
      setIsMuted((prevMute) => !prevMute);
    };



    useEffect(() => {
        letsPlay();
      }, [letsPlay]);
    

    useEffect(() => {
        
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);

      const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

      
      const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");


        delay(1500, () => 
            setClassName(a.correct ? "answer correct" : "answer wrong")
          );


          delay(2500, () => {

            if (a.correct) {
                correctAnswer();
                delay(500, () => {
                  setQuestionNumber((prev) => prev + 1);
                  setSelectedAnswer(null);
                });
                
              } else {
                wrongAnswer();
                delay(500, () => {
                  setTimeOut(true);
                });
               
              }
           
              })
      };



     

    return ( 
        <div className="trivia-section">
            <Container><button className="mute-button game-mute d-flex justify-items-start mb-3" onClick={toggleMute}>
                          {isMuted ? <PiSpeakerSimpleSlashBold/> 
                          :<GiSpeaker/> }
                        </button>
                <Row> 
                    <Col className="d-flex flex-column  align-items-center">
                   
        
                        <div className="question text-center ">{question?.question}</div>
                                        <div className="mute-button-container">
                        
                      </div>
                        <div className="answers d-flex justify-content-around align-items-center">
                            {question?.answers.map((a)=>(
                            <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
     );
}
 
