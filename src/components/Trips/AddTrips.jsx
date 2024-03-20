import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import './AddTrips.css';

function AddTrips() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // stores input values into the held states
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const changeEndDate = (event) => {
    setEndDate(event.target.value);
  };

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_TRIPS' });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const tripData = {
      userId: user.id,
      description,
      startDate,
      endDate,
    };

    dispatch({
      type: 'ADD_TRIP',
      payload: tripData,
    });

    history.push('/my_trips');
  };

  return (
    <div className ="addtrips">
    <Container maxWidth="sm">
    <div className="header">
      <Typography 
      variant="h2" 
      style={{ 
      fontFamily: "Georgia", 
      fontWeight: "bolder",
      fontSize: '70px',
      textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)',
   
      marginBottom: '20px', // Increased margin bottom for spacing
    }}
      >Create A New Trip
      </Typography>
      </div>
      <form onSubmit={handleSave}>
        <Grid container spacing={2}>
        <Grid item xs={10}>
            <TextField
            className="input-field input-border"
              label="Description"
              value={description}
              onChange={changeDescription}
              fullWidth
              required
              style={{ fontFamily: "Georgia" }}
              InputProps={{
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  border: "solid whitesmoke",
                  fontWeight: 'bolder',
                  fontSize: '20px',
                  boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  border: 'white',
                  textShadow: '6px 1px 2px rgba(, 0, 0, 0.8)'
                },
              }}
            />
        </Grid>
        <Grid item xs={7}>
            <TextField
            className="input-field date-input input-border"
              label="Start Date"
              type="date"
              value={startDate}
              onChange={changeStartDate}
              required
              fullWidth
              margin="normal"
              InputProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  border: "solid whitesmoke",
                  fontWeight: 'bolder',
                  fontSize: '20px',
                  boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',

                },
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '30px',
                  textShadow: '8px 1px 2px rgba(0, 0, 0,9.8)',
                 
                },
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
            className="input-field date-input input border"
              label="   End Date"
              type="date"
              value={endDate}
              onChange={changeEndDate}
              required
              fullWidth
              style={{ fontFamily: "Georgia" }}
              InputProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  border: 'solid whitesmoke',
                  fontWeight: 'bolder',
                  fontSize: '20px',
                  boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',

                },
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  color: 'white',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '30px',
                  textShadow: '8px 2px 2px rgba(0, 0, 0, 9.8)'
                },
              }}
              margin="normal"
            />
          </Grid >
        </Grid  >
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
            fontSize: '30px'
          }}>
        
        
          Save
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default AddTrips;
