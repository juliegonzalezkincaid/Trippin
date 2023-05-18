const initialState = {
     userTrip: [],
    
  };
  function tripReducer (state = initialState,action) {
    switch (action.type){
        case "GET_TRIP_USER":
            return {
                ...state,
                userTrip: [...state.userTrip, action.payload],
            };
    }





  }

  export default tripReducer;