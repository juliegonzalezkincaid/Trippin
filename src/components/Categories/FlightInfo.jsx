import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

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
    // Dispatch form values to the appropriate action or store them as needed
    // Example: dispatch({ type: "ADD_FLIGHT", payload: formValues });
  };

  return (
    <>
      <h2>Flight Information</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="date"
          label="Date"
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="fromCity"
          label="From City"
          type="text"
          name="fromCity"
          value={formValues.fromCity}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="toCity"
          label="To City"
          type="text"
          name="toCity"
          value={formValues.toCity}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="airline"
          label="Airline"
          type="text"
          name="airline"
          value={formValues.airline}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="flightNum"
          label="Flight Number"
          type="text"
          name="flightNum"
          value={formValues.flightNum}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="departTime"
          label="Departure Time"
          type="text"
          name="departTime"
          value={formValues.departTime}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="arrivalTime"
          label="Arrival Time"
          type="text"
          name="arrivalTime"
          value={formValues.arrivalTime}
          onChange={handleChange}
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default FlightInfo;





    