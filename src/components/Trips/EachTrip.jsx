
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

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isHoveredEdit, setIsHoveredEdit] = useState(false);
    const [isHoveredDelete, setIsHoveredDelete] = useState(false);
    // const [editedTrip, setEditedTrip] = useState(null);
    // 
    // allows user to edit their trip

    const handleDeleteTrip = (tripID) => {
        dispatch({ type: "DELETE_TRIP", payload: tripID });
    };

    // allows user to edit their trip
    const handleEditClick = () => {
        if (trip && trip.tripID) {
            handleEditTrip(trip.tripID);
        }
    };

    // pushes to the categories page
    const handleShowCategories = () => {
        if (trip && trip.tripID) {
            history.push(`/categories`);
        }
    };


    return (

        <TableRow>
            <TableCell>{trip?.tripName}</TableCell>
            <TableCell>{trip?.description}</TableCell>
            <TableCell>{trip?.startDate}</TableCell>
            <TableCell>{trip?.endDate}</TableCell>
            <TableCell>
                <Button
                    onClick={() => handleDeleteTrip(trip.tripID)}
                    className={`${isHoveredDelete ? "delete-hovered" : ""
                        } delete-container`}
                    onMouseEnter={() => setIsHoveredDelete(true)}
                    onMouseLeave={() => setIsHoveredDelete(false)}
                >
                    <DeleteIcon />
                    Delete Trip
                </Button>

                <Button
                    onClick={handleEditClick(trip)}
                    className={`${isHoveredEdit ? "edit-hovered" : ""
                        } edit-container`}
                    onMouseEnter={() => setIsHoveredEdit(true)}
                    onMouseLeave={() => setIsHoveredEdit(false)}
                >
                    <EditIcon />
                    Edit Trip
                </Button>
                <Button component={Link} to="/categories">
                    Back to Categories
                </Button>

            </TableCell>
        </TableRow>
    );

};


export default EachTrip;


{/* Render saved trips */ }
{/* {savedTrips &&
                savedTrips.map((savedTrip) => (
                    <div key={savedTrip.tripID}>
                       
                    </div>
                ))} */}
{/* Render current trip */ }
{/* <div>
                    <h3>{trip?.tripName}</h3> */}
{/* Render other details of the current trip */ }
{/* </div> */ }




