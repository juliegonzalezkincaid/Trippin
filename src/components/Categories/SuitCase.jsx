import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import './Suit.css'

function Suitcase() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((store) => store.trip);
  const { user } = useSelector((store) => store);
  const { suitcase } = useSelector((store) => store.trip);

  const [formValues, setFormValues] = useState({
    bring: "",
    dontBring: "",
  });


  const bringItems = suitcase.filter((item) => item.bring);
  const dontBringItems = suitcase.filter((item) => item.dontBring);

  const handleBringSubmit = (event) => {
    event.preventDefault();
    if (formValues.bring) {
      const bringInfo = {
        bring: formValues.bring,
      };
      dispatch({ type: 'SET_BRING', payload: bringInfo });
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        bring: "",
      }));
    }
  };

  const handleDontBringSubmit = (event) => {
    event.preventDefault();
    if (formValues.dontBring) {
      const dontBringInfo = {
        dontBring: formValues.dontBring,
      };
      dispatch({ type: 'SET_DONT_BRING', payload: dontBringInfo });
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        dontBring: "",
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleDelete = (index, type) => {
    if (type === "bring") {
      dispatch({ type: "DELETE_SUITCASE_INFO", payload: index });
    } else if (type === "dontBring") {
      dispatch({ type: "DELETE_SUITCASE_INFO", payload: index });
    }
  };
  

  return (
    <div className="suitcase-body">
      <Typography
        variant="h2"
        gutterBottom
        className="header-title"
        style={{ fontFamily: "Georgia" }}
      >
        What To Bring
      </Typography>
      <br />
      <br />

      <form onSubmit={handleBringSubmit}>
        <TextField
         
          name="bring"
          label="Items to Bring:"
          value={formValues.bring}
          onChange={handleChange}
          className="bring-list"
          required
          margin="normal"
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
          }}
        >
          Submit
        </Button>
      </form>

      <br />
      <br />

      <form onSubmit={handleDontBringSubmit}>
        <TextField
          name="dontBring"
          label="Items Not to Bring:"
          value={formValues.dontBring}
          onChange={handleChange}
          className="dont-bring-list"
          required
          margin="normal"
          
          InputProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia"
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: 'hsl(94, 82%, 60%)',
            color: 'white',
            textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)',
            // textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
            boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
          }}
        >
          Submit
        </Button>
      </form>

      <br />

      {suitcase.length > 0 && (
        
        <div className="list-container">
        {bringItems.length > 0 && (
          <div className="list-column">
            <Typography variant="h3" style={{ fontFamily: "Georgia", textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)' }}>
              What to Bring:
            </Typography>
            <ul className="bring-list">
              {bringItems.map((item, index) => (
                <li key={index}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography style={{ fontFamily: "Georgia", color: 'black', fontWeight: 'bold', fontSize: 'larger', textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)' }}>
                      {item.bring}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(index, "bring")}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </li>
              ))}
            </ul>
          </div>
        )}

        {dontBringItems.length > 0 && (
          <div className="list-column">
            <Typography variant="h3" style={{ fontFamily: "Georgia" }}>
              What Not to Bring:
            </Typography>
            <ul className="dont-bring-list">
              {dontBringItems.map((item, index) => (
                <li key={index}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography style={{ fontFamily: "Georgia", color: 'black', fontWeight: 'bold', fontSize: 'larger', textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)' }}>
                      {item.dontBring}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(index, "dontBring")}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}

    <br />
    <br />
  </div>
);
}

export default Suitcase;  


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
// import { Button, TextField, Typography, Box } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// import './Suit.css'


// function Suitcase () {
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     const { selected } = useSelector((store) => store.trip);
//     const { user } = useSelector((store) => store);
//     const { suitcase } = useSelector((store) => store.trip);

//     const [formValues, setFormValues] = useState({
//         bring: "",
//         dontBring: "",
     
       
//       });
    
//       const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormValues((prevFormValues) => ({
//           ...prevFormValues,
//           [name]: value,
//         }));
//       };
//     const handleSubmit = (event) => {
//   event.preventDefault();
//   if (formValues.bring || formValues.dontBring) {
//     const suitcaseInfo = {
//       bring: formValues.bring,
//       dontBring: formValues.dontBring,
//     };
//   dispatch({ type: 'SET_SUITCASE', payload: [suitcaseInfo] }); 
//   setFormValues({
//     bring: "",
//     dontBring: "",
//   });
// }
// };

// const handleDelete = (index) => {
//   dispatch({ type: "DELETE_SUITCASE_INFO", payload: index });
// };


//     return(
//       <div
//       className="suitcase-body"
//       >
//          <Typography 
//       variant="h2" 
//       gutterBottom
//       className="header-title"
//       style={{ fontFamily: "Georgia" }}>
//         What To Bring 
//       </Typography>
//         <br></br>
//         <br></br>
        
//     <form 
//         onSubmit={handleSubmit}>
//         <TextField
//           name="bring"
//           label="Items to Bring:"
//           value={formValues.bring}
//           onChange={handleChange}
//           className="bring-list"
//           InputProps={{
//             style: {
//               color: 'white',
//               fontWeight: 'bolder',

//               fontFamily: "Georgia",
//             },
//           }}
//           InputLabelProps={{
//             style: {
//               color: 'white',
//               fontFamily: 'Georgia',
//               textShadow: '1px 20px 20px rgba(9, 9, 9, 9)',
//             },
//           }}
//         />
//          <Button type="submit" variant="contained" 
//          color="primary"
//          style={{
//           backgroundColor: 'hsl(94, 82%, 60%)',
//           color: 'white',
//           textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
//           boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
//         }}
//          >
//           Submit
//         </Button>
//         <br />
//         <br />
//         <TextField
//           name="dontBring"
//           label="Items Not to Bring:"
//           value={formValues.dontBring}
//           onChange={handleChange}
//           className="dont-bring-list"
//           InputProps={{
//             style: {
//               color: 'black',
//               fontWeight: 'bolder',
//               fontFamily: "Georgia",
//             },
//           }}
//           InputLabelProps={{
//             style: {
//               color: 'white',
//               fontFamily: "Georgia",
//               textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',

//             },
//           }}
//         />
       
//         <Button 
//         type="submit" 
//         variant="contained" 
//         color="primary"
//         style={{
//           backgroundColor: 'hsl(94, 82%, 60%)',
//           color: 'white',
//           textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
//           boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
//         }}
//         >
//           Submit
//         </Button>
//         <br />
//         {suitcase.length > 0 && (
          
//           <div className="list-container">
//             <div className="list-column">
//               <Typography 
//               variant="h3"
//               style={{ fontFamily: "Georgia" }}
//               >What to Bring:</Typography>
//               <ul className="bring-list">
//                 {suitcase.map((item, index) => (
//                   <li key={index}>
//                     <Box display="flex" alignItems="center">
//                       <Typography 
//                       style={{ fontFamily: "Georgia" }}>{item.bring}</Typography>
                      
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleDelete(index)}
//                       >
//                         <DeleteIcon />
//                       </Button>
//                     </Box>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="list-column">
//               <Typography 
//               variant="h3"
//               style={{ fontFamily: "Georgia" }}
//               >What Not to Bring:</Typography>
//               <ul className="dont-bring-list">
//                 {suitcase.map((item, index) => (
//                   <li key={index}>
//                     <Box display="flex" alignItems="center">
//                       <Typography style={{ fontFamily: "Georgia" }}>{item.dontBring}</Typography>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleDelete(index)}
//                       >
//                         <DeleteIcon />
//                       </Button>
//                     </Box>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
       
    
        
//     <br></br>
//     <br></br>



//       </form>
//       </div>
//     )
// }

// export default Suitcase;