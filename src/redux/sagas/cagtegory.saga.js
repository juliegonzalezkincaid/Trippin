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
