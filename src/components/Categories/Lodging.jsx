import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import './Lodge.css';

function Lodging() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((store) => store.trip);
  const { user } = useSelector((store) => store);
  const { lodging } = useSelector((store) => store.trip);



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
    const lodgingInfo = {
      ...formValues,
      index: lodging.length,
    }
    dispatch({ type: 'SET_LODGING', payload: lodgingInfo });
    setFormValues({
      name: "",
      lodgeName: "",
      address: "",
      arrivalDate: "",
      departureDate: "",
    });
  }


  return (
    <div className="lodging-body">
      <Typography 
      variant="h2" 
      gutterBottom
      className="header-title">
        Lodging Information
      </Typography>
      <form
        onSubmit={handleSubmit}>
        <TextField
          className="input-field"
          name="name"
          label="Name"
          value={formValues.name}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <TextField
          className="input-field"
          name="lodgeName"
          label="Lodge Name"
          value={formValues.lodgeName}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <TextField
          className="input-field"
          name="address"
          label="Address"
          value={formValues.address}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <TextField
          className="input-field"
          name="arrivalDate"
          // label="Arrival Date"
          type="date"
          value={formValues.arrivalDate}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              
            },
          }}
        />
        <TextField
          className="input-field"
          name="departureDate"
          // label="Departure Date"
          type="date"
          value={formValues.departureDate}
          onChange={handleChange}
          require
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              
            },
          }}
        />
        <br></br>
        <Button
          type="submit" variant="contained"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '10px 10px 15px rgba(3, 3, 3, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
          }}>
          Submit
        </Button>

        {lodging.length > 0 && (
      <ul>
        <h1>Submitted Guest Information:</h1>
        {lodging.map((lodge, index) => (
          <li 
          className="submitinfo"
          key={index}>
            <p>Name: {lodge.name}</p>
            <p>Lodge Name: {lodge.lodgeName}</p>
            <p>Address: {lodge.address}</p>
            <p>Arrival Date: {lodge.arrivalDate}</p>
            <p>Departure Date: {lodge.departureDate}</p>
         <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: 'DELETE_LODGING_INFO', payload: index })}
            >
            Delete
        </Button>
                <hr />
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




export default Lodging;