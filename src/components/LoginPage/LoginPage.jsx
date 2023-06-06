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
          size="large"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
            fontFamily: "Georgia"
          }}
          onClick={()=> {
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
