import {
  GET_CARS_FAIL,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
} from '../actions/types';

const initialState = {
  list: [],
  loading: true,
  error: null,
};

const carReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
        error: null,
      };

    case GET_CARS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default carReducer;
