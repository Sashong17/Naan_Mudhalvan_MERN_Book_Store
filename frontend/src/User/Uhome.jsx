import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'

const Uhome = () => {
  const navigate = useNavigate()
  const products = () => {
    navigate('/uproducts')
  }

  return (
    <div>
      <Unavbar />

      <div className="recommendations-section">
        <h1 className="title text-center">Top Recommendations</h1>

        <div className="card-container">
          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71EiL4sgrqL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">THE 1000 YEAR OLD BOY</Card.Title>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61Ktyy7KymL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">THE ART OF BEING ALONE</Card.Title>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71pEaSYkhsL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">THE ART OF LETTING GO</Card.Title>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">YOU ONLY LIVE ONCE</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="hero-section">
        <h1 className="title text-center">Best Seller</h1>

        <div className="card-container">
          {/* Card for books */}
          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">THE<br />ALCHEMIST</Card.Title>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61xivWmExiL._AC_UL480_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">THE MOUNTAIN IS YOU</Card.Title>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">PSYCHOLOGY OF MONEY</Card.Title>
            </Card.Body>
          </Card>

          

          <Card className="custom-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/712K3sdLlRL._AC_UY327_FMwebp_QL65_.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">DOPAMINE<br />DETOX</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      

      <Footer />
    </div>
  );
} 

export default Uhome
