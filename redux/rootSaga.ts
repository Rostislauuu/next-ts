import { all } from "redux-saga/effects";

import generalSaga from "./general/generalSagas";

export default function* rootSaga() {
    yield all([
        generalSaga()
    ]);
};