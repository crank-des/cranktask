import createSagaMiddleware from "redux-saga";
import { showsFetchedAction, SHOWS_FETCH } from "./actions";
import { call, put, takeLatest, delay, } from "@redux-saga/core/effects";
import { getShow } from "./api";
export const sagaMiddleware = createSagaMiddleware();
export function* fetchShowSaga(action) {
    delay(500);
    if (!action.payload) {
        return;
    }
    console.log("fetch Show saga called");
    const query = action.payload;
    const data = yield call(getShow, query);
    yield put(showsFetchedAction(query, data));
}
export function* rootsaga() {
    console.log("rootsaga called");
    yield takeLatest(SHOWS_FETCH, fetchShowSaga);
}
