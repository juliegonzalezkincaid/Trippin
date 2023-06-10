import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import '../Trips/Styles.css';
import { useHistory } from 'react-router-dom';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [iconClicked, setIconClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (iconClicked) {
      setTimeout(() => {
        history.push("/my_trips");
      }, 5000); // this should be the same as your animation duration
    }
  }, [iconClicked, history]);

  const handleClick = () => {
    setIconClicked(true);
  };

  return (
    <div className="home-container">
      <h1>Welcome {user.username} Let's Start Trippin!!</h1>

      <div className="icon-container">
        <div 
          className={`icon-wrapper ${iconClicked ? 'animate' : ''}`} 
          style={{ textDecoration: 'none' }} 
          onClick={handleClick}
        >
          <ParaglidingIcon className="icon-avatar" sx={{ fontSize: 80, color: '#49F2A9' }} />
          <span className="icon-title"></span>
        </div>
      </div>

      <div className="logout-container">
        <LogOutButton className="logout-button" />
      </div>
    </div>
  );
}

export default UserPage;


