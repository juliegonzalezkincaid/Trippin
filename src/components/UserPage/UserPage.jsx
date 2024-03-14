import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import '../Trips/Styles.css';
import { useHistory, Link } from 'react-router-dom';
import ParaglidingTwoToneIcon from '@mui/icons-material/ParaglidingTwoTone';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [iconClicked, setIconClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (iconClicked) {
      setTimeout(() => {
        history.push("/my_trips");
      }, 5000); // this should be the same as animation duration
    }
  }, [iconClicked, history]);

  const handleClick = () => {
    setIconClicked(true);
  };

  return (
    <div className="home-container">
      <h1>Welcome {user.username} Let's Start Trippin!!</h1>
      
      <Link to="/my_trips" style={{ textDecoration: 'none' }}>
        <div 
          className={`icon-container ${iconClicked ? 'animate' : ''}`} 
          style={{ textDecoration: 'none' }} 
          onClick={handleClick}
        >
          <ParaglidingTwoToneIcon className="icon-avatar" sx={{ fontSize: 80, color: '#49F2A9',
          filter: "drop-shadow(4px 4px 3px rgba(0, 0, 0, 2.5))" }} />
          <span className="icon-title"></span>
        </div>
      </Link>
      
      <div className="logout-container">
        <LogOutButton className="logout-button" />
      </div>
    </div>
  );
}

export default UserPage;
