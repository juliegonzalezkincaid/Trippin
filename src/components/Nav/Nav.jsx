import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories.jsx';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Trippin</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

        <Link className="navLink" to="/my_trips">
          My Trips
        </Link>

        <Link className="navLink" to="/add_trips">
          Add Trips
        </Link>

        <Link className="navLink" to="/each_trip">
          Each Trip
        </Link>


        <Link className="navLink" to="/categories">
          Categories
        </Link>
            {/* <Categories /> */}

      </div>
    </div>
  );
}

export default Nav;
