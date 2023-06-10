

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import { Link } from 'react-router-dom';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


function EachTrip({ trip, handleEditTrip, savedTrips, date }) {

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
        style={{ fontFamily: "Georgia", borderBottom: 'none', }}
      >
        <div style={{
          fontSize: '20px',
          color: 'Black',
          fontFamily: "Georgia",
          borderBottom: 'none',
          fontWeight: 'bolder',
        }}>{trip && trip.tripName}</div>
      </TableCell>
      <TableCell
        style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
      >
        <div style={{
          fontSize: '30px',
          color: 'black',
          fontFamily: "Georgia",
          borderBottom: 'none',
          fontWeight: 'bolder',
        }}>{trip && trip.description}</div>
      </TableCell>
      <TableCell
        style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
      >
        <div style={{ 
        fontSize: '20px', 
        color: 'black', 
        fontFamily: "Georgia", 
        borderBottom: 'none', 
        }}>{trip && trip.startDate}</div>
      </TableCell>
      <TableCell
        style={{
          fontFamily: "Georgia",
          borderBottom: 'none', // This line removes the bottom border
        }}
      >
        <div style={{
          fontSize: '20px',
          color: 'black',
          fontFamily: "Georgia",
          borderBottom: 'none',
        }}>{trip && trip.endDate}</div>
      </TableCell>
    

      <TableCell style={{ fontFamily: "Georgia", borderBottom: 'none', }}>
        <div style={{ fontSize: '20px', color: 'black', fontFamily: "Georgia", borderBottom: 'none', }}>
          {date}
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
            onClick={() => handleDeleteTrip(trip.id)}
            className={`${isHoveredDelete ? "delete-hovered" : ""} delete-container`}
            onMouseEnter={() => setIsHoveredDelete(true)}
            onMouseLeave={() => setIsHoveredDelete(false)}
            style={{
              fontFamily: "Georgia", color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            <DeleteIcon
              style={{ color: "purple" }}
            />
            {/* Delete Trip */}
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
            style={{
              fontFamily: "Georgia", color: "black", fontWeight: "bolder", fontSize: "20px",
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            <EditIcon sx={{ color: "purple" }} />
            {/* Edit Trip */}
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
      
          <Link
            to="/categories"
            className={`${isHoveredEdit ? 'edit-hovered' : ''} edit-container`}
            onMouseEnter={() => setIsHoveredEdit(true)}
            onMouseLeave={() => setIsHoveredEdit(false)}
            style={{
              fontFamily: 'Georgia',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
              textDecoration: 'none', // Add this line to remove underline
            }}
          >
            <AssignmentOutlinedIcon
              sx={{
                color: 'purple',
                fontSize: 40,
                marginRight: '10px', // spacing between the icon and text
              }}
            />
            {/* Trip Details */}
          </Link>


        </div>
      </TableCell>
    </TableRow>
  );
}

export default EachTrip;
    {/* <Button 
            className="backbtn"
            component={Link} to="/categories"
            style={{ fontFamily: "Georgia", color:"black", fontWeight: "bold", fontSize:"20px",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
            >
              Trip Details
            </Button> */}