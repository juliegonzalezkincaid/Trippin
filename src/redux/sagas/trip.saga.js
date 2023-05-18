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

function* tripSaga() {
    yield takeEvery("GET_TRIP_USER", function*(){
        yield call(getTripUser);
    })
}



export default tripSaga;