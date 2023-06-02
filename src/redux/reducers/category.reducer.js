const initialState = {
    categories: [],
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CATEGORIES_SUCCESS':
        return {
          ...state,
          categories: action.payload,
        };
  
      // Add other category-related actions here if needed
      case 'ADD_GUEST_INFO':
        return {
          ...state,
          guestInfo: action.payload,
        };
      
      default:
        return state;
    }
  };
  
  export default categoryReducer;
// const initialState = {
//     setCategories: [],
//     entries: {
//         flight: [],
//         guest: [],
//         lodging: [],
//         suitcase: [],
//         misc: [],
//     },
//   };


// const categoryReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_CATEGORIES':
//             console.log('SET_CATEGORIES:', action.payload);
//             return action.payload;

//             // case 'SET_FLIGHT_INFO':
//             //    return action.payload ;
          
//         default:
//             return state;
//     }
// }

// export default categoryReducer;