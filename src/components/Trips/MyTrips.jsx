

import EachTrip from "../Trips/EachTrip";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Link, Route } from 'react-router-dom';
import EditTrip from "../Trips/EditTrip";
import './Styles.css';

function MyTrips ({}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userTrip, savedTrips } = useSelector((store) => store.trip);
    const user = useSelector((store) => store.user);
    

    useEffect(() => {
     dispatch({ type: "FETCH_TRIPS" });
     dispatch({ type: "GET_SAVED_TRIPS", payload: user.id }); 
  }, [dispatch, user.id]);

  const handleDeleteTrip = (tripID,event) => {
    event.preventDefault();
    dispatch({ type: "DELETE_TRIP", payload: user, tripID });
  };

  
  const handleEditTrip = (editedTrip, index,event) => {
    event.preventDefault();
    dispatch({ type: "EDIT_TRIP", payload: { trip: editedTrip, index } });
    history.push(`/edit_trip/${editedTrip.id}`);
  };

  
 // const handleEditTrip = (trip) => {
  //   dispatch({ type: "EDIT_TRIP", payload: trip });
  //   history.push(`/edit/${trip.tripID}`);
  // };
  
  if (!userTrip) {
  // if (!userTrip || userTrip.length === 0) {
  
    return (
      <div>
        <h2 className="h1">Welcome, {user.username} lets start trippin!</h2>
        <p>My Trips:</p>
        <p>No trips to show...yet!</p>
      </div>
    );
  }
    return (
      <div 
      className="my-trips-container"
      >
        <h2 className="solid"> {user.username} you are Trippin!</h2>
        <br></br>
        <br></br>
        <br></br>
      <Button 
        component={Link} to="/add_trips"
        className="addtripsbutton"
        variant="contained"
        color="success"
        >Add a Trip
      </Button>

      <br></br>
      <br></br>
          
 {userTrip.map((trip, index) => (
    <EachTrip
    
      key={trip.id}
      trip={trip}
      handleEditTrip={(editedTrip) => handleEditTrip(editedTrip, index)}
      savedTrips={savedTrips}
    />
  ))}
        {/* <p>{user.username}'s Trips:</p> */}
        {/* {savedTrips.map((trip) => (
          <EachTrip 
          key={trip.id} 
          trip={trip} 
          handleEditTrip={handleEditTrip}
          savedTrips={savedTrips}
          />
         ))}
    */}
   
        {/* <h2>Saved Trips:</h2> */}
         {savedTrips.length === 0 ? (
        <p>No saved trips to show...yet!</p>
          ) : (
          savedTrips.map((trip) => (
            <EachTrip 
            key={trip.id} 
            trip={trip} 
            handleEditTrip={handleEditTrip}
            color='white'
            handleDeleteTrip={() => handleDeleteTrip(trip.id)}
            savedTrips={savedTrips}
            date={trip.date} 
            />
          ))
        )}
     <Route 
     path="/edit_trip/:tripId" 
     component={EditTrip} 
     />

      </div>
      
    );
  }

export default MyTrips;

//       {userTrip?.map((trip, i) => (
//         <EachTrip key={i} trip={trip} handleEditTrip={handleEditTrip} />
//       ))}
//       <h2>Saved Trips:</h2>
//  {/* <h5 view={"saved"}></h5> */}
//       {savedTrips.length === 0 ? (
//         <p>Nothing to show...yet! Trips you plan will come here.</p>
//       ) : null}
//     </div>
//   );
// }
 // Fetch saved trips for current user
 
  //   const handleEditTrip = (tripID) => {
  //   const data = { tripID, id: user.id };
  //   dispatch({ type: "GET_TRIP_BY_ID", payload: data });
  //   history.push(`/edit/${tripID}`);
  // };

    // const handleDeleteTrip = (tripID) => {
  //   dispatch({ type: "DELETE_TRIP", payload: tripID });
  // };