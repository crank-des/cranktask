import { State } from "./store";

export const ShowSelector = (s: State) => s.shows[s.showQuery] || [];

export const showQuerySelector = (s: State) => s.showQuery;
