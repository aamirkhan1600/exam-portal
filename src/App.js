import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home /> }/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminSignup" element={<AdminSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
