import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import './Lodge.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

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
         <Link
        to="/categories"
        style={{
          position: 'absolute',
          top: 80,
          left: '92%',
          transform: 'translateX(-50%)',
        }}
      >
        <Button
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 'large',
            textShadow: '9px 2px 9px white',
          }}
        >
          <AssignmentSharpIcon 
          sx={{ 
            color: "purple", 
            fontSize: 60,
            boxShadow: '9px 6px 8px 3px black'
          }} />
        </Button>
      </Link>

      <Typography
        variant="h2"
        gutterBottom
        className="header-title"
        style={{ fontFamily: "Georgia" }}
      >
        Lodging Information
      </Typography>
      <form onSubmit={handleSubmit} className="form-container">
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
              fontFamily: "Georgia",
              border: '1px solid white',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
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
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontWeight: 'bolder',
              fontFamily: "Georgia",
              fontSize: '25px',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
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
              fontFamily: "Georgia",
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
        />


        <br></br>
        <br></br>

        <div className="date-container">
          <div className="date-field">
            <TextField
              className="input-field date-input"
              name="arrivalDate"
              label="   Arrival Date"
              // placeholder="Arrival Date"
              type="date"
              value={formValues.arrivalDate}
              onChange={handleChange}
              required
              
              margin="normal"
              InputProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",

                },
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
                },
              }}

            />
          </div>
          <div className="date-field"></div>
          {/* <h4>Departure</h4> */}
          <TextField
            className="input-field date-input"
            name="departureDate"
            label="   Departure Date"
            type="date"
            value={formValues.departureDate}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              shrink: true,
              style: {
                color: 'white',
                fontFamily: "Georgia",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                color: 'white',
                fontFamily: "Georgia",
                fontWeight: 'bolder',
                fontSize: '25px',
                textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'

              },
            }}

          />

        </div>
        <br></br>
        <br></br>
        <br></br>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
            fontFamily: "Georgia"
          }}
        >
          Submit
        </Button>
        <br></br>

        {lodging.length > 0 && (
          <div>
            <h1 
             style={{
              color:'yellow',
              textShadow:' 4px 4px 4px rgba(0, 0, 0, 0.5',}}
          >Submitted Guest Information:</h1>
            <ul>
              {lodging
              .slice() // Create a copy of the array to avoid mutating the original
              .sort((a, b) => a.name.localeCompare(b.name)) // Sort entries alphabetically by name
              .map((lodge, index) => (
                <li className="submitinfo" key={index}>
                <p className="label-text">Name:<span className="beige-text"> {lodge.name}</span></p>
                <p className="label-text">Lodge Name:<span className="beige-text"> {lodge.lodgeName}</span></p>
                <p className="label-text">Address:<span className="beige-text"> {lodge.address}</span></p>
                <p className="label-text">Arrival Date:<span className="beige-text"> {lodge.arrivalDate}</span></p>
                <p className="label-text">Departure Date:<span className="beige-text"> {lodge.departureDate}</span></p>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch({ type: 'DELETE_LODGING_INFO', 
                    payload: index })}
                    style={{

                      textShadow: '1px 10px 20px rgba(8, 5, 5, 5)',
                      boxShadow: '1px 10px 10px rgba(3, 3, 3, 1)',
                      fontFamily: "Georgia",
                      padding: '10px 20px',
                    }}

                  >
                    Delete
                  </Button>
                  <hr />


                  
                </li>
              ))}
            </ul>
          </div>
        )}
        <br />
        <br />
      </form>
    </div>
  );
}

export default Lodging;



