

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import Categories from "../Categories/Categories";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import { Link } from 'react-router-dom';
// import axios from "axios";

function EachTrip({ trip, handleEditTrip, savedTrips,date }) {
    if (!trip) {
        return null; // or render a loading indicator, an error message, or a default component
      }
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isHoveredEdit, setIsHoveredEdit] = useState(false);
    const [isHoveredDelete, setIsHoveredDelete] = useState(false);
    // const [editedTrip, setEditedTrip] = useState(null);
    // 
    // allows user to edit their trip
   

    // const handleDeleteTrip = (tripID) => {
    //     dispatch({ type: "DELETE_TRIP", payload: tripID, savedTrips });
    // };
    const handleDeleteTrip = (tripID) => {
      dispatch({ type: "DELETE_TRIP", payload: tripID });
    };
    // const handleDeleteTrip = (tripID) => {
    //   axios
    //     .delete(`/api/trip/${tripID}`)
    //     .then((response) => {
    //       console.log("Trip deleted successfully");
    //       // Dispatch an action to update the Redux state, if needed
    //     })
    //     .catch((error) => {
    //       console.log("Error deleting trip:", error);
    //       // Handle error, if needed
    //     });
    // };

    // allows user to edit their trip
    const handleEditClick = () => {
        if (trip && trip.tripID) {
            handleEditTrip(trip);
        }
    };

    // pushes to the categories page
    // const handleShowCategories = () => {
    //     if (trip && trip.tripID) {
    //         history.push(`/categories`);
    //     }
    // };


    return (
        <TableRow>
        <TableCell>
          <div style={{ fontSize: '20px', color: 'white' }}>{trip && trip.tripName}</div>
        </TableCell>
        <TableCell>
          <div style={{ fontSize: '20px', color: 'white' }}>{trip && trip.description}</div>
        </TableCell>
        <TableCell>
          <div style={{ fontSize: '20px', color: 'white' }}>{trip && trip.startDate}</div>
        </TableCell>
        <TableCell>
          <div style={{ fontSize: '20px', color: 'white' }}>{trip && trip.endDate}</div>
        </TableCell>
        <TableCell>
        <div>{date}</div> {/* Add this line to display the date */}
      </TableCell>
        <TableCell>
          <div>
            <Button
              onClick={() => handleDeleteTrip(trip.id)}
              className={`${isHoveredDelete ? "delete-hovered" : ""} delete-container`}
              onMouseEnter={() => setIsHoveredDelete(true)}
              onMouseLeave={() => setIsHoveredDelete(false)}
            >
              <DeleteIcon />
              Delete Trip
            </Button>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Button
              onClick={handleEditClick}
              component={Link}
              to={`/trips/${trip.id}/edit`}
              className={`${isHoveredEdit ? "edit-hovered" : ""} edit-container`}
              onMouseEnter={() => setIsHoveredEdit(true)}
              onMouseLeave={() => setIsHoveredEdit(false)}
            >
              <EditIcon />
              Edit Trip
            </Button>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Button component={Link} to="/categories">
              Back to Categories
            </Button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
  
  export default EachTrip;