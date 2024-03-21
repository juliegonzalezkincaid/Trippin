import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
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

  const handleDelete = (index, type,) => {
   
    console.log('Deleting item at index:', index, 'of type:', type);

    dispatch({ type: "DELETE_SUITCASE_INFO", payload: { index, type } });
  };
  console.log('bringItems after deletion:', bringItems);
console.log('dontBringItems after deletion:', dontBringItems);

 console.log("Component rerendered");
  return (
    <div className="suitcase-body">
      <div className="overlay"></div>
      <Link
        to="/categories"
        style={{
          position: 'absolute',
          top: 80,
          left: '88%',
          transform: 'translateX(-50%)',
        }}
      >
        <Button
          style={{
            position: 'absolute',
            top: 70,
            left: '10%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 'large',
            textShadow: '9px 2px 9px white',
          }}
        >
          <AssignmentSharpIcon
            sx={{
              color: "hsl(94, 92%, 50%)",
              fontSize: 60,
              boxShadow: '9px 6px 8px 2px black',
              filter: "drop-shadow(3px 4px 4px rgba(0, 0, 0, 9.5))"
            }}
          />
        </Button>
      </Link>

      <div className="list-container" >
        <div className="list-column">
          <Typography variant="h3" style={{ 
          fontFamily: "Georgia", 
          textShadow: '9px 1px 3px rgba(0, 0, 0, 0.6)',color: "rgb(227, 191, 26)",
          marginTop: "20px",
          fontWeight: "bolder",
          }}>
            What to Bring:
          </Typography>
          <form onSubmit={handleBringSubmit}>
            <br />
            <br />
            <br />
            <TextField
              name="bring"
              label="Item"
              value={formValues.bring}
              onChange={handleChange}
              className="bring-list"
              required
              margin="normal"
              InputProps={{
                style: {
                  color:'rgb(227, 191, 26)',
                  fontFamily: "Georgia",
                  border: "1px solid whitesmoke",
                  textShadow: '9px 6px 8px 2px black',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'rgb(227, 191, 26)',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)',
                  marginTop: '-11px', 
                },
              }}
            />
            <Button
            className="button-container"
              type="submit"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: 'hsl(94, 82%, 60%)',
                color: 'white',
                textShadow: '1px 1px 9px rgba(0, 0, 0, 2.6)',
                boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                marginRight: '0px', 
                marginLeft: '10px',
                marginTop: '6px'
              }}
            >
              Submit
            </Button>
          </form>
          <ul className="bring-list">
            {bringItems.map((item, index) => (
              <li key={index}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography style={{ fontFamily: "Georgia", color: 'white', fontWeight: 'bold', fontSize: 'larger', textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)' }}>
                    {item.bring}
                  </Typography>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(index, "bring")}
                  >
                    <DeleteIcon style={{ filter: "drop-shadow(4px 4px 3px rgba(0, 0, 0, 2.5))"}}/>
                  </Button>
                </Box>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-column">
          <Typography variant="h3" style={{ 
            fontFamily: "Georgia",  
            color: "rgb(227, 191, 26)",
            marginTop: "20px", 
            marginRight: "50px",
            fontWeight: "bolder",
            }}>
            What Not to Bring:
          </Typography>
          <form onSubmit={handleDontBringSubmit}>
            <TextField
              name="dontBring"
              label="Item"
              value={formValues.dontBring}
              onChange={handleChange}
              className="dont-bring-list"
              required
              margin="normal"
              InputProps={{
                style: {
                  color:'rgb(227, 191, 26)',
                  fontFamily: "Georgia",
                  border: "1px solid whitesmoke",
                  textShadow: '9px 6px 8px 2px black',
                marginTop: '20px'
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'rgb(227, 191, 26)',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)',
                 marginTop: '7px'
                },
              }}
            />
            <Button
            className="button-container"
              type="submit"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: 'hsl(94, 82%, 60%)',
                color: 'white',
                textShadow: '1px 1px 9px rgba(0, 0, 0, 1.6)',
                boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)',
                paddingTop: '7px',
              marginLeft: '10px',
              marginTop: '25px'
              }}
            >
              Submit
            </Button>
          </form>
          <ul className="dont-bring-list">
            {dontBringItems.map((item, index) => (
              <li key={index}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography style={{ fontFamily: "Georgia", color: 'white', fontWeight: 'bold', fontSize: 'larger', textShadow: '1px 1px 9px rgba(0, 0, 0, 0.6)' }}>
                    {item.dontBring}
                  </Typography>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(index, "dontBring")}
                  >
                    <DeleteIcon style={{ filter: "drop-shadow(4px 4px 3px rgba(0, 0, 0, 2.5))"}} />
                  </Button>
                </Box>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Suitcase;

