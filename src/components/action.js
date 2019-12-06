export const FETCH_HOTEL_BEGIN = "FETCH_HOTEL_BEGIN";
export const FETCH_HOTEL_SUCCESS = "FETCH_HOTEL_SUCCESS";
export const FETCH_HOTEL_FAILURE = "FETCH_HOTEL_FAILURE";

export const fetchHotelBegin = () => ({
  type: FETCH_HOTEL_BEGIN
});

export const fetchHotelSuccess = hotelData => ({
  type: FETCH_HOTEL_SUCCESS,
  payload: hotelData
});

export const fetchHotelFailure = error => ({
  type: FETCH_HOTEL_FAILURE,
  payload: { error }
});

export default {
  fetchHotelBegin,
  fetchHotelSuccess,
  fetchHotelFailure
};
