

import EachTrip from "../Trips/EachTrip";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Link, Route } from 'react-router-dom';
import EditTrip from "../Trips/EditTrip";
import  './Styles.css';

function MyTrips ({}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userTrip, savedTrips } = useSelector((store) => store.trip);
    const user = useSelector((store) => store.user);
    

    useEffect(() => {
     dispatch({ type: "FETCH_TRIPS" });
     dispatch({ type: "GET_SAVED_TRIPS", payload: user.id }); 
  }, [dispatch, user.id]);


  // const handleDeleteTrip = (tripID) => {
  //   dispatch({ type: "DELETE_TRIP", payload: tripID });
  // };

  const handleDeleteTrip = (tripID) => {
    dispatch({ type: "DELETE_TRIP", payload: user, tripID });
  };

  
  const handleEditTrip = (editedTrip, index,) => {
    dispatch({ type: "EDIT_TRIP", payload: { trip: editedTrip, index } });
  };
  
  {userTrip.map((trip, index) => (
    <EachTrip
      key={trip.id}
      trip={trip}
      handleEditTrip={(editedTrip) => handleEditTrip(editedTrip, index)}
      savedTrips={savedTrips}
    />
  ))}
  
 
  // const handleEditTrip = (trip) => {
  //   dispatch({ type: "EDIT_TRIP", payload: trip });
  //   history.push(`/edit/${trip.tripID}`);
  // };
  
 
  if (!userTrip) {
  // if (!userTrip || userTrip.length === 0) {
  
    return (
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p>My Trips:</p>
        <p>No trips to show...yet!</p>
      </div>
    );
  }
    return (
      <div 
      className="my-trips-container"
      >

        <h2>Welcome, {user.username}!</h2>
        <p>My Trips:</p>
        {userTrip.map((trip) => (
          <EachTrip 
          key={trip.id} 
          trip={trip} 
          handleEditTrip={handleEditTrip}
          savedTrips={savedTrips}
          />
         
        ))}
   <Button component={Link} to="/add_trips">
          Add a Trip
        </Button>
        <h2>Saved Trips:</h2>
         {savedTrips.length === 0 ? (
        <p>No saved trips to show...yet!</p>
          ) : (
          savedTrips.map((trip) => (
            <EachTrip 
            key={trip.id} 
            trip={trip} 
            handleEditTrip={handleEditTrip} 
            // savedTrips={savedTrips}
            handleDeleteTrip={() => handleDeleteTrip(trip.id)}
            savedTrips={savedTrips}
            />
          ))
        )}
     <Route path="/edit_trip/:tripId" component={EditTrip} />

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