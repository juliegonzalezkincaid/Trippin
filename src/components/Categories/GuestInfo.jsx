import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import './Guest.css';
function GuestInfo () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selected } = useSelector((store) => store.trip);
    const { user } = useSelector((store) => store);
    const { guestInfo } = useSelector((store) => store.trip); 

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
      
      // };
      // const handleSubmit = (event) => {
      //   event.preventDefault();
      //   dispatch({
      //     type: 'ADD_GUEST_INFO',
      //     payload: {
      //       tripId: id, // Assuming you have the trip ID available in the component
      //       guestInfo: formValues,
      //     },
      //   });
        // Clear the form after submitting
        setFormValues({
          name: '',
          phone: '',
          email: '',
        });
      };
      
   

    return(
        <>
       
        <form
        className='guest-form'
        onSubmit={handleSubmit}>
           <h1>Guests</h1>
      <TextField
        name="name"
        label="Name"
        value={formValues.name}
        onChange={handleChange}
        required
        InputProps={{
          style: {
            color: 'white',
            fontWeight: 'bold',
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
        name="phone"
        label="Phone"
        value={formValues.phone}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: {
            color: 'white',
          },
        }}
        InputProps={{
          style: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      />
      <br />
      <TextField
        name="email"
        label="Email"
        value={formValues.email}
        onChange={handleChange}
        required
        InputProps={{
          style: {
            color: 'white',
            fontWeight: 'bold',
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
      
        {/* <div>
        <h2>Submitted Guest Information:</h2>
        <p>Name: {guestInfo.name}</p>
        <p>Phone: {guestInfo.phone}</p>
        <p>Email: {guestInfo.email}</p>
      </div> */}
   {guestInfo.length > 0 && (
      <ul>
        <h2>Submitted Guest Information:</h2>
        {guestInfo.map((guest, index) => (
          <li key={index}>
            <p>Name: {guest.name}</p>
            <p>Phone: {guest.phone}</p>
            <p>Email: {guest.email}</p>
            <hr /> {/* Add a separator between submissions */}
          </li>
        ))}
      </ul>
    )}
</form>

</>
    )
}

export default GuestInfo;


{/* <div>
        <h2>Guest Entries:</h2>
        {entries.guest.map((entry) => (
          <div key={entry.id}>
            <p>Name: {entry.name}</p>
            <p>Phone: {entry.phone}</p>
            <p>Email: {entry.email}</p>
          </div>
        ))}
      </div> */}

