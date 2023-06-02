import {all, call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

function* fetchCategoriesAndEntries(action) {
  try {
    // Fetch categories
    const categoriesResponse = yield call(axios.get, '/api/categories');
    const categories = categoriesResponse.data;

    // Fetch entries associated with trips
    const entriesResponse = yield call(axios.get, '/api/entries');
    const entries = entriesResponse.data;

    yield put({ type: 'SET_CATEGORIES', payload: categories });
    yield put({ type: 'SET_ENTRIES', payload: entries });
  } catch (error) {
    console.log('Error fetching categories and entries:', error);
  }
}

function* watchFetchCategoriesAndEntries() {
  yield takeEvery('FETCH_CATEGORIES_ENTRIES', fetchCategoriesAndEntries);
}
function* saveTrip(action) {
  try {
    const userId = yield select((state) => state.user.id);
    const payload = { ...action.payload, userId };
    yield call(axios.post, "/api/trip/allSave", payload);
    yield put({ type: "SAVE_TRIP_SUCCESS", payload });
  } catch (error) {
    console.log("Error saving trip in saveTrip saga:", error);
    yield put({ type: "SAVE_TRIP_ERROR" });
  }
}

function* getSavedTrips(action) {
  try {
    console.log('getSavedTrips saga started');
    const response = yield call(axios.get, "/api/trip");
    yield put({ type: "GET_SAVED_TRIPS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("Error getting saved trips in getSavedTrips saga:", error);
    yield put({ type: "GET_SAVED_TRIPS_ERROR" });
  }
}

function* addTrip(action) {
  try {
    yield call(axios.post, "/api/trip", action.payload);
    yield put({ type: "GET_SAVED_TRIPS" });
  } catch (error) {
    console.log("Error adding trip:", error);
    yield put({ type: "ADD_TRIP_ERROR" });
  }
}
function* deleteTrip(action) {
  try {
    yield call(axios.delete, `/api/trip/${action.payload}`);
    yield put({ type: "DELETE_TRIP_SUCCESS", payload: action.payload });
    yield put({ type: "GET_SAVED_TRIPS" });
    //TODO YIELD PUT TO REFRESH TRIPS
  } catch (error) {
    console.log("Error deleting trip in deleteTrip saga:", error);
    yield put({ type: "DELETE_TRIP_ERROR" });
  }
}
export function* watchDeleteTrip() {
  yield takeLatest("DELETE_TRIP", deleteTrip);
}


function* editTrip(action) {
  try {
    const { id, ...data } = action.payload;
    console.log('id, data')
    yield call(axios.put, `/api/trip/edit/${id}`, data);
    yield put({ type: "EDIT_TRIP_SUCCESS", payload: action.payload });
  } catch (error) {
    console.log("Error editing trip in editTrip saga:", error);
    yield put({ type: "EDIT_TRIP_ERROR" });
  }
}

function* updateTrip(action) {
  try {
    const { id, ...data } = action.payload;
    console.log('Updating trip with ID:', id);
    console.log('Updated data:', data);
    // yield call(axios.put, `/api/trip/edit${id}`, data);
    yield call(axios.put, `/api/trip/edit/${action.payload.id}`, data);
    console.log('Trip updated successfully');
    yield put({ type: "UPDATE_TRIP_SUCCESS", payload: action.payload });
  } catch (error) {
    console.log("Error updating trip in updateTrip saga:", error);
    yield put({ type: "UPDATE_TRIP_ERROR", error });
  }
}

// Watcher saga
function* watchUpdateTrip() {
  yield takeLatest("UPDATE_TRIP", updateTrip);
}



function* tripSaga() {
  yield takeLatest("SAVE_TRIP", saveTrip);
  yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
  yield takeLatest("ADD_TRIP", addTrip);
  yield takeLatest("DELETE_TRIP", deleteTrip);
  yield takeLatest("EDIT_TRIP", editTrip);
  yield all([watchUpdateTrip()]);
  yield all ([watchFetchCategoriesAndEntries(),])
}

export default tripSaga;
// import {all, call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
// import axios from "axios";

// function* fetchCategoriesAndEntries(action) {
//   try {
//     // Fetch categories
//     const categoriesResponse = yield call(axios.get, '/api/categories');
//     const categories = categoriesResponse.data;
//     console.log('fetchCategoriesAndEntries saga categories:', categories);
    
//     // Fetch entries associated with trips
//     const entriesResponse = yield call(axios.get, '/api/entries');
//     const entries = entriesResponse.data;
//     console.log('fetchCategoriesAndEntries saga entries:', entries);
    
//     yield put({ type: 'SET_CATEGORIES', payload: categories });
//     yield put({ type: 'SET_ENTRIES', payload: entries });
//   } catch (error) {
//     console.log('Error fetching categories and entries:', error);
//   }
// }

// // function* watchFetchCategoriesAndEntries() {
// //   yield takeEvery('FETCH_CATEGORIES_ENTRIES', fetchCategoriesAndEntries);
// // }
// function* saveTrip(action) {
//   try {
//     const userId = yield select((state) => state.user.id);
//     const payload = { ...action.payload, userId };
//     yield call(axios.post, "/api/trip/allSave", payload);
//     console.log('saveTrip saga saved trip:', payload);
//     yield put({ type: "SAVE_TRIP_SUCCESS", payload });
//   } catch (error) {
//     console.log("Error saving trip in saveTrip saga:", error);
//     yield put({ type: "SAVE_TRIP_ERROR" });
//   }
// }

// function* getSavedTrips(action) {
//   try {
//     console.log('getSavedTrips saga started');
//     const response = yield call(axios.get, "/api/trip");
//     console.log('getSavedTrips saga response:', response.data);
//     yield put({ type: "GET_SAVED_TRIPS_SUCCESS", payload: response.data });
//   } catch (error) {
//     console.log("Error getting saved trips in getSavedTrips saga:", error);
//     yield put({ type: "GET_SAVED_TRIPS_ERROR" });
//   }
// }

// function* addTrip(action) {
//   try {
//     yield call(axios.post, "/api/trip", action.payload);
//     yield put({ type: "GET_SAVED_TRIPS" });
//   } catch (error) {
//     console.log("Error adding trip:", error);
//     yield put({ type: "ADD_TRIP_ERROR" });
//   }
// }
// function* deleteTrip(action) {
//   try {
//     yield call(axios.delete, `/api/trip/${action.payload}`);
//     yield put({ type: "DELETE_TRIP_SUCCESS", payload: action.payload });
//     yield put({ type: "GET_SAVED_TRIPS" });
//     //TODO YIELD PUT TO REFRESH TRIPS
//   } catch (error) {
//     console.log("Error deleting trip in deleteTrip saga:", error);
//     yield put({ type: "DELETE_TRIP_ERROR" });
//   }
// }
// // export function* watchDeleteTrip() {
// //   yield takeLatest("DELETE_TRIP", deleteTrip);
// // }


// function* editTrip(action) {
//   try {
//     const { id, ...data } = action.payload;
//     console.log('id, data')
//     yield call(axios.put, `/api/trip/edit/${id}`, data);
//     yield put({ type: "EDIT_TRIP_SUCCESS", payload: action.payload });
//   } catch (error) {
//     console.log("Error editing trip in editTrip saga:", error);
//     yield put({ type: "EDIT_TRIP_ERROR" });
//   }
// }

// function* updateTrip(action) {
//   try {
//     const { id, ...data } = action.payload;
//     console.log('Updating trip with ID:', id);
//     console.log('Updated data:', data);
//     // yield call(axios.put, `/api/trip/edit${id}`, data);
//     yield call(axios.put, `/api/trip/edit/${action.payload.id}`, data);
//     console.log('Trip updated successfully');
//     yield put({ type: "UPDATE_TRIP_SUCCESS", payload: action.payload });
//   } catch (error) {
//     console.log("Error updating trip in updateTrip saga:", error);
//     yield put({ type: "UPDATE_TRIP_ERROR", error });
//   }
// }

// // Watcher saga
// // function* watchUpdateTrip() {
// //   yield takeLatest("UPDATE_TRIP", updateTrip);
// // }
// // Watcher sagas
// function* watchFetchCategoriesAndEntries() {
//   yield takeEvery('FETCH_CATEGORIES_ENTRIES', fetchCategoriesAndEntries);
// }

// function* watchSaveTrip() {
//   yield takeLatest("SAVE_TRIP", saveTrip);
// }

// function* watchGetSavedTrips() {
//   yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
// }

// function* watchAddTrip() {
//   yield takeLatest("ADD_TRIP", addTrip);
// }

// function* watchDeleteTrip() {
//   yield takeLatest("DELETE_TRIP", deleteTrip);
// }

// function* watchEditTrip() {
//   yield takeLatest("EDIT_TRIP", editTrip);
// }

// function* watchUpdateTrip() {
//   yield takeLatest("UPDATE_TRIP", updateTrip);
// }


// function* tripSaga() {
//   yield takeLatest("SAVE_TRIP", saveTrip);
//   yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
//   yield takeLatest("ADD_TRIP", addTrip);
//   yield takeLatest("DELETE_TRIP", deleteTrip);
//   yield takeLatest("EDIT_TRIP", editTrip);
//   // yield all([watchUpdateTrip()]);
//   // yield all ([watchFetchCategoriesAndEntries(),])
//   yield all([
//     watchFetchCategoriesAndEntries(),
//     watchSaveTrip(),
//     watchGetSavedTrips(),
//     watchAddTrip(),
//     watchDeleteTrip(),
//     watchEditTrip(),
//     watchUpdateTrip(),
//   ]);
// }

// export default tripSaga;



// import { call, put, takeLatest, takeEvery, select} from "redux-saga/effects";
// import axios from "axios";

// function* getTripUser() {
//     try{
//         const response= yield call(axios.get,"/api/trip/user");
//         yield put({type:"GET_TRIP_USER",payload: response.data });
//     }catch (error) {
//         console.log("Error in tripsaga:", error);
//         yield put({type: "GET_TRIP_USER_ERROR"});
//     }
// }
// function* saveTrip(action) {
//   try {
//     const userId = yield select((state) => state.user.id);
//     const payload = { ...action.payload, userId }; // Change 'id' to 'userId' for consistency
//     yield call(axios.post, "/api/trip/allSave", payload);
//     yield put({ type: "SAVE_TRIP_SUCCESS", payload });
//   } catch (error) {
//     console.log("Error saving trip in saveTrip saga:", error);
//     yield put({ type: "SAVE_TRIP_ERROR" });
//   }
// }



//   function* getSavedTrips(action) {
//     try {
//       const response = yield call(axios.get, `/api/trip`);
//       yield put({ type: "GET_SAVED_TRIPS_SUCCESS", payload: response.data });
//     } catch (error) {
//       console.log("Error getting saved trips in getSavedTrips saga:", error);
//       yield put({ type: "GET_SAVED_TRIPS_ERROR" });
//     }
//   }
//   function* addTrip(action) {
//     try {
//       yield call(axios.post, "/api/trip", action.payload);
//       yield put.resolve({ type: "ADD_TRIP" });
//       yield put({ type: "GET_TRIP_USER" });
//     } catch (error) {
//       console.log("Error adding trip:", error);
//       yield put({ type: "ADD_TRIP_ERROR" });
//     }
//   }

//   function* getFlightInfo() {
//       try {
//         const response = yield call(axios.get, `/api/trip`);
//         yield put({ type: "GET_FLIGHT_INFO", payload: response.data });
//       } catch (error) {
//         console.log("Error getting saved flights in getFlightInfo saga:", error);
//         yield put({ type: "GET_FLIGHT_INFO_ERROR" });
//       }
    
// }







//   function* tripSaga() {
//     yield takeEvery("GET_TRIP_USER", function*(){
//         yield call(getTripUser);
//     })
//     yield takeLatest("SAVE_TRIP", saveTrip);
//     yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
//     yield takeLatest("ADD_TRIP", addTrip);
//     yield takeLatest("GET_FLIGHT_INFO", getFlightInfo);




// }


// export default tripSaga;