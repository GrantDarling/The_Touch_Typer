import axios from 'axios';
import { LEVELS_LOADED } from './types';

// Load Levels
export const loadLevels = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/levels');

    dispatch({
      type: LEVELS_LOADED,
      PAYLOAD: res.data,
    });
  } catch (error) {
    alert('levels failed to load. giving error: ' + error);
  }
};
