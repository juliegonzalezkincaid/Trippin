import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

function FlightInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((store) => store);

  const [formValues, setFormValues] = useState({
    name: "",
    date: "",
    fromCity: "",
    toCity: "",
    airline: "",
    flightNum: "",
    departTime: "",
    arrivalTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch ({type: 'SET_FLIGHT_INFO', payload: formValues });
    // Dispatch form values to the appropriate action or store them as needed
    // Example: dispatch({ type: "ADD_FLIGHT", payload: formValues });
  }

  return (
    <div className="flight-info-container">
    <Typography variant="h3" gutterBottom>
      Flight Information
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Name"
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="date"
        label="Date"
        type="date"
        name="date"
        value={formValues.date}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="fromCity"
        label="From City"
        type="text"
        name="fromCity"
        value={formValues.fromCity}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="toCity"
        label="To City"
        type="text"
        name="toCity"
        value={formValues.toCity}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="airline"
        label="Airline"
        type="text"
        name="airline"
        value={formValues.airline}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="flightNum"
        label="Flight Number"
        type="text"
        name="flightNum"
        value={formValues.flightNum}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="departTime"
        label="Departure Time"
        type="text"
        name="departTime"
        value={formValues.departTime}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="arrivalTime"
        label="Arrival Time"
        type="text"
        name="arrivalTime"
        value={formValues.arrivalTime}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  </div>
);
}
export default FlightInfo;





    