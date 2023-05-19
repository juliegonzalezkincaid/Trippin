
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import EditIcon from "@mui/icons-material/Edit";

// import DeleteIcon from '@mui/icons-material/Delete';

function EachTrip({ trip, handleEditTrip }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

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
        history.push(`/categories/${trip.tripID}`);
    };
    
    return (
<>

<li onClick={handleShowCategories}>Back to Categories</li>

<li onClick={() => handleDeleteTrip(trip?.tripID)}>Delete Trip
{/* <DeleteIcon sx={{ fontSize: 18 }} /> */}
</li>


<li onClick={handleEditClick}>Edit Trip
{/* <EditIcon sx={{ fontSize: 18 }} /> */}
</li>
</>
    



    );



};


export default EachTrip;