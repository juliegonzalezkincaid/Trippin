import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';

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

    history.push('/user');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Create a New Trip
      </Typography>
      <form onSubmit={handleSave}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              onChange={changeDescription}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={changeStartDate}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={changeEndDate}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </Container>
  );
}

export default AddTrips;

// // CREATE TABLE "trip" (
// //     "id" INTEGER PRIMARY KEY,
// //     "user_id" INTEGER,
// //     "description" VARCHAR,
// //     "start_date" DATE,
// //     "end_date" DATE
// //     );
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, TextField, Typography, Container, Grid } from '@mui/material';
// function AddTrips() {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const { user } = useSelector((store) => store);
   
//     const [description, setDescription] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');

//     // stores input values into the held states 
//     const changeDescription = (event) => {
//         setDescription(event.target.value);
//     };
//     const changeStartDate = (event) => {
//         setStartDate(event.target.value);
//     };
//     const changeEndDate = (event) => {
//         setEndDate(event.target.value);
//     };
//     const handleSave = (event) => {
//         event.preventDefault();
        
//         const tripData = {
//             userId: user.id,
//             description,
//             startDate,
//             endDate,
//           };
      

//           useEffect(() => {
//             //  dispatch({ type: "FETCH_TRIPS" });
//              dispatch({ type: "GET_SAVED_TRIPS" }); // removed , payload: user.id
//           }, []);
//           dispatch({
//             type: "ADD_TRIP",
//             payload: tripData,
//           });
      
//           history.push(`/user`);
//         };

//   dispatch({
//     type: 'GET_SAVED_TRIPS',
//   });

// //   history.push('/user');
// // };


   
//     return (
//         <Container maxWidth="sm">
//         <Typography variant="h4" align="center" gutterBottom>
//           Create a New Trip
//         </Typography>
//         <form onSubmit={handleSave}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Description"
//                 value={description}
//                 onChange={changeDescription}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 value={startDate}
//                 onChange={changeStartDate}
//                 fullWidth
//                 required
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="End Date"
//                 type="date"
//                 value={endDate}
//                 onChange={changeEndDate}
//                 fullWidth
//                 required
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Save
//           </Button>
//         </form>
//       </Container>
//     );
//   }

// export default AddTrips;

// const addToMyTrips = () => {
    //     description.length === 0 ||
    //         startDate.length === 0 ||
    //         endDate.length === 0 ||
    //         dispatch({
    //             type: 'AddTripSaga',
    //             payload: { description, startDate, endDate },
    //         }) && history.push('/');
    // };

   // if (id) {
        //     tripData.tripID = id;
        //     dispatch({
        //         type: "UPDATE_TRIP",
        //         payload: tripData
        //     });
        // } else {
        //     dispatch({
        //         type: "ADD_TRIP",
        //         payload: tripData
        //     });
        // }