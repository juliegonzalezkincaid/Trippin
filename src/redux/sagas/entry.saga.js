import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

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
    const response = yield call(axios.post, '/api/entry', action.payload);
    yield put({ type: 'ADD_ENTRY_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error adding entry in addEntry saga:', error);
    yield put({ type: 'ADD_ENTRY_ERROR' });
  }
}

function* deleteEntry(action) {
  try {
    yield call(axios.delete, `/api/entry/${action.payload}`);
    yield put({ type: 'DELETE_ENTRY_SUCCESS', payload: action.payload });
  } catch (error) {
    console.log('Error deleting entry in deleteEntry saga:', error);
    yield put({ type: 'DELETE_ENTRY_ERROR' });
  }
}

function* entrySaga() {
  yield takeLatest('GET_ENTRIES', getEntries);
  yield takeLatest('ADD_ENTRY', addEntry);
  yield takeLatest('DELETE_ENTRY', deleteEntry);
}

export default entrySaga;

// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// function* getEntries(action) {
//   try {
//     const response = yield call(axios.get, '/api/entry');
//     console.log('getEntries saga response:', response.data);
//     yield put({ type: 'GET_ENTRIES_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.log('Error getting entries in getEntries saga:', error);
//     yield put({ type: 'GET_ENTRIES_ERROR' });
//   }
// }

// function* addEntry(action) {
//   try {
//     const response = yield call(axios.post, '/api/entry', action.payload);
//     console.log('addEntry saga response:', response.data);
//     yield put({ type: 'ADD_ENTRY_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.log('Error adding entry in addEntry saga:', error);
//     yield put({ type: 'ADD_ENTRY_ERROR' });
//   }
// }

// function* deleteEntry(action) {
//   try {
//     yield call(axios.delete, `/api/entry/${action.payload}`);
//     console.log('deleteEntry saga deleted entry ID:', action.payload);
//     yield put({ type: 'DELETE_ENTRY_SUCCESS', payload: action.payload });
//   } catch (error) {
//     console.log('Error deleting entry in deleteEntry saga:', error);
//     yield put({ type: 'DELETE_ENTRY_ERROR' });
//   }
// }

// function* entrySaga() {
//   yield takeLatest('GET_ENTRIES', getEntries);
//   yield takeLatest('ADD_ENTRY', addEntry);
//   yield takeLatest('DELETE_ENTRY', deleteEntry);
// }

// export default entrySaga;
