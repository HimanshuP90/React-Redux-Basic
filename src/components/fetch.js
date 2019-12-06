import {
  fetchHotelBegin,
  fetchHotelSuccess,
  fetchHotelFailure
} from "./action";

export function fetchHotels(API_URL) {
  return dispatch => {
    dispatch(fetchHotelBegin());
    return fetch(API_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchHotelSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchHotelFailure(error)));
  };
}

// Handle HTTP errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
