import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import "./Miscl.css";
import { Link } from "react-router-dom";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

function Misc() {
  const dispatch = useDispatch();
  const misc = useSelector((state) => state.trip.misc);

  React.useEffect(() => {
    console.log('formValues after misc update', formValues);
    [misc]
    console.log("updated misc: ", misc);
  }, [misc]);

  const [formValues, setFormValues] = useState({
    question: "",
    notes: "",
  });

  React.useEffect(() => {
    console.log("Updated formValues: ", formValues);
  }, [formValues]);

  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
    console.log('formValues after handleChange', formValues);
    console.log('misc state after handleChange', misc);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const { question } = formValues;
    dispatch({
      type: 'SET_MISC',
      payload: {
        question: formValues.question,
        answer: ''  // Default value if no answer is provided yet.
      }
    });
    setFormValues(prev => ({ ...prev, question: '' }));


    setIsQuestionSubmitted(false);
    console.log("handleSubmit misc after dispatch: ", misc);
    console.log('formValues after handleSubmit', formValues);
    console.log('misc state after handleSubmit', misc);
  };

  const [answers, setAnswers] = useState(Array(misc.length).fill(''));

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };
  const handleSubmitAnswer = (event, index) => {
    event.preventDefault();

    const updatedMisc = [...misc];
    updatedMisc[index] = {
      ...updatedMisc[index],
      answer: answers[index],
    };
    dispatch({ type: "UPDATE_MISC_ITEM", payload: { index, newAnswer: answers[index] } });


    const newAnswers = [...answers];
    newAnswers[index] = '';
    setAnswers(newAnswers);
  };

  const handleDelete = (index) => {
    console.log("handleDelete before dispatch: ", misc);
    dispatch({ type: "DELETE_MISC_INFO", payload: index });
    console.log("handleDelete after dispatch: ", misc);
    console.log('formValues after handleDelete', formValues);
    console.log('misc state after handleDelete', misc);
  };

  return (
    <div className="misc-body">
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
            color: "purple", 
            fontSize: 60,
            boxShadow: '9px 6px 8px 2px black'
          }} />
        </Button>
      </Link>

      <h2>Q & A</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="question"
          label="Question"
          value={formValues.question}
          className="question-list"
          onChange={handleChange}
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
              required
              margin="normal"
              InputProps={{
                style: {
                  color: 'coral',
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
            <Typography
              variant="h3"
              style={{ fontFamily: "Georgia", textShadow: '7px 1px 2px rgba(0, 0, 0, 0.8)', fontWeight: "bolder" }}>
              Submitted Guest Information
            </Typography>
            {misc.map((item, index) => (
              <div key={item.id} className="submitted-item" style={{ fontFamily: "Georgia" }}>
                <div>
                  <Typography
                    variant="h3"
                    style={{ fontFamily: "Georgia", fontSize: 30, textShadow: '4px 1px 2px rgba(4, 1, 0, 0.8)', fontSize: '30px', fontWeight: 'bold', color: '#00BFF2' }}>
                    <span className="label">Question:</span> <span className="content">{item.question}</span>
                  </Typography>
                  {item.answer && (
                    <Typography
                      style={{ fontFamily: "Georgia", 
                      textShadow: '4px 1px 2px rgba(0, 0, 0, 0.8)', fontSize: '30px', fontWeight: 'bold', color: 'beige' }}>
                      <span className="label">Answer:</span> <span className="content">{item.answer}</span>
                    </Typography>
                  )}
                </div>
                <div className="answer-input">
                  {!item.answer && (
                    <TextField
                      varient="h3"
                      type="text"
                      name={`answer-${index}`}
                      value={answers[index] || ""}
                      onChange={(event) => handleAnswerChange(event, index)}
                      style={{
                        fontFamily: "Georgia",
                        textShadow: '3px 1px 2px rgba(0, 0, 0, 0.8)',
                        fontSize: '30px',
                        fontWeight: 'bold', 
                        color: 'black',
                        backgroundColor: 'beige', 
                      }}
                    />
                  )}
                  {!item.answer && (
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={(event) => handleSubmitAnswer(event, index)}
                      style={{
                        backgroundColor: "secondary",
                        textShadow: '3px 1px 2px rgba(0, 0, 0, 0.8)',
                        boxShadow: "1px 10px 10px rgba(3, 3, 3, 1)",
                        fontFamily: "Georgia",
                        padding: "10px 20px",
                        width: '120px', // Set the width
        height: '50px',
                        marginRight: '10px',
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
                      textShadow: '3px 1px 2px rgba(0, 0, 0, 0.8)',
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
            // // };
            // const handleNotesSubmit = () => {
            //   console.log("handleNotesSubmit Form Values: ", formValues);
            //   setSubmittedNotes((prevSubmittedNotes) => [...prevSubmittedNotes, formValues.notes]);
            //   setFormValues((prevFormValues) => ({
            //     ...prevFormValues,
            //     notes: "",
            //   }));
            //   console.log("handleNotesSubmit misc after dispatch: ", misc);
            // };
