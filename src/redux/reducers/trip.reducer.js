const initialState = {
  userTrip: [],
  savedTrips: [],
  setFlightInfo: [],
  guestInfo: [],
  lodging: [],
  misc: [],
  trips:[],
  suitCase:[],
  categories: [],
  entries: [],
  guestInfo: [],
};

function tripReducer(state = initialState, action) {
 console.log(state.userTrip) 
 // log the current state of userTrip
 
  switch (action.type) {
   
    case 'SET_CATEGORIES':
      console.log('SET_CATEGORIES action:', action.payload);
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_ENTRIES':
      console.log('SET_ENTRIES action:', action.payload);
     return {
        ...state,
        entries: action.payload,
      };

    case "ADD_TRIP":
      console.log('ADD_TRIP action:', action.payload);
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
    
     console.log("delete trip reducer", action.payload)
     console.log("state in delete trip",state.userTrip )

     const updatedUserTrips = state.userTrip.filter(
      (trip) => trip.tripid !== action.payload
    );
    return {
      ...state,
      userTrip: updatedUserTrips,
    };
   
  case "EDIT_TRIP":
    const { trip, index } = action.payload;
    const updatedUserTrip = [...state.userTrip];
    updatedUserTrip[index] = {
      ...updatedUserTrip[index],
      description: trip.description,
      startDate: trip.startDate,
      endDate: trip.endDate,
    };
    return {
      ...state,
      userTrip: updatedUserTrip,
    };

  

    case "GET_SAVED_TRIPS_SUCCESS":
      return {
        ...state,
        savedTrips: action.payload,
      };


   
    case "SAVE_TRIP":
      console.log('SAVE_TRIP action:', action.payload);
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
      console.log('SET_FLIGHT_INFO action:', action.payload);

      return {
        ...state,
        setFlightInfo: [...state.setFlightInfo, action.payload],
      };
      case 'ADD_GUEST_INFO':
        return {
          ...state,
          guestInfo: [...state.guestInfo, action.payload],
        };
        // case 'CLEAR_GUEST_INFO':
        //   return {
        //     ...state,
        //     guestInfo: null, // Clear the guestInfo state
          // };
    case 'SET_GUEST_INFO':
      console.log('SET_GUEST_INFO action:', action.payload);
      return {
        ...state,
        guestInfo: action.payload,
      };
    case 'SET_LODGING':
      console.log('SET_LODGING action:', action.payload);
        return {
          ...state,
          lodging:action.payload,
        };

    case 'SET_MISC':
      console.log('SET_MISC action:', action.payload);

          return {
            ...state,
            misc:action.payload,
          };

          case 'SET_SUITCASE':
            console.log('SET_SUITCASE action:', action.payload);

            return {
              ...state,
              suitCase:action.payload,
            };
    
 default:
      return state;
  }
}

export default tripReducer;

 // case "SAVE_TRIP":
    //   return {
    //     ...state,
    //     userTrip: [...state.userTrip, action.payload],
    //   };
 // return {
    //   ...state,
    //   userTrip: state.userTrip.filter((trip) => trip.id !== action.payload),
    // };
     // Filter out the trip with the specified tripID
    // Return the updated state with the filtered trips
    
    // return {
    //   ...state,
    //   userTrip: updatedUserTrips,
    // };

    // return {
    //   ...state,
    //   userTrip: state.userTrip.filter((trip) => trip.id !== action.payload),
    // };
   
  



  // case "EDIT_TRIP":
  //   return {
  //     ...state,
  //     userTrip: state.userTrip.map((trip) =>
  //       trip.id === action.payload.id ? action.payload : trip
  //     ),
  //   };
  // case "EDIT_TRIP":
  //   const { trip, index } = action.payload;
  //   const updatedUserTrip = [...state.userTrip];
  //   updatedUserTrip[index] = trip;
  //   return {
  //     ...state,
  //     userTrip: updatedUserTrip,
  //   };


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

