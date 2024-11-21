// Wishlist.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
    axios
      .get(`http://localhost:4000/wishlist/${user.id}`) // Adjust the endpoint accordingly
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      })
      .catch((error) => {
        console.error('Error fetching wishlist items: ', error);
      });
    } else {
      console.log('ERROR');
    }
  }, []);

  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId }); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      const response = await axios.get(`http://localhost:4000/wishlist/${item.id}`,); // Adjust the endpoint accordingly
      setWishlist(response.data);
    } 
    else{
      console.log('ERROR');
    }}
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  return (
  <div className="bg-white min-h-screen text-white">
    <Unavbar />
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-semibold mb-8 text-center" style={{ color: 'black' }}>Wishlist</h2>

      <div className="space-y-6">
        {wishlist.map((item) => (
          <div 
            key={item._id} 
            className="flex bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Left Section: Image with Padding */}
            <div className="p-4">
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="object-cover w-56 h-56"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-2/3 p-6 flex flex-col justify-between">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#FFD700' }}>{item.title}</h3>
                <p className="text-sm mb-1" style={{ color: '#FFD700' }}>Author: <span className="text-white">{item.author}</span></p>
                <p className="text-sm mb-1" style={{ color: '#FFD700' }}>Genre: <span className="text-white">{item.userId}</span></p>
                <p className="text-lg font-bold mb-4" style={{ color: '#FFD700' }}>Price: <span className="text-red">&#8377;{item.price}</span></p>
              </div>
              
              {/* Footer Actions */}
              <div className="mt-4 flex items-center justify-between">
                <Button
                  style={{ backgroundColor: 'red', border: 'none' ,fontWeight:'bold'}}
                  onClick={() => removeFromWishlist(item.itemId)}
                >
                  Remove from Wishlist
                </Button>

                <Button style={{ backgroundColor: 'gold', border: 'none', fontWeight:'bold'}}>
                  <Link to={`/uitem/${item.itemId}`} style={{ color: 'black', textDecoration: 'none' ,fontWeight:'bold'}}>
                    View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default Wishlist;
