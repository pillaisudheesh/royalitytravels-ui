import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';

const ContactUs = () => {
  return (
    <>
      <section className="page-title bg-1">
        <Container>
          <Row>
            <Col md="12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section contact-info pb-0">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="contact-block mb-4 mb-lg-0">
                <Icofont icon="live-support" />
                <h5>Call Us</h5>
                <p>+91-807-878-3984</p>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="contact-block mb-4 mb-lg-0">
                <Icofont icon="support-faq" />
                <h5>Email Us</h5>
                <p>support@royalitytravels.com</p>
              </div>
            </Col>
            <Col lg="4" md="12">
              <div className="contact-block mb-4 mb-lg-0">
                <Icofont icon="location-pin" />
                <h5>Location</h5>
                <p>Nedumbassery, Kochi, India</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
