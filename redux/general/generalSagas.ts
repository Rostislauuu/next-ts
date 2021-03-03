import { all, call, put, take, takeLatest } from "redux-saga/effects";

import * as types from "./generalActionTypes";

export function mockApiCall(id: number) {
    console.log("Lets imagine this is api call", id)
 
    return id;
}

const requestAntiqueItem = (): number => 1;

export function* increaseCount() {
    yield put({ type: types.INCREASE_COUNT_SUCCESS });
};

export function* decreaseCount() {
    yield put({ type: types.DECREASE_COUNT_SUCCESS });
}

export function* multipleNumbers(a: number, b: number) {
    yield put({ type: types.MULTIPLE_NUMBERS, payload: a * b });
}

export function* getDataFromApi() {
    const data = yield call(mockApiCall, 1);

    yield put({ type: types.GET_DATA_SUCCESS, payload: data });
}

export function* getAntiqueItem() {
    yield take(types.GET_ANTIQUE_ITEM_REQUEST);
    yield put({ type: types.GET_ANTIQUE_ITEM_REQUEST_SUCCESS, payload: 1 });
}

export default function* generalSagas() {
    yield all([
        yield takeLatest(types.INCREASE_COUNT, increaseCount),
        yield takeLatest(types.DECREASE_COUNT, decreaseCount)
    ])
}