import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

// Category Sagas
function* fetchCategories(action) {
  try {
    const response = yield call(axios.get, '/api/categories');
    yield put({ type: 'FETCH_CATEGORIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error fetching categories:', error);
    yield put({ type: 'FETCH_CATEGORIES_ERROR' });
  }
}

// Entry Sagas
function* getEntries(action) {
  try {
    const response = yield call(axios.get, '/api/entry');
    yield put({ type: 'GET_ENTRIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error getting entries in getEntries saga:', error);
    yield put({ type: 'GET_ENTRIES_ERROR' });
  }
}

function* addEntry(action) {
  try {
    console.log('addEntry saga payload:', action.payload);
    const response = yield call(axios.post, '/api/entry', action.payload);
    yield put({ type: 'ADD_ENTRY_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error adding entry in addEntry saga:', error);
    yield put({ type: 'ADD_ENTRY_ERROR' });
  }
}

function* deleteEntry(action) {
  try {
    console.log('deleteEntry saga payload:', action.payload);
    yield call(axios.delete, `/api/entry/${action.payload}`);
    yield put({ type: 'DELETE_ENTRY_SUCCESS', payload: action.payload });
  } catch (error) {
    console.log('Error deleting entry in deleteEntry saga:', error);
    yield put({ type: 'DELETE_ENTRY_ERROR' });
  }
}

// Trip Sagas
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

function* saveTrip(action) {
  try {
    const userId = yield select((state) => state.user.id);
    const payload = { ...action.payload, userId };
    yield call(axios.post, "/api/trip/allSave", payload);
    yield put({ type: "SAVE_TRIP_SUCCESS", payload: { ...payload, startDate: payload.startDate, endDate: payload.endDate } });
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
    yield call(getSavedTrips); // Use call effect to wait for the getSavedTrips saga to complete
  } catch (error) {
    console.log("Error deleting trip in deleteTrip saga:", error);
    yield put({ type: "DELETE_TRIP_ERROR" });
  }
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

// Watchers
function* watchFetchCategoriesAndEntries() {
  yield takeLatest('FETCH_CATEGORIES_ENTRIES', fetchCategoriesAndEntries);
}

function* watchSaveTrip() {
  yield takeLatest("SAVE_TRIP", saveTrip);
}

function* watchGetSavedTrips() {
  yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
}

function* watchAddTrip() {
  yield takeLatest("ADD_TRIP", addTrip);
}

function* watchDeleteTrip() {
  yield takeLatest("DELETE_TRIP", deleteTrip);
}

function* watchEditTrip() {
  yield takeLatest("EDIT_TRIP", editTrip);
}

function* watchUpdateTrip() {
  yield takeLatest("UPDATE_TRIP", updateTrip);
}

function* tripSaga() {
  yield all([
    watchFetchCategoriesAndEntries(),
    watchSaveTrip(),
    watchGetSavedTrips(),
    watchAddTrip(),
    watchDeleteTrip(),
    watchEditTrip(),
    watchUpdateTrip(),
    takeLatest('FETCH_CATEGORIES', fetchCategories),
    takeLatest('GET_ENTRIES', getEntries),
    takeLatest('ADD_ENTRY', addEntry),
    takeLatest('DELETE_ENTRY', deleteEntry),
  ]);
}

export default tripSaga;










// import {all, call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
// import axios from "axios";

// function* fetchCategoriesAndEntries(action) {//generator function (saga) that is used to fetch categories and entries from an API and then dispatch actions to the Redux store with the received data.
//   try {
//     // Fetch categories
//     const categoriesResponse = yield call(axios.get, '/api/categories');
//     const categories = categoriesResponse.data;

//     // Fetch entries associated with trips
//     const entriesResponse = yield call(axios.get, '/api/entries');
//     const entries = entriesResponse.data;

//     yield put({ type: 'SET_CATEGORIES', payload: categories });
//     yield put({ type: 'SET_ENTRIES', payload: entries });
//   } catch (error) {
//     console.log('Error fetching categories and entries:', error);
//   }
// }

// function* watchFetchCategoriesAndEntries() {
//   yield takeEvery('FETCH_CATEGORIES_ENTRIES', fetchCategoriesAndEntries);
// }
// function* saveTrip(action) {
//   try {
//     const userId = yield select((state) => state.user.id);
//     const payload = { ...action.payload, userId };
//     yield call(axios.post, "/api/trip/allSave", payload);
//     yield put({ type: "SAVE_TRIP_SUCCESS", payload: { ...payload, startDate: payload.startDate, endDate: payload.endDate } });
//   } catch (error) {
//     console.log("Error saving trip in saveTrip saga:", error);
//     yield put({ type: "SAVE_TRIP_ERROR" });
//   }
// }

// function* getSavedTrips(action) {
//   try {
//     console.log('getSavedTrips saga started');
//     const response = yield call(axios.get, "/api/trip");
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
//     yield call(getSavedTrips); // Use call effect to wait for the getSavedTrips saga to complete
//   } catch (error) {
//     console.log("Error deleting trip in deleteTrip saga:", error);
//     yield put({ type: "DELETE_TRIP_ERROR" });
//   }
// }
// export function* watchDeleteTrip() {
//   yield takeLatest("DELETE_TRIP", deleteTrip);
// }


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
// function* watchUpdateTrip() {
//   yield takeLatest("UPDATE_TRIP", updateTrip);
// }



// function* tripSaga() {
//   yield takeLatest("SAVE_TRIP", saveTrip);
//   yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
//   yield takeLatest("ADD_TRIP", addTrip);
//   yield takeLatest("DELETE_TRIP", deleteTrip);
//   yield takeLatest("EDIT_TRIP", editTrip);
//   yield all([watchUpdateTrip()]);
//   yield all ([watchFetchCategoriesAndEntries(),])
// }

// export default tripSaga;
