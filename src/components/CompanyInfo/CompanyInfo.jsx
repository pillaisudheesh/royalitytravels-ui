import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { aboutCompany } from '../Common/Configuration';

const CompanyInfo = () => {
  return (
    <>
      <section className="page-title bg-1">
        <Container>
          <Row>
            <Col md="12">
              <div className="block text-center">
                <span className="text-white">Company Information</span>
                <h1 className="text-capitalize mb-5 text-lg">All Details about our company</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section contact-info pb-0">
        <Container>
          <Row>
            <Col lg="4">
              <h2 className="title-color">
                R P Royality Tours and Travel Solutions Private Limited
              </h2>
            </Col>
            <Col lg="8">
              <div dangerouslySetInnerHTML={{ __html: aboutCompany }}></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CompanyInfo;
