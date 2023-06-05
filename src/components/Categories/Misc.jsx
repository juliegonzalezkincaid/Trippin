import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import "./Miscl.css";

function Misc() {
  const dispatch = useDispatch();
  const misc = useSelector((state) => state.trip.misc);
  const [submittedNotes, setSubmittedNotes] = useState([]);
  React.useEffect(() => {
    console.log("updated misc: ", misc);
  }, [misc]);
  const [formValues, setFormValues] = useState({
    question: "",
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


  const handleSubmit = (event, index) => {
    event.preventDefault();
    console.log("handleSubmit Form Values: ", formValues);
    const { question, answer } = formValues;

    if (isQuestionSubmitted) {
      // Handle answer submission
      const updatedMisc = [...misc];
      updatedMisc[index] = {
        ...updatedMisc[index],
        answer: answer,
      };
      dispatch({ type: "SET_MISC", payload: updatedMisc });
    } else {
      // Handle question submission
      dispatch({ type: "SET_MISC", payload: [...misc, formValues] });
      console.log("handleSubmit misc after dispatch: ", misc);
    }

    // Reset form values
    setFormValues({
      question: "",
      // answer: "",
      
    });

    // Reset question submission flag
    setIsQuestionSubmitted(false);
    console.log("handleSubmit misc after dispatch: ", misc);
  };

    const handleAnswerChange = (event, index) => {
    const { value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      answer: value,
    }));
    setIsQuestionSubmitted(true);
  };

  const handleDelete = (index) => {
    console.log("handleDelete before dispatch: ", misc);
    dispatch({ type: "DELETE_MISC_INFO", payload: index });
    console.log("handleDelete after dispatch: ", misc);
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
        {isQuestionSubmitted && (
          <div className="answer-section">
            <TextField
              name="answer"
              label="Answer"
              value={formValues.answer}
              onChange={handleChange}
              fullWidth
              style={{ fontFamily: "Georgia" }}
            />
          </div>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "hsl(94, 82%, 60%)",
            color: "white",
            textShadow: "1px 10px 20px rgba(5, 5, 5, 5)",
            boxShadow: "10px 10px 10px rgba(3, 3, 3, 1)",
            fontFamily: "Georgia",
          }}
        >
          Submit Question
        </Button>

        <br />
        <br />
        <br />

     

        {misc.length > 0 && (
          <div className="submitted-section">
            <Typography variant="h6" style={{ fontFamily: "Georgia" }}>
              Submitted Guest Information
            </Typography>

            {misc.map((itemArray, index) => (
              <div key={index} className="submitted-item" style={{ fontFamily: "Georgia" }}>
                {itemArray.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <Typography style={{ fontFamily: "Georgia" }}>
                      Question: {item.question}
                    </Typography>
                    {item.answer && (
                      <Typography style={{ fontFamily: "Georgia" }}>
                        Answer: {item.answer}
                      </Typography>
                    )}

                    <div className="answer-input">
                      {!item.answer && (
                        <TextField
                          type="text"
                          name={`answer-${index}`}
                          value={formValues[`answer-${index}`] || ""}
                          onChange={(event) => handleAnswerChange(event, index)}
                          style={{ fontFamily: "Georgia" }}
                        />
                      )}

                      {!item.answer && (
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          onClick={(event) => handleSubmit(event, index)}
                          style={{
                            textShadow: "1px 10px 20px rgba(8, 5, 5, 5)",
                            boxShadow: "1px 10px 10px rgba(3, 3, 3, 1)",
                            fontFamily: "Georgia",
                            padding: "10px 20px",
                          }}
                        >
                          Submit Answer
                        </Button>
                      )}

                      <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(index)}
                        style={{
                          textShadow: "1px 10px 20px rgba(8, 5, 5, 5)",
                          boxShadow: "1px 10px 10px rgba(3, 3, 3, 1)",
                          fontFamily: "Georgia",
                          padding: "10px 20px",
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          
          </div>
        )}
      </form>
    </div>
  );
}

export default Misc;


   {/* <div className="notes-section">
          <TextField
            name="notes"
            label="Notes"
            value={formValues.notes}
            onChange={handleNotesChange}
            className="notes-list"
            style={{ fontFamily: "Georgia" }}
          />
          <br />

          <Button
            type="button"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "hsl(94, 82%, 60%)",
              color: "white",
              textShadow: "1px 10px 20px rgba(5, 5, 5, 5)",
              boxShadow: "10px 10px 10px rgba(3, 3, 3, 1)",
              fontFamily: "Georgia",
            }}
            onClick={handleNotesSubmit}
          >
            Submit Notes
          </Button>
        </div> */}
          {/* {submittedNotes.length > 0 && (
              <div className="submitted-section">
                <Typography variant="h6" style={{ fontFamily: "Georgia" }}>
                  Submitted Notes:
                </Typography>

                <ul>
                  {submittedNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )} */}
            // const handleNotesChange = (event) => {
            //   const { name, value } = event.target;
            //   setFormValues((prevFormValues) => ({
            //     ...prevFormValues,
            //     [name]: value,
            //   }));
            // };
            const handleNotesSubmit = () => {
              console.log("handleNotesSubmit Form Values: ", formValues);
              setSubmittedNotes((prevSubmittedNotes) => [...prevSubmittedNotes, formValues.notes]);
              setFormValues((prevFormValues) => ({
                ...prevFormValues,
                notes: "",
              }));
              console.log("handleNotesSubmit misc after dispatch: ", misc);
            };
