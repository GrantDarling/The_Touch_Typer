import { LEVELS_LOADED } from '../actions/types';

const initialState = [];

export default function loadLevels(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LEVELS_LOADED:
      return [...state, ...payload];
    default:
      return state;
  }
}
