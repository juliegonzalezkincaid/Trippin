import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2 style={{ fontFamily: 'Georgia', color: 'white',
       textShadow: '8px 2px 3px rgba(0, 0, 0, 10.8)', fontSize: '40px', marginTop: '80px'}}>Register User:</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert" style={{ fontFamily: 'Georgia', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username" style={{ fontFamily: 'Georgia', color: 'white', textShadow: '7px 2px 4px rgba(0, 0, 0, 4.8)', fontSize: '30px' }}>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}style={{ fontFamily: 'Georgia', color: 'white', textShadow: '7px 2px 4px rgba(0, 0, 0, 4.8)', fontSize: '20px' }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password" style={{ fontFamily: 'Georgia', color: 'white', textShadow: '7px 2px 4px rgba(0, 0, 0, 4.8)', fontSize: '30px' }}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)} style={{ fontFamily: 'Georgia', color: 'white', textShadow: '9px 2px 4px rgba(0, 0, 0, 9.8)', fontSize: '20px' }}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" style={{ fontFamily: 'Georgia', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '25px', marginTop: '20px' }} />
      </div>
    </form>
  );
}

export default RegisterForm;
