import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Button, TextField, Typography } from "@mui/material";

function Lodging () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selected } = useSelector((store) => store.trip);
    const { user } = useSelector((store) => store);


    const [formValues, setFormValues] = useState({
        name: "",
        lodgeName: "",
        address: "",
        arrivalDate: "",
        departureDate: "",
       
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
        dispatch ({type: 'SET_LODGING', payload: formValues });
        // Dispatch form values to the appropriate action or store them as needed
        // Example: dispatch({ type: "ADD_LODGING", payload: formValues });
      };








    return(
      <div className="lodging-container">
      <Typography variant="h3" gutterBottom>
        Lodging Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formValues.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="lodgeName"
          label="Lodge Name"
          value={formValues.lodgeName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={formValues.address}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="arrivalDate"
          label="Arrival Date"
          type="date"
          value={formValues.arrivalDate}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="departureDate"
          label="Departure Date"
          type="date"
          value={formValues.departureDate}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

    


export default Lodging;