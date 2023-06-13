import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

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
    <TableRow style={{ borderBottom: "none" }} >
      <TableCell style={{ fontFamily: "Georgia", borderBottom: "none", display: "flex" }}>
        <div
          style={{
            fontSize: "20px",
            color: "Black",
            fontFamily: "Georgia",
            borderBottom: "none",
            fontWeight: "bolder",
          }}
        >
          {trip && trip.tripName}
        </div>
      </TableCell>
      <TableCell style={{ fontFamily: "Georgia", borderBottom: "none" }}>
        <div
          style={{
            fontSize: "30px",
            color: "black",
            fontFamily: "Georgia",
            borderBottom: "none",
            fontWeight: "bolder",
          }}
        >
          {trip && trip.description}
        </div>
      </TableCell>
      <TableCell style={{ fontFamily: "Georgia", borderBottom: "none" }}>
        <div style={{ fontSize: "20px", color: "black", fontFamily: "Georgia", borderBottom: "none" }}>
          {date}
        </div>
      </TableCell>
      <TableCell style={{ fontFamily: "Georgia", borderBottom: "none", display: "flex", alignItems: "center" }}>
        <TableCell style={{ fontFamily: "Georgia", borderBottom: "none", display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: "20px",
              color: "black",
              fontFamily: "Georgia",
              borderBottom: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            {trip && new Date(trip.startDate).toLocaleDateString(undefined, { dateStyle: "short" })}
          </div>
        </TableCell>
        <TableCell style={{ fontFamily: "Georgia", borderBottom: "none", display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: "20px",
              color: "black",
              fontFamily: "Georgia",
              borderBottom: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            {trip && new Date(trip.endDate).toLocaleDateString(undefined, { dateStyle: "short" })}
          </div>
        </TableCell>
        <div>
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
            <DeleteIcon style={{ color: "purple" }} />
            {/* Delete Trip */}
          </Button>
        </div>
      </TableCell>
      <TableCell
        style={{
          fontFamily: "Georgia",
          borderBottom: "none",
          // This line removes the bottom border
        }}
      >
        <div>
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
            <EditIcon sx={{ color: "purple" }} />
            {/* Edit Trip */}
          </Button>
        </div>
      </TableCell>
      <TableCell
        style={{
          fontFamily: "Georgia",
          borderBottom: "none",
          // This line removes the bottom border
        }}
      >
        <div>
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
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              textDecoration: "none", // Add this line to remove underline
            }}
          >
            <AssignmentOutlinedIcon
              sx={{
                color: "purple",
                fontSize: 40,
                marginRight: "10px", // spacing between the icon and text
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




// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Button } from "@mui/material";
// import { TableCell, TableRow } from "@mui/material";
// import { Link } from 'react-router-dom';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


// function EachTrip({ trip, handleEditTrip, date, }) {

//   const categories = useSelector((state) => state.categories);

//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user);
//   const [isHoveredEdit, setIsHoveredEdit] = useState(false);
//   const [isHoveredDelete, setIsHoveredDelete] = useState(false);
//   const handleDeleteTrip = (tripID) => {


//     dispatch({ type: "DELETE_TRIP", payload: tripID });
//   };

//   const handleEditClick = () => {
//     if (trip && trip.tripid) {
//       handleEditTrip(trip);
//     }
//   };
//   const [description, setDescription] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   // stores input values into the held states
//   const changeDescription = (event) => {
//     setDescription(event.target.value);
//   };
//   const changeStartDate = (event) => {
//     setStartDate(event.target.value);
//   };
//   const changeEndDate = (event) => {
//     setEndDate(event.target.value);
//   };

//   useEffect(() => {
//     dispatch({ type: 'GET_SAVED_TRIPS' });
//   }, []);

//   const handleSave = (event) => {
//     event.preventDefault();

//     const tripData = {
//       userId: user.id,
//       description,
//       startDate,
//       endDate,
//     };

//     dispatch({
//       type: 'ADD_TRIP',
//       payload: tripData,
//     });

//     history.push('/my_trips');
//   };


//   return (
//     <TableRow style={{ borderBottom: 'none' }} 
//     onSubmit={handleSave}
//     >
//       <TableCell
//         style={{ fontFamily: "Georgia", borderBottom: 'none',display: 'flex' }}
//       >
//         <div style={{
//           fontSize: '20px',
//           color: 'Black',
//           fontFamily: "Georgia",
//           borderBottom: 'none',
//           fontWeight: 'bolder',
          
//         }}>{trip && trip.tripName}</div>
     
//       </TableCell>
//       <TableCell
//         style={{
//           fontFamily: "Georgia",
//           borderBottom: 'none', // This line removes the bottom border
//         }}
//       >
//         <div style={{
//           fontSize: '30px',
//           color: 'black',
//           fontFamily: "Georgia",
//           borderBottom: 'none',
//           fontWeight: 'bolder',
//         }}>{trip && trip.description}</div>
      
//       </TableCell>
    
    

//       <TableCell style={{ fontFamily: "Georgia", borderBottom: 'none', }}>
//         <div style={{ fontSize: '20px', color: 'black', fontFamily: "Georgia", borderBottom: 'none', }}>
//           {date}
//         </div>
        
//       </TableCell>


//       <TableCell
//         style={{
//           fontFamily: "Georgia",
//           borderBottom: 'none',
//           display: 'flex',
//           alignItems: 'center', 
//         }}
//       >

// <TableCell
//   style={{
//     fontFamily: "Georgia",
//     borderBottom: 'none',
//     display: 'flex', // new style
//     alignItems: 'center', 
//   }}
// >
//   <div style={{ 
//     fontSize: '20px', 
//     color: 'black', 
//     fontFamily: "Georgia", 
//     borderBottom: 'none', 
//     display: 'flex', // new style
//     alignItems: 'center', // new style

//   }}>
//     {trip && trip.startDate}
//       {trip && new Date(trip.startDate).toLocaleDateString()}
//   </div>
   
// </TableCell>
// <TableCell
//   style={{
//     fontFamily: "Georgia",
//     borderBottom: 'none', 
//     display: 'flex', // new style
//     alignItems: 'center', // new style

//     // This line removes the bottom border
//   }}
// >
//   <div style={{
//     fontSize: '20px',
//     color: 'black',
//     fontFamily: "Georgia",
//     borderBottom: 'none',
//     display: 'flex', // new style
//     alignItems: 'center', // new style

//   }}>
// {trip && new Date(trip.endDate).toLocaleDateString()}
//   </div>


//     {/* {trip && new Date(trip.endDate).toLocaleDateString()}</div> */}
// </TableCell>



//         <div>
//           <Button
//             onClick={() => handleDeleteTrip(trip.id)}
//             className={`${isHoveredDelete ? "delete-hovered" : ""} delete-container`}
//             onMouseEnter={() => setIsHoveredDelete(true)}
//             onMouseLeave={() => setIsHoveredDelete(false)}
//             style={{
//               fontFamily: "Georgia", color: "black",
//               fontWeight: "bold",
//               fontSize: "20px",
//               textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
//             }}
//           >
//             <DeleteIcon
//               style={{ color: "purple" }}
//             />
//             {/* Delete Trip */}
//           </Button>
//         </div>
//       </TableCell>
//       <TableCell
//         style={{
//           fontFamily: "Georgia",
//           borderBottom: 'none', 
          
//           // This line removes the bottom border
//         }}
//       >
//         <div>
//           <Button
//  key={trip.id} 
//  trip={trip} 

//             onSubmit={handleEditClick}
//             component={Link}
//             to={`/trips/${trip.id}/edit`}
//             className={`${isHoveredEdit ? "edit-hovered" : ""} edit-container`}
//             onMouseEnter={() => setIsHoveredEdit(true)}
//             onMouseLeave={() => setIsHoveredEdit(false)}
//             style={{
//               fontFamily: "Georgia", color: "black", fontWeight: "bolder", fontSize: "20px",
//               textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
//             }}
//           >
//             <EditIcon sx={{ color: "purple" }} />
//             {/* Edit Trip */}
//           </Button>
//         </div>
//       </TableCell>
//       <TableCell
//         style={{
//           fontFamily: "Georgia",
//           borderBottom: 'none', // This line removes the bottom border
//         }}
//       >
//         <div>
      
//           <Link
//             to="/categories"
//             className={`${isHoveredEdit ? 'edit-hovered' : ''} edit-container`}
//             onMouseEnter={() => setIsHoveredEdit(true)}
//             onMouseLeave={() => setIsHoveredEdit(false)}
//             style={{
//               fontFamily: 'Georgia',
//               color: 'black',
//               fontWeight: 'bold',
//               fontSize: '20px',
//               textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
//               textDecoration: 'none', // Add this line to remove underline
//             }}
//           >
//             <AssignmentOutlinedIcon
//               sx={{
//                 color: 'purple',
//                 fontSize: 40,
//                 marginRight: '10px', // spacing between the icon and text
//               }}
//             />
//             {/* Trip Details */}
//           </Link>


//         </div>
//       </TableCell>
//     </TableRow>
//   );
// }

// export default EachTrip;
//   savedTrips.map((trip, i) => {
//     const startDate = new Date(trip.start_date);
//     const endDate = new Date(trip.end_date);

//     return (
//       <tr key={i} style={{fontFamily: "Georgia", fontWeight:"bolder" , textShadow: '4px 1px 2px rgba(0, 0, 0, 0.8)', fontSize:'30px'}}>
//         <td>{trip.description}</td>
//         <td>{startDate.toISOString().split('T')[0]}</td>
//         <td>{endDate.toISOString().split('T')[0]}</td>
//         <td>
//           <button onClick={() => handleEditTrip(trip)}>Edit</button>
//           <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
//         </td>
//       </tr>
//     )
//   })
// }
    {/* <Button 
            className="backbtn"
            component={Link} to="/categories"
            style={{ fontFamily: "Georgia", color:"black", fontWeight: "bold", fontSize:"20px",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
            >
              Trip Details
            </Button> */}
              {/* <TableCell
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
      </TableCell> */}