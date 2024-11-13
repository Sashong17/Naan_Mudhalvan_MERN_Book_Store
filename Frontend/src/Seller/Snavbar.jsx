import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Snavbar = () => {
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
          <Link to='/shome' style={{
              color: "#f9f9f9",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.5rem"
            }}>
            BookStore <span style={{ color: "#ffd700" }}>(Seller)</span>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/shome" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffd700'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Home
            </Link>
            <Link to="/myproducts" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffd700'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              My Products
            </Link>
            <Link to="/addbook" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffd700'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Add Books
            </Link>
            <Link to="/orders" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffd700'}
              onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
            >
              Orders
            </Link>
            <Link to="/" style={{
                color: "#e0e0e0",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffd700'}
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

export default Snavbar;
