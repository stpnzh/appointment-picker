import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Login = () => {

  const { loginWithRedirect } = useAuth0();
  return (
    <div className='container'>
      <h1 className='is-size-1'>Login here</h1>
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
          <button className="button is-link" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login;