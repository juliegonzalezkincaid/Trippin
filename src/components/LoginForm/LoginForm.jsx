import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="yellow" onSubmit={login}>
     <br></br>
     <br></br>
     <br></br>
      <h2 style={{ fontFamily: 'Georgia', textShadow: '5px 2px 3px rgba(0, 0, 0, 0.8)', fontSize: '60px',marginTop: '20px',  }}>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>

      )}
      
      <div>
        <label htmlFor="username" style={{ fontFamily: 'Georgia',  textShadow: '4px 0px 4px rgba(0, 0, 0, 0.8)', fontSize: '40px',  }}>
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}style={{ fontFamily: 'Georgia', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '25px', boxShadow: '9px 2px 5px rgba(0, 0, 0, 0.8)',marginTop: '15px' }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password" style={{ fontFamily: 'Georgia',  textShadow: '5px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '40px',  }}>
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}style={{ fontFamily: 'Georgia', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '25px', boxShadow: '9px 2px 5px rgba(0, 0, 0, 0.8)',marginTop: '20px' }}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
      <Button
          
          variant="contained"
          color="success"
          size="large"
          onClick={()=> {
            history.push('/home');
          }}style={{ fontFamily: 'Georgia', color: 'white', textShadow: '4px 2px 4px rgba(0, 0, 0, 0.8)',boxShadow: '4px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '20px', marginTop: '20px' }}
        >
          Register
        </Button>
    </form>
  );
}

export default LoginForm;
