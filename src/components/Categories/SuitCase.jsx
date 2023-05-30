import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import './Suit.css'
// import './Categories.css'

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
      <div
      className="suitcase-body"
      >
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
        <TextField
          name="bring"
          label="Items to Bring"
          value={formValues.bring}
          onChange={handleChange}
          required
          className="input-field"
          InputProps={{
            style: {
              color: 'white',
              fontWeight: 'bolder',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <br />
        <TextField
          name="dontBring"
          label="Items Not to Bring"
          value={formValues.dontBring}
          onChange={handleChange}
          required
          className="input-field"
          InputProps={{
            style: {
              color: 'white',
              fontWeight: 'bolder',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </div>
    )
}

export default Suitcase;