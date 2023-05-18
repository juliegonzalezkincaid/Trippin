
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
    

    return (
        <div>

            <form>
                Description:
                <input
                    type="text"
                />

                Start Date:
                <input
                    type="date"
                />

                End Date:
                <input
                    type="date"
                />



            </form>



        </div>
    )
}

export default AddTrips;