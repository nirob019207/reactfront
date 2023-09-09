import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import CreateNew from './components/new_file/CreateNew';
import UploadFile from './components/form/UploadFile';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Use PrivateRoute and nested Dashboard route */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/CreateNewFile" element={<PrivateRoute />}>
            <Route index element={<CreateNew />} />
          </Route>
          <Route path="/UploadFile" element={<PrivateRoute />}>
            <Route index element={<UploadFile />} />
          </Route>

          {/* Regular Route for Login */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
