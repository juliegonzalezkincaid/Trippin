import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { Avatar } from '@mui/material';
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
  useEffect(() => {
    // Dispatch the 'FETCH_CATEGORIES' action when the component mounts
    dispatch({ type: 'FETCH_CATEGORIES' });
  }, []);


  return (
    <div className='cat'>
      <ul className='icon-list'>
        <li>
          <br></br>
          <br></br>
          <br></br>
          <Avatar
            className='icon-avatar'
            sx={{ bgcolor: 'primary.main', width: 56, height: 56,
}}>
            <Link to="/guest_info">
              <PeopleIcon
                className='icon-avatar'
                sx={{ fontSize: 50 }} />
            </Link>
          </Avatar>
        </li>
        <br />
        <li>
          <Avatar
            className='icon-avatar'
            sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}>
            <Link to="/flight_info">
              <FlightIcon
                className='icon-avatar'
                sx={{ fontSize: 50 }} />
            </Link>
          </Avatar>
        </li>
        <br />
        <li>
          <Avatar
            className='icon-avatar'
            sx={{ bgcolor: 'error.main', width: 56, height: 56 }}>
            <Link to="/lodging">
              <HotelIcon
                className='icon-avatar'
                sx={{ fontSize: 48 }} />
            </Link>
          </Avatar>
        </li>
        <br />
        <li>
          <Avatar
            className='icon-avatar'
            sx={{ bgcolor: 'warning.main', width: 56, height: 56 }}>
            <Link to="/suit_case">
              <LuggageIcon
                className='icon-avatar'
                sx={{ fontSize: 50 }} />
            </Link>
          </Avatar>
        </li>
        <br />
        <li>
          <Avatar
            className='icon-avatar'
            sx={{ bgcolor: 'info.main', width: 56, height: 56 }}>
            <Link to="/misc">
              <PsychologyAltIcon
                className='icon-avatar'
                sx={{ fontSize: 50 }} />
            </Link>
          </Avatar>
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









