// reducer.js

import { FETCH_FAILED_CANDIDATURES, FETCH_SEND_CANDIDATURES, FETCH_SUCCESS_CANDIDATURES } from "../actions";



const initialState = {
  candidatures: [],
  candidatures2: [],
};

export default function candidatureReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_CANDIDATURES:
      return { ...state, };
    case FETCH_SUCCESS_CANDIDATURES:
      return { ...state, candidatures: action.payload, candidatures2: action.payload };
    case FETCH_FAILED_CANDIDATURES:
      return { ...state, candidatures: action.payload, candidatures2: action.payload };
    default:
      return state;
  }
}