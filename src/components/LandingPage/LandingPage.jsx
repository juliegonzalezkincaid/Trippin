import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className='landing'>
      <div className="container">
        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              {/* Your content goes here */}
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />
            {/* Container for "Already a Member?" text and "Login" button */}
            <div className="login-container">
              <h4 style={{ fontFamily: 'Georgia', color: 'white', textShadow: '7px 2px 4px rgba(0, 0, 0, 7.8)', fontSize: '25px' }}>
                Already a Member?
              </h4>
              <button className="btn btn_sizeSm" onClick={onLogin} style={{ fontFamily: 'Georgia', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '25px' }}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
