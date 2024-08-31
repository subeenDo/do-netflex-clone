import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
                width={100}
                src="data:image/png;base64,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"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderColor: 'red',
                }}
              />
              <Button 
                variant="dark" 
                style={{
                  borderColor: 'red',
                  borderWidth: '2px',
                  color: "red",
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
