import { all } from 'redux-saga/effects';

import desktopSaga from './desktop'


export default function* rootSaga() {
    yield all([
        ...desktopSaga
    ])
}