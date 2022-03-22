import React from "react";
import UserButton from "./UserButton";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <Link
              style={{ textDecoration: "none" }}
              className='text-light'
              to='/'
            >
              MYSHOP
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {/* <Nav.Link href='#home'>Home</Nav.Link> */}
            </Nav>
            <Form className='d-flex mx-auto'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>

            <div className='ms-auto'>
              <UserButton />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
