import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import './Flight.css';

function FlightInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((store) => store);
  const { selected } = useSelector((store) => store.trip);
  const { setFlightInfo } = useSelector((store) => store.trip); 
  
  
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
    const flightInfo = {
      ...formValues,
      index: setFlightInfo.length,
    };
    dispatch({ type: 'SET_FLIGHT_INFO', payload: flightInfo });
    setFormValues({
      name: "",
      date: "",
      fromCity: "",
      toCity: "",
      airline: "",
      flightNum: "",
      departTime: "",
      arrivalTime: "",
    });
  }
  


  return (
    <div className="flight-body">
    <Typography 
    variant="h3" 
    gutterBottom
    className="h3"
    style={{ fontFamily: "Georgia" }}
    >
      
      Flight Information
    </Typography>
    <form 
      onSubmit={handleSubmit}
      className="flight-form">
    <TextField
        id="name"
        label="Name"
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
        InputLabelProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />

      <TextField
        id="date"
        label="Date"
        type="date"
        name="date"
        value={formValues.date}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
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
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />

      <TextField
        id="toCity"
        label="To City"
        type="text"
        name="toCity"
        value={formValues.toCity}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />

      <TextField
        id="airline"
        label="Airline"
        type="text"
        name="airline"
        value={formValues.airline}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />

      <TextField
        id="flightNum"
        label="Flight Number"
        type="text"
        name="flightNum"
        value={formValues.flightNum}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />

      <TextField
        id="departTime"
        label="Departure Time"
        type="text"
        name="departTime"
        value={formValues.departTime}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
            
          },
        }}
      />

      <TextField
        id="arrivalTime"
        label="Arrival Time"
        type="text"
        name="arrivalTime"
        value={formValues.arrivalTime}
        onChange={handleChange}
        required
        className="input-field"
        margin="normal"
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "Georgia" 
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontFamily: "Georgia" 
          },
        }}
      />
<br></br>
      <Button 
      type="submit" 
      variant="contained" 
      style={{ 
        backgroundColor: 'hsl(94, 82%, 60%)', 
        color: 'white', 
        textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
        boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        fontFamily: "Georgia" ,
        
        }}>
        Submit
      </Button>
      {setFlightInfo.length > 0 && (
      <ul>
        <h3 color= "bisque">Submitted Guest Information:</h3>
        {setFlightInfo.map((flight, index) => (
          <li 
          className="submitinfo"
          key={index}>

<p><span className="label">Name:</span> <span className="value">{flight.name}</span></p>
  <p><span className="label">Date:</span> <span className="value">{flight.date}</span></p>
  <p><span className="label">From City:</span> <span className="value">{flight.fromCity}</span></p>
  <p><span className="label">To City:</span> <span className="value">{flight.toCity}</span></p>
  <p><span className="label">Airline:</span> <span className="value">{flight.airline}</span></p>
  <p><span className="label">Flight Number:</span> <span className="value">{flight.flightNum}</span></p>
  <p><span className="label">Departure Time:</span> <span className="value">{flight.departTime}</span></p>
  <p><span className="label">Arrival Time:</span> <span className="value">{flight.arrivalTime}</span></p>
  <br></br>
         <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: 'DELETE_FLIGHT_INFO', payload: index })}
            style={{ fontFamily: "Georgia" }}
            >
            Delete
        </Button>
        <br></br>
        <hr /> {/* Add a separator between submissions */}
          </li>

        ))}
      </ul>
    )}
     <br></br>
 <br></br>
    </form>
  </div>
);
}
export default FlightInfo;

 // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch({ type: 'ADD_ENTRY', payload: { category: 'flight', entry: formValues } });
  //   // Clear the form values
  //   setFormValues({ name: '', date: '', fromCity: '', toCity: '', airline: '', flightNum: '', departTime: '', arrivalTime: '' });
  // };





    