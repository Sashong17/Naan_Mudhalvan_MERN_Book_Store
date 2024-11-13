import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
    axios.get(`http://localhost:4000/wishlist/${user.id}`)
    .then((response) => {
      const wishlistData = response.data;
      setWishlist(wishlistData);
    }) 
  } 
  else{
    console.log('ERROR');
  }
    
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      console.log('itemId before find:', itemId);
      // Find the selected item by itemId
      const selectedItem = items.find((item) => {
        console.log('item._id:', item._id);
        console.log('itemId in find:', itemId);
        return item._id === itemId;
      });
  
      console.log('selectedItem:', selectedItem);
  
      if (!selectedItem) {
        throw new Error('Selected item not found');
      }
  
      // Destructure the needed properties
      const { title, itemImage, _id: itemId2 } = selectedItem;
  
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
      console.log('itemId2:', itemId2);
      console.log('itemId2:', title);
  
      // Add item to the wishlist
      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage,userId,userName });
      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      }) 
    } 
    else{
      console.log('ERROR');
    }
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };
  
  
  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId }); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`,); // Adjust the endpoint accordingly
      setWishlist(response.data);
    } 
    else{
      console.log('ERROR');
    }}
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  return (
    <div className="bg-white min-h-screen text-white">
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-8 text-center" style={{ color: 'black' }}>Books List</h2>
  
        <div className="space-y-6">
          {items.map((item) => (
            <div 
              key={item._id} 
              className="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
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
                  <p className="text-sm mb-1" style={{ color: '#FFD700' }}>Genre: <span className="text-white">{item.genre}</span></p>
                  <p className="text-lg font-bold mb-4" style={{ color: '#FFD700' }}>Price: <span className="text-white">${item.price}</span></p>
                  <p className="text-sm text-white">{item.description.slice(0, 150)}...</p>
                </div>
  
                {/* Footer Actions */}
                <div className="mt-4 flex items-center justify-between">
                  {isItemInWishlist(item._id) ? (
                    <Button
                      style={{ backgroundColor: 'red', border: 'none', fontWeight:'bold'}}
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove from Wishlist
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: 'gold', border: 'none' ,color: 'black', fontWeight:'bold'}}
                      onClick={() => addToWishlist(item._id)}
                    >
                      Add to Wishlist
                    </Button>
                  )}
  
                  {/* View Button */}
                  <Button style={{ backgroundColor: 'gold', border: 'none' }}>
                    <Link to={`/uitem/${item._id}`} style={{ color: 'black', textDecoration: 'none', fontWeight:'bold'}}>
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

export default Products;

