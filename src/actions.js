export const SHOWS_FETCH = "shows to be fetch";
export const SHOWS_FETCHED = "shows to  fetched";
export const showsFetchAction = (query) => ({
    type: SHOWS_FETCH,
    payload: query,
});
export const showsFetchedAction = (query, shows) => ({
    type: SHOWS_FETCHED,
    payload: { query, shows },
});
