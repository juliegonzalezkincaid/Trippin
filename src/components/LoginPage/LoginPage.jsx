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
      
      <Button
          
          variant="contained"
          color="success"
          size="large"
          onClick={()=> {
            history.push('/registration');
          }}
        >
          Register
        </Button>
    </div>
  );
}

export default LoginPage;
