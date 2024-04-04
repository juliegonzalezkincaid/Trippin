import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import './Flight.css';
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FlightInfo() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { setFlightInfo } = useSelector((store) => store.trip);
  const [sortBy, setSortBy] = useState('name'); // Default sorting option

  useEffect(() => {
    console.log("Fetching flight information from localStorage...");
    const storedFlightInfo = localStorage.getItem('flightInfo');
    if (storedFlightInfo) {
      console.log("Flight information found in localStorage:", storedFlightInfo);
      dispatch({ type: 'SET_FLIGHT_INFO', payload: JSON.parse(storedFlightInfo) });
  } else {
    console.log("No flight information found in localStorage.");
  }
}, []);

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
  const sortedFlightInfo = [...setFlightInfo].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'arrivalDate') {
      return new Date(a.arrivalDate) - new Date(b.arrivalDate);
    }
    // Add more cases for other sorting options if needed
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const flightInfo = {
      ...formValues,
      index: setFlightInfo.length,
    };
    dispatch({ type: 'ADD_FLIGHT_INFO', payload: flightInfo });
    localStorage.setItem('flightInfo', JSON.stringify([...setFlightInfo, flightInfo]));

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
            marginTop:'50px',
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
  style={{
    fontFamily: "Georgia",
    color: "rgb(235, 168, 86)",
    textShadow: "4px 4px 4px rgba(30, 30, 30, 0.5)",
    fontWeight: "bolder",
  }}
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
          name="arrivalDate"
          value={formValues.arrivalDate}
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
          name="departDate"
          value={formValues.departDate}
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
            textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
              boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
              fontFamily: "Georgia",
              fontSize: '25px',
              marginTop:'30px',
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
                  boxShadow: '4px 4px 6px rgba(0, 0, 0, 3.5)',
              
                }}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="arrivalTime">Arrival Time</MenuItem>
                <MenuItem value="arrivalDate">Arrival Date</MenuItem>
                <MenuItem value="departureTime">Departure Time</MenuItem>
                <MenuItem value="departureDate">Departure Date</MenuItem>
               
              </Select>
            </FormControl>
           
          </ul>
        )}{setFlightInfo.map((flight, index) => (
          <div className="submitinfo" key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <div >
              <p><span className="label">Name:</span> <span className="value">{flight.name}</span></p>
             
              <p><span className="label">From City:</span> <span className="value">{flight.fromCity}</span></p>
              <p><span className="label">To City:</span> <span className="value">{flight.toCity}</span></p>
            </div>
            <div>
              <p><span className="label">Airline:</span> <span className="value">{flight.airline}</span></p>
              <p><span className="label">Flight Number:</span> <span className="value">{flight.flightNum}</span></p>
              <p><span className="label">Departure Time:</span> <span className="value">{flight.departTime}</span></p>
              <p><span className="label">Arrival Time:</span> <span className="value">{flight.arrivalTime}</span></p>
              <p><span className="label">Arrival Date:</span> <span className="value">{flight.arrivalDate}</span></p>
              <p><span className="label">Departure Date:</span> <span className="value">{flight.departDate}</span></p>
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch({ type: 'DELETE_FLIGHT_INFO', payload: index })}
              style={{ fontFamily: "Georgia",
                color: 'white', 
                textShadow: '10px 30px 20px rgba(6, 5, 5, 5)',
                boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                fontFamily: "Georgia",
                fontSize: '18px',
                padding: '10px',
              }}
            >
              Delete
            </Button>
            <br />
            <hr /> {/* Add a separator between submissions */}
          </div>
        ))}
        
        <br></br>
        <br></br>
      </form>
    </div >
  );
}
export default FlightInfo;

// const dispatch = useDispatch();
//   const { id } = useParams();
//   const { setFlightInfo } = useSelector((store) => store.trip);
//   const [sortBy, setSortBy] = useState('name'); // Default sorting option
//   const [formValues, setFormValues] = useState({ // Initialize formValues state
//     name: "",
//     arrivalDate: "",
//     fromCity: "",
//     toCity: "",
//     airline: "",
//     flightNum: "",
//     departTime: "",
//     arrivalTime: "",
//     departDate: ""
//   });

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem('flightInfo', JSON.stringify([...setFlightInfo, formValues]));
//     dispatch({ type: 'ADD_FLIGHT_INFO', payload: { ...formValues, index: setFlightInfo.length } });
//     setFormValues({
//       name: "",
//       arrivalDate: "",
//       fromCity: "",
//       toCity: "",
//       airline: "",
//       flightNum: "",
//       departTime: "",
//       arrivalTime: "",
//       departDate: ""
//     });
//   };

//   useEffect(() => {
//     const storedFlightInfo = localStorage.getItem('flightInfo');
//     if (storedFlightInfo) {
//       dispatch({ type: 'SET_FLIGHT_INFO', payload: JSON.parse(storedFlightInfo) });
//     }
//   }, []);

//   const sortedFlightInfo = [...setFlightInfo].sort((a, b) => {
//     if (sortBy === 'name') {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === 'arrivalDate') {
//       return new Date(a.arrivalDate) - new Date(b.arrivalDate);
//     } else if (sortBy === 'departureTime') {
//       // Implement sorting by departure time
//     } else if (sortBy === 'departureDate') {
//       // Implement sorting by departure date
//     }
//     // Handle other sorting options if needed
//   });




