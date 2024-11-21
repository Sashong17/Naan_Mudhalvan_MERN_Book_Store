import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';
import { FaTrash, FaHeart } from "react-icons/fa";


function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching items: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = (Id) => {
    axios.delete(`http://localhost:4000/itemdelete/${Id}`)
      .then(() => {
        setItems(items.filter(item => item._id !== Id));
        alert('Item deleted successfully');
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="bg-white min-h-screen text-white">
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-8 text-center" style={{ color: 'black' }}>Books Collection</h2>

        <div className="space-y-6">
          {items.map((item) => (
            <div 
              key={item._id} 
              className="flex bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Left Section: Image with Padding */}
              <div className="p-4">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item"
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
                  <p className="text-lg font-bold mb-4" style={{ color: '#FFD700' }}>Price: <span className="text-white">&#8377; {item.price}</span></p>
                  <p className="text-sm text-white">{item.description.slice(0, 150)}...</p>
                </div>

                {/* Footer Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <button 
                    onClick={() => alert('Added to Favorites')} 
                    className="text-sm font-semibold flex items-center"
                    style={{ color: '#FFD700' }}
                  >
                    <FaHeart className="mr-1" /> Add to Favorites
                  </button>
                  <button 
                    onClick={() => deleteItem(item._id)} 
                    className="text-sm font-semibold flex items-center"
                    style={{ color: '#FFD700' }}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myproducts;
