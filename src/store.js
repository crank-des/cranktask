import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { rootsaga, sagaMiddleware } from "./saga";
const initialState = {
    shows: {},
    showQuery: "",
};
export const reducer = (state = initialState, action) => {
    console.log("reducer");
    switch (action.type) {
        case SHOWS_FETCHED:
            const { query, shows } = action.payload;
            return { ...state, shows: { ...state.shows, [query]: shows } };
        case SHOWS_FETCH:
            return { ...state, showQuery: action.payload };
        default:
            return state;
    }
};
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootsaga);
export default store;
