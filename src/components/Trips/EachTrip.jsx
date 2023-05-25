

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import Categories from "../Categories/Categories";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import { Link } from 'react-router-dom';


function EachTrip({ trip, handleEditTrip, savedTrips }) {
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
    console.log('Trip:', trip);

    const handleDeleteTrip = (tripID) => {
        dispatch({ type: "DELETE_TRIP", payload: tripID });
    };

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
        <TableCell>{trip && trip.tripName}</TableCell>
        <TableCell>{trip && trip.description}</TableCell>
        <TableCell>{trip && trip.startDate}</TableCell>
        <TableCell>{trip && trip.endDate}</TableCell>
                <Button
                    onClick={() => handleDeleteTrip(trip.id)}
                    className={`${
                        isHoveredDelete ? "delete-hovered" : ""
                    } delete-container`}
                    onMouseEnter={() => setIsHoveredDelete(true)}
                    onMouseLeave={() => setIsHoveredDelete(false)}
                >
                    <DeleteIcon />
                    Delete Trip
                </Button>
                    <Button
        component={Link}
        to={`/trips/${trip.id}/edit`}
        className={`${isHoveredEdit ? "edit-hovered" : ""
        } edit-container`}
        onMouseEnter={() => setIsHoveredEdit(true)}
        onMouseLeave={() => setIsHoveredEdit(false)}
      >
        <EditIcon />
        Edit Trip
      </Button>
                {/* <Button
                    onClick={handleEditClick(trip)}
                    className={`${isHoveredEdit ? "edit-hovered" : ""
                    } edit-container`}
                    onMouseEnter={() => setIsHoveredEdit(true)}
                    onMouseLeave={() => setIsHoveredEdit(false)}
                >
                    <EditIcon />
                    Edit Trip
                </Button> */}
<Button component={Link} to="/categories">
  Back to Categories
</Button>
{/* <EditIcon />
                    Edit Trip
<Link to={`/trips/${trip.id}/edit`}>EditT</Link> */}
           
            </TableRow>
  );

};


export default EachTrip;