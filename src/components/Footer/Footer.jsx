import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';

import logo from '../../images/royalitylogo.png';

const Footer = () => {
  return (
    <footer className="footer section gray-bg mt-lg-5">
      <Container>
        <Row>
          <Col lg="4" sm="6" className="ms-auto">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img src={logo} alt="" className="img-fluid" width="260px" />
              </div>
              <p>
                A Kochi based travel agency which provides best holiday packages at best
                prices.Whether you&apos;re looking for a taxi, holiday planning, tickets,
                accommodations, or the whole package, we have you covered
              </p>

              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/profile.php?id=100088953978941"
                    target="_blank"
                    rel="noreferrer">
                    <Icofont icon="facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/rproyality" target="_blank" rel="noreferrer">
                    <Icofont icon="instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://wa.me/918078783984">
                    <Icofont icon="whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* <Col lg="2" sm="6" md="6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Department</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#!">Surgery </a>
                </li>
                <li>
                  <a href="#!">Women&apos; Health</a>
                </li>
                <li>
                  <a href="#!">Radiology</a>
                </li>
                <li>
                  <a href="#!">Cardioc</a>
                </li>
                <li>
                  <a href="#!">Medicine</a>
                </li>
              </ul>
            </div>
          </Col> */}

          <Col lg="4" sm="6" md="6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#!">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">FAQuestions</a>
                </li>
                <li>
                  <a href="/companyinfo">Company Information</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="3" sm="6" md="6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <Icofont icon="support-faq" />
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <a href="mailto:support@royalitytravels.com">support@royalitytravels.com</a>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <Icofont icon="support" />
                  <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                </div>
                <h4 className="mt-2">
                  <a href="tel:+918078783984">+91-807-878-3984</a>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
