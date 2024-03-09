import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import './Guest.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';




function GuestInfo() {
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
    dispatch({ type: 'ADD_GUEST_INFO', payload: { ...formValues, index: guestInfo.length } });
    setFormValues({
      name: '',
      phone: '',
      email: '',
    });
  };



  return (
    <> <div className="overlay"></div>
      <Link
        to="/categories"
        style={{
          position: 'absolute',
          top: 80,
          left: '88%',
          transform: 'translateX(-50%)',
        }}
      >
        <Button
          style={{
            position: 'absolute',
            top: 70,
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
            boxShadow: '9px 6px 8px 2px black'
          }} />
        </Button>
      </Link>

      <form
        className='guest-form'
        
        onSubmit={handleSubmit}>

        <h1 style={{
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
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
              fontSize: '25px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: 'bisque',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
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
              color: 'bisque',
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
              color: 'bisque',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        <Button type="submit" variant="contained"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
            boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Georgia',
          }}>

          Submit
        </Button>


        {guestInfo.length > 0 && (
          <ul>
            <h2 style={{
              textAlign: "center",
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>Submitted Guest Information:</h2>

            {guestInfo
            .slice() 
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((guest, index) => (
              <li
                className="submitinfo"
                key={index}>
                <p className="label">Name:</p>
                <p className="value">{guest.name}</p>
                <p className="label">Phone:</p>
                <p className="value">{guest.phone}</p>
                <p className="label">Email:</p>
                <p className="value">{guest.email}</p>
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