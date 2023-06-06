import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import PeopleIcon from '@mui/icons-material/People';
import HotelIcon from '@mui/icons-material/Hotel';
import LuggageIcon from '@mui/icons-material/Luggage';
import FlightInfo from '../Categories/FlightInfo';
import GuestInfo from '../Categories/GuestInfo';
import Lodging from '../Categories/Lodging';
import Misc from '../Categories/Misc';
import Suitcase from '../Categories/SuitCase';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import './Categories.css';
import { useSelector } from 'react-redux';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const entries = useSelector((state) => state.entries);

  const dispatch = useDispatch();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  return (
    <div className='cat'>
      <ul className='icon-list'>
        <li>
          <div
            className={`icon-container ${hoveredIcon === 'guest' ? 'hovered' : ''}`}
            onMouseEnter={() => handleIconHover('guest')}
            onMouseLeave={() => handleIconHover(null)}
          >
            <Avatar
              className='icon-avatar'
              sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}
            >
              <Link to="/guest_info">
                <PeopleIcon className='icon-avatar' sx={{ fontSize: 50 }} />
              </Link>
            </Avatar>
            <Typography
              className={`icon-title ${hoveredIcon === 'guest' ? 'visible' : ''}`}
              variant='h2'
              sx={{ fontFamily: 'Georgia', fontWeight: 'bolder',textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Guest Info
            </Typography>
          </div>
        </li>

        <li>
          <div
            className={`icon-container ${hoveredIcon === 'flight' ? 'hovered' : ''}`}
            onMouseEnter={() => handleIconHover('flight')}
            onMouseLeave={() => handleIconHover(null)}
          >
            <Avatar
              className='icon-avatar'
              sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}
            >
              <Link to="/flight_info">
                <FlightIcon className='icon-avatar' sx={{ fontSize: 50 }} />
              </Link>
            </Avatar>
            <Typography
              className={`icon-title ${hoveredIcon === 'flight' ? 'visible' : ''}`}
              variant='h2'
              sx={{ fontFamily: 'Georgia', fontWeight: 'bolder',textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Flight Info
            </Typography>
          </div>
        </li>
        <br />
        <li>
          <div
            className={`icon-container ${hoveredIcon === 'lodging' ? 'hovered' : ''}`}
            onMouseEnter={() => handleIconHover('lodging')}
            onMouseLeave={() => handleIconHover(null)}
          >
            <Avatar
              className='icon-avatar'
              sx={{ bgcolor: 'error.main', width: 56, height: 56 }}
            >
              <Link to="/lodging">
                <HotelIcon className='icon-avatar' sx={{ fontSize: 48 }} />
              </Link>
            </Avatar>
            <Typography
              className={`icon-title ${hoveredIcon === 'lodging' ? 'visible' : ''}`}
              variant='h2'
              sx={{ fontFamily: 'Georgia', fontWeight: 'bolder',textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Lodging
            </Typography>
          </div>
        </li>
        <br />
        <li>
          <div
            className={`icon-container ${hoveredIcon === 'suitcase' ? 'hovered' : ''}`}
            onMouseEnter={() => handleIconHover('suitcase')}
            onMouseLeave={() => handleIconHover(null)}
          >
            <Avatar
              className='icon-avatar'
              sx={{ bgcolor: 'warning.main', width: 56, height: 56 }}
            >
              <Link to="/suit_case">
                <LuggageIcon className='icon-avatar' sx={{ fontSize: 50 }} />
              </Link>
            </Avatar>
            <Typography
              className={`icon-title ${hoveredIcon === 'suitcase' ? 'visible' : ''}`}
              variant='h2'
              sx={{ fontFamily: 'Georgia', fontWeight: 'bolder',textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              What To Bring
            </Typography>
          </div>
        </li>
        <br />
        <li>
          <div
            className={`icon-container ${hoveredIcon === 'misc' ? 'hovered' : ''}`}
            onMouseEnter={() => handleIconHover('misc')}
            onMouseLeave={() => handleIconHover(null)}
          >
            <Avatar
              className='icon-avatar'
              sx={{ bgcolor: 'info.main', width: 56, height: 56 }}
            >
              <Link to="/misc">
                <PsychologyAltIcon className='icon-avatar' sx={{ fontSize: 50 }} />
              </Link>
            </Avatar>
            <Typography
              className={`icon-title ${hoveredIcon === 'misc' ? 'visible' : ''}`}
              variant='h2'
              sx={{ fontFamily: 'Georgia', fontWeight: 'bolder',textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Questions
            </Typography>
          </div>
        </li>
        <br />
      </ul>

      <Switch>
        <Route path="/guest_info" component={GuestInfo} />
        <Route path="/flight_info" component={FlightInfo} />
        <Route path="/lodging" component={Lodging} />
        <Route path="/suit_case" component={Suitcase} />
        <Route path="/misc" component={Misc} />
      </Switch>
    </div>
  );
}

export default Categories;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link, Route, Switch } from 'react-router-dom';
// import { Avatar, Typography } from '@mui/material';
// import FlightIcon from '@mui/icons-material/Flight';
// import PeopleIcon from '@mui/icons-material/People';
// import HotelIcon from '@mui/icons-material/Hotel';
// import LuggageIcon from '@mui/icons-material/Luggage';
// import FlightInfo from '../Categories/FlightInfo';
// import GuestInfo from '../Categories/GuestInfo';
// import Lodging from '../Categories/Lodging';
// import Misc from '../Categories/Misc';
// import Suitcase from '../Categories/SuitCase';
// import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
// import './Categories.css';
// import { useSelector } from 'react-redux';

// function Categories() {
//   const categories = useSelector((state) => state.categories);
//   const entries = useSelector((state) => state.entries);

//   const dispatch = useDispatch();
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   const handleIconHover = (icon) => {
//     setHoveredIcon(icon);
//   };

//   return (
//     <div className='cat'>
//       <ul className='icon-list'>
//         <li>
//           <div
//             className={`icon-container ${hoveredIcon === 'guest' ? 'hovered' : ''}`}
//             onMouseEnter={() => handleIconHover('guest')}
//             onMouseLeave={() => handleIconHover(null)}
//           >
//             <Avatar
//               className='icon-avatar'
//               sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}
//             >
//               <Link to="/guest_info">
//                 <PeopleIcon className='icon-avatar' sx={{ fontSize: 50 }} />
//               </Link>
//             </Avatar>
//             {hoveredIcon === 'guest' && (
//               <Typography className='icon-title' variant='h3' sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
//                 Guest Info
//               </Typography>
//             )}
//           </div>
//         </li>

//         <li>
//           <div
//             className={`icon-container ${hoveredIcon === 'flight' ? 'hovered' : ''}`}
//             onMouseEnter={() => handleIconHover('flight')}
//             onMouseLeave={() => handleIconHover(null)}
//           >
//             <Avatar
//               className='icon-avatar'
//               sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}
//             >
//               <Link to="/flight_info">
//                 <FlightIcon className='icon-avatar' sx={{ fontSize: 50 }} />
//               </Link>
//             </Avatar>
//             {hoveredIcon === 'flight' && (
//               <Typography className='icon-title' variant='h3' sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
//                 Flight Info
//               </Typography>
//             )}
//           </div>
//         </li>
//         <br />
//         <li>
//           <div
//             className={`icon-container ${hoveredIcon === 'lodging' ? 'hovered' : ''}`}
//             onMouseEnter={() => handleIconHover('lodging')}
//             onMouseLeave={() => handleIconHover(null)}
//           >
//             <Avatar
//               className='icon-avatar'
//               sx={{ bgcolor: 'error.main', width: 56, height: 56 }}
//             >
//               <Link to="/lodging">
//                 <HotelIcon className='icon-avatar' sx={{ fontSize: 48 }} />
//               </Link>
//             </Avatar>
//             {hoveredIcon === 'lodging' && (
//               <Typography className='icon-title' variant='h3' sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
//                 Lodging
//               </Typography>
//             )}
//           </div>
//         </li>
//         <br />
//         <li>
//           <div
//             className={`icon-container ${hoveredIcon === 'suitcase' ? 'hovered' : ''}`}
//             onMouseEnter={() => handleIconHover('suitcase')}
//             onMouseLeave={() => handleIconHover(null)}
//           >
//             <Avatar
//               className='icon-avatar'
//               sx={{ bgcolor: 'warning.main', width: 56, height: 56 }}
//             >
//               <Link to="/suit_case">
//                 <LuggageIcon className='icon-avatar' sx={{ fontSize: 50 }} />
//               </Link>
//             </Avatar>
//             {hoveredIcon === 'suitcase' && (
//               <Typography className='icon-title' variant='h3' sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
//                 What To Bring
//               </Typography>
//             )}
//           </div>
//         </li>
//         <br />
//         <li>
//           <div
//             className={`icon-container ${hoveredIcon === 'misc' ? 'hovered' : ''}`}
//             onMouseEnter={() => handleIconHover('misc')}
//             onMouseLeave={() => handleIconHover(null)}
//           >
//             <Avatar
//               className='icon-avatar'
//               sx={{ bgcolor: 'info.main', width: 56, height: 56 }}
//             >
//               <Link to="/misc">
//                 <PsychologyAltIcon className='icon-avatar' sx={{ fontSize: 50 }} />
//               </Link>
//             </Avatar>
//             {hoveredIcon === 'misc' && (
//               <Typography className='icon-title' variant='h3' sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
//                 Questions
//               </Typography>
//             )}
//           </div>
//         </li>
//         <br />
//       </ul>

//       <Switch>
//         <Route path="/guest_info" component={GuestInfo} />
//         <Route path="/flight_info" component={FlightInfo} />
//         <Route path="/lodging" component={Lodging} />
//         <Route path="/suit_case" component={Suitcase} />
//         <Route path="/misc" component={Misc} />
//       </Switch>
//     </div>
//   );
// }

// export default Categories;





// import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import FlightInfo from '../Categories/FlightInfo';
// import GuestInfo from '../Categories/GuestInfo';
// import Lodging from '../Categories/Lodging';
// import Misc from '../Categories/Misc';
// import Suitcase from '../Categories/SuitCase';
// import { Typography, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
// import { Flight, Group, Hotel, QuestionAnswer, Work } from '@mui/icons-material';

// const categoryList = [
//   { path: '/guest-info', label: 'Guests Info', icon: <Group /> },
//   { path: '/flight-info', label: 'Flight Info', icon: <Flight /> },
//   { path: '/lodging', label: 'Lodging', icon: <Hotel /> },
//   { path: '/what-to-bring', label: 'What to Bring', icon: <Work /> },
//   { path: '/q-and-a-notes', label: 'Q&A, Notes', icon: <QuestionAnswer /> },
// ];

// function Categories() {
//   return (
//     <>
//       <List>
//         {categoryList.map((category) => (
//           <ListItem key={category.path} button component={Link} to={category.path}>
//             <ListItemAvatar>
//               <Avatar>{category.icon}</Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={category.label} />
//           </ListItem>
//         ))}
//       </List>

//       <Switch>
//         <Route path="/guest-info" component={GuestInfo} />
//         <Route path="/flight-info" component={FlightInfo} />
//         <Route path="/lodging" component={Lodging} />
//         <Route path="/what-to-bring" component={Suitcase} />
//         <Route path="/q-and-a-notes" component={Misc} />
//       </Switch>
//     </>
//   );
// }

// export default Categories;



// import { Link, Route, Switch } from 'react-router-dom';
// import FlightInfo from '../Categories/FlightInfo';
// import GuestInfo from '../Categories/GuestInfo';
// import Lodging from '../Categories/Lodging';
// import Misc from '../Categories/Misc';
// import Suitcase from '../Categories/SuitCase';

// function Categories() {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link to="/guest-info">Guests Info</Link>
//         </li>
//         <br />
//         <li>
//           <Link to="/flight-info">Flight Info</Link>
//         </li>
//         <br />
//         <li>
//           <Link to="/lodging">Lodging</Link>
//         </li>
//         <br />
//         <li>
//           <Link to="/what-to-bring">What to Bring</Link>
//         </li>
//         <br />
//         <li>
//           <Link to="/q-and-a-notes">Q&A, Notes</Link>
//         </li>
//         <br />
//       </ul>

//       <Switch>
//         <Route path="/guest-info" component={GuestInfo} />
//         <Route path="/flight-info" component={FlightInfo} />
//         <Route path="/lodging" component={Lodging} />
//         <Route path="/what-to-bring" component={Suitcase} />
//         <Route path="/q-and-a-notes" component={Misc} />
//       </Switch>
//     </>
//   );
// }

// export default Categories;









