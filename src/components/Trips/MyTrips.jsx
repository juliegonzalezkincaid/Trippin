

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
        {/* <h2 className="solid"> Hey {user.username}! Let's start Trippin!</h2> */}
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Button 
     
        component={Link} to="/add_trips"
        className="button"
        variant="contained"
        style={{ 
        backgroundColor: 'hsl(94, 82%, 60%)', 
        color: 'white', 
        fontFamily: "Georgia", 
        textShadow: '3px 1px 2px rgba(0, 0, 0, 1.8)', 
        fontSize: '20px', fontWeight: 'bold', 
        boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
        marginTop: '60px',
      }}
       
        >Add a Trip
      </Button>

        <h2 className="saved"
         style={{ 
          fontFamily: "Georgia", 
          fontSize: '40px', 
          fontWeight: 'bold',  
          textShadow: "3px 2px 3px white",
          marginTop: "0px"
        }}
        
        >Saved Trips:</h2>
         {savedTrips.length === 0 ? (
        <p className="savedTrips"  
        style={{ 
          fontFamily: "Georgia", 
          fontSize: '40px', 
          fontWeight: 'bold',  textShadow: "3px 2px 3px white" }}
        
        >No saved trips to show...yet!</p>
          ) : (

            <div className="saved-trips-container">


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
                    textShadow: '9px 1px 1px rgba(0, 0, 0, 9.8)',
                    fontSize: '30px',
                  }}
                  
                />
              );
            })}
          </div>
        )}

     <Route 
     path="/edit_trip/:tripId" 
     component={EditTrip} 
     style={{ fontFamily: "Georgia"
     }}
     />

      </div>
      
    );
  }

export default MyTrips;
