import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import * as types from "../../redux/general/generalActionTypes";
import { 
    increaseCount,
    decreaseCount,
    multipleNumbers,
    getDataFromApi,
    mockApiCall,
    getAntiqueItem
} from "../../redux/general/generalSagas";
import generalReducer from "../../redux/general/generalReducer";

it("should dispatch DECREASE_COUNT_SUCCESS", () => {
    return expectSaga(decreaseCount)
        .put({ type: types.DECREASE_COUNT_SUCCESS })
        .run()
})

it("should multiple numbers", () => {
    return expectSaga(multipleNumbers, 10, 2)
        .put({ type: types.MULTIPLE_NUMBERS, payload: 20 })
        .run()
})

it("should increase by one", () => {
    return expectSaga(increaseCount)
    .put({ type: types.INCREASE_COUNT_SUCCESS })
    .withReducer(generalReducer)
    .hasFinalState({
        count: 1
    })
    .run()
})

it("test get data request", () => {
    return expectSaga(getDataFromApi)
        .provide(
            [matchers.call.fn(mockApiCall), 1],
        )
        .put({
            type: types.GET_DATA_SUCCESS,
            payload: 1
        })
        .run()
})

it("should dispatch get antique item success", () => {
    expectSaga(getAntiqueItem)
        .put({ type: types.GET_ANTIQUE_ITEM_REQUEST_SUCCESS, payload: 1 })
        .dispatch({ type: types.GET_ANTIQUE_ITEM_REQUEST })
        .run()
})