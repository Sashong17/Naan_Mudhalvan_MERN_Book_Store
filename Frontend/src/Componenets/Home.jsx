// src/components/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleUserClick = () => {
    setShowLogin(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "blue" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: "none" }}>BookStore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }} onClick={handleUserClick}>User</Link>
              <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }} onClick={handleUserClick}>Seller</Link>
              <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }} onClick={handleUserClick}>Admin</Link>            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
