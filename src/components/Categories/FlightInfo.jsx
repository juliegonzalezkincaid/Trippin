import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";

function FlightInfo () {
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
        />
        <label htmlFor="fromCity">From City:</label>
        <input
          id="fromCity"
          type="text"
          name="fromCity"
          value={formValues.fromCity}
          onChange={handleChange}
        />

        <label htmlFor="toCity">To City:</label>
        <input
          id="toCity"
          type="text"
          name="toCity"
          value={formValues.toCity}
          onChange={handleChange}
        />

        <label htmlFor="airline">Airline:</label>
        <input
          id="airline"
          type="text"
          name="airline"
          value={formValues.airline}
          onChange={handleChange}
        />
        
        <label htmlFor="flightNum">Flight Number:</label>
        <input
          id="flightNum"
          type="text"
          name="flightNum"
          value={formValues.flightNum}
          onChange={handleChange}
        />

        <label htmlFor="departTime">Departure Time:</label>
        <input
          id="departTime"
          type="text"
          name="departTime"
          value={formValues.departTime}
          onChange={handleChange}
        />

        <label htmlFor="arrivalTime">Arrival Time:</label>
        <input
          id="arrivalTime"
          type="text"
          name="arrivalTime"
          value={formValues.arrivalTime}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
       
       
       
       
       </>
      )
    }
    
    export default FlightInfo;




    