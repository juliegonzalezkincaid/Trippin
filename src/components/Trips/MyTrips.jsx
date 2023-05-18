
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

import EachTrip from "../Trips/EachTrip";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MyTrips () {
    const dispatch = useDispatch();
    const history = useHistory();
    const {userTrip} = useSelector((store) => store.trip);
    const user = useSelector((store) => store.user);
    
    useEffect(() => {
      dispatch({ type: "FETCH_TRIPS" });
    }, []);
  

    const handleEditTrip = (tripID) => {
    
    const data = { tripID, id: user.id };
    dispatch({ type: "GET_TRIP_BY_ID", payload: data });
    history.push(`/edit/${tripID}`);
  };


 
 if (userTrip?.length === 0) {
    return <p>Nothing to show...yet! Trips you plan will come here.</p>;
  }


    return(
<div>
        <li>My Trips!!!
        <h2>Welcome, {user.username}!</h2>
      
        </li>
        {userTrip?.map((trip, i) => (
            <EachTrip
            key={i}
            trip ={trip}
            handleEditTrip={handleEditTrip}
             />
        ))}





</div>








)//ends return
}//ends MyTrips function

export default MyTrips;