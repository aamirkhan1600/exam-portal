import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      navigate('/signup');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h2>Welcome, {userData?.user?.name}</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {userData?.user?.email}</p>
        <p><strong>ID:</strong> {userData?.user?.id}</p>
        <p><strong>Token:</strong> {userData?.token}</p>
      </div>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Home;
