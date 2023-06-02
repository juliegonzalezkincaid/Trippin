
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

// function TripDetails() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const { selected, categoryInputs } = useSelector((store) => store.trip);

//   useEffect(() => {
//     dispatch({ type: "FETCH_TRIP", payload: id });
//     dispatch({ type: "FETCH_CATEGORY_INPUTS", payload: selected.categories });
//   }, [dispatch, id, selected.categories]);

//   return (
//     <div>
//       <h1>{selected.title}</h1>
//       {/* Render other trip details */}
//       {/* Render category inputs */}
//       {categoryInputs.map((categoryInput) => (
//         <div key={categoryInput.id}>
//           <h2>{categoryInput.categoryName}</h2>
//           {/* Render input values */}
//           {categoryInput.inputs.map((input) => (
//             <div key={input.id}>
//               <p>
//                 {input.label}: {input.value}
//               </p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TripDetails;
