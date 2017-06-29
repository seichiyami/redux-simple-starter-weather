import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // concat creates new object, unlike push
      return [action.payload.data, ...state]; // ... -> take all objects in array
  }
  return state;
}
