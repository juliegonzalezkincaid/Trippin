import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";

function Suitcase () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selected } = useSelector((store) => store.trip);
    const { user } = useSelector((store) => store);


    const [formValues, setFormValues] = useState({
        bring: "",
        dontBring: "",
     
       
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
        // Example: dispatch({ type: "ADD_SUITCASE", payload: formValues });
      };




    return(
        <form onSubmit={handleSubmit}>
        <TextField
          name="bring"
          label="Items to Bring"
          value={formValues.bring}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          name="dontBring"
          label="Items Not to Bring"
          value={formValues.dontBring}
          onChange={handleChange}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    )
}

export default Suitcase;