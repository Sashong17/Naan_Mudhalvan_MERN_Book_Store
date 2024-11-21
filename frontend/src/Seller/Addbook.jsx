import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Vnavbar from './Snavbar';
import Footer from '../Componenets/Footer';


function Additem() {
  const [formData, setFormData] = useState({
    description:'',
    // itemtype:'',
    title: '',
    author: '',
    genre: '',
    price:''
  });

const navigate=useNavigate()
const user = JSON.parse(localStorage.getItem('user'));

const handleChange = (e) => {
    if (e.target.name === 'itemImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      
   
      formDataToSend.append('genre', formData.genre);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      // formDataToSend.append('itemtype', formData.itemtype);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('itemImage', formData.itemImage);

       formDataToSend.append('userName', user.name);
       formDataToSend.append('userId', user.id);

      await axios.post('http://localhost:4000/items', formDataToSend);
      alert('Book added successfully');
      navigate('/myproducts')
    } catch (error) {
      console.error('Error adding car : ', error);
    }
  };
  

  return (
    <div>
      <Vnavbar />
      <div
        className="max-w-lg mx-auto mt-12 p-8 bg-gray-900 text-yellow-400 shadow-2xl rounded-lg"
        style={{
          boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Book Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter book title"
                value={formData.title}
                onChange={handleChange}
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Author</label>
              <input
                type="text"
                name="author"
                placeholder="Enter author's name"
                value={formData.author}
                onChange={handleChange}
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Enter genre"
                value={formData.genre}
                onChange={handleChange}
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter book price"
                value={formData.price}
                onChange={handleChange}
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Description</label>
              <textarea
                name="description"
                placeholder="Enter a brief description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-yellow-400">Book Image</label>
              <input
                type="file"
                name="itemImage"
                accept="image/*"
                onChange={handleChange}
                className="border-2 border-transparent bg-black text-yellow-400 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
  
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500"
              >
                Submit Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Additem;

