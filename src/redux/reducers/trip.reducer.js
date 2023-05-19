const initialState = {
     userTrip: [],
     savedTrips: [],
  };

// const initialState = null;

  function tripReducer (state = initialState,action) {
    switch (action.type){
        case "GET_TRIP_USER":
            return {
                ...state,
                userTrip: [...state.userTrip, action.payload],
                
            };
            case "SAVE_TRIP":
      return {
        ...state,
        savedTrips: [...state.savedTrips, action.payload],
      };
            case "GET_SAVED_TRIPS":
      return {
        ...state,
        savedTrips: action.payload,
      };
            default:
        return state;
    }





  }

  export default tripReducer;