import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Icofont from 'react-icofont';

const Banner = () => {
  const handleClick = (e) => {
    e.preventDefault();
    location.href = 'https://forms.gle/zcesX3VYa8Bd1VX17';
  };
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col lg={6} md={12} xl={7}>
            <div className="block">
              <div className="divider mb-3"></div>
              <span className="text-uppercase text-sm letter-spacing ">
                Team of professional travel experts
              </span>
              <h1 className="mb-3 mt-3">Trust Our Experts for hassle free vacation</h1>

              <p className="mb-4 pr-5">
                Whether you&apos;re looking for a taxi, holiday planning, tickets, accommodations,
                or the whole package, we have you covered
              </p>
              <Button
                variant="primary"
                className="btn btn-main-2 btn-icon btn-round-full"
                onClick={(e) => handleClick(e)}>
                Enquire Now <Icofont icon="simple-right" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
