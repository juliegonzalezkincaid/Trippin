const initialState = {
     userTrip:[],
     savedTrips:[],
  };

// const initialState = null;

  function tripReducer (state = initialState,action) {
    switch (action.type){
        case "ADD_TRIP":
          return {
            ...state,
            userTrip: [...state.userTrip, action.payload],
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
          trip.id === action.payload.tripID ? action.payload : trip
        ),
      };
            default:
        return state;
    }







  }

  export default tripReducer;

  //       case "SAVE_TRIP":
      // return {
      //   ...state,
      //   savedTrips: [...state.savedTrips, action.payload],
      // };