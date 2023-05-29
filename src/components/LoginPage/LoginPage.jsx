import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { Button } from "@mui/material";

function LoginPage() {
  const history = useHistory();

  return (
    <div
    className='yellow'>
      <LoginForm
      className="yellow" />
      
      <center>
        <Button
          type="button"
          variant="contained"
          color="success"
          className="btn btn_asLink"
          size="small"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
