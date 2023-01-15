import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Icofont from 'react-icofont';

const Features = () => {
  return (
    <section className="features">
      <Container>
        <Row>
          <Col lg="12">
            <div className="feature-block d-lg-flex">
              <Card className="feature-item mb-5 mb-lg-0">
                <Card.Body>
                  <Card.Title as="h4">
                    <div className="feature-icon mb-4">
                      <Icofont icon="travelling" />
                    </div>
                    Tour Packages
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">All over Kerala</Card.Subtitle>
                  <Card.Text>
                    We provide customised tour packages all over Kerala. Our tour packages are
                    designed in a way that it is hassle free
                  </Card.Text>
                  <Button variant="primary" className="btn btn-main btn-icon btn-round-full">
                    Show me
                  </Button>
                </Card.Body>
              </Card>
              <Card className="feature-item mb-5 mb-lg-0">
                <Card.Body>
                  <Card.Title as="h4">
                    <div className="feature-icon mb-4">
                      <Icofont icon="cab" />
                    </div>
                    Cab Booking
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Taxi Services</Card.Subtitle>
                  <Card.Text>
                    We provide customised tour packages all over Kerala. Our tour packages are
                    designed in a way that it is hassle free
                  </Card.Text>
                  <Button variant="primary" className="btn btn-main btn-icon btn-round-full">
                    Enquire Now
                  </Button>
                </Card.Body>
              </Card>
              <Card className="feature-item mb-5 mb-lg-0">
                <Card.Body>
                  <Card.Title as="h4">
                    <div className="feature-icon mb-4">
                      <Icofont icon="support" />
                    </div>
                    Our Services
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Holiday Packages, Taxi Services
                  </Card.Subtitle>
                  <Card.Text>
                    We provide customised tour packages all over Kerala. Our tour packages are
                    designed in a way that it is hassle free
                  </Card.Text>
                  <Button variant="primary" className="btn btn-main btn-icon btn-round-full">
                    Get Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
