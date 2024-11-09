import { composeWithDevTools } from "@redux-devtools/extension";

import { AnyAction, applyMiddleware, createStore, Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { Shows } from "./Models/Shows";
import { rootsaga, sagaMiddleware } from "./saga";

export type State = {
  shows: { [q: string]: Shows };
  showQuery: string;
};
const initialState: State = {
  shows: {},
  showQuery: "",
};

export const reducer: Reducer<State> = (
  state = initialState,
  action: AnyAction
) => {
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

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootsaga);

export default store;
