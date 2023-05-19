
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
    

    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState ('');
    const [endDate, setEndDate]= useState ('');

    const addToMyTrips = () => {
        description.length === 0 ||
        startDate.length === 0 ||
        endDate.length === 0 ||
        dispatch ({
            type: 'AddTripSaga',
            payload: {description, startDate, endDate},
        }) &&history.push('/');
    };

    // stores input values into the held states 
    const changeDescription= (event) =>{
        setDescription(event.target.value);
    };
    const changeStartDate= (event) =>{
        setStartDate(event.target.value);
    };
    const changeEndDate= (event) =>{
        setEndDate(event.target.value);
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
<button
    onClick={addToMyTrips}>
    Save
</button>



            </form>



        </div>
    )
}

export default AddTrips;