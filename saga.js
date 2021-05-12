import { all, call,  put, takeEvery } from 'redux-saga/effects';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  //call tells the middleware to invoke the (function, ...args)
  yield call(delay, 1000)
  // put dispatches the arg to the redux store
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
  console.log('Hello world!')
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ])
}

