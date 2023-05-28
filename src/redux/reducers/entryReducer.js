const initialState = {
    entries: [],
  };
  
  const entryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ENTRIES_SUCCESS':
        return {
          ...state,
          entries: action.payload,
        };
  
      case 'ADD_ENTRY_SUCCESS':
        return {
          ...state,
          entries: [...state.entries, action.payload],
        };
  
      case 'DELETE_ENTRY_SUCCESS':
        return {
          ...state,
          entries: state.entries.filter((entry) => entry.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default entryReducer;
  