
// CREATE TABLE "trip" (
//     "id" INTEGER PRIMARY KEY,
//     "user_id" INTEGER,
//     "description" VARCHAR,
//     "start_date" DATE,
//     "end_date" DATE
//     );
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AddTrips() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store);
   

    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    

    // stores input values into the held states 
    const changeDescription = (event) => {
        setDescription(event.target.value);
    };
    const changeStartDate = (event) => {
        setStartDate(event.target.value);
    };
    const changeEndDate = (event) => {
        setEndDate(event.target.value);
    };
    const handleSave = (event) => {
        event.preventDefault();
        
        const tripData = {
            userId: user.id,
            description,
            startDate,
            endDate,
          };
      
          dispatch({
            type: "ADD_TRIP",
            payload: tripData,
          });
      
          history.push(`/user`);
        };
     

        



    return (
        <div>

            <form>
                Description:
                <input
                    label="Description"
                    type="text"
                    onChange={changeDescription}

                />

                Start Date:
                <input
                    label="Start Date"
                    type="date"
                    onChange={changeStartDate}
                />

                End Date:
                <input
                    label="End Date"
                    type="date"
                    onChange={changeEndDate}
                />
                <button onClick={handleSave}>Save</button>

            </form>

        </div>
    )
}

export default AddTrips;

// const addToMyTrips = () => {
    //     description.length === 0 ||
    //         startDate.length === 0 ||
    //         endDate.length === 0 ||
    //         dispatch({
    //             type: 'AddTripSaga',
    //             payload: { description, startDate, endDate },
    //         }) && history.push('/');
    // };

   // if (id) {
        //     tripData.tripID = id;
        //     dispatch({
        //         type: "UPDATE_TRIP",
        //         payload: tripData
        //     });
        // } else {
        //     dispatch({
        //         type: "ADD_TRIP",
        //         payload: tripData
        //     });
        // }