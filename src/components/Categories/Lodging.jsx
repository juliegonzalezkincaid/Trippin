import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";

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
        // Dispatch form values to the appropriate action or store them as needed
        // Example: dispatch({ type: "ADD_LODGING", payload: formValues });
      };








    return(
        <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={formValues.name}
        onChange={handleChange}
        required
      />
      <br />
      <TextField
        name="lodgeName"
        label="Lodge Name"
        value={formValues.lodgeName}
        onChange={handleChange}
        required
      />
      <br />
      <TextField
        name="address"
        label="Address"
        value={formValues.address}
        onChange={handleChange}
        required
      />
      <br />
      <TextField
        name="arrivalDate"
        label="Arrival Date"
        type="date"
        value={formValues.arrivalDate}
        onChange={handleChange}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <TextField
        name="departureDate"
        label="Departure Date"
        type="date"
        value={formValues.departureDate}
        onChange={handleChange}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
    


export default Lodging;