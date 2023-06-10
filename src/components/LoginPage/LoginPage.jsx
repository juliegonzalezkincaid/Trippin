import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './Login.css';


function LoginPage() {
  const history = useHistory();

  return (
    <div
    className='yellow'>
     <div className="content-container">
      <LoginForm
      className="yellow" />
     
        
    </div>
    </div>
  );
}

export default LoginPage;
