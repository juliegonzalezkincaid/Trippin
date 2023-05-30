import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import './Miscl.css';


function Misc() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((store) => store.trip);
  const { user } = useSelector((store) => store);

  const [formValues, setFormValues] = useState({
    question: "",
    answer: [],
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      answer: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch ({type: 'SET_MISC', payload: formValues });
    // Dispatch form values to the appropriate action or store them as needed
    // Example: dispatch({ type: "ADD_LODGING", payload: formValues });
  };

  return (
    <div className="misc-body">
      <h2>Miscellaneous</h2>
    <form onSubmit={handleSubmit}>
      <TextField
        name="question"
        label="Question"
        value={formValues.question}
        onChange={handleChange}
        required
        fullWidth
      />
      <br />
      <TextField
        name="answer"
        label="Answer"
        value={formValues.answer.join(", ")}
        onChange={handleAnswerChange}
        required
        helperText="Separate multiple responses with commas"
        fullWidth
      />
      <br />
      <TextField
        name="notes"
        label="Notes"
        value={formValues.notes}
        onChange={handleChange}
        fullWidth
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
}

export default Misc;
