
      import React, { useState } from 'react';
      import { useNavigate } from 'react-router-dom';
      import './Auth.css';
      
      const SignUp = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const response = await fetch('https://exam-backend-alpha.vercel.app/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
          });
      
          const data = await response.json();
          if (data.token) {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/home');
          }
        };
      
        return (
          <div className="auth-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
          </div>
        );
      };
      
      export default SignUp;
      