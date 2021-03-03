import * as types from "./generalActionTypes";

export const increaseCount = () => ({
    type: types.INCREASE_COUNT
});

export const decreaseCount = () => ({
    type: types.DECREASE_COUNT
});