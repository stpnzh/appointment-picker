import React, { useState } from 'react';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await fetch(`http://localhost:5000/api/user/login`), {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email
    //   })
    // }
  }

  return (
    <div className='container'>
      <h1 className='is-size-1'>Register here</h1>
      <div className="field">
        <p className="control is-expanded has-icons-left">
          <input className="input" type="text" placeholder="Name" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
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
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-link" onClick={handleSubmit}>
            Register
          </button>
        </p>
      </div>
    </div>
  )
}

export default Register;