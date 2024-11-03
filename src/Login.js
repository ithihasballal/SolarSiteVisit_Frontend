import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './common/NavBar';
import './Login.css';  // Import the CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsers = [
      { username: 'Inspector', password: 'Password@123', redirect: '/inspector-home' },
      { username: 'Approver', password: 'Password@456', redirect: '/approver-home' },
    ];

    const user = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate(user.redirect);  // Navigate based on user type
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
        <NavBar />
      <div> <h1>Welcome</h1> 
        </div>  
        
     <div className="login-container">
      <form  className="form2" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
