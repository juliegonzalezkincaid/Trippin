

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
  
  const categories = useSelector((state) => state.categories);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isHoveredEdit, setIsHoveredEdit] = useState(false);
    const [isHoveredDelete, setIsHoveredDelete] = useState(false);
    const handleDeleteTrip = (tripID) => {

      dispatch({ type: "DELETE_TRIP", payload: tripID });
    };
   
    const handleEditClick = () => {
      if (trip && trip.tripid) {
          handleEditTrip(trip);
      }
    };
    

   
    return (
        <TableRow style={{ borderBottom: 'none' }} >
        <TableCell
         style={{ fontFamily: "Georgia", borderBottom: 'none',   }}
        >
          <div style={{ fontSize: '20px', color: 'white',fontFamily: "Georgia", borderBottom: 'none',  }}>{trip && trip.tripName}</div>
        </TableCell>
        <TableCell
         style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
        >
          <div style={{ fontSize: '20px', color: 'white', fontFamily: "Georgia",  borderBottom: 'none',  }}>{trip && trip.description}</div>
        </TableCell>
        <TableCell
         style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
        >
          <div style={{ fontSize: '20px', color: 'white', fontFamily: "Georgia", borderBottom: 'none', }}>{trip && trip.startDate}</div>
        </TableCell>
        <TableCell 
         style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
        >
          <div style={{ fontSize: '20px', color: 'white',fontFamily: "Georgia", borderBottom: 'none', }}>{trip && trip.endDate}</div>
        </TableCell>
        <TableCell style={{
    fontFamily: "Georgia",
    borderBottom: 'none', // This line removes the bottom border
  }}
        
        >
        <div>{date}</div> {/* Add this line to display the date */}
      </TableCell>
        <TableCell
         style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
        >
          <div>
            <Button
              onClick={() => handleDeleteTrip(trip.id)}
              className={`${isHoveredDelete ? "delete-hovered" : ""} delete-container`}
              onMouseEnter={() => setIsHoveredDelete(true)}
              onMouseLeave={() => setIsHoveredDelete(false)}
              style={{ fontFamily: "Georgia", color:"black", 
              fontWeight: "bold", 
              fontSize:"20px",
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
            >
              <DeleteIcon
               style={{ color:"purple" }}
              />
              Delete Trip
            </Button>
          </div>
        </TableCell>
        <TableCell
          style={{
            fontFamily: "Georgia",
            borderBottom: 'none', // This line removes the bottom border
          }}
        >
          <div>
            <Button
              onClick={handleEditClick}
              component={Link}
              to={`/trips/${trip.id}/edit`}
             className={`${isHoveredEdit ? "edit-hovered" : ""} edit-container`}
              onMouseEnter={() => setIsHoveredEdit(true)}
              onMouseLeave={() => setIsHoveredEdit(false)}
              style={{ fontFamily: "Georgia", color:"black", fontWeight: "bold", fontSize:"20px", 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
           >
              <EditIcon sx={{ color: "purple" }}/>
              Edit Trip
            </Button>
          </div>
        </TableCell>
        <TableCell
         style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
        >
          <div>
            <Button 
            className="backbtn"
            component={Link} to="/categories"
            style={{ fontFamily: "Georgia", color:"black", fontWeight: "bold", fontSize:"20px",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
            >
              Trip Details
            </Button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
  
  export default EachTrip;
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
 // pushes to the categories page
    // const handleShowCategories = () => {
    //     if (trip && trip.tripID) {
    //         history.push(`/categories`);
    //     }
    // };

 // if (!trip) {
    //     return null; // or render a loading indicator, an error message, or a default component
    //   }
    // const history = useHistory();
    // const [editedTrip, setEditedTrip] = useState(null);
    // 
    // allows user to edit their trip
    // const handleDeleteTrip = (tripID) => {
    //     dispatch({ type: "DELETE_TRIP", payload: tripID, savedTrips });
    // };