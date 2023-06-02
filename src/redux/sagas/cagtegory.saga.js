import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCategories(action) {
  try {
    const response = yield call(axios.get, '/api/categories');
    yield put({ type: 'FETCH_CATEGORIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error fetching categories:', error);
    yield put({ type: 'FETCH_CATEGORIES_ERROR' });
  }
}

// Add other category-related sagas here if needed

function* categorySaga() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories);
  // Add other category-related watchers here if needed
}

export default categorySaga;
// import { put, takeEvery } from 'redux-saga/effects';
// // import axios from 'axios';

// function* getCategories() {
//     try {
//         // const category = yield axios.get('/api/category');
//         yield put({ type: 'FETCH_CATEGORIES' });
//     } catch {
//         console.log('GET all categories error')
//     }
// }


// // function* setFlightInfo(action) {
// //     try {
// //       const response = yield axios.post('/api/category/flight_info', action.payload);
   
  
// //       // Dispatch the 'SET_FLIGHT_INFO' action with the modified or retrieved data
// //       yield put({ type: 'SET_FLIGHT_INFO', payload: action.payload });
// //     } catch {
// //       console.log('Error setting flight info');
// //     }
// //   }

// function* categorySaga() {
//     yield takeEvery('FETCH_CATEGORIES', getCategories);
//     // yield takeEvery('SET_FLIGHT_INFO', setFlightInfo);
// }

// export default categorySaga;