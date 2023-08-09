import { Button, Col, Container, Row } from "react-bootstrap";
import "./wwtbam.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "../trivia/trivia";
import Timer from "../timer/Timer";
import Start from "./../start/Start"
import { Link } from "react-router-dom/cjs/react-router-dom";



const Wwtbam = () => {
  
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  // const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  

    const data = [
        {
          id: 1,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "When did the website `Facebook` launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },{
          id: 4,
          question: "What is the capital of France?",
          answers: [
            {
              text: "London",
              correct: false,
            },
            {
              text: "Paris",
              correct: true,
            },
            {
              text: "Berlin",
              correct: false,
            },
            {
              text: "Rome",
              correct: false,
            },
          ],
        },
        {
          id: 5,
          question: "Which planet is known as the 'Red Planet'?",
          answers: [
            {
              text: "Venus",
              correct: false,
            },
            {
              text: "Mars",
              correct: true,
            },
            {
              text: "Jupiter",
              correct: false,
            },
            {
              text: "Saturn",
              correct: false,
            },
          ],
        },
        {
          id: 6,
          question: "What is the chemical symbol for water?",
          answers: [
            {
              text: "H2O",
              correct: true,
            },
            {
              text: "CO2",
              correct: false,
            },
            {
              text: "NaCl",
              correct: false,
            },
            {
              text: "O2",
              correct: false,
            },
          ],
        },
        {
          id: 7,
          question: "Which country is known as the 'Land of the Rising Sun'?",
          answers: [
            {
              text: "China",
              correct: false,
            },
            {
              text: "Japan",
              correct: true,
            },
            {
              text: "South Korea",
              correct: false,
            },
            {
              text: "Thailand",
              correct: false,
            },
          ],
        },
        {
          id: 8,
          question: "What is the tallest mountain in the world?",
          answers: [
            {
              text: "Mount Kilimanjaro",
              correct: false,
            },
            {
              text: "Mount Everest",
              correct: true,
            },
            {
              text: "Mount McKinley",
              correct: false,
            },
            {
              text: "Mount Fuji",
              correct: false,
            },
          ],
        },
        {
          id: 9,
          question: "Which animal is known as the 'King of the Jungle'?",
          answers: [
            {
              text: "Lion",
              correct: true,
            },
            {
              text: "Tiger",
              correct: false,
            },
            {
              text: "Elephant",
              correct: false,
            },
            {
              text: "Giraffe",
              correct: false,
            },
          ],
        },
        {
          id: 10,
          question: "What is the largest organ in the human body?",
          answers: [
            {
              text: "Liver",
              correct: false,
            },
            {
              text: "Lungs",
              correct: false,
            },
            {
              text: "Skin",
              correct: true,
            },
            {
              text: "Heart",
              correct: false,
            },
          ],
        },
        {
          id: 11,
          question: "Who wrote the play 'Romeo and Juliet'?",
          answers: [
            {
              text: "William Shakespeare",
              correct: true,
            },
            {
              text: "Jane Austen",
              correct: false,
            },
            {
              text: "Charles Dickens",
              correct: false,
            },
            {
              text: "Mark Twain",
              correct: false,
            },
          ],
        },
        {
          id: 12,
          question: "What is the largest mammal in the world?",
          answers: [
            {
              text: "Elephant",
              correct: false,
            },
            {
              text: "Giraffe",
              correct: false,
            },
            {
              text: "Blue Whale",
              correct: true,
            },
            {
              text: "Hippopotamus",
              correct: false,
            },
          ],
        },
        {
          id: 13,
          question: "What is the currency of Japan?",
          answers: [
            {
              text: "Yuan",
              correct: false,
            },
            {
              text: "Yen",
              correct: true,
            },
            {
              text: "Euro",
              correct: false,
            },
            {
              text: "Dollar",
              correct: false,
            },
          ],
        },
        {
          id: 14,
          question: "Who painted the Mona Lisa?",
          answers: [
            {
              text: "Vincent van Gogh",
              correct: false,
            },
            {
              text: "Leonardo da Vinci",
              correct: true,
            },
            {
              text: "Pablo Picasso",
              correct: false,
            },
            {
              text: "Claude Monet",
              correct: false,
            },
          ],
        },
        {
          id: 15,
          question: "What is the chemical symbol for gold?",
          answers: [
            {
              text: "Ag",
              correct: false,
            },
            {
              text: "Au",
              correct: true,
            },
            {
              text: "Fe",
              correct: false,
            },
            {
              text: "Cu",
              correct: false,
            },
          ],
        },
      ];

      const amountWon = useMemo(
        () =>
          [
            { id: 1, amount: "$100" },
            { id: 2, amount: "$200" },
            { id: 3, amount: "$300" },
            { id: 4, amount: "$500" },
            { id: 5, amount: "$1K" },
            { id: 6, amount: "$2K" },
            { id: 7, amount: "$4K" },
            { id: 8, amount: "$8K" },
            { id: 9, amount: "$16K" },
            { id: 10, amount: "$32K" },
            { id: 11, amount: "$64K" },
            { id: 12, amount: "$125K" },
            { id: 13, amount: "$250K" },
            { id: 14, amount: "$500K" },
            { id: 15, amount: "$1M" },
          ].reverse(),
        []
      );

      useEffect(() => {
        questionNumber > 1 &&
          setEarned(amountWon.find((m) => m.id === questionNumber - 1).amount);
      }, [questionNumber, amountWon]);
    
    return ( 
        <div className="wwtbam">
            <Container fluid>
                <Row>
                 
                  {username ? ( 
                  <>
                   <Col xs="9" > 
                    
                    <div className="wwtbam-container left-side d-flex flex-column">
                      {timeOut ? <h3 className="text-center m-0 m-auto text-light"> <span className="text-capitalize" > {username} </span> has earned : {earned} <Link to="/" className="homepage-link"> <Button className="startButton">Homepage</Button></Link></h3>
                       : (
                      <> <div className="top">
                        <div className="timer d-flex justify-content-center align-items-center  text-light">
                            <Timer  setTimeOut={setTimeOut} questionNumber={questionNumber}/>
                        </div>
                        
                    </div>
                    <div className="bottom text-light">
                       <Trivia data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setTimeOut={setTimeOut} setQuestionNumber={setQuestionNumber} />

                    </div>
</>
)}

                    </div>
                    </Col>
                    <Col xs="3"  className="d-flex align-items-center justify-content-center">
                        <div className="right-side d-flex align-items-center justify-content-center">

                            <ul className="money-list">
                                {amountWon.map((money)=> (
                                <li className={questionNumber === money.id ? "money-list-item d-flex align-items-center active" :"money-list-item d-flex align-items-center "}  >
                                    <span className="money-list-item-number text-start">{money.id}</span>
                                    <span className="money-list-item-amount text-end">{money.amount}</span></li>
                              ))}
                            </ul>
                        </div>
                        
                        
                    
                    </Col>
                   </>

                  ): <Start setUsername={setUsername}/>  }
                   
                   
                   
                </Row>
            </Container>
        </div>
     );
}
 
export default Wwtbam;