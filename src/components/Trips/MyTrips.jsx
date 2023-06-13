

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
    const categories = useSelector((state) => state.categories);

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

  

  if (!userTrip) {
 
  
    return (
      <div>
        <h2 className="welcome"
        >Welcome, {user.username} lets start trippin!</h2>
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
        <br></br>
        <br></br>
      <Button 
     
        component={Link} to="/add_trips"
        className="addtripsbutton"
        variant="contained"
        style={{ fontFamily: "Georgia", 
        textShadow: '4px 1px 2px rgba(0, 0, 0, 0.8)', 
        fontSize: '23px', fontWeight: 'bold',  }}
        // color=""
        >Add a Trip
      </Button>

      <br></br>
      <br></br>
{/*           
 {userTrip.map((trip, index) => (
    <EachTrip
    
      key={trip.id}
      trip={trip}
      handleEditTrip={(editedTrip) => handleEditTrip(editedTrip, index)}
      savedTrips={savedTrips}
      style={{ fontFamily: "Georgia", 
      textShadow: '4px 1px 2px rgba(0, 0, 0, 0.8)', 
      fontSize: '30px', 
      fontWeight: 'bolder', 
      color: 'purple',
    }}
    />
  ))} */}
   
   
        <h2 className="saved"
         style={{ fontFamily: "Georgia", textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)', fontSize: '40px', fontWeight: 'bold',  }}
        >Saved Trips:</h2>
         {savedTrips.length === 0 ? (
        <p>No saved trips to show...yet!</p>
          ) : (

            <>
            {savedTrips.map((trip, i) => {
              const startDate = new Date(trip.start_date);
              const endDate = new Date(trip.end_date);
        
              return (
                <EachTrip
                  key={i}
                  trip={{
                    id: trip.id,
                    tripName: trip.tripName,
                    description: trip.description,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                  }}
                  handleEditTrip={handleEditTrip}
                  handleDeleteTrip={() => handleDeleteTrip(trip.id)}
                  savedTrips={savedTrips}
                  style={{
                    fontFamily: "Georgia",
                    fontWeight: "bolder",
                    textShadow: '4px 1px 2px rgba(0, 0, 0, 0.8)',
                    fontSize: '30px',
                  }}
                />
              );
            })}
          </>
        )}

     <Route 
     path="/edit_trip/:tripId" 
     component={EditTrip} 
     style={{ fontFamily: "Georgia" }}
     />

      </div>
      
    );
  }

export default MyTrips;


