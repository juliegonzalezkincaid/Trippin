
const initialState = {
  entries: {
    flight: [],
    guest: [],
    lodging: [],
    suitcase: [],
    misc: [],
  },
};


const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ENTRIES_SUCCESS':
      console.log('GET_ENTRIES_SUCCESS action:', action.payload);
      return {
        ...state,
        entries: action.payload,
      };

    case 'ADD_ENTRY_SUCCESS':
      console.log('ADD_ENTRY_SUCCESS action:', action.payload);
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case 'DELETE_ENTRY_SUCCESS':
      console.log('DELETE_ENTRY_SUCCESS action:', action.payload);
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.payload),
      };
      
      case 'ADD_GUEST_INFO':
  return {
    ...state,
    guestInfo: action.payload,
  };


    default:
      return state;
  }
};

export default entryReducer;