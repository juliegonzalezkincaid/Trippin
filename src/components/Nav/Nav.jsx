import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import ParaglidingOutlinedIcon from '@mui/icons-material/ParaglidingOutlined';
function Nav() {



  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h1 className="nav-title">Trippin</h1>
      </Link>
      <div className="nave-links">
       

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}

        <Link className="navLink" to="/my_trips">
        <ParaglidingOutlinedIcon className="navIcon" sx={{ fontSize: 40,filter: "drop-shadow(4px 4px 3px rgba(0, 0, 0, 2.5))" }} />
       
        </Link>
 {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login
          </Link>
        )}

<LogOutButton className="navLink" />
      </div>
    </div>
  );
}

export default Nav;
