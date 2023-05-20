import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import EachTrip from '../Trips/EachTrip';

const FunContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const FunButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function MyTrips() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userTrip, savedTrips } = useSelector((store) => store.trip);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_TRIPS', payload: user.id });
  }, [dispatch, user.id]);

  const handleEditTrip = (tripID) => {
    const data = { tripID, id: user.id };
    dispatch({ type: 'GET_TRIP_BY_ID', payload: data });
    history.push(`/edit/${tripID}`);
  };

  if (!userTrip || userTrip.length === 0) {
    return (
      <Container maxWidth="sm" align="center">
        <Typography variant="h4" gutterBottom>
          Welcome, {user.username}!
        </Typography>
        <Typography variant="subtitle1">My Trips:</Typography>
        <Typography variant="body1">No trips to show...yet!</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome, {user.username}!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">My Trips:</Typography>
          {userTrip.map((trip) => (
            <EachTrip key={trip.id} trip={trip} handleEditTrip={handleEditTrip} />
          ))}
        </Grid>
        <Grid item xs={12}>
          <FunContainer>
            <Typography variant="h5" gutterBottom>
              Saved Trips
            </Typography>
            {savedTrips.length === 0 ? (
              <Typography variant="body1">No saved trips to show...yet!</Typography>
            ) : (
              savedTrips.map((trip) => (
                <EachTrip key={trip.id} trip={trip} handleEditTrip={handleEditTrip} />
              ))
            )}
            <Box display="flex" justifyContent="center">
              <FunButton variant="contained" color="secondary">
                Discover More Adventures
              </FunButton>
            </Box>
          </FunContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyTrips;

// CREATE TABLE "entry" (
//     "id" INTEGER PRIMARY KEY,
//     "user_id" INTEGER ,
//     "category_id" INTEGER, 
//     "entry_text" VARCHAR,
//     "created_at" TIMESTAMP
//     )
// CREATE TABLE "trip" (
//     "id" INTEGER PRIMARY KEY,
//     "user_id" INTEGER,
//     "description" VARCHAR,
//     "start_date" DATE,
//     "end_date" DATE
//     );

// import EachTrip from "../Trips/EachTrip";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";


// function MyTrips () {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const { userTrip, savedTrips } = useSelector((store) => store.trip)
//     const user = useSelector((store) => store.user);
    
//     useEffect(() => {
//     //  dispatch({ type: "FETCH_TRIPS" });
//      dispatch({ type: "GET_SAVED_TRIPS", payload: user.id }); 
//   }, [dispatch, user.id]);

//   // Fetch saved trips for current user
 
//     const handleEditTrip = (tripID) => {
//     const data = { tripID, id: user.id };
//     dispatch({ type: "GET_TRIP_BY_ID", payload: data });
//     history.push(`/edit/${tripID}`);
//   };

//   if (!userTrip || userTrip.length === 0) {
  
//     return (
//       <div>
//         <h2>Welcome, {user.username}!</h2>
//         <p>My Trips:</p>
//         <p>No trips to show...yet!</p>
//       </div>
//     );
//   }
//     return (
//       <div>
//         <h2>Welcome, {user.username}!</h2>
//         <p>My Trips:</p>
//         {userTrip.map((trip) => (
//           <EachTrip key={trip.id} trip={trip} handleEditTrip={handleEditTrip} />
//         ))}
  
//         <h2>Saved Trips:</h2>
//         {savedTrips.length === 0 ? (
//           <p>No saved trips to show...yet!</p>
//         ) : (
//           savedTrips.map((trip) => (
//             <EachTrip key={trip.id} trip={trip} handleEditTrip={handleEditTrip} />
//           ))
//         )}
//       </div>
//     );
//   }

// export default MyTrips;


//     return (
//         <div>
        
//         <h2>Welcome, {user.username}!</h2>

//         <li>My Trips!!!</li>
//       </div>
//     );
//   }
//   return (
//     <div>
      
//       {userTrip?.map((trip, i) => (
//         <EachTrip key={i} trip={trip} handleEditTrip={handleEditTrip} />
//       ))}
//       <h2>Saved Trips:</h2>
//  {/* <h5 view={"saved"}></h5> */}
//       {savedTrips.length === 0 ? (
//         <p>Nothing to show...yet! Trips you plan will come here.</p>
//       ) : null}
//     </div>
//   );
// }