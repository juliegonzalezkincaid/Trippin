import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
function EachTrip({ trip, handleEditTrip, date }) {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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

  useEffect(() => {
    dispatch({ type: "GET_SAVED_TRIPS" });
  }, []);
 

  return (
    <TableRow 
    style={{ 
      borderBottom: "none",
      width: '100%' 
    }}>
      <TableCell 
      style={{ 
        fontFamily: "Georgia", borderBottom: "none", 
        display: "flex", 
        justifyContent: "space-between",
        width: '100%' 
      }}>
        <div 
        style={{ 
          fontSize: "20px", 
          color: "black", 
          fontFamily: "Georgia", 
          borderBottom: "none", 
          fontWeight: "bold", 
          marginRight: "10px",
          textShadow: "2px 2px 3px white"
        }}>
          {trip && new Date(trip.startDate).toLocaleDateString(undefined, { dateStyle: "short" })}
          {" - "}
          {trip && new Date(trip.endDate).toLocaleDateString(undefined, { dateStyle: "short" })}
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "Black",
            fontFamily: "Georgia",
            borderBottom: "none",
            fontWeight: "bolder",
            textShadow: "2px 2px 3px white"
          }}
        >
          {trip && trip.tripName}
        </div>
      
        <div
          style={{
            fontSize: "30px",
            color: "black",
            fontFamily: "Georgia",
            borderBottom: "none",
            fontWeight: "bolder",
            textShadow: "2px 2px 3px white"
          }}
        >
          {trip && trip.description}
        </div>
      
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => handleDeleteTrip(trip.id)}
            className={`${isHoveredDelete ? "delete-hovered" : ""} delete-container`}
            onMouseEnter={() => setIsHoveredDelete(true)}
            onMouseLeave={() => setIsHoveredDelete(false)}
            style={{
              fontFamily: "Georgia",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            <DeleteIcon style={{ color: "purple", filter: "drop-shadow(3px 4px 4px rgba(0, 0, 0, 9.5))" }} />
          </Button>

          <Button
            key={trip.id}
            trip={trip}
            onSubmit={handleEditClick}
            component={Link}
            to={`/trips/${trip.id}/edit`}
            className={`${isHoveredEdit ? "edit-hovered" : ""} edit-container`}
            onMouseEnter={() => setIsHoveredEdit(true)}
            onMouseLeave={() => setIsHoveredEdit(false)}
            style={{
              fontFamily: "Georgia",
              color: "black",
              fontWeight: "bolder",
              fontSize: "20px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              
            }}
          >
            <EditIcon sx={{ color: "purple", filter: "drop-shadow(3px 4px 4px rgba(0, 0, 0, 9.5))" }} />
          </Button>

          <Link
            to="/categories"
            className={`${isHoveredEdit ? "edit-hovered" : ""} edit-container`}
            onMouseEnter={() => setIsHoveredEdit(true)}
            onMouseLeave={() => setIsHoveredEdit(false)}
            style={{
              fontFamily: "Georgia",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
            
            }}
          >
            <AssignmentSharpIcon sx={{ color: "purple", fontSize: 40, marginRight: "10px", filter: "drop-shadow(7px 4px 4px rgba(0, 0, 0, .7))" }} />
          </Link>
        </div>
      </TableCell>

 
    </TableRow>
  );
}

export default EachTrip;
