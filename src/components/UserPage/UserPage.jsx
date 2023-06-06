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





// import React, { useState } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import { useSelector } from 'react-redux';
// import '../Trips/Styles.css';
// import { Link } from 'react-router-dom';
// import ParaglidingIcon from '@mui/icons-material/Paragliding';

// function UserPage() {
//   const user = useSelector((store) => store.user);
//   const [iconClicked, setIconClicked] = useState(false);

//   const handleClick = () => {
//     setIconClicked(true);
//     setTimeout(() => {
//       setIconClicked(false); // reset animation state after some time
//     }, 5000); // timeout should be the same as animation duration
//   };

//   return (
//     <div className="container">
//       <h1>Welcome {user.username} Let's Start Trippin!!</h1>

//       <div className="icon-container">
//       <Link 
//   to="/my_trips" 
//   className={`icon-wrapper ${iconClicked ? 'animate' : ''}`} 
//   style={{ textDecoration: 'none' }} 
//   onClick={handleClick}
// >
//   <ParaglidingIcon className="icon-avatar" sx={{ fontSize: 50, color: '#49F2A9' }} />
//   <span className="icon-title">My Trips</span>
// </Link>

//       </div>

//       <div className="logout-container">
//         <LogOutButton className="logout-button" />
//       </div>
//     </div>
//   );
// }

// export default UserPage;





// import React, { useState } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import { useSelector } from 'react-redux';
// import '../Trips/Styles.css';
// import '../Trips/MyTrips.jsx';
// import { Link, Route, Switch } from 'react-router-dom';
// import ParaglidingIcon from '@mui/icons-material/Paragliding';

// function UserPage() {
//   // this component doesn't do much to start, just renders some user reducer info to the DOM
//   const user = useSelector((store) => store.user);
//   const [iconClicked, setIconClicked] = useState(false);
//   const handleClick = () => {
//     setIconClicked(true);
//   };
//   return (
//     <div className="container">
//       <br></br>
//       <br></br>
//       <h1>Welcome {user.username} Let's Start Trippin!!</h1>
     
//       <div className="icon-container">
//         <Link to="/my_trips" className={`icon-wrapper ${iconClicked ? 'fall' : ''}`} style={{ textDecoration: 'none' }} onClick={handleClick}>
//           <ParaglidingIcon className="icon-avatar" sx={{ fontSize: 50, color: '#49F2A9' }} />
//           <span className="icon-title">My Trips</span>
//         </Link>
//       </div>

    

    
//       {/* <p>Your ID is: {user.id}</p> */}

//       <div className="logout-container">
//         <LogOutButton className="logout-button" />
//       </div>
//     </div>
//   );
// }

// // this allows us to use <App /> in index.js
// export default UserPage;

