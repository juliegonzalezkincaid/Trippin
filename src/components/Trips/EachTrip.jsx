import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";


function EachTrip() {

    const history = useHistory();
    const dispatch = useDispatch();
    // const handleDeleteTrip = (tripID) => {
    //     dispatch({ type: "DELETE_TRIP", payload: tripID });
    //   };

    //   const handleEditClick = () => {
    //     if (trip && trip.tripID) {
    //       handleEditTrip(trip.tripID);
    //     }
    //   };

// // pushes to the categories page
// const showCategories = () => {
//     history.push(`/categories/${tripID}`);
// };



return (


<li

    onClick={showCategories}>


</li>




);



};


export default EachTrip;