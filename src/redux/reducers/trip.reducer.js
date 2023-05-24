const initialState = {
  userTrip: [],
  savedTrips: [],
  setFlightInfo: [],
  guestInfo: [],
  lodging: [],
  misc: [],
  trips:[],
};

function tripReducer(state = initialState, action) {
  switch (action.type) {
    // case "ADD_TRIP":
    //   return {
    //     ...state,
    //     userTrip: [...state.userTrip, action.payload],
    //   };
    case "ADD_TRIP":
  return {
    ...state,
    userTrip: [
      ...state.userTrip,
      {
        ...action.payload,
        description: action.payload.description,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      },
    ],
  };


  case "DELETE_TRIP":
    // return {
    //   ...state,
    //   userTrip: state.userTrip.filter((trip) => trip.id !== action.payload),
    // };
     // Filter out the trip with the specified tripID
     const updatedUserTrips = state.userTrip.filter(
      (trip) => trip.tripID !== action.payload
    );
    // Return the updated state with the filtered trips
    return {
      ...state,
      userTrip: updatedUserTrips,
    };


  case "EDIT_TRIP":
    return {
      ...state,
      userTrip: state.userTrip.map((trip) =>
        trip.id === action.payload.id ? action.payload : trip
      ),
    };


    case "GET_SAVED_TRIPS_SUCCESS":
      return {
        ...state,
        savedTrips: action.payload,
      };

    case "UPDATE_TRIP":
      return {
        ...state,
        userTrip: state.userTrip.map((trip) =>
          trip.id === action.payload.id ? action.payload : trip
        ),
      };

    // case "SAVE_TRIP":
    //   return {
    //     ...state,
    //     userTrip: [...state.userTrip, action.payload],
    //   };
    case "SAVE_TRIP":
      return {
        ...state,
        userTrip: [
          ...state.userTrip,
          {
            ...action.payload,
            description: action.payload.description,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
          },
        ],
      };


    case "SET_FLIGHT_INFO":
      return {
        ...state,
        setFlightInfo: [...state.setFlightInfo, action.payload],
      };

      case 'SET_GUEST_INFO':
      return {
        ...state,
        guestInfo: action.payload,
      };
      case 'SET_LODGING':
        return {
          ...state,
          lodging:action.payload,
        };

        case 'SET_MISC':
          return {
            ...state,
            misc:action.payload,
          };
      


    default:
      return state;
  }
}

export default tripReducer;




// 

//      userTrip:[],
//      savedTrips:[],
//      setFlightInfo: [],
    
//   };


   
//      function tripReducer (state = initialState,action) {
//        switch (action.type){
//         case "ADD_TRIP":
//         return {
//         ...state,
//         userTrip: [...state.userTrip, action.payload],
//         };
         
//         case "GET_SAVED_TRIPS_SUCCESS":
//         return {
//           ...state,
//           savedTrips: action.payload,
//         };
   

//         case "UPDATE_TRIP":
//         return {
//         ...state,
//         userTrip: state.userTrip.map((trip) =>
//         trip.id === action.payload.tripID ? action.payload : trip
//         ),
//         };
        

//         case "SAVE_TRIP":
//         return {
//         ...state,
//         userTrip: [...state.userTrip, action.payload],
//         };
//       const initialState = null;

//        case "SET_FLIGHT_INFO":
//        return {
//        ...state,
//        setFlightInfo: [...state.setFlightInfo, action.payload],
//           };
  
  
//     default:
//     return state;
//     }
//   }

//   export default tripReducer;

  

  // function tripReducer (state = initialState,action) {
  //   switch (action.type){
  //       case "ADD_TRIP":
  //         return {
  //           ...state,
  //           userTrip: [...state.userTrip, action.payload],
  //         };
      
      //       case "GET_SAVED_TRIPS_SUCCESS":
      // return action.payload;

    //   const initialState = {
    //     userTrip:[],
    //     savedTrips:[],
    //  };
   
   // const initialState = null;

