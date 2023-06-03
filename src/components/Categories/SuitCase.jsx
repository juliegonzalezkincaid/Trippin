import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography, Chip, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import './Suit.css'


function Suitcase () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selected } = useSelector((store) => store.trip);
    const { user } = useSelector((store) => store);
    const { suitcase } = useSelector((store) => store.trip);

    const [formValues, setFormValues] = useState({
        bring: "",
        dontBring: "",
     
       
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: value,
        }));
      };
    const handleSubmit = (event) => {
  event.preventDefault();
  const suitcaseInfo = {
    bring: formValues.bring,
    dontBring: formValues.dontBring,
  };
  dispatch({ type: 'SET_SUITCASE', payload: [suitcaseInfo] }); // Wrap suitcaseInfo in an array
  setFormValues({
    bring: "",
    dontBring: "",
  });
};

const handleDelete = (index) => {
  dispatch({ type: "DELETE_SUITCASE_INFO", payload: index });
};


    return(
      <div
      className="suitcase-body"
      >
         <Typography 
      variant="h2" 
      gutterBottom
      className="header-title">
        What To Bring 
      </Typography>
        <br></br>
        <br></br>
        <form 
    
        onSubmit={handleSubmit}>
        <TextField
          name="bring"
          label="Items to Bring"
          value={formValues.bring}
          onChange={handleChange}
          required
          className="bring-list"
          InputProps={{
            style: {
              color: 'white',
              fontWeight: 'bolder',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <br />
        <TextField
          name="dontBring"
          label="Items Not to Bring"
          value={formValues.dontBring}
          onChange={handleChange}
          required
          className="dont-bring-list"
          InputProps={{
            style: {
              color: 'black',
              fontWeight: 'bolder',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        {suitcase.length > 0 && (
          <div className="list-container">
            <div className="list-column">
              <Typography variant="h5">What to Bring:</Typography>
              <ul className="bring-list">
                {suitcase.map((item, index) => (
                  <li key={index}>
                    <Box display="flex" alignItems="center">
                      <Typography>{item.bring}</Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </li>
                ))}
              </ul>
            </div>
            <div className="list-column">
              <Typography variant="h5">What Not to Bring:</Typography>
              <ul className="dont-bring-list">
                {suitcase.map((item, index) => (
                  <li key={index}>
                    <Box display="flex" alignItems="center">
                      <Typography>{item.dontBring}</Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
       
        <hr />
        
    <br></br>
    <br></br>



      </form>
      </div>
    )
}

export default Suitcase;