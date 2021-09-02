import { fork } from 'redux-saga/effects';
import { Watchers } from './sagas';

function* rootSaga() {
  yield fork(Watchers);
}

export default rootSaga;
