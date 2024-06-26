import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import './Lodge.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Lodging() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((store) => store.trip);
  const { user } = useSelector((store) => store);
  const { lodging } = useSelector((store) => store.trip);
  const [sortBy, setSortBy] = useState('name'); // Default sorting option

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };


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
    dispatch({ type: 'ADD_LODGING_INFO', payload: lodgingInfo });
    setFormValues({
      name: "",
      lodgeName: "",
      address: "",
      arrivalDate: "",
      departureDate: "",
    });
  }
  useEffect(() => {
    console.log("Fetching lodging info from local storage...");
    const storedLodging = localStorage.getItem('lodging');
    if (storedLodging) {
      console.log("Setting lodging info from local storage to Redux state...");
      dispatch({ type: 'SET_LODGING', payload: JSON.parse(storedLodging) });
       // Clear local storage after loading into Redux state
       localStorage.removeItem('lodging');
    }
  }, [dispatch]); // Empty dependency array to ensure the effect runs only once, when the component mounts
  

  useEffect(() => {
    console.log("Saving lodging info to local storage...");
    localStorage.setItem('lodging', JSON.stringify(lodging));
      // Clean up local storage when the component unmounts
      return () => {
        localStorage.removeItem('lodging');
      };
  }, [lodging]);
  

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
            boxShadow: '9px 6px 8px 3px black'
          }} />
        </Button>
      </Link>

      <Typography
  variant="h3"
  gutterBottom
  className="h3"
  style={{
    fontFamily: "Georgia",
    color: "#FF929C",
    textShadow: "9px 4px 4px rgba(50, 30, 30, 5.5)",
    fontWeight: "bolder",
  }}
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
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)',
              border: '1px solid white',
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
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)',
              border: '1px solid white',
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
                  border: '1px solid white', 
                  width: '100%',
                  
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)', width: '100%',
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
                border: 'solid white',
                width: '100%',
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                color: 'white',
                fontFamily: "Georgia",
                fontWeight: 'bolder',
                fontSize: '25px',
                textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)', 
                width: '100%',
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
            textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
              boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
              fontFamily: "Georgia",
              fontSize: '25px',
              marginTop:'30px',
             }}
        >
          Submit
        </Button>
        <br></br>
        <FormControl className="sort-dropdown" style={{ color: 'white', }}>
              <InputLabel id="sort-by-label" style={{ color: 'white', }}>Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                onChange={handleSortChange}
                style={{
                  color: 'white', fontFamily: 'Georgia', textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
                  boxShadow: '5px 4px 6px rgba(0, 0, 0, 19.5)',border: '1px solid white', 
                  
                }}
              >
                <MenuItem value="name">Name</MenuItem>
            
                <MenuItem value="arrivalDate">Arrival Date</MenuItem>
                
                <MenuItem value="departureDate">Departure Date</MenuItem>
               
              </Select>
            </FormControl>
        {lodging.length > 0 && (
          <div>
            <h1 
             style={{
              color:"#FF929C",
              textShadow:' 5px 4px 4px rgba(0, 0, 0, 0.9',}}
          >Submitted Guest Information:</h1>
            <ul>
              {lodging
              .slice()
              .sort((a, b) => (a.name && b.name) ? a.name.localeCompare(b.name) : 0)

              .map((guest, index) => (
                <li className="submitinfo" key={index}>
                <p className="label-text">Name:<span className="beige-text"> {guest.name}</span></p>
                <p className="label-text">Lodge Name:<span className="beige-text"> {guest.lodgeName}</span></p>
                <p className="label-text">Address:<span className="beige-text"> {guest.address}</span></p>
                <p className="label-text">Arrival Date:<span className="beige-text"> {guest.arrivalDate}</span></p>
                <p className="label-text">Departure Date:<span className="beige-text"> {guest.departureDate}</span></p>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch({ type: 'DELETE_LODGING_INFO', 
                    payload: index })}
                    style={{
                        color: 'white', 
                      textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
                        boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                        fontFamily: "Georgia",
                        fontSize: '18px',
                      padding: '10px',
                      marginRight: "260px"
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


