import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming correct import path
import userData from './Data/userData.json'; // Ensure the path is correct

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook to access the navigation function

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const user = userData.find(u => u.username === username && u.password === password);

    if (user) {
      // Redirect to the Home page
      navigate('/');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;
