import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <ProtectedRoute path="/home" element={Home} />
                        <Route path="/adminlogin" element={<AdminLogin />} />
                        <Route path="/adminsignup" element={<AdminSignup />} />
                        {/* Optionally add protected routes for admin pages */}
                        <ProtectedRoute path="/adminhome" element={AdminHome} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
