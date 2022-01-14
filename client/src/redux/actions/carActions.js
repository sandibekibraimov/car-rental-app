import axios from 'axios';
import { GET_CARS_FAIL, GET_CARS_REQUEST, GET_CARS_SUCCESS } from './types';

export const getAllCars = () => async (dispatch) => {
  dispatch({
    type: GET_CARS_REQUEST,
    payload: true,
  });

  try {
    const response = await axios.get('/api/cars/getallcars');
    dispatch({
      type: GET_CARS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CARS_FAIL,
      payload: error.message,
    });
  }
};
