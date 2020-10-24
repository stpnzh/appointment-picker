import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    // <Redirect to='/'/>
  }

  return (
    <div className='container'>
      <h1 className='is-size-1'>Login here</h1>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-link" onClick={handleSubmit}>
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login;