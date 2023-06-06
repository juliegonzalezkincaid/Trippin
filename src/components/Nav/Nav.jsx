import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h1 className="nav-title">Trippin</h1>
      </Link>
      <div>
       

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
        <ParaglidingIcon className="navLink" sx={{ fontSize: 60, color: '#49F2A9' }} />
        </Link>

        <Link className="navLink" to="/add_trips">
          Add Trips
        </Link>

        {/* <Link className="navLink" to="/each_trip">
          Each Trip
        </Link> */}


        <Link className="navLink" to="/categories">
          Categories
        </Link>
           
 {/* If no user is logged in, show these links */}
 {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

<LogOutButton className="navLink" />
      </div>
    </div>
  );
}

export default Nav;
