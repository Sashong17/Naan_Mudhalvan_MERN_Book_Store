import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/login", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/uhome')
           alert("login successful")
        } else {
          alert("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <Home />
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="relative max-w-md w-full bg-white p-10 rounded-lg shadow-lg overflow-hidden">
          {/* Decorative Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-20 pointer-events-none"></div>
  
          {/* Content Layer */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Login to User Account
            </h2>
  
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
  
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-gray-900"
                  placeholder="Enter your password"
                />
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Log in
                </button>
              </div>
  
              {/* Link to Signup */}
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={formHandle1}
                  className="text-yellow-500 font-semibold hover:underline focus:outline-none"
                >
                  Signup
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
