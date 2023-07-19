import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import instagram from "./../../../assets/img/instagram.png"
import twitter from "./../../../assets/img/twitter.png"
import facebook from "./../../../assets/img/facebook.png"
import linkedin from "./../../../assets/img/linked-in.png"
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer text-center">
      <Container>
        <Row>
          <Col lg="3" md="3" className="mb-4">
            <h2 className="text-center align-items-center  gap-1">
               PastQuest.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <Image className="social-media-icon" src={instagram} />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <Image className="social-media-icon" src={twitter} />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <Image className="social-media-icon" src={facebook} />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                <Image className="social-media-icon" src={linkedin} />
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="3">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Lagos, Nigeria</p>
            <p> Phone: +234 0123456789 </p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
