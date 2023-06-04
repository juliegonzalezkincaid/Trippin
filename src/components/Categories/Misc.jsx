import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import './Miscl.css';

function Misc() {
  const dispatch = useDispatch();
  const { misc } = useSelector((store) => store.trip);

  const [formValues, setFormValues] = useState({
    question: "",
    answer: "",
    notes: "",
  });
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  const handleAnswerChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFormValues = { ...formValues };
    updatedFormValues[`answer-${index}`] = value;
    setFormValues(updatedFormValues);
  };
  
  const handleNotesChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_MISC', payload: formValues });
    setFormValues({
      question: '',
      answer: '',
      notes: '',
    });
    setIsQuestionSubmitted(true);
  };

 
  const handleDelete = (index) => {
    const updatedMisc = [...misc];
    updatedMisc.splice(index, 1);
    dispatch({ type: "SET_MISC", payload: updatedMisc });
    const updatedFormValues = { ...formValues };
  delete updatedFormValues[`answer-${index}`];
  setFormValues(updatedFormValues);

  };
  
  const handleAnswerSubmit = (index) => {
    const answerKey = `answer-${index}`;
    const answer = formValues[answerKey];
   
    const updatedMisc = [...misc];
    updatedMisc[index].answer = answer;
    dispatch({ type: "SET_MISC", payload: updatedMisc });

    // Clear the answer input field
    setFormValues({ ...formValues, [answerKey]: "" });
  };

  return (
    <div className="misc-body">
      <h2>Questions and Notes</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="question"
          label="Question"
          value={formValues.question}
          className="question-list"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        style={{
          backgroundColor: 'hsl(94, 82%, 60%)',
          color: 'white',
          textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
          boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
        }}
        >
          Submit
        </Button>
        <br />
        <br />
        {isQuestionSubmitted && (
          <>
            <TextField
              name="answer"
              label="Answer"
              value={formValues.answer}
              onChange={handleChange}
              className="answer-list"
            />
            <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            style={{
              backgroundColor: 'hsl(94, 82%, 60%)',
              color: 'white',
              textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
              boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
            }}
            >
              Submit
            </Button>
          </>
        )}
        <br />
        <TextField
          name="notes"
          label="Notes"
          value={formValues.notes}
          onChange={handleChange}
          className="notes-list"
        />
        <br />
        <Button 
        type="submit"
        variant="contained" 
        color="primary"
        style={{
          backgroundColor: 'hsl(94, 82%, 60%)',
          color: 'white',
          textShadow: '1px 10px 20px rgba(5, 5, 5, 5)',
          boxShadow: '10px 10px 10px rgba(3, 3, 3, 1)'
        }}
        >
          Submit
        </Button>
        {misc.length > 0 && (
          <ul>
            <h2>Submitted Guest Information:</h2>

                {/* <button onClick={() => handleAnswerSubmit(index)}>Submit</button> */}
                {misc.map((item, index) => (
  <div key={index}>
    <p>Question: {item.question}</p>
    <p>Answer: {item.answer}</p>
    <input
      type="text"
      name={`answer-${index}`}
      value={formValues[`answer-${index}`] || ""}
      onChange={(event) => handleAnswerChange(event, index)}
    />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => handleAnswerSubmit(index)}
                  
               >
                  Submit Answer
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  
                  onClick={() => dispatch({ type: 'DELETE_MISC_INFO', payload: index })}
                >
                  Delete
                </Button>
                <hr />
              </div>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default Misc;

