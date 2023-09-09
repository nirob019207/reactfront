import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const token = sessionStorage.getItem('token');  // Using sessionStorage here
  
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
