import {
  FETCH_HOTEL_BEGIN,
  FETCH_HOTEL_SUCCESS,
  FETCH_HOTEL_FAILURE
  } from './action';

export const initialState = {
    hotels: [],
    loading: false,
    error: null
  };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTEL_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case FETCH_HOTEL_SUCCESS: {
        return {
            ...state,
            loading: false,
            hotels: action.payload
          };
    }

    case FETCH_HOTEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        hotels: []
      };

    default:
      return state;
  }
};

export default appReducer;