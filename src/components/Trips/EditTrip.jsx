import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, TextField, Typography, Container } from "@mui/material";
import './Styles.css'

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((store) => store);
    const { tripId } = useParams();
    const trip = useSelector((store) => store.trip.userTrip.find((t) => t.id === tripId));
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(trip?.startDate || "");
    const [endDate, setEndDate] = useState(trip?.endDate || "");
    useEffect(() => {

    }, []);

    useEffect(() => {
      if (trip) {
        setDescription(trip.description);
        setStartDate(trip.startDate);
        setEndDate(trip.endDate);
      } else {
        // Trip not found, handle the error or redirect to an error page
      }
    }, [trip]);

      const handleDescriptionChange = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
      };
      
      const handleStartDateChange = (event) => {
        event.preventDefault();
        setStartDate(event.target.value);
      };
      
      const handleEndDateChange = (event) => {
        event.preventDefault();
        setEndDate(event.target.value);
      };
      useEffect(() => {
        // Fetch the trip data for editing
        dispatch({ 
          type: "GET_TRIP_BY_ID", 
          payload: tripId });
      }, [dispatch, tripId]);
    // }, []);
  

      const handleUpdate = (event) => {
        event.preventDefault();
        
        const updatedTrip = {
          userId: user.id,
          id: tripId,
          description,
          startDate,
          endDate,
        };
      
        dispatch({ 
          type: "UPDATE_TRIP", 
          payload: updatedTrip 
        });
        history.push('/my_trips')
};
return (

  <div className="edittrip">
    <Container maxWidth="sm"
     style={{ fontFamily: "Georgia" }}
    >
      <Typography 
      variant="h3" 
      align="center"
      
       style={{ fontFamily: "Georgia",  fontWeight: 'bolder',textShadow: '5px 1px 2px rgba(0, 0, 0, 5.8)',
      color: 'rgb(243, 164, 66)', marginTop: '-40px'}}
      >
        Edit Trip
      </Typography>
      <form onSubmit={handleUpdate}>
        <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          required
          margin="normal"
          style={{ 
          fontFamily: "Georgia", 
          backgroundColor: "transparent",
        }}
        />
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
           fontFamily: "Georgia", 
           backgroundColor: "transparent",
          }}
          margin="normal"
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
            fontFamily: "Georgia"
          }}
          margin="normal"
        />
        <Button 
        type="submit" 
        variant="contained" 
        color="secondary" 
        style={{ fontFamily: "Georgia", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '25px', boxShadow: '9px 2px 5px rgba(0, 0, 0, 0.8)',marginTop: '20px' 
      
      }}
        >
          Update
        </Button>
      </form>
    </Container>
    </div>
  );
}




export default EditTrip;