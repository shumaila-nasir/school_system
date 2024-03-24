import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('Login');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((action === 'Login' && email && password) || (action === 'Sign Up' && name && email && password)) {
      if (action === 'Login') {
        console.log('Email:', email);
        console.log('Password:', password);
      } else {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
      }
      // Clear input fields
      setName('');
      setEmail('');
      setPassword('');
    } else {
      if (action === 'Login' && (!email || !password)) {
        alert('Please fill in Email and Password.');
      } else if (action === 'Sign Up' && (!name || !email || !password)) {
        alert('Please fill in all required fields.');
      }
    }
  };


  return (
    <div className="container mt-5">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3 className='text-warning mt-2'>{action}</h3>

        {action === 'Login' ? null : (
          <div>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        )}

        <label htmlFor="username">Email Id</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        
        <button onClick={(e) => {
              
              handleSubmit(e); 
            }}>{action}</button>
         <small>Click here for {action} account </small>

        <div className="social">
          <div
            className={action === 'Sign Up' ? 'submit' : 'submit orange'}
            onClick={(e) => {
              setAction('Login');
              
            }}
          >
            Login
          </div>
          <div
            className={action === 'Login' ? 'submit' : 'submit orange'}
            onClick={(e) => {
              setAction('Sign Up');
             
            }}
          >
            Sign Up
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
