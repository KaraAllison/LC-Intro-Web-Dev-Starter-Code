import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp(prop) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUserChange = (event) => {
    setUserName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    prop.setLog(true);
    navigate('todo');
  }

  return (
    <div id='signup'>
        <form onSubmit={handleSubmit}>
            <h2>Welcome to Adventure Log</h2>
            <h3>Please create an account</h3>
            <div id='textboxes'>
            <p><label>UserName<br></br><input type='text' name='userName' required onChange={handleUserChange}/></label></p>
            <br></br>
            <p><label>Email<br></br><input type='email' name='email' required onChange={handleEmailChange}/></label></p>
            <br></br>
            <p><label>Password<br></br><input type='password' name='password' required onChange={handlePasswordChange}/></label></p>
            <br></br>
            <div id='button'>
              <button>Sign Up</button>
              </div>
            </div>
    </form>
    </div>
  )
}

export default SignUp;