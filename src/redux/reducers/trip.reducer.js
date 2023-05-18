const initialState = {
     userTrip: [],
    
  };

// const initialState = null;

  function tripReducer (state = initialState,action) {
    switch (action.type){
        case "GET_TRIP_USER":
            return {
                ...state,
                userTrip: [...state.userTrip, action.payload],
                
            }
            default:
        return state;
    }





  }

  export default tripReducer;