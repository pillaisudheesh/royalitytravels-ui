import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';

const HeaderStrip = () => {
  return (
    <div className="header-top-bar">
      <Container>
        <Row className="align-items-center">
          <Col lg="6">
            <ul className="top-bar-info list-inline-item ps-0 mb-0">
              <li className="list-inline-item">
                <a href="mailto:support@royalitytravels.com">
                  <Icofont icon="support-faq" />
                  support@royalitytravels.com
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/rproyality"
                  target="_blank"
                  rel="noreferrer"
                  className="social">
                  <Icofont icon="instagram" size="1" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100088953978941"
                  target="_blank"
                  rel="noreferrer"
                  className="social">
                  <Icofont icon="facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://wa.me/918078783984" className="social">
                  <Icofont icon="whatsapp" size="1" />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="6">
            <div className="text-lg-end top-right-bar mt-2 mt-lg-0">
              <a href="tel:+918078783984">
                <span>Call Now : </span>
                <span className="h4">+91-807-878-3984</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderStrip;
