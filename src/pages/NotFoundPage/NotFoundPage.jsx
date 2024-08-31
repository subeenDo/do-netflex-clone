import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f8f9fa',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontSize: '10rem', fontWeight: 'bold', color: '#343a40' }}>404</h1>
            <h2 style={{ marginBottom: '20px', color: '#6c757d' }}>
              Oops! The page you are looking for doesn't exist.
            </h2>
            <Link to="/">
              <Button variant="primary" size="lg">
                Go Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
