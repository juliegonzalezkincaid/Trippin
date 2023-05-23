const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.payload;

            case 'SET_FLIGHT_INFO':
               return action.payload ;
          
        default:
            return state;
    }
}

export default categoryReducer;