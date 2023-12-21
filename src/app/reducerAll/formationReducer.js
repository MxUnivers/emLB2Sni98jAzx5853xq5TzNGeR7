// reducer.js

import { FETCH_FAILED_FORMATIONS, FETCH_SEND_FORMATIONS, FETCH_SUCCESS_FORMATIONS } from "../actions";



const initialState = {
  formations: [],
  formations2: [],
};

export default function formationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_FORMATIONS:
      return { ...state, };
    case FETCH_SUCCESS_FORMATIONS:
      return { ...state, formations: action.payload, formations2: action.payload };
    case FETCH_FAILED_FORMATIONS:
      return { ...state, formations: action.payload, formations2: action.payload };
    default:
      return state;
  }
}