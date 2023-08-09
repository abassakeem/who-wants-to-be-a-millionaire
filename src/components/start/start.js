import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./start.css"
import useSound from "use-sound";
import wait from "./../../assets/audio/wait.mp3";
import { useEffect } from "react";
import { useState } from "react";
import {GiSpeaker} from "react-icons/gi"
import {PiSpeakerSimpleSlashBold} from "react-icons/pi"


export default function Start({ setUsername }) {
  const [isMuted, setIsMuted] = useState(false);
  const inputRef = useRef();
  const [letsWait] = useSound(wait, { volume: isMuted ? 0 : 1 });


  const toggleMute = () => {
    setIsMuted((prevMute) => !prevMute);
  };

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
    ;
  };

   useEffect(() => {
    letsWait();
      }, [letsWait]);
    
  return (
    <Container>
      <Row>
      <div className="mute-button-container">
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? <PiSpeakerSimpleSlashBold/> 
          :<GiSpeaker/> }
        </button>
      </div>
        <Col className="m-0 m-auto pb-5 mb-5">
        <div className="start pb-5 vh-100 d-flex justify-content-center align-items-center">
      <input 
        className="startInput mb-5"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton mb-5" onClick={handleClick}>
        Start
      </button>
    </div>
        </Col>
      </Row>
    </Container>
    
  );
}
