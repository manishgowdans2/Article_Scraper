import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import "./register.css"
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/register', { username,email, password })
      .then((response) => {
        console.log('User registered:', response.data);
        setErrorMessage('User registered');
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setErrorMessage('Registration failed. Please try again.');
      });

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Navbar/>
    <div className='login'>
      <h2>Register</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="username">Email:</label>
          <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="reg_btn" type="submit">Submit</button>
      </form>
     Already an User? Then <Link to='/login'>Login</Link>
    </div>

    </>
  );
};

export default Register;
