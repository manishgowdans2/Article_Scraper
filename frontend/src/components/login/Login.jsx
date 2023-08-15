import React, { useEffect, useState}  from 'react'
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { username, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/write';
        setErrorMessage('Login Successful');
      })
      .catch((error) => console.error('Error logging in:', error));
      setErrorMessage('Login failed. Please try again.');

    setUsername('');
    setPassword('');
  };
  return (
    <>
    <Navbar/>
    <div className='login'>
    <h2>Login as Author</h2>
{errorMessage}
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button className='login_btn' type="submit">Submit</button>
    
    </form>
    
  </div>
  <div className="type">
  New Author ? then please <Link to='/register'><span id='reg'>Register</span></Link> yourself
  </div>


 
</>
  )
}

export default Login