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
     <div className="content-container">
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
    </div>
  );
}

export default LoginPage;
