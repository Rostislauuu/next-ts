import * as types from "./usersActionTypes";

export default function getUsersRequest(payload: any) {
    return {
        type: types.GET_USERS,
        payload
    }
};