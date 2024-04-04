import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import './Guest.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';



function GuestInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
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

// Save guest info to local storage
const handleSubmit = (event) => {
  event.preventDefault();
  // Save guest info to local storage
  localStorage.setItem('guestInfo', JSON.stringify([...guestInfo, formValues]));
  // Dispatch action to add guest info to Redux store
  dispatch({ type: 'ADD_GUEST_INFO', payload: { ...formValues, index: guestInfo.length } });
  setFormValues({ name:'', phone:'', email:'' });
};

// Load guest info from local storage on component mount
useEffect(() => {
  const storedGuestInfo = localStorage.getItem('guestInfo');
  if (storedGuestInfo) {
    dispatch({ type: 'SET_GUEST_INFO', payload: JSON.parse(storedGuestInfo) });
  }
}, []);


  return (
    <> <div className="overlay"></div>
      <div
        style={{
          position: "absolute",
          top: 80,
          left: '92%',
          zIndex: 999, // Ensure the icon is on top of other elements
          transform: 'translateX(-50%)',
        }}
      >
        <Link to="/categories" style={{ textDecoration: "none" }}>
          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "large",
              textShadow: "9px 2px 9px white",
              backgroundColor: 'hsl(94, 82%, 60%)', 
          color: 'white', 
          textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
            fontFamily: "Georgia",
            fontSize: '25px',
            marginTop:'30px',
            }}
          >
            <AssignmentSharpIcon
              sx={{
                color: "purple",
                fontSize: 60,
                boxShadow: "9px 6px 8px 2px black",
              }}
            />
          </Button>
        </Link>
      </div>
      <form
        className='guest-form'

        onSubmit={handleSubmit}>

        <h1 style={{
          color: 'white',
          textShadow: '9px 3px 4px rgba(0, 0, 0, 0.8)'
        }}>Guests</h1>

        <TextField
          name="name"
          label="Name"
          value={formValues.name}
          onChange={handleChange}
          required
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '26px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#FF917C',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '6px 1px 2px rgba(0, 0, 0, 2.9)'
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
              color: '#FF917C',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '6px 1px 2px rgba(0, 0, 0, 2.9)'

            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '9px 1px 2px rgba(0, 0, 0, 0.8)'
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
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '9px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#FF917C',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '4px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        
        <Button 
        type="submit" 
        variant="contained" 
        style={{ 
          backgroundColor: 'hsl(94, 82%, 60%)', 
          color: 'white', 
          textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
            fontFamily: "Georgia",
            fontSize: '25px',
            marginTop:'30px',
           }}>
        
        
          Submit
        </Button>


        {guestInfo.length > 0 && (
          <ul>
            <h2 style={{
              textAlign: "center",
              
              textShadow: '5px 2px 4px rgba(0, 0, 0, 3.5)'
            }} >Submitted Guest Information:</h2>

            {guestInfo
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((guest, index) => (
                <li
                  className="submitinfo"
                  key={index}>
                    <div className="guest-info">
                  <p className="label">Name:</p>
                  <p className="value">{guest.name}</p>
                  </div>
                  <div className="guest-info">
                  <p className="label">Phone:</p>
                  <p className="value">{guest.phone}</p>
                  </div>
                  <br/>
                  <div className="guest-info">
                  <p className="label">Email:</p>
                  <p className="value">{guest.email}</p>
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch({ type: 'DELETE_GUEST_INFO', payload: index })} style={{
                      color: 'white', 
                    textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
                      boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                      fontFamily: "Georgia",
                      fontSize: '18px',
                    padding: '0px',
                 
                  }}
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