import { all, takeLatest } from "redux-saga/effects";

import * as types from "./usersActionTypes";

function* getUsers() {
    console.log("get users test")
};

export default function *usersSaga () {
    yield all([
        yield takeLatest (types.GET_USERS, getUsers)
    ])
};