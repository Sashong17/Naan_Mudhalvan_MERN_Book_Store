import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) =>{
        alert('Account created')
        console.log(result)
        navigate('/alogin')
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-20 pointer-events-none"></div>
  
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Seller Registration</h2>
            <p className="text-gray-500">Get started with your seller account</p>
          </div>
  
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 block">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                placeholder="Your name"
              />
            </div>
  
            <div className="relative">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                placeholder="you@example.com"
              />
            </div>
  
            <div className="relative">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                placeholder="Password"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600 transition-all duration-300"
            >
              Sign Up
            </button>
  
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={formHandle1}
                className="text-yellow-500 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
   
  
};

export default Asignup;
