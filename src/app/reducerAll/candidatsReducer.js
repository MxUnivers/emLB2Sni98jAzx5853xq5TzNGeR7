// reducer.js

import { FETCH_FAILED_PROFILES, FETCH_SEND_PROFILES, FETCH_SUCCESS_PROFILES } from "../actions";



const initialState = {
  candidats: [],
  candidats2: [],
};

export default function candidatsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_PROFILES:
      return { ...state, };
    case FETCH_SUCCESS_PROFILES:
      return { ...state, candidats: action.payload, candidats2: action.payload };
    case FETCH_FAILED_PROFILES:
      return { ...state, candidats: action.payload, candidats2: action.payload };
    default:
      return state;
  }
}