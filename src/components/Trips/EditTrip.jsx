import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, TextField, Typography, Container } from "@mui/material";

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { tripId } = useParams();
    const trip = useSelector((store) => store.trip.userTrip.find((t) => t.id === tripId));
    const [description, setDescription] = useState(trip?.description || "");
    const [startDate, setStartDate] = useState(trip?.startDate || "");
    const [endDate, setEndDate] = useState(trip?.endDate || "");

    useEffect(() => {
        // Fetch the trip data for editing
        dispatch({ type: "GET_TRIP_BY_ID", payload: tripId });
      }, [dispatch, tripId]);

      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
      
      const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      };
      
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      };

      const handleUpdate = () => {
        const updatedTrip = {
          id: tripId,
          description,
          startDate,
          endDate,
        };
      
        dispatch({ type: "UPDATE_TRIP", payload: updatedTrip });
        history.push("/my-trips")


};
return (

  <div className="edittrip">
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
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
          }}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update
        </Button>
      </form>
    </Container>
    </div>
  );
        }




export default EditTrip;