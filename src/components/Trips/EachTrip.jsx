import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


function EachTrip() {

    const history = useHistory();
    const dispatch = useDispatch();

// pushes to the categories page
const showCategories = () => {
    history.push(`/categories/${props.trip.id}`);
};



return (


<li

    onClick={showCategories}>


</li>




);



};


export default EachTrip;