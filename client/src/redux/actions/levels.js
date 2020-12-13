import axios from 'axios';
import { LEVELS_LOADED } from './types';

// Load Levels
export const levels = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/levels');

    dispatch({
      type: LEVELS_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
