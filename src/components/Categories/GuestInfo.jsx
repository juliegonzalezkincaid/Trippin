import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";

function GuestInfo () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selected } = useSelector((store) => store.trip);
    const { user } = useSelector((store) => store);


    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
       
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
        dispatch ({type: 'ADD_GUEST_INFO', payload: formValues });
      
      };
   

    return(
        <>
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
        name="phone"
        label="Phone"
        value={formValues.phone}
        onChange={handleChange}
        required
      />
      <br />
      <TextField
        name="email"
        label="Email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
        
        </form>
</>
    )
}

export default GuestInfo;