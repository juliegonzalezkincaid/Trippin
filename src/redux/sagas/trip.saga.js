import { call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

function* getTripUser() {
    try{
        const response= yield call(axios.get,"/api/trip/user");
        yield put({type:"GET_TRIP_USER",payload: response.data });
    }catch (error) {
        console.log("Error in tripsaga:", error);
        yield put({type: "GET_TRIP_USER"});
    }
}


function* saveTrip(action) {
    try {
      const userId = yield select(state => state.user.id);
      const payload = { ...action.payload, id: userId };
      yield call(axios.post, "/api/trip/allSave", payload);
      yield put({ type: "SAVE_TRIP_SUCCESS", payload });
    } catch (error) {
      console.log("Error saving TRIP in tripsaga:", error);
      yield put({ type: "SAVE_RECIPE_ERROR" });
    }
  }
  function* getSavedTrips(action) {
    try {
      const response = yield call(axios.get, `/api/trip/userSavedTrip/${action.payload}`);
      yield put({ type: "GET_SAVED_TRIP", payload: response.data });
    } catch (error) {
      console.log("Error getting saved trips in getSavedTrips saga:", error);
      yield put({ type: "GET_SAVED_TRIP_ERROR" });
    }
  }







  function* tripSaga() {
    yield takeEvery("GET_TRIP_USER", function*(){
        yield call(getTripUser);
    })
    yield takeLatest("SAVE_TRIP", saveTrip);
    yield takeLatest("GET_SAVED_TRIP", getSavedTrips);




}


export default tripSaga;