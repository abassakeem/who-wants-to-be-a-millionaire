import React from "react";
import { Button, ButtonToolbar, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import "./features.css";
import communication from "./../../../assets/img/communication.png";
import contact from "./../../../assets/img/contact.png";
import draft from "./../../../assets/img/draft.png";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: draft,
  },
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: draft,
  },

  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: contact,
  },

  {
    title: "lorem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: communication,
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="3" md="6" key={index}>
              <div className="single-feature text-center px-4">
                <Image className="mb-2 feature-logo" src={item.icon} />
                <h6>{item.title}</h6>
                <p className="features-text">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
