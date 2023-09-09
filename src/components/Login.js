import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://104.198.53.36:9002/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('token', data.access_token);  // Using sessionStorage here
        navigate('/dashboard');
      } else {
        setError(data.detail || 'Failed to login');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="">
      <div className="h-[100vh] flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-[554px] md:w-[360px]">
          <div className="w-full h-auto p-4 rounded-lg background-top text-white text-center">
            <img src="image/logo.png" className="h-24 mx-auto" alt="" />
            <h1 className="text-xl font-bold Montserrat">
              Welcome to Sonali<br />Life Insurance
            </h1>
          </div>
          <div className="p-6">
            <h1 className="text-center  Montserrat">
              Login to UW360 account
            </h1>
            <div className="w-full mt-[24px]">
              <label htmlFor="" className="text-lg">
                Username
              </label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mt-1 rounded-lg border-2"
                placeholder="Enter your username"
              />
            </div>
            <div className="w-full mt-[24px] relative">
              <label htmlFor="" className="text-lg">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 rounded-lg border-2"
                placeholder="Enter your Password"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img
                  className="h-5 w-5 fill-black mt-8"
                  src="image/eye-fill.png"
                  alt=""
                />
              </span>
            </div>
            <div className="flex justify-between mt-3">
              <label className="block font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                />
                <span className="text-sm">Remember Me</span>
              </label>
            </div>
            <div className="flex justify-center py-3">
              <button
                className="w-full py-2 log-btn text-white background-top rounded-sm"
                onClick={handleLogin}>
                Login
              </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
