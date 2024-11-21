// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Unavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar expand="lg" style={{
        background: 'linear-gradient(90deg, #4b6cb7, #182848)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '15px 0'
      }}>
      <Container>
        {/* Brand */}
        <Navbar.Brand>
          <Link to='/uhome' style={{
              color: "#f9f9f9",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.5rem"
            }}>
            BookStore
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/uhome" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#4b6cb7'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Home
            </Link>
            <Link to="/uproducts" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#4b6cb7'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Books
            </Link>
            <Link to="/myorders" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#4b6cb7'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              My Orders
            </Link>
            <Link to="/" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#4b6cb7'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Logout
            </Link>

            {/* User Display */}
            <h4 style={{
                color: "#f9f9f9",
                marginLeft: "15px",
                fontSize: "1.1rem"
              }}>
              ({user.name})
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
