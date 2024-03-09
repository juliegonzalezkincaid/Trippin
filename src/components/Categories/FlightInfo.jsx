import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import './Flight.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FlightInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((store) => store);
  const { selected } = useSelector((store) => store.trip);
  const { setFlightInfo } = useSelector((store) => store.trip);
  const [sortBy, setSortBy] = useState('name'); // Default sorting option

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const [formValues, setFormValues] = useState({
    name: "",
    arrivalDate: "",
    fromCity: "",
    toCity: "",
    airline: "",
    flightNum: "",
    departTime: "",
    departDate: "",
    arrivalTime: "",
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
    const flightInfo = {
      ...formValues,
      index: setFlightInfo.length,
    };
    dispatch({ type: 'SET_FLIGHT_INFO', payload: flightInfo });
    setFormValues({
      name: "",
      arrivalDate: "",
      fromCity: "",
      toCity: "",
      airline: "",
      flightNum: "",
      departTime: "",
      arrivalTime: "",
      departDate: ""
    });
  }



  return (
    <div className="flight-body">
      <div className="overlay"></div>
      <Link
        to="/categories"
        style={{
          position: 'absolute',
          top: 40,
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

      <Typography
        variant="h3"
        gutterBottom
        className="h3"
        style={{ fontFamily: "Georgia" }}
      >

        Flight Information
      </Typography>


      <form
        onSubmit={handleSubmit}
        className="flight-form">
        <TextField
          id="name"
          label="Name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
        />

        <TextField
          id="date"
          label="Arrival Date"
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
        />
        <TextField
          id="arrivalTime"
          label="Arrival Time"
          type="time"
          name="arrivalTime"
          value={formValues.arrivalTime}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
        />
        <TextField
          id="fromCity"
          label="From City"
          type="text"
          name="fromCity"
          value={formValues.fromCity}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',

            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
        />

        <TextField
          id="toCity"
          label="To City"
          type="text"
          name="toCity"
          value={formValues.toCity}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
        />

        <TextField
          id="airline"
          label="Airline"
          type="text"
          name="airline"
          value={formValues.airline}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
        />

        <TextField
          id="flightNum"
          label="Flight Number"
          type="text"
          name="flightNum"
          value={formValues.flightNum}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
        />
        <TextField
          id="date"
          label="Departure Date"
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "Georgia",
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
        />

        <TextField
          id="departTime"
          label="Departure Time"
          type="time"
          name="departTime"
          value={formValues.departTime}
          onChange={handleChange}
          required
          className="input-field"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: '25px',
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"

            },
          }}
        />


        <br></br>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
            boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
            fontFamily: "Georgia",

          }}>
          Submit
        </Button>
        {setFlightInfo.length > 0 && (
          <ul>
            <h3 color="bisque">Submitted Guest Information:</h3>
            <FormControl className="sort-dropdown" style={{ color: 'white' }}>
              <InputLabel id="sort-by-label" style={{ color: 'white' }}>Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                onChange={handleSortChange}
                style={{
                  color: 'white', fontFamily: 'Georgia', textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
                  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                }}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="arrivalTime">Arrival Time</MenuItem>
                <MenuItem value="arrivalDate">Arrival Date</MenuItem>
                <MenuItem value="departureTime">Departure Time</MenuItem>
                <MenuItem value="departureDate">Departure Date</MenuItem>
               
              </Select>
            </FormControl>
            {setFlightInfo
              .slice() // Create a copy of the array to avoid mutating the original
              .sort((a, b) => {
                if (sortBy === 'name') {
                  return a.name.localeCompare(b.name);
                } else if (sortBy === 'arrivalTime') {
                  return a.arrivalTime.localeCompare(b.arrivalTime);
                } else if (sortBy === 'departureTime') {
                  return a.departTime.localeCompare(b.departTime);
                }
                return 0;
              })
              .map((flight, index) => (
                <li
                  className="submitinfo"
                  key={index}>

                  <p><span className="label">Name:</span> <span className="value">{flight.name}</span></p>
                  <p><span className="label">Date:</span> <span className="value">{flight.date}</span></p>
                  <p><span className="label">From City:</span> <span className="value">{flight.fromCity}</span></p>
                  <p><span className="label">To City:</span> <span className="value">{flight.toCity}</span></p>
                  <p><span className="label">Airline:</span> <span className="value">{flight.airline}</span></p>
                  <p><span className="label">Flight Number:</span> <span className="value">{flight.flightNum}</span></p>
                  <p><span className="label">Departure Time:</span> <span className="value">{flight.departTime}</span></p>
                  <p><span className="label">Arrival Time:</span> <span className="value">{flight.arrivalTime}</span></p>
                  <p><span className="label">Arrival Date:</span> <span className="value">{flight.arrivalTime}</span></p>
                  <p><span className="label">Departure Date:</span> <span className="value">{flight.arrivalTime}</span></p>
                  <br></br>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch({ type: 'DELETE_FLIGHT_INFO', payload: index })}
                    style={{ fontFamily: "Georgia" }}
                  >
                    Delete
                  </Button>
                  <br></br>
                  <hr /> {/* Add a separator between submissions */}
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
export default FlightInfo;





