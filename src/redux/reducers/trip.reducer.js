const initialState = {
  entries: {
    flight: [],
    guest: [],
    lodging: [],
    suitcase: [],
    misc: [],
  },
  categories: [],
  currentTripId: null,
  userTrip: [],
  savedTrips: [],
  setFlightInfo: [],
  guestInfo: [],
  lodging: [],
  misc: [],
  trips: [],
  suitcase: [],
};

function tripReducer(state = initialState, action) {
  switch (action.type) {
    // Entry related actions
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

    // Category related actions
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload,
      };

    // Trip related actions
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
      console.log('DELETE_GUEST_INFO action:', action.payload);
      return {
        ...state,
        guestInfo: updatedGuestInfo,
      };

    case "DELETE_TRIP":
      const updatedUserTrips = state.userTrip.filter((trip) => trip.tripid !== action.payload);
      
      return {
        ...state,
        userTrip: updatedUserTrips,
      };

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

    case "UPDATE_TRIP_SUCCESS":
      return {
        ...state,
        userTrip: state.userTrip.map((trip) =>
          trip.id === action.payload.id
            ? {
                ...trip,
                ...action.payload,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
              }
            : trip
        ),
      };

    case "SET_FLIGHT_INFO":
      console.log('SET_FLIGHT_INFO action:', action.payload);
      return {
        ...state,
        setFlightInfo: [...state.setFlightInfo, action.payload],
      };

    case 'DELETE_FLIGHT_INFO':
      const updatedFlight = state.setFlightInfo.filter((_, index) => index !== action.payload);
      return {
        ...state,
        lodging: updatedFlight,
      };

    case 'ADD_GUEST_INFO':
      console.log('ADD_GUEST_INFO action:', action.payload);
      // Log the current state of guestInfo array
      console.log('Current guestInfo state:', state.guestInfo);
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
      const updatedLodging = state.lodging.filter((_, index) => index !== action.payload);
      return {
        ...state,
        lodging: updatedLodging,
      };

    case 'SET_MISC':
      console.log('SET_MISC action before:', state.misc);
      return {
        ...state,
        misc: [...state.misc, action.payload],
      };

    case 'DELETE_MISC_INFO':
      console.log('DELETE_MISC_INFO action before:', state.misc);
      const updatedMisc = state.misc.filter((_, index) => index !== action.payload);
      return {
        ...state,
        misc: updatedMisc,
      };

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

    case 'SET_BRING':
      console.log('SET_BRING action:', action.payload);
      return {
        ...state,
        suitcase: [...state.suitcase, action.payload],
      };

    case "DELETE_SUITCASE_INFO":
      console.log('DELETE_SUITCASE_INFO action before:', state.suitcase);
      const { index: deleteIndex } = action.payload;
      const updatedSuitcase = state.suitcase.filter((_, currentIndex) => currentIndex !== deleteIndex);
      return {
        ...state,
        suitcase: updatedSuitcase,
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








// const initialState = {
//    currentTripId: null,
//   userTrip: [],
//   savedTrips: [],
//   setFlightInfo: [],
//   guestInfo: [],
//   lodging: [],
//   misc: [],
//   trips: [],
//   suitcase: [],
//   categories: [],
//   entries: [],

// };

// function tripReducer(state = initialState, action) {
//   console.log(state.userTrip)
//   // log the current state of userTrip

//   switch (action.type) {

//     case 'SET_CATEGORIES':
//       console.log('SET_CATEGORIES action:', action.payload);
//       return {
//         ...state,
//         categories: action.payload,
//       };
//     case 'SET_ENTRIES':
//       console.log('SET_ENTRIES action:', action.payload);
//       return {
//         ...state,
//         entries: action.payload,
//       };

//     case "ADD_TRIP":
//       console.log('ADD_TRIP action:', action.payload);
//       return {
//         ...state,
//         userTrip: [
//           ...state.userTrip,
//           {
//             ...action.payload,
//             description: action.payload.description,
//             startDate: action.payload.startDate,
//             endDate: action.payload.endDate,
//           },
//         ],
//       };
//     case "DELETE_GUEST_INFO":
//       const updatedGuestInfo = state.guestInfo.filter((_, index) => index !== action.payload);
//       return {
//         ...state,
//         guestInfo: updatedGuestInfo,
//       };

//     case "DELETE_TRIP":

//       console.log("delete trip reducer", action.payload)
//       console.log("state in delete trip", state.userTrip)

//       const updatedUserTrips = state.userTrip.filter(
//         (trip) => trip.tripid !== action.payload
//       );
//       return {
//         ...state,
//         userTrip: updatedUserTrips,
//       };
   
//     case "EDIT_TRIP":
//   const { trip, index } = action.payload;
//   const updatedUserTrip = state.userTrip.map((t, i) => {
//     if (i === index) {
//       return {
//         ...t,
//         description: trip.description,
//         startDate: trip.startDate,
//         endDate: trip.endDate,
//       };
//     }
//     return t;
//   });
//   return {
//     ...state,
//     userTrip: updatedUserTrip,
//   };




//     case "GET_SAVED_TRIPS_SUCCESS":
//       return {
//         ...state,
//         savedTrips: action.payload,
//       };



//     case "SAVE_TRIP":
//       console.log('SAVE_TRIP action:', action.payload);
//       return {
//         ...state,
//         userTrip: [
//           ...state.userTrip,
//           {
//             ...action.payload,
//             description: action.payload.description,
//             startDate: action.payload.startDate,
//             endDate: action.payload.endDate,
//           },
//         ],
//       };

//      // Reducer for updating a trip
// case "UPDATE_TRIP_SUCCESS":
//   return {
//     ...state,
//     userTrip: state.userTrip.map((trip) =>
//       trip.id === action.payload.id
//         ? {
//             ...trip,
//             ...action.payload,
//             startDate: action.payload.startDate, // Set the start date property
//             endDate: action.payload.endDate, // Set the end date property
//           }
//         : trip
//     ),
//   }; 
//     case "SET_FLIGHT_INFO":
//       console.log('SET_FLIGHT_INFO action:', action.payload);

//       return {
//         ...state,
//         setFlightInfo: [...state.setFlightInfo, action.payload],
//       };
//     case 'DELETE_FLIGHT_INFO':
//       const updatedFlight = state.setFlightInfo.filter(
//         (_, index) => index !== action.payload
//       );
//       return {
//         ...state,
//         lodging: updatedFlight,
//       };

//     case 'ADD_GUEST_INFO':
//       return {
//         ...state,
//         guestInfo: [...state.guestInfo, action.payload],
//       };

//     case 'SET_GUEST_INFO':
//       console.log('SET_GUEST_INFO action:', action.payload);
//       return {
//         ...state,
//         guestInfo: action.payload,
//       };


//     case 'SET_LODGING':
//       console.log('SET_LODGING action:', action.payload);
//       return {
//         ...state,
//         lodging: [...state.lodging, action.payload],
//       };

//     case 'DELETE_LODGING_INFO':
//       const updatedLodging = state.lodging.filter(
//         (_, index) => index !== action.payload
//       );
//       return {
//         ...state,
//         lodging: updatedLodging,
//       };


//     case 'SET_MISC':
//       console.log('SET_MISC action before:', state.misc);

//       const newStateSetMisc = {
//         ...state,
//         misc: [...state.misc, action.payload],
//       };

//       console.log('SET_MISC action after:', newStateSetMisc.misc);

//       return newStateSetMisc;

//     case 'DELETE_MISC_INFO':
//       console.log('DELETE_MISC_INFO action before:', state.misc);

//       const updatedMisc = state.misc.filter((_, index) => index !== action.payload);
//       const newStateDeleteMisc = {
//         ...state,
//         misc: updatedMisc,
//       };

//       console.log('DELETE_MISC_INFO action after:', newStateDeleteMisc.misc);

//       return newStateDeleteMisc;

//     case "UPDATE_MISC_ITEM": {
//       const { index, newAnswer } = action.payload;
//       return {
//         ...state,
//         misc: state.misc.map((item, i) => i === index ? { ...item, answer: newAnswer } : item)
//       };
//     }



//     case 'SET_SUITCASE':
//       console.log('SET_SUITCASE action:', action.payload);
//       return {
//         ...state,
//         suitcase: [...state.suitcase, ...action.payload],
//       };

//     case 'SET_BRING':
//       console.log('SET_BRING action:', action.payload);

//       return {
//         ...state,
//         suitcase: [...state.suitcase, action.payload],
//       };
//       case "DELETE_SUITCASE_INFO":
//         console.log('DELETE_SUITCASE_INFO action before:', state.suitcase);
      
//         const { index: deleteIndex } = action.payload; 
//         const updatedSuitcase = state.suitcase.filter((_, currentIndex) => currentIndex !== deleteIndex); 
//         const newStateDeleteSuitcase = {
//           ...state,
//           suitcase: updatedSuitcase,
//         };
      
//         console.log('DELETE_SUITCASE_INFO action after:', newStateDeleteSuitcase.suitcase);
      
//         return newStateDeleteSuitcase;
      

//     case 'SET_DONT_BRING':
//       console.log('SET_DONT_BRING action:', action.payload);
//       return {
//         ...state,
//         suitcase: [...state.suitcase, action.payload],
//       };




//     default:
//       return state;
//   }
// }

// export default tripReducer;

