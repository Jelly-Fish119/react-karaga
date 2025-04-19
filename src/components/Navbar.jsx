import React from 'react';
import { Navbar, Form, InputGroup, Nav } from 'react-bootstrap';
import { BsMoon, BsBell, BsGear, BsSearch } from 'react-icons/bs';
import './Navbar.css';
import noUser from '../assets/no-user.png';

const TopNavbar = () => {
  return (
    <Navbar bg="white" className="top-navbar border-bottom">
      <div className="navbar-container">
        <div className="d-flex align-items-center">
          <Navbar.Brand className="text-secondary fs-4 me-4">WELCOME ADMIN !</Navbar.Brand>
          <Form className="flex-grow-1 me-4">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search..."
                className="search-input"
              />
              <InputGroup.Text className="search-icon">
                <BsSearch className="text-muted" />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </div>

        <Nav className="nav-icons">
          <Nav.Link className="nav-icon">
            <BsMoon className="fs-5 text-muted" />
          </Nav.Link>
          <Nav.Link className="nav-icon position-relative">
            <BsBell className="fs-5 text-muted" />
            <span className="notification-badge">
              3
            </span>
          </Nav.Link>
          <Nav.Link className="nav-icon">
            <BsGear className="fs-5 text-muted" />
          </Nav.Link>
          <Nav.Link className="nav-icon">
            <img
              src={noUser}
              alt="User"
              className="user-avatar"
              width="32"
              height="32"
            />
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default TopNavbar; 