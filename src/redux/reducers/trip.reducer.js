const initialState = {
  userTrip: [],
  savedTrips: [],
  setFlightInfo: [],
  guestInfo: [],
  lodging: [],
  misc: [],
  trips: [],
  suitcase: [],
  categories: [],
  entries: [],

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
    case "DELETE_GUEST_INFO":
      const updatedGuestInfo = state.guestInfo.filter((_, index) => index !== action.payload);
      return {
        ...state,
        guestInfo: updatedGuestInfo,
      };

    case "DELETE_TRIP":

      console.log("delete trip reducer", action.payload)
      console.log("state in delete trip", state.userTrip)

      const updatedUserTrips = state.userTrip.filter(
        (trip) => trip.tripid !== action.payload
      );
      return {
        ...state,
        userTrip: updatedUserTrips,
      };

    // case "EDIT_TRIP":
    //   const { trip, index } = action.payload;
    //   const updatedUserTrip = [...state.userTrip];
    //   updatedUserTrip[index] = {
    //     ...updatedUserTrip[index],
    //     description: trip.description,
    //     startDate: trip.startDate,
    //     endDate: trip.endDate,
    //   };
    //   return {
    //     ...state,
    //     userTrip: updatedUserTrip,
    //   };
    case "EDIT_TRIP":
  const { trip, index } = action.payload;
  const updatedUserTrip = state.userTrip.map((t, i) => {
    if (i === index) {
      return {
        ...t,
        description: trip.description,
        startDate: trip.startDate,
        endDate: trip.endDate,
      };
    }
    return t;
  });
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
    case 'DELETE_FLIGHT_INFO':
      const updatedFlight = state.setFlightInfo.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        lodging: updatedFlight,
      };

    case 'ADD_GUEST_INFO':
      return {
        ...state,
        guestInfo: [...state.guestInfo, action.payload],
      };

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
        lodging: [...state.lodging, action.payload],
      };

    case 'DELETE_LODGING_INFO':
      const updatedLodging = state.lodging.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        lodging: updatedLodging,
      };


    case 'SET_MISC':
      console.log('SET_MISC action before:', state.misc);

      const newStateSetMisc = {
        ...state,
        misc: [...state.misc, action.payload],
      };

      console.log('SET_MISC action after:', newStateSetMisc.misc);

      return newStateSetMisc;

    case 'DELETE_MISC_INFO':
      console.log('DELETE_MISC_INFO action before:', state.misc);

      const updatedMisc = state.misc.filter((_, index) => index !== action.payload);
      const newStateDeleteMisc = {
        ...state,
        misc: updatedMisc,
      };

      console.log('DELETE_MISC_INFO action after:', newStateDeleteMisc.misc);

      return newStateDeleteMisc;

    case "UPDATE_MISC_ITEM": {
      const { index, newAnswer } = action.payload;
      return {
        ...state,
        misc: state.misc.map((item, i) => i === index ? { ...item, answer: newAnswer } : item)
      };
    }



    case 'SET_SUITCASE':
      console.log('SET_SUITCASE action:', action.payload);
      return {
        ...state,
        suitcase: [...state.suitcase, ...action.payload],
      };

    case "DELETE_SUITCASE_INFO":
      const updatedSuitcase = state.suitcase.filter((_, index) => index !== action.payload);
      return {
        ...state,
        suitcase: updatedSuitcase,
      };

    case 'SET_BRING':
      console.log('SET_BRING action:', action.payload);

      return {
        ...state,
        suitcase: [...state.suitcase, action.payload],
      };


    case 'SET_DONT_BRING':
      console.log('SET_DONT_BRING action:', action.payload);
      return {
        ...state,
        suitcase: [...state.suitcase, action.payload],
      };




    default:
      return state;
  }
}

export default tripReducer;



