import { call, put, takeLatest, takeEvery} from "redux-saga/effects";
import axios from "axios";

function* getTripUser() {
    try{
        const response= yield call(axios.get,"/api/trip/user");
        yield put({type:"GET_TRIP_USER",payload: response.data });
    }catch (error) {
        console.log("Error in tripsaga:", error);
        yield put({type: "GET_TRIP_USER_ERROR"});
    }
}


// functio* saveTrip(action) {
//     try {
//       const userId = yield select(state => state.user.id);
//       const payload = { ...action.payload, id: userId };
//       yield call(axios.post, "/api/trip/allSave", payload);
//       yield put({ type: "SAVE_TRIP_SUCCESS", payload });
//     } catch (error) {
//       console.log("Error saving TRIP in tripsaga:", error);
//       yield put({ type: "SAVE_TRIP_ERROR" });
//     }
//   }
  function* getSavedTrips(action) {
    try {
      const response = yield call(axios.get, `/api/trip/userSavedTrips/${action.payload}`);
      yield put({ type: "GET_SAVED_TRIPS_SUCCESS", payload: response.data });
    } catch (error) {
      console.log("Error getting saved trips in getSavedTrips saga:", error);
      yield put({ type: "GET_SAVED_TRIPS_ERROR" });
    }
  }
  function* addTrip(action) {
    try {
      yield call(axios.post, "/api/trip", action.payload);
      yield put({ type: "ADD_TRIP" });
      yield put({ type: "GET_TRIP_USER" });
    } catch (error) {
      console.log("Error adding trip:", error);
      yield put({ type: "ADD_TRIP_ERROR" });
    }
  }







  function* tripSaga() {
    yield takeEvery("GET_TRIP_USER", function*(){
        yield call(getTripUser);
    })
    // yield takeLatest("SAVE_TRIP", saveTrip);
    yield takeLatest("GET_SAVED_TRIPS", getSavedTrips);
    yield takeLatest("ADD_TRIP", addTrip);
   




}


export default tripSaga;