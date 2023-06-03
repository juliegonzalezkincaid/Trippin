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
        dispatch ({type: 'ADD_GUEST_INFO', payload: {...formValues,index:guestInfo.length} });
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
      <Button type="submit" variant="contained" 
      style={{ 
        backgroundColor: 'hsl(94, 82%, 60%)', 
        color: 'white', 
        textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
        boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)'
        }}>
    
        Submit
      </Button>
      
        
   {guestInfo.length > 0 && (
      <ul>
        <h2>Submitted Guest Information:</h2>
        {guestInfo.map((guest, index) => (
          <li 
          className="submitinfo"
          key={index}>
            <p>Name: {guest.name}</p>
            <p>Phone: {guest.phone}</p>
            <p>Email: {guest.email}</p>
         <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: 'DELETE_GUEST_INFO', payload: index })}
            >
            Delete
        </Button>
                <hr /> {/* Add a separator between submissions */}
          </li>
        ))}
      </ul>
    )}
    <br></br>
    <br></br>
</form>

</>
    )
}

export default GuestInfo;

     // const handleDelete = (index) => {
        //   dispatch({ type: "DELETE_GUEST_INFO", payload: index });
        // };
        // const handleEdit = (index) => {
        //   const editedGuest = {
        //     ...guestInfo[index],
        //     // Add any properties you want to edit here
        //   };
          // You can dispatch an action to update the guest info using the editedGuest object
          // dispatch({ type: "EDIT_GUEST_INFO", payload: { index, guest: editedGuest } });
        // };
      
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
      {/* <div>
        <h2>Submitted Guest Information:</h2>
        <p>Name: {guestInfo.name}</p>
        <p>Phone: {guestInfo.phone}</p>
        <p>Email: {guestInfo.email}</p>
      </div> */}

