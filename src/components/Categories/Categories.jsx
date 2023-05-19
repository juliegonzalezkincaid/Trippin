import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';



function Categories () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selectedRecipe } = useSelector((store) => store.recipe);
    const { user } = useSelector((store) => store);
  







    return (
        <>
        <form>
        <li><Link>Guests Info</Link></li>
        <br />
        <li><Link>Flight Info</Link></li>
        <br />
        <li><Link>Lodging</Link></li>
        <br />
        <li><Link>What to bring</Link></li>
        <br />
        <li><Link>Q&A, Notes</Link></li>
        <br />
        
        </form>
        
        
        
        
        
        </>
    )



}// ends Categories function

export default Categories;